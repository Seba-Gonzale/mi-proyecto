<script>
	let { cartCount = 0, onCartClick } = $props();
</script>

<div class="flex items-center justify-between bg-[#1f2c34] px-4 py-3">
	<!-- Left: back arrow + title -->
	<div class="flex items-center gap-3">
		<button class="text-[#aebac1]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>
		<span class="text-lg font-medium text-white">Catálogo</span>
	</div>

	<!-- Right: cart + link icons -->
	<div class="flex items-center gap-4">
		<button onclick={onCartClick} class="relative text-[#aebac1]">
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
			{#if cartCount > 0}
				<span
					class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#00a884] text-xs text-white"
				>
					{cartCount}
				</span>
			{/if}
		</button>
		<button class="text-[#aebac1]">
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
					d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
				/>
			</svg>
		</button>
	</div>
</div>
