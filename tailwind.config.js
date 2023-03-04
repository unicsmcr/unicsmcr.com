const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'guh-gold': '#FC3',
				'guh-silver': '#f1f1f1',
				'guh-purple': '#609',
				'guh-black': '#1A1A1A',
				'guh-grey': '#bbb',
				'unics-green': '#DEFF80',
				'guh-green': '#DEFF80',
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			backgroundImage: {
				'hero-img': "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('/cover.jpg')",
			},
		},
	},
	plugins: [],
};
