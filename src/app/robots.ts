import type { MetadataRoute } from "next";

export const dynamic = "force-static";

function getSitemapUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  try {
    const origin = new URL(configured);
    return origin.protocol === "https:" ? new URL("/sitemap.xml", origin).toString() : undefined;
  } catch {
    return undefined;
  }
}

export default function robots(): MetadataRoute.Robots {
  const sitemap = getSitemapUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap ? { sitemap } : {}),
  };
}
