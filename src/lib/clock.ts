import { browser } from '$app/environment'
import { readable } from 'svelte/store'
import type { NumberOfMilliseconds } from './types'

interface ClockOptions {
	intervalTime?: NumberOfMilliseconds
	locale?: 'en-US'
	format?: Intl.DateTimeFormatOptions
}

const defaultOptions: ClockOptions = {
	intervalTime: 1000,
	locale: 'en-US',
	format: {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	},
}

export default function (options: ClockOptions = defaultOptions) {
	const { intervalTime, locale, format } = { ...defaultOptions, ...options }

	const getDateString = () => new Date().toLocaleTimeString(locale, format)

	const initial = getDateString()

	return readable(initial, (set) => {
		const update = () => set(getDateString())

		if (browser) {
			const interval = window.setInterval(update, intervalTime)
			return () => window.clearInterval(interval)
		}
	})
}
