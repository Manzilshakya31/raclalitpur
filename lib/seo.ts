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
  image,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${clubInfo.name}`;
  const canonicalPath = path
    ? path.endsWith("/")
      ? path
      : `${path}/`
    : "/";
  const url = new URL(canonicalPath, SITE_URL).toString();
  const socialImage = image ?? "/opengraph-image.png";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: clubInfo.name,
      locale: "en_US",
      type: "website",
      images: [{ url: socialImage, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
