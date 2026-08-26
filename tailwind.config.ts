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
        ink: "#0E0E0F",
        surface: { DEFAULT: "#17171A", raised: "#1D1D1F" },
        paper: { DEFAULT: "#EDEBE6", dim: "#B7B4AC" },
        line: "#28282B",
        muted: "#84817A",
        gold: { DEFAULT: "#C9A227", dim: "#8A7124" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wider2: "0.16em",
        wider3: "0.24em",
      },
    },
  },
  plugins: [],
};
export default config;
