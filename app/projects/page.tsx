import type { Metadata } from "next";
import Image from "next/image";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Projects",
  description:
    "Explore signature community service projects by Rotaract Club of Lalitpur: Candle Walk, Nyano Maya, Matya Health Camp, and Lumanti Magazine — serving Lalitpur, Nepal since 1998.",
  path: "/projects",
  keywords: ["Candle Walk Lalitpur", "Nyano Maya Rotaract", "Matya Health Camp", "Rotaract community service projects Nepal"],
});

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
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
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "block",
                height: "1px",
                width: "32px",
                background: "#f5c842",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f5c842",
                fontFamily: "var(--font-body)",
              }}
            >
              OUR WORK
            </span>
            <span
              style={{
                display: "block",
                height: "1px",
                width: "32px",
                background: "#f5c842",
              }}
            />
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
            Projects &amp; Initiatives
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(240,240,240,0.6)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            From cultural preservation to community health - 27 years of impact
          </p>
        </div>
      </section>

      {/* ── SECTIONS 2 & 3 — SEARCHABLE / FILTERABLE PROJECT LISTS ── */}
      <ProjectsExplorer />
    </>
  );
}
