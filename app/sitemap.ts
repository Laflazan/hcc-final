import type { MetadataRoute } from "next";
import { routeMap } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(routeMap).flatMap((localizedPaths) => {
    return (["tr", "en"] as const).map((locale) => ({
      url: `https://hcc.av.tr${localizedPaths[locale]}`,
      lastModified,
      changeFrequency: locale === "en" ? "monthly" : "weekly",
      priority: localizedPaths[locale] === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `https://hcc.av.tr${localizedPaths.tr}`,
          en: `https://hcc.av.tr${localizedPaths.en}`,
        },
      },
    }));
  });
}
