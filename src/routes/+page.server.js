import { fetchCatalog } from '$lib/stores/catalog.js';

export async function load() {
	const data = await fetchCatalog();
	return { catalog: data };
}
