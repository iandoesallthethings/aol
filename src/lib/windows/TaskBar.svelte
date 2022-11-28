<script lang="ts">
import createClock from '$lib/clock'

const clock = createClock()
</script>

<div class="window row gap-1">
	<button
		class="font-extrabold max-w-min min-w-min row whitespace-nowrap items-center justify-center gap-1"
	>
		<img src="start.png" width="16" alt="Start" />
		Start
	</button>

	<div class="row justify-start grow gap-2">
		<button class="active">America Online</button>
	</div>

	<div class="status-bar">
		<div class="status-bar-field !px-4 flex items-center">
			{$clock}
		</div>
	</div>
</div>
