<script lang="ts">
import BuddyList from '$lib/aol/BuddyList.svelte'
import Button from '$lib/aol/Button.svelte'
import Channels from '$lib/aol/Channels.svelte'
import ConnectingModal from '$lib/aol/ConnectingModal.svelte'
import LoginModal from '$lib/aol/LoginModal.svelte'

type AuthState = 'logged out' | 'connecting' | 'logged in'

let state: AuthState = 'logged out'

function setState(newState: AuthState) {
	return () => (state = newState)
}
</script>

{#if state === 'logged out'}
	<LoginModal on:signOn={setState('connecting')} />
{:else if state === 'connecting'}
	<ConnectingModal on:cancel={setState('logged out')} on:connect={setState('logged in')} />
{:else if state === 'logged in'}
	<Button on:click={setState('logged out')}>Sign Out</Button>

	<Channels />

	<BuddyList />
{/if}
