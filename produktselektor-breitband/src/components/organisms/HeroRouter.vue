<template>
  <div class="product-hero-module">
    <p class="hero-module-headline">Deine Internet &amp; Telefon Flatrate</p>
    <div class="flex-grid">
      <div class="product-features">
        <ul>
          <li>
            <span class="stickyTable-check"></span>Highspeed WLAN-Kabelrouter
            inklusive
          </li>
          <li>
            <span class="stickyTable-check"></span>Sehr schnelles Internet plus
            Telefonie-Flatrate ins deutsche Festnetz
          </li>
          <li>
            <span class="stickyTable-check"></span>Einfache Installation und
            Bedienung
          </li>
        </ul>
        <div class="product-badges">
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/red-dot-design-award.svg"
            alt="red-dot-design-award"
          />
          <!-- <img src="@/assets/router_incl_badge.svg" alt="free-wifi-router" /> -->
        </div>
        <p class="open-layer" @click="openOverlay">
          Details zur Vodafone Station (TODO: Use on plus icon instead of text)
          <span class="info-icon"></span>
        </p>
      </div>
      <div class="router-image">
        <img
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/vodafone-station.png"
          alt="Router Produktabbildung"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openOverlay() {
      this.$store.commit("setOverlayContent", {
        headline: " ",
        copy: `
      <p class="h1">Die Vodafone Station</p>
      <p class="h2">Unser WLAN-Kabelrouter für ein noch besseres Internet-Erlebnis</p>
      <div class="flex row">
      <ul>
        <li><span class="stickyTable-check"></span>Highspeed WLAN-Kabelrouter</li>
        <li><span class="stickyTable-check"></span>Für sehr schnelles Internet plus Telefonie</li>
        <li><span class="stickyTable-check"></span>Bereit für Gigabit-Geschwindigkeiten</li>
        <li><span class="stickyTable-check"></span>Neuester WLAN-Standard für mehr Geschwindigkeit</li>
        <li><span class="stickyTable-check"></span>Zuverlässige Internetverbindung durch DOCSIS 3.1 Technologie</li>
        <li><span class="stickyTable-check"></span>Besseres Gaming und Streaming durch Latenzzeiten-Optimierung</li>
        <li><span class="stickyTable-check"></span>4 Geräte über LAN-Kabel anschließbar</li>
        <li><span class="stickyTable-check"></span>1 Telefonleitung, Anschluss von 2 analogen Telefonen möglich</li>
        <li><span class="stickyTable-check"></span>Einfache Installation und Bedienung</li>
        <li><span class="stickyTable-check"></span>Preisgekröntes Design</li>
      </ul>
      <img src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/vodafone-station.png" />
      </div>
      `
      });
    }
  },
  computed: {
    standardRouter() {
      let tempBool = true;
      if (this.$store.getters.getBasket.indexOf("Telefon_Komfort_1") > 0) {
        tempBool = false;
      }
      return tempBool;
    }
  }
};
</script>

<style>
.product-hero-module {
  margin: 55px auto 60px auto;
}
.product-hero-module .flex-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 400px;
}
.product-hero-module .router-image {
  margin: 0 auto;
}
.hero-module-headline {
  font-family: Vodafone;
  font-size: 48px;
  line-height: 54px;
  color: #333333;
  margin-bottom: 70px;
}
.product-features {
  margin: 35px 0 55px 0;
}
.product-features ul li {
  font-size: 16px;
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;
}
.product-features ul li .stickyTable-check {
  left: 0;
  top: 0;
  border-bottom: 1px solid #428600;
  border-right: 1px solid #428600;
  width: 7px;
  height: 14px;
  transform: rotate(44deg);
}
.product-badges {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.open-layer {
  font-size: 16px;
  line-height: 30px;
  text-decoration: underline;
  cursor: pointer;
}
.open-layer .info-icon {
  content: " ";
  /* TODO: */
  /* background-image: url("../../../src/assets/info-i.svg"); */
  background-repeat: no-repeat;
  background-position: 100% 50%;
  width: 20px;
  height: 20px;
  display: inline-block;
  top: 5px;
  position: relative;
}

.router-switch ul {
  display: flex;
}
.router-switch ul li {
  border: 1px solid #cccccc;
  padding: 15px 44px;
}
.router-switch ul li:first-child {
  border-radius: 5px 0px 0px 5px;
}
.router-switch ul li:last-child {
  border-radius: 0px 5px 5px 0px;
}
.router-switch ul li.active {
  border: 1px solid #e60000;
  background-color: #e60000;
  color: #ffffff;
}
.router-switch ul li .router-name {
  font-family: VodafoneBD;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
}
.router-switch ul li .router-subline {
  font-family: VodafoneRG;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
}
</style>
