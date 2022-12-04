<script lang="ts">
import '../app.postcss'
import '98.css'
import debug from '$lib/debug'
import TaskBar from '$lib/windows/TaskBar.svelte'
import Window from '$lib/windows/Window.svelte'
import { browser } from '$app/environment'

function toggleDebug(event: CustomEvent) {
	if (event.detail === 'Help') debug.toggle()
}

function selectTask(event: CustomEvent) {
	const windowId = event.detail
	if (windowId) document.getElementById(windowId)?.click()
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

	<TaskBar on:selectTask={selectTask} />
</div>
