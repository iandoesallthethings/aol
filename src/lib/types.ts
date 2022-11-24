export type State =
	| 'logged out'
	| 'Dialing...'
	| 'Dialing 770-867-5309...'
	| 'Connecting...'
	| 'Connected!'
	| 'logged in'

export type NumberOfMilliseconds = number
export type NumberOfSeconds = number

export interface Step {
	state?: State
	duration: NumberOfSeconds
}
