"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { y: 80, opacity: 0, skewY: 2 });
      gsap.set(".hero-sub", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 20, opacity: 0 });
      gsap.set(".hero-scroll", { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-line", { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.12 }, 0.2)
        .to(".hero-sub",  { y: 0, opacity: 1, duration: 0.9 }, 0.85)
        .to(".hero-cta",  { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 1.1)
        .to(".hero-scroll", { opacity: 1, duration: 0.6 }, 1.5);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px" }}
    >
      {/* Background image */}
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        aria-hidden="true"
      />

      {/* Overlay 1: solid dark over entire image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.55)" }}
        aria-hidden="true"
      />

      {/* Overlay 2: left-to-right gradient — keeps text readable, temple visible on right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.045, pointerEvents: "none" }}
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Content — left-aligned */}
      <div
        className="relative z-10 w-full"
        style={{ paddingLeft: "clamp(24px, 8vw, 120px)", paddingRight: "5%" }}
      >
        <div className="max-w-[90vw] md:max-w-[600px]">
          {/* Eyebrow */}
          <div className="hero-line flex items-center gap-3 mb-6">
            <span className="h-px w-8" style={{ background: "var(--color-primary-bright)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-primary-bright)" }}
            >
              Rotaract Club of Lalitpur · Est. 1998
            </span>
            <span className="h-px w-8" style={{ background: "var(--color-primary-bright)" }} />
          </div>

          {/* Main headline */}
          <style>{`
            .hero-title-text { font-size: clamp(3rem, 8vw, 7rem); }
            @media (max-width: 767px) { .hero-title-text { font-size: clamp(2.5rem, 10vw, 4rem); } }
          `}</style>
          <h1 className="font-display font-light leading-[0.9] tracking-tight mb-8">
            <span className="hero-line hero-title-text block text-white">
              Perceive &amp;
            </span>
            <span className="hero-line hero-title-text block text-white">
              Excel<span style={{ color: "var(--color-cta)" }}>.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-sub text-base md:text-lg leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            27 years of service, fellowship &amp; cultural preservation in Lalitpur
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/projects"
              className="hero-cta h-12 px-7 text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              style={{ background: "var(--color-cta)" }}
            >
              Explore Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/join"
              className="hero-cta h-12 px-7 text-white text-sm font-medium rounded-full inline-flex items-center"
              style={{ border: "2px solid rgba(255,255,255,0.7)", transition: "background 0.2s, border-color 0.2s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,1)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Join the Club
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-[10px] font-semibold tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Scroll
        </span>
        <span
          className="animate-bounce-slow"
          style={{ color: "rgba(255,255,255,0.5)" }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </section>
  );
}
