<div class="fixed inset-0 z-50 flex items-center justify-center bg-[#111b21]/10 backdrop-blur-sm">
    <img src="/TreeLoad.svg" width="50%" height="50%" class="tree-loader" alt="Cargando..." />
</div>

<style>
  .tree-loader {
      filter: invert(1);
      animation: grow 1s ease-in-out infinite alternate;
      clip-path: circle(0% at 50% 60%);
  }
  @keyframes grow {
      from { clip-path: circle(0% at 50% 60%); }
      to   { clip-path: circle(75% at 50% 50%); }
  }
</style>
