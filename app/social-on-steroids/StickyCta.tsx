"use client";

import { useEffect, useState } from "react";
import { bookingUrl } from "./booking";

/** Sticky "Book a demo" CTA: bottom bar on mobile, pill on desktop.
 *  Appears after the hero scrolls away and hides while the demo form is on screen. */
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const demo = document.getElementById("demo");
    const io = demo ? new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.15 }) : null;
    if (demo && io) io.observe(demo);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !formVisible;
  const hidden = show ? "" : "pointer-events-none translate-y-full opacity-0 lg:translate-y-4";

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B1D3A]/95 px-4 pt-3 backdrop-blur transition duration-300 lg:hidden ${hidden}`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        aria-hidden={!show}
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1 text-white">
            <p className="truncate text-sm font-extrabold">Social on Steroids</p>
            <p className="truncate text-xs text-[#B9C4D8]">Founding offer: setup waived</p>
          </div>
          <a href={bookingUrl("sticky-mobile")} data-cta="sticky-mobile" tabIndex={show ? 0 : -1} className="flex-none rounded-full bg-[#D63D1A] px-5 py-3 text-sm font-extrabold text-white">
            Book a demo
          </a>
        </div>
      </div>
      <a
        href={bookingUrl("sticky-desktop")}
        data-cta="sticky-desktop"
        tabIndex={show ? 0 : -1}
        aria-hidden={!show}
        className={`fixed bottom-6 left-6 z-40 hidden rounded-full bg-[#D63D1A] px-6 py-3.5 text-sm font-extrabold text-white shadow-2xl shadow-orange-500/40 transition duration-300 hover:bg-[#B93515] lg:inline-flex ${hidden}`}
      >
        Book a 15-minute demo
      </a>
    </>
  );
}
