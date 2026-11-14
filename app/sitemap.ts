import type { MetadataRoute } from "next";

const BASE_URL = "https://bippibot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: string;
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/virtual-employee", priority: 0.9, changeFrequency: "monthly" },
    { path: "/real-estate-video", priority: 0.9, changeFrequency: "monthly" },
    { path: "/newsletters", priority: 0.9, changeFrequency: "monthly" },
    { path: "/map-pack-playbook", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-14" },
    { path: "/about-us", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(r.lastModified ?? "2026-08-19"),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
