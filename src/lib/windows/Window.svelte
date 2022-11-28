<script lang="ts">
import MenuBar from './MenuBar.svelte'

export let title: string | undefined = undefined
export let classes = ''
export let contentClasses = ''
export let menuItems: string[] | 'default' | undefined = undefined
export let inactive = false
</script>

<div id={title} class="window col min-w-44 max-w-full {classes}">
	{#if title}
		<div class="title-bar" class:inactive>
			<div class="title-bar-text">
				{title}
			</div>

			<div class="title-bar-controls">
				<button aria-label="Minimize" />
				<button aria-label="Maximize" />
				<button aria-label="Close" />
			</div>
		</div>
	{/if}

	{#if menuItems}
		<MenuBar on:menuclick items={menuItems} />
	{/if}

	<div class="window-body !m-0 h-full w-full {contentClasses}">
		<slot />
	</div>
</div>
