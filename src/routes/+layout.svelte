<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { cartCount } from '$lib/stores/cart.js';
	import { searchOpen } from '$lib/stores/ui.js';
	import { onMount } from 'svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import '../app.css';

	let cartOpen = $state(false);
	let { children } = $props();
	const isDetail = $derived($page.url.pathname.startsWith('/producto'));

	onMount(() => {
		window.addEventListener('beforeunload', (e) => {
			e.preventDefault();
		});
	});
</script>

<div class="mx-auto min-h-screen max-w-5xl bg-[#111b21] overflow-hidden">
	{@render children()}

	{#if cartOpen}
		<Cart onClose={() => (cartOpen = false)} />
	{/if}

<TopBar
	cartCount={$cartCount}
	onCartClick={() => (cartOpen = true)}
	onSearchClick={() => searchOpen.update((v) => !v)}
	searchOpen={$searchOpen}
	{isDetail}
	onBack={() => (isDetail ? goto('/') : history.back())}
/>
</div>
