<script>
  import { currentSort } from '$lib/stores/ui.svelte';
	let { onFocus, onBlur } = $props();

	function handleSort(e) {
		currentSort.value = e.target.value;
	}
</script>


<select
	bind:value={currentSort.value}
	onchange={handleSort}
	onfocus={onFocus}
	onblur={onBlur}
	class="w-full cursor-pointer rounded-lg px-3 py-2 text-base outline-none sm:w-auto {currentSort.value !== 'default' ? 'bg-amber-500/20 text-amber-400 font-semibold' : 'bg-[#2a3942] text-[#8696a0]'}"
>
	<option value="default">Filtros</option>
	<option value="asc">menor a Mayor $</option>
	<option value="desc">Mayor a menor $</option>
	<option value="offers">Ofertas</option>
	<option value="az">A-Z</option>
	<option value="za">Z-A</option>
</select>
