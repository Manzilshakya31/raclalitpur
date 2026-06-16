import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { clubInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join — Rotaract Club of Lalitpur",
};

function FormIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function MeetingsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FeeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M9.5 10h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H14" />
    </svg>
  );
}

function WelcomeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Fill the Form",
    description:
      "Complete our membership interest form online. It takes less than 2 minutes.",
    icon: <FormIcon />,
    cta: { label: "Fill the Form →", href: "https://forms.gle" },
  },
  {
    number: "02",
    title: "Attend 3 Meetings",
    description:
      "Join us for three consecutive club meetings to experience our community.",
    icon: <MeetingsIcon />,
    cta: null,
  },
  {
    number: "03",
    title: "Pay Membership Fee",
    description:
      "One-time membership fee of NPR 500 to officially join the club.",
    icon: <FeeIcon />,
    cta: null,
  },
  {
    number: "04",
    title: "You're a Rotaractor!",
    description:
      "Welcome to the family. Start serving, learning, and growing.",
    icon: <WelcomeIcon />,
    cta: null,
  },
];

const eligibilityPoints = [
  "Age 18 years and above",
  "Passion for community service",
  "Commitment to fellowship",
  "Based in or around Lalitpur",
];

export default function JoinPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
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
              JOIN US
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
            Become a Rotaractor
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
            Be part of 27 years of service and fellowship
          </p>
        </div>
      </section>

      {/* ── MEMBERSHIP PROCESS ───────────────────────────────────── */}
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
                HOW TO JOIN
              </span>
              <div style={{ width: "40px", height: "1px", background: "#f5c842" }} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Four Simple Steps
            </h2>
          </div>
        </ScrollReveal>

        <style>{`
          .steps-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            max-width: 900px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
            .steps-grid { grid-template-columns: 1fr; }
          }
          .step-card { transition: border-color 0.25s ease; }
          .step-card:hover { border-color: rgba(245,200,66,0.2) !important; }
        `}</style>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08} direction="up">
              <div
                className="step-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Ghost step number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "16px",
                    fontFamily: "var(--font-display)",
                    fontSize: "6rem",
                    fontWeight: 700,
                    color: "white",
                    opacity: 0.04,
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {step.number}
                </span>

                <div style={{ marginBottom: "20px" }}>{step.icon}</div>

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
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "rgba(240,240,240,0.55)",
                    lineHeight: 1.7,
                    marginBottom: step.cta ? "20px" : 0,
                  }}
                >
                  {step.description}
                </p>

                {step.cta && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "#f5c842",
                      textDecoration: "none",
                    }}
                  >
                    {step.cta.label}
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "80px 8%" }}>
        <style>{`
          .eligibility-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            max-width: 1100px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
            .eligibility-grid { grid-template-columns: 1fr; gap: 48px; }
          }
        `}</style>

        <div className="eligibility-grid">
          {/* Left — eligibility list */}
          <ScrollReveal direction="left">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 300,
                color: "white",
                marginBottom: "36px",
                lineHeight: 1.2,
              }}
            >
              Who Can Join?
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              {eligibilityPoints.map((point) => (
                <li
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "rgba(240,240,240,0.8)",
                  }}
                >
                  <span
                    style={{
                      color: "#f5c842",
                      fontSize: "1.1rem",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right — info card */}
          <ScrollReveal direction="right" delay={0.1}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,200,66,0.05), rgba(212,0,106,0.05))",
                border: "1px solid rgba(245,200,66,0.15)",
                borderRadius: "16px",
                padding: "48px 40px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,240,240,0.4)",
                  marginBottom: "8px",
                }}
              >
                Membership Fee
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "#f5c842",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {clubInfo.membershipFee}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(240,240,240,0.45)",
                  marginBottom: "28px",
                }}
              >
                One-time annual fee
              </p>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.07)",
                  marginBottom: "28px",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,240,240,0.4)",
                  marginBottom: "10px",
                }}
              >
                Club Meetings
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  color: "white",
                  marginBottom: "4px",
                }}
              >
                {clubInfo.meetingSchedule}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(240,240,240,0.45)",
                  marginBottom: "28px",
                }}
              >
                {clubInfo.meetingVenue}
              </p>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.07)",
                  marginBottom: "28px",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,240,240,0.4)",
                  marginBottom: "8px",
                }}
              >
                Contact
              </p>
              <a
                href={`mailto:${clubInfo.email}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#f5c842",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {clubInfo.email}
              </a>
              <a
                href={`tel:${clubInfo.phone}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#f5c842",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {clubInfo.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a0d00 0%, #0a0a0a 50%, #0d001a 100%)",
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "40px",
            }}
          >
            Ready to join<span style={{ color: "#d4006a" }}>?</span>
          </h2>
          <Link
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
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
            Apply Now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
