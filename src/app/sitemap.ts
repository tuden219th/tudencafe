import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://tudencafe.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://tudencafe.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://tudencafe.com/coffee",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://tudencafe.com/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://tudencafe.com/congnghe",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}