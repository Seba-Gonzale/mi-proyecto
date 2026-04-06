<script>
  import Icon from '$lib/icons/Icons.svelte';
	let {
		cartCount = 0,
		onCartClick,
		onHome,
		isCart = false,
		isHome = false,
		onClearCart = /** @type {() => void} */ (() => {}),
	} = $props();
	let query = $state('');
</script>

<div class="fixed bottom-0 z-40 flex w-full max-w-5xl items-center justify-around border-t-2 border-[#2a3942] bg-[#1f2c34] px-4 py-2">
	<!-- Inicio -->
	<button onclick={onHome} class="flex flex-col items-center gap-1 px-4">
	  <Icon name="Home" class="h-6 w-6 {isHome ? 'text-[#00a884]' : 'text-[#8696a0]'}" />
		<span class="select-none text-xs {isHome ? 'text-[#00a884]' : 'text-[#8696a0]'}">Inicio</span>
	</button>
	<!-- Basurero -->
	<div class="flex flex-1 flex-col items-center gap-1">
  	{#if isCart}
    <button onclick={onClearCart} class="flex flex-col items-center gap-1">
        <Icon name="Trash" class="h-6 w-6 text-[#8696a0]" />
        <span class="select-none text-xs text-[#8696a0]">Vaciar</span>
    </button>
    {/if}
	</div>
	<!-- Carrito -->
	<button onclick={onCartClick} class="relative flex flex-col items-center gap-1 px-4">
		<Icon name="Cart" class="h-6 w-6 {isCart ? 'text-[#00a884]' : 'text-[#8696a0]'}" />
		{#if cartCount > 0}
			<span class="absolute right-0 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#00a884] text-sm text-white">{cartCount}</span>
		{/if}
		<span class="select-none text-xs {isCart ? 'text-[#00a884]' : 'text-[#8696a0]'}">Carrito</span>
	</button>
</div>
