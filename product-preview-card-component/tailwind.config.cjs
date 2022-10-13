/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.jsx' ],
	theme: {
		extend: {
			screens: {
				mobile: {'max' :'768px'},
				desktop: '769px'
			},
			colors: {
				'dark-cyan': '#3c8067',
				'very-dark-cyan': '#156145',
				cream: '#f2ebe3',
				'very-dark-blue': '#1c232b',
				'dark-grayish-blue': '#6c7289'
			},
			fontFamily: {
				tapestry: [ 'Tapestry', 'cursive' ],
				montserrat: [ 'Montserrat', 'sans-serif' ],
				fraunces: [ 'Fraunces', 'serif' ]
			}
		}
	},
	plugins: []
};
