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
  class="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-[#2a3942] bg-[#1f2c34]"
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
		<p class="truncate text-base font-medium text-white">{name}</p>
		{#if hasOffer}
			<p class="text-sm text-[#8696a0] line-through">$ {price.toLocaleString('es-AR')}</p>
			<p class="text-base font-semibold text-[#00a884]">
				$ {product.precio_oferta.toLocaleString('es-AR')}
			</p>
		{:else}
			<p class="mt-1 text-base text-[#8696a0]">$ {price.toLocaleString('es-AR')}</p>
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
				class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a3942] transition-colors hover:bg-red-700"
			>
				<span class="text-xl leading-none text-white">−</span>
			</button>
			<input
        type="number"
        inputmode="numeric"
        min="1"
        value={$cartItem.quantity}
        onclick={(e) => e.preventDefault()}
        onchange={(e) => {
            e.preventDefault();
            const val = parseInt(e.currentTarget.value);
            if (isNaN(val) || val <= 0) {
                removeFromCart(product.id);
            } else {
                updateQuantity(product.id, val);
            }
        }}
        onkeydown={(e) => {
            if (e.key === 'Enter') {
                e.currentTarget.blur();
            }
        }}
        class="w-8 bg-transparent text-center text-base font-bold text-white outline-none"
    />
		{/if}
		<button
			onclick={(e) => {
				e.preventDefault();
				addToCart(product);
			}}
			class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors {$cartItem ? 'bg-[#00a884] hover:bg-[#008f6f]' : 'bg-[#2a3942] hover:bg-[#00a884]'}"
		>
			<span class="text-xl leading-none text-white">+</span>
		</button>
	</div>
  </a>
