/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#121212", // A very dark background, commonly used for dark themes
          secondary: "#1E1E1E", // Slightly lighter for cards, modals, etc.
        },
        accent: {
          primary: "#FF6B6B", // A bright accent color for buttons, call-to-action
          secondary: "#FFD93D", // A vibrant yellow for secondary highlights
          tertiary: "#56CCF2", // Cool blue accent for interactive elements like links
        },
        text: {
          primary: "#E5E5E5", // Light text for contrast against dark backgrounds
          secondary: "#9E9E9E", // Gray for secondary information
        },
        border: "#3A3A3C", // Subtle borders for dark-themed components
      },
    },
  },
  plugins: [],
};
