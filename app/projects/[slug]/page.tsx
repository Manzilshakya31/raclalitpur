import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectStats from "@/components/projects/ProjectStats";
import ProjectObjectives from "@/components/projects/ProjectObjectives";
import ProjectSummary from "@/components/projects/ProjectSummary";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectTeam from "@/components/projects/ProjectTeam";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.name} — Rotaract Club of Lalitpur`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectStats project={project} />
      <ProjectObjectives objectives={project.objectives} />
      <ProjectSummary
        summary={project.summary}
        youtubeUrl={project.youtubeUrl}
        videoTitle={
          project.youtubeUrl ? `${project.name} - Rotaract Club of Lalitpur` : undefined
        }
        documentUrl={project.documentUrl}
        documentLabel={project.documentLabel}
      />
      <ProjectGallery images={project.images} />
      <ProjectTeam coordinators={project.coordinators} />

      {/* CTA Strip */}
      <section
        style={{
          background: "#d4006a",
          padding: "64px 8%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 300,
            color: "white",
            marginBottom: "28px",
          }}
        >
          Learn more about our club
        </p>
        <Link
          href="/about"
          style={{
            display: "inline-block",
            background: "white",
            color: "#d4006a",
            padding: "14px 32px",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          About Us →
        </Link>
      </section>
    </>
  );
}
