<script lang="ts">
import { createEventDispatcher } from 'svelte'

export let items: string[] | 'default' = []

if (items === 'default') items = ['File', 'Edit', 'Window', 'Sign Off', 'Help']
const dispatch = createEventDispatcher()

function handleClick(item: string) {
	return () => dispatch('menuclick', item)
}
</script>

<div class="menu-bar window row px-1 gap-1">
	{#each items as item}
		<button class="menu shadow-none" on:click={handleClick(item)}>
			<span class="underline">{item[0]}</span><span>{item.slice(1)}</span>
		</button>
	{/each}
</div>

<style>
button.menu {
	@apply !px-2 min-w-min outline-none;
}
</style>
