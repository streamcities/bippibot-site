import type { ReactNode } from "react";

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      {children}
    </svg>
  );
}

export function CategoriesIcon() {
  return (
    <Glyph>
      <path d="M8 7h11" />
      <path d="M8 12h11" />
      <path d="M8 17h11" />
      <path d="M4.5 7h.01" />
      <path d="M4.5 12h.01" />
      <path d="M4.5 17h.01" />
    </Glyph>
  );
}

export function AttributesIcon() {
  return (
    <Glyph>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
      <circle cx="9" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="1.6" fill="currentColor" stroke="none" />
    </Glyph>
  );
}

export function VelocityIcon() {
  return (
    <Glyph>
      <path d="M4 16.5 9 11l3 3 7-7" />
      <path d="M15 7h4v4" />
    </Glyph>
  );
}

export function RepliesIcon() {
  return (
    <Glyph>
      <path d="M6 16.5 4 20l4.2-1.6" />
      <path d="M7.2 16.2A7 7 0 1 1 12 19a7 7 0 0 1-4.8-2.8" />
      <path d="M9 10.5h6" />
      <path d="M9 13.5h3.5" />
    </Glyph>
  );
}

export function CalendarIcon() {
  return (
    <Glyph>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
      <path d="M4 9.5h16" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
      <path d="M8 16.5h.01" />
      <path d="M12 16.5h.01" />
    </Glyph>
  );
}

export function PageTwoIcon() {
  return (
    <Glyph>
      <path d="M5 6h9" />
      <path d="M5 10h7" />
      <path d="M5 14h6" />
      <path d="M5 18h4" />
      <path d="M15 15.5 18 12.5l3 3" />
      <path d="M18 12.5V19" />
    </Glyph>
  );
}

export function PagesIcon() {
  return (
    <Glyph>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.8V8h4" />
      <path d="M8.5 12.5h6" />
      <path d="M8.5 16h4" />
    </Glyph>
  );
}

export function CityIcon() {
  return (
    <Glyph>
      <path d="M4 20h16" />
      <path d="M6 20V9l4-2v13" />
      <path d="M10 20V6l5 2.2V20" />
      <path d="M15 20v-7h3.5V20" />
    </Glyph>
  );
}

export function CitationsIcon() {
  return (
    <Glyph>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="17" cy="7" r="2.2" />
      <circle cx="17" cy="17" r="2.2" />
      <path d="M8 11.2 15 8" />
      <path d="M8 13 15 16.2" />
    </Glyph>
  );
}

export function BacklinksIcon() {
  return (
    <Glyph>
      <path d="M10 13a5 5 0 0 0 7.2.7l1.3-1.3a5 5 0 0 0-7-7L10.2 6.7" />
      <path d="M14 11a5 5 0 0 0-7.2-.7L5.5 11.6a5 5 0 0 0 7 7l1.2-1.2" />
    </Glyph>
  );
}

export function SchemaIcon() {
  return (
    <Glyph>
      <path d="M8 8.5 4.5 12 8 15.5" />
      <path d="M16 8.5 19.5 12 16 15.5" />
      <path d="M13 6.5 11 17.5" />
    </Glyph>
  );
}

export function ReportIcon() {
  return (
    <Glyph>
      <path d="M8 4.5h5l4 4V19a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 19V6A1.5 1.5 0 0 1 8 4.5Z" />
      <path d="M13 4.8V9h4" />
      <path d="M9 16v-2" />
      <path d="M12 16v-4" />
      <path d="M15 16v-3" />
    </Glyph>
  );
}

export const TOPICS: { title: string; copy: string; icon: ReactNode }[] = [
  {
    title: "Categories",
    copy: "Which Google Business Profile categories you should be using, set against competitors.",
    icon: <CategoriesIcon />,
  },
  {
    title: "Attributes",
    copy: "The attributes competitors show, and the ones your profile is missing.",
    icon: <AttributesIcon />,
  },
  {
    title: "Review velocity",
    copy: "How steadily new reviews are coming in, and what to do with that pace.",
    icon: <VelocityIcon />,
  },
  {
    title: "Review replies",
    copy: "Reply templates you can adapt when someone leaves a review.",
    icon: <RepliesIcon />,
  },
  {
    title: "Post calendar",
    copy: "An 8-week calendar of Google Business Profile posts.",
    icon: <CalendarIcon />,
  },
  {
    title: "Page-two wins",
    copy: "Search Console pages sitting on page two, and prompts for working them.",
    icon: <PageTwoIcon />,
  },
  {
    title: "Service pages",
    copy: "Pages for the services you actually sell.",
    icon: <PagesIcon />,
  },
  {
    title: "City pages",
    copy: "Pages for the cities and neighborhoods you cover.",
    icon: <CityIcon />,
  },
  {
    title: "Citations",
    copy: "Where your name, address, and phone should match.",
    icon: <CitationsIcon />,
  },
  {
    title: "Backlinks",
    copy: "The link work the prompts walk through.",
    icon: <BacklinksIcon />,
  },
  {
    title: "Schema",
    copy: "The markup that tells search engines what the business is.",
    icon: <SchemaIcon />,
  },
  {
    title: "Call report",
    copy: "A monthly report that tracks calls.",
    icon: <ReportIcon />,
  },
];
