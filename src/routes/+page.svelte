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

	function handleSearch(query) {
		const q = query.toLowerCase().trim();
		filtered = q ? allProducts.filter((p) => p.titulo.toLowerCase().includes(q)) : allProducts;
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
	<SearchBar onSearch={handleSearch} />

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
