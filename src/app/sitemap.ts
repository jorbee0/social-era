import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://social-bup4.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://social-bup4.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://social-bup4.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}