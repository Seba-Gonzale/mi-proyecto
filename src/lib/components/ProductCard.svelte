<script>
  let { image = '', name = '', price = '' } = $props();
</script>

<div class="flex items-center gap-3 bg-[#1f2c34] p-3 rounded-lg">
  <img src={image} alt={name} class="w-16 h-16 rounded-md object-cover flex-shrink-0" />

  <div class="flex-1 min-w-0">
    <p class="text-white text-sm font-medium truncate">{name}</p>
    <p class="text-[#8696a0] text-sm mt-1">ARS {price}</p>
  </div>

  <button class="w-8 h-8 rounded-full bg-[#2a3942] flex items-center justify-center flex-shrink-0">
    <span class="text-[#00a884] text-xl leading-none">+</span>
  </button>
</div>
