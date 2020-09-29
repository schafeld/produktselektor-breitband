<template>
  <div class="tabs-customer-type">
    <h2 class="main-address invisible md:visible md:m-12">
      Was können wir für Dich tun?
    </h2>
    <!-- TODO: Tabs as atoms -->
    <div class="tabs flex items-center">
      <div
        class="tab text-gray-700 text-center px-1 mx-2"
        :class="{ active: !isExistingCustomer }"
        @click="setExistingCustomer(false)"
      >
        <h3 class="customer-type">Du bist Neukunde?</h3>
        <p>Produktwelt erkunden</p>
      </div>
      <div
        class="tab text-gray-700 text-center px-2 mx-2"
        :class="{ active: isExistingCustomer }"
        @click="setExistingCustomer(true)"
      >
        <h3 class="customer-type">Du bist Bestandskunde?</h3>
        <p>Login, Support und Hilfe</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "TabsCustomerType",
  methods: {
    setExistingCustomer(existingCustomerState) {
      this.$store.commit("setExistingCustomer", existingCustomerState);
      console.log(
        "Existing customer status changed to " + existingCustomerState
      );
      // TODO: Tracking?
    }
  },
  computed: {
    isExistingCustomer() {
      return this.$store.getters.isExistingCustomer;
    }
  }
};
</script>

<style>
.tabs-customer-type {
  text-align: center;
  margin-bottom: 80px;
}
.tabs {
  margin: 0 auto;
  max-width: 360px;
  justify-content: center;
}
.tab {
  min-width: 280px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}
.tab.active {
  border-bottom: 3px solid var(--color-vodafone-red);
}
h2.main-address {
  font-family: "VodafoneLt", "Vodafone", arial, helvetica, sans-serif;
  font-size: 30px;
  line-height: 25px;
}
h3.customer-type {
  font-family: "VodafoneBd";
  font-size: 18px;
  line-height: 24px;
}
.tab p {
  margin-bottom: 16px;
}
@media (max-width: 768px) {
  .tab {
    min-width: 200px;
  }
}
</style>
