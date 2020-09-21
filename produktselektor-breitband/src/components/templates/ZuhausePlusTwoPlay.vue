<template>
  <!-- TODO: Put content/components for existing and new customers into components -->
  <div id="panel-layout-two-play" class="flex flex-col md:flex-row h-full">
    <!-- TODO: Remove tabs menu when certain that radio buttons will be used in mobile too. -->
    <!-- <div
      v-if="!isExistingCustomer"
      class="mobile product-selector visible w-full md:invisible md:w-0"
    >
      <tabs-mobile />
    </div> -->
    <div v-if="!isExistingCustomer" class="main-content w-full md:w-2/3">
      <hero-router />
      <!-- <p class="font-medium">
        Aktives Produkt: {{ currentProduct }} Bestandskunde:
        {{ isExistingCustomer }}
      </p>
      <p class="font-medium">
        Experience flag = {{ $data.EXPERIENCE_VERSION }}
      </p> -->
      <div
        v-if="!isExistingCustomer"
        class="mobile product-selector block w-full md:hidden md:w-0"
      >
        <!-- TODO: Use a distinct mobile version for product selection? Else rename component. -->
        <!-- TODO: Check if this UI actually works on mobile devices or needs more padding for example. -->
        <sidebar-desktop />
      </div>

      <section>
        <h2>Deine Vorteile</h2>
        <!-- TODO: Turn article into/ use molecule 1/3 -->
        <article class="provider-change flex w-full flex-col lg:flex-row">
          <div class="article-text lg:w-1/2 w-full">
            <h3 class="hl-beta">Wechseln statt Warten</h3>
            <p>
              Wechsel schon heute zu uns und nutze unsere Produkte trotz
              laufendem DSL-Vertrag sofort. Bis zu 12 Monate für 0 €
              Grundgebühr.
            </p>
          </div>
          <div class="article-image bg-red-100 lg:w-1/2 w-full">
            placeholder solid color, TODO: Insert proper image.
          </div>
        </article>
        <!-- TODO: Turn article into/ use molecule 2/3 -->
        <article class="downgrade-option flex w-full flex-col lg:flex-row">
          <div
            class="article-image bg-red-100 lg:w-1/2 w-full order-2 lg:order-1"
          >
            placeholder solid color, TODO: Insert proper image.
          </div>
          <div class="article-text lg:w-1/2 sm:w-full order-1 lg:order-2">
            <h3 class="hl-beta">Downgrade-Garantie</h3>
            <p>
              Entscheide Dich ob du bis zum 7. Monat Deinen Tarif behalten
              möchtest oder in einen kleineren wechseln willst.
            </p>
          </div>
        </article>
        <!-- TODO: Turn article into/ use molecule 3/3 -->
        <article
          class="recommendation-premium flex w-full flex-col lg:flex-row"
        >
          <div class="article-text lg:w-1/2 w-full">
            <h3 class="hl-beta">
              Bis zu 180 € Prämie für Dich und Deinen Freund
            </h3>
            <p>Produkt auswählen. Empfehlung versenden. Über Prämie freuen.</p>
          </div>
          <div class="article-image bg-red-100 lg:w-1/2 w-full">
            placeholder solid color, TODO: Insert proper image.
          </div>
        </article>
      </section>
      <additional-options />
      <tariff-comparison />
      <tariff-details />
    </div>
    <!-- Make this div 'fixed' for a sticky sidebar menu. -->
    <div
      v-if="!isExistingCustomer"
      class="desktop product-selector hidden w-0 md:block md:w-1/3 right-0 top-10"
    >
      <sidebar-desktop />
    </div>
    <div
      v-if="isExistingCustomer"
      class="main-content existing-customer w-full"
    >
      <panels-existing-customer />
      <tiles-existing-customer />
    </div>
  </div>
</template>

<script>
import AdditionalOptions from "@/components/organisms/AdditionalOptions";
import TariffComparison from "@/components/organisms/TariffComparison";
import TariffDetails from "@/components/organisms/TariffDetails";
import SidebarDesktop from "@/components/organisms/productselection/SidebarDesktop";
// import TabsMobile from "@/components/organisms/productselection/TabsMobile";
import PanelsExistingCustomer from "@/components/organisms/PanelsExistingCustomer";
import TilesExistingCustomer from "@/components/organisms/TilesExistingCustomer";
import HeroRouter from "@/components/organisms/HeroRouter";

export default {
  name: "LayoutIntegrator",
  components: {
    AdditionalOptions,
    TariffComparison,
    TariffDetails,
    SidebarDesktop,
    // TabsMobile,
    PanelsExistingCustomer,
    TilesExistingCustomer,
    HeroRouter
  },
  computed: {
    isExistingCustomer() {
      return this.$store.getters.isExistingCustomer;
    },
    currentProduct() {
      return this.$store.getters.getActiveProduct[0];
    }
  }
};
</script>
