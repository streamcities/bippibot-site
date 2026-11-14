export function PlaybookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[330px] w-[240px] ${className}`} aria-hidden="true">
      <div
        className="pointer-events-none absolute bottom-3 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full bg-black/40 blur-md"
      />
      <div className="absolute left-1/2 top-2 h-[300px] w-[206px] -translate-x-1/2" style={{ perspective: "900px" }}>
        <div
          className="relative h-full w-full"
          style={{ transform: "rotateY(-18deg) rotateX(6deg)", transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute top-[8px] right-[-7px] bottom-[8px] w-[10px] rounded-r-sm"
            style={{
              background:
                "repeating-linear-gradient(#f4f0e6 0 2px, #ddd4c4 2px 3px)",
            }}
          />
          <div className="absolute inset-y-0 left-0 flex w-4 items-center justify-center rounded-l-[4px] bg-[#09122c] shadow-[-6px_8px_16px_rgba(0,0,0,0.25)]">
            <span className="rotate-180 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/70 [writing-mode:vertical-rl]">
              Map Pack
            </span>
          </div>
          <div
            className="absolute inset-y-0 right-0 left-4 overflow-hidden rounded-r-md shadow-[14px_22px_36px_rgba(0,0,0,0.38)] ring-1 ring-white/15"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.09) 0.8px, transparent 0.8px), linear-gradient(165deg, #2a3f86 0%, #152552 42%, #0c1736 100%)",
              backgroundSize: "12px 12px, auto",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-px bg-white/25" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
            <div className="relative flex h-full flex-col px-4 pt-4 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--lavender-300)]">
                  BippiBot
                </span>
                <CoverPin />
              </div>
              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">The</p>
                <p className="mt-1 text-[26px] leading-[0.92] font-bold text-white">
                  Map Pack
                  <br />
                  Playbook
                </p>
                <div className="mt-3 h-0.5 w-10 rounded-full bg-[#F5DBA0]" />
                <p className="mt-3 text-[13px] font-medium text-[#F5DBA0]">The Insiders Stack</p>
              </div>
              <div className="mt-auto border-t border-white/15 pt-3">
                <p className="text-[11px] font-semibold text-white">16 prompts for Grok Bot</p>
                <p className="mt-0.5 text-[10px] text-[var(--lavender-300)]">Local SEO · fill in once</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverPin() {
  return (
    <svg viewBox="0 0 24 32" className="h-7 w-5" aria-hidden="true">
      <path
        d="M12 30 C 12 30 22 18 22 11 A 10 10 0 1 0 2 11 C 2 18 12 30 12 30 Z"
        fill="#22B8CF"
      />
      <circle cx="12" cy="11" r="3.5" fill="white" />
    </svg>
  );
}
