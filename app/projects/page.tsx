import type { Metadata } from "next";
import Image from "next/image";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { buildMetadata } from "@/lib/seo";
import styles from "./ProjectsPage.module.css";

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
      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true">
          <Image
            src="/images/background.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>OUR WORK</span>
          <h1>Projects &amp; Initiatives</h1>
          <p>
            From community service to cultural preservation, explore our journey
            of impact.
          </p>
        </div>
      </section>

      <ProjectsExplorer />
    </>
  );
}
