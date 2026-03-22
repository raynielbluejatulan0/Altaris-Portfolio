import { type MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    { path: "", priority: 1 },
    { path: "#services", priority: 0.9 },
    { path: "#flow", priority: 0.8 },
    { path: "#automation", priority: 0.8 },
    { path: "#workflows", priority: 0.7 },
    { path: "#who-its-for", priority: 0.7 },
    { path: "#case-studies", priority: 0.8 },
    { path: "#process", priority: 0.6 },
    { path: "#faq", priority: 0.7 },
    { path: "#cta", priority: 0.6 },
  ];

  return sections.map((section) => ({
    url: `${SITE.url}/${section.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: section.priority,
  }));
}
