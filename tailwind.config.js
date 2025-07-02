/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  assetsInclude: ["**/*.otf", "**/*.jpg"],
  safelist: ["font-Akira"],
  theme: {
    extend: {
      fontFamily: {
        Akira: ["Akira", "sans-serif"],
      },
    },
  },
  plugins: [],
};
