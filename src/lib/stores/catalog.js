let cache = null;

export async function fetchCatalog() {
	if (cache) return cache;

	const response = await fetch(
		'https://script.google.com/macros/s/AKfycbx57PCvGNfhRfeQCZahLSM2XowHvhdOf5Lf8kCxO34qnYFGdYJ81GwXEGUz7jrwP_HAIw/exec',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ action: 'obtener_catalogo' })
		}
	);

	cache = await response.json();
	return cache;
}
