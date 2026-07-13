import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#061229",
        navy: "#0A1B3D",
        "navy-2": "#102550",
        line: "#1F3560",
        gold: "#F5C518",
        "gold-light": "#FFDE59",
        paper: "#F4F6FB",
        muted: "#9AA6C2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        blink: "blink 1.1s step-end infinite",
        drift: "drift 7s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(245, 197, 24, 0.35)",
        card: "0 10px 40px -18px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
