import type { ActionReturn } from 'svelte/action';

interface Attributes {
	onoutside?: (event: CustomEvent) => void;
}

export const clickOutside = (element: HTMLElement): ActionReturn<undefined, Attributes> => {
	function handleClick(e: MouseEvent) {
		const targetEl = e.target as HTMLElement;
		if (element && !element.contains(targetEl)) {
			const event = new CustomEvent('outside');
			element.dispatchEvent(event);
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
