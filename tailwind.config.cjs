const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'aol-blue': {
					light: 'rgb(205, 206, 253)',
					dark: 'rgb(0, 49, 98)',
				},
				'aol-gray': 'rgb(175, 177, 176)',
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
		},
	},

	plugins: [],
}

module.exports = config
