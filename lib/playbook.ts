import { appendFile, mkdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

/**
 * Lead storage for The Map Pack Playbook.
 *
 * Production path (already used by the newsletter and real-estate forms):
 *   CRM_API_URL + CRM_API_KEY
 *   POST {CRM_API_URL}/api/leads/intake
 *   Header: x-api-key
 *   The CRM writes the row into its own Postgres `leads` table.
 *   Both variables are already set on the Railway `bippibot-site` service.
 *   No email is sent.
 *
 * Optional extra sinks, used only when the variable is set on this service:
 *   DATABASE_URL      Insert into `playbook_leads` (table is created if missing).
 *                     The site service does not have this set. Prefer the CRM.
 *   LEAD_WEBHOOK_URL  POST the lead JSON to an http(s) URL you already run.
 *
 * Local / unconfigured fallback (none of the above are set):
 *   Append one JSON line to PLAYBOOK_LEADS_FILE, or
 *   {tmpdir}/bippibot-playbook-leads.jsonl
 *   and write the same lead to the server log.
 *
 * Every accepted lead is logged as a single JSON line (`event: playbook_lead`),
 * including the Railway deploy logs. Those lines contain the name and email.
 *
 * Download file:
 *   Default: /downloads/map-pack-playbook.pdf
 *            (public/downloads/map-pack-playbook.pdf — placeholder until swapped)
 *   Override: PLAYBOOK_URL
 */

export const PLAYBOOK_SOURCE = "Map Pack Playbook";
export const PLAYBOOK_COOKIE = "bb_playbook_download";
export const DEFAULT_PLAYBOOK_PATH = "/downloads/map-pack-playbook.pdf";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type PlaybookLead = {
  firstName: string;
  email: string;
  businessName: string | null;
};

export type FieldErrorCode = "name" | "email" | "business" | "store";

export const FIELD_ERROR_MESSAGE: Record<FieldErrorCode, string> = {
  name: "Enter your first name.",
  email: "Enter a valid email address.",
  business: "Business name needs to be 120 characters or fewer.",
  store: "We couldn't save that just now. Try again, or email support@bippibot.com.",
};

export function fieldErrorMessage(code: string | undefined): string | undefined {
  if (!code) return undefined;
  if (code in FIELD_ERROR_MESSAGE) return FIELD_ERROR_MESSAGE[code as FieldErrorCode];
  return undefined;
}

export function playbookDownloadUrl(): string {
  const fromEnv = process.env.PLAYBOOK_URL?.trim();
  return fromEnv || DEFAULT_PLAYBOOK_PATH;
}

export function playbookLeadFile(): string {
  return process.env.PLAYBOOK_LEADS_FILE?.trim() || path.join(os.tmpdir(), "bippibot-playbook-leads.jsonl");
}

export function isHoneypotTripped(value: string): boolean {
  return value.trim().length > 0;
}

export function validatePlaybookLead(input: {
  firstName: string;
  email: string;
  businessName: string;
}): { ok: true; lead: PlaybookLead } | { ok: false; code: FieldErrorCode } {
  const firstName = cleanText(input.firstName, 80);
  if (!firstName) return { ok: false, code: "name" };

  const email = input.email.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { ok: false, code: "email" };
  }

  const business = input.businessName.trim().replace(/\s+/g, " ");
  if (business.length > 120 || (business && hasControlChar(business))) {
    return { ok: false, code: "business" };
  }

  return {
    ok: true,
    lead: {
      firstName,
      email,
      businessName: business || null,
    },
  };
}

export async function storePlaybookLead(lead: PlaybookLead): Promise<{ ok: true; destinations: string[] } | { ok: false }> {
  const jobs: { name: string; run: () => Promise<void> }[] = [];
  const errors: string[] = [];

  const crmUrl = process.env.CRM_API_URL?.trim() ?? "";
  const crmKey = process.env.CRM_API_KEY?.trim() ?? "";
  const databaseUrl = process.env.DATABASE_URL?.trim() ?? "";
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim() ?? "";
  const crmRequested = Boolean(process.env.CRM_API_URL || process.env.CRM_API_KEY);

  if (crmRequested) {
    if (crmUrl && crmKey && isHttpUrl(crmUrl)) {
      jobs.push({ name: "crm", run: () => postToCrm(lead, crmUrl, crmKey) });
    } else {
      errors.push("crm: set both CRM_API_URL (http or https) and CRM_API_KEY");
    }
  }

  if (databaseUrl) {
    jobs.push({ name: "postgres", run: () => insertPostgres(lead, databaseUrl) });
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    if (webhookUrl && isHttpUrl(webhookUrl)) {
      jobs.push({ name: "webhook", run: () => postToWebhook(lead, webhookUrl) });
    } else {
      errors.push("webhook: LEAD_WEBHOOK_URL must be an http or https URL");
    }
  }

  const destinations: string[] = [];

  if (jobs.length === 0 && errors.length === 0) {
    try {
      await appendLocalLead(lead);
      destinations.push("file");
    } catch (error) {
      errors.push(`file: ${errorMessage(error)}`);
    }
  } else {
    const results = await Promise.allSettled(jobs.map((job) => job.run()));
    results.forEach((result, index) => {
      const name = jobs[index]?.name ?? "store";
      if (result.status === "fulfilled") destinations.push(name);
      else errors.push(`${name}: ${errorMessage(result.reason)}`);
    });
  }

  const entry = {
    event: destinations.length > 0 ? "playbook_lead" : "playbook_lead_failed",
    first_name: lead.firstName,
    email: lead.email,
    business_name: lead.businessName,
    source: PLAYBOOK_SOURCE,
    stored: destinations,
    errors,
    at: new Date().toISOString(),
  };

  if (destinations.length > 0) console.info(JSON.stringify(entry));
  else console.error(JSON.stringify(entry));

  if (destinations.length === 0) return { ok: false };
  return { ok: true, destinations };
}

function cleanText(value: string, max: number): string | null {
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (!trimmed || trimmed.length > max || hasControlChar(trimmed)) return null;
  return trimmed;
}

function hasControlChar(value: string): boolean {
  return /[\u0000-\u001F\u007F]/.test(value);
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "unknown error";
}

function leadBody(lead: PlaybookLead) {
  return {
    first_name: lead.firstName,
    email: lead.email,
    source: PLAYBOOK_SOURCE,
    notes: lead.businessName ? `Business: ${lead.businessName}` : null,
    custom_fields: {
      business_name: lead.businessName,
      offer: "The Map Pack Playbook",
      alt_name: "The Insiders Stack",
    },
  };
}

async function postToCrm(lead: PlaybookLead, crmUrl: string, crmKey: string) {
  const response = await fetch(`${crmUrl.replace(/\/$/, "")}/api/leads/intake`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": crmKey },
    body: JSON.stringify(leadBody(lead)),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`status ${response.status} ${detail.slice(0, 180)}`.trim());
  }
}

async function postToWebhook(lead: PlaybookLead, webhookUrl: string) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadBody(lead)),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`status ${response.status}`);
  }
}

async function insertPostgres(lead: PlaybookLead, databaseUrl: string) {
  const { Client } = await import("pg");
  const client = new Client({ connectionString: databaseUrl });
  await client.connect();
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS playbook_leads (
      id bigserial PRIMARY KEY,
      first_name text NOT NULL,
      email text NOT NULL,
      business_name text,
      source text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )`);
    await client.query(
      `INSERT INTO playbook_leads (first_name, email, business_name, source)
       VALUES ($1, $2, $3, $4)`,
      [lead.firstName, lead.email, lead.businessName, PLAYBOOK_SOURCE],
    );
  } finally {
    await client.end();
  }
}

async function appendLocalLead(lead: PlaybookLead) {
  const file = playbookLeadFile();
  await mkdir(path.dirname(file), { recursive: true });
  const line =
    JSON.stringify({
      first_name: lead.firstName,
      email: lead.email,
      business_name: lead.businessName,
      source: PLAYBOOK_SOURCE,
      at: new Date().toISOString(),
    }) + "\n";
  await appendFile(file, line, "utf8");
}
