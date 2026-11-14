import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { PLAYBOOK_COOKIE, playbookDownloadUrl } from "@/lib/playbook";
import { PlaybookCover } from "../playbook-cover";

export const metadata: Metadata = {
  title: "Your playbook is ready",
  description: "Download The Map Pack Playbook.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/map-pack-playbook/thanks" },
};

export const dynamic = "force-dynamic";

export default async function ThanksPage() {
  const jar = await cookies();
  const unlocked = jar.get(PLAYBOOK_COOKIE)?.value === "1";
  const downloadUrl = playbookDownloadUrl();
  const external = /^https?:\/\//i.test(downloadUrl);

  return (
    <section className="relative overflow-hidden bg-[var(--navy-950)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,184,207,0.22),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-20">
        <PlaybookCover />
        {unlocked ? (
          <>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Your playbook is ready</h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--lavender-300)]">
              Open it, fill the setup once, and start at the beginning of the 12-week run order.
            </p>
            <a
              href={downloadUrl}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: "map-pack-playbook.pdf" })}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto"
            >
              Download The Map Pack Playbook
            </a>
            <p className="mt-4 text-sm text-[var(--lavender-300)]">PDF · The Insiders Stack</p>
          </>
        ) : (
          <>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Get the playbook first</h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--lavender-300)]">
              The download shows up after you send your name and email.
            </p>
            <Link
              href="/map-pack-playbook#playbook-form"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto"
            >
              Go to the form
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
