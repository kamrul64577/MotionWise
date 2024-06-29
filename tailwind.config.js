/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Poppins', 'sans-serif'],
        // sans: ['Montserrat', 'sans-serif'], 
        // sans: ['Roboto', 'sans-serif'],
        sans: ['Urbanist', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

