/**
 * Where every "Book a 15-minute demo" button on /social-on-steroids goes.
 *
 * Today that is the page's own demo form. To send people to a booking page
 * instead (e.g. Jay's Cal.com link), set DEMO_CTA_URL to that full https URL:
 * external links get UTM tags and open in a new tab automatically.
 */
export const DEMO_FORM_ID = "demo-form";
export const DEMO_CTA_URL: string = `#${DEMO_FORM_ID}`;

export const isExternalCta = (): boolean => /^https?:\/\//.test(DEMO_CTA_URL);

/** href for a CTA. External URLs are tagged so bookings can be traced to this page and placement. */
export function ctaHref(placement: string): string {
  if (!isExternalCta()) return DEMO_CTA_URL;
  const u = new URL(DEMO_CTA_URL);
  u.searchParams.set("utm_source", "bippibot.com");
  u.searchParams.set("utm_medium", "landing_page");
  u.searchParams.set("utm_campaign", "social-on-steroids");
  u.searchParams.set("utm_content", placement);
  return u.toString();
}

/** Extra link props: a new tab only for external booking pages. */
export const ctaTarget = (): { target?: string; rel?: string } =>
  isExternalCta() ? { target: "_blank", rel: "noopener" } : {};
