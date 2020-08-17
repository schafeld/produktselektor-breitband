<template>
  <div id="panel-layout-two-play" class="flex h-full">
    <div id="main-content" class="w-2/3 bg-gray-200">
      <h2 class="product-title">ZuhausePlusTwoPlay</h2>
      <p>Aktives Produkt: {{ $store.getters.getActiveProduct[0] }}</p>
    </div>
    <div id="product-selector" class="w-1/3">
      <p>Todo: Add Product selection</p>
      <div class="btn">Klick</div>
    </div>
  </div>
</template>

<script>
// export default {
// }
</script>

<style>
h2.product-title {
  color: var(--color-vodafone-red);
}
</style>
