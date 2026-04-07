<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { cart, cartTotal } from '$lib/stores/cart.js';
	let { data } = $props();
	const allProducts = $derived(Object.values(data.catalogo));
	const cartProducts = $derived(
		$cart.map((item) => allProducts.find((p) => p.id === item.id)).filter(Boolean)
	);
</script>

<div class="grid grid-cols-1 gap-2 p-2 pb-46 sm:grid-cols-2 lg:grid-cols-3">
	{#each cartProducts as product (product.id)}
		<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
	{:else}
		<p class="text-center py-8 text-[#8696a0]">El carrito está vacío</p>
	{/each}
	<div class="py-3 text-center text-2xl text-">🌱</div>
</div>

{#if $cart.length > 0}
	<div class="fixed inset-x-0 bottom-15 z-40 mx-auto max-w-5xl border-t border-[#2a3942] bg-[#1f2c34] p-4">
		<div class="mb-3 flex justify-between">
			<span class="text-[#8696a0]">Total</span>
			<span class="font-bold text-white">$ {$cartTotal.toLocaleString('es-AR')}</span>
		</div>
		<button
			onclick={() => {
				const lines = $cart.map((item) => `*x${item.quantity}* - ${item.titulo} — _$ ${(item.finalPrice * item.quantity).toLocaleString('es-AR')}_`).join('\n');
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
