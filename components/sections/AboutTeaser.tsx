import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const infoCards = [
  { value: "RI District 3292",  label: "Our District"   },
  { value: "December 28, 1998", label: "Charter Date"   },
  { value: "NPR 500",           label: "Membership Fee" },
  { value: "18+ Years",          label: "Age Range"      },
];

export default function AboutTeaser() {
  return (
    <section style={{ background: "#0f0f0f", padding: "96px 8%", borderLeft: "3px solid rgba(245,200,66,0.15)" }}>
      {/* All responsive rules in one place — no inline style for grid-template-columns
          so there is no specificity conflict with the media query */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .about-cta-link:hover { text-decoration: underline; }
      `}</style>

      <div className="about-grid">

        {/* ── LEFT COLUMN ── */}
        <ScrollReveal direction="left" duration={0.9}>
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ display: "block", height: "1px", width: "40px", background: "#f5c842", flexShrink: 0 }} />
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f5c842",
                fontFamily: "var(--font-body)",
              }}
            >
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#f0f0f0",
              marginBottom: "28px",
            }}
          >
            27 Years of Service,
            <br />
            Fellowship &amp;
            <br />
            Cultural Pride.
          </h2>

          {/* Body text */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(240,240,240,0.65)",
              marginBottom: "20px",
              maxWidth: "480px",
            }}
          >
            Founded in December 1998, the Rotaract Club of Lalitpur has spent over
            two decades building community, preserving culture, and developing the
            next generation of leaders in the Kathmandu Valley.
          </p>

          {/* Italic quote */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "rgba(245,200,66,0.8)",
              marginBottom: "36px",
            }}
          >
            We are youth. We are service. We are Lalitpur.
          </p>

          {/* CTA link */}
          <Link
            href="/about"
            className="about-cta-link"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#f5c842",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            Learn Our Story →
          </Link>
        </ScrollReveal>

        {/* ── RIGHT COLUMN ── */}
        <ScrollReveal direction="right" duration={0.9} delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {infoCards.map((card) => (
              <div
                key={card.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#ffffff",
                    lineHeight: 1.2,
                  }}
                >
                  {card.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "rgba(240,240,240,0.4)",
                  }}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
