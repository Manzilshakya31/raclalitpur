"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { UserRound } from "lucide-react";
import { useState } from "react";
import styles from "./PastPresidentsGrid.module.css";

type PastPresident = {
  name: string;
  image: string | null;
  year?: string;
};

type PastPresidentsGridProps = {
  presidents: PastPresident[];
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

function PresidentAvatar({ name, image }: PastPresident) {
  const [hasImageError, setHasImageError] = useState(false);
  const shouldShowImage = Boolean(image) && !hasImageError;

  return (
    <div className={styles.avatarShell}>
      {shouldShowImage ? (
        <Image
          src={image as string}
          alt={`${name} - Past President`}
          width={112}
          height={112}
          sizes="(max-width: 639px) 64px, (max-width: 1023px) 72px, 90px"
          className={styles.avatarImage}
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div
          className={styles.avatarPlaceholder}
          aria-label={`${name} - Past President photo placeholder`}
          role="img"
        >
          <UserRound size={34} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

export default function PastPresidentsGrid({ presidents }: PastPresidentsGridProps) {
  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {presidents.map((president, index) => (
        <motion.article
          className={styles.card}
          variants={cardVariants}
          key={`${president.name}-${index}`}
        >
          <PresidentAvatar {...president} />
          <div className={styles.content}>
            <h3 className={styles.name}>{president.name}</h3>
            {president.year ? <p className={styles.year}>{president.year}</p> : null}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}