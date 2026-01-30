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
        primary: {
          DEFAULT: "#0a0a0f",
          dark: "#050508",
          light: "#12121a",
        },
        accent: {
          DEFAULT: "#00e5ff",
          dim: "#00b8cc",
          glow: "#00e5ff33",
        },
        surface: {
          DEFAULT: "#15151d",
          elevated: "#1a1a24",
          border: "#2a2a38",
        },
        text: {
          primary: "#f0f0f5",
          secondary: "#a0a0b0",
          muted: "#606070",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
