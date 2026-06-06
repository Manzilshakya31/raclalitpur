"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
    };

    if (direction === "up") fromVars.y = 40;
    if (direction === "left") fromVars.x = -40;
    if (direction === "right") fromVars.x = 40;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...fromVars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

