<script lang="ts">
export let classes = ''
</script>

<button
	on:click
	class="bg-aol-blue-dark text-white shadow-sm px-4 py-1 text-xs whitespace-nowrap {classes}"
>
	<slot />
</button>
