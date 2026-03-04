import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://social-era.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://social-era.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://social-era.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}