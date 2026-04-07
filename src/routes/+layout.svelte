<script>
	import { page } from '$app/state';
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { cartCount, cart } from '$lib/stores/cart.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import TopBar from '$lib/components/TopBar.svelte';
	import TreeLoad from '$lib/icons/TreeLoad.svelte';
	import '../app.css';

	let { children } = $props();
	let loading = $state(false);

	const isDetail = $derived(page.url.pathname.startsWith('/producto'));
	const isCart = $derived(page.url.pathname === '/carrito');

	beforeNavigate((navigation) => {
    if (!navigation.willUnload) {
        loading = true;
    }
	});
	afterNavigate(() => { loading = false; });


	/** @param {string} path */
  function navigateTo(path) {
      if (page.url.pathname !== path) goto(path);
  }

	onMount(() => {
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
    });
	});
</script>

<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21]">
  {#if loading}
      <TreeLoad />
  {/if}
	{@render children()}
	<TopBar
    cartCount={$cartCount}
    onCartClick={() => navigateTo('/carrito') }
    onHome={() => navigateTo('/')}
    isHome={page.url.pathname === '/'}
    {isCart}
    onClearCart={() => { if ($cartCount === 0 || confirm('¿Vaciar el carrito?')) cart.set([]); }}
  />
</div>
