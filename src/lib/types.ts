export type State =
	| 'signed off'
	| 'Dialing...'
	| 'Dialing 770-867-5309...'
	| 'Connecting...'
	| 'Connected!'
	| 'signed on'

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top' | 'framename' | 'noopener'

export type NumberOfMilliseconds = number
export type NumberOfSeconds = number

export interface Step {
	state?: State
	duration: NumberOfSeconds
}
