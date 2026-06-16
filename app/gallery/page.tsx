import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery — Rotaract Club of Lalitpur",
};

const galleryImages = [
  { src: "/images/project/candle-walk.png", caption: "Candle Walk" },
  { src: "/images/project/nyano_maya.jpeg", caption: "Nyano Maya" },
  { src: "/images/project/nyano_maya_1.jpeg", caption: "Nyano Maya" },
  { src: "/images/project/matya_health_camp.jpg", caption: "Matya Health Camp" },
  { src: "/images/project/magazine.jpg", caption: "Lumanti Magazine" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── SECTION 1 — HERO ──────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          overflow: "hidden",
          paddingTop: "64px",
        }}
      >
        <Image
          src="/images/background.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.2 }}
          aria-hidden="true"
        />
        <div
          style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", pointerEvents: "none" }}
          aria-hidden="true"
        />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <span style={{ display: "block", height: "1px", width: "32px", background: "#f5c842" }} />
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f5c842",
                fontFamily: "var(--font-body)",
              }}
            >
              MOMENTS &amp; MEMORIES
            </span>
            <span style={{ display: "block", height: "1px", width: "32px", background: "#f5c842" }} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Gallery
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(240,240,240,0.6)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Snapshots from our projects and fellowship
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — GRID ──────────────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "80px 8%" }}>
        <style>{`
          .gallery-full-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }
        `}</style>

        <div className="gallery-full-grid">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.05} direction="up">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  {image.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
