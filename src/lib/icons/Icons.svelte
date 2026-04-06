<script>
    let { name, class: className = 'h-6 w-6' } = $props();
</script>

{#if name === 'Home'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 9.75M4.5 8.25V21h5.25v-6h4.5v6H19.5V8.25" />
    </svg>
{:else if name === 'Cart'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M7 13h10m0 0l1.6 8M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
{:else if name === 'Search'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
{:else if name === 'Close'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
{:else if name === 'Trash'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
{:else if name === 'Back'}
    <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
{:else if name === 'Tree'}
  <svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <!-- Tronco -->
      <line x1="12" y1="10" x2="12" y2="18" />
      <!-- Copa -->
      <path d="M12 2 L6 10 H9 L4 16 H10 L8 20 H16 L14 16 H20 L15 10 H18 Z" />
      <!-- Raíces -->
      <path d="M12 18 Q9 20 7 22" />
      <path d="M12 18 Q15 20 17 22" />
      <path d="M12 18 Q12 21 12 22" />
  </svg>
{/if}
