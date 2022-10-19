/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,jsx}' ],
	theme: {
		extend: {
			colors: {
				darkCyan: 'hsl(185, 75%, 39%)',
				veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
				darkGrayishBlue: 'hsl(227, 10%, 46%)',
				darkGray: 'hsl(0, 0%, 59%)'
      },
      fontFamily : {
        kumbh : ['Kumbh Sans', 'sans-serif']
      },
      backgroundImage : {
        'pattern-card' : "url(./assets/bg-pattern-card.svg)",
        'pattern-top' : "url(./assets/bg-pattern-top.svg)",
        'pattern-bottom' : "url(./assets/bg-pattern-botttom.svg)"
      }
		}
	},
	plugins: []
};
