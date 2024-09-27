/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#0C1821",
        white: "#ffffff",
        gray: {
          1: "#2D3838", // borders
          2: "#A3BFBA", // text
          3: "#324A5F",
          4: "#1B2A41",
        },
        purple: {
          1: "#BEB4F4",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 30%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-20%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadeIn: "fade-in 1s ease-in-out",
        fadeUp: "fade-in-up 1s ease-in-out",
        fadeRight: "fade-in-right 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
