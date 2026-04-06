<script>
	import CatalogHeader from '$lib/components/CatalogHeader.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import SortBar from '$lib/components/SortBar.svelte';
	import searchQuery from '$lib/stores/ui.js';
	import TreeLoad from '$lib/icons/TreeLoad.svelte';
	import Icons from '$lib/icons/Icons.svelte';

	let { data } = $props();
	const allProducts = $derived(Object.values(data.catalogo));
	/** @type {any[]} */
	let filtered = $state([]);
	let currentSort = $state('default');
  let loading = $state(true);
  let inputEl = $state(/** @type {HTMLInputElement | null} */ (null));
  let inputFocused = $state(false);

  function clearSearch() {
      $searchQuery[1] = ""; /**llllllllllllllllllllllllllllllllllllllll */
      if (inputEl) inputEl.value = '';
      inputEl?.focus();
  }

	$effect(() => {
		if (data) loading = false;
		applyFilters($searchQuery, currentSort);
	});
	/** @param {string} str */
	function normalize(str) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
	}
	/**
	 * @param {string} query
	 * @param {string} sort
	 */
	function applyFilters(query, sort) {
		let result = allProducts.filter((p) => normalize(p.titulo).includes(normalize(query)));
		if (sort === 'offers') {
			result = result.filter((p) => p.precio_oferta > 0);
		} else if (sort === 'asc') {
			result = result.sort((a, b) => (a.precio_oferta || a.precio) - (b.precio_oferta || b.precio));
		} else if (sort === 'desc') {
			result = result.sort((a, b) => (b.precio_oferta || b.precio) - (a.precio_oferta || a.precio));
		} else if (sort === 'az') {
			result = result.sort((a, b) => a.titulo.localeCompare(b.titulo));
		} else if (sort === 'za') {
			result = result.sort((a, b) => b.titulo.localeCompare(a.titulo));
		}
		filtered = result;
	}

	/** @param {string} sort */
	function handleSort(sort) {
		currentSort = sort;
	}
</script>

<CatalogHeader
	storeName="Rico y Saludable"
	description="Podes ver los productos y hacer tu pedido en nuestra página:"
	url="https://ricoysaludable.jarbas.net..."
	coverImage="/portada_1200x400.webp"
	activeCatalogHeader={$searchQuery[0] || $searchQuery[1]}
/>

<div class="sticky top-0 z-30 flex items-center gap-2 bg-[#111b21] px-2 py-2">
    <div class="min-w-0 flex-5 flex items-center gap-2 rounded-lg bg-[#2a3942] px-3 py-2">
        <input
            bind:this={inputEl}
            type="text"
            inputmode="search"
            placeholder="Buscar productos..."
            oninput={(e) =>  {
              searchQuery.set(normalize(e.currentTarget.value));
            }}
            onfocus={() => inputFocused = true}
            class="min-w-0 flex-1 bg-transparent text-base text-white placeholder-[#8696a0] outline-none"
        />
        {#if $searchQuery[0] !== ''}
            <button class="cursor-pointer" onmousedown={(e) => $searchQuery = ["", false]}>
                <Icons name="Close" class="h-5 w-5 text-[#8696a0]" />
            </button>
        {:else}
            <Icons name="Search" class="h-5 w-5 text-[#8696a0]" />
        {/if}
    </div>
    <div class="flex-2 min-w-0">
      <SortBar onSort={handleSort} />
    </div>
</div>
{#if loading}
    <TreeLoad />
{:else}
  <div class="grid grid-cols-1 gap-2 p-2 pb-20 sm:grid-cols-2 lg:grid-cols-3">
  	{#each filtered as product (product.id)}
  		<ProductCard name={product.titulo} price={product.precio} image={product.media} {product} />
  	{:else}
  		<p class="col-span-3 py-8 text-center text-[#8696a0]">No se encontraron productos.</p>
  	{/each}
  	<div class="min-h-dvh py-3 text-center text-2xl">🏵️</div>
  </div>
{/if}
