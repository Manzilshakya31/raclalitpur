"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, X } from "lucide-react";
import { projects } from "@/lib/constants";

// ── Per-project data ────────────────────────────────────────────────────────

const projectMeta: Record<
  string,
  {
    gradient: string;
    facts: { label: string; value: string }[];
  }
> = {
  "candle-walk": {
    gradient: "linear-gradient(135deg, #1a0a00, #3d1f00)",
    facts: [
      { label: "Participants", value: "1,000+" },
      { label: "Frequency", value: "Annual" },
      { label: "Running Since", value: "2000s" },
    ],
  },
  "nyano-maya": {
    gradient: "linear-gradient(135deg, #0a001a, #1f003d)",
    facts: [
      { label: "Reach", value: "Community" },
      { label: "Frequency", value: "Annual" },
      { label: "Level", value: "District" },
    ],
  },
  "lumanti-magazine": {
    gradient: "linear-gradient(135deg, #001a0a, #003d1f)",
    facts: [
      { label: "Type", value: "Publication" },
      { label: "Edition", value: "Annual" },
      { label: "Since", value: "Charter" },
    ],
  },
  "matya-health-camp": {
    gradient: "linear-gradient(135deg, #0a0a1a, #1f1f3d)",
    facts: [
      { label: "Service", value: "Health Camp" },
      { label: "Cost", value: "Free" },
      { label: "Frequency", value: "Annual" },
    ],
  },
};

const otherProjects = [
  { title: "Blood Donation Campaign", category: "Health" },
  { title: "Coffee Gig", category: "Fellowship" },
  { title: "Cultural Exchange", category: "Culture" },
  { title: "DLTS", category: "Leadership" },
  { title: "DRC Visit", category: "Fellowship" },
  { title: "Circle of Growth", category: "Personal Development" },
  { title: "Online Awareness Sessions", category: "Awareness" },
  { title: "Charter Day Celebration", category: "Club Tradition" },
  { title: "Joint Meetings", category: "Fellowship" },
  { title: "Sounds of Valley", category: "Culture" },
];

const ALL_CATEGORIES = "All Categories";

const categoryOptions = [
  ALL_CATEGORIES,
  ...Array.from(
    new Set([
      ...projects.map((p) => p.category),
      ...otherProjects.map((p) => p.category),
    ])
  ).sort(),
];

// ── Shared styles injected once ─────────────────────────────────────────────

const responsiveStyles = `
  /* Feature cards */
  .feature-card {
    display: flex;
    flex-direction: row;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .feature-card-image {
    width: 45%;
    flex-shrink: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feature-card-content {
    flex: 1;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
  }
  @media (max-width: 767px) {
    .feature-card { flex-direction: column; height: auto; }
    .feature-card-image { width: 100%; height: 200px; }
    .feature-card-content { padding: 28px 24px; }
  }

  /* Other projects grid */
  .other-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
  .other-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-top: 2px solid #f5c842;
    border-radius: 12px;
    padding: 28px 24px;
    transition: border-color 0.3s ease, transform 0.3s ease;
    cursor: default;
  }
  .other-card:hover {
    border-color: rgba(245,200,66,0.3);
    border-top-color: #f5c842;
    transform: translateY(-2px);
  }

  /* Search + filter toolbar */
  .project-toolbar-panel {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px;
  }
  .project-toolbar-row {
    display: flex;
    gap: 16px;
  }
  .project-toolbar-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  @media (max-width: 640px) {
    .project-toolbar-row { flex-direction: column; }
    .project-toolbar-panel { padding: 18px; }
    .project-toolbar-search-wrap,
    .project-toolbar-select-wrap {
      flex: 1 1 auto !important;
    }
  }
  .project-search-input,
  .project-category-select {
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .project-search-input:focus,
  .project-category-select:focus {
    border-color: rgba(245,200,66,0.5) !important;
    background: rgba(255,255,255,0.07) !important;
    outline: none;
  }
  .project-search-input::placeholder {
    color: rgba(240,240,240,0.35);
  }
  .project-clear-btn {
    transition: color 0.2s ease;
  }
  .project-clear-btn:hover {
    color: #f5c842 !important;
  }
  .project-category-select option {
    background: #111111;
    color: white;
  }
`;

// ── Component ────────────────────────────────────────────────────────────────

export default function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredSignature = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        category === ALL_CATEGORIES || project.category === category;
      const matchesQuery =
        !normalizedQuery ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, normalizedQuery]);

  const filteredOther = useMemo(() => {
    return otherProjects.filter((project) => {
      const matchesCategory =
        category === ALL_CATEGORIES || project.category === category;
      const matchesQuery =
        !normalizedQuery ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, normalizedQuery]);

  const totalCount = projects.length + otherProjects.length;
  const resultCount = filteredSignature.length + filteredOther.length;
  const hasFilters = normalizedQuery !== "" || category !== ALL_CATEGORIES;
  const hasResults = resultCount > 0;

  const clearFilters = () => {
    setQuery("");
    setCategory(ALL_CATEGORIES);
  };

  return (
    <>
      <style>{responsiveStyles}</style>

      {/* ── SEARCH & FILTER TOOLBAR ──────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "56px 8% 0" }}>
        <div className="project-toolbar-panel">
          <div className="project-toolbar-row">
            {/* Search input */}
            <div
              className="project-toolbar-search-wrap"
              style={{ position: "relative", flex: "1 1 auto" }}
            >
              <Search
                size={17}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(240,240,240,0.4)",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by name, category, or description..."
                aria-label="Search projects"
                className="project-search-input"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "14px 44px",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                }}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="project-clear-btn"
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "rgba(240,240,240,0.4)",
                    cursor: "pointer",
                    display: "flex",
                    padding: "4px",
                  }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Category dropdown */}
            <div
              className="project-toolbar-select-wrap"
              style={{ position: "relative", flex: "0 0 260px" }}
            >
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Filter by category"
                className="project-category-select"
                style={{
                  width: "100%",
                  appearance: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "14px 44px 14px 18px",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                }}
              >
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={17}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(240,240,240,0.4)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Meta row: result count + clear filters */}
          <div className="project-toolbar-meta">
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "rgba(240,240,240,0.45)",
              }}
            >
              Showing <strong style={{ color: "rgba(240,240,240,0.7)" }}>{resultCount}</strong>{" "}
              of {totalCount} projects
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="project-clear-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#f5c842",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                <X size={12} />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── EMPTY STATE ───────────────────────────────────────────── */}
      {!hasResults && (
        <section style={{ background: "#0a0a0a", padding: "64px 8% 96px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(240,240,240,0.55)",
            }}
          >
            No projects found
            {normalizedQuery && ` for "${query}"`}
            {category !== ALL_CATEGORIES && ` in ${category}`}.
          </p>
        </section>
      )}

      {/* ── SECTION 2 — SIGNATURE PROJECTS ───────────────────────── */}
      {filteredSignature.length > 0 && (
        <section style={{ background: "#0a0a0a", padding: "64px 8% 96px" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#f5c842",
                  flexShrink: 0,
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
                SIGNATURE PROJECTS
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Our Flagship Work
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {filteredSignature.map((project) => {
              const meta = projectMeta[project.slug];
              return (
                <div key={project.slug} className="feature-card">
                    {/* Gradient / image panel */}
                    <div
                      className="feature-card-image"
                      style={{ background: meta?.gradient ?? "#111" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 767px) 100vw, 45vw"
                      />
                    </div>

                    {/* Content panel */}
                    <div
                      className="feature-card-content"
                      style={{ background: "#111111" }}
                    >
                      {/* Category badge */}
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(245,200,66,0.1)",
                          border: "1px solid rgba(245,200,66,0.3)",
                          color: "#f5c842",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          marginBottom: "16px",
                          alignSelf: "flex-start",
                        }}
                      >
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                          fontWeight: 300,
                          color: "white",
                          lineHeight: 1.1,
                          marginBottom: "16px",
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "1rem",
                          color: "rgba(240,240,240,0.6)",
                          lineHeight: 1.8,
                          marginBottom: "28px",
                          maxWidth: "480px",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Facts row */}
                      {meta?.facts && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "stretch",
                            gap: "0",
                            marginBottom: "28px",
                          }}
                        >
                          {meta.facts.map((fact, fi) => (
                            <div
                              key={fact.label}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                paddingRight: "20px",
                                paddingLeft: fi > 0 ? "20px" : "0",
                                borderLeft:
                                  fi > 0
                                    ? "1px solid rgba(255,255,255,0.1)"
                                    : "none",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-body)",
                                  fontSize: "0.7rem",
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: "#f5c842",
                                }}
                              >
                                {fact.label}
                              </span>
                              <span
                                style={{
                                  fontFamily: "var(--font-body)",
                                  fontSize: "0.95rem",
                                  color: "white",
                                }}
                              >
                                {fact.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Learn more */}
                      <Link
                        href={`/projects/${project.slug}`}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "#f5c842",
                          textDecoration: "none",
                          alignSelf: "flex-start",
                        }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── SECTION 3 — OTHER PROJECTS GRID ──────────────────────── */}
      {filteredOther.length > 0 && (
        <section style={{ background: "#111111", padding: "96px 8%" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#f5c842",
                  flexShrink: 0,
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
                MORE INITIATIVES
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              All Projects
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(240,240,240,0.45)",
              }}
            >
              Beyond our signature work
            </p>
          </div>

          <div className="other-grid">
            {filteredOther.map((p) => (
              <div key={p.title} className="other-card">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#f5c842",
                    marginBottom: "10px",
                  }}
                >
                  {p.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
