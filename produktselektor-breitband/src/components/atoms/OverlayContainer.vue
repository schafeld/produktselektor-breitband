<template>
  <div
    class="overlay-container"
    :class="{ open: $store.getters.getOverlayContent.headline !== '' }"
  >
    <div
      class="overlay-box"
      v-if="$store.getters.getOverlayContent.copy !== ''"
    >
      <img
        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/overlay-close-button.svg"
        class="close-button"
        @click="$store.commit('setOverlayContent', { headline: '', copy: '' })"
      />
      <p
        class="
        overlay-headline"
      >
        {{ $store.getters.getOverlayContent.headline }}
      </p>
      <p v-html="$store.getters.getOverlayContent.copy"></p>
    </div>
    <div class="overlay-box" v-else>
      <img
        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/overlay-close-button.svg"
        class="close-button"
        @click="$store.commit('setOverlayContent', { headline: '', copy: '' })"
      />
      <div class="desktop-view">
        <tarif-recommendation />
      </div>
      <div class="mobile-view">
        <tarif-recommendation-mobile-view />
      </div>
    </div>
  </div>
</template>

<script>
import tarifRecommendation from "@/components/organisms/tarifRecommendation.vue";
import tarifRecommendationMobileView from "@/components/organisms/tarifRecommendationMobileView.vue";

export default {
  components: {
    tarifRecommendation,
    tarifRecommendationMobileView
  },
  computed: {
    headline() {
      return "Rechtliche Hinweise zum Tarif";
    },
    copy() {
      return "Ab dem 25. Monat gilt der Preis von 29,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf, ob das Produkt bei Dir verfügbar ist.";
    }
  }
};
</script>

<style>
.overlay-container {
  display: none;
}
.overlay-container.open {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  top: 0;
}
.overlay-container .overlay-box {
  overflow-y: auto;
  max-height: 80%;
  background: #ffffff;
  height: auto;
  width: 100%;
  max-width: 890px;
  display: block;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  font-family: VodafoneRg;
}
.overlay-container .overlay-box .overlay-headline {
  font-family: VodafoneLT;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #e60000;
  padding-bottom: 15px;
}
.overlay-container .close-button {
  position: absolute;
  left: calc(100% - 45px);
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-top: 5px;
}
.overlay-container ul li {
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;
}
.overlay-container ul li .stickyTable-check {
  left: 0;
  top: 2px;
}

.overlay-container ul li {
  font-family: VodafoneRg;
  font-size: 14px;
  line-height: 21px;
}
.overlay-container ul li strong {
  font-family: VodafoneBD;
  font-size: 16px;
  line-height: 24px;
}

.mobile-view {
  display: none;
}
.desktop-view {
  display: block;
}
@media (max-width: 768px) {
  .mobile-view {
    display: block;
  }
  .desktop-view {
    display: none;
  }
  .overlay-container .overlay-box {
    margin: 0;
    padding: 0;
  }
}
</style>
