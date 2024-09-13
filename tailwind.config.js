/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "primary-dark": "#025f8e",
      "primary": "#1677bc",
      "primary-light": "#2aa8e2",
      "gray": "#fafafa",
      "black": "#1f1f1f",
      "neutral": "#757575"
    },
  },
  plugins: [],
};
