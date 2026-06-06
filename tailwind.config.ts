import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-bright": "var(--color-primary-bright)",
        cta: "var(--color-cta)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        "4.5": "18px",
        "18": "72px",
        "22": "88px",
        "30": "120px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease forwards",
        "bounce-slow": "bounce 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
