<script lang="ts">
import { browser } from '$app/environment'
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import { writable } from 'svelte/store'
import createAudio from '$lib/audio'
import DebugWindow from '$lib/DebugWindow.svelte'
import Window from '$lib/windows/Window.svelte'
import Button from './Button.svelte'
import { sequence } from './connectingSequence'

const dispatch = createEventDispatcher()
const audio = createAudio()

const state = writable<number>(0)

onMount(() => runStep($state))

function runStep(index: number) {
	const step = sequence[index]

	if (!(browser && step)) return

	if (step.audio) return audio.play(step.audio, increment)
	else if (step.duration) window.setTimeout(increment, step.duration * 1000)
}

function increment() {
	$state = $state + 1

	if ($state > sequence.length - 1) connect()

	runStep($state)
}

function connect() {
	dispatch('connect')
}

function cancel() {
	dispatch('cancel')
}

onDestroy(audio.stop)
</script>

<DebugWindow>
	<button on:click={connect}>skip</button>

	<label>
		<div>Progress</div>
		<input type="range" bind:value={$audio.currentTime} min="0" max={$audio.duration} step="0.01" />
	</label>
	<label>
		<div>Volume</div>
		<input type="range" bind:value={$audio.volume} min="0" max="1" step="0.1" />
	</label>

	<label>
		<div>Speed</div>
		<input type="range" bind:value={$audio.playbackRate} min="0.1" max="10" step="0.1" />
	</label>
</DebugWindow>

<Window classes="!bg-white w-96" contentClasses="col center gap-2 py-2">
	<img src="aol/aol.svg" alt="America Online" class=" block h-24" />

	<div class="row center gap-1">
		<div class="frame">
			<div class="box">
				{#if $state > 0}
					<img src="aol/dialup1.png" alt="Dialing..." />
				{/if}
			</div>
		</div>
		<div class="frame">
			<div class="box">
				{#if $state > 2}
					<img src="aol/dialup2.png" alt="Connecting..." />
				{/if}
			</div>
		</div>
		<div class="frame">
			<div class="box">
				{#if $state > 6}
					<img src="aol/dialup3.png" alt="Connected!" />
				{/if}
			</div>
		</div>
	</div>

	<div class="center col gap-2 w-full">
		<div>{sequence[$state].state || ''} &nbsp;</div>

		<hr class="border w-3/4 border-black" />

		<Button on:click={cancel}>Cancel</Button>
	</div>
</Window>

<style>
.box {
	@apply w-24 aspect-4/3 flex items-center justify-center;
	@apply border-2 bg-aol-blue-light border-aol-blue-dark;
}

.frame {
	@apply p-1 border-r border-b border-gray-700;
}

label {
	@apply flex flex-row items-center justify-between;
}
</style>
