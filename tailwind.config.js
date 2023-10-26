/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "main-bg": "#fcfcfd",
            "sub-text": "#b7bac7",
            "selection-active": "#f4f5f6",
            "button-primary": "#0081C9",
            "text-primary": "#1D5D9B",
         },
         fontFamily: {
            inter: "Inter, sans-serif",
            nunito: "Nunito sans, sans-serif",
            "dm-sans": "DM-Sans, sans-serif",
            "vietnam-pro": "Be VietNam Pro, sans-serif",
            roboto: "Roboto, sans-serif",
         },
      },
   },
   plugins: [],
};
