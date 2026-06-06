"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { number: 27,   suffix: "",  label: "Years of Service"  },
  { number: 25,   suffix: "",  label: "Past Presidents"   },
  { number: 3000, suffix: "+", label: "Community Reach"   },
  { number: 15,   suffix: "+", label: "Active Projects"   },
];

export default function ImpactBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numberEls = sectionRef.current?.querySelectorAll<HTMLSpanElement>("[data-count]");
      if (!numberEls) return;

      numberEls.forEach((el) => {
        const target = parseInt(el.dataset.count ?? "0", 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate() {
            el.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="impact-section"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(245,200,66,0.15)",
        borderBottom: "1px solid rgba(245,200,66,0.15)",
        padding: "64px 8%",
      }}
    >
      {/* Section label */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "48px", gap: "12px" }}>
        <span style={{ display: "block", height: "1px", width: "40px", background: "#f5c842" }} />
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(240,240,240,0.4)",
            fontFamily: "var(--font-body)",
          }}
        >
          Our Impact in Numbers
        </span>
      </div>

      {/* Stats grid */}
      <style>{`
        .impact-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) {
          .impact-grid { grid-template-columns: repeat(4, 1fr); }
          .impact-grid .divider-line { display: block !important; }
        }
        .impact-grid .divider-line { display: none; }
      `}</style>
      <div
        style={{
          display: "grid",
          gap: "40px 0",
        }}
        className="impact-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              position: "relative",
            }}
          >
            {/* Vertical divider — shown on desktop for all but the last stat */}
            {i < stats.length - 1 && (
              <span
                className="divider-line"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "10%",
                  height: "80%",
                  width: "1px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
            )}

            {/* Number + suffix */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
              <span
                data-count={stat.number}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "#f5c842",
                }}
              >
                0
              </span>
              {stat.suffix && (
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "#d4006a",
                  }}
                >
                  {stat.suffix}
                </span>
              )}
            </div>

            {/* Label */}
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(240,240,240,0.5)",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
