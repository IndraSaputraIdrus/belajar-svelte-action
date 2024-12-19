<script lang="ts">
	import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';

	let content = $state('My tooltip');

  type Options = Partial<Props>

	function tooltip(element: HTMLElement, options: Options) {
		const instance = tippy(element, options);
		return {
			update(options: Options) {
				instance.setProps(options);
			},
			destroy() {
				instance.destroy();
			}
		};
	}
</script>

<div class="mx-auto grid h-svh max-w-lg place-content-center gap-5 px-5">
	<h1 class="text-center text-3xl font-semibold">Hover on button</h1>
	<div class="flex items-center gap-3">
		<input
			type="text"
			bind:value={content}
			placeholder="Change tooltip content"
			class="rounded border-2 border-slate-950 px-3 py-2"
		/>
		<button use:tooltip={{ content }} class="block rounded bg-slate-950 px-3 py-2 text-slate-100"
			>Tippy.js</button
		>
	</div>
</div>
