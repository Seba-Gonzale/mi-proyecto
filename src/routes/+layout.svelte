<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { cartCount } from '$lib/stores/cart.js';
	import { searchOpen, cartOpen } from '$lib/stores/ui.js';
	import { onMount } from 'svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import '../app.css';
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
	<TopBar
		cartCount={$cartCount}
		onCartClick={() => cartOpen.update((v) => !v)}
		onSearchClick={() => searchOpen.update((v) => !v)}
		searchOpen={$searchOpen}
		{isDetail}
		onBack={() => (isDetail ? goto('/') : history.back())}
		cartOpen={$cartOpen}
	/>
</div>
