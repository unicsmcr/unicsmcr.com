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
				'guh-silver': '#F1',
				'guh-purple': '#609',
			},
		},
	},
	plugins: [],
};
