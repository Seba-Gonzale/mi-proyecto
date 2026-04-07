import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { writeFileSync, mkdirSync } from 'fs';
import { fetchFromGAS } from '$lib/catalog.js';

export async function GET({ fetch }) {
    const { getCatalog } = await import('$lib/catalog.js');
    const data = await getCatalog();
    return json(data);
}

export async function POST() {
    if (!dev) return json({ error: 'Solo disponible en desarrollo' }, { status: 403 });
    const data = await fetchFromGAS();
    mkdirSync('src/lib/data', { recursive: true });
    writeFileSync('src/lib/data/catalogo.json', JSON.stringify(data, null, 2));
    return json({ ok: true });
}
