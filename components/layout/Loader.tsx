"use client";

import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 400;
const FADE_MS = 400;

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Content is statically pre-rendered, so there's no need to wait on
    // window "load" — that event waits for every resource on the page
    // (hero video, images, fonts) and can hold this overlay up for seconds.
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), FADE_MS);
    }, MIN_DISPLAY_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: fading ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* GIF must stay a plain img — next/image does not animate GIFs */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/loader_gif.gif"
        alt=""
        style={{ width: "120px", height: "120px", objectFit: "contain" }}
      />
    </div>
  );
}
