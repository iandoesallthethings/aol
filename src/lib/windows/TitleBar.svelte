<script lang="ts">
import Button from './Button.svelte'
</script>

<div
	class="p-1 bg-aol-blue-dark w-full h-7 row items-center justify-between gap-4 border-b-2 border-gray-300"
>
	<div class="text-white">
		<slot />
	</div>

	<div class="min-w-fit row justify-end gap-1">
		<Button>_</Button>
		<Button>▭</Button>
		<Button>x</Button>
	</div>
</div>
