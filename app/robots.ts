import type { MetadataRoute } from "next";
import { SITE_NOINDEX } from "@/lib/noindex";

export default function robots(): MetadataRoute.Robots {
  if (SITE_NOINDEX) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://bippibot.com/sitemap.xml",
  };
}
