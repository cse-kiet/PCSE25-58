/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ayush-purple': '#5E4EE1',
        'ayush-light': '#F5F7FF',
        'ayush-dark': '#1A1A1A',
      }
    },
  },
  plugins: [],
}