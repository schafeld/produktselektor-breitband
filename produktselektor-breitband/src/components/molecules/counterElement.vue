<template>
  <div class="counter-element">
    <p class="counter-categoryName article flexbox-cell flexbox-cell--w50">
      {{ name }}<br v-if="subtitle" />
      <small v-if="subtitle">{{ subtitle }}</small>
    </p>
    <div class="flexbox-cell flexbox-cell--w50">
      <minus-button v-on:removeDown="removeDown" />
      <counter-display :counter="counter" />
      <plus-button v-on:addUp="addUp" />
    </div>
  </div>
</template>

<script>
import counterDisplay from "@/components/atoms/configurator/counter";
import minusButton from "@/components/atoms/configurator/minusButton";
import plusButton from "@/components/atoms/configurator/plusButton";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  components: {
    counterDisplay,
    minusButton,
    plusButton
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    addUp() {
      this.counter++;
      this.$emit("add");
    },
    removeDown() {
      if (this.counter > 0) {
        this.counter--;
        this.$emit("remove");
      }
    }
  }
};
</script>
