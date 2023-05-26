/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Japan': ["'Noto Sans JP', sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}