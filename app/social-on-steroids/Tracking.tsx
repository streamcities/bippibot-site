"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/** Page-level events: CTA clicks, scroll depth 50/90, video plays, Cal.com bookings. */
export default function Tracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-cta]");
      const placement = el?.getAttribute("data-cta");
      if (!placement) return;
      try { sessionStorage.setItem("bb_sos_last_cta", placement.slice(0, 60)); } catch {}
      track(placement.startsWith("hero") ? "hero_cta_click" : "cta_click", { placement });
    };
    const fired = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return;
      const pct = (window.scrollY / h) * 100;
      for (const mark of [50, 90]) {
        if (pct >= mark && !fired.has(mark)) { fired.add(mark); track(mark === 50 ? "scroll_50" : "scroll_90"); }
      }
    };
    const played = new Set<string>();
    const onPlay = (e: Event) => {
      const v = e.target as HTMLVideoElement | null;
      if (!v || v.tagName !== "VIDEO") return;
      const name = v.dataset.video || "video";
      if (played.has(name)) return;
      played.add(name);
      track("video_play", { video: name });
    };
    const onMessage = (e: MessageEvent) => {
      if (!/(^|\.)cal\.com$/.test(new URL(e.origin || "http://x").hostname)) return;
      const d = e.data as { type?: string } | null;
      const type = d && typeof d === "object" ? String(d.type || "") : "";
      if (/bookingSuccessful/i.test(type)) track("calendar_booking", { placement: "demo-embed" });
    };
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("play", onPlay, true);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("play", onPlay, true);
      window.removeEventListener("message", onMessage);
    };
  }, []);
  return null;
}
