import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnersStrip from "@/components/sections/PartnersStrip";
import ContactForm from "@/components/sections/ContactForm";
import { clubInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Rotaract Club of Lalitpur",
};

// ── Icons ───────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M14 3v12.2a4.2 4.2 0 1 1-4.2-4.2" />
      <path d="M14 6.2c1.3 2.4 3.1 3.8 5.5 4.1" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="m10 9.5 5 2.5-5 2.5z" fill="#f5c842" stroke="none" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// ── Page styles ─────────────────────────────────────────────────────────────

const pageStyles = `
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    .contact-grid { grid-template-columns: 1fr; gap: 56px; }
  }

  .contact-label {
    display: block;
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
  }
  .contact-input {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    padding: 14px 18px;
    color: white;
    font-family: var(--font-body);
    font-size: 0.95rem;
    width: 100%;
    margin-bottom: 16px;
    transition: border-color 0.2s ease;
    outline: none;
    display: block;
    appearance: none;
    -webkit-appearance: none;
  }
  .contact-input::placeholder {
    color: rgba(255,255,255,0.2);
  }
  .contact-input:focus {
    border-color: rgba(245,200,66,0.4);
  }
  select.contact-input {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f5c842' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 18px;
    padding-right: 44px;
    cursor: pointer;
  }
  select.contact-input option {
    background: #1a1a1a;
    color: white;
  }
  textarea.contact-input {
    resize: vertical;
    min-height: 140px;
  }
  .contact-submit {
    width: 100%;
    background: #d4006a;
    color: white;
    padding: 16px;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  .contact-submit:hover { background: #b3005a; }

  .district-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 32px auto 0;
  }
  @media (max-width: 639px) {
    .district-row { flex-direction: column; align-items: stretch; }
  }
`;

// ── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} suppressHydrationWarning />

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
              GET IN TOUCH
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
            Contact Us
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
            For sponsorships, partnerships, or general inquiries
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — CONTACT SPLIT ─────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "96px 8%" }}>
        <div className="contact-grid">

          {/* Left — contact info */}
          <ScrollReveal direction="left" duration={0.9}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
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
                REACH US
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "40px",
              }}
            >
              Let&apos;s Connect
            </h2>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><MailIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  General Inquiries
                </p>
                <a
                  href={`mailto:${clubInfo.email}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {clubInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><PhoneIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  Call Us
                </p>
                <a
                  href={`tel:${clubInfo.phone}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {clubInfo.phone}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><InstagramIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  Instagram
                </p>
                <a
                  href={clubInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  @raclalitpur
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><FacebookIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  Facebook
                </p>
                <a
                  href={clubInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Rotaract Club of Lalitpur
                </a>
              </div>
            </div>


            {/* TikTok */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><TikTokIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  TikTok
                </p>
                <a
                  href={clubInfo.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  @rac_lalitpur
                </a>
              </div>
            </div>

            {/* YouTube */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "32px" }}>
              <div style={{ marginTop: "2px" }}><YouTubeIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  YouTube
                </p>
                <a
                  href={clubInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Rotaract Club of Lalitpur
                </a>
              </div>
            </div>
            {/* Location */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "40px" }}>
              <div style={{ marginTop: "2px" }}><LocationIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  Lalitpur (Patan), Kathmandu Valley, Nepal
                </p>
              </div>
            </div>

            {/* Club Meetings */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "40px" }}>
              <div style={{ marginTop: "2px" }}><ClockIcon /></div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,240,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  Club Meetings
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  {clubInfo.meetingSchedule}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "rgba(240,240,240,0.5)",
                  }}
                >
                  {clubInfo.meetingVenue}
                </p>
              </div>
            </div>

            {/* Sponsorship note */}
            <div
              style={{
                background: "rgba(245,200,66,0.05)",
                border: "1px solid rgba(245,200,66,0.15)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
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
                FOR SPONSORS
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(240,240,240,0.55)",
                  lineHeight: 1.7,
                }}
              >
                Interested in sponsoring our events or projects? Reach out via email
                and our team will get back to you within 48 hours.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — contact form */}
          <ScrollReveal direction="right" duration={0.9} delay={0.1}>
            <ContactForm />
          </ScrollReveal>

        </div>
      </section>

      <PartnersStrip />

      {/* ── SECTION 3 — DISTRICT INFO ─────────────────────────────── */}
      <section style={{ background: "#111111", padding: "64px 8%" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "0" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Part of a Global Network
            </h2>
          </div>

          <div className="district-row">
            {[
              { title: "RI District 3292",         subtitle: "Our Rotary District"      },
              { title: "Rotary International",      subtitle: "Our Parent Organisation"  },
              { title: "Kathmandu Valley, Nepal",   subtitle: "Our Service Area"         },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "24px 32px",
                  textAlign: "center",
                  flex: "1 1 200px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "white",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "rgba(240,240,240,0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
