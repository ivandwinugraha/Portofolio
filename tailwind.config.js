/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#fc0125",
      },
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}

