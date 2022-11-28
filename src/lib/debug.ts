import localStorageWritable from './localStorageWritable'

const store = localStorageWritable('debug-aol', false)

function toggle() {
	store.update(($value) => !$value)
}

export default {
	...store,
	toggle,
}
