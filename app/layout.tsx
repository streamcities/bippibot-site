import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://bippibot.com";
const TITLE = "BippiBot | The Local Team That Makes Your Business Run on Autopilot";
const DESCRIPTION =
  "BippiBot builds AI receptionists, customer reactivation campaigns, and automation for local service businesses in Sanibel Island, FL and Las Vegas, NV — plus done-for-you real estate video and client newsletters.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | BippiBot" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "BippiBot",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BippiBot",
  url: SITE_URL,
  description: DESCRIPTION,
  areaServed: [
    { "@type": "City", name: "Sanibel Island, FL" },
    { "@type": "City", name: "Las Vegas, NV" },
  ],
  telephone: "+1-775-441-7200",
  email: "support@bippibot.com",
  parentOrganization: {
    "@type": "Organization",
    name: "StreamCities, LLC",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Receptionist & Automation Retainer" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Reactivation Sprint" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Walkthrough Video" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Client Newsletter Service" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-[var(--foreground)]">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
