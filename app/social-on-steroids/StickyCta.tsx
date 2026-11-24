"use client";

import { useEffect, useState } from "react";
import { KIT_FORM_ID, KIT_HREF } from "./booking";

/** Sticky primary CTA: bottom bar on mobile, pill on desktop.
 *  Appears after the hero and hides while the free-kit form is on screen. */
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const form = document.getElementById(`${KIT_FORM_ID}-section`);
    const io = form ? new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.1 }) : null;
    if (form && io) io.observe(form);
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);

  const show = pastHero && !formVisible;
  const hidden = show ? "" : "pointer-events-none translate-y-full opacity-0 lg:translate-y-4";

  return (
    <>
      <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B1D3A]/95 px-4 pt-3 backdrop-blur transition duration-300 lg:hidden ${hidden}`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }} aria-hidden={!show}>
        <a href={KIT_HREF} data-cta="sticky-mobile" tabIndex={show ? 0 : -1}
          className="mx-auto flex max-w-md items-center justify-center rounded-full bg-[#D63D1A] px-5 py-3.5 text-base font-extrabold text-white">
          Get your free listing kit
        </a>
      </div>
      <a href={KIT_HREF} data-cta="sticky-desktop" tabIndex={show ? 0 : -1} aria-hidden={!show}
        className={`fixed bottom-6 left-6 z-40 hidden rounded-full bg-[#D63D1A] px-6 py-3.5 text-sm font-extrabold text-white shadow-2xl shadow-orange-500/40 transition duration-300 hover:bg-[#B93515] lg:inline-flex ${hidden}`}>
        Get your free listing kit
      </a>
    </>
  );
}
