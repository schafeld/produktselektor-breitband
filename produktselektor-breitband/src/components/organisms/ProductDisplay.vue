<template>
  <div class="product-display">
    <p class="product-title">
      {{ product.title }}
    </p>
    <p class="product-speeds">
      Bis zu {{ product.download }} MBit/s im Download und {{ product.upload }}
      MBit/s im Upload
    </p>
    <p v-if="!product.monthOfPriceChange" class="only-class red">
      Dauerthaft nur
    </p>
    <div class="productrate price-details" v-if="product.monthOfPriceChange">
      <p class="left">
        <animated-number
          :value="Math.floor(product.productrateplans)"
          :round="true"
          :duration="300"
        />
      </p>
      <p class="right">
        <span class="cents">
          <animated-number
            :value="
              (product.productrateplans -
                Math.floor(product.productrateplans)) *
                100
            "
            :round="true"
            :duration="300"
          />
          €<sup @click="setOverlayLegaltext()">1</sup>
        </span>
        <span class="contract-duration">pro Monat</span>
      </p>
    </div>
    <span class="only-class red" v-if="product.monthOfPriceChange"
      >Die ersten {{ product.monthOfPriceChange - 1 }} Monate nur</span
    >
    <div class="price-details red">
      <p class="left">
        <animated-number
          :value="Math.floor(product.monthly_price)"
          :round="true"
          :duration="300"
        />
      </p>
      <p class="right">
        <span class="cents">
          <animated-number
            :value="
              (product.monthly_price - Math.floor(product.monthly_price)) * 100
            "
            :round="true"
            :duration="300"
          />
          €<sup @click="setOverlayLegaltext()">1</sup>
        </span>
        <span class="contract-duration">pro Monat</span>
      </p>
    </div>
    <a class="btn cta" :href="product.url"
      >Produkt ansehen
      <img
        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/arrow-left-up.svg"
    /></a>
    <transition name="fade">
      <div class="online-advantage-teaser" v-if="product.online_advantage">
        <img
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/deal-icon.svg"
        />
        <p class="value">
          <animated-number
            :value="product.online_advantage"
            :round="true"
            :duration="300"
          />€ <sup @click="setOverlayOALegaltext()">2</sup>
        </p>
        <p class="copy">Rechnungsgutschrift bei Online-Bestellung</p>
      </div>
      <div class="blue-teaser" v-else>
        <img
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/deal-icon.svg"
        />
        <p class="big-center">
          Nur für kurze Zeit!
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  computed: {
    product() {
      return this.$store.getters.getProduct(
        this.$store.getters.getActiveProduct
      );
    },
    price() {
      return this.$store.getters.getProduct(
        this.$store.getters.getActiveProduct
      ).monthly_price;
    }
  },
  methods: {
    setOverlayLegaltext() {
      this.$store.commit("setOverlayContent", {
        headline: this.product.title,
        copy: this.product.legaltext
      });
    },
    setOverlayOALegaltext() {
      this.$store.commit("setOverlayContent", {
        headline: "Rechtliche Hinweise zur Rechnungsgutschrift",
        copy: `In NRW, Hessen und Baden-Württemberg: Bei Online-Bestellung dieses Produktes erhältst Du als Neukunde, in dessen Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von uns vorhanden war, das angegebene Startguthaben, welches mit monatlichen wiederkehrenden Rechnungsbeträgen des promotionierten Produktes bei uns (nicht aber bei etwaigen Drittanbietern) ab dem 1. Vertragsmonat verrechnet wird. Die Verrechnung erfolgt automatisch, bis das Guthaben vollständig aufgebraucht ist. Das Guthaben kann nicht ausgezahlt werden und verfällt, wenn der Vertrag, für den das Guthaben abgeschlossen wurde, beendet wurde.<br>
                                                                        <br>
                                                                        In den übrigen Bundesländern: Nur für Neukunden bei Online-Bestellung von Red Internet & Phone 100 Cable (120 €), Red Internet & Phone 250 Cable (140 €), Red Internet & Phone 500 Cable (140 €) und Red Internet & Phone 1000 Cable (170 €). Die Gutschrift des Online-Vorteils erfolgt auf einer der ersten Rechnungen.<br>
                                                                        <br>
                                                                        Dies ist ein Angebot von: In NRW: Vodafone NRW GmbH, in Hessen: Vodafone Hessen GmbH & Co. KG, in Baden-Württemberg: Vodafone BW GmbH, alle Aachener Straße 746–750, 50933 Köln, in den übrigen Bundesländern: Vodafone Kabel Deutschland GmbH, Betastraße 6-8, 85774 Unterföhring`
      });
    }
  }
};
</script>

<style>
.product-display {
  padding-bottom: 20px;
}

.product-display .product-title {
  font-family: VodafoneBD;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
}

.product-display .product-speeds {
  font-family: VodafoneRG;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 12px;
}

.product-display .open-layer {
  padding-bottom: 19px;
}

.product-display .price-details {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  top: -10px;
  position: relative;
}
.only-class {
  font-size: 14px;
  line-height: 16px;
}
.product-display .productrate.price-details {
  padding-bottom: 0;
  margin-bottom: -10px;
}

.product-display .price-details .left {
  font-family: VodafoneBD;
  font-size: 76px;
  line-height: 89px;
}

.product-display .price-details .right {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-top: 8px;
}

.product-display .price-details .right .cents {
  font-family: VodafoneBD;
  font-size: 45px;
  line-height: 50px;
}

.product-display .price-details .right .cents sup {
  font-family: VodafoneRG;
  font-size: 12px;
  line-height: 22px;
  text-decoration-line: underline;
  position: relative;
  top: -30px;
  left: 5px;
  cursor: pointer;
}

.product-display .price-details .right .contract-duration {
  font-family: VodafoneRg;
  font-size: 14px;
  line-height: 22px;
  padding-left: 5px;
  position: relative;
  bottom: 3px;
}

#app .product-display .btn.cta {
  background: #ed0000;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  font-family: VodafoneBd;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 13px 0;
  margin: 0 0 30px 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#app .product-display .btn.cta img {
  align-self: flex-end;
  position: absolute;
  right: 10px;
}

.online-advantage-teaser {
  background: #007c92;
  padding: 12px 5px;
  display: grid;
  grid-template-columns: 50px 105px 130px;
  position: relative;
  overflow: hidden;
  max-height: 73px;
}

.online-advantage-teaser .value {
  font-family: VodafoneBD;
  font-size: 39px;
  line-height: 30px;
  color: #ffffff;
  top: 5px;
  position: relative;
}

.online-advantage-teaser .value sup {
  font-family: VodafoneRG;
  font-size: 12px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #ffffff;
  position: relative;
  top: -22px;
  left: -2px;
  cursor: pointer;
}

.online-advantage-teaser .copy {
  font-family: VodafoneBd;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  position: relative;
  top: 2px;
}

.online-advantage-teaser img {
  position: relative;
}

.blue-teaser {
  background: #007c92;
  padding: 22px 5px;
  max-height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: relative;
}
.blue-teaser img {
  position: absolute;
  left: 10px;
  top: 10px;
}
.blue-teaser .big-center {
  font-family: VodafoneBD;
  font-size: 25px;
  line-height: 18px;
  color: #ffffff;
}

.price-details {
  color: #424242;
}
.price-details.red,
.red {
  color: #e60000;
}
</style>
