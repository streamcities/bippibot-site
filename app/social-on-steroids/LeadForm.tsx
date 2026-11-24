"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { track } from "@/lib/track";

const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "ref"] as const;
const STORE_KEY = "bb_sos_attribution";
const CTA_KEY = "bb_sos_last_cta";

/** Tracking params from the URL; first touch wins for this browser session. */
function readAttribution(): Record<string, string> {
  let saved: Record<string, string> = {};
  try { saved = JSON.parse(sessionStorage.getItem(STORE_KEY) || "{}"); } catch {}
  const params = new URLSearchParams(window.location.search);
  const fresh: Record<string, string> = {};
  for (const k of TRACK_KEYS) {
    const v = params.get(k);
    if (v) fresh[k] = v.slice(0, 200);
  }
  const hasFresh = Object.keys(fresh).length > 0;
  const merged: Record<string, string> = hasFresh ? { ...fresh } : { ...saved };
  merged.landing_page = (hasFresh ? undefined : saved.landing_page) || (window.location.pathname + window.location.search).slice(0, 500);
  merged.referrer = (hasFresh ? undefined : saved.referrer) || document.referrer.slice(0, 500) || "";
  try { sessionStorage.setItem(STORE_KEY, JSON.stringify(merged)); } catch {}
  return merged;
}

const input =
  "mt-1.5 w-full rounded-xl border border-[var(--line-200)] bg-white px-3.5 py-3 text-base text-[var(--navy-900)] outline-none placeholder:text-[var(--slate-500)] focus:border-[#D63D1A] focus:shadow-[0_0_0_3px_rgba(214,61,26,0.18)] aria-[invalid=true]:border-red-500";

type Field = "name" | "email" | "phone" | "listing" | "consent";

/** Photo-rights consent, required on the free listing kit form (checked again server-side in /api/submit-lead). */
const CONSENT_TEXT =
  "I have the rights to the listing photos and details I send, and I authorize BippiBot to use them to market my listings.";
type Errors = Partial<Record<Field, string>>;

type Variant = "kit" | "demo";

const COPY: Record<Variant, { form: string; source: string; button: string; sending: string }> = {
  kit: { form: "sos-free-listing-kit", source: "Social on Steroids free listing kit", button: "Send my free listing kit", sending: "Sending…" },
  demo: { form: "sos-demo", source: "Social on Steroids demo request", button: "Book a 15-minute demo", sending: "Sending…" },
};

export default function LeadForm({
  variant,
  id,
  turnaround,
  turnaroundFlag,
}: {
  variant: Variant;
  id: string;
  turnaround: string;
  turnaroundFlag: boolean;
}) {
  const c = COPY[variant];
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sentTo, setSentTo] = useState("");
  const attribution = useRef<Record<string, string>>({});
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    attribution.current = readAttribution();
    const el = ref.current;
    if (!el) return;
    let seen = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !seen) { seen = true; track("form_view", { form: c.form }); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [c.form]);

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").replace(/[^\d]/g, "");
    if (name.length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Please enter a valid email.";
    if (phone.length < 10 || phone.length > 15) e.phone = "Please enter a phone number with area code.";
    if (variant === "kit" && String(data.get("listing") || "").trim().length < 5) e.listing = "Please paste the listing link or the address.";
    if (variant === "kit" && data.get("consent") !== "yes") e.consent = "Please check the box to confirm you have the rights to these photos and details.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === "sending") return;
    const form = ev.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "")) { setStatus("sent"); return; } // honeypot
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLInputElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const fullName = String(data.get("name")).trim().replace(/\s+/g, " ");
    const [first_name, ...rest] = fullName.split(" ");
    const email = String(data.get("email")).trim();
    const brokerage = String(data.get("brokerage") || "").trim();
    const listing = String(data.get("listing") || "").trim();
    let cta = "";
    try { cta = sessionStorage.getItem(CTA_KEY) || ""; } catch {}
    const attr = { ...attribution.current, ...readAttribution() };
    const tracking = Object.entries(attr).filter(([, v]) => v).map(([k, v]) => `${k}=${v}`).join("; ");
    const consent = variant === "kit" ? { photo_consent: true, photo_consent_at: new Date().toISOString(), photo_consent_text: CONSENT_TEXT } : {};
    const message = variant === "kit" ? `Free listing kit request. Listing: ${listing}` : "Demo request (calendar not connected yet).";
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name: rest.join(" "),
          email,
          phone: String(data.get("phone")).trim(),
          source: c.source,
          notes: [message, brokerage ? `Brokerage: ${brokerage}` : "", cta ? `CTA: ${cta}` : "", tracking ? `Tracking: ${tracking}` : "", variant === "kit" ? `Photo consent: yes (${consent.photo_consent_at})` : ""].filter(Boolean).join("\n"),
          custom_fields: { form: c.form, cta, listing, brokerage, message, ...attr, ...consent },
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo(email);
      setStatus("sent");
      track("form_submit", { form: c.form, placement: cta });
    } catch {
      setStatus("error");
      track("form_error", { form: c.form });
    }
  }

  const flag = turnaroundFlag ? <span className="ml-1 rounded bg-[#FDE68A] px-1.5 py-0.5 text-[11px] font-extrabold text-[#7A2E0E]">[JAY: CONFIRM]</span> : null;

  if (status === "sent") {
    return (
      <div id={id} role="status" className="scroll-mt-24 rounded-3xl bg-white p-7 text-[var(--navy-900)] shadow-2xl sm:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D63D1A] text-xl text-white">✓</div>
        {variant === "kit" ? (
          <>
            <h3 className="text-2xl font-extrabold">Got it. Your listing is in.</h3>
            <ol className="mt-4 space-y-2 text-[var(--slate-600,#3B4660)]">
              <li><b>1.</b> Jay McCarthy reviews your listing and may email you a quick question about it.</li>
              <li><b>2.</b> Your launch kit arrives {turnaround}{flag} at <b>{sentTo || "your email"}</b>.</li>
              <li><b>3.</b> You review it and approve what you want. Nothing posts or sends until you approve it.</li>
            </ol>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold">Thanks. We&apos;ll set up your demo.</h3>
            <p className="mt-3 text-[var(--slate-600,#3B4660)]">Jay McCarthy will email <b>{sentTo || "you"}</b> a few times to choose from for your 15-minute demo.</p>
          </>
        )}
      </div>
    );
  }

  const err = (k: Field) => (errors[k] ? <p id={`${id}-${k}-error`} className="mt-1 text-sm font-semibold text-red-600">{errors[k]}</p> : null);
  const aria = (k: Field) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${id}-${k}-error` : undefined });

  return (
    <form ref={ref} id={id} noValidate onSubmit={onSubmit} aria-labelledby={`${id}-title`}
      className="relative scroll-mt-24 rounded-3xl bg-white p-6 text-[var(--navy-900)] shadow-2xl sm:p-8">
      <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label>Company website<input tabIndex={-1} autoComplete="off" name="company_website" defaultValue="" /></label>
      </div>
      {variant === "kit" ? (
        <>
          <h3 id={`${id}-title`} className="text-2xl font-extrabold">Get your free listing kit</h3>
          <p className="mt-1 text-sm text-[var(--slate-500)]">Send one listing. Your launch kit is ready to review {turnaround}{flag}. First listing free.</p>
        </>
      ) : (
        <>
          <h3 id={`${id}-title`} className="text-2xl font-extrabold">Book a 15-minute demo</h3>
          <p className="mt-1 text-sm text-[var(--slate-500)]">Leave your details and Jay will email you a few times to choose from.</p>
        </>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-name`} className="block text-sm font-semibold">Name</label>
          <input id={`${id}-name`} name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={input} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-semibold">Email</label>
          <input id={`${id}-email`} name="email" type="email" inputMode="email" required maxLength={254} autoComplete="email" placeholder="you@brokerage.com" className={input} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm font-semibold">Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" required maxLength={25} autoComplete="tel" placeholder="(239) 555-0123" className={input} {...aria("phone")} />
          {err("phone")}
        </div>
        {variant === "kit" ? (
          <div className="sm:col-span-2">
            <label htmlFor={`${id}-listing`} className="block text-sm font-semibold">Listing link or address</label>
            <input id={`${id}-listing`} name="listing" required maxLength={500} placeholder="Paste the listing link, or type the address" className={input} {...aria("listing")} />
            {err("listing")}
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-brokerage`} className="block text-sm font-semibold">
            Brokerage <span className="font-medium text-[var(--slate-500)]">(optional)</span>
          </label>
          <input id={`${id}-brokerage`} name="brokerage" maxLength={120} autoComplete="organization" placeholder="Your brokerage" className={input} />
        </div>
      </div>
      {variant === "kit" ? (
        <div className="mt-5">
          <label htmlFor={`${id}-consent`} className="flex items-start gap-3 text-sm leading-snug text-[var(--navy-900)]">
            <input id={`${id}-consent`} name="consent" type="checkbox" value="yes" required
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#D63D1A]" {...aria("consent")} />
            <span>{CONSENT_TEXT}</span>
          </label>
          {err("consent")}
        </div>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-600">Sorry, that didn&apos;t go through. Please try again, or email support@bippibot.com.</p>
      ) : null}
      <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"}
        className="mt-5 w-full rounded-full bg-[#D63D1A] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/30 transition hover:bg-[#B93515] disabled:opacity-60">
        {status === "sending" ? c.sending : c.button}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-[var(--slate-500)]">
        We only use this to {variant === "kit" ? "build your kit" : "set up your demo"} and follow up about BippiBot. We don&apos;t sell your information.{" "}
        <a href="/privacy-policy" className="font-semibold underline underline-offset-2">Privacy policy</a>.
      </p>
    </form>
  );
}
