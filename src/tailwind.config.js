/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind sees your Explore.js, BookingPage.js, etc.
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#38bdf8', // Your Sri Balaji Guide theme color
      },
    },
  },
  plugins: [],
}
