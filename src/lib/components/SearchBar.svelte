<script>
	let { onSearch } = $props();
	let query = $state('');

	function handleInput(e) {
		query = e.target.value;
		onSearch(query);
	}
</script>

<div class="px-2 py-3">
	<div class="flex items-center gap-2 rounded-lg bg-[#2a3942] px-3 py-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 flex-shrink-0 text-[#8696a0]"
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
			type="text"
			placeholder="Buscar productos..."
			value={query}
			oninput={handleInput}
			class="w-full bg-transparent text-sm text-white placeholder-[#8696a0] outline-none"
		/>
	</div>
</div>
