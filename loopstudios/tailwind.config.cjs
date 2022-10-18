/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,jsx}' ],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
      fontFamily : {
        sans: [ 'Josefine Sans', 'sans-serif'],
        alata : ['Alata']
	  },
	  letterSpacing : {
		  widest : '.3em'
	  }
    }
	},
	plugins: []
};
