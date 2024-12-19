<script lang="ts">
	import { animate, stagger } from 'motion';

	type Controls = ReturnType<typeof animate>;

	type ValueAnimation = Parameters<typeof animate>[2];

	type Options = {
		options?: ValueAnimation;
		action?: ({ animation }: { animation: Controls }) => void;
	};

	function animation(element: HTMLElement, { options, action }: Options) {
		const letters = element.innerText.trim().split('');

		element.innerHTML = '';

		for (const letter of letters) {
			element.innerHTML += `<span style='display: inline-block'>${letter}</span>`;
		}

		const task = animate(
			[...element.children],
			{
				y: [0, 30, -60, 0],
				rotate: 360,
			},
			{
				duration: 1,
				delay: stagger(0.1),
				...options
			}
		);

		action?.({ animation: task });

		task.then(() => {
			element.dispatchEvent(new CustomEvent('finished'));
		});
	}

	let controls: Controls | undefined = $state();
	let time = $state(0);

  function test() {
    controls.time = 2
  }
</script>

<div class="grid h-svh w-full place-content-center gap-5">
	<h1
		use:animation={{
			options: {},
			action({ animation }) {
				// animation.stop();
				controls = animation;
			}
		}}
		class="text-4xl font-bold"
	>
		Svelte
	</h1>

	{#if controls}
		{controls.time}
    <button onclick={test}>test</button>
		<input bind:value={time} type="range" min={0} max={controls.duration + 0.6} step={0.01} />
	{/if}
</div>
