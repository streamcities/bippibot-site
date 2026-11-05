import type { Metadata } from "next";
import Link from "next/link";

const PAGE_PATH = "/virtual-employee";
const PAGE_TITLE = "AI Virtual Employee for Medical Practices";
const DESCRIPTION =
  "BippiBot sets up and manages an AI virtual employee for medical practices in Southwest Florida and Las Vegas — inbox, appointment follow-up, reminders, and vendor tracking.";

const TASKS = [
  {
    title: "Inbox",
    copy: "It handles the inbox so incoming messages get attention instead of sitting unread.",
    icon: "📥",
  },
  {
    title: "Appointment follow-up",
    copy: "It follows up on appointment requests so people hear back and the next step is clear.",
    icon: "📅",
  },
  {
    title: "Reminders",
    copy: "It sends reminders for upcoming appointments.",
    icon: "🔔",
  },
  {
    title: "Vendor tracking",
    copy: "It keeps track of the vendors the practice works with, so vendor follow-up is not left in someone's inbox.",
    icon: "📦",
  },
];

const STEPS = [
  {
    title: "Discovery call",
    copy: "You and BippiBot walk through how the practice handles the inbox, appointment requests, reminders, and vendors today.",
  },
  {
    title: "Setup",
    copy: "BippiBot configures the virtual employee around how the practice already handles that work. You do not build or install it yourself.",
  },
  {
    title: "Ongoing management",
    copy: "After it is live, BippiBot keeps it running and adjusts it as the day-to-day work changes.",
  },
];

const FAQS = [
  {
    question: "What does the virtual employee handle?",
    answer:
      "It handles the inbox, follows up on appointment requests, sends reminders, and keeps track of vendors.",
  },
  {
    question: "Who is it for?",
    answer:
      "Small businesses, starting with medical practices in Southwest Florida and Las Vegas. In Southwest Florida that includes Fort Myers, Naples, Cape Coral, and Sanibel.",
  },
  {
    question: "How does setup work?",
    answer:
      "It starts with a discovery call. BippiBot learns how the practice handles the inbox, appointment requests, reminders, and vendors, then configures the virtual employee around that work. You do not build or install it yourself.",
  },
  {
    question: "Who manages it after setup?",
    answer:
      "BippiBot does. Management is part of the offer, and BippiBot adjusts the virtual employee as the practice's day-to-day work changes.",
  },
  {
    question: "Will it replace my staff?",
    answer:
      "No. It takes on that repeating work so the people in the practice can stay with patients and the tasks that need a person. Your team stays in charge.",
  },
  {
    question: "Does it give medical advice?",
    answer:
      "No. It handles administrative follow-up only. It does not make clinical decisions or give medical advice.",
  },
  {
    question: "How do I book a discovery call?",
    answer:
      "Use Book a discovery call on this page. It goes to the contact page, where you can reach BippiBot by phone or email. You can also email support@bippibot.com.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `${PAGE_TITLE} | BippiBot`,
    description: DESCRIPTION,
    url: PAGE_PATH,
  },
  twitter: {
    title: `${PAGE_TITLE} | BippiBot`,
    description: DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bippibot.com/virtual-employee#service",
      name: "AI Virtual Employee for Medical Practices",
      serviceType: "AI virtual employee setup and management",
      description: DESCRIPTION,
      url: "https://bippibot.com/virtual-employee",
      provider: {
        "@type": "ProfessionalService",
        name: "BippiBot",
        url: "https://bippibot.com",
        parentOrganization: {
          "@type": "Organization",
          name: "StreamCities, LLC",
        },
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Southwest Florida" },
        { "@type": "City", name: "Fort Myers", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Naples", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Cape Coral", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Sanibel", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Medical practices",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://bippibot.com/virtual-employee#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const primaryCtaClass =
  "inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto";

const secondaryCtaClass =
  "inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto";

function BookDiscoveryCall({ className }: { className: string }) {
  return (
    <Link href="/contact-us#consultation" className={className}>
      Book a discovery call
    </Link>
  );
}

export default function VirtualEmployeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden bg-[var(--navy-950)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <p className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--lavender-300)]">
            For medical practices in Southwest Florida and Las Vegas
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            An AI virtual employee for your practice
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--lavender-300)]">
            BippiBot sets up and manages an AI virtual employee for small businesses, starting with medical
            practices in Southwest Florida and Las Vegas. It handles the inbox, follows up on appointment
            requests, sends reminders, and keeps track of vendors.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookDiscoveryCall className={primaryCtaClass} />
            <a href="#what-it-does" className={secondaryCtaClass}>
              See what it handles
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--lavender-300)]">
            Prefer email?{" "}
            <a
              href="mailto:support@bippibot.com"
              className="font-semibold text-white underline underline-offset-2 hover:text-[var(--lavender-300)]"
            >
              support@bippibot.com
            </a>
          </p>
        </div>
      </section>

      <section id="what-it-does" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">What the virtual employee does</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--slate-500)]">
            These are the jobs it takes on. BippiBot sets the virtual employee up and keeps it running. Your
            practice does not have to assemble it.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TASKS.map((task) => (
            <li key={task.title} className="rounded-2xl border border-[var(--line-200)] bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl" aria-hidden="true">
                {task.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">{task.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">{task.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--tint-050)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">Who it&apos;s for</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--slate-500)]">
            <p>
              BippiBot sets up virtual employees for small businesses. This offer starts with medical practices
              whose front desk is already covering the inbox, appointment requests, reminders, and vendors.
            </p>
            <p>
              That means practices in Southwest Florida — Fort Myers, Naples, Cape Coral, and Sanibel — and
              medical practices in Las Vegas. If your practice is somewhere else, say so on the discovery call
              and BippiBot will tell you whether it can help.
            </p>
            <p>
              This is a managed service, separate from the self-serve{" "}
              <Link href="/packages" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
                automation packages
              </Link>
              . If you want a monthly note for past and current customers,{" "}
              <Link href="/newsletters" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
                client newsletters
              </Link>{" "}
              are a different offer.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">How setup and management work</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--slate-500)]">
            You do not configure the bot yourself. Setup and ongoing management are part of the offer.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.title} className="rounded-2xl border border-[var(--line-200)] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--navy-900)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--slate-500)]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--tint-050)] py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="faq-heading" className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">
            Questions practices ask
          </h2>
          <div className="mt-10 space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-[var(--navy-900)]">{faq.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--slate-500)]">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm leading-relaxed text-[var(--slate-500)]">
            BippiBot is run by Jay McCarthy.{" "}
            <Link href="/about-us" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
              Read about the team
            </Link>
            , or go back to the{" "}
            <Link href="/" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
              BippiBot homepage
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[var(--navy-950)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">See if a virtual employee fits your practice</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--lavender-300)]">
            Book a discovery call and walk through the inbox, appointment requests, reminders, and vendors. The
            button opens the contact page. You can also email BippiBot directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookDiscoveryCall className={primaryCtaClass} />
            <a
              href="mailto:support@bippibot.com"
              className={secondaryCtaClass}
            >
              Email support@bippibot.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
