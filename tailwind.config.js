/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-bg": "#fcfcfd",
			},
			fontFamily: {
				"inter": "Inter, sans-serif",
			}
		},
	},
	plugins: [],
};
