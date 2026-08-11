import type { MetadataRoute } from "next";

const siteUrl = "https://www.clvconstructionllc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/projects", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    {
      path: "/affiliates",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/calculator",
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
