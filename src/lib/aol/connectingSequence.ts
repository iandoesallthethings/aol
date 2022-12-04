import type { Step } from '$types'
/*
	(just the a in box 3)
		'Step 1: Initializing modem...'
	(start dialtone)
		'Modem initialization OK...' 
	(add person in box 1)
		'Step 2: Dialing 770-867-5309'
	(Dialing sounds)
	
	(running man in box 2)
		'Step 3: Connected at 52000 bps...'
		'Step 4: Requesting network attention...'
		'Step 5: Talking to network...'
		'Step 6: Connecting to America Online...'
	(people over A in box 3)
		'Step 7: Checking password...'
	(Welcome)
*/

export const sequence: Step[] = [
	{
		state: ' ',
		duration: 1,
	},
	{
		state: 'Dialing...',
		duration: 2,
	},
	{
		state: 'Dialing 770-867-5309...',
		audio: 'aol/dialup.mp3',
	},
	{
		state: 'Connected at 52000 bps...',
		duration: 1,
	},
	{
		state: 'Requesting network attention...',
		duration: 1,
	},
	{
		state: 'Talking to network...',
		duration: 1,
	},
	{
		state: 'Connecting to America Online...',
		duration: 3,
	},
	{
		state: 'Checking password...',
		duration: 2,
	},
]
