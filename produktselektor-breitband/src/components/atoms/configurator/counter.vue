<template>
  <div class="counter counter-number ng-binding">{{ counter }}</div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      required: true
    }
  }
};
</script>
