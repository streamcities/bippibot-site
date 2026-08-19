import Link from "next/link";

export const metadata = { title: "Automation Packages | BippiBot" };

export default function PackagesPage() {
  return (
    <>
      <section className="bg-[var(--navy-950)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Automation Packages</h1>
          <p className="mt-4 text-lg text-[var(--lavender-300)]">
            Choose a one-time reactivation sprint, ongoing automation, or both. No contracts on the retainer —
            cancel anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* The Sprint */}
          <div className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-500)]">One-time</span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--navy-900)]">The Sprint</h2>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[var(--navy-900)]">$497</span>
              <span className="text-sm text-[var(--slate-400)]">flat fee</span>
            </p>
            <p className="mt-2 text-sm text-[var(--slate-500)]">Up to 1,000 customers (larger lists cost more)</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--slate-500)]">
              {[
                "Customer list audit and segmentation",
                "4-touch email + SMS reactivation sequence",
                "A2P compliant setup",
                "Dedicated booking calendar",
                "30-day campaign management",
                "Weekly results reporting",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-[var(--teal-500)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-8 rounded-full border border-[var(--navy-900)] px-6 py-3 text-center text-sm font-semibold text-[var(--navy-900)] transition hover:bg-[var(--navy-900)] hover:text-white"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* The Retainer */}
          <div className="flex flex-col rounded-2xl border-2 border-[var(--blue-500)] bg-white p-8 shadow-lg">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-500)]">Most popular · Monthly</span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--navy-900)]">The Retainer</h2>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[var(--navy-900)]">$397</span>
              <span className="text-sm text-[var(--slate-400)]">/month</span>
            </p>
            <p className="mt-2 text-sm text-[var(--slate-500)]">No contracts — cancel anytime</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--slate-500)]">
              {[
                "AI receptionist for calls and texts, 24/7",
                "Automated follow-up sequences",
                "Appointment reminders",
                "Review request automation",
                "Monthly performance report",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-[var(--teal-500)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-8 rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Smart Website */}
          <div className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-500)]">Add-on · Monthly</span>
            <h2 className="mt-2 text-2xl font-bold text-[var(--navy-900)]">Smart Website</h2>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[var(--navy-900)]">$197</span>
              <span className="text-sm text-[var(--slate-400)]">/month</span>
            </p>
            <p className="mt-2 text-sm text-[var(--slate-500)]">+ $299 one-time setup fee</p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--slate-500)]">
              {[
                "AI-powered chat on every page",
                "Automated lead capture & follow-up",
                "Mobile optimization",
                "Integrated booking calendar",
                "Build and ongoing management included",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-[var(--teal-500)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-8 rounded-full border border-[var(--navy-900)] px-6 py-3 text-center text-sm font-semibold text-[var(--navy-900)] transition hover:bg-[var(--navy-900)] hover:text-white"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-[var(--line-200)] bg-[var(--tint-050)] p-8 text-center">
          <h3 className="text-lg font-semibold text-[var(--navy-900)]">Need something custom?</h3>
          <p className="mt-2 text-sm text-[var(--slate-500)]">
            Available for specialized needs beyond the core packages. Book a free 15-minute call to discuss your
            requirements and get a plan tailored to your business.
          </p>
          <Link href="/contact-us" className="mt-4 inline-block text-sm font-semibold text-[var(--blue-500)] hover:underline">
            Book a Free Consultation →
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-[var(--slate-500)]">
            Looking for the self-serve services?{" "}
            <Link href="/real-estate-video" className="font-semibold text-[var(--blue-500)] hover:underline">
              Real Estate Video
            </Link>{" "}
            and{" "}
            <Link href="/newsletters" className="font-semibold text-[var(--blue-500)] hover:underline">
              Client Newsletters
            </Link>{" "}
            can be started today, no consultation required.
          </p>
        </div>
      </section>
    </>
  );
}
