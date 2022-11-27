import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export default function localStore<T>(key: string, initialValue: T) {
	const store = writable(initialValue)

	if (!browser) return store

	const storedValue = localStorage.getItem(key)
	if (storedValue) store.set(JSON.parse(storedValue))

	store.subscribe((value) => (localStorage[key] = JSON.stringify(value)))

	return store
}
