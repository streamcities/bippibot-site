"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_FORM_ID } from "@/lib/booking";

const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "ref"] as const;

function readAttribution(): Record<string, string> {
  const out: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  for (const k of TRACK_KEYS) {
    const v = params.get(k);
    if (v) out[k] = v.slice(0, 200);
  }
  out.landing_page = (window.location.pathname + window.location.search).slice(0, 500);
  if (document.referrer) out.referrer = document.referrer.slice(0, 500);
  return out;
}

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").replace(/[^\d]/g, "");
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email.";
  if (phone && (phone.length < 10 || phone.length > 15)) errors.phone = "Please enter a phone number with area code, or leave it blank.";
  return errors;
}

const input =
  "mt-1.5 w-full rounded-xl border border-[var(--line-200)] bg-white px-3.5 py-3 text-base text-[var(--navy-900)] outline-none placeholder:text-[var(--slate-500)] focus:border-[var(--blue-500)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.18)] aria-[invalid=true]:border-red-500";

/** Contact-page consultation request. Posts to /api/submit-lead (the BippiBot CRM). */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const attribution = useRef<Record<string, string>>({});

  useEffect(() => {
    attribution.current = readAttribution();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "")) {
      setStatus("sent"); // honeypot: quietly drop bots
      return;
    }
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLInputElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const fullName = String(data.get("name")).trim().replace(/\s+/g, " ");
    const [first_name, ...rest] = fullName.split(" ");
    const business = String(data.get("business") || "").trim();
    const message = String(data.get("message") || "").trim();
    const attr = attribution.current;
    const tracking = Object.entries(attr).map(([k, v]) => `${k}=${v}`).join("; ");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name: rest.join(" "),
          email: String(data.get("email")).trim(),
          phone: String(data.get("phone") || "").trim(),
          source: "Contact page consultation request",
          notes: [
            "Consultation request from the contact page.",
            business ? `Business: ${business}` : "",
            message ? `Message: ${message}` : "",
            tracking ? `Tracking: ${tracking}` : "",
          ].filter(Boolean).join("\n"),
          custom_fields: { form: "contact-us-consultation", business, message, ...attr },
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div id={CONTACT_FORM_ID} role="status" className="mx-auto mt-8 max-w-2xl scroll-mt-28 rounded-2xl border border-[var(--line-200)] bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--navy-900)]">Thanks, your note is in</h2>
        <p className="mt-2 text-[var(--slate-500)]">Jay will reach out to find a time for your consultation.</p>
      </div>
    );
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`contact-${k}-error`} className="mt-1 text-sm font-semibold text-red-600">{errors[k]}</p> : null;

  return (
    <form
      id={CONTACT_FORM_ID}
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="contact-form-title"
      className="relative mx-auto mt-8 max-w-2xl scroll-mt-28 rounded-2xl border border-[var(--line-200)] bg-white p-6 text-[var(--navy-900)] shadow-sm sm:p-8"
    >
      <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label>
          Company website
          <input tabIndex={-1} autoComplete="off" name="company_website" defaultValue="" />
        </label>
      </div>
      <h2 id="contact-form-title" className="text-2xl font-bold">Send us a note</h2>
      <p className="mt-1 text-sm text-[var(--slate-500)]">Tell us a little about your business and we&apos;ll reach out to find a time for your 15-minute consultation.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className="block text-sm font-semibold">Name</label>
          <input id="contact-name" name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={input}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold">Email</label>
          <input id="contact-email" name="email" type="email" inputMode="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" className={input}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold">
            Phone <span className="font-medium text-[var(--slate-500)]">(optional)</span>
          </label>
          <input id="contact-phone" name="phone" type="tel" inputMode="tel" maxLength={25} autoComplete="tel" placeholder="(239) 555-0123" className={input}
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-business" className="block text-sm font-semibold">
            Business <span className="font-medium text-[var(--slate-500)]">(optional)</span>
          </label>
          <input id="contact-business" name="business" maxLength={120} autoComplete="organization" placeholder="Your business name" className={input} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-semibold">
            Message <span className="font-medium text-[var(--slate-500)]">(optional)</span>
          </label>
          <textarea id="contact-message" name="message" rows={4} maxLength={1500} placeholder="What would you like help with?" className={input} />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-600">
          Sorry, that didn&apos;t go through. Please try again, or email support@bippibot.com.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="mt-5 w-full rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-6 py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send my note"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-[var(--slate-500)]">
        We&apos;ll only use this to reply and follow up about BippiBot. We don&apos;t sell your information.{" "}
        <a href="/privacy-policy" className="font-semibold underline underline-offset-2">Privacy policy</a>.
      </p>
    </form>
  );
}
