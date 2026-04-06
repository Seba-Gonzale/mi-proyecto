import { writable } from 'svelte/store';

/** * @type {import('svelte/store').Writable<[string, boolean]>}
 * [0]: query (texto de búsqueda), [1]: isFocused (estado del foco)
 */
export const searchQuery = writable(["", false]);
export default writable("");
