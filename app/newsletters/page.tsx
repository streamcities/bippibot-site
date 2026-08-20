import type { Metadata } from "next";
import NewslettersClient from "./NewslettersClient";

export const metadata: Metadata = {
  title: "Client Newsletters",
  description:
    "BippiBot writes, designs, and sends a curated monthly newsletter to your customer list — Automated at $99/month or Custom at $499/month, built on the same model as Salted Sun's newsletter.",
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between Automated and Custom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automated is BippiBot's AI drafting your monthly issue from your business profile, with a quick approval step before it sends. Custom means our team works with you directly each month to shape content, tone, and design to your exact preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to write anything myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. On both tiers we draft the full issue for you. You're welcome to add your own notes or updates, but it's optional.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Salted Sun's newsletter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the same proven model — a monthly, curated newsletter that mixes industry insight, local color, and a personal update — built for your business and your customer list.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own email list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You provide (or we help you organize) your customer list, and issues are sent to it directly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both plans are month-to-month with no long-term contract.",
      },
    },
  ],
};

export default function NewslettersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <NewslettersClient />
    </>
  );
}
