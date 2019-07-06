module.exports = {
  important: true,
  theme: {
      screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
      },
      extend: {
          colors: {              
          },
          margin: {
          },
      }
  },
  variants: {
      opacity: ['responsive', 'hover'],
      appearance: ['responsive'],
      backgroundColors: ['responsive', 'hover', 'focus'],
      fill: [],
  },
  plugins: [
      require('tailwindcss-transforms'),
      require('tailwindcss-transitions'),
      require('tailwindcss-border-gradients'),
  ]
}
