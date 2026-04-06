<script>
	let {
		cartCount = 0,
		onCartClick,
		onHome,
		isCart = false,
		isHome = false,
	} = $props();
	let query = $state('');
</script>

<div class="fixed bottom-0 z-40 flex w-full max-w-5xl items-center justify-around border-t-2 border-[#2a3942] bg-[#1f2c34] px-4 py-2">
		<!-- Inicio -->
		<button onclick={onHome} class="flex flex-col items-center gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 {isHome ? 'text-[#00a884]' : 'text-[#8696a0]'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 9.75M4.5 8.25V21h5.25v-6h4.5v6H19.5V8.25" />
			</svg>
			<span class="select-none text-xs {isHome ? 'text-[#00a884]' : 'text-[#8696a0]'}">Inicio</span>
		</button>
	<!-- Carrito -->
	<button onclick={onCartClick} class="relative ml-3 flex flex-col items-center gap-1">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 {isCart ? 'text-[#00a884]' : 'text-[#8696a0]'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m0 0l1.6 8M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
		{#if cartCount > 0}
			<span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00a884] text-xs text-white">{cartCount}</span>
		{/if}
		<span class="select-none text-xs {isCart ? 'text-[#00a884]' : 'text-[#8696a0]'}">Carrito</span>
	</button>
</div>
