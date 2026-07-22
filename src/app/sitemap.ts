import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tudencafe.com",
      lastModified: new Date(),
    },
  ];
}