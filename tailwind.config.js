/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "content-blur": {
          "0%": { filter: "blur(0.3rem)" },
          "100%": { filter: "blur(0)" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shape-shift": {
          "0%": {
            width: "40px",
            height: "20px",
          },
        },
      },
      animation: {
        "pop-blob": "pop-blob 5s infinite",
        "reveal-up": "reveal-up 2s ease-in-out forwards",
        "reveal-down": "reveal-down 2s ease-in-out forwards",
        "content-blur": "content-blur 2s ease-in-out forwards",
        fadeIn: "fadeIn 0.5s ease-in",
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
