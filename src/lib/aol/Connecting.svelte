<script lang="ts">
import DebugWindow from '$lib/DebugWindow.svelte'
import Window from '$lib/windows/Window.svelte'
import { createEventDispatcher, onMount } from 'svelte'
import { writable } from 'svelte/store'
import Button from './Button.svelte'
import { sequence } from './connectingSequence'

const dispatch = createEventDispatcher()

const state = writable<number>(0)

onMount(() => runStep($state))

function runStep(index: number) {
	const step = sequence[index]

	if (step) window?.setTimeout(increment, step.duration * 1000)
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
</script>

<DebugWindow>
	<button on:click={connect}>skip</button>
</DebugWindow>

<Window classes="!bg-white w-96" contentClasses="col center gap-2 py-2">
	<img src="aol.svg" alt="America Online" class=" block h-24" />

	<div class="row center gap-1">
		<div class="frame">
			<div class="box">
				{#if $state > 0} 1 {/if}
			</div>
		</div>
		<div class="frame">
			<div class="box">
				{#if $state > 2} 2 {/if}
			</div>
		</div>
		<div class="frame">
			<div class="box">
				{#if $state > 3} 3 {/if}
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
</style>
