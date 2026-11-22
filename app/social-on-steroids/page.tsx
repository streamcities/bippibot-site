import type { Metadata } from "next";
import Image from "next/image";
import DemoForm from "./DemoForm";
import StickyCta from "./StickyCta";
import { bookingUrl } from "./booking";
import { FAQS, PAGE_DESCRIPTION, PAGE_PATH, PAGE_TITLE } from "./content";

const SITE = "https://bippibot.com";
const A = "/social-on-steroids";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | BippiBot` },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    siteName: "BippiBot",
    title: "Social on Steroids: every listing marketed like a luxury launch",
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    images: [{ url: `${A}/og.jpg`, width: 1200, height: 630, alt: "One listing becomes a tour video, carousel, flyer, and neighborhood guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social on Steroids: every listing marketed like a luxury launch",
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
      provider: { "@type": "Organization", name: "BippiBot", url: SITE },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social on Steroids pricing",
        itemListElement: [
          { "@type": "Offer", name: "Setup (one time)", price: "495", priceCurrency: "USD" },
          {
            "@type": "Offer",
            name: "Monthly, per agent",
            priceSpecification: { "@type": "UnitPriceSpecification", price: "395", priceCurrency: "USD", unitText: "MONTH" },
          },
          { "@type": "Offer", name: "Standard listing package (under $1M)", price: "295", priceCurrency: "USD" },
          { "@type": "Offer", name: "Luxury listing package ($1M and up)", price: "495", priceCurrency: "USD" },
          {
            "@type": "Offer",
            name: "Monthly Market Newsletter add-on (founding rate)",
            priceSpecification: { "@type": "UnitPriceSpecification", price: "149", priceCurrency: "USD", unitText: "MONTH" },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}${PAGE_PATH}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

function Cta({
  className = "",
  children = "Book a 15-minute demo",
  placement,
}: {
  className?: string;
  children?: React.ReactNode;
  placement: string;
}) {
  return (
    <a
      href={bookingUrl(placement)}
      data-cta={placement}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center rounded-full bg-[#D63D1A] px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-[#B93515] ${className}`}
    >
      {children}
    </a>
  );
}

const Check = () => (
  <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#D63D1A] text-[11px] font-black text-white">✓</span>
);

const OUTPUTS = [
  { icon: "🎬", t: "Vertical tour video", d: "Reels, TikTok, Shorts" },
  { icon: "🖼️", t: "Instagram carousel", d: "Swipeable photo story" },
  { icon: "📄", t: "Open-house flyer", d: "With QR to your listing" },
  { icon: "🗺️", t: "Neighborhood guide", d: "For out-of-town buyers" },
  { icon: "💬", t: "5 social captions", d: "Ready to post" },
  { icon: "✍️", t: "Listing description", d: "Polished and improved" },
  { icon: "📧", t: "Just-listed email", d: "For your buyer list" },
];

const CAROUSEL = ["01", "02", "03", "04", "05", "06"];

export default function SocialOnSteroidsPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <style>{`@media (max-width:1023px){body{padding-bottom:76px}} #showcase,#how,#pricing,#faq,#demo{scroll-margin-top:84px}`}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1D3A] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#D63D1A]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5A36]">For busy Florida listing agents</p>
            <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Social on <span className="text-[#FF5A36]">Steroids</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#E6ECF5] sm:text-xl">
              Every new listing gets a tour video, carousel, flyer, neighborhood guide, posts, and a just-listed email, done for you with a fast turnaround. <strong className="text-white">You just tap Approve.</strong>
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta placement="hero" />
              <a href="#showcase" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10">
                See real sample work ↓
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#B9C4D8]">
              <li>✓ You approve everything</li>
              <li>✓ You keep your brand</li>
              <li>✓ Month to month</li>
            </ul>
          </div>

          {/* Hero visual: phone with tour + floating outputs */}
          <div className="relative mx-auto h-[440px] w-full max-w-[460px] sm:h-[520px]">
            <div className="absolute left-1/2 top-0 z-10 w-[200px] -translate-x-1/2 overflow-hidden rounded-[2rem] border-[6px] border-[#1d2c4a] bg-black shadow-2xl sm:w-[236px]">
              <Image src={`${A}/tour-poster.webp`} alt="Frame from a vertical listing tour video" width={540} height={960} priority sizes="236px" className="h-auto w-full" />
              <span className="absolute left-3 top-14 rounded-full bg-[#D63D1A] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide">▶ Tour video</span>
            </div>
            <div className="absolute left-0 top-16 w-[140px] -rotate-6 overflow-hidden rounded-xl bg-white shadow-xl sm:w-[168px]">
              <Image src={`${A}/carousel-05.webp`} alt="Instagram carousel slide" width={640} height={800} sizes="168px" className="h-auto w-full" />
              <p className="px-2 py-1 text-[10px] font-bold text-[#0B1D3A]">Carousel</p>
            </div>
            <div className="absolute bottom-6 right-0 w-[150px] rotate-6 overflow-hidden rounded-xl bg-white shadow-xl sm:w-[180px]">
              <Image src={`${A}/flyer.webp`} alt="Open-house flyer" width={820} height={875} sizes="180px" className="h-auto w-full" />
              <p className="px-2 py-1 text-[10px] font-bold text-[#0B1D3A]">Open-house flyer</p>
            </div>
            <div className="absolute bottom-0 left-2 z-20 rounded-2xl bg-white px-4 py-3 text-[#0B1D3A] shadow-xl">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#5A6884]">New listing detected</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-extrabold">
                7 pieces ready <span className="rounded-full bg-[#D63D1A] px-2.5 py-1 text-xs text-white">Approve</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <section className="border-b border-[var(--line-200)] bg-[#F2F5FA]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:px-6 md:grid-cols-2">
          <p className="border-l-4 border-[#FF5A36] pl-4 text-lg text-[#0E1B33]">
            <strong>You don&apos;t have time to market every listing well.</strong> Most get one just-listed post, then go quiet. Sellers notice.
          </p>
          <p className="border-l-4 border-[#FF5A36] pl-4 text-lg text-[#0E1B33]">
            <strong>Your listing deserves your own spotlight.</strong> Your page, posts, comments, and DMs route inquiries straight to you.
          </p>
        </div>
      </section>

      {/* ONE LISTING BECOMES ALL THIS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Before → After</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">One listing becomes all this</h2>
        </div>
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1.6fr]">
          <div className="rounded-3xl border border-[var(--line-200)] bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#5A6884]">Before: what you already have</p>
            <Image src={`${A}/photo-01.webp`} alt="A single listing photo of a Sanibel home" width={960} height={640} sizes="(min-width:1024px) 360px, 100vw" className="h-auto w-full rounded-2xl" />
            <p className="mt-3 text-sm text-[#5A6884]">Listing photos + MLS details. No shoot, no drone, no editor.</p>
          </div>
          <div aria-hidden className="mx-auto flex h-14 w-14 rotate-90 items-center justify-center rounded-full bg-[#D63D1A] text-2xl font-black text-white shadow-lg lg:rotate-0">→</div>
          <div className="rounded-3xl bg-[#0B1D3A] p-5 text-white shadow-xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[#FF5A36]">After: your listing launch kit</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {OUTPUTS.map((o) => (
                <li key={o.t} className="rounded-2xl bg-white/[0.07] p-3 ring-1 ring-white/10">
                  <span className="text-2xl" aria-hidden>{o.icon}</span>
                  <p className="mt-1 text-sm font-extrabold">{o.t}</p>
                  <p className="text-xs text-[#B9C4D8]">{o.d}</p>
                </li>
              ))}
              <li className="flex flex-col justify-center rounded-2xl bg-[#D63D1A] p-3">
                <p className="text-sm font-extrabold">+ status posts</p>
                <p className="text-xs text-white">Price improved, open house, under contract, sold</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="bg-[#F2F5FA] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Real sample work</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Built for a $3,495,000 Sanibel listing</h2>
            <p className="mt-3 text-lg text-[#5A6884]">
              A home across the street from the Gulf, built from the live listing&apos;s photos. Agent branding is swapped for a &ldquo;Your logo&rdquo; placeholder here. Nothing was posted.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <figure className="rounded-3xl bg-white p-4 shadow-sm">
              <video
                className="aspect-[9/16] w-full rounded-2xl bg-black"
                controls
                muted
                playsInline
                preload="none"
                poster={`${A}/tour-poster.webp`}
                aria-label="Vertical tour video sample"
              >
                <source src={`${A}/tour.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Vertical tour video <span className="font-medium text-[#5A6884]">· 30-second reel</span></figcaption>
            </figure>

            <div className="grid min-w-0 gap-6">
              <figure className="min-w-0 rounded-3xl bg-white p-4 shadow-sm">
                <figcaption className="mb-3 flex items-center justify-between text-sm font-bold text-[#0B1D3A]">
                  Instagram carousel <span className="font-medium text-[#5A6884]">swipe →</span>
                </figcaption>
                <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2" tabIndex={0} aria-label="Carousel slides">
                  {CAROUSEL.map((n, i) => (
                    <Image
                      key={n}
                      src={`${A}/carousel-${n}.webp`}
                      alt={`Carousel slide ${i + 1}`}
                      width={640}
                      height={800}
                      sizes="220px"
                      loading="lazy"
                      className="h-auto w-[62%] flex-none snap-start rounded-xl sm:w-[220px]"
                    />
                  ))}
                </div>
              </figure>
              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="rounded-3xl bg-white p-4 shadow-sm">
                  <Image src={`${A}/flyer.webp`} alt="Open-house flyer with QR code placeholder" width={820} height={875} sizes="(min-width:640px) 400px, 100vw" loading="lazy" className="h-auto w-full rounded-xl border border-[var(--line-200)]" />
                  <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Open-house flyer <span className="font-medium text-[#5A6884]">· QR to your listing</span></figcaption>
                </figure>
                <figure className="rounded-3xl bg-white p-4 shadow-sm">
                  <Image src={`${A}/guide.webp`} alt="Neighborhood guide for buyers" width={900} height={713} sizes="(min-width:640px) 400px, 100vw" loading="lazy" className="h-auto w-full rounded-xl border border-[var(--line-200)]" />
                  <figcaption className="mt-3 text-sm font-bold text-[#0B1D3A]">Neighborhood guide <span className="font-medium text-[#5A6884]">· beaches, dining, drive times</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center"><Cta placement="showcase">See it for your next listing</Cta></div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <h2 className="text-center text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Launch it. Then keep it moving.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--line-200)] p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#C43A18]">For every new listing</p>
            <ul className="mt-4 space-y-3 text-[#0E1B33]">
              {["Vertical tour video from the listing photos", "Photo carousel for Instagram and Facebook", "Open-house flyer with a QR code to the listing", "Neighborhood guide for out-of-town buyers", "Five ready-to-post social captions", "An improved listing description", "A just-listed email for your buyer list"].map((t) => (
                <li key={t} className="flex gap-3"><Check />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[var(--line-200)] p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#C43A18]">While it&apos;s live, and between listings</p>
            <ul className="mt-4 space-y-3 text-[#0E1B33]">
              {["The bot watches for each new listing", "Price-drop, open-house, under-contract, and just-sold posts", "A weekly seller report you can forward", "Comments and DMs routed to you", "Drafted open-house follow-ups, ready to send", "A monthly local market recap, so your feed stays active"].map((t) => (
                <li key={t} className="flex gap-3"><Check />{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-center text-sm text-[#5A6884]">Photography, drone, and on-site filming are not included. Paid ad spend is separate.</p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-[#0B1D3A] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-5xl">How it works</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["A new listing goes live", "The bot picks it up and builds the full marketing package from your photos and listing details."],
              ["You review and tap Approve", "Nothing posts or sends until you say yes. You stay compliant, and your brokerage stays comfortable."],
              ["The campaign runs", "Approved posts go out on schedule. Status changes, seller reports, inquiries, and follow-ups are handled for you."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D63D1A] text-lg font-black">{i + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#B9C4D8]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#C43A18]">Simple pricing</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Month to month. No long contract.</h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-3xl bg-[#D63D1A] px-6 py-5 text-center text-white shadow-lg sm:flex-row sm:text-left">
          <p className="text-lg font-black sm:text-xl">Founding-agent offer: setup waived + your first listing free.</p>
          <p className="text-sm font-semibold text-white">Standard rates after that.</p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-[var(--line-200)] bg-[#F2F5FA] p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#5A6884]">Setup · one time</p>
            <p className="mt-2 text-5xl font-black text-[#0B1D3A]">$495</p>
            <p className="mt-1 text-sm font-extrabold text-[#C43A18]">Waived for founding agents</p>
            <p className="mt-3 text-sm text-[#5A6884]">Brand kit, channel connection, brokerage disclosure line, listing watch, and the approval workflow.</p>
          </div>
          <div className="relative rounded-3xl border-2 border-[#0B1D3A] bg-white p-6 shadow-xl">
            <span className="absolute -top-3 left-6 rounded-full bg-[#0B1D3A] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">The engine</span>
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#5A6884]">Monthly · per agent</p>
            <p className="mt-2 text-5xl font-black text-[#0B1D3A]">$395<span className="text-lg font-bold text-[#5A6884]">/mo</span></p>
            <p className="mt-3 text-sm text-[#5A6884]">Listing monitoring, approval-required scheduling, status-change posts, weekly seller reports, comment and DM routing, open-house follow-up drafts, and the monthly market recap.</p>
          </div>
          <div className="rounded-3xl border border-[var(--line-200)] bg-[#F2F5FA] p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#5A6884]">Per listing</p>
            <p className="mt-2 text-5xl font-black text-[#0B1D3A]">$295</p>
            <p className="mt-1 text-sm font-extrabold text-[#0B1D3A]">$495 for listings $1M and up</p>
            <p className="mt-1 text-sm font-extrabold text-[#C43A18]">First listing free for founding agents</p>
            <p className="mt-3 text-sm text-[#5A6884]">The full package. Luxury adds a deeper neighborhood guide and the complete price-change and still-available post set.</p>
          </div>
        </div>

        <div className="mt-5 grid items-center gap-4 rounded-3xl border-2 border-[#0B1D3A] p-6 sm:grid-cols-[auto_1fr_auto]">
          <span className="w-fit rounded-md bg-[#0B1D3A] px-2.5 py-1 text-xs font-extrabold uppercase tracking-widest text-white">Add-on</span>
          <div>
            <h3 className="text-lg font-extrabold text-[#0B1D3A]">Monthly Market Newsletter</h3>
            <p className="text-sm text-[#5A6884]">A branded email to your past clients and sphere every month: local market snapshot, your new listings and solds, area happenings, and a &ldquo;thinking of selling?&rdquo; prompt. You approve before it sends.</p>
          </div>
          <p className="text-right"><span className="text-3xl font-black text-[#0B1D3A]">$149</span><span className="font-bold text-[#5A6884]">/mo</span><br /><span className="text-xs font-semibold text-[#5A6884]">founding rate</span></p>
        </div>

        <p className="mt-5 text-center text-sm text-[#5A6884]">
          What an active month costs at standard rates: one standard listing, <strong>$690</strong>. One luxury listing, <strong>$890</strong>.
        </p>
        <div className="mt-8 text-center"><Cta placement="pricing">Book a 15-minute demo</Cta></div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F2F5FA] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-5xl">Questions agents ask</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.question} className="group rounded-2xl bg-white p-5 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[#0B1D3A]">
                  {f.question}
                  <span aria-hidden className="text-xl text-[#C43A18] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[#5A6884]">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" className="relative overflow-hidden bg-[#0B1D3A] py-16 text-white lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#D63D1A]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Book a <span className="text-[#FF5A36]">15-minute demo</span>
            </h2>
            <p className="mt-4 text-lg text-[#C9D3E4]">With Jay McCarthy, founder of BippiBot. We&apos;ll walk through a real listing package and show you how approvals work.</p>
            <ul className="mt-6 space-y-3 text-[#E6ECF5]">
              <li className="flex gap-3"><Check />You approve all content before it posts</li>
              <li className="flex gap-3"><Check />Copy describes the property, never the buyer</li>
              <li className="flex gap-3"><Check />Your brand on everything, not ours</li>
            </ul>
            <div className="mt-8"><Cta placement="demo-section">Pick a time on Jay&apos;s calendar</Cta></div>
            <p className="mt-3 text-sm text-[#C9D3E4]">Prefer we reach out? Send a request with the form instead.</p>
          </div>
          <DemoForm />
        </div>
      </section>

      <StickyCta />
    </div>
  );
}
