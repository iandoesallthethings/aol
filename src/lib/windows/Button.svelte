<script lang="ts">
import type { AnchorTarget } from '$types'
export let classes = ''
import MaybeA from '$lib/MaybeA.svelte'

export let href: string | undefined = undefined
export let target: AnchorTarget | undefined = undefined
</script>

<MaybeA {href} {target}>
	<button
		class="
			row center 
			whitespace-nowrap
			{classes}
		"
	>
		<slot />
	</button>
</MaybeA>
