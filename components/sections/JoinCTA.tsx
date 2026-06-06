"use client";

import { useRef, useEffect, Fragment } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const steps = [
  { number: "1", text: "Fill the Form" },
  { number: "2", text: "Attend 3 Meetings" },
  { number: "3", text: "Pay NPR 500" },
];

export default function JoinCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-cta-main]", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
      gsap.from("[data-step]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.35,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #1a0d00 0%, #0a0a0a 50%, #0d001a 100%)",
        padding: "120px 8%",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Grain overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          <filter id="join-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#join-grain)" opacity="0.03" />
        </svg>
      </div>

      <style>{`
        .join-steps { display: flex; align-items: flex-start; justify-content: center; max-width: 480px; margin: 0 auto 48px; }
        .join-connector { flex: 1; border-top: 1px dashed rgba(255,255,255,0.1); margin-top: 14px; min-width: 20px; }
        .join-buttons { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
        @media (max-width: 639px) {
          .join-steps { flex-direction: column; align-items: center; gap: 24px; max-width: 100%; }
          .join-connector { display: none; }
          .join-buttons { flex-direction: column; align-items: center; gap: 12px; }
          .join-btn { display: block !important; width: 100%; max-width: 280px; text-align: center; box-sizing: border-box; }
        }
      `}</style>

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Label */}
        <div data-cta-main style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "0",
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
              BECOME A ROTARACTOR
            </span>
            <div style={{ width: "40px", height: "1px", background: "#f5c842" }} />
          </div>
        </div>

        {/* Heading */}
        <h2
          data-cta-main
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Ready to Make a
          <br />
          Difference<span style={{ color: "#d4006a" }}>?</span>
        </h2>

        {/* Subtext */}
        <p
          data-cta-main
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "480px",
            margin: "0 auto 48px",
            lineHeight: 1.8,
          }}
        >
          Join 27 years of service, fellowship, and cultural pride.
          Membership is open to anyone 18 years and above.
        </p>

        {/* Membership steps */}
        <div className="join-steps">
          {steps.map((step, i) => (
            <Fragment key={step.text}>
              {i > 0 && (
                <div className="join-connector" />
              )}
              <div
                data-step
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "1px solid rgba(245,200,66,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f5c842",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-body)",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.text}
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        {/* CTA buttons */}
        <div data-cta-main className="join-buttons">
          <Link
            href="/join"
            className="join-btn"
            style={{
              display: "inline-block",
              background: "#d4006a",
              color: "white",
              padding: "16px 40px",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#b3005a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#d4006a")}
          >
            Join the Club
          </Link>
          <Link
            href="/contact"
            className="join-btn"
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              padding: "16px 40px",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "white";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
