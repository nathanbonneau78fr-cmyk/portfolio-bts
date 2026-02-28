import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette sobre, institutionnelle (inspiration énergie / infrastructure)
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf5",
          500: "#0c8ee6",
          600: "#0070c4",
          700: "#01599f",
          800: "#064b83",
          900: "#0b3f6d",
          950: "#072849",
        },
        neutral: {
          850: "#1a1d21",
          950: "#0d0f11",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
