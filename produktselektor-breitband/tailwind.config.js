module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'focus', 'hover', 'active'] // optional universal state styles
  },
  plugins: [],
}
