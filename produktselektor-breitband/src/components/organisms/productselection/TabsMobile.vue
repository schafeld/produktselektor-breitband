<template>
  <!-- TODO: Refactor Vodafone CSS to pure Tailwind CSS? -->
  <!-- In Vodafone/ZuhausePlus: class="flexbox-cell flexbox-cell--w20" -->
  <div class="tabs-mobile">
    <!-- <div class="mb--s"><b>Max. Download-Geschwindigkeit</b><br>
          <overlay :modalVisibility="modalVisibility" modalHeight="720px"
              v-on:closeOverlay="toggleShow()">
              <tariff-advisor-widget />
          </overlay>
          <p @click="toggleShow()" class="show-modal-link">
              Wieviel Mbit/s brauche ich?
          </p>
    </div>-->

    <div class="flag-mobile flag-mobile--benefit" v-if="isTopseller">
      <b>Unser Tipp</b>
    </div>

    <router-link to="/internet-phone-50">
      <span
        class="btn-tab-mobile text--bold"
        :class="selectedTariff === '2P_RIP_50_1' ? 'isSelected' : null"
        @click="
          selectedTariff = '2P_RIP_50_1';
          trackTabInteraction(['2P_RIP_50_1'], environment);
        "
      >
        <span class="download-speed">50</span> Mbit/s
      </span>
    </router-link>

    <router-link to="/internet-phone-100">
      <span
        class="btn-tab-mobile text--bold"
        :class="selectedTariff === '2P_RIP_100_1' ? 'isSelected' : null"
        @click="
          selectedTariff = '2P_RIP_100_1';
          trackTabInteraction(['2P_RIP_100_1'], environment);
        "
      >
        <span class="download-speed">100</span> Mbit/s
      </span>
    </router-link>

    <router-link to="/internet-phone-250">
      <span
        class="btn-tab-mobile"
        :class="isTopseller ? 'isSelected' : null"
        @click="
          selectedTariff = '2P_RIP_250_1';
          trackTabInteraction(['2P_RIP_250_1'], environment);
        "
      >
        <span class="download-speed">250</span> Mbit/s
      </span>
    </router-link>

    <router-link to="/internet-phone-500">
      <span
        class="btn-tab-mobile"
        :class="selectedTariff === '2P_RIP_500_1' ? 'isSelected' : null"
        @click="
          selectedTariff = '2P_RIP_500_1';
          trackTabInteraction(['2P_RIP_500_1'], environment);
        "
      >
        <span class="download-speed">500</span> Mbit/s
      </span>
    </router-link>

    <router-link to="/internet-phone-1000">
      <span
        class="btn-tab-mobile"
        :class="selectedTariff === '2P_RIP_1000_1' ? 'isSelected' : null"
        @click="
          selectedTariff = '2P_RIP_1000_1';
          trackTabInteraction(['2P_RIP_1000_1'], environment);
        "
      >
        <span class="download-speed">1000</span> Mbit/s
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // TODO: get default product sku from router path entry?
      selectedTariff: this.selectedProduct
    };
  },
  methods: {
    trackTabInteraction() {
      console.log("TODO: Track mobile tabs properly");
    }
  },
  computed: {
    isTopseller() {
      return (
        this.selectedTariff === "2P_RIP_250_1" ||
        this.$store.getters.getActiveProduct[0] === "2P_RIP_250_1"
      );
    }
  }
};
</script>

<style>
.btn-tab-mobile {
  @apply mr-2 bg-gray-300 px-4 py-2 border-gray-500;
}
</style>
