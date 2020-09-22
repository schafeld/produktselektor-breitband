<template>
  <div class="product-selector">
    <p class="h4">
      Wähle Deine Download-Geschwindigkeit
    </p>
    <div class="speed-recommendation">
      <a
        class="open-layer"
        @click="
          $store.commit('setOverlayContent', { headline: 'Tarif', copy: '' })
        "
      >
        Wieviel Mbit/s brauche ich? <span class="info-icon"></span>
      </a>
    </div>
    <ul class="bb-selector">
      <li
        v-for="(tarif, index) in tarifs"
        :key="index"
        :class="{ checked: checked[index] }"
        @click="toggle(index)"
      >
        <img
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/radio-checked.svg"
          v-if="checked[index]"
        />
        <img
          src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/radio-unchecked.svg"
          v-else
        />
        <span class="speed-text">
          {{ tarif }} Mbit/s
          <span v-if="tarif === '1000'"><strong>CableMax</strong></span>
          <span class="flag--inline" v-if="tarif === '1000'"
            ><b>Unser Tipp</b></span
          >
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
      tarifs: []
    };
  },
  methods: {
    trackTabInteraction(skuArray, enviroment) {
      console.log("TODO: track tab click");
      console.log(skuArray + enviroment);
    },
    toggle(index) {
      let tempIndex = this.checked.indexOf(true);
      if (index != tempIndex) {
        if (tempIndex > -1) {
          this.checked.splice(tempIndex, 1, false);
        }
        this.checked.splice(index, 1, true);
        this.$router.push(this.portfolio[index].url);
      }
      this.trackTabInteraction(["2P_RIP_50_1"], "dev");
    }
  },
  props: {
    currentProduct: {
      type: Array,
      required: true
    },
    portfolio: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // Simply reverse portfolio if order of selection radio buttons should be reverted again.
    // this.portfolio.reverse().forEach(product => {
    // TODO(?): If this app should become accessible through deeplinks (i.e. route paths direct entry),
    // or be used elsewhere then homepage only, then this radio button selection
    // will have to be refactored (selection doesn't match manual path entry).
    this.portfolio.forEach(product => {
      if (product.skus[0] === this.currentProduct[0]) {
        this.checked.push(true);
      } else {
        this.checked.push(false);
      }
      this.tarifs.push(product.download);
    });
  }
};
</script>

<style>
.product-selector {
  padding-bottom: 60px;
}
.product-selector .h4 {
  font-family: VodafoneBd;
  font-size: 16px;
  line-height: 30px;
}
.product-selector .open-layer {
  font-family: VodafoneRg;
  font-size: 14px;
  line-height: 30px;
  text-decoration: underline;
}
.product-selector .open-layer .info-icon {
  background: url("https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/info-i.svg");
  width: 22px;
  height: 22px;
  display: inline-block;
}

.bb-selector {
  padding-top: 10px;
}
.bb-selector li {
  position: relative;
  padding-bottom: 10px;
}
.bb-selector li .speed-text {
  cursor: pointer;
}
.bb-selector li img {
  position: absolute;
  top: 2px;
}
.speed-text {
  padding-left: 30px;
}
.flag--inline {
  position: relative;
  background: #428600;
  font-size: 14px;
  padding: 3px 10px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
  line-height: 24px;
  position: absolute;
  text-align: center;
  z-index: 1;
}
.flag--benefit:before {
  top: 30px;
}
.flag:before {
  border-color: #5e2750 transparent transparent;
  border-style: solid;
  border-width: 6px 6px 6px 0;
  content: "";
  height: 0;
  position: absolute;
  right: 0;
  width: 0;
}
</style>
