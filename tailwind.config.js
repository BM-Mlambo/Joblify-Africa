/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
        surface: "#F9FAFB",
        ink: "#111827",
      },
    },
  },
  plugins: [],
};