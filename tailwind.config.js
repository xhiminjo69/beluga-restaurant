/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8dfd2',
          300: '#d9c9b3',
          400: '#c9b196',
          500: '#b89978',
        },
        ocean: {
          50: '#e6f3f7',
          100: '#cce7ef',
          200: '#99cfe0',
          300: '#66b7d0',
          400: '#339fc1',
          500: '#0087b1',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#b69121',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
