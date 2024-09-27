/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#0C1821",
      white: "#ffffff",
      gray: {
        1: "#2D3838", // borders
        2: "#A3BFBA", // text
      },
      purple: {
        1: "#BEB4F4",
      },
    },
    extend: {},
  },
  plugins: [],
};
