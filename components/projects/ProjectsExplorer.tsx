"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Search, X } from "lucide-react";
import { projectYears, type ProjectPortfolioRecord } from "@/lib/projects";
import styles from "./ProjectsExplorer.module.css";

const CURRENT_YEAR = projectYears.find((year) => year.current)?.year ?? "";

function isProjectYear(value: string | null): value is string {
  return value !== null && projectYears.some((year) => year.year === value);
}

function ProjectCard({
  project,
  yearLabel,
}: {
  project: ProjectPortfolioRecord;
  yearLabel?: string;
}) {
  const content = (
    <>
      <div className={styles.cardImage}>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.cardImageFallback} aria-hidden="true" />
        )}
      </div>
      <div className={styles.cardBody}>
        {yearLabel && <span className={styles.cardYear}>{yearLabel}</span>}
        <span className={styles.cardCategory}>{project.category}</span>
        <h3>{project.name}</h3>
        {project.description && <p>{project.description}</p>}
        {project.detailPath && (
          <span className={styles.cardLink}>
            Learn More <ArrowRight size={15} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  return project.detailPath ? (
    <Link href={project.detailPath} className={styles.projectCard}>
      {content}
    </Link>
  ) : (
    <article className={styles.projectCard}>{content}</article>
  );
}

export default function ProjectsExplorer() {
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);
  const [searchQuery, setSearchQuery] = useState("");
  const activeYear =
    projectYears.find((year) => year.year === selectedYear) ?? projectYears[0];
  const featuredProject =
    activeYear.projects.find((project) => project.featured) ??
    activeYear.projects[0];
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    return projectYears.flatMap((year) =>
      year.projects
        .filter((project) =>
          [
            project.name,
            project.slug,
            project.category,
            project.description,
            year.year,
          ]
            .filter((value): value is string => typeof value === "string")
            .some((value) => value.toLowerCase().includes(normalizedQuery)),
        )
        .map((project) => ({ project, year: year.year })),
    );
  }, [normalizedQuery]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedYear = params.get("year");
    if (isProjectYear(requestedYear)) setSelectedYear(requestedYear);

    const handlePopState = () => {
      const year = new URLSearchParams(window.location.search).get("year");
      setSelectedYear(isProjectYear(year) ? year : CURRENT_YEAR);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const selectYear = (year: string) => {
    setSelectedYear(year);
    const url = new URL(window.location.href);
    url.searchParams.set("year", year);
    window.history.pushState({}, "", url);
  };

  const openArchiveYear = (year: string) => {
    setSearchQuery("");
    selectYear(year);
    window.setTimeout(() => {
      document.getElementById("year-projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <>
      <section className={styles.yearNav} aria-label="Project years">
        <div className={styles.yearNavInner}>
          <div className={styles.yearTabs} role="group" aria-label="Select a year">
            {projectYears.map((year) => (
              <button
                key={year.year}
                type="button"
                className={`${styles.yearTab} ${
                  selectedYear === year.year ? styles.yearTabActive : ""
                }`}
                aria-pressed={selectedYear === year.year}
                onClick={() => selectYear(year.year)}
              >
                {year.year.replace("-", "–")}
                <span>{year.current ? "Current Year" : "Past Year"}</span>
              </button>
            ))}
          </div>
          <a className={styles.archiveJump} href="#archive">
            Explore Full Archive <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={styles.searchSection} aria-label="Search projects">
        <div className={styles.searchInner}>
          <label htmlFor="project-search">Find a project</label>
          <div className={styles.searchInputWrap}>
            <Search size={18} aria-hidden="true" />
            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search all projects and archives"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear project search"
                onClick={() => setSearchQuery("")}
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
          <p>Search by project name, category, or year.</p>
        </div>
      </section>

      {normalizedQuery ? (
        <section className={styles.searchResults} aria-live="polite">
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>PROJECT ARCHIVE</span>
            <h2>
              {searchResults.length}{" "}
              {searchResults.length === 1 ? "project" : "projects"} found
            </h2>
          </div>
          {searchResults.length > 0 ? (
            <div className={styles.projectGrid}>
              {searchResults.map(({ project, year }) => (
                <ProjectCard
                  key={`${year}-${project.slug}`}
                  project={project}
                  yearLabel={year.replace("-", "–")}
                />
              ))}
            </div>
          ) : (
            <p className={styles.noResults}>
              No projects found for “{searchQuery.trim()}”. Try another name,
              category, or year.
            </p>
          )}
        </section>
      ) : (
        <section
          key={activeYear.year}
          id="year-projects"
          className={styles.yearProjects}
          aria-live="polite"
        >
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>{activeYear.year.replace("-", "–")}</span>
            <h2>Featured Project</h2>
          </div>

          {featuredProject && (
            <article className={styles.featured}>
              <div className={styles.featuredImage}>
                {featuredProject.coverImage && (
                  <Image
                    src={featuredProject.coverImage}
                    alt={featuredProject.name}
                    fill
                    priority
                    sizes="(max-width: 760px) 100vw, 52vw"
                  />
                )}
                <span className={styles.imageYear}>
                  {activeYear.year.replace("-", "–")}
                </span>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.categoryBadge}>{featuredProject.category}</span>
                <h3>{featuredProject.name}</h3>
                {featuredProject.description && (
                  <p className={styles.featuredDescription}>
                    {featuredProject.description}
                  </p>
                )}
                {featuredProject.projectType === "recurring" && (
                  <p className={styles.projectType}>Recurring annual initiative</p>
                )}
                {featuredProject.detailPath && (
                  <Link
                    href={featuredProject.detailPath}
                    className={styles.featuredLink}
                  >
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </article>
          )}

          {activeYear.projects.length > 0 && (
            <div className={styles.collection}>
              <h2>
                {selectedYear === CURRENT_YEAR
                  ? "Current Year’s Projects"
                  : `${activeYear.year.replace("-", "–")} Projects`}
              </h2>
              <div className={styles.projectGrid}>
                {activeYear.projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <section id="archive" className={styles.archive}>
        <div className={styles.archiveHeader}>
          <span className={styles.eyebrow}>THE YEARS BEHIND US</span>
          <h2>Explore Past Years</h2>
          <p>Discover the milestones and impact of our previous projects.</p>
        </div>
        <div className={styles.archiveGrid}>
          {projectYears
            .filter((year) => !year.current)
            .map((year) => {
              const cover = year.projects.find((project) => project.coverImage);
              return (
                <button
                  type="button"
                  key={year.year}
                  className={styles.archiveCard}
                  onClick={() => openArchiveYear(year.year)}
                >
                  <span className={styles.archiveImage}>
                    {cover?.coverImage && (
                      <Image
                        src={cover.coverImage}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    )}
                  </span>
                  <span className={styles.archiveCardBody}>
                    <span className={styles.archiveCount}>
                      {year.projects.length} projects
                    </span>
                    <span className={styles.archiveYear}>
                      {year.year.replace("-", "–")}
                    </span>
                    <span className={styles.archiveLink}>
                      View year <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </span>
                </button>
              );
            })}
        </div>
      </section>
    </>
  );
}
