import { getCatalog } from '$lib/catalog.js';

export async function load({ params }) {
    const { catalogo } = await getCatalog();
    const product = Object.values(catalogo).find((p) => p.id === params.id);
    return { product };
}
