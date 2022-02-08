module.exports = {
  purge: ['./views/**/*.pug'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '(screen)': 'calc(100vh - 7rem)',
      },
      colors:{
        transparent: 'transparent',
        current: 'current',
        dark: '#0F0002',
        grey: '#381E21',
        main: '#640211',
        pink: '#F8D4DA',
        white: '#FFF6F7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
