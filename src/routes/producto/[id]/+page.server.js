import { fetchCatalog } from '$lib/stores/catalog.js';

export async function load({ params }) {
	const data = await fetchCatalog();
	const products = Object.values(data.catalogo);
	const product = products.find((p) => p.id === params.id);

	return { product };
}
