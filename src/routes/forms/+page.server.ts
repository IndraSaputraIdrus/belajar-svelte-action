import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const value = data.get('name');

		if (!value) return fail(500, { status: 500, message: 'Missing name' });

		return {
			status: 200,
			value
		};
	}
};
