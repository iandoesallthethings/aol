<script lang="ts">
import createAudio from '$lib/audio'
import Window from '$lib/windows/Window.svelte'
import { onMount, onDestroy } from 'svelte'
import Button from './Button.svelte'
import Logo from './Logo.svelte'
const audio = createAudio()

function maybeHaveMail() {
	if (Math.random() > 0.5) audio.play('aol/sounds/youvegotmail.wav')
}

onMount(() => audio.play('aol/sounds/welcome.wav', maybeHaveMail))

onDestroy(() => audio.play('aol/sounds/goodbye.wav', audio.stop))

const channels = [
	'returntowelcome',
	'search',
	'aoltoday',
	'news',
	'sports',
	'influence',
	'travel',
	'international',
	'personalfinance',
	'workplace',
	'computing',
	'researchandlearn',
	'entertainment',
	'games',
	'interests',
	'lifestyles',
	'shopping',
	'health',
	'families',
	'kidsonly',
	'local',
]
console.debug(channels.map((c) => c.toLowerCase()))
</script>

<Window title="Channels" classes="!bg-white">
	<div class="button-grid">
		<Logo classes="row-span-3 p-2" />

		{#each channels as channel}
			<Button
				backgroundImage="aol/channels/{channel}.png"
				href=""
				target="_blank"
				classes="w-full text-transparent"
			>
				{channel}
			</Button>
		{/each}
	</div>
</Window>

<style>
.button-grid {
	@apply grid grid-cols-3 grid-rows-8 grid-flow-col-dense gap-2 p-4 aspect-4/3;
}
</style>
