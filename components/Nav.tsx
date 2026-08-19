"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/packages", label: "Automation Packages" },
  { href: "/real-estate-video", label: "Real Estate Video" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy-950)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)] text-base font-bold text-white">
            B
          </span>
          <span className="text-lg font-bold tracking-tight text-white">BippiBot</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--lavender-300)] transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
          >
            Book Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--navy-950)] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--lavender-300)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--teal-500)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
