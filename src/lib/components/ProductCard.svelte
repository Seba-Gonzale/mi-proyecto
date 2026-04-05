<script>
	import { addToCart, removeFromCart, updateQuantity, cart } from '$lib/stores/cart.js';
	import { derived } from 'svelte/store';

	/** @type {{ image?: string, name?: string, price?: number, product: { id: string, titulo: string, precio: number, precio_oferta: number, media: string } }} */
	let { image = '', name = '', price = 0, product } = $props();
	const hasOffer = $derived(product.precio_oferta > 0);

	const cartItem = derived(cart, ($cart) => $cart.find((i) => i.id === product.id));
</script>

<a
  href="/producto/{product.id}"
	class="flex items-center gap-3 rounded-lg bg-[#1f2c34] p-3 transition-colors hover:bg-[#2a3942]"
  >
	<!-- Imagen a la izquierda -->
	<img
		src={image}
		alt={name}
		loading="lazy"
		class="h-16 w-16 shrink-0 rounded-lg bg-[#2a3942] object-cover"
	/>

	<!-- Texto en el centro -->
	<div class="min-w-0 flex-1">
		<p class="truncate text-sm font-medium text-white">{name}</p>
		{#if hasOffer}
			<p class="text-xs text-[#8696a0] line-through">ARS {price.toLocaleString('es-AR')}</p>
			<p class="text-sm font-semibold text-[#00a884]">
				ARS {product.precio_oferta.toLocaleString('es-AR')}
			</p>
		{:else}
			<p class="mt-1 text-sm text-[#8696a0]">ARS {price.toLocaleString('es-AR')}</p>
		{/if}
	</div>

	<!-- Controles a la derecha -->
	<div class="flex shrink-0 items-center gap-2">
		{#if $cartItem}
			<button
				onclick={(e) => {
					e.preventDefault();
					updateQuantity(product.id, $cartItem.quantity - 1);
				}}
				class="flex h-8 w-8 items-center justify-center rounded-full bg-red-900/60 transition-colors hover:bg-red-700"
			>
				<span class="text-xl leading-none text-white">−</span>
			</button>
			<span class="w-4 text-center text-sm font-bold text-white">{$cartItem.quantity}</span>
		{/if}
		<button
			onclick={(e) => {
				e.preventDefault();
				addToCart(product);
			}}
			class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a3942] transition-colors hover:bg-[#00a884]"		>
			<span class="text-xl leading-none text-white">+</span>
		</button>
	</div>
  </a>
