/**
 * Lightweight first-party analytics. No third-party tool is installed on bippibot.com,
 * so events go to window.dataLayer (ready for GTM/GA4 later) and to /api/track,
 * which writes one JSON line per event to the server logs.
 */
export type TrackEvent =
  | "hero_cta_click"
  | "cta_click"
  | "form_view"
  | "form_submit"
  | "form_error"
  | "calendar_booking"
  | "video_play"
  | "scroll_50"
  | "scroll_90";

export function track(event: TrackEvent, props: Record<string, string | number | boolean | undefined> = {}): void {
  if (typeof window === "undefined") return;
  const payload = { event, page: window.location.pathname, ...props };
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    (w.dataLayer = w.dataLayer || []).push(payload);
  } catch {}
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
    else void fetch("/api/track", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
  } catch {}
}
