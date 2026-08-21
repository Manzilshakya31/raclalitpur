"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MemberAvatar from "@/components/team/MemberAvatar";
import type { Member } from "@/lib/members";
import styles from "./TeamMemberProfile.module.css";

interface TeamMemberProfileProps {
  member: Member;
  previous: Member | null;
  next: Member | null;
}

export default function TeamMemberProfile({ member, previous, next }: TeamMemberProfileProps) {
  const paragraphs = member.message
    ? member.message
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : [];

  return (
    <>
      <section className={styles.hero}>
        <Link href="/about#team" className={styles.backLink}>
          ← Back to Team
        </Link>

        <ScrollReveal className={styles.heroContent} duration={0.7}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarGlow} aria-hidden="true" />
            <MemberAvatar name={member.name} image={member.image} size="lg" />
          </div>
          <h1 className={styles.name}>{member.name}</h1>
          <p className={styles.position}>{member.position}</p>
          <p className={styles.subtitle}>Rotaractor · Rotaract Club of Lalitpur</p>
        </ScrollReveal>
      </section>

      <section className={styles.journey}>
        <ScrollReveal className={styles.journeyInner} duration={0.6}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            <span className={styles.kickerLabel}>My Rotaract Journey</span>
            <span className={styles.kickerLine} />
          </div>

          {paragraphs.length > 0 ? (
            <div className={styles.messageBody}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.comingSoon}>
              {member.name}&rsquo;s story is being written. Check back soon to read
              about their Rotaract journey.
            </p>
          )}

          {member.quote && <blockquote className={styles.quote}>&ldquo;{member.quote}&rdquo;</blockquote>}
        </ScrollReveal>
      </section>

      <section className={styles.navSection}>
        <div className={styles.navRow}>
          {previous ? (
            <Link href={`/about/team/${previous.slug}`} className={styles.navLink}>
              <span className={styles.navDirection}>← Previous Member</span>
              <span className={styles.navName}>{previous.name}</span>
            </Link>
          ) : (
            <span className={styles.navSpacer} />
          )}

          <Link href="/about#team" className={styles.navBack}>
            Back to Team
          </Link>

          {next ? (
            <Link
              href={`/about/team/${next.slug}`}
              className={`${styles.navLink} ${styles.navLinkRight}`}
            >
              <span className={styles.navDirection}>Next Member →</span>
              <span className={styles.navName}>{next.name}</span>
            </Link>
          ) : (
            <span className={styles.navSpacer} />
          )}
        </div>
      </section>
    </>
  );
}
