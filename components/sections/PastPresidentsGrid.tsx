"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MemberAvatar from "@/components/team/MemberAvatar";
import type { Member } from "@/lib/members";
import styles from "./PastPresidentsGrid.module.css";

type PastPresidentsGridProps = {
  presidents: Member[];
};

export default function PastPresidentsGrid({ presidents }: PastPresidentsGridProps) {
  return (
    <div className={styles.grid}>
      {presidents.map((president, index) => (
        <ScrollReveal
          key={`${president.slug}-${index}`}
          delay={(index % 5) * 0.05}
          duration={0.5}
        >
          <article className={styles.card}>
            <Link
              href={`/about/team/${president.slug}`}
              className={styles.cardLink}
              aria-label={`View ${president.name} Profile`}
            >
              <MemberAvatar name={president.name} image={president.image} />
              <div className={styles.content}>
                <h3 className={styles.name}>{president.name}</h3>
              </div>
            </Link>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
