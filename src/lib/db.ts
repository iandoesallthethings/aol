import { writable } from 'svelte/store'
// import localStorageWritable from './localStorageWritable'

const defaultDb = {
	users: [
		{ username: 'HymnStar', firstName: 'rusty', lastName: 'edwards' },
		{ username: 'IceCat2530', firstName: 'ian', lastName: 'edwards' },
		{ username: 'Guest', firstName: 'Guest', lastName: '' },
	],
}

// export default localStorageWritable('aol-db', defaultDb)
export default writable(defaultDb)
