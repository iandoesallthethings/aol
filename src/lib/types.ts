export type State =
	| ' '
	| 'signed off'
	| 'Dialing...'
	| 'Dialing 770-867-5309...'
	| 'Connecting...'
	| 'Connected!'
	| 'signed on'

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top' | 'framename' | 'noopener'

export type NumberOfMilliseconds = number
export type NumberOfSeconds = number

export type AudioFilePath = string

interface StepBase {
	state: State
}

export interface StepWithDuration extends StepBase {
	audio?: never
	duration: NumberOfSeconds
}

export interface StepWithAudio extends StepBase {
	audio: AudioFilePath
	duration?: never
}

export type Step = StepWithAudio | StepWithDuration
