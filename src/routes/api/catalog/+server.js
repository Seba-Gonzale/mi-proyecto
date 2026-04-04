import { json } from '@sveltejs/kit';

export async function POST() {
	const response = await fetch(
		'https://script.google.com/macros/s/AKfycbx57PCvGNfhRfeQCZahLSM2XowHvhdOf5Lf8kCxO34qnYFGdYJ81GwXEGUz7jrwP_HAIw/exec',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ action: 'obtener_catalogo' })
		}
	);

	const data = await response.json();
	return json(data);
}
