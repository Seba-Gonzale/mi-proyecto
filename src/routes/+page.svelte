<script>
	import TopBar from '$lib/components/TopBar.svelte';
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { getCatalog } from '$lib/services/catalog.js';
</script>

<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21]">
	<TopBar />
	<CatalogHeader
		storeName="Rico y Saludable"
		description="Podes ver los productos y hacer tu pedido en nuestra página:"
		url="https://ricoysaludable.jarbas.net..."
		coverImage="https://placehold.co/400x128"
	/>

	{#await getCatalog()}
		<p class="py-8 text-center text-[#8696a0]">Cargando productos...</p>
	{:then data}
		<pre class="p-4 text-xs text-white">{JSON.stringify(data, null, 2)}</pre>
	{:catch error}
		<p class="py-8 text-center text-red-400">{error.message}</p>
	{/await}
</div>
