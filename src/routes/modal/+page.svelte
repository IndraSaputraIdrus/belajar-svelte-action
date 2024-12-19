<script lang="ts">
	import { scale } from 'svelte/transition';
	import { clickOutside } from '$lib/modal';

	let modal = $state(false);
</script>

<div class="flex h-svh w-full items-center justify-center">
	<div>
		<button
			class="rounded bg-slate-100 px-4 py-2 font-bold text-slate-950"
			onclick={() => (modal = !modal)}>Show</button
		>
	</div>
	{#if modal}
		<div
			use:clickOutside
			onoutside={() => (modal = false)}
			transition:scale={{ duration: 200 }}
			class="absolute grid h-auto max-w-sm grid-cols-1 gap-4 rounded bg-slate-300 p-3 text-slate-950"
		>
			<div>
				<h1 class="text-2xl font-bold">Modal</h1>
			</div>

			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ut molestias? Ab optio
					omnis veniam sit alias delectus voluptates quo.
				</p>
			</div>
		</div>
	{/if}
</div>
