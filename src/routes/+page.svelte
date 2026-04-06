<script>
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import SortBar from '$lib/components/SortBar.svelte';
	import searchQuery from '$lib/stores/ui.js';

	let { data } = $props();
	const allProducts = $derived(Object.values(data.catalog.catalogo));
	/** @type {any[]} */
	let filtered = $state([]);
	let currentSort = $state('default');
	let searchBarEl = $state(/** @type {HTMLDivElement | null} */ (null));

	$effect(() => {
		applyFilters($searchQuery, currentSort);
	});
	/** @param {string} str */
	function normalize(str) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
	}
	/**
	 * @param {string} query
	 * @param {string} sort
	 */
	function applyFilters(query, sort) {
		let result = allProducts.filter((p) => normalize(p.titulo).includes(normalize(query)));
		if (sort === 'offers') {
			result = result.filter((p) => p.precio_oferta > 0);
		} else if (sort === 'asc') {
			result = result.sort((a, b) => (a.precio_oferta || a.precio) - (b.precio_oferta || b.precio));
		} else if (sort === 'desc') {
			result = result.sort((a, b) => (b.precio_oferta || b.precio) - (a.precio_oferta || a.precio));
		} else if (sort === 'az') {
			result = result.sort((a, b) => a.titulo.localeCompare(b.titulo));
		} else if (sort === 'za') {
			result = result.sort((a, b) => b.titulo.localeCompare(a.titulo));
		}
		filtered = result;
	}

	/** @param {string} sort */
	function handleSort(sort) {
		currentSort = sort;
	}
</script>

<CatalogHeader
	storeName="Rico y Saludable"
	description="Podes ver los productos y hacer tu pedido en nuestra página:"
	url="https://ricoysaludable.jarbas.net..."
	coverImage="/portada_1200x400.webp"
/>

<div class="sticky top-0 z-30 flex items-center gap-2 bg-[#111b21] px-2 py-2" bind:this={searchBarEl}>
	<div class="flex flex-1 items-center gap-2 rounded-lg bg-[#2a3942] px-3 py-2">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-[#8696a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
		</svg>
		<input
			type="text"
			placeholder="Buscar productos..."
			oninput={(e) => searchQuery.set(normalize(e.currentTarget.value))}
			onfocus={() => searchBarEl?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
			class="flex-1 bg-transparent text-base text-white placeholder-[#8696a0] outline-none"
		/>
	</div>
	<SortBar onSort={handleSort} />
</div>
<div class="grid grid-cols-1 gap-2 p-2 pb-20 sm:grid-cols-2 lg:grid-cols-3">
	{#each filtered as product (product.id)}
		<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
	{:else}
		<p class="col-span-3 py-8 text-center text-[#8696a0]">No se encontraron productos.</p>
	{/each}
	<div class="py-3 text-center text-2xl">🏵️</div>
</div>
