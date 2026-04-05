<script>
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import SortBar from '$lib/components/SortBar.svelte';
	import { searchOpen, searchQuery, cartOpen } from '$lib/stores/ui.js';
	import { cart, cartTotal } from '$lib/stores/cart.js';
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
	const cartProducts = $derived(
		$cart.map((item) => allProducts.find((p) => p.id === item.id)).filter(Boolean)
	);
</script>
{#if !$searchOpen && !$cartOpen}
	<CatalogHeader
		storeName="Rico y Saludable"
		description="Podes ver los productos y hacer tu pedido en nuestra página:"
		url="https://ricoysaludable.jarbas.net..."
		coverImage="/portada_1200x400.webp"
	/>
{/if}
<SortBar onSort={handleSort} />
<div class="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3"
	class:pb-50={$cartOpen && $cart.length > 0}
	class:pb-20={!($cartOpen && $cart.length > 0)}
>
	{#each ($cartOpen ? cartProducts : filtered) as product (product.id)}
		<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
	{:else}
		<p class="text-[#8696a0] text-center py-8 col-span-3">
			{$cartOpen ? 'El carrito está vacío.' : 'No se encontraron productos.'}
		</p>
	{/each}
</div>

{#if $cartOpen && $cart.length > 0}
	<div class="fixed inset-x-0 bottom-18 z-40 mx-auto max-w-5xl border-t border-[#2a3942] bg-[#1f2c34] p-4">
		<div class="mb-3 flex justify-between">
			<span class="text-[#8696a0]">Total</span>
			<span class="font-bold text-white">$ {$cartTotal.toLocaleString('es-AR')}</span>
		</div>
		<button
			onclick={() => {
				const lines = $cart
					.map(
						(item) =>
							`*x${item.quantity}* - ${item.titulo} — _$ ${(item.finalPrice * item.quantity).toLocaleString('es-AR')}_`
					)
					.join('\n');
				const total = `\nTotal: $ ${$cartTotal.toLocaleString('es-AR')}`;
				const msg = encodeURIComponent(`Hola! Me gustaría hacer el siguiente pedido:\n\n${lines}${total}`);
				window.open(`https://wa.me/5493794229358?text=${msg}`, '_blank');
			}}
			class="w-full rounded-lg bg-[#00a884] py-3 font-semibold text-white transition-colors hover:bg-[#008f6f]"
		>
			Confirmar pedido por WhatsApp
		</button>
	</div>
{/if}
