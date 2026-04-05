<script>
	let { onSort } = $props();
	let sort = $state('default');

	function handleSort(e) {
		sort = e.target.value;
		onSort(sort);
	}
</script>

<div class="px-2 py-2">
	<select
		value={sort}
		onchange={handleSort}
		class="w-full cursor-pointer rounded-lg bg-[#2a3942] px-3 py-2 text-base text-[#8696a0] outline-none sm:w-auto"
	>
		<option value="default">Ordenar</option>
		<option value="asc">Precio: menor a mayor</option>
		<option value="desc">Precio: mayor a menor</option>
		<option value="offers">Solo ofertas</option>
		<option value="az">Alfabético A-Z</option>
		<option value="za">Alfabético Z-A</option>
	</select>
</div>
