import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BippiBot | The Local Team That Makes Your Business Run on Autopilot",
  description:
    "BippiBot builds AI receptionists, customer reactivation campaigns, and automation for local service businesses in Sanibel Island, FL and Las Vegas, NV — plus done-for-you real estate video and client newsletters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-[var(--foreground)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
