/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#24232C",
        lightGrey: "#817D92",
        almostWhite: "#E6E5EA",
        almostBlack: "#18171F",
        green: "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
