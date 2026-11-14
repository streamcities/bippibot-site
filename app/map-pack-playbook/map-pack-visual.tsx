import { PlaybookCover } from "./playbook-cover";

const BUSINESSES = [
  { rank: "1", name: "Harbor & Pine Dental", category: "Dentist", rating: "4.9", featured: true },
  { rank: "2", name: "Mesa Ridge Plumbing", category: "Plumber", rating: "4.7", featured: false },
  { rank: "3", name: "North Loop Med Spa", category: "Med spa", rating: "4.8", featured: false },
];

export function PlaybookScene() {
  return (
    <figure className="relative mx-auto w-full max-w-xl lg:h-[540px]">
      <div className="relative z-10 mx-auto w-fit lg:absolute lg:top-0 lg:left-0">
        <PlaybookCover />
      </div>
      <div className="lg:absolute lg:top-8 lg:right-0 lg:left-[30%]">
        <MapPack />
      </div>
      <figcaption className="mt-3 text-center text-xs text-[var(--lavender-300)] lg:absolute lg:right-0 lg:bottom-0 lg:left-0">
        Illustration. The businesses on this map are fictional.
      </figcaption>
    </figure>
  );
}

export function LocalMap() {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-3xl bg-[#E3EEF3] shadow-xl ring-1 ring-black/5">
        <MapArt />
        <ResultLabel className="absolute top-3 left-3" />
      </div>
      <PackCard className="mt-3 shadow-lg ring-1 ring-black/5" />
      <figcaption className="mt-3 text-center text-xs text-[var(--slate-500)]">
        Illustration. The businesses on this map are fictional.
      </figcaption>
    </figure>
  );
}

function MapPack() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#E3EEF3] shadow-[0_24px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/50">
      <MapArt />
      <ResultLabel className="absolute top-3 right-3" />
      <PackCard className="absolute right-3 bottom-3 left-3 shadow-lg ring-1 ring-black/5 sm:left-auto sm:w-[272px]" />
    </div>
  );
}

function ResultLabel({ className }: { className: string }) {
  return (
    <div className={`${className} rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--navy-900)] shadow-sm`}>
      Local results
    </div>
  );
}

function PackCard({ className }: { className: string }) {
  return (
    <ol className={`rounded-2xl bg-white p-2 ${className}`}>
      {BUSINESSES.map((business) => (
        <li key={business.name} className="flex items-center gap-2 border-t border-[var(--line-200)] px-1.5 py-2 first:border-t-0">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
              business.featured
                ? "bg-gradient-to-br from-[var(--blue-500)] to-[var(--teal-500)]"
                : "bg-[var(--navy-800)]"
            }`}
          >
            {business.rank}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] leading-tight font-semibold text-[var(--navy-900)]">{business.name}</span>
            <span className="mt-0.5 flex items-center gap-1 text-[11px] text-[var(--slate-500)]">
              <Stars />
              <span>{business.rating}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate">{business.category}</span>
            </span>
          </span>
          <span className="shrink-0 rounded-full bg-[var(--tint-100)] px-2.5 py-1 text-[11px] font-semibold text-[var(--blue-500)]">
            Call
          </span>
        </li>
      ))}
    </ol>
  );
}

function Stars() {
  return (
    <span className="inline-flex" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 16 16" className="h-2.5 w-2.5">
          <path
            fill="#E0A106"
            d="M8 1.2 9.9 5.7l4.9.4-3.7 3.2 1.1 4.8L8 11.6 3.8 14.1l1.1-4.8L1.2 6.1l4.9-.4L8 1.2Z"
          />
        </svg>
      ))}
    </span>
  );
}

function MapArt() {
  const roads = [
    "M16 150 H624",
    "M16 268 H624",
    "M20 368 H520",
    "M196 16 V500",
    "M372 16 V470",
    "M520 24 V420",
    "M12 214 C 150 170, 210 330, 360 250 S 560 190, 630 236",
  ];

  return (
    <svg viewBox="0 0 640 520" className="block h-auto w-full" aria-hidden="true">
      <rect width="640" height="520" fill="#E3EEF3" />
      <path d="M0 430 C 80 390, 140 470, 240 430 C 350 386, 410 480, 530 440 C 590 418, 620 450, 640 440 L 640 520 L 0 520 Z" fill="#C5DDF1" />
      <path d="M36 28 h120 a36 36 0 0 1 36 36 v48 a40 40 0 0 1 -40 40 H48 a28 28 0 0 1 -28 -28 V60 a32 32 0 0 1 16 -32 Z" fill="#C5E4D2" />
      <circle cx="100" cy="92" r="16" fill="#8FCBAA" opacity="0.8" />
      <circle cx="150" cy="120" r="10" fill="#7FBF9C" opacity="0.7" />
      <g fill="#F8FBFC" stroke="#D3E0E7">
        <rect x="48" y="46" width="110" height="78" rx="8" />
        <rect x="230" y="34" width="150" height="92" rx="8" />
        <rect x="430" y="40" width="160" height="84" rx="8" />
        <rect x="40" y="176" width="120" height="100" rx="8" />
        <rect x="230" y="176" width="150" height="88" rx="8" />
        <rect x="430" y="168" width="160" height="110" rx="8" />
        <rect x="48" y="292" width="130" height="70" rx="8" />
        <rect x="250" y="300" width="170" height="64" rx="8" />
      </g>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="#C5D3DC" strokeWidth="16">
          {roads.map((d) => (
            <path key={`casing-${d}`} d={d} />
          ))}
        </g>
        <g stroke="#FFFFFF" strokeWidth="10">
          {roads.map((d) => (
            <path key={`road-${d}`} d={d} />
          ))}
        </g>
      </g>
      <Pin x={500} y={96} featured />
      <Pin x={590} y={150} />
      <Pin x={410} y={158} />
    </svg>
  );
}

function Pin({ x, y, featured = false }: { x: number; y: number; featured?: boolean }) {
  const color = featured ? "#22B8CF" : "#2F6FED";
  const scale = featured ? 1.2 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="6" rx="8" ry="3.2" fill="rgba(15,27,61,0.18)" />
      <path d="M0 4 C -9 4 -13 -4 -13 -10 C -13 -18 -7 -22 0 -22 C 7 -22 13 -18 13 -10 C 13 -4 9 4 0 4 Z" fill={color} />
      <circle cx="0" cy="-10" r="4" fill="white" />
    </g>
  );
}
