<script>
	import { cart, cartTotal, removeFromCart, updateQuantity } from '$lib/stores/cart.js';

	let { onClose } = $props();
</script>

<div class="fixed inset-0 z-50 flex flex-col">
	<!-- Overlay -->
	<button class="absolute inset-0 bg-black/60" onclick={onClose}></button>

	<!-- Panel -->
	<div
		class="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-[90vh] w-full max-w-5xl flex-col bg-[#111b21]"
	>
		<!-- Items -->
		<div class="flex flex-1 flex-col gap-3 overflow-y-auto p-3">
			{#if $cart.length === 0}
				<p class="mt-8 text-center text-[#8696a0]">El carrito está vacío</p>
			{:else}
				{#each $cart as item}
					<div class="flex items-center gap-3 rounded-lg bg-[#1f2c34] p-3">
						<img
							src={item.media}
							alt={item.titulo}
							class="h-14 w-14 flex-shrink-0 rounded-md object-cover"
						/>
						<div class="min-w-0 flex-1">
							<p class="truncate text-sm text-white">{item.titulo}</p>
							{#if item.precio_oferta > 0}
								<p class="text-xs text-[#8696a0] line-through">
									ARS {item.precio.toLocaleString('es-AR')}
								</p>
								<p class="text-sm font-semibold text-[#00a884]">
									ARS {item.precio_oferta.toLocaleString('es-AR')}
								</p>
							{:else}
								<p class="text-sm text-[#8696a0]">ARS {item.precio.toLocaleString('es-AR')}</p>
							{/if}
							<div class="mt-1 flex items-center gap-2">
								<button
									onclick={() => updateQuantity(item.id, item.quantity - 1)}
									class="flex h-8 w-8 items-center justify-center text-2xl text-[#00a884]">−</button
								>
								<span class="text-sm text-white">{item.quantity}</span>
								<button
									onclick={() => updateQuantity(item.id, item.quantity + 1)}
									class="flex h-8 w-8 items-center justify-center text-2xl text-[#00a884]">+</button
								>
							</div>
						</div>
						<button
							onclick={() => removeFromCart(item.id)}
							class="flex h-8 w-8 items-center justify-center text-3xl text-[#8696a0] hover:text-red-400"
							>&times;</button
						>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Total + Confirmar -->
		{#if $cart.length > 0}
			<div class="border-t border-[#2a3942] bg-[#1f2c34] p-4">
				<div class="mb-3 flex justify-between">
					<span class="text-[#8696a0]">Total</span>
					<span class="font-bold text-white">ARS {$cartTotal.toLocaleString('es-AR')}</span>
				</div>
				<button
					onclick={() => {
						const lines = $cart
							.map(
								(item) =>
									`x${item.quantity} - ${item.titulo} — ARS ${(item.finalPrice * item.quantity).toLocaleString('es-AR')}`
							)
							.join('\n');
						const total = `\nTotal: ARS ${$cartTotal.toLocaleString('es-AR')}`;
						const msg = encodeURIComponent(
							`Hola! Me gustaría hacer el siguiente pedido:\n\n${lines}${total}`
						);
						window.open(`https://wa.me/5493794229358?text=${msg}`, '_blank');
					}}
					class="w-full rounded-lg bg-[#00a884] py-3 font-semibold text-white transition-colors hover:bg-[#008f6f]"
				>
					Confirmar pedido por WhatsApp
				</button>
			</div>
		{/if}

		<!-- TopBar inferior -->
		<div
			class="flex items-center justify-between border-t-2 border-[#00a884] bg-[#1f2c34] px-4 py-3"
		>
			<h2 class="text-lg font-semibold text-white">Carrito</h2>
			<button
				onclick={onClose}
				class="flex h-10 w-10 items-center justify-center text-4xl text-[#8696a0] transition-colors hover:text-white"
				>&times;</button
			>
		</div>
	</div>
</div>
