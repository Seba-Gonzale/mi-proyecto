import { dev } from '$app/environment';
import { readFileSync, existsSync } from 'fs';

/** @type {any} */
let cache = null;
let cacheTime = 0;
const CACHE_TTL = 1000 * 60 * 5;

const LOCAL_PATH = 'src/lib/data/catalogo.json';
export const GAS_URL = 'https://script.google.com/macros/s/AKfycbx57PCvGNfhRfeQCZahLSM2XowHvhdOf5Lf8kCxO34qnYFGdYJ81GwXEGUz7jrwP_HAIw/exec';

export async function fetchFromGAS() {
    const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'obtener_catalogo' })
    });
    return await response.json();
}

export async function getCatalog() {
    if (dev && existsSync(LOCAL_PATH)) {
        return JSON.parse(readFileSync(LOCAL_PATH, 'utf-8'));
    }
    const now = Date.now();
    if (cache && now - cacheTime < CACHE_TTL) return cache;
    const data = await fetchFromGAS();
    cache = data;
    cacheTime = now;
    return data;
}
