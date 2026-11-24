import { NextRequest, NextResponse } from "next/server";

/** First-party event sink for lib/track.ts. Logs one JSON line per event; stores nothing else. */
const EVENTS = new Set([
  "hero_cta_click", "cta_click", "form_view", "form_submit", "form_error",
  "calendar_booking", "video_play", "scroll_50", "scroll_90",
]);
const KEYS = ["page", "placement", "form", "video", "utm_source", "utm_medium", "utm_campaign", "utm_content"];

export async function POST(req: NextRequest) {
  const raw = await req.text().catch(() => "");
  if (raw.length > 2000) return new NextResponse(null, { status: 413 });
  let body: Record<string, unknown>;
  try { body = JSON.parse(raw); } catch { return new NextResponse(null, { status: 400 }); }
  const event = typeof body.event === "string" ? body.event : "";
  if (!EVENTS.has(event)) return new NextResponse(null, { status: 400 });
  const out: Record<string, string> = { event };
  for (const k of KEYS) {
    const v = body[k];
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") out[k] = String(v).replace(/[\u0000-\u001f]/g, " ").slice(0, 120);
  }
  console.log("[track]", JSON.stringify({ t: new Date().toISOString(), ...out }));
  return new NextResponse(null, { status: 204 });
}
