import { getCatalog } from '$lib/catalog.js';

export async function load() {
    const { catalogo } = await getCatalog();
    return { catalogo };
}
