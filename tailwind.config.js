/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluelotus": "#1f456E",
        "smokeygrey": "#c3c0b7",
        "offblack": "#060606",
        "offwhite": "#e3e4e6",
      }
    },
  },
  plugins: [],
}

