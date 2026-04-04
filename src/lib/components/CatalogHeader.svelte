<script>
	let { storeName = '', description = '', url = '', coverImage = '' } = $props();
</script>

<div class="relative">
	<!-- Cover image -->
	<div class="h-32 w-full overflow-hidden bg-[#1f2c34] sm:h-48">
		<img src={coverImage} alt={storeName} class="h-full w-full object-cover opacity-60" />
	</div>

	<!-- Store info -->
	<div class="bg-[#111b21] px-4 py-3 sm:px-8 sm:py-5">
		<div class="flex items-center gap-1">
			<h1 class="text-lg font-bold text-white sm:text-2xl">{storeName}</h1>
			<span class="text-lg text-[#8696a0] sm:text-2xl">›</span>
		</div>
		<p class="mt-1 text-sm text-[#8696a0] sm:text-base">{description}</p>
		<p class="truncate text-sm text-[#8696a0] sm:text-base">{url}</p>
	</div>
</div>
