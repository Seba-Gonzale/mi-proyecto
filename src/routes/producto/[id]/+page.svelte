<script>
	import { addToCart } from '$lib/stores/cart.js';
	import { cartCount } from '$lib/stores/cart.js';

	let { data } = $props();
	const product = data.product;
</script>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#111b21]">
	<!-- TopBar -->
	<div class="flex items-center justify-between bg-[#1f2c34] px-4 py-3">
		<a href="/" class="text-[#aebac1]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</a>
		<div class="flex items-center gap-4 text-[#aebac1]">
			<div class="relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m0 0l1.6 8M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z"
					/>
				</svg>
				{#if $cartCount > 0}
					<span
						class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#00a884] text-xs text-white"
					>
						{$cartCount}
					</span>
				{/if}
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 5v.01M12 12v.01M12 19v.01"
				/>
			</svg>
		</div>
	</div>

	<!-- Layout desktop: imagen izquierda, info derecha -->
	<div class="flex flex-1 flex-col lg:flex-row">
		<!-- Product image -->
		<div class="aspect-square w-full overflow-hidden bg-[#1f2c34] lg:w-1/2">
			<img src={product.media} alt={product.titulo} class="h-full w-full object-cover" />
		</div>

		<!-- Product info -->
		<div class="flex w-full flex-col justify-between p-6 lg:w-1/2">
			<div>
				<h1 class="text-xl leading-snug font-semibold text-white">{product.titulo}</h1>
				<p class="mt-2 text-lg text-[#8696a0]">ARS {product.precio.toLocaleString('es-AR')}</p>

				<button
					class="mt-6 w-full rounded-full border border-[#00a884] py-3 font-medium text-[#00a884] transition-colors hover:bg-[#00a884]/10"
				>
					Enviar mensaje a la empresa
				</button>

				<p class="mt-6 text-sm text-[#8696a0]">Info. de la empresa</p>
			</div>

			<!-- Footer -->
			<div class="mt-8">
				<button
					onclick={() => addToCart(product)}
					class="w-full rounded-full bg-[#00a884] py-3 font-semibold text-white transition-colors hover:bg-[#008f6f]"
				>
					Añadir a la solicitud de pedido
				</button>
			</div>
		</div>
	</div>
</div>
