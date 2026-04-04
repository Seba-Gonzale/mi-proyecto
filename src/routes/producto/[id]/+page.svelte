<script>
	import { addToCart } from '$lib/stores/cart.js';

	let { data } = $props();
	const product = data.product;
</script>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#111b21] pb-20">
	<!-- Layout desktop -->
	<div class="flex flex-1 flex-col lg:flex-row">
		<div class="aspect-square w-full overflow-hidden bg-[#1f2c34] lg:w-1/2">
			<img
				src={product.media}
				alt={product.titulo}
				loading="lazy"
				class="h-full w-full bg-[#2a3942] object-cover"
			/>
		</div>
		<div class="flex w-full flex-col justify-between p-6 lg:w-1/2">
			<div>
				<h1 class="text-xl leading-snug font-semibold text-white">{product.titulo}</h1>
				{#if product.precio_oferta > 0}
					<p class="mt-2 text-[#8696a0] line-through">
						ARS {product.precio.toLocaleString('es-AR')}
					</p>
					<p class="text-lg font-semibold text-[#00a884]">
						ARS {product.precio_oferta.toLocaleString('es-AR')}
					</p>
				{:else}
					<p class="mt-2 text-lg text-[#8696a0]">ARS {product.precio.toLocaleString('es-AR')}</p>
				{/if}
				<button
					class="mt-6 w-full rounded-full border border-[#00a884] py-3 font-medium text-[#00a884] transition-colors hover:bg-[#00a884]/10"
				>
					Enviar mensaje a la empresa
				</button>
				<p class="mt-6 text-sm text-[#8696a0]">Info. de la empresa</p>
			</div>
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
