import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import Loader from "@/components/layout/Loader";
import { clubInfo, SITE_URL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const DESCRIPTION =
  "Rotaract Club of Lalitpur is a youth-led community service club in Lalitpur, Nepal, chartered in 1998 under Rotary International District 3292 — 27+ years of service, fellowship, and cultural preservation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${clubInfo.name} | Perceive & Excel — RI District 3292, Nepal`,
    template: `%s | ${clubInfo.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Rotaract Club of Lalitpur",
    "Rotaract Nepal",
    "RI District 3292",
    "youth community service Nepal",
    "volunteer club Lalitpur",
    "join Rotaract Nepal",
    "Rotaract International Nepal",
    "community service Kathmandu Valley",
    "Candle Walk Lalitpur",
    "Perceive and Excel",
  ],
  authors: [{ name: clubInfo.name, url: SITE_URL }],
  creator: clubInfo.name,
  publisher: clubInfo.name,
  category: "Nonprofit Organization",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: clubInfo.name,
    title: `${clubInfo.name} | Perceive & Excel`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clubInfo.name} | Perceive & Excel`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: clubInfo.name,
  alternateName: "RAC Lalitpur",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description: DESCRIPTION,
  slogan: clubInfo.motto,
  foundingDate: "1998-12-28",
  email: clubInfo.email,
  telephone: clubInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lalitpur",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
  areaServed: {
    "@type": "City",
    name: "Lalitpur",
  },
  memberOf: {
    "@type": "Organization",
    name: "Rotary International District 3292",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: clubInfo.email,
    telephone: clubInfo.phone,
    areaServed: "NP",
  },
  sameAs: [
    clubInfo.facebook,
    clubInfo.instagram,
    clubInfo.tiktok,
    clubInfo.youtube,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
