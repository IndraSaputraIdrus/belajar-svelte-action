<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	type Props = {
		form: ActionData;
	};

	let { form }: Props = $props();
</script>

<div class="grid min-h-svh place-content-center gap-4">
	{#if form}
		{JSON.stringify(form)}
	{/if}
	<form
		method="post"
		use:enhance={({ formElement, formData }) => {
			console.log({ formElement, formData });
		}}
		class="grid w-72 gap-4"
	>
		<input
			type="text"
			class="rounded bg-slate-100 p-2 text-slate-950 placeholder:text-slate-500"
			placeholder="Enter your name"
			name="name"
		/>
		<button type="submit" class="rounded bg-slate-100 px-4 py-2 font-semibold text-slate-950"
			>Button</button
		>
	</form>
</div>
