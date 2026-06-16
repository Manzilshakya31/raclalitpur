import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Rotaract Club of Lalitpur",
};

// ── Icons ──────────────────────────────────────────────────────────────────

function HeartIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f5c842"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function TempleIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f5c842"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f5c842"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "1998",
    title: "Club Chartered",
    description:
      "December 28, 1998. Rotaract Club of Lalitpur officially chartered under RI District 3292, Zone XII.",
  },
  {
    year: "2000s",
    title: "Candle Walk Begins",
    description:
      "Our signature cultural preservation project becomes an annual tradition in Mongal Bazaar.",
  },
  {
    year: "2020",
    title: "Going Digital",
    description:
      "Club adapts through the pandemic with online awareness sessions and virtual fellowship.",
  },
  {
    year: "2025",
    title: "27th Charter Year",
    description:
      "Celebrating 27 years with 3,000+ community reach and 25 past presidents.",
  },
];

const values = [
  {
    title: "Service Above Self",
    description:
      "Every project, every meeting, every initiative is rooted in serving our community first.",
    icon: <HeartIcon />,
  },
  {
    title: "Cultural Preservation",
    description:
      "Lalitpur's heritage is our identity. We protect and celebrate it through programs like Candle Walk.",
    icon: <TempleIcon />,
  },
  {
    title: "Youth Leadership",
    description:
      "We develop the next generation of leaders through fellowship, training, and hands-on service.",
    icon: <UsersIcon />,
  },
];

const boardMembers = [
  { name: "Rtr. Aakriti Simkhada", role: "President", initials: "AS" },
  {
    name: "Rtr. Manjil Shakya",
    role: "Immediate Past President",
    initials: "MS",
    profileUrl: "https://www.instagram.com/manzil_shakya/",
  },
  { name: "Rtr. Mabika Maharjan", role: "Secretary", initials: "MM" },
  { name: "Rtr. Shilviya Bajracharya", role: "Treasurer", initials: "SB" },
  {
    name: "Rtr. Mihika Maharjan",
    role: "International Service Director",
    initials: "MM",
  },
  {
    name: "Rtr. Ananda Bakhrel",
    role: "Professional Director",
    initials: "AB",
  },
  { name: "Rtr. Alwina Shakya", role: "Club Service Director", initials: "AS" },
  { name: "Rtr. Samir Shakya", role: "Membership Director", initials: "SS" },
  {
    name: "Rtr. Richa Bist",
    role: "Community Service Director",
    initials: "RB",
  },
  { name: "Rtr. Jessica Rai", role: "Sergeant at Arms", initials: "JR" },
  { name: "Rtr. Prashamshya M. Karmacharya", role: "", initials: "PMK" },
  { name: "Rtr. Shubhasika Tamrakar", role: "", initials: "ST" },
];

const generalMembers = [
  "Suzal Tamrakar",
  "Manya Rajkarnikar",
  "Sandip Rai",
  "Swostika Rai",
  "Pragalv Raj Shakya",
  "Bhaskar Pant",
  "Ezna Barahi",
  "Sargah Maharjan",
];

const pastPresidentNames: Record<number, string> = {
  1: "Sanju Shakya",
  2: "Gopal K. Shrestha",
  3: "Govinda Awale",
  4: "Rajesh Bajracharya",
  5: "Sanju Shakya",
  6: "Gajanana Dakhwa",
  7: "Biseshwor Man Shrestha",
  8: "Sajesh Tamrakar",
  9: "Nitisha Tamrakar",
  10: "Sugen Shakya",
  11: "Rujan Bajracharya",
  12: "Prakash R. Bajracharya",
  13: "Roshan Bajracharya",
  14: "Jitendra Bajracharya",
  15: "Alisha Shakya",
  16: "Bijay Benjankar",
  17: "Prabin Maharjan",
  18: "Sanjal Byanjankar",
  19: "Rashik Shakya",
  20: "Priyanka Shakya",
  21: "Sama Shrestha",
  22: "Nischal Tamrakar",
  23: "Rubin Bajracharya",
  24: "Pranil Shakya",
  25: "Shovana Shakya",
  26: "Manjil Shakya",
};

const pastPresidents = Array.from(
  { length: 26 },
  (_, i) => pastPresidentNames[i + 1] ?? `President ${i + 1}`,
);

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
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
              OUR STORY
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
            27 Years of Perceiving &amp; Excelling
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
            From December 1998 to today — a legacy of service in Lalitpur
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — ORIGIN STORY ──────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "96px 8%" }}>
        <style>{`
          .origin-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: start;
            max-width: 1200px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
            .origin-grid { grid-template-columns: 1fr; gap: 56px; }
          }
        `}</style>

        <div className="origin-grid">
          {/* Left — narrative text */}
          <ScrollReveal direction="left" duration={0.9}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: "40px",
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
                HOW IT BEGAN
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "28px",
              }}
            >
              Founded in 1998
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(240,240,240,0.65)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              The Rotaract Club of Lalitpur was chartered on December 28, 1998
              under Rotary International District 3292, Zone XII. For over 27
              years, we have been a home for young leaders committed to service,
              fellowship, and the preservation of Lalitpur&apos;s rich cultural
              heritage.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(240,240,240,0.65)",
                lineHeight: 1.8,
              }}
            >
              From our signature Candle Walk through Mongal Bazaar to health
              camps and community outreach, every project reflects our motto:{" "}
              <em
                style={{
                  color: "rgba(245,200,66,0.85)",
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                }}
              >
                Perceive &amp; Excel.
              </em>
            </p>
          </ScrollReveal>

          {/* Right — timeline */}
          <ScrollReveal direction="right" duration={0.9} delay={0.1}>
            <div style={{ position: "relative", paddingLeft: "32px" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "3px",
                  top: "12px",
                  bottom: "12px",
                  width: "1px",
                  background: "rgba(245,200,66,0.2)",
                }}
              />

              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  style={{
                    position: "relative",
                    marginBottom: i < milestones.length - 1 ? "40px" : 0,
                  }}
                >
                  {/* Dot on line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-29px",
                      top: "7px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#f5c842",
                    }}
                  />

                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "#f5c842",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {m.year}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "white",
                      marginBottom: "6px",
                    }}
                  >
                    {m.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "rgba(240,240,240,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 3 — VALUES ────────────────────────────────────── */}
      <section style={{ background: "#111111", padding: "96px 8%" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
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
                OUR VALUES
              </span>
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
              />
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
              What We Stand For
            </h2>
          </div>
        </ScrollReveal>

        <style>{`
          .values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
            .values-grid { grid-template-columns: 1fr; }
          }
          .value-card { transition: border-color 0.25s ease; }
          .value-card:hover { border-color: rgba(245,200,66,0.2) !important; }
        `}</style>

        <div className="values-grid">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1} direction="up">
              <div
                className="value-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "40px 32px",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "24px" }}>{v.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: "12px",
                    lineHeight: 1.2,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "rgba(240,240,240,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {v.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SECTION 4 — CURRENT BOARD ─────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "96px 8%" }}>
        <style>{`
          .board-card { transition: border-color 0.25s ease, transform 0.25s ease; }
          a.board-card:hover {
            border-color: rgba(245,200,66,0.3) !important;
            transform: translateY(-2px);
          }
        `}</style>

        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
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
                LEADERSHIP
              </span>
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
              />
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
              Current Board RY 2026–27
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {boardMembers.map((member, i) => {
            const cardStyle: React.CSSProperties = {
              display: "block",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "32px 24px",
              textAlign: "center",
              height: "100%",
              textDecoration: "none",
            };

            const cardContent = (
              <>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(245,200,66,0.1)",
                    border: "1px solid rgba(245,200,66,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "#f5c842",
                      lineHeight: 1,
                    }}
                  >
                    {member.initials}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "white",
                    marginTop: "16px",
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "#f5c842",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {member.role}
                </p>
              </>
            );

            return (
              <ScrollReveal key={member.role} delay={i * 0.07} direction="up">
                {member.profileUrl ? (
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="board-card"
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="board-card" style={cardStyle}>
                    {cardContent}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 5 — GENERAL MEMBERS ───────────────────────────── */}
      <section style={{ background: "#111111", padding: "80px 8%" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
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
                OUR MEMBERS
              </span>
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
              />
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
              General Members
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(240,240,240,0.45)",
              }}
            >
              The members who power every project
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {generalMembers.map((name) => (
              <span
                key={name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(240,240,240,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── SECTION 6 — PAST PRESIDENTS ───────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "80px 8%" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
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
                OUR LEGACY
              </span>
              <div
                style={{ width: "40px", height: "1px", background: "#f5c842" }}
              />
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
              25+ Past Presidents
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(240,240,240,0.45)",
              }}
            >
              The leaders who built this club
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {pastPresidents.map((name, i) => (
              <span
                key={`${name}-${i}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(240,240,240,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── SECTION 7 — BOTTOM CTA ────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a0d00 0%, #0a0a0a 50%, #0d001a 100%)",
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{ width: "40px", height: "1px", background: "#f5c842" }}
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
              JOIN THE CLUB
            </span>
            <div
              style={{ width: "40px", height: "1px", background: "#f5c842" }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Be Part of Our Story
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "440px",
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            The next chapter is being written. Join us and help shape it.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/join"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#d4006a",
                color: "white",
                padding: "16px 48px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Join the Club
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "16px 48px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
