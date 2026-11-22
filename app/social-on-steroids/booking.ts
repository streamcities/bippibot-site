import { BOOKING_URL, ctaHref as sharedCtaHref, ctaTarget as sharedCtaTarget } from "@/lib/booking";

/**
 * Where every "Book a 15-minute demo" button on /social-on-steroids goes:
 * the shared BOOKING_URL in lib/booking.ts when set, otherwise this page's demo form.
 */
export const DEMO_FORM_ID = "demo-form";
export const DEMO_CTA_URL: string = BOOKING_URL ?? `#${DEMO_FORM_ID}`;

export const ctaHref = (placement: string): string => sharedCtaHref(`#${DEMO_FORM_ID}`, "social-on-steroids", placement);
export const ctaTarget = sharedCtaTarget;
