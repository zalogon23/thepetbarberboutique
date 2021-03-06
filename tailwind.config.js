const colors = require("tailwindcss/colors")

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        "height": "height"
      },
      colors: {
        blue: colors.cyan
      },
      fontFamily: {
        // "right": ["Righteous", "cursive"],
        "aclo": ["Aclonica", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
