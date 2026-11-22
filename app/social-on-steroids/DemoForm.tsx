"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const TRACK_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "ref",
] as const;
const STORE_KEY = "bb_sos_attribution";

type Attribution = Partial<Record<(typeof TRACK_KEYS)[number] | "landing_page" | "referrer", string>>;

/** Read tracking params from the URL (first touch wins for this browser session). */
function readAttribution(): Attribution {
  let saved: Attribution = {};
  try {
    saved = JSON.parse(sessionStorage.getItem(STORE_KEY) || "{}") as Attribution;
  } catch {}
  const params = new URLSearchParams(window.location.search);
  const fresh: Attribution = {};
  for (const k of TRACK_KEYS) {
    const v = params.get(k);
    if (v) fresh[k] = v.slice(0, 200);
  }
  const hasFresh = Object.keys(fresh).length > 0;
  const merged: Attribution = hasFresh ? { ...fresh } : { ...saved };
  merged.landing_page = (hasFresh ? undefined : saved.landing_page) || window.location.pathname + window.location.search;
  merged.referrer = (hasFresh ? undefined : saved.referrer) || document.referrer || "";
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(merged));
  } catch {}
  return merged;
}

const input =
  "mt-1.5 w-full rounded-xl border border-[var(--line-200)] bg-white px-3.5 py-3 text-base text-[var(--navy-900)] outline-none placeholder:text-[var(--slate-400)] focus:border-[#FF5A36] focus:shadow-[0_0_0_3px_rgba(255,90,54,0.18)] aria-[invalid=true]:border-red-500";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").replace(/[^\d]/g, "");
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email.";
  if (phone.length < 10 || phone.length > 15) errors.phone = "Please enter a phone number with area code.";
  return errors;
}

export default function DemoForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const attribution = useRef<Attribution>({});

  useEffect(() => {
    attribution.current = readAttribution();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    if (String(data.get("company_website") || "")) {
      setStatus("sent"); // honeypot: quietly drop bots
      return;
    }
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      e.currentTarget.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setServerError(null);
    const fullName = String(data.get("name")).trim().replace(/\s+/g, " ");
    const [first_name, ...rest] = fullName.split(" ");
    const brokerage = String(data.get("brokerage") || "").trim();
    const message = String(data.get("message") || "").trim();
    const attr = { ...attribution.current, ...readAttribution() };
    const tracking = Object.entries(attr)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name: rest.join(" "),
          email: String(data.get("email")).trim(),
          phone: String(data.get("phone")).trim(),
          source: "Social on Steroids demo request",
          notes: [
            "Demo request: Social on Steroids (realtor listing marketing).",
            brokerage ? `Brokerage: ${brokerage}` : "",
            message ? `Message: ${message}` : "",
            tracking ? `Tracking: ${tracking}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          custom_fields: {
            form: "social-on-steroids-demo",
            brokerage,
            message,
            ...attr,
          },
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "sos_demo_request", ...attr });
      } catch {}
    } catch {
      setStatus("error");
      setServerError(
        "Sorry, that didn't go through. Please try again, or email support@bippibot.com and we'll set up your demo."
      );
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center text-[var(--navy-900)] shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5A36] text-2xl text-white">✓</div>
        <h3 className="text-2xl font-extrabold">Request received</h3>
        <p className="mt-2 text-[var(--slate-500)]">Jay will reach out to pick a time for your 15-minute demo.</p>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm font-semibold text-red-600">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="relative rounded-3xl bg-white p-6 text-[var(--navy-900)] shadow-2xl sm:p-8"
      aria-label="Book a 15-minute demo"
    >
      <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label>
          Company website
          <input tabIndex={-1} autoComplete="off" name="company_website" defaultValue="" />
        </label>
      </div>
      <h3 className="text-2xl font-extrabold">Book a 15-minute demo</h3>
      <p className="mt-1 text-sm text-[var(--slate-500)]">With Jay McCarthy, founder of BippiBot. We&apos;ll walk through a real listing package.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="sos-name" className="block text-sm font-semibold">Name</label>
          <input id="sos-name" name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={input}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="sos-email" className="block text-sm font-semibold">Email</label>
          <input id="sos-email" name="email" type="email" inputMode="email" required maxLength={254} autoComplete="email" placeholder="you@brokerage.com" className={input}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="sos-phone" className="block text-sm font-semibold">Phone</label>
          <input id="sos-phone" name="phone" type="tel" inputMode="tel" required maxLength={25} autoComplete="tel" placeholder="(239) 555-0123" className={input}
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sos-brokerage" className="block text-sm font-semibold">
            Brokerage <span className="font-medium text-[var(--slate-400)]">(optional)</span>
          </label>
          <input id="sos-brokerage" name="brokerage" maxLength={120} autoComplete="organization" placeholder="Your brokerage" className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sos-message" className="block text-sm font-semibold">
            Message <span className="font-medium text-[var(--slate-400)]">(optional)</span>
          </label>
          <textarea id="sos-message" name="message" rows={3} maxLength={1500} placeholder="How many listings do you take a year? Anything we should know?" className={input} />
        </div>
      </div>

      {serverError ? (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-600">{serverError}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="mt-5 w-full rounded-full bg-[#FF5A36] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#ec4a27] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Book my 15-minute demo"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-[var(--slate-500)]">
        We&apos;ll only use this to set up your demo and follow up about BippiBot. We don&apos;t sell your information.{" "}
        <a href="/privacy-policy" className="font-semibold underline underline-offset-2">Privacy policy</a>.
      </p>
    </form>
  );
}
