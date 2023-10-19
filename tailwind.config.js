/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-bg": "#fcfcfd",
				"sub-text": "#b7bac7",
			},
			fontFamily: {
				inter: "Inter, sans-serif",
				lato: "Lato, sans-serif",
				outfit: "Outfit, sans-serif",
				"dm-sans": "DM-Sans, sans-serif",
				poppins: "Poppins, sans-serif",
				"vietnam-pro": "Be VietNam Pro, sans-serif",
			},
		},
	},
	plugins: [],
};
