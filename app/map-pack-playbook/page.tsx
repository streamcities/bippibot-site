import type { Metadata } from "next";
import Link from "next/link";
import { fieldErrorMessage } from "@/lib/playbook";
import { FAQS, PAGE_DESCRIPTION, PAGE_PATH, PAGE_TITLE } from "./content";
import { TOPICS } from "./icons";
import { LocalMap, PlaybookScene } from "./map-pack-visual";
import { PlaybookCover } from "./playbook-cover";
import { PlaybookForm } from "./playbook-form";

const SITE = "https://bippibot.com";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    title: "Your Google Business Profile is probably costing you calls",
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Google Business Profile is probably costing you calls",
    description: PAGE_DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "@id": `${SITE}${PAGE_PATH}#playbook`,
      name: "The Map Pack Playbook",
      alternateName: "The Insiders Stack",
      description: PAGE_DESCRIPTION,
      url: `${SITE}${PAGE_PATH}`,
      isAccessibleForFree: true,
      inLanguage: "en",
      provider: {
        "@type": "Organization",
        name: "BippiBot",
        url: SITE,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}${PAGE_PATH}`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}${PAGE_PATH}#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const STEPS = [
  { n: "01", title: "Fill the setup once", copy: "Your business details go in one place. The prompts reuse them." },
  { n: "02", title: "Run the 12-week order", copy: "Sixteen prompts, in the order the playbook lays out." },
  { n: "03", title: "Keep the call report", copy: "A monthly report that tracks calls, so the work stays visible." },
];

export default async function MapPackPlaybookPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const params = await searchParams;
  const code = Array.isArray(params.error) ? params.error[0] : params.error;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />

      <section className="relative bg-[var(--navy-950)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.28),transparent_58%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-x-14 lg:gap-y-8 lg:py-20">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender-300)]">
              Free download · The Insiders Stack
            </p>
            <h1 className="text-[2rem] leading-[1.12] font-bold text-white sm:text-5xl sm:leading-[1.08]">
              Your Google Business Profile is probably costing you calls, and you can&apos;t see why.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--lavender-300)] sm:text-lg">
              The Map Pack Playbook is 16 prompts for Grok Bot, a setup you fill in once, and a 12-week order to run them. Built for local service businesses and medical practices.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["16 prompts", "One setup", "12-week order"].map((item) => (
                <li key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 flex justify-center lg:hidden">
            <PlaybookCover />
          </div>

          <div className="order-4 hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block lg:self-center">
            <PlaybookScene />
          </div>

          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <PlaybookForm initialError={fieldErrorMessage(code)} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--tint-050)] px-6 py-10 lg:hidden" aria-label="Illustrated local map pack">
        <div className="mx-auto max-w-xl">
          <LocalMap />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20" aria-labelledby="inside-heading">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--blue-500)]">Inside the playbook</p>
          <h2 id="inside-heading" className="mt-2 text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">
            What the 16 prompts cover
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--slate-500)]">
            Sixteen prompts, grouped into the work below. You run them in Grok Bot.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic) => (
            <li key={topic.title} className="rounded-2xl border border-[var(--line-200)] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tint-100)] text-[var(--blue-500)]">
                {topic.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">{topic.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--slate-500)]">{topic.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--tint-050)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">How you run it</h2>
            <p className="mt-3 text-[var(--slate-500)]">Three steps. You do them. BippiBot doesn&apos;t log into the profile for you.</p>
          </div>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n} className="rounded-2xl border border-[var(--line-200)] bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-[var(--blue-500)]">{step.n}</span>
                <h3 className="mt-3 text-xl font-semibold text-[var(--navy-900)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--slate-500)]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">Who it&apos;s for</h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--slate-500)]">
          <p>
            Local service businesses and medical practices. If calls come from the map, and you can&apos;t tell why some weeks are quiet, this playbook is the walkthrough.
          </p>
          <p>
            It is a prompt pack, not a retainer. If you want BippiBot to set up and manage automation for the business, that is a separate offer. Start on the{" "}
            <Link href="/contact-us" className="font-semibold text-[var(--blue-500)] underline underline-offset-2">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[var(--tint-050)] py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="faq-heading" className="text-3xl font-bold text-[var(--navy-900)] sm:text-4xl">
            Questions
          </h2>
          <div className="mt-8 border-t border-[var(--line-200)]">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group border-b border-[var(--line-200)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-[var(--navy-900)] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--line-200)] text-lg leading-none text-[var(--blue-500)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-[var(--slate-500)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-950)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get the playbook</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--lavender-300)]">
            First name and email. The download is on the next page.
          </p>
          <a
            href="#playbook-form"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto"
          >
            Send me the playbook
          </a>
        </div>
      </section>
    </>
  );
}
