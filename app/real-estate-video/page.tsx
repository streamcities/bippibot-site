import type { Metadata } from "next";
import RealEstateVideoClient from "./RealEstateVideoClient";

export const metadata: Metadata = {
  title: "Real Estate Walkthrough Video",
  description:
    "Turn listing photos into a professional walkthrough video automatically — no filming, no editing, no videographer scheduling. Nationwide, starting at $149 per listing.",
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many photos do I need to send?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most listings work well with roughly 15–30 photos, but you can send more or fewer — just let us know the count when you book.",
      },
    },
    {
      "@type": "Question",
      name: "How do I number my photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Name your files sequentially (e.g. 01.jpg, 02.jpg, 03.jpg...) in the order you'd like them to appear in the video, then upload them to the shared folder link we send you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get my video back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter tier ships in 72 hours. Pro tier is priority turnaround at 24–48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this service is available nationwide. Since it's generated from your photos, there's no local coverage limitation.",
      },
    },
    {
      "@type": "Question",
      name: "What format is the final video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MP4, MLS-ready, delivered at a resolution suitable for listing pages and social sharing.",
      },
    },
  ],
};

export default function RealEstateVideoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <RealEstateVideoClient />
    </>
  );
}
