"use client";

import { useState } from "react";

const STEPS = [
  { n: "1", t: "Tell us about your business", c: "Your industry, your customers, and the topics you want to be known for. Takes about 10 minutes." },
  { n: "2", t: "We build your first issue", c: "BippiBot curates and drafts a monthly newsletter in your voice — industry insights, local spotlights, and an update from you." },
  { n: "3", t: "You approve it", c: "Review the draft, request changes, or approve as-is. Nothing goes out without your sign-off." },
  { n: "4", t: "We send it — every month", c: "Delivered to your customer list on a set schedule, formatted and branded, with performance stats after each send." },
];

const SECTIONS = [
  { icon: "💡", t: "Industry spotlight", c: "A curated, easy-to-read roundup of what's happening in your industry this month — trends, news, and things your customers actually care about." },
  { icon: "📍", t: "Local flavor", c: "A nod to what's going on nearby — local happenings, seasonal notes, or community spotlights that make the newsletter feel like it's actually from you." },
  { icon: "📣", t: "From your business", c: "Space for your own updates: a promotion, a new offering, a team highlight, or simply a reason to say hello and stay top of mind." },
  { icon: "✨", t: "Helpful tips", c: "A short, practical tip or takeaway related to your business — the kind of value that keeps people opening next month's issue." },
];

const FAQS = [
  { q: "What's the difference between Automated and Custom?", a: "Automated is BippiBot's AI drafting your monthly issue from your business profile, with a quick approval step before it sends. Custom means our team works with you directly each month to shape content, tone, and design to your exact preferences." },
  { q: "Do I need to write anything myself?", a: "No. On both tiers we draft the full issue for you. You're welcome to add your own notes or updates, but it's optional." },
  { q: "How is this different from Salted Sun's newsletter?", a: "It's the same proven model — a monthly, curated newsletter that mixes industry insight, local color, and a personal update — built for your business and your customer list." },
  { q: "Can I use my own email list?", a: "Yes. You provide (or we help you organize) your customer list, and issues are sent to it directly." },
  { q: "Can I cancel anytime?", a: "Yes, both plans are month-to-month with no long-term contract." },
];

export default function NewslettersClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-block rounded-full border border-[var(--tint-200)] bg-[var(--tint-100)] px-3.5 py-1.5 text-xs font-bold text-[var(--blue-500)]">
              ● New from BippiBot
            </span>
            <h1 className="text-4xl font-bold leading-tight text-[var(--navy-950)] sm:text-5xl">
              A monthly newsletter your customers{" "}
              <span className="bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] bg-clip-text text-transparent">
                actually open
              </span>
              .
            </h1>
            <p className="mt-5 max-w-lg text-lg text-[var(--slate-500)]">
              BippiBot writes, designs, and sends a curated monthly newsletter to your customer list — keeping your
              business top of mind without adding anything to your to-do list. Built on the same model we use for
              our own wellness clinic, Salted Sun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-[var(--line-200)] px-6 py-3.5 text-sm font-bold text-[var(--navy-950)] transition hover:border-[var(--blue-500)] hover:text-[var(--blue-500)]"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-[var(--slate-500)]">
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> Written &amp; designed for you</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> Sent every month, on schedule</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> No contracts</span>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--line-200)] bg-[var(--tint-050)] p-8 shadow-2xl">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">This Month&apos;s Issue</p>
              <h3 className="mt-2 text-lg font-bold text-[var(--navy-950)]">Your Business Name — Monthly Update</h3>
              <div className="mt-4 space-y-3">
                {SECTIONS.map((s) => (
                  <div key={s.t} className="flex items-start gap-3 rounded-lg border border-[var(--line-200)] p-3">
                    <span className="text-lg">{s.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--navy-950)]">{s.t}</p>
                      <p className="text-xs text-[var(--slate-500)]">{s.c}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">How It Works</p>
          <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Four steps. Zero writing required.</h2>
          <p className="mt-3 text-[var(--slate-500)]">Tell us about your business once — BippiBot handles the monthly content from there.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-[var(--line-200)] bg-white p-7">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-sm font-bold text-white">
                {s.n}
              </div>
              <h3 className="text-base font-semibold text-[var(--navy-950)]">{s.t}</h3>
              <p className="mt-2 text-sm text-[var(--slate-500)]">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's in every issue */}
      <section className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">What&apos;s Inside</p>
            <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Every issue, built the same way</h2>
            <p className="mt-3 text-[var(--slate-500)]">The same proven format we use for Salted Sun&apos;s own newsletter — adapted to your business.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTIONS.map((s) => (
              <div key={s.t} className="rounded-2xl border border-[var(--line-200)] bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-200)] text-xl">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-[var(--navy-950)]">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--slate-500)]">{s.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">Pricing</p>
          <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Simple monthly pricing</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--slate-400)]">Automated</p>
            <p className="mt-2 text-4xl font-bold text-[var(--navy-950)]">$99</p>
            <p className="mt-1 text-sm text-[var(--slate-500)]">per month</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line-200)] pt-6 text-sm text-[var(--navy-950)]">
              {[
                "AI-drafted monthly issue from your business profile",
                "Industry spotlight, local flavor & tips sections",
                "Your review & approval before every send",
                "Branded template with your logo & colors",
                "Sent to your customer list on a set schedule",
              ].map((f) => (
                <li key={f} className="flex gap-2"><span className="text-[var(--blue-500)]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 rounded-lg border border-[var(--line-200)] px-5 py-3 text-center text-sm font-bold text-[var(--navy-950)] hover:border-[var(--blue-500)] hover:text-[var(--blue-500)]">
              Start Automated
            </a>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-[var(--blue-500)] bg-white p-8 shadow-xl">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-3.5 py-1 text-[11px] font-bold uppercase text-white">
              Most Personalized
            </span>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--slate-400)]">Custom</p>
            <p className="mt-2 text-4xl font-bold text-[var(--navy-950)]">$499</p>
            <p className="mt-1 text-sm text-[var(--slate-500)]">per month</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line-200)] pt-6 text-sm text-[var(--navy-950)]">
              {[
                "Everything in Automated",
                "Dedicated writer working from your notes each month",
                "Custom design, not just a template",
                "Additional sections: promos, staff spotlights, events",
                "List management & segmentation support",
                "Monthly performance review call",
              ].map((f) => (
                <li key={f} className="flex gap-2"><span className="text-[var(--blue-500)]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-5 py-3 text-center text-sm font-bold text-white hover:opacity-90">
              Start Custom
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--slate-500)]">
          Not sure which fits? <a href="#book" className="font-semibold text-[var(--blue-500)] hover:underline">Get started</a> with Automated and upgrade to Custom anytime.
        </p>
      </section>

      {/* Sign up */}
      <section id="book" className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">Get Started</p>
            <h2 className="text-3xl font-bold text-[var(--navy-950)]">Start your newsletter</h2>
            <p className="mt-4 text-[var(--slate-500)]">
              Tell us a bit about your business and which plan you&apos;d like. We&apos;ll follow up to gather the
              details for your first issue and get you on the monthly schedule.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                { n: "1", t: "We follow up", c: "to learn about your business, customers, and topics you want covered." },
                { n: "2", t: "We draft your first issue", c: "and send it over for your review and approval." },
                { n: "3", t: "It goes out — every month", c: "on your schedule, with results reported back to you." },
              ].map((s) => (
                <li key={s.n} className="flex gap-3.5 border-t border-[var(--line-200)] pt-4 text-sm text-[var(--slate-500)] first:border-t-0 first:pt-0">
                  <span className="flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg border border-[var(--line-200)] bg-white text-xs font-bold text-[var(--blue-500)]">
                    {s.n}
                  </span>
                  <span><b className="font-bold text-[var(--navy-950)]">{s.t}</b><br />{s.c}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              const form = e.currentTarget;
              const data = new FormData(form);
              setSubmitting(true);
              try {
                const res = await fetch("/api/submit-lead", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    first_name: data.get("businessName"),
                    email: data.get("email"),
                    source: "Newsletter Signup",
                    custom_fields: {
                      industry: data.get("industry"),
                      preferred_plan: data.get("plan"),
                      approx_list_size: data.get("listSize"),
                    },
                  }),
                });
                if (!res.ok) throw new Error("failed");
                setSubmitted(true);
              } catch {
                setError("Something went wrong sending your request. Please try again, or email us directly.");
              } finally {
                setSubmitting(false);
              }
            }}
            className="rounded-2xl border border-[var(--line-200)] bg-white p-8"
          >
            {!submitted ? (
              <>
                <Field label="Business Name">
                  <input name="businessName" required placeholder="Your Business, LLC" className="field-input" />
                </Field>
                <Field label="Industry">
                  <input name="industry" required placeholder="e.g. real estate, wellness, home services" className="field-input" />
                </Field>
                <Field label="Preferred Plan">
                  <select name="plan" defaultValue="Automated" className="field-input">
                    <option value="Automated">Automated — $99/month</option>
                    <option value="Custom">Custom — $499/month</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </Field>
                <div className="grid grid-cols-2 gap-3.5">
                  <Field label="Approx. list size">
                    <input name="listSize" type="number" min={1} placeholder="500" className="field-input" />
                  </Field>
                  <Field label="Email">
                    <input name="email" type="email" required placeholder="you@business.com" className="field-input" />
                  </Field>
                </div>
                {error && <p className="mb-4 text-sm font-semibold text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 w-full rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] py-3.5 text-sm font-bold text-white hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request Newsletter"}
                </button>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-2xl text-white">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-[var(--navy-950)]">Request received</h3>
                <p className="mt-2 text-sm text-[var(--slate-500)]">
                  We&apos;ll follow up shortly to gather details for your first issue.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">FAQ</p>
          <h2 className="text-3xl font-bold text-[var(--navy-950)]">Common questions</h2>
        </div>
        <div className="divide-y divide-[var(--line-200)]">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-[var(--navy-950)]"
              >
                {f.q}
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--line-200)] text-sm text-[var(--blue-500)] transition ${openFaq === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openFaq === i && <p className="pb-5 text-sm text-[var(--slate-500)]">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--navy-950)] to-[var(--navy-800)] px-10 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Stay top of mind, every month</h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--lavender-300)]">
            Tell us about your business — BippiBot writes, designs, and sends the rest.
          </p>
          <a
            href="#book"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-sm font-bold text-white hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </section>

      <style jsx global>{`
        .field-input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1.5px solid var(--line-200);
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          background: white;
        }
        .field-input:focus {
          outline: none;
          border-color: var(--blue-500);
          box-shadow: 0 0 0 3px rgba(47, 111, 237, 0.14);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-sm font-bold text-[var(--navy-950)]">{label}</span>
      {children}
    </label>
  );
}
