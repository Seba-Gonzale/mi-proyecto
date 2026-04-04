<script>
	import { addToCart } from '$lib/stores/cart.js';
	let { image = '', name = '', price = 0, product = {} } = $props();
	const hasOffer = $derived(product.precio_oferta > 0);
</script>

<a
	href="/producto/{product.id}"
	class="flex items-center gap-3 rounded-lg bg-[#1f2c34] p-3 transition-colors hover:bg-[#2a3942]"
>
	<img
		src={image}
		alt={name}
		loading="lazy"
		class="h-16 w-16 flex-shrink-0 rounded-md bg-[#2a3942] object-cover"
	/>

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

	<button
		onclick={(e) => {
			e.preventDefault();
			addToCart(product);
		}}
		class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2a3942] transition-colors hover:bg-[#00a884]"
	>
		<span class="text-2xl leading-none text-[#00a884] hover:text-white">+</span>
	</button>
</a>
