/**
 * Site-wide booking link for "talk to Jay" buttons.
 *
 * null means each page's buttons go to that page's own contact form. To send
 * everyone to a booking page instead (e.g. Jay's Cal.com link), set BOOKING_URL
 * to that full https URL here, once: buttons then get UTM tags and open it in a
 * new tab.
 */
export const BOOKING_URL: string | null = null;

/** Anchor id of the contact page's own form (/contact-us#contact-form). */
export const CONTACT_FORM_ID = "contact-form";

/** Where a CTA goes: BOOKING_URL (UTM-tagged) when set, otherwise the page's own form anchor. */
export function ctaHref(formAnchor: string, campaign: string, placement: string): string {
  if (!BOOKING_URL) return formAnchor;
  const u = new URL(BOOKING_URL);
  u.searchParams.set("utm_source", "bippibot.com");
  u.searchParams.set("utm_medium", "website");
  u.searchParams.set("utm_campaign", campaign);
  u.searchParams.set("utm_content", placement);
  return u.toString();
}

/** Link props: a new tab only for an external booking page. */
export const ctaTarget = (): { target?: string; rel?: string } =>
  BOOKING_URL ? { target: "_blank", rel: "noopener" } : {};
