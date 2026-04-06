<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { cartCount, cart } from '$lib/stores/cart.js';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import searchQuery from '$lib/stores/ui.js';
	import TopBar from '$lib/components/TopBar.svelte';
	import TreeLoad from '$lib/icons/TreeLoad.svelte';
	import '../app.css';

	let { children } = $props();

	const isDetail = $derived($page.url.pathname.startsWith('/producto'));
	const isCart = $derived($page.url.pathname === '/carrito');

	$effect(() => {
    $page.url.pathname;
    searchQuery.set('');
	});

	/** @param {string} path */
  function navigateTo(path) {
      if ($page.url.pathname !== path) goto(path);
  }

	onMount(() => {
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
    });
	});
</script>
<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21]">
  <TreeLoad />
	{@render children()}
	<TopBar
    cartCount={$cartCount}
    onCartClick={() => navigateTo('/carrito') }
    onHome={() => navigateTo('/')}
    isHome={$page.url.pathname === '/'}
    {isCart}
    onClearCart={() => { if ($cartCount === 0 || confirm('¿Vaciar el carrito?')) cart.set([]); }}
/>
</div>
