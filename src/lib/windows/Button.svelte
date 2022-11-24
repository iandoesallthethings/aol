<script lang="ts">
	export let classes = ''
</script>

<button
	class="
		w-5 h-5  
		row center 
		bg-gray-400 p-0 
		{classes}
		"
>
	<slot />
</button>
