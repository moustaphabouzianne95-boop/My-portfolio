import type { MetadataRoute } from "next";

export const dynamic = "force-static";

function getSiteOrigin(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  try {
    const origin = new URL(configured);
    return origin.protocol === "https:" ? origin.origin : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!origin) return [];
  return [{ url: origin, changeFrequency: "yearly", priority: 1 }];
}
