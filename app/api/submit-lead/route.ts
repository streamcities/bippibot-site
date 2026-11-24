import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side proxy from the public website's forms into the BippiBot CRM's
 * lead-intake webhook. Keeps the CRM's API key out of client-side JS —
 * only this server route ever sees it, via the CRM_API_URL / CRM_API_KEY
 * environment variables set in Railway.
 *
 * Expected JSON body (all optional except first_name):
 * { first_name, last_name, email, phone, source, notes, custom_fields }
 */
export async function POST(req: NextRequest) {
  const crmUrl = process.env.CRM_API_URL;
  const crmKey = process.env.CRM_API_KEY;

  if (!crmUrl || !crmKey) {
    return NextResponse.json(
      { error: "CRM connection is not configured yet." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.first_name !== "string" || !body.first_name.trim()) {
    return NextResponse.json({ error: "first_name is required" }, { status: 400 });
  }

  // The Social on Steroids free listing kit form requires photo-rights consent.
  // Record it server-side with the server's own timestamp so the CRM copy is authoritative.
  if (body.custom_fields?.form === "sos-free-listing-kit") {
    if (body.custom_fields.photo_consent !== true) {
      return NextResponse.json(
        { error: "Please confirm you have the rights to the listing photos and details." },
        { status: 400 }
      );
    }
    const at = new Date().toISOString();
    body.custom_fields.photo_consent_at = at;
    if (typeof body.notes === "string") {
      body.notes = body.notes.replace(/^Photo consent: .*$/m, "").trimEnd();
    }
    body.notes = `${body.notes ? `${body.notes}\n` : ""}Photo consent: yes (${at})`;
  }

  try {
    const res = await fetch(`${crmUrl.replace(/\/$/, "")}/api/leads/intake`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": crmKey },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { error: "The CRM rejected this submission.", detail },
        { status: 502 }
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, ...data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not reach the CRM." }, { status: 502 });
  }
}
