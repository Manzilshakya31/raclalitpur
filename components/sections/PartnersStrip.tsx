"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { partners, clubInfo } from "@/lib/constants";

function PartnerSlot({ partner }: { partner: (typeof partners)[number] }) {
  const [error, setError] = useState(false);

  const slotStyle: React.CSSProperties = {
    width: "140px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "8px",
    padding: "16px 24px",
    flexShrink: 0,
    textDecoration: "none",
    cursor: partner.url !== "#" ? "pointer" : "default",
  };

  const content = error ? (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.2)",
      }}
    >
      Partner Logo
    </span>
  ) : (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={100}
      height={28}
      style={{ objectFit: "contain" }}
      onError={() => setError(true)}
    />
  );

  return partner.url !== "#" ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-slot"
      aria-label={partner.name}
      style={slotStyle}
    >
      {content}
    </a>
  ) : (
    <div className="partner-slot" style={slotStyle}>
      {content}
    </div>
  );
}

export default function PartnersStrip() {
  return (
    <section
      style={{
        background: "#0f0f0f",
        padding: "64px 8%",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        .partner-slot {
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .partner-slot:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(245,200,66,0.2) !important;
        }
      `}</style>

      <ScrollReveal>
        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          TRUSTED PARTNERS
        </p>

        {/* Logo strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            marginBottom: "40px",
          }}
        >
          {partners.map((partner) => (
            <PartnerSlot key={partner.name} partner={partner} />
          ))}
        </div>

        {/* Footnote */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "4px",
            }}
          >
            Interested in partnering with us?
          </p>
          <a
            href={`mailto:${clubInfo.email}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "#f5c842",
              textDecoration: "none",
            }}
          >
            {clubInfo.email}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
