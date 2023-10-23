/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "#111",
        3: "#333",
        4: "#444",
        6: "#666",
        8: "#888",
        9: "#999",
        ea: "#eaeaea",
        fa: "#fafafa",
      },
      animation: {
        slideInUp: "slideUp 0.5s",
        slideInLeft1s: "slideLeft .5s",
        slideInLeft2s: "slideLeft 1s",
        slideInLeft3s: "slideLeft 1.5s",
        slideInLeft4s: "slideLeft 1.8s",
        slideDown: "slideDown .6s",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-500px)" },
          "1000%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
