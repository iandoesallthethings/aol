<script lang="ts">
// import BuddyList from '$lib/aol/BuddyList.svelte'
import Channels from '$lib/aol/Channels.svelte'
import Connecting from '$lib/aol/Connecting.svelte'
import SignOn from '$lib/aol/SignOn.svelte'
import DebugWindow from '$lib/DebugWindow.svelte'
import { writable } from 'svelte/store'

type AuthState = 'signed off' | 'connecting' | 'signed on'

let state = writable<AuthState>('signed off')

function setState(newState: AuthState) {
	return () => ($state = newState)
}
</script>

{#if $state === 'signed off'}
	<SignOn on:signOn={setState('connecting')} />

	<DebugWindow>
		<button on:click={setState('signed on')}>Sign in</button>
	</DebugWindow>
{:else if $state === 'connecting'}
	<Connecting on:cancel={setState('signed off')} on:connect={setState('signed on')} />
{:else if $state === 'signed on'}
	<DebugWindow>
		<button on:click={setState('signed off')}>Sign Out</button>
	</DebugWindow>

	<Channels />
	<!-- <BuddyList /> -->
{/if}
