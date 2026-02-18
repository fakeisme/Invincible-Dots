import type { MetadataRoute } from "next";
import { packs, robots } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const staticPages = ["", "/packs", "/robots", "/copy-trading", "/faq", "/contact", "/legal", "/privacy", "/terms"];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7
    })),
    ...packs.map((pack) => ({
      url: `${base}/packs/${pack.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...robots.map((robot) => ({
      url: `${base}/robots/${robot.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
