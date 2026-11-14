import { NextRequest, NextResponse } from "next/server";
import {
  FIELD_ERROR_MESSAGE,
  PLAYBOOK_COOKIE,
  type FieldErrorCode,
  isHoneypotTripped,
  storePlaybookLead,
  validatePlaybookLead,
} from "@/lib/playbook";

/**
 * Map Pack Playbook lead form.
 * Reuses the CRM intake documented in lib/playbook.ts (same contract as
 * /api/submit-lead). Does not send email.
 */
export async function POST(request: NextRequest) {
  const payload = await readPayload(request);
  if (!payload) {
    return fail(request, "name", 400);
  }

  if (isHoneypotTripped(text(payload.bippibot_hp))) {
    console.info(JSON.stringify({ event: "playbook_lead_dropped", reason: "honeypot" }));
    return succeed(request, []);
  }

  const validated = validatePlaybookLead({
    firstName: text(payload.first_name),
    email: text(payload.email),
    businessName: text(payload.business_name),
  });

  if (!validated.ok) {
    return fail(request, validated.code, 400);
  }

  const stored = await storePlaybookLead(validated.lead);
  if (!stored.ok) {
    return fail(request, "store", 502);
  }

  return succeed(request, stored.destinations);
}

function text(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function wantsJson(request: NextRequest): boolean {
  return (request.headers.get("content-type") || "").includes("application/json");
}

async function readPayload(request: NextRequest): Promise<Record<string, unknown> | null> {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) return null;
    return body as Record<string, unknown>;
  }

  const form = await request.formData().catch(() => null);
  if (!form) return null;
  const record: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") record[key] = value;
  }
  return record;
}

function fail(request: NextRequest, code: FieldErrorCode, status: number) {
  const message = FIELD_ERROR_MESSAGE[code];
  if (wantsJson(request)) {
    return NextResponse.json({ ok: false, error: message, code }, { status });
  }
  const url = new URL("/map-pack-playbook", request.nextUrl.origin);
  url.searchParams.set("error", code);
  url.hash = "playbook-form";
  return NextResponse.redirect(url, 303);
}

function succeed(request: NextRequest, stored: string[]) {
  const response = wantsJson(request)
    ? NextResponse.json({ ok: true, stored }, { status: 201 })
    : NextResponse.redirect(new URL("/map-pack-playbook/thanks", request.nextUrl.origin), 303);

  response.cookies.set(PLAYBOOK_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    path: "/map-pack-playbook",
    maxAge: 60 * 60 * 24 * 14,
  });
  return response;
}
