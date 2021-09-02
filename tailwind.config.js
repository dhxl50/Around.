const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./views/index.ejs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		fontFamily:{
			sans: ['IBMPlexSansKR-Regular', ...defaultTheme.fontFamily.sans],
		},
		gridTemplateColumns: {
         'custom': '80px minmax(0, 1fr) minmax(0, 1fr)',
        }
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
