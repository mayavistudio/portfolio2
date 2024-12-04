/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode via class-based triggering
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#825CF6", // Custom purple color
        },
        gray: {
          900: "#121212", // Dark background
          800: "#1e1e1e", // Dark card background
        },
      },
      // Optional: Adding custom spacing or fonts if needed.
    },
  },
  plugins: [],
};
