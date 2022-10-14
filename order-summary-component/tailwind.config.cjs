/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,jsx}' ],
	theme: {
		extend: {
			colors: {
				'pale-blue': 'hsl(225, 100%, 94%)',
				'bright-blue': 'hsl(245, 75%, 52%)',
				'very-pale-blue': 'hsl(225, 100%, 98%)',
				'desaturated-blue': 'hsl(224, 23%, 55%)',
				'dark-blue': 'hsl(223, 47%, 23%)'
			},
			backgroundImage: {
				'mobile-bg-image': "url('./assets/pattern-background-mobile.svg')",
				'desktop-bg-image': "url('./assets/pattern-background-desktop.svg')"
			},
			fontFamily: {
				'red-hat-display': [ 'Red Hat Display', 'sans-serif' ]
			}
		}
	},
	plugins: []
};
