<template>
  <div
    class="pdp-checkbox"
    :class="{ checked }"
    :name="'option-' + option.shortTitle"
    :id="option.shortTitle"
    @click="processToggle()"
  >
    <img src="../../../src/assets/checkbox-tick.svg" v-if="checked" />
    <img src="../../../src/assets/checkbox-empty.svg" v-else />
    <span>{{ checked ? "Ausgewählt" : "Auswählen" }}</span>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    processToggle() {
      this.checked = !this.checked;
      this.$emit("processToggle");
    }
  },
  computed: {
    checked() {
      let tempBool = true;
      if (this.$store.getters.getBasket.indexOf(this.option.skus[0]) < 0) {
        tempBool = false;
      }
      return tempBool;
    }
  }
};
</script>

<style>
.pdp-checkbox {
  display: flex;
  justify-content: flex-end;
}
.pdp-checkbox img {
  margin: 0 10px 0 0;
}
</style>
