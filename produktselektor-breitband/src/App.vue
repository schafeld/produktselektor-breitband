<template>
  <div id="app" class="antialiased text-gray-900">
    <div id="banner-top" class="md:sticky top-0 bg-white">
      <banner-vodafone />
    </div>
    <div class="w-full">
      <tabs-customer-type />
    </div>
    <router-view />
  </div>
</template>

<script>
import "@/assets/styles/styles-vodafone.css";
import BannerVodafone from "@/components/organisms/BannerVodafone";
import TabsCustomerType from "@/components/organisms/TabsCustomerType";

export default {
  name: "App",
  components: {
    BannerVodafone,
    TabsCustomerType
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
}
#banner-top {
  z-index: 10;
}
</style>
