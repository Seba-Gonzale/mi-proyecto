<script>
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import SortBar from '$lib/components/SortBar.svelte';
	import { searchOpen, searchQuery } from '$lib/stores/ui.js';

	let { data } = $props();

	const allProducts = $derived(Object.values(data.catalog.catalogo));
	/** @type {any[]} */
	let filtered = $state([]);
	let currentSort = $state('default');

	$effect(() => {
		applyFilters($searchQuery, currentSort);
	});

	/**
	 * @param {string} query
	 * @param {string} sort
	 */
	function applyFilters(query, sort) {
		let result = allProducts.filter((p) =>
			p.titulo.toLowerCase().includes(query.toLowerCase().trim())
		);
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

{#if !$searchOpen}
	<CatalogHeader
		storeName="Rico y Saludable"
		description="Podes ver los productos y hacer tu pedido en nuestra página:"
		url="https://ricoysaludable.jarbas.net..."
		coverImage="/portada_1200x400.webp"
	/>
{/if}

<SortBar onSort={handleSort} />

<div class="grid grid-cols-1 gap-2 p-2 pb-20 sm:grid-cols-2 lg:grid-cols-3">
	{#each filtered as product}
		<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
	{:else}
		<p class="text-[#8696a0] text-center py-8 col-span-3">No se encontraron productos.</p>
	{/each}
</div>
