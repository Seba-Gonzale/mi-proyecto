<script>
	import { searchQuery } from '$lib/stores/ui.js';
	let {
		cartCount = 0,
		onCartClick,
		onSearchClick,
		searchOpen = false,
		isDetail = false,
		onBack,
		cartOpen = false
	} = $props();
	let query = $state('');
	function handleInput(e) {
		query = e.target.value;
		searchQuery.set(query);
	}
	function handleClear() {
		if (query.length > 0) {
			query = '';
			searchQuery.set('');
		} else {
			onSearchClick();
		}
	}
</script>
<div
	class="fixed bottom-0 z-40 flex min-h-15 w-full max-w-5xl items-center justify-between border-t-2 border-[#8696a0] bg-[#1f2c34] px-4 py-4"
>
	{#if cartOpen}
		<span class="text-lg font-medium text-white">Carrito</span>
	{:else if searchOpen}
		<div class="flex flex-1 items-center gap-2">
			<input
				type="text"
				placeholder="Buscar productos..."
				value={query}
				oninput={handleInput}
				autofocus
				class="flex-1 bg-transparent text-sm text-white placeholder-[#8696a0] outline-none"
			/>
		</div>
	{:else}
		<span class="text-lg font-medium text-white">
			{isDetail ? 'Detalle' : 'Catálogo'}
		</span>
	{/if}
	<div class="flex shrink-0 items-center gap-6">
		{#if cartOpen}
			<button
				onclick={onCartClick}
				class="flex h-10 w-10 items-center justify-center text-4xl text-[#8696a0] transition-colors hover:text-white"
				aria-label="Cerrar carrito"
			>
				&times;
			</button>
		{:else}
			{#if !isDetail}
				<button onclick={handleClear} class="text-[#aebac1]">
					{#if searchOpen}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
						</svg>
					{/if}
				</button>
			{/if}
			<button onclick={onCartClick} class="relative text-[#aebac1]">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m0 0l1.6 8M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" />
				</svg>
				{#if cartCount > 0}
					<span class="absolute -top-3 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00a884] text-sm text-white">
						{cartCount}
					</span>
				{/if}
			</button>
			<button onclick={onBack} class="text-[#aebac1]">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
		{/if}
	</div>
</div>
