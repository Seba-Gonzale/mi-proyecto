<script>
	let { image = '', name = '', price = 0, product = {} } = $props();
	import { addToCart } from '$lib/stores/cart.js';
</script>

<div class="flex items-center gap-3 rounded-lg bg-[#1f2c34] p-3">
	<img src={image} alt={name} class="h-16 w-16 flex-shrink-0 rounded-md object-cover" />

	<div class="min-w-0 flex-1">
		<p class="truncate text-sm font-medium text-white">{name}</p>
		<p class="mt-1 text-sm text-[#8696a0]">ARS {price.toLocaleString('es-AR')}</p>
	</div>

	<button
		onclick={() => addToCart(product)}
		class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2a3942] transition-colors hover:bg-[#00a884]"
	>
		<span class="text-xl leading-none text-[#00a884] hover:text-white">+</span>
	</button>
</div>
