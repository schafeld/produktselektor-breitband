module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    fontFamily: {
      'light': ['VodafoneLt'],
      'medium': ['VodafoneRg'],
      'bold': ['VodafoneBd']
    },
    extend: {
      /* Extend Tailwind with custom css for Vodafone theme. */
      colors: {
        'vodafone-grey': '#4A4D4E',
        'vodafone-red': '#e60000',
        'vodafone-white': '#ffffff',
        'vodafone-black': '#000000',
        'vodafone-aqua-blue': '#00B0CA',
        'vodafone-aubergine': '#5E2750',
        'vodafone-turquoise': '#007C92',
        'vodafone-red-violet': '#9C2AA0',
        'vodafone-spring-green': '#A8B400',
        'vodafone-fresh-orange': '#eb9700',
        'vodafone-lemon-yellow': '#fecb00',
        'vodafone-dark-grey': '#333333',
        'vodafone-anthracite': '#666666',
        'vodafone-mid-grey': '#999999',
        'vodafone-platinum': '#afafaf',
        'vodafone-silver': '#cccccc',
        'vodafone-aluminum': '#ebebeb',
        'vodafone-light-grey': '#f4f4f4',
        'digital-green': '#428600',
        'digital-dark-red-2': '#820000',
        'digital-maroon': '#990000',
        'digital-dark-red': '#bd0000',
        'digital-red': '#ff0000',
        'confirmation-green': '#427d00',
        'info-tooltip': '#f1f8f9',
        'alert-success': '#f4f7f0',
        'alert-error': '#FEF0F0',
        'info-orange': '#ff5400',
        'alert-warning': '#fff5f0',
        'info': '#ffffff',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'focus', 'hover', 'active'] // optional universal state styles
  },
  plugins: [],
}
