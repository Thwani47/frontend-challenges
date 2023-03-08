/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,jsx}' ],
	theme: {
		extend: {
			screens: {
				sm: { max: '375px' },
				lg: { max: '1440px' }
			},
			colors: {
				'bright-blue': 'hsl(220, 98%, 61%)',
				'gradient-from-color': ' hsl(192, 100%, 67%)',
				'gradient-to-color': 'hsl(280, 87%, 65%)',
				// LIGHT THEME
				'lt-very-light-gray': ' hsl(0, 0%, 98%)',
				'lt-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
				'lt-light-grayish-blue': 'hsl(233, 11%, 84%)',
				'lt-dark-grayish-blue': 'hsl(236, 9%, 61%)',
				'lt-very-dark-grayish-blue': ' hsl(235, 19%, 35%)',
				// DARK THEME
				'dt-very-dark-blue': 'hsl(235, 21%, 11%)',
				'dt-very-dark-desaturated-blue': ' hsl(235, 24%, 19%)',
				'dt-light-grayish-blue': 'hsl(234, 39%, 85%)',
				'dt-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
				'dt-dark-grayish-blue': 'hsl(234, 11%, 52%)',
				'dt-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
				'dt-very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)'
			},
			fontFamily: {
				'josefin-sans': [ 'Barlow Semi Condensed', 'sans-serif' ]
			},
			backgroundImage: {
				'bg-desktop-dt': 'url(./assets/bg-desktop-dark.jpg)',
				'bg-desktop-lt': 'url(./assets/bg-desktop-light.jpg)',
				'bg-mobile-dt': 'url(./assets/bg-mobile-dark.jpg)',
				'bg-mobile-lt': 'url(./assets/bg-mobile-light.jpg)'
			}
		}
	},
	plugins: []
};
