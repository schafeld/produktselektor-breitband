<template>
  <div id="panel-layout-two-play" class="flex h-full">
    <div id="main-content" class="w-2/3 bg-gray-200">
      <h2 class="product-title text-vodafone-red">ZuhausePlusTwoPlay</h2>
      <p>Aktives Produkt: {{ $store.getters.getActiveProduct[0] }}</p>
    </div>
    <div id="product-selector" class="w-1/3">
      <p>Todo: Add Product selection</p>
      <div class="btn">Klick</div>
      <p class="text-info bg-vodafone-red inline-block px-2">Roter Text</p>
    </div>
  </div>
</template>

<script>
// export default {
// }
</script>
