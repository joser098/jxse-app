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
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
