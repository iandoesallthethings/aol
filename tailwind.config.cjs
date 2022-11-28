const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				aol: {
					blue: {
						light: 'rgb(205, 206, 253)',
						dark: 'rgb(0, 49, 98)',
					},
					gray: 'rgb(175, 177, 176)',
				},
				windows: {
					gray: {
						dark: 'rgb(128, 128, 128)',
						light: 'rgb(192, 192, 192)',
					},
				},
			},
			gridTemplateRows: {
				7: 'repeat(7, minmax(0, 1fr))',
				8: 'repeat(8, minmax(0, 1fr))',
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
		},
	},

	plugins: [],
}

module.exports = config
