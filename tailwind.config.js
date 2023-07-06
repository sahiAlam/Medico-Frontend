/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      gray: "#ececec",
      darkGray: "#3f3f46",
      btnColor: "#017d85",
      white: "#fcfefe",
      black: "#292929",
      darkBlack: "#000",
      green: "#7ab072",
      linkColor: "#60a5fa",
    },
    fontFamily: {
      para: ["Noto Serif Ottoman Siyaq", "serif"],
      heading: ["Ysabeau Office", "sans-serif"],
    },
    animation: {
      beat: "beat 4s ease-in-out infinite",
    },
    keyframes: {
      beat: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.03)" },
      },
    },
  },
  plugins: [],
};
