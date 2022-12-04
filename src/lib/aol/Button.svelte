<script lang="ts">
import type { AnchorTarget } from '$lib/types'
import MaybeA from '$lib/MaybeA.svelte'

export let classes = ''
export let href: string | undefined = undefined
export let target: AnchorTarget | undefined = undefined
export let disabled = false
export let backgroundImage = ''
</script>

<MaybeA {href} {target}>
	<button
		on:click
		class="
			bg-aol-blue-dark text-white 
			shadow-sm 
			px-4 py-1 
			text-xs whitespace-nowrap 
			{classes}
			bg-cover
		"
		style="background-image: url({backgroundImage.toLowerCase()});"
		{disabled}
	>
		<slot />
	</button>
</MaybeA>
