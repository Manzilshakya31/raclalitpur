"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhatsNext() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Small delayed entrance so it doesn't compete with the hero animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll + close on Escape while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`fixed bottom-6 right-6 z-30 flex items-center gap-2.5 rounded-full pl-3.5 pr-4 py-2.5 backdrop-blur-md transition-all duration-500 hover:scale-105 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{
          background: "rgba(20,20,20,0.85)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ background: "var(--color-cta)" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "var(--color-cta)" }}
          />
        </span>
        <span
          className="text-xs font-semibold tracking-[0.15em] uppercase"
          style={{ color: "var(--color-text)" }}
        >
          What&rsquo;s Next
        </span>
      </button>

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Upcoming event"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{ maxWidth: "900px" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 px-1">
            <span className="h-px w-8" style={{ background: "var(--color-primary-bright)" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-primary-bright)" }}
            >
              Upcoming Event
            </span>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{
              aspectRatio: "1800 / 1080",
              border: "1px solid var(--color-border)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/next/banner.png"
              alt="28th Installation Ceremony — Rotaract Club of Lalitpur, Rota Year 2026/27, 22nd August 2026 at 1:30 PM, ATM College, Khumaltar, Lalitpur"
              fill
              style={{ objectFit: "contain", background: "var(--color-surface)" }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute -top-3 -right-3 md:top-2 md:right-2 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
