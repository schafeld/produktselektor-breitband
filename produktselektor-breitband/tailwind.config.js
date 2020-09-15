module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./public/**/*.html",
    "./src/**/*.vue"
  ],
  theme: {
    fontFamily: {
      light: ["VodafoneLt"],
      medium: ["VodafoneRg"],
      bold: ["VodafoneBd"]
    },
    extend: {
      /* Extend Tailwind with custom css for Vodafone theme. */
      colors: {
        "vodafone-grey": "#4A4D4E",
        "vodafone-red": "#e60000",
        "vodafone-white": "#ffffff",
        "vodafone-black": "#000000",
        "vodafone-aqua-blue": "#00B0CA",
        "vodafone-aubergine": "#5E2750",
        "vodafone-turquoise": "#007C92",
        "vodafone-red-violet": "#9C2AA0",
        "vodafone-spring-green": "#A8B400",
        "vodafone-fresh-orange": "#eb9700",
        "vodafone-lemon-yellow": "#fecb00",
        "vodafone-dark-grey": "#333333",
        "vodafone-anthracite": "#666666",
        "vodafone-mid-grey": "#999999",
        "vodafone-platinum": "#afafaf",
        "vodafone-silver": "#cccccc",
        "vodafone-aluminum": "#ebebeb",
        "vodafone-light-grey": "#f4f4f4",
        "digital-green": "#428600",
        "digital-dark-red-2": "#820000",
        "digital-maroon": "#990000",
        "digital-dark-red": "#bd0000",
        "digital-red": "#ff0000",
        "confirmation-green": "#427d00",
        "info-tooltip": "#f1f8f9",
        "alert-success": "#f4f7f0",
        "alert-error": "#FEF0F0",
        "info-orange": "#ff5400",
        "alert-warning": "#fff5f0",
        info: "#ffffff"
      },
      spacing: {
        // Locking Images to a Fixed Aspect Ratio
        // https://tailwindcss.com/course/locking-images-to-a-fixed-aspect-ratio
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "focus", "hover", "active"] // optional universal state styles
  },
  plugins: []
};
