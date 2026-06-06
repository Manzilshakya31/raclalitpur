"use client";

import { useEffect, type ReactNode } from "react";
import { createLenis } from "@/lib/lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = createLenis();

    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  return <>{children}</>;
}
