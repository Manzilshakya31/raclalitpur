import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "140px 8% 64px",
        position: "relative",
      }}
    >
      <Link
        href="/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "rgba(240,240,240,0.6)",
          fontSize: "0.85rem",
          textDecoration: "none",
          marginBottom: "32px",
        }}
      >
        ← All Projects
      </Link>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            border: "1px solid #f5c842",
            color: "#f5c842",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            padding: "6px 14px",
          }}
        >
          {project.category}
        </span>
        {project.edition && (
          <span
            style={{
              display: "inline-block",
              border: "1px solid rgba(245,200,66,0.3)",
              color: "rgba(240,240,240,0.7)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              padding: "6px 14px",
            }}
          >
            {project.edition}
          </span>
        )}
        {project.sdgs?.map((sdg) => (
          <span
            key={sdg}
            style={{
              display: "inline-block",
              border: "1px solid rgba(245,200,66,0.3)",
              color: "rgba(240,240,240,0.7)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              padding: "6px 14px",
            }}
          >
            {sdg}
          </span>
        ))}
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 300,
          color: "white",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {project.name}
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.1rem",
          color: "rgba(240,240,240,0.6)",
          maxWidth: "640px",
          marginBottom: "24px",
        }}
      >
        {project.tagline}
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "rgba(240,240,240,0.45)",
        }}
      >
        {project.date} · {project.venue}
      </p>

      {project.partnerClubs && project.partnerClubs.length > 0 && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "rgba(240,240,240,0.4)",
            marginTop: "12px",
            maxWidth: "640px",
          }}
        >
          In partnership with {project.partnerClubs.join(", ")}
        </p>
      )}
    </section>
  );
}
