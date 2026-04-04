export async function load({ params }) {
	const response = await fetch(
		'https://script.google.com/macros/s/AKfycbx57PCvGNfhRfeQCZahLSM2XowHvhdOf5Lf8kCxO34qnYFGdYJ81GwXEGUz7jrwP_HAIw/exec',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ action: 'obtener_catalogo' })
		}
	);

	const data = await response.json();
	const products = Object.values(data.catalogo);
	const product = products.find((p) => p.id === params.id);

	return { product };
}
