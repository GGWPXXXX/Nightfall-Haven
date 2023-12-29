/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:['Playfair Display'],
        inter:['Inter'],
        poppins:['Poppins'],
      }
    },
  },
  plugins: [],
}