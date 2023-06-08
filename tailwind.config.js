/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dd0000',
        secondary: '#666666',
        darkcolor: '#212226',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

