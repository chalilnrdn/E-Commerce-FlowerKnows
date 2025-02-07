/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl:'1200px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily:{
        italiana: "'italiana', serif",
        poppins: "'Poppins', serif",
        bodoni: "'Bodoni Moda SC', serif"
      },
      colors:{
        primary: "#E8989A",
        secondary: "#FEF0EF",
        tertiary: "#FEFEFE"
      }
    },
  },
  variants:{
    extend : {
      display: ['group-hover'],
      visibility: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

