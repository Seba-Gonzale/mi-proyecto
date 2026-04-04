<script>
	import TopBar from '$lib/components/TopBar.svelte';
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let { data } = $props();

	const products = Object.values(data.catalog.catalogo);
</script>

<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21]">
	<TopBar />
	<CatalogHeader
		storeName="Rico y Saludable"
		description="Podes ver los productos y hacer tu pedido en nuestra página:"
		url="https://ricoysaludable.jarbas.net..."
		coverImage="https://placehold.co/400x128"
	/>

	<div class="mt-2 grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product}
			<ProductCard name={product.titulo} price={product.precio} image={product.media} />
		{/each}
	</div>
</div>
