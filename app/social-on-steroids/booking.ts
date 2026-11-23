import { BOOKING_URL, ctaHref as sharedCtaHref, ctaTarget as sharedCtaTarget } from "@/lib/booking";

/** Anchors on /social-on-steroids. */
export const KIT_FORM_ID = "get-kit"; // primary path: send one listing
export const DEMO_ID = "demo"; // secondary path: book a 15-minute demo

/** Primary CTA always goes to the free-listing form on this page. */
export const KIT_HREF = `#${KIT_FORM_ID}`;

/** Secondary CTA: the on-page demo section, which embeds BOOKING_URL (Cal.com) when it is set. */
export const DEMO_HREF = `#${DEMO_ID}`;

/** Cal.com embed URL, or null while lib/booking.ts BOOKING_URL is empty. */
export function calEmbedUrl(): string | null {
  if (!BOOKING_URL) return null;
  const tagged = new URL(sharedCtaHref("#", "social-on-steroids", "demo-embed"));
  tagged.searchParams.set("embed", "true");
  tagged.searchParams.set("layout", "month_view");
  return tagged.toString();
}

export { BOOKING_URL, sharedCtaTarget as ctaTarget };
