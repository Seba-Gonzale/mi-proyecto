export async function load({ fetch }) {
    const response = await fetch('/api/catalog');
  const { catalogo } = await response.json();
    return { catalogo };
}
