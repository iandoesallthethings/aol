<script lang="ts">
import '../app.postcss'
import '98.css'
import debug from '$lib/debug'
import TaskBar from '$lib/windows/TaskBar.svelte'
import Window from '$lib/windows/Window.svelte'

function toggleDebug(event: CustomEvent) {
	if (event.detail === 'Help') debug.toggle()
}
</script>

<div class="pc w-screen h-screen col">
	<Window
		title="America Online"
		menuItems="default"
		classes="relative w-screen h-screen"
		contentClasses="center bg-windows-gray-dark"
		on:menuclick={toggleDebug}
	>
		<slot />
	</Window>

	<TaskBar />
</div>
