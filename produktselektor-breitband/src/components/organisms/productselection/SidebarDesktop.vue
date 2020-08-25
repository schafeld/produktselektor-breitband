<template>
  <!-- TODO: Refactor Vodafone CSS to pure Tailwind CSS? -->
  <!-- In Vodafone/ZuhausePlus: class="flexbox-cell flexbox-cell--w20" -->
  <div class="sidebar-desktop">
    <div class="productCart productCart--bright">
      <div class="flag flag--benefit" v-if="selectedTariff === '2P_RIP_250_1'">
        <b>Unser Tipp</b>
      </div>

      <div class="mb--m">
        <!-- <div class="mb--s"><b>Max. Download-Geschwindigkeit</b><br>
              <overlay :modalVisibility="modalVisibility" modalHeight="720px"
                  v-on:closeOverlay="toggleShow()">
                  <tariff-advisor-widget />
              </overlay>
              <p @click="toggleShow()" class="show-modal-link">
                  Wieviel Mbit/s brauche ich?
              </p>
        </div>-->

        <div class="mb--s">
          <div class="productCart-radio">
            <router-link to="/internet-phone-50">
              <span
                class="productCart-label productCart-label--bandwidth text--bold"
                :class="selectedTariff === '2P_RIP_50_1' ? 'isSelected' : null"
                @click="selectedTariff = '2P_RIP_50_1'; trackTabInteraction(['2P_RIP_50_1'], environment)"
              >
                <span class="download-speed">50</span> Mbit/s</span>
            </router-link>
          </div>
        </div>

        <div class="mb--s">
          <div class="productCart-radio">
            <router-link to="/internet-phone-100">
              <span
                class="productCart-label productCart-label--bandwidth text--bold"
                :class="selectedTariff === '2P_RIP_100_1' ? 'isSelected' : null"
                @click="selectedTariff = '2P_RIP_100_1'; trackTabInteraction(['2P_RIP_100_1'], environment)"
              >
                <span class="download-speed">100</span> Mbit/s</span>
            </router-link>
          </div>
        </div>

        <div class="mb--s">
          <div class="productCart-radio">
            <router-link to="/internet-phone-250">
              <span
                class="productCart-label productCart-label--bandwidth"
                :class="selectedTariff === '2P_RIP_250_1' ? 'isSelected' : null"
                @click="selectedTariff = '2P_RIP_250_1'; trackTabInteraction(['2P_RIP_250_1'], environment)"
              >
                <span class="download-speed">250</span> Mbit/s</span>
            </router-link>
          </div>
        </div>

        <div class="mb--s">
          <div class="productCart-radio">
            <router-link to="/internet-phone-500">
              <span
                class="productCart-label productCart-label--bandwidth"
                :class="selectedTariff === '2P_RIP_500_1' ? 'isSelected' : null"
                @click="selectedTariff = '2P_RIP_500_1'; trackTabInteraction(['2P_RIP_500_1'], environment)"
              >
                <span class="download-speed">500</span> Mbit/s</span>
            </router-link>
          </div>
        </div>

        <div class="mb--s">
          <div class="productCart-radio">
            <router-link to="/internet-phone-1000">
              <span
                class="productCart-label productCart-label--bandwidth"
                :class="
                  selectedTariff === '2P_RIP_1000_1' ? 'isSelected' : null
                "
                @click="
                  selectedTariff = '2P_RIP_1000_1';
                  trackTabInteraction(['2P_RIP_1000_1'], environment);
                "
              >
                <span class="download-speed">1000</span> Mbit/s</span>
            </router-link>
          </div>
          xxx {{ $store.getters.getActiveProduct[0] }} | {{ $store.getters.getProduct($store.getters.getActiveProduct).title }}
        </div>
      </div>

      <!-- <details-rib-50 v-if="selectedTariff === '2P_RIP_50_1'" />
      <details-rib-100 v-else-if="selectedTariff === '2P_RIP_100_1'" />
      <details-rib-250 v-else-if="selectedTariff === '2P_RIP_250_1'" />
      <details-rib-500 v-else-if="selectedTariff === '2P_RIP_500_1'" />
      <details-rib-1000 v-else-if="selectedTariff === '2P_RIP_1000_1'" />-->
    </div>
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
      console.log("TODO: Track properly");
    }
  }
};
</script>
