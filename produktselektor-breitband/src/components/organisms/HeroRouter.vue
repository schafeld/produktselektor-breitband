<template>
  <div class="product-hero-module">
    <h2 class="hero-module-headline">Highspeed-Internet per Kabel</h2>
    <h3 class="hero-module-subline">Red Internet &amp; Phone Cable</h3>
    <div class="flex-grid">
      <div class="product-features">
        <h3 class="feature-list">
          Die Internet &amp; Telefon-Flatrate für Dein Zuhause
        </h3>
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
          <div class="design-award">
            <img
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/red-dot-design-award.svg"
              alt="Red Dot Design Award"
            />
          </div>
          <div class="product-feature">
            <img
              @click="openOverlay('cable')"
              class="open-layer icon-plus infolayer cable"
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/plus-button.svg"
            />
            <img
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/internet-cable.png"
              alt="Internet Kabel"
            />
          </div>
        </div>
      </div>
      <div class="router-image">
        <img
          @click="openOverlay('router')"
          class="open-layer icon-plus infolayer router"
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/plus-button.svg"
        />
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
    openOverlay(overlay) {
      if (overlay === "router") {
        this.$store.commit("setOverlayContent", {
          headline: " ",
          copy: `
        <h3>Die Vodafone Station</h3>
        <h4>Unser WLAN-Kabelrouter für ein noch besseres Internet-Erlebnis</h4>
        <div class="flex row product-features overlay">
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
        <img class="hidden md:block" src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/vodafone-station.png" />
        </div>
        `
        });
      } else if (overlay === "cable") {
        this.$store.commit("setOverlayContent", {
          headline: " ",
          copy: `
          <h3>Auf das Kabel kommt es an!</h3>
          <p class="text-intro">Kabel und DSL sind unterschiedliche Technologien... TODO: Add text</p>
          <div class="text-wrapper flex flex-col md:flex-row">
            <div class="text-body features-dsl">
            <p>DSL bla bla bla</p>
            <p>DSL bla bla bla</p>
            <p>DSL Bild</p>
            <p>DSL bla bla bla</p>
            <p>DSL bla bla bla</p>
            </div>
            <div class="text-body features-cable">
            <p>Kabel bla bla bla</p>
            <p>Kabel bla bla bla</p>
            <p>Kabel Bild</p>
            <p>Kabel bla bla bla</p>
            <p>Kabel bla bla bla</p>
            </div>
          </div>
          `
        });
      }
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
.product-hero-module .flex-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 400px;
}
.hero-module-headline {
  font-family: Vodafone;
  font-size: 48px;
  line-height: 54px;
  color: #333333;
  margin-bottom: 70px;
}
.product-features {
  margin: 25px 0 0 20px;
}
.product-features ul li {
  font-size: 16px;
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;
  margin-left: 20px;
}
.product-features ul li .stickyTable-check {
  position: absolute;
  display: inline-block;
  left: 5px;
  top: 4px;
  border-bottom: 1px solid #428600;
  border-right: 1px solid #428600;
  width: 7px;
  height: 14px;
  transform: rotate(44deg);
}
.product-badges {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
}
.product-badges img {
  margin: 0 auto 15px;
  width: auto;
}
.open-layer {
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
/* TODO: Improve positioning of icons */
img.icon-plus.infolayer.router {
  position: relative;
  top: 130px;
  left: 85px;
}
img.icon-plus.infolayer.cable {
  position: absolute;
  left: 40px;
}
img.icon-plus.infolayer.cable {
  top: 210px;
  position: relative;
  left: -50px;
}
h2.hero-module-headline,
.overlay-box h3 {
  font-family: "VodafoneLt";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 41px;
  text-align: center;
  margin: 0 0 10px 0;
  color: var(--vodafone-color-gray);
}
h3.hero-module-subline,
.overlay-box h4 {
  font-family: "VodafoneRg";
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: var(--vodafone-color-gray);
}
h3.feature-list {
  margin: 0 0 20px 20px;
}
@media (max-width: 768px) {
  .sidebar-desktop {
    margin: 0 auto;
  }
}
/* Kabel/DSL Overlay */
.text-intro {
  margin: 2%;
}
.text-body {
  width: 46%;
  margin: 2%;
}
.text-body.features-cable p,
.text-body.features-dsl p {
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .text-body {
    width: 96%;
    margin: 2%;
  }
}
</style>
