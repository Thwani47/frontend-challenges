/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,jsx}' ],
	theme: {
		extend: {
			fontFamily: {
				mulish: [ 'Mulish', 'sans-serif' ],
				rokkit: [ 'Rokkitt', 'monospace' ]
			}
		}
	},
	plugins: []
};
