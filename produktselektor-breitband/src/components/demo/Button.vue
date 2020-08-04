<template>
  <div class="button-demo">
    <a
      :href="href"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonDemo",
  props: {
    text: String,
    href: String
  }
};
</script>
