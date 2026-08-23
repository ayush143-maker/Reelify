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
        cream: { DEFAULT: "#FDFBF7", dark: "#F4F1EA" },
        olive: { DEFAULT: "#5C6B47", light: "#8A9A7B", dark: "#3E4A2E" },
        grey: { muted: "#6B7280", light: "#E5E7EB", dark: "#374151" },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'olive-sm': '0 2px 8px rgba(92, 107, 71, 0.08)',
        'olive-md': '0 8px 24px rgba(92, 107, 71, 0.12)',
        'olive-lg': '0 16px 48px rgba(92, 107, 71, 0.16)',
      }
    },
  },
  plugins: [],
};
export default config;
