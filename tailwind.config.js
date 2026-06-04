/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Syne'", "'Montserrat'", "sans-serif"],
        body: ["'Inter'", "'Open Sans'", "sans-serif"],
      },
      colors: {
        mocha: "#A38F85",
        "ethereal-blue": "#b9d9eb",
        "moonlit-grey": "#4a4e54",
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(-16px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 0.25s cubic-bezier(0.2,0.9,0.4,1.05) both",
      },
    },
  },
  plugins: [],
};
