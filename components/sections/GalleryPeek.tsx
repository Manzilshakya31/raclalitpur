"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const CameraIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.15, color: "#ffffff" }}
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const cellBase = {
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.4s ease",
};

export default function GalleryPeek() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-gallery-cell]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#111111", padding: "96px 8%" }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", paddingBottom: "48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "#f5c842" }} />
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
          <div style={{ width: "40px", height: "1px", background: "#f5c842" }} />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.1,
          }}
        >
          From the Field
        </h2>
      </div>

      {/* Responsive grid rules */}
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 300px 300px;
          gap: 12px;
        }
        @media (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: none;
          }
          .gallery-grid [data-gallery-cell] {
            height: 250px !important;
            grid-row: auto !important;
            grid-column: auto !important;
          }
        }
        @media (max-width: 639px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-grid [data-gallery-cell] {
            height: 220px !important;
          }
        }
      `}</style>

      <div className="gallery-grid">

        {/* Cell 1 — tall left */}
        <div
          data-gallery-cell
          style={{
            ...cellBase,
            gridRow: "1 / 3",
            gridColumn: "1",
            background: "#1a1208",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CameraIcon />
        </div>

        {/* Cell 2 — top middle */}
        <div
          data-gallery-cell
          style={{
            ...cellBase,
            gridRow: "1",
            gridColumn: "2",
            background: "#0a1208",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CameraIcon />
        </div>

        {/* Cell 3 — top right */}
        <div
          data-gallery-cell
          style={{
            ...cellBase,
            gridRow: "1",
            gridColumn: "3",
            background: "#0a0812",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CameraIcon />
        </div>

        {/* Cell 4 — View All */}
        <Link
          href="/gallery"
          data-gallery-cell
          style={{
            gridRow: "2",
            gridColumn: "2 / 4",
            background: "rgba(245,200,66,0.08)",
            border: "1px solid rgba(245,200,66,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            textDecoration: "none",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.background = "rgba(245,200,66,0.15)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.background = "rgba(245,200,66,0.08)")
          }
        >
          <span style={{ fontSize: "2rem", color: "#f5c842", lineHeight: 1 }}>
            →
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "white",
            }}
          >
            View All Photos
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "rgba(240,240,240,0.45)",
            }}
          >
            Explore our full gallery
          </span>
        </Link>

      </div>
    </section>
  );
}
