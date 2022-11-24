<script lang="ts">
export let items: string[] | 'default' = []

if (items === 'default') items = ['File', 'Edit', 'Window', 'Sign Off', 'Help']
</script>

<div class=" px-2 bg-gray-300 w-full h-7 row items-center gap-4">
	{#each items as item}
		<button class="gap-0">
			<span class="underline p-0">{item[0]}</span>
			<span class="p-0">{item.slice(1)}</span>
		</button>
	{/each}
</div>
