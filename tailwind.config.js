/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A2E6D",
          primary: "#1C4FD7",
          accent: "#2FA8E0",
          light: "#EAF4FF",
          white: "#FFFFFF",
        },
        text: {
          dark: "#0F172A",
          muted: "#475569",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
