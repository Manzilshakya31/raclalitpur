import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects — Rotaract Club of Lalitpur",
};

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
      { label: "Participants", value: "3,000+" },
      { label: "Frequency",    value: "Annual"  },
      { label: "Running Since", value: "2000s"  },
    ],
  },
  "nyano-maya": {
    gradient: "linear-gradient(135deg, #0a001a, #1f003d)",
    facts: [
      { label: "Reach",     value: "Community"   },
      { label: "Frequency", value: "Annual"      },
      { label: "Level",     value: "District"    },
    ],
  },
  "lumanti-magazine": {
    gradient: "linear-gradient(135deg, #001a0a, #003d1f)",
    facts: [
      { label: "Type",      value: "Publication" },
      { label: "Edition",   value: "Annual"      },
      { label: "Since",     value: "Charter"     },
    ],
  },
  "matya-health-camp": {
    gradient: "linear-gradient(135deg, #0a0a1a, #1f1f3d)",
    facts: [
      { label: "Service",   value: "Health Camp" },
      { label: "Cost",      value: "Free"        },
      { label: "Frequency", value: "Annual"      },
    ],
  },
};

const otherProjects = [
  { title: "Blood Donation Campaign",  category: "Health"               },
  { title: "Coffee Gig",               category: "Fellowship"           },
  { title: "Cultural Exchange",        category: "Culture"              },
  { title: "DLTS",                     category: "Leadership"           },
  { title: "DRC Visit",               category: "Fellowship"           },
  { title: "Circle of Growth",        category: "Personal Development" },
  { title: "Online Awareness Sessions", category: "Awareness"          },
  { title: "Charter Day Celebration", category: "Club Tradition"       },
  { title: "Joint Meetings",          category: "Fellowship"           },
  { title: "Sounds of Valley",        category: "Culture"              },
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
`;

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <>
      <style>{responsiveStyles}</style>

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
              OUR WORK
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
            From cultural preservation to community health — 27 years of impact
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — SIGNATURE PROJECTS ───────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "96px 8%" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "40px", height: "1px", background: "#f5c842", flexShrink: 0 }} />
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
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {projects.map((project, i) => {
            const meta = projectMeta[project.slug];
            return (
              <ScrollReveal key={project.slug} delay={i * 0.06} direction="up">
                <div className="feature-card">
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
                  <div className="feature-card-content" style={{ background: "#111111" }}>
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
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 3 — OTHER PROJECTS GRID ──────────────────────── */}
      <section style={{ background: "#111111", padding: "96px 8%" }}>
        <ScrollReveal>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "40px", height: "1px", background: "#f5c842", flexShrink: 0 }} />
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
        </ScrollReveal>

        <div className="other-grid">
          {otherProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.05} direction="up">
              <div className="other-card">
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
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
