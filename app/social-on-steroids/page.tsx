import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NOINDEX } from "@/lib/noindex";
import LeadForm from "./LeadForm";
import StickyCta from "./StickyCta";
import Tracking from "./Tracking";
import HeroVideo from "./HeroVideo";
import { DEMO_HREF, DEMO_ID, KIT_FORM_ID, KIT_HREF, calEmbedUrl } from "./booking";
import {
  ALSO_INCLUDED, FAQS, FOUNDING_RESULTS, HERO_DELIVERABLES, PAGE_DESCRIPTION, PAGE_PATH, PAGE_TITLE,
  TESTIMONIALS, TURNAROUND, TURNAROUND_CONFIRMED,
} from "./content";

const SITE = "https://www.bippibot.com";
const A = "/social-on-steroids";
/** Placeholders for missing proof and assets are shown on preview deployments only. */
const SHOW_PLACEHOLDERS = SITE_NOINDEX;

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | BippiBot` },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    siteName: "BippiBot",
    title: "Every new listing gets a full launch kit. You just approve it.",
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    images: [{ url: `${A}/og.jpg`, width: 1200, height: 630, alt: "One listing becomes a tour video, carousel, flyer, and neighborhood guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Every new listing gets a full launch kit. You just approve it.",
    description: PAGE_DESCRIPTION,
    images: [`${A}/og.jpg`],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE}${PAGE_PATH}#service`,
      name: "Social on Steroids by BippiBot",
      serviceType: "Real estate listing marketing",
      description: PAGE_DESCRIPTION,
      url: `${SITE}${PAGE_PATH}`,
      audience: { "@type": "BusinessAudience", audienceType: "Real estate listing agents" },
      areaServed: { "@type": "State", name: "Florida" },
      provider: { "@type": "Organization", name: "BippiBot", url: SITE, parentOrganization: { "@type": "Organization", name: "StreamCities, LLC" } },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social on Steroids pricing",
        itemListElement: [
          { "@type": "Offer", name: "Setup (one time)", price: "495", priceCurrency: "USD" },
          { "@type": "Offer", name: "Monthly engine, per agent", priceSpecification: { "@type": "UnitPriceSpecification", price: "395", priceCurrency: "USD", unitText: "MONTH" } },
          { "@type": "Offer", name: "Per listing (under $1M)", price: "295", priceCurrency: "USD" },
          { "@type": "Offer", name: "Per listing ($1M and up)", price: "495", priceCurrency: "USD" },
          { "@type": "Offer", name: "Monthly Market Newsletter add-on", priceSpecification: { "@type": "UnitPriceSpecification", price: "149", priceCurrency: "USD", unitText: "MONTH" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}${PAGE_PATH}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ],
};

/** Visible "[JAY: CONFIRM]" flag next to every turnaround mention until TURNAROUND_CONFIRMED is true. */
const Flag = () =>
  TURNAROUND_CONFIRMED ? null : (
    <span className="ml-1 inline-block rounded bg-[#FDE68A] px-1.5 py-0.5 align-middle text-[11px] font-extrabold leading-4 text-[#7A2E0E]">[JAY: CONFIRM]</span>
  );

function Placeholder({ title, need, className = "", dark = false }: { title: string; need: string; className?: string; dark?: boolean }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div className={`rounded-2xl border-2 border-dashed p-5 ${dark ? "border-white/40 text-white" : "border-[#C43A18]/50 bg-[#FFF7ED] text-[#7A2E0E]"} ${className}`}>
      <p className="text-[11px] font-extrabold uppercase tracking-widest">Placeholder · not shown in production</p>
      <p className="mt-1 font-extrabold">{title}</p>
      <p className="mt-1 text-sm opacity-90">{need}</p>
    </div>
  );
}

function PrimaryCta({ placement, className = "" }: { placement: string; className?: string }) {
  return (
    <a href={KIT_HREF} data-cta={placement}
      className={`inline-flex items-center justify-center rounded-full bg-[#D63D1A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-[#B93515] ${className}`}>
      Get your free listing kit
    </a>
  );
}

const Check = ({ dark = false }: { dark?: boolean }) => (
  <span aria-hidden className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px] font-black ${dark ? "bg-white text-[#D63D1A]" : "bg-[#D63D1A] text-white"}`}>✓</span>
);

const CAROUSEL = ["01", "02", "03", "04", "05", "06"];
const DELIVERABLE_IMG: Record<string, { src: string; w: number; h: number; alt: string }> = {
  tour: { src: `${A}/tour-poster.webp`, w: 540, h: 960, alt: "Frame from the vertical tour video" },
  carousel: { src: `${A}/carousel-01.webp`, w: 640, h: 800, alt: "First slide of the Instagram carousel" },
  flyer: { src: `${A}/flyer.webp`, w: 820, h: 875, alt: "Open-house flyer" },
  guide: { src: `${A}/guide.webp`, w: 900, h: 713, alt: "Neighborhood guide" },
};

export default function SocialOnSteroidsPage() {
  const cal = calEmbedUrl();
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{`@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}} @media (max-width:1023px){body{padding-bottom:84px}} #showcase,#how,#pricing,#faq,#demo,#get-kit-section{scroll-margin-top:72px} #get-kit{scroll-margin-top:88px}`}</style>

      {/* 7. MINIMAL HEADER: logo + primary CTA only */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1D3A]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-base font-bold text-white">B</span>
            <span className="text-lg font-bold tracking-tight text-white">BippiBot</span>
          </Link>
          <a href={KIT_HREF} data-cta="header" className="rounded-full bg-[#D63D1A] px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#B93515] sm:px-5">
            <span className="sm:hidden">Free listing kit</span><span className="hidden sm:inline">Get your free listing kit</span>
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#0B1D3A] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#D63D1A]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF7A5C]">Social on Steroids · for Florida listing agents</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Every new listing gets a full launch kit. <span className="text-[#FF7A5C]">You just approve it.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#E6ECF5]">
              A tour video, Instagram carousel, open-house flyer, neighborhood guide and posts, built from the photos you already have and ready {TURNAROUND}<Flag />. No videographer needed.
            </p>
            <p className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-bold ring-1 ring-white/15">
              <span className="rounded-full bg-[#D63D1A] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide">Founding offer</span>
              First listing free. $495 setup waived.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryCta placement="hero" />
              <a href="#showcase" data-cta="hero-sample" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10">
                See the sample work
              </a>
            </div>
            <p className="mt-4 text-sm text-[#C9D3E4]">
              Prefer to talk? <a href={DEMO_HREF} data-cta="hero-demo" className="font-bold text-white underline underline-offset-4">Book a 15-minute demo</a>.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#C9D3E4]">
              <li>✓ You approve everything</li>
              <li>✓ Your brand, not ours</li>
              <li>✓ Month to month</li>
            </ul>
          </div>

          {/* Real sample work in the hero */}
          <div className="relative mx-auto h-[430px] w-full max-w-[440px] sm:h-[520px]">
            <div className="absolute left-1/2 top-0 z-10 w-[196px] -translate-x-1/2 overflow-hidden rounded-[2rem] border-[6px] border-[#1d2c4a] bg-black shadow-2xl sm:w-[236px]">
              <HeroVideo src={`${A}/tour.mp4`} poster={`${A}/tour-poster.webp`} />
            </div>
            <div className="absolute left-0 top-16 w-[132px] -rotate-6 overflow-hidden rounded-xl bg-white shadow-xl sm:w-[168px]">
              <Image src={`${A}/carousel-05.webp`} alt="Instagram carousel slide from the sample kit" width={640} height={800} sizes="168px" priority className="h-auto w-full" />
              <p className="px-2 py-1 text-[10px] font-bold text-[#0B1D3A]">Carousel</p>
            </div>
            <div className="absolute bottom-4 right-0 w-[142px] rotate-6 overflow-hidden rounded-xl bg-white shadow-xl sm:w-[180px]">
              <Image src={`${A}/flyer.webp`} alt="Open-house flyer from the sample kit" width={820} height={875} sizes="180px" className="h-auto w-full" />
              <p className="px-2 py-1 text-[10px] font-bold text-[#0B1D3A]">Open-house flyer</p>
            </div>
            <p className="absolute bottom-0 left-0 z-20 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-[#0B1D3A] shadow-xl">Real sample · $3,495,000 Sanibel listing</p>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF (real proof only; founding-agent banner until it exists) */}
      <section aria-label="Founding agents" className="border-b border-[var(--line-200)] bg-[#F2F5FA]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          {TESTIMONIALS.length ? (
            <div className="grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="rounded-2xl bg-white p-5 shadow-sm">
                  <blockquote className="text-[#0E1B33]">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">{t.name} <span className="font-medium text-[#5A6884]">· {t.brokerage}</span></figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#0B1D3A] px-6 py-6 text-center text-white sm:flex-row sm:text-left">
              <div>
                <p className="text-xl font-black">Founding agents wanted: your first listing is free.</p>
                <p className="mt-1 text-sm text-[#C9D3E4]">We&apos;re taking on a small group of Florida listing agents. Setup ($495) is waived.</p>
              </div>
              <PrimaryCta placement="proof-banner" className="flex-none" />
            </div>
          )}
          {FOUNDING_RESULTS.length ? (
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FOUNDING_RESULTS.map((r) => (
                <li key={r.label} className="rounded-2xl bg-white p-4 text-center shadow-sm"><p className="text-2xl font-black text-[#0B1D3A]">{r.value}</p><p className="text-xs text-[#5A6884]">{r.label}</p></li>
              ))}
            </ul>
          ) : null}
          {SHOW_PLACEHOLDERS && !TESTIMONIALS.length ? (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Placeholder title="Testimonial card 1" need="Real agent: photo, name, brokerage, a quote they approved in writing." />
              <Placeholder title="Testimonial card 2" need="Same as card 1. Optional, up to 3 cards." />
              <Placeholder title="Founding-agent results strip" need="Real numbers from founding agents (e.g. hours saved per listing, posts published). Only measured figures." />
            </div>
          ) : null}
          {SHOW_PLACEHOLDERS ? <Placeholder className="mt-4" title="Brokerage or MLS logos (optional)" need="Only with written permission and a real relationship. Leave out otherwise." /> : null}
        </div>
      </section>

      {/* 9. THE KIT: 4 hero deliverables + "Also included" */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">What one listing gets</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Your listing launch kit</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[#5A6884]">Built from your listing photos and MLS details. No shoot, no drone, no editor.</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO_DELIVERABLES.map((d) => {
            const img = DELIVERABLE_IMG[d.key];
            return (
              <li key={d.key} className="overflow-hidden rounded-3xl border border-[var(--line-200)] bg-white shadow-sm">
                <div className="aspect-[4/5] overflow-hidden bg-[#F2F5FA]">
                  <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes="(min-width:1024px) 300px, 50vw" loading="lazy" className="h-full w-full object-cover object-top" />
                </div>
                <div className="p-4">
                  <p className="font-extrabold text-[#0B1D3A]">{d.t}</p>
                  <p className="text-sm text-[#5A6884]">{d.d}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <details className="group mx-auto mt-6 max-w-3xl rounded-2xl border border-[var(--line-200)] bg-[#F2F5FA] p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-extrabold text-[#0B1D3A]">
            Also included <span aria-hidden className="text-xl text-[#C43A18] transition group-open:rotate-45">+</span>
          </summary>
          <ul className="mt-4 grid gap-2 text-[#0E1B33] sm:grid-cols-2">
            {ALSO_INCLUDED.map((t) => <li key={t} className="flex gap-3"><Check />{t}</li>)}
          </ul>
        </details>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-[#5A6884]">
          <span className="mr-1 rounded bg-[#E6ECF5] px-1.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-[#0B1D3A]">On the roadmap</span>
          Automatic new-listing detection. Today, you send us the listing.
        </p>
      </section>

      {/* SHOWCASE + 10. mid-market slot */}
      <section id="showcase" className="bg-[#F2F5FA] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Real sample work</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Built for a $3,495,000 Sanibel listing</h2>
            <p className="mt-3 text-lg text-[#5A6884]">Made from a live listing&apos;s photos. Branding is replaced with a &ldquo;Your logo&rdquo; placeholder. Nothing was posted.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <figure className="rounded-3xl bg-white p-4 shadow-sm">
              <video data-video="showcase-tour" className="aspect-[9/16] w-full rounded-2xl bg-black" controls muted playsInline preload="none" poster={`${A}/tour-poster.webp`} aria-label="30-second vertical tour video sample">
                <source src={`${A}/tour.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Tour video <span className="font-medium text-[#5A6884]">· 30 seconds, vertical</span></figcaption>
            </figure>
            <div className="grid min-w-0 gap-6">
              <figure className="min-w-0 rounded-3xl bg-white p-4 shadow-sm">
                <figcaption className="mb-3 flex items-center justify-between text-sm font-bold text-[#0B1D3A]">Instagram carousel <span className="font-medium text-[#5A6884]">swipe →</span></figcaption>
                <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2" tabIndex={0} aria-label="Carousel slides">
                  {CAROUSEL.map((n, i) => (
                    <Image key={n} src={`${A}/carousel-${n}.webp`} alt={`Carousel slide ${i + 1}`} width={640} height={800} sizes="220px" loading="lazy" className="h-auto w-[62%] flex-none snap-start rounded-xl sm:w-[220px]" />
                  ))}
                </div>
              </figure>
              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="rounded-3xl bg-white p-4 shadow-sm">
                  <Image src={`${A}/flyer.webp`} alt="Open-house flyer with QR code placeholder" width={820} height={875} sizes="(min-width:640px) 400px, 100vw" loading="lazy" className="h-auto w-full rounded-xl border border-[var(--line-200)]" />
                  <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Open-house flyer <span className="font-medium text-[#5A6884]">· QR to your listing</span></figcaption>
                </figure>
                <figure className="rounded-3xl bg-white p-4 shadow-sm">
                  <Image src={`${A}/guide.webp`} alt="Neighborhood guide" width={900} height={713} sizes="(min-width:640px) 400px, 100vw" loading="lazy" className="h-auto w-full rounded-xl border border-[var(--line-200)]" />
                  <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Neighborhood guide <span className="font-medium text-[#5A6884]">· beaches, dining, drive times</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
          <Placeholder className="mt-8" title="Second sample: a mid-market listing ($500K–$900K)"
            need="Same kit (tour video, carousel, flyer, guide) built from a live Florida listing in this range, e.g. a 3-bed single-family home in Cape Coral or Fort Myers, with the listing agent's permission to use the photos. Branding replaced with 'Your logo'." />
          <div className="mt-10 text-center"><PrimaryCta placement="showcase" /></div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (truthful, 3 steps) */}
      <section id="how" className="bg-[#0B1D3A] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-5xl">How it works</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            <li className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D63D1A] text-lg font-black">1</span>
              <h3 className="mt-4 text-xl font-extrabold">Send the listing</h3>
              <p className="mt-2 text-[#C9D3E4]">Send the listing link or address. We use the photos and MLS details you already have.</p>
            </li>
            <li className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D63D1A] text-lg font-black">2</span>
              <h3 className="mt-4 text-xl font-extrabold">Review and approve</h3>
              <p className="mt-2 text-[#C9D3E4]">Your launch kit is ready to review {TURNAROUND}<Flag />. Approve what you want. Nothing posts or sends without your approval.</p>
            </li>
            <li className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D63D1A] text-lg font-black">3</span>
              <h3 className="mt-4 text-xl font-extrabold">We run the campaign</h3>
              <p className="mt-2 text-[#C9D3E4]">Approved posts go out on schedule, with status posts for price changes, open houses, under contract and sold.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 2. PRIMARY CONVERSION: send one listing */}
      <section id={`${KIT_FORM_ID}-section`} className="relative overflow-hidden bg-[#F2F5FA] py-16 lg:py-20">
        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Founding offer</p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-[#0B1D3A] sm:text-5xl">Send us one listing. The first kit is free.</h2>
            <ul className="mt-6 space-y-3 text-[#0E1B33]">
              <li className="flex gap-3"><Check />The full launch kit, ready to review {TURNAROUND}<Flag /></li>
              <li className="flex gap-3"><Check />Built from photos you already have</li>
              <li className="flex gap-3"><Check />Your brand on everything</li>
              <li className="flex gap-3"><Check />Nothing posts until you approve it</li>
            </ul>
            {/* 11. founder near the form */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              {SHOW_PLACEHOLDERS ? (
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full border-2 border-dashed border-[#C43A18]/60 bg-[#FFF7ED] text-center text-[9px] font-extrabold uppercase leading-tight text-[#7A2E0E]">Headshot<br />placeholder</div>
              ) : (
                <div aria-hidden className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#0B1D3A] text-lg font-black text-white">JM</div>
              )}
              <div>
                <p className="font-extrabold text-[#0B1D3A]">Jay McCarthy, founder of BippiBot</p>
                <p className="text-sm text-[#5A6884]">Jay reviews every listing that comes in and leads every demo.</p>
              </div>
            </div>
          </div>
          <LeadForm variant="kit" id={KIT_FORM_ID} turnaround={TURNAROUND} turnaroundFlag={!TURNAROUND_CONFIRMED} />
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Pricing</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Start with one free listing</h2>
        </div>
        <div className="mt-8 rounded-3xl bg-[#D63D1A] px-6 py-5 text-center text-white shadow-lg">
          <p className="text-lg font-black sm:text-xl">Founding offer: your first listing is free, and the $495 setup is waived.</p>
        </div>
        <dl className="mt-6 divide-y divide-[var(--line-200)] rounded-3xl border border-[var(--line-200)] bg-white">
          <div className="flex flex-wrap items-baseline justify-between gap-2 p-5">
            <dt className="font-extrabold text-[#0B1D3A]">Setup <span className="font-medium text-[#5A6884]">· one time</span></dt>
            <dd className="text-right"><span className="text-2xl font-black text-[#0B1D3A]">$495</span> <span className="text-sm font-extrabold text-[#C43A18]">waived for founding agents</span></dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 p-5">
            <dt className="font-extrabold text-[#0B1D3A]">Monthly engine <span className="font-medium text-[#5A6884]">· per agent</span></dt>
            <dd className="text-right"><span className="text-2xl font-black text-[#0B1D3A]">$395</span><span className="font-bold text-[#5A6884]">/mo</span></dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 p-5">
            <dt className="font-extrabold text-[#0B1D3A]">Per listing <span className="font-medium text-[#5A6884]">· $495 for listings $1M and up</span></dt>
            <dd className="text-right"><span className="text-2xl font-black text-[#0B1D3A]">$295</span> <span className="text-sm font-extrabold text-[#C43A18]">first listing free</span></dd>
          </div>
        </dl>
        <p className="mt-4 text-center font-extrabold text-[#0B1D3A]">Month to month. Cancel anytime.</p>
        <details className="group mt-5 rounded-2xl border border-[var(--line-200)] bg-[#F2F5FA] p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-extrabold text-[#0B1D3A]">
            Add-ons and an example month <span aria-hidden className="text-xl text-[#C43A18] transition group-open:rotate-45">+</span>
          </summary>
          <div className="mt-4 space-y-3 text-sm text-[#0E1B33]">
            <p><b>Monthly Market Newsletter add-on: $149/mo.</b> A branded monthly email to your past clients and sphere: a local market snapshot, your new listings and solds, and a &ldquo;thinking of selling?&rdquo; prompt. You approve it before it sends.</p>
            <p><b>Example active month at standard rates:</b> one standard listing, $690. One luxury listing, $890.</p>
            <p>Paid ad spend is separate. Photography, drone, and on-site filming are not included.</p>
          </div>
        </details>
        <div className="mt-8 rounded-3xl border border-[var(--line-200)] p-6">
          <h3 className="text-xl font-extrabold text-[#0B1D3A]">What this replaces</h3>
          <ul className="mt-4 space-y-3 text-[#0E1B33]">
            <li className="flex gap-3"><Check />A freelance videographer or video editor for the tour video</li>
            <li className="flex gap-3"><Check />A virtual assistant to design, write, and schedule the posts</li>
            <li className="flex gap-3"><Check />Your own evenings building it all yourself</li>
          </ul>
          <p className="mt-4 text-sm text-[#5A6884]">Hiring those out for every listing typically costs far more than one listing fee.</p>
          <Placeholder className="mt-4" title="Verified comparison numbers (optional)" need="If you want dollar figures here, supply sourced, typical Florida rates for a listing videographer/editor and a social media VA. Otherwise the neutral wording above stays." />
        </div>
        <div className="mt-8 text-center"><PrimaryCta placement="pricing" /></div>
      </section>

      {/* Secondary path: demo with a live calendar */}
      <section id={DEMO_ID} className="relative overflow-hidden bg-[#0B1D3A] py-16 text-white lg:py-20">
        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">Prefer to talk? Book a 15-minute demo.</h2>
            <p className="mt-4 text-lg text-[#C9D3E4]">With Jay McCarthy, founder of BippiBot. We&apos;ll walk through a real launch kit and show you how approvals work.</p>
            <ul className="mt-6 space-y-3 text-[#E6ECF5]">
              <li className="flex gap-3"><Check dark />You approve all content before it posts</li>
              <li className="flex gap-3"><Check dark />Copy describes the property, never the buyer</li>
              <li className="flex gap-3"><Check dark />Your brand on everything, not ours</li>
            </ul>
          </div>
          {cal ? (
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <iframe src={cal} title="Book a 15-minute demo with Jay McCarthy" loading="lazy" className="h-[640px] w-full border-0" />
            </div>
          ) : (
            <div>
              <Placeholder dark className="mb-4" title="Live calendar (Cal.com)" need="Set BOOKING_URL in lib/booking.ts to Jay's Cal.com link and the calendar embeds here automatically. Until then, the short form below is the fallback." />
              <LeadForm variant="demo" id="demo-form" turnaround={TURNAROUND} turnaroundFlag={!TURNAROUND_CONFIRMED} />
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F2F5FA] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Questions agents ask</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.question} className="group rounded-2xl bg-white p-5 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[#0B1D3A]">
                  {f.question}
                  <span aria-hidden className="text-xl text-[#C43A18] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[#5A6884]">{f.answer}{"turnaround" in f && f.turnaround ? <Flag /> : null}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center"><PrimaryCta placement="faq" /></div>
        </div>
      </section>

      {/* 7 + 11. MINIMAL FOOTER */}
      <footer className="bg-[#0B1D3A] text-[#C9D3E4]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-bold text-white">BippiBot</p>
            <p>Powered by BippiBot, a StreamCities company. &copy; {new Date().getFullYear()} StreamCities, LLC.</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><a href="tel:+17754417200" className="hover:text-white">(775) 441-7200</a></li>
            <li><a href="mailto:support@bippibot.com" className="hover:text-white">support@bippibot.com</a></li>
            <li><Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">Privacy</Link></li>
            <li><Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-white">Terms</Link></li>
          </ul>
        </div>
        {SHOW_PLACEHOLDERS ? (
          <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-6">
            <Placeholder dark title="Footer brand info" need="Confirm the legal line (BippiBot, a StreamCities company; © StreamCities, LLC), the phone number to show Florida agents ((775) is a Nevada number), and whether to add a Florida business address." />
          </div>
        ) : null}
      </footer>

      <StickyCta />
      <Tracking />
    </div>
  );
}
