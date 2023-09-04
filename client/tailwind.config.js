/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-black': "#18181b",
        'active-black' : "#09090b",
        'active-black-1' : "#0c0a09",
        'primary-white' : "#ffffff96",
        'active-white' : "#ffffff",
        'dark-blue' : "#020617",
        'black': "#000000",
        'gray': "#9ca3af",
        'pink': "#be185d",
        'red': "#c70039",
        'blue': "#4338ca",
        'purple': "#8739f9",
        'orange': "#bc3908",
        'malt': "#00909e",
        'green': "#04A777",
      },
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
        'lg' : '1024px',
      },
    },
  },
  plugins: [],
}

