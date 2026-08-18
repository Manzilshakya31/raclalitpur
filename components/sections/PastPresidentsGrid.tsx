"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MemberAvatar from "@/components/team/MemberAvatar";
import type { Member } from "@/lib/members";
import styles from "./PastPresidentsGrid.module.css";

type PastPresidentsGridProps = {
  presidents: Member[];
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PastPresidentsGrid({ presidents }: PastPresidentsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );

    observer.observe(grid);
    const fallback = window.setTimeout(() => setIsVisible(true), 450);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={gridRef}
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {presidents.map((president, index) => (
        <motion.article
          className={styles.card}
          variants={cardVariants}
          key={`${president.slug}-${index}`}
        >
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
        </motion.article>
      ))}
    </motion.div>
  );
}