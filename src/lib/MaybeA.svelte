<script lang="ts">
import type { AnchorTarget } from '$types'

export let href: string | undefined
export let target: AnchorTarget = '_self'
export let classes = ''
</script>

{#if href}
	<a {href} {target} class={classes}>
		<slot />
	</a>
{:else}
	<span class="classes">
		<slot />
	</span>
{/if}
