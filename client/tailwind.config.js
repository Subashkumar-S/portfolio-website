/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'primary-black': "#18181b",
      'active-black' : "#09090b",
      'primary-white' : "#cbd5e1",
      'active-white' : "#ffffff",
      'dark-blue' : "#020617",
      'black': "#000000",
      'pink': "#be185d",
      'blue': "#4338ca",
      'purple': "#481380",
      'orange': "#dd7631",
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        rubik: ['Rubik Vinyl', 'sans-serif'], 
      },
      boxShadow: {
        'md': '0 2px 5px 1px rgba(0, 0, 0, 0.3)',
      },
      screens : {
        'sm' : '365px',
        'md' : '768px',
        'lg' : '1024px',
      },
    },
  },
  plugins: [],
}

