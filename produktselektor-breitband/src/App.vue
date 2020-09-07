<template>
  <div id="app" class="antialiased text-gray-900">
    <div id="banner-top" class="md:sticky top-0 bg-white">
      <banner-vodafone />
    </div>
    <router-view />
  </div>
</template>

<script>
import "@/assets/styles/styles-vodafone.css";
import BannerVodafone from "@/components/organisms/BannerVodafone";

export default {
  name: "App",
  components: {
    BannerVodafone
  }
};
</script>
