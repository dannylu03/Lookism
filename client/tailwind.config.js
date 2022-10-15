/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ash-gray': '#C6C8BB',
        'camel': '#CAA473',
        'timberwolf': '#dad0c7',
        'cultured': '#ededed',
        'cafe-noir': '#443220',
      },
    },
  },
  plugins: [],
}
