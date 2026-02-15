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
        navy: "#0a1628",
        "navy-light": "#0f2137",
        "category-blue": "#7dd3fc",
        "accent-blue": "#3b82f6",
        "accent-teal": "#10b981",
        "accent-orange": "#f97316",
        "accent-purple": "#a855f7",
      },
      spacing: {
        slide: "80px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
