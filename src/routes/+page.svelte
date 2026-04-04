<script>
	import TopBar from '$lib/components/TopBar.svelte';
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import { cartCount } from '$lib/stores/cart.js';

	let { data } = $props();

	const allProducts = Object.values(data.catalog.catalogo);
	let filtered = $state(allProducts);
	let cartOpen = $state(false);
	let currentQuery = $state('');
	let currentSort = $state('default');

	function applyFilters() {
		let result = allProducts.filter((p) =>
			p.titulo.toLowerCase().includes(currentQuery.toLowerCase().trim())
		);

		if (currentSort === 'offers') {
			result = result.filter((p) => p.precio_oferta > 0);
		} else if (currentSort === 'asc') {
			result = result.sort((a, b) => (a.precio_oferta || a.precio) - (b.precio_oferta || b.precio));
		} else if (currentSort === 'desc') {
			result = result.sort((a, b) => (b.precio_oferta || b.precio) - (a.precio_oferta || a.precio));
		} else if (currentSort === 'az') {
			result = result.sort((a, b) => a.titulo.localeCompare(b.titulo));
		} else if (currentSort === 'za') {
			result = result.sort((a, b) => b.titulo.localeCompare(a.titulo));
		}

		filtered = result;
	}

	function handleSearch(query) {
		currentQuery = query;
		applyFilters();
	}

	function handleSort(sort) {
		currentSort = sort;
		applyFilters();
	}
</script>

<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21]">
	<TopBar cartCount={$cartCount} onCartClick={() => (cartOpen = true)} />
	<CatalogHeader
		storeName="Rico y Saludable"
		description="Podes ver los productos y hacer tu pedido en nuestra página:"
		url="https://ricoysaludable.jarbas.net..."
		coverImage="https://placehold.co/400x128"
	/>
	<SearchBar onSearch={handleSearch} onSort={handleSort} />

	<div class="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
		{#each filtered as product}
			<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
		{:else}
			<p class="text-[#8696a0] text-center py-8 col-span-3">No se encontraron productos.</p>
		{/each}
	</div>
</div>

{#if cartOpen}
	<Cart onClose={() => (cartOpen = false)} />
{/if}
