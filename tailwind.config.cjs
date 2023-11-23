/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				retro: {
					...require("daisyui/src/theming/themes")["retro"],
					primary: "#fb923c",
					secondary: "#4ade80"
				}
			}
		],

	},
};

module.exports = config;
