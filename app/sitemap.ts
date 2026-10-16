import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES, PHOTOS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  // Wszystkie zdjęcia ze strony — trafiają do wyszukiwarki grafiki
  const images = [
    "/images/mycie-podjazdu-po.jpg",
    "/images/mycie-podjazdu-przed.jpg",
    ...SERVICES.map((s) => s.img),
    ...PHOTOS.map((p) => p.src),
    "/og-image.jpg",
  ];

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [...new Set(images)].map((src) => `${SITE.url}${src}`),
    },
  ];
}
