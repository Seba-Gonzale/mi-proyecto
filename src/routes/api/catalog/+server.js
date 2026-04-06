import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const LOCAL_PATH = 'src/lib/data/catalogo.json';
const GAS_URL = 'https://script.google.com/macros/s/AKfycbx57PCvGNfhRfeQCZahLSM2XowHvhdOf5Lf8kCxO34qnYFGdYJ81GwXEGUz7jrwP_HAIw/exec';

async function fetchFromGAS() {
    const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'obtener_catalogo' })
    });
    return await response.json();
}

// GET → lee local en dev, consulta GAS en producción
export async function GET() {
    if (dev && existsSync(LOCAL_PATH)) {
        const data = JSON.parse(readFileSync(LOCAL_PATH, 'utf-8'));
        return json(data);
    }
    const data = await fetchFromGAS();
    return json(data);
}

// POST → descarga del GAS y guarda local (solo dev)
export async function POST() {
    if (!dev) return json({ error: 'Solo disponible en desarrollo' }, { status: 403 });
    const data = await fetchFromGAS();
    mkdirSync('src/lib/data', { recursive: true });
    writeFileSync(LOCAL_PATH, JSON.stringify(data, null, 2));
    return json({ ok: true });
}
