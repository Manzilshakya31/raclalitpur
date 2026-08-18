import { ImageResponse } from "next/og";
import { clubInfo } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${clubInfo.name} — Perceive & Excel`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await fetch(
    new URL("../public/images/logo.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, #1e1e1e 0%, #0a0a0a 65%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={logoData as unknown as string} width={640} height={186} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 32,
            color: "#f0f0f0",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {clubInfo.motto}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#888888",
          }}
        >
          {`${clubInfo.district} · Est. ${clubInfo.chartered}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
