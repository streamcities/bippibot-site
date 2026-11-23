export const PAGE_PATH = "/social-on-steroids";
export const PAGE_TITLE = "Social on Steroids: A Launch Kit for Every Listing";
export const PAGE_DESCRIPTION =
  "For Florida listing agents: send one listing and get a tour video, Instagram carousel, open-house flyer, neighborhood guide and posts under your brand. You approve everything. First listing free.";

/**
 * Turnaround promise. Jay must confirm the number before this page is published.
 * While TURNAROUND_CONFIRMED is false, every mention shows a visible "[JAY: CONFIRM]" flag.
 */
export const TURNAROUND = "within 24 hours";
export const TURNAROUND_CONFIRMED = false;

/** Real proof only. Leave empty until Jay supplies verified material; the page then shows the founding-agent banner. */
export type Testimonial = { quote: string; name: string; brokerage: string; photo?: string };
export const TESTIMONIALS: Testimonial[] = [];
export type Result = { value: string; label: string };
export const FOUNDING_RESULTS: Result[] = [];

export const HERO_DELIVERABLES = [
  { key: "tour", t: "30-second tour video", d: "Vertical, for Reels, TikTok and Shorts" },
  { key: "carousel", t: "6-slide Instagram carousel", d: "A swipeable photo story" },
  { key: "flyer", t: "Open-house flyer", d: "With a QR code to the listing" },
  { key: "guide", t: "Neighborhood guide", d: "Beaches, dining, drive times" },
];

export const ALSO_INCLUDED = [
  "5 ready-to-post social captions",
  "An improved listing description",
  "A just-listed email",
  "A landing page for the listing",
  "Status posts: price change, open house, under contract, sold",
];

export const FAQS = [
  {
    question: "Does anything post without my approval?",
    answer:
      "No. Every post, email, and flyer waits for you to approve it. Nothing posts or sends until you say yes, so you and your brokerage stay in control.",
  },
  {
    question: "How fast is a launch kit ready?",
    turnaround: true,
    answer: `Your launch kit is ready to review ${TURNAROUND} of receiving the listing photos and MLS details.`,
  },
  {
    question: "Do I need new photos, drone shots, or a videographer?",
    answer:
      "No. The kit is built from the listing's existing photos and details. Photography, drone, and on-site filming are not included. If you have listing photos, you have what we need.",
  },
  {
    question: "Will it use my branding or BippiBot's?",
    answer: "Yours. Your logo, colors, and brokerage disclosure line go on every piece. BippiBot stays in the background.",
  },
  {
    question: "What does the free listing include?",
    answer:
      "The full launch kit for one listing: tour video, carousel, flyer, neighborhood guide, captions, listing description, just-listed email, listing landing page, and status posts. Founding agents also get the $495 setup waived.",
  },
  {
    question: "What does it cost after that?",
    answer:
      "The monthly engine is $395 per agent. Each listing is $295, or $495 for listings at $1M and up. Setup is $495 one time, waived for founding agents. Month to month. Cancel anytime.",
  },
  {
    question: "Is ad spend included?",
    answer: "No. Paid ad spend is separate. The service covers the content, scheduling, and status posts for your organic channels.",
  },
  {
    question: "Is the copy Fair Housing friendly?",
    answer: "Copy is written to describe the property, not the buyer, and you review every word before anything goes out.",
  },
  {
    question: "Does it notice my new listings on its own?",
    answer: "Not yet. Automatic new-listing detection is on the roadmap. Today you send us the listing, we build the kit, and you approve it.",
  },
];
