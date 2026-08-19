import Link from "next/link";

const AUTOMATION_SERVICES = [
  {
    title: "Virtual AI Receptionist",
    copy: "Every call and text answered instantly — day or night. No more missed calls or voicemail black holes.",
    icon: "☎️",
  },
  {
    title: "Conversation AI & Chat",
    copy: "Automated conversations across your website, texts, and social platforms that qualify and book leads.",
    icon: "💬",
  },
  {
    title: "Appointment Scheduling",
    copy: "Calendar integration with automatic reminders, so fewer people forget — and fewer no-shows.",
    icon: "📅",
  },
  {
    title: "Workflow Automation",
    copy: "Leads, follow-ups, and review requests handled automatically the moment they happen.",
    icon: "⚙️",
  },
  {
    title: "Smart Website",
    copy: "A conversion-focused site with built-in chat, mobile optimization, and integrated booking.",
    icon: "🌐",
  },
];

const NEW_SERVICES = [
  {
    title: "Real Estate Walkthrough Video",
    copy: "Upload numbered listing photos, get back a professional AI-generated walkthrough video — ready for MLS in 24–72 hours.",
    href: "/real-estate-video",
    cta: "See pricing",
    tag: "For real estate agents",
  },
  {
    title: "Client Newsletters",
    copy: "A curated, done-for-you monthly newsletter that keeps your practice top of mind with past and current customers.",
    href: "/newsletters",
    cta: "See pricing",
    tag: "For med spas & wellness practices",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "BippiBot took over our follow-up and booking so we stopped losing customers to voicemail. It paid for itself in the first month.",
    name: "Claiton Jorge",
    role: "Owner, Seaside Enclosure",
  },
  {
    quote:
      "The AI receptionist alone changed how our front desk operates. Every call gets answered, every lead gets followed up.",
    name: "Jason Garber, MD",
    role: "Neurosurgeon",
  },
  {
    quote:
      "We reactivated a list of customers we thought were gone for good. Simple to set up, and Jay's team handled everything.",
    name: "Center for Aesthetic Medicine",
    role: "Las Vegas, NV",
  },
];

const INDUSTRIES = [
  "Med Spas",
  "Dental & Chiro Practices",
  "Salons",
  "Fitness Studios",
  "Boutique Hotels",
  "Veterinary Practices",
  "Real Estate Agents",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy-950)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--lavender-300)]">
              AI Automation for Local Businesses
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              Your past customers are worth more than your next ad
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--lavender-300)] sm:text-xl">
              BippiBot builds done-for-you AI systems that answer every call, follow up on every lead, and bring
              dormant customers back — so your business runs on autopilot, without hiring anyone new.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="w-full rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto"
              >
                Book Your Free 15-Minute Consultation
              </Link>
              <Link
                href="/packages"
                className="w-full rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                See Automation Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="border-b border-[var(--line-200)] bg-[var(--tint-050)] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
          {INDUSTRIES.map((i) => (
            <span key={i} className="text-sm font-medium text-[var(--slate-500)]">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* 3-step process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">How it works</h2>
          <p className="mt-3 text-[var(--slate-500)]">
            A performance-based model — we do the work, you pay for results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { n: "01", t: "Audit", c: "We audit your customer list and assess reactivation viability, at no cost to you." },
            { n: "02", t: "Launch", c: "We build and launch a compliant, done-for-you reactivation and automation campaign." },
            { n: "03", t: "Results", c: "You receive booked appointments and only pay performance fees when it works." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-[var(--line-200)] bg-white p-8 shadow-sm">
              <span className="text-sm font-bold text-[var(--blue-500)]">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-[var(--navy-900)]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core automation services */}
      <section className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">
              Everything runs while you work
            </h2>
            <p className="mt-3 text-[var(--slate-500)]">
              Five automations that handle the repetitive work so you don&apos;t have to.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[var(--line-200)] bg-white p-7">
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--navy-900)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">{s.copy}</p>
              </div>
            ))}
            <Link
              href="/packages"
              className="flex flex-col items-start justify-center rounded-2xl border-2 border-dashed border-[var(--blue-500)]/40 bg-[var(--tint-100)] p-7 transition hover:border-[var(--blue-500)]"
            >
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">See full pricing →</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">
                The Sprint, The Retainer, and Smart Website — compare every package.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* New productized services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">Sign up and go</h2>
          <p className="mt-3 text-[var(--slate-500)]">
            Self-serve services you can start today — no consultation required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {NEW_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] p-9 text-white"
            >
              <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--lavender-300)]">
                {s.tag}
              </span>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--lavender-300)]">{s.copy}</p>
              <Link
                href={s.href}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">
              Businesses running on autopilot
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-[var(--line-200)] bg-white p-7">
                <div className="mb-3 text-[var(--gold-700)]">★★★★★</div>
                <p className="flex-1 text-sm leading-relaxed text-[var(--slate-500)]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-[var(--navy-900)]">{t.name}</p>
                  <p className="text-xs text-[var(--slate-400)]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder strip */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-500)]">Built here. Built for you.</p>
        <h2 className="mt-3 text-2xl font-bold text-[var(--navy-900)] sm:text-3xl">
          25+ years of business and technology experience, now working for your business.
        </h2>
        <p className="mt-4 text-[var(--slate-500)]">
          Founder Jay McCarthy built BippiBot after running his own local business and seeing the same problem
          everywhere: great businesses with loyal customers and no reliable system to bring them back.
        </p>
        <Link href="/about-us" className="mt-6 inline-block text-sm font-semibold text-[var(--blue-500)] hover:underline">
          Read Jay&apos;s story →
        </Link>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--navy-950)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to put your business on autopilot?</h2>
          <p className="mt-4 text-[var(--lavender-300)]">
            Book a free 15-minute consultation and we&apos;ll show you exactly what a reactivation campaign looks like
            for your customer list.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
