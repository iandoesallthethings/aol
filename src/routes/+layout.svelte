<script>
import Window from '$lib/windows/Window.svelte'
import '../app.postcss'
</script>

<Window
	title="America Online"
	menuItems="default"
	classes="bg-gray-400 w-screen h-screen"
	contentClasses="center"
>
	<slot />
</Window>
