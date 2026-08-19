"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  { n: "1", t: "Book your listing", c: "Tell us the agent name, property address, MLS listing URL, and how many photos you'll be sending." },
  { n: "2", t: "Upload your photos", c: "We send you a link to a shared folder. Upload your listing photos in order, numbered sequentially." },
  { n: "3", t: "BippiBot builds the video", c: "Our AI stitches your photos into a smooth, professionally paced walkthrough — automatically, no editor required." },
  { n: "4", t: "Download & share", c: "Your finished video is delivered ready to post to your listing, MLS, and social channels." },
];

const VALUE_PROPS = [
  { icon: "⚡", t: "Fast turnaround", c: "Skip the wait for a videographer's next opening. Upload photos today, get your video back on our automated schedule." },
  { icon: "🇺🇸", t: "Nationwide", c: "Works anywhere you list — no local videographer network required, no travel fees, no coverage gaps." },
  { icon: "📸", t: "Use the photos you already have", c: "No new equipment or shoot to schedule. If you've got listing photos, you've got everything you need." },
];

const FAQS = [
  { q: "How many photos do I need to send?", a: "Most listings work well with roughly 15–30 photos, but you can send more or fewer — just let us know the count when you book." },
  { q: "How do I number my photos?", a: "Name your files sequentially (e.g. 01.jpg, 02.jpg, 03.jpg...) in the order you'd like them to appear in the video, then upload them to the shared folder link we send you." },
  { q: "How long does it take to get my video back?", a: "Starter tier ships in 72 hours. Pro tier is priority turnaround at 24–48 hours." },
  { q: "Do you cover my area?", a: "Yes — this service is available nationwide. Since it's generated from your photos, there's no local coverage limitation." },
  { q: "What format is the final video?", a: "MP4, MLS-ready, delivered at a resolution suitable for listing pages and social sharing." },
];

export default function RealEstateVideoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
              Turn listing photos into a{" "}
              <span className="bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] bg-clip-text text-transparent">
                walkthrough video
              </span>{" "}
              — automatically.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-[var(--slate-500)]">
              Upload your numbered listing photos and BippiBot&apos;s AI builds a smooth, professional walkthrough
              video for you. No filming, no editing, no waiting on a videographer&apos;s schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5"
              >
                Book Your Listing
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-[var(--line-200)] px-6 py-3.5 text-sm font-bold text-[var(--navy-950)] transition hover:border-[var(--blue-500)] hover:text-[var(--blue-500)]"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-[var(--slate-500)]">
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> Nationwide coverage</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> No equipment or scheduling</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-500)]" /> Built for agents &amp; brokers</span>
            </div>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--navy-900)] shadow-2xl">
            <video controls playsInline preload="metadata" className="h-full w-full object-cover">
              <source src="https://assets.cdn.filesafe.space/Q7jlZDriV0IqdbNR4UVS/media/6a85ffdaee714bf542fb3c4e.mov" />
              Your browser doesn&apos;t support embedded video.
            </video>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">How It Works</p>
          <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Four steps. Zero filming.</h2>
          <p className="mt-3 text-[var(--slate-500)]">Book the listing, upload your photos, and BippiBot handles the rest.</p>
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

      {/* Value props */}
      <section className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">Why BippiBot</p>
            <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Video, without the video shoot</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUE_PROPS.map((v) => (
              <div key={v.t} className="rounded-2xl border border-[var(--line-200)] bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-200)] text-xl">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-[var(--navy-950)]">{v.t}</h3>
                <p className="mt-2 text-sm text-[var(--slate-500)]">{v.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">Pricing</p>
          <h2 className="text-3xl font-bold text-[var(--navy-950)] sm:text-4xl">Simple, per-listing pricing</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--slate-400)]">Starter</p>
            <p className="mt-2 text-4xl font-bold text-[var(--navy-950)]">$149</p>
            <p className="mt-1 text-sm text-[var(--slate-500)]">per listing · up to 10 photos</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line-200)] pt-6 text-sm text-[var(--navy-950)]">
              {["AI-generated exterior drone-to-front-door shot", "AI-generated interior walkthrough video", "Standard turnaround (72 hours)", "MLS-ready export"].map((f) => (
                <li key={f} className="flex gap-2"><span className="text-[var(--blue-500)]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 rounded-lg border border-[var(--line-200)] px-5 py-3 text-center text-sm font-bold text-[var(--navy-950)] hover:border-[var(--blue-500)] hover:text-[var(--blue-500)]">
              Book This Tier
            </a>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-[var(--blue-500)] bg-white p-8 shadow-xl">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-3.5 py-1 text-[11px] font-bold uppercase text-white">
              Most Popular
            </span>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--slate-400)]">Pro</p>
            <p className="mt-2 text-4xl font-bold text-[var(--navy-950)]">$249</p>
            <p className="mt-1 text-sm text-[var(--slate-500)]">per listing · up to 20 photos</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line-200)] pt-6 text-sm text-[var(--navy-950)]">
              {["Everything in Starter", "Priority turnaround (24–48 hours)", "Twilight/dusk exterior shot", "Social-ready cuts (vertical + square)", "Branded intro/outro with your photo & logo", "One round of revisions included"].map((f) => (
                <li key={f} className="flex gap-2"><span className="text-[var(--blue-500)]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-5 py-3 text-center text-sm font-bold text-white hover:opacity-90">
              Book This Tier
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--slate-400)]">Team</p>
            <p className="mt-2 text-4xl font-bold text-[var(--navy-950)]">Custom</p>
            <p className="mt-1 text-sm text-[var(--slate-500)]">for brokerages &amp; teams</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--line-200)] pt-6 text-sm text-[var(--navy-950)]">
              {["Volume pricing per listing", "Team dashboard", "Dedicated support"].map((f) => (
                <li key={f} className="flex gap-2"><span className="text-[var(--blue-500)]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#book" className="mt-8 rounded-lg border border-[var(--line-200)] px-5 py-3 text-center text-sm font-bold text-[var(--navy-950)] hover:border-[var(--blue-500)] hover:text-[var(--blue-500)]">
              Talk to Us
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--slate-500)]">
          Need more photos than your tier covers? Add $15 per additional 5 photos. Need a custom package?{" "}
          <a href="#book" className="font-semibold text-[var(--blue-500)] hover:underline">Contact us</a> and we&apos;ll work out the details.
        </p>
      </section>

      {/* Booking */}
      <section id="book" className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--blue-500)]">Book a Listing</p>
            <h2 className="text-3xl font-bold text-[var(--navy-950)]">Get your video started</h2>
            <p className="mt-4 text-[var(--slate-500)]">
              Fill out the details below. Once booked, we&apos;ll send you a link to a shared folder — upload your
              listing photos in order, numbered sequentially, and BippiBot takes it from there.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                { n: "1", t: "We confirm your booking", c: "and send your upload link." },
                { n: "2", t: "You upload photos", c: "numbered in the order you want them to appear." },
                { n: "3", t: "BippiBot generates your video", c: "and delivers it ready to share." },
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
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-[var(--line-200)] bg-white p-8"
          >
            {!submitted ? (
              <>
                <Field label="Agent Name">
                  <input required placeholder="Jane Smith" className="field-input" />
                </Field>
                <Field label="Property Address">
                  <input required placeholder="123 Maple Street, Springfield, USA" className="field-input" />
                </Field>
                <Field label="MLS Listing URL">
                  <input type="url" placeholder="https://www.mlslisting.com/..." className="field-input" />
                </Field>
                <div className="grid grid-cols-2 gap-3.5">
                  <Field label="Number of Photos">
                    <input type="number" min={1} required placeholder="24" className="field-input" />
                  </Field>
                  <Field label="Email">
                    <input type="email" required placeholder="you@brokerage.com" className="field-input" />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] py-3.5 text-sm font-bold text-white hover:opacity-90"
                >
                  Request Booking
                </button>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-2xl text-white">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-[var(--navy-950)]">Booking request received</h3>
                <p className="mt-2 text-sm text-[var(--slate-500)]">
                  We&apos;ll follow up shortly with your photo upload link.
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
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to skip the video shoot?</h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--lavender-300)]">
            Book your listing and send us your photos — BippiBot handles the rest.
          </p>
          <a
            href="#book"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-sm font-bold text-white hover:opacity-90"
          >
            Book Your Listing
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
