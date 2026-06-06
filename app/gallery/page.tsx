import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl font-light">Gallery</h1>
      <p className="mt-4 text-[var(--color-text-muted)]">Coming soon.</p>
    </div>
  );
}
