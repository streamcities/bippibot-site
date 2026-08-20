export const metadata = {
  title: "Contact",
  description:
    "Reach BippiBot by phone, email, or book a free 15-minute consultation with Jay to see whether an automation package or reactivation campaign is right for your business.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--navy-950)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Let&apos;s talk about your business</h1>
          <p className="mt-4 text-lg text-[var(--lavender-300)]">
            Personalized service to find the best solution for you — by phone, email, or a quick call with Jay.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line-200)] bg-white p-7 text-center">
            <div className="mb-3 text-3xl">☎️</div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--slate-400)]">Call</h2>
            <a href="tel:+17754417200" className="mt-2 block text-lg font-semibold text-[var(--navy-900)]">
              (775) 441-7200
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--line-200)] bg-white p-7 text-center">
            <div className="mb-3 text-3xl">✉️</div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--slate-400)]">Email</h2>
            <a href="mailto:support@bippibot.com" className="mt-2 block text-lg font-semibold text-[var(--navy-900)]">
              support@bippibot.com
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--line-200)] bg-white p-7 text-center">
            <div className="mb-3 text-3xl">🕐</div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--slate-400)]">Hours</h2>
            <p className="mt-2 text-lg font-semibold text-[var(--navy-900)]">Mon&ndash;Fri, 9am&ndash;5pm PT</p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Book a Free 15-Minute Consultation with Jay</h2>
          <p className="mt-3 text-[var(--lavender-300)]">
            We&apos;ll look at your customer list and business and tell you honestly whether a reactivation campaign
            or automation package makes sense for you.
          </p>
          <a
            href="https://presurgi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Schedule on Presurgi →
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[var(--slate-400)]">
          Sanibel Island, FL &middot; Las Vegas, NV
        </p>
      </section>
    </>
  );
}
