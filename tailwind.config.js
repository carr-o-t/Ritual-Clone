const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      rblue: 'rgb(20, 43, 111)',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      yellow: 'rgb(255, 214, 0)'
    },
    screens: {
      'xs': '450px',
      'sm': '540px',
      'md': '750px',
      'lg': '960px',
      '2xl': '1200px'
    },
    extend: {
      maxWidth: {
        ritual: '1170px',
        max1: '934px',
        max2: '700px'
      },
      backgroundImage: {
        mobile: `url("./Home-Hero-Mobile.webp")`,
        desktop: `url("./Home-Hero-Desktop.jpg")`
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
