/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-bg": "#fcfcfd",
				"sub-text": "#b7bac7",
				"selection-active": "#f4f5f6",
				"button-primary": "#2492B7",
				"text-primary": "#1D5D9B",
				"search-button": "#31A8D1",
				datepicker: {
					primary: "#33363e",
					selected: "#23262f",
					connected: "#eaeaeb",
				},
			},
			fontFamily: {
				inter: "Inter, sans-serif",
				nunito: "Nunito sans, sans-serif",
				"dm-sans": "DM-Sans, sans-serif",
				"vietnam-pro": "Be VietNam Pro, sans-serif",
				roboto: "Roboto, sans-serif",
				poppins: "Poppins, sans-serif",
			},
		},
	},
	plugins: [],
};
