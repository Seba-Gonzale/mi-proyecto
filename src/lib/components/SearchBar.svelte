<script>
	let { onSearch, searchOpen = $bindable(false) } = $props();
	let query = $state('');

	function handleInput(e) {
		query = e.target.value;
		onSearch(query);
	}

	function clearSearch() {
		query = '';
		onSearch('');
		searchOpen = false;
	}
</script>

{#if searchOpen}
	<div
		class="sticky top-[52px] z-30 border-b border-[#00a884] bg-[#1f2c34] px-3 py-3 shadow-lg shadow-[#00a884]/20"
	>
		<div class="flex items-center gap-2 rounded-lg bg-[#2a3942] px-3 py-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 flex-shrink-0 text-[#00a884]"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
				/>
			</svg>
			<input
				id="search-input"
				type="text"
				placeholder="Buscar productos..."
				value={query}
				oninput={handleInput}
				autofocus
				class="flex-1 bg-transparent text-sm text-white placeholder-[#8696a0] outline-none"
			/>
			<button onclick={clearSearch} class="text-[#8696a0] transition-colors hover:text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
