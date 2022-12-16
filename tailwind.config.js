
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
        loboto:['Roboto'],
        rubik:['Rubik Marker Hatch'],
        dashed:['Rubik Marker Hatch'],
        Anton:['Anton'],
        dancing:['Dancing Script'],
        open:['Open Sans']
      }
    }
  },
}