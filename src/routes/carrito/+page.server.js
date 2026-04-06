export async function load({ fetch }) {
    const response = await fetch('/api/catalog');
    const catalog = await response.json();
    return { catalog };
}
