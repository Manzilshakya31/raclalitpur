import type { Metadata } from "next";
import { clubInfo, SITE_URL } from "./constants";

/**
 * Builds consistent per-page metadata. Next.js does NOT deep-merge nested
 * fields like `openGraph`/`twitter` between layout and page — a page that
 * declares `openGraph` fully replaces the layout's, so every field needed
 * for a correct social preview is set explicitly here rather than relying
 * on inheritance from the root layout.
 */
export function buildMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${clubInfo.name}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: clubInfo.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
