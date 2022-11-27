<script lang="ts">
import BuddyList from '$lib/aol/BuddyList.svelte'
import Button from '$lib/aol/Button.svelte'
import Channels from '$lib/aol/Channels.svelte'
import Connecting from '$lib/aol/Connecting.svelte'
import Login from '$lib/aol/Login.svelte'

type AuthState = 'logged out' | 'connecting' | 'logged in'

let state: AuthState = 'logged out'

function setState(newState: AuthState) {
	return () => (state = newState)
}
</script>

{#if state === 'logged out'}
	<Login on:signOn={setState('connecting')} />
{:else if state === 'connecting'}
	<Connecting on:cancel={setState('logged out')} on:connect={setState('logged in')} />
{:else if state === 'logged in'}
	<Button classes="fixed bottom-2 left-2" on:click={setState('logged out')}>Sign Out</Button>

	<Channels />

	<BuddyList />
{/if}
