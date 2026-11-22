import { isComingSoon } from "./features";

export const PAGE_PATH = "/social-on-steroids";
export const PAGE_TITLE = "Social on Steroids: Listing Marketing That Never Sleeps";
export const PAGE_DESCRIPTION =
  "For Florida listing agents: every listing gets a tour video, carousel, flyer, neighborhood guide, and Instagram, Facebook, LinkedIn, X and TikTok posts, with a fast turnaround. You approve everything. Book a 15-minute demo.";

const COMING_SOON_FAQS = [
  ...(isComingSoon("listingMonitoring")
    ? [
        {
          question: "Does the bot spot my new listings on its own?",
          answer:
            "Not yet. Automatic new-listing monitoring is coming soon. For now, send us the listing and the bot builds the package from its photos and details.",
        },
      ]
    : []),
  ...(isComingSoon("listingChatbot")
    ? [
        {
          question: "Is the AI assistant on the listing page live?",
          answer:
            "Not yet. The 24/7 AI assistant that answers buyer questions on each listing's landing page is coming soon. We'll show you where it stands on your demo.",
        },
      ]
    : []),
];

export const FAQS = [
  {
    question: "Does anything post without my approval?",
    answer:
      "No. Every post, email, and flyer waits for you to tap Approve. Nothing posts or sends until you say yes, so you and your brokerage stay in control.",
  },
  {
    question: "Do I need new photos, drone shots, or a videographer?",
    answer:
      "No. The package is built from the listing's existing photos and details. Photography, drone, and on-site filming are not included. If you already have listing photos, you have what we need.",
  },
  {
    question: "Will it use my branding or BippiBot's?",
    answer:
      "Yours. Your logo, colors, and brokerage disclosure line go on every piece. BippiBot stays behind the scenes.",
  },
  {
    question: "How fast is a listing package ready?",
    answer:
      isComingSoon("listingMonitoring")
        ? "Fast. Send us the listing and the bot builds the package, so you have it to review well before you would have time to make it yourself. We'll confirm the exact turnaround on your demo."
        : "Fast. The bot starts building as soon as a new listing goes live, so you have the package to review well before you would have time to make it yourself. We'll confirm the exact turnaround on your demo.",
  },
  {
    question: "What does it cost?",
    answer:
      "Setup is $495 one time. The monthly service is $395 per agent. Each listing package is $295, or $495 for listings at $1M and up. Founding agents get setup waived and their first listing package free. Month to month after setup, with no long contract.",
  },
  {
    question: "Is ad spend included?",
    answer:
      "No. Paid ad spend is separate. The service covers the content, scheduling, status-change posts, seller reports, and lead routing for your organic channels.",
  },
  {
    question: "Is the copy Fair Housing friendly?",
    answer:
      "Copy is written to describe the property, not the buyer, and you review every word before anything goes out.",
  },
  {
    question: "What is the Monthly Market Newsletter add-on?",
    answer:
      "A branded email to your past clients and sphere every month: a local market snapshot, your new listings and solds, area happenings, and a 'thinking of selling?' prompt. You approve it before it sends. $149 a month at the founding rate.",
  },
  ...COMING_SOON_FAQS,
];
