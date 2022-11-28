<script lang="ts">
import debug from './debug'
import Window from './windows/Window.svelte'
</script>

{#if $debug}
	<Window
		title="Debug"
		on:close={debug.toggle}
		on:minimize={debug.toggle}
		classes="absolute bottom-2 right-2 z-10"
		contentClasses="p-2 flex gap-2 items-center justify-center"
	>
		<slot />
	</Window>
{/if}
