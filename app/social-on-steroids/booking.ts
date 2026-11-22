export const BOOKING_URL = "https://app.presurgi.com/widget/bookings/james-mccarthy-discovery-call";

/** Jay's booking calendar, tagged so bookings can be traced to this page and the CTA used. */
export function bookingUrl(placement: string): string {
  const u = new URL(BOOKING_URL);
  u.searchParams.set("utm_source", "bippibot.com");
  u.searchParams.set("utm_medium", "landing_page");
  u.searchParams.set("utm_campaign", "social-on-steroids");
  u.searchParams.set("utm_content", placement);
  return u.toString();
}
