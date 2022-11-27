<script lang="ts">
import MenuBar from './MenuBar.svelte'
import TitleBar from './TitleBar.svelte'

export let title: string | undefined = undefined
export let classes = ''
export let contentClasses = ''
export let menuItems: string[] | 'default' | undefined = undefined
</script>

<div class="border-2 border-gray-300 col {classes}">
	{#if title}
		<TitleBar>{title}</TitleBar>
	{/if}

	{#if menuItems}
		<MenuBar items={menuItems} />
	{/if}

	<div class="w-full flex-grow  {contentClasses}">
		<slot />
	</div>
</div>
