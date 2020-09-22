<template>
  <div id="app" class="antialiased text-gray-900">
    <div id="banner-top" class="bg-white">
      <banner-vodafone
        v-if="
          $data.EXPERIENCE_VERSION === 'experience3' ||
            $data.EXPERIENCE_VERSION === 'experience4'
        "
      />
      <banner-vodafone-boxes v-else />
    </div>
    <div class="w-full">
      <tabs-customer-type v-if="$data.EXPERIENCE_VERSION === 'experience4'" />
    </div>
    <router-view />
    <switcher-promotion v-if="!isExistingCustomer" />
    <overlay-container />
  </div>
</template>

<script>
import "@/assets/styles/styles-vodafone.css";
import BannerVodafone from "@/components/organisms/BannerVodafone";
import BannerVodafoneBoxes from "@/components/organisms/BannerVodafoneBoxes";
import TabsCustomerType from "@/components/organisms/TabsCustomerType";
import SwitcherPromotion from "@/components/organisms/SwitcherPromotion";
import OverlayContainer from "@/components/atoms/OverlayContainer.vue";

export default {
  name: "App",
  components: {
    BannerVodafone,
    BannerVodafoneBoxes,
    TabsCustomerType,
    SwitcherPromotion,
    OverlayContainer
  },
  computed: {
    isExistingCustomer() {
      return this.$store.getters.isExistingCustomer;
    }
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
}
.main-content {
  margin-bottom: 10px;
}
#banner-top {
  margin-bottom: 30px;
}
</style>
