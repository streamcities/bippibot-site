import Link from "next/link";

export const metadata = { title: "About | BippiBot" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--navy-950)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal-500)]">Built here. Built for you.</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            The local team that makes your business run on autopilot
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="sm:col-span-2 space-y-5 text-[var(--slate-500)]">
            <p>
              BippiBot was founded by James &ldquo;Jay&rdquo; McCarthy, who brings 25+ years of technology and
              business experience across Apple, MotorTrend Online, medical device sales, and running his own
              wellness clinic, Salted Sun, on Sanibel Island.
            </p>
            <p>
              Along the way, Jay kept seeing the same problem, over and over: great businesses with loyal
              customers and no reliable system to bring them back, answer every call, or follow up on every lead.
              Owners were too busy running the business to build one.
            </p>
            <p>
              BippiBot is his solution — combining real business experience with practical AI automation to
              handle the repetitive work every local business struggles to keep up with: call handling, lead
              follow-up, appointment booking, and customer reactivation. The goal isn&apos;t to replace your team.
              It&apos;s to give owners their time back.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line-200)] bg-[var(--tint-050)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--slate-400)]">At a glance</p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="font-semibold text-[var(--navy-900)]">25+ years</p>
                <p className="text-[var(--slate-500)]">of technology and business experience</p>
              </li>
              <li>
                <p className="font-semibold text-[var(--navy-900)]">Apple, MotorTrend, medical sales</p>
                <p className="text-[var(--slate-500)]">and firsthand business ownership</p>
              </li>
              <li>
                <p className="font-semibold text-[var(--navy-900)]">Sanibel Island, FL &amp; Las Vegas, NV</p>
                <p className="text-[var(--slate-500)]">local, hands-on service</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact-us"
            className="inline-block rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
