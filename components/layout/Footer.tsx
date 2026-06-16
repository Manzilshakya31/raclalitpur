import Link from "next/link";
import { clubInfo, navLinks } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34V21.9C18.34 21.12 22 17 22 12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-surface)] border-t border-[var(--color-border)]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Rotaract Club of Lalitpur"
              className="h-9 md:h-11 w-auto"
            />
          </Link>
          <p className="text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed">
            {clubInfo.tagline} — serving the community of Lalitpur since{" "}
            {clubInfo.chartered.split(" ")[2]}.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">{clubInfo.district}</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & social */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-5">
            Connect
          </h3>
          <div className="flex flex-col gap-3 mb-6">
            <a
              href={`mailto:${clubInfo.email}`}
              className="text-sm text-[var(--color-text-muted)] hover:text-primary transition-colors duration-200"
            >
              {clubInfo.email}
            </a>
            <a
              href={`tel:${clubInfo.phone}`}
              className="text-sm text-[var(--color-text-muted)] hover:text-primary transition-colors duration-200"
            >
              {clubInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={clubInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--color-text-muted)] hover:text-primary transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href={clubInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[var(--color-text-muted)] hover:text-primary transition-colors duration-200"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2025 Rotaract Club of Lalitpur | {clubInfo.district}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Chartered {clubInfo.chartered}
          </p>
        </div>
      </div>
    </footer>
  );
}
