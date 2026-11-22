import type { NextConfig } from "next";

// Preview/staging services set SITE_NOINDEX=1. Production leaves it unset.
const NOINDEX = process.env.SITE_NOINDEX === "1" || process.env.SITE_NOINDEX === "true";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Clean marketing URL. Query strings (UTMs) are carried through by Next.js.
      { source: "/realtors", destination: "/social-on-steroids", permanent: false },
    ];
  },
  async headers() {
    if (!NOINDEX) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
