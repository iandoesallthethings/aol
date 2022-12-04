import { browser } from '$app/environment'
import { writable, get } from 'svelte/store'
import type { AudioFilePath } from './types'

export default function createAudio() {
	if (!browser) throw new Error('Make sure this only runs in the browser.')

	const audio = writable<HTMLAudioElement>(new Audio())

	function play(path: AudioFilePath, callback: () => void | undefined) {
		const $audio = get(audio)

		$audio.src = path
		$audio.preload = 'auto'
		$audio.onended = callback

		$audio.play()
	}

	function setRate(rate: number) {
		const $audio = get(audio)
		$audio.playbackRate = rate
	}

	function stop() {
		const $audio = get(audio)
		$audio.pause()
	}

	return {
		subscribe: audio.subscribe,
		set: audio.set,
		update: audio.update,
		play,
		stop,
		setRate,
	}
}
