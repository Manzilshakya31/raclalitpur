"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useState } from "react";
import styles from "./MemberAvatar.module.css";

interface MemberAvatarProps {
  name: string;
  image: string | null;
  size?: "sm" | "lg";
}

export default function MemberAvatar({ name, image, size = "sm" }: MemberAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const shouldShowImage = Boolean(image) && !hasImageError;
  const sizeClass = size === "lg" ? styles.large : styles.small;

  return (
    <div className={`${styles.avatarShell} ${sizeClass}`}>
      {shouldShowImage ? (
        <Image
          src={image as string}
          alt={name}
          width={size === "lg" ? 220 : 112}
          height={size === "lg" ? 220 : 112}
          sizes={size === "lg" ? "220px" : "(max-width: 639px) 64px, (max-width: 1023px) 72px, 90px"}
          className={`${styles.avatarImage} avatar-image ${sizeClass}`}
          priority={size === "lg"}
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div
          className={`${styles.avatarPlaceholder} avatar-placeholder ${sizeClass}`}
          aria-label={`${name} photo placeholder`}
          role="img"
        >
          <UserRound size={size === "lg" ? 72 : 34} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
