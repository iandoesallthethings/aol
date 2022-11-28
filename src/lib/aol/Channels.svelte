<script lang="ts">
import Window from '$lib/windows/Window.svelte'
import Button from './Button.svelte'
import Logo from './Logo.svelte'

const channels = [
	'Return to Welcome',
	'Search',
	'AOL Today',
	'News',
	'Sports',
	'Influence',
	'Travel',
	'international',
	'Personal Finance',
	'WorkPlace',
	'Computing',
	'Research @ Learn', // sic
	'entertainment',
	'Games',
	'Interests',
	'Lifestyles',
	'Shopping',
	'Health',
	'families',
	'KiDS ONLY',
	'Local',
]
</script>

<Window title="Channels" classes="!bg-white">
	<div class="button-grid">
		<Logo classes="row-span-3 p-2" />

		{#each channels as channel}
			<Button href="http://google.com" target="_blank" classes="w-full">
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
