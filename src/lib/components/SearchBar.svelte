<script>
	let { onSearch, onSort } = $props();
	let query = $state('');
	let sort = $state('default');

	function handleInput(e) {
		query = e.target.value;
		onSearch(query);
	}

	function handleSort(e) {
		sort = e.target.value;
		onSort(sort);
	}

	function clearSearch() {
		query = '';
		onSearch('');
	}
</script>

<div class="flex flex-col gap-2 px-2 py-3 sm:flex-row">
	<div class="flex flex-1 items-center gap-2 rounded-lg bg-[#2a3942] px-3 py-2">
		{#if query.length > 0}
			<button
				onclick={clearSearch}
				class="flex-shrink-0 text-[#8696a0] transition-colors hover:text-white"
			>
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
		{:else}
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
		{/if}
		<input
			type="text"
			placeholder="Buscar productos..."
			value={query}
			oninput={handleInput}
			class="w-full bg-transparent text-sm text-white placeholder-[#8696a0] outline-none"
		/>
	</div>

	<select
		value={sort}
		onchange={handleSort}
		class="cursor-pointer rounded-lg bg-[#2a3942] px-3 py-2 text-sm text-[#8696a0] outline-none"
	>
		<option value="default">Ordenar</option>
		<option value="asc">Precio: menor a mayor</option>
		<option value="desc">Precio: mayor a menor</option>
		<option value="offers">Solo ofertas</option>
		<option value="az">Alfabético A-Z</option>
		<option value="za">Alfabético Z-A</option>
	</select>
</div>
