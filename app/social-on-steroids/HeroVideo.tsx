"use client";

import { useRef, useState } from "react";

/** Tour video in the hero phone: shows the poster with a play button, loads the MP4 only on tap. */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="relative">
      <video ref={ref} data-video="hero-tour" className="block aspect-[9/16] w-full bg-black object-cover" poster={poster}
        preload="none" playsInline muted controls={on} aria-label="30-second vertical tour video sample">
        {on ? <source src={src} type="video/mp4" /> : null}
      </video>
      {!on ? (
        <button type="button" aria-label="Play the 30-second tour video"
          onClick={() => { setOn(true); requestAnimationFrame(() => { ref.current?.load(); void ref.current?.play().catch(() => {}); }); }}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-2xl text-[#D63D1A] shadow-xl">▶</span>
        </button>
      ) : null}
    </div>
  );
}
