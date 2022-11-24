<script lang="ts">
import Window from '$lib/windows/Window.svelte'
import AolLogo from '$lib/aol/Logo.svelte'
import { createEventDispatcher } from 'svelte'
import Button from './Button.svelte'
const dispatch = createEventDispatcher()

function signOn() {
	dispatch('signOn')
}
</script>

<Window title="Sign On" classes="bg-white aspect-4/3">
	<div class="row h-full w-30">
		<div class="obi bg-aol-blue-dark text-white col h-full justify-between items-center p-2">
			<AolLogo classes="!fill-white w-16" />

			<div>
				<!-- person icon -->
				<p>version 4.0</p>
			</div>
		</div>

		<div class="col p-2 gap-4">
			<label class="col">
				Select Screen Name:
				<select>
					<option>Guest</option>
				</select>
			</label>

			<label class="col">
				Select Location:
				<select>
					<option>ISP/LAN Connection</option>
				</select>
			</label>

			<div class="row center gap-4">
				<Button>SETUP</Button>
				<Button>ACCESS NUMBERS</Button>
				<Button>HELP</Button>
				<Button on:click={signOn}>SIGN ON</Button>
			</div>
		</div>
	</div>
</Window>

<style>
button {
	@apply bg-aol-blue-dark px-2 py-1 shadow-lg text-white text-xs whitespace-nowrap;
}

select {
	@apply border;
}
</style>
