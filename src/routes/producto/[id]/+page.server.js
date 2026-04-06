export async function load({ fetch, params }) {
    const response = await fetch('/api/catalog');
    const catalog = await response.json();
    const product = Object.values(catalog.catalogo).find((p) => p.id === params.id);
    return { product };
}
