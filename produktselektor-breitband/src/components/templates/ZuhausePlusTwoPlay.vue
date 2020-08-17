<template>
  <div>
    <h2 class="product-title">ZuhausePlusTwoPlay</h2>
    <p>Aktives Produkt: {{ $store.getters.getActiveProduct[0] }}</p>
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
