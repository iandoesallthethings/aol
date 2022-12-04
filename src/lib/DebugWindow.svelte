<script lang="ts">
import debug from './debug'
import Window from './windows/Window.svelte'
export let classes = ''
export let contentClasses = ''
</script>

{#if $debug}
	<Window
		title="Debug"
		on:close={debug.toggle}
		on:minimize={debug.toggle}
		classes="absolute bottom-2 right-2 z-10 {classes}"
		contentClasses="p-2 flex flex-col gap-2 items-center justify-center {contentClasses}"
	>
		<slot />
	</Window>
{/if}
