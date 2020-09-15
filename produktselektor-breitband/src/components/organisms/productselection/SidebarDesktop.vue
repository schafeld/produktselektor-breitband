<template>
  <!-- TODO: Refactor Vodafone CSS to pure Tailwind CSS? -->
  <!-- In Vodafone/ZuhausePlus: class="flexbox-cell flexbox-cell--w20" -->
  <div class="sidebar-desktop">
    <div class="productCart productCart--bright">
      <div class="mb--m">
        <product-selector
          :currentProduct="currentProduct"
          :portfolio="$store.getters.getBBProducts"
        />
        <product-display />
      </div>
    </div>
  </div>
</template>

<script>
import ProductSelector from "@/components/organisms/productselection/ProductSelector.vue";
import ProductDisplay from "@/components/organisms/ProductDisplay.vue";
export default {
  methods: {
    trackTabInteraction() {
      console.log("TODO: Track properly");
    }
  },
  computed: {
    isTopseller() {
      // TODO: Make topseller a store attribute?
      return (
        this.selectedTariff === "2P_RIP_250_1" ||
        this.$store.getters.getActiveProduct[0] === "2P_RIP_250_1"
      );
    },
    currentProduct() {
      return this.$store.getters.getActiveProduct;
    }
  },
  components: {
    ProductSelector,
    ProductDisplay
  }
};
</script>

<style>
.sidebar-desktop {
  max-width: 420px;
  padding: 0 44px;
}
/* Styles taken from Vodafone template at https://zuhauseplus.vodafone.de/internet-telefon/kabel/?product=kip1000-50mbit-bsit&icmp=festnetz:it */
/* TODO: Clean up. May contain superfluous classes for this component.  */
.contentWrapper {
  margin: 0 auto;
  padding: 0 10px 1px;
  position: relative;
  width: 950px;
}
.contentWrapper--bgBsit {
  background-image: url(https://zuhauseplus.vodafone.de/static/img/stages/img-stage-ip-cable.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
b {
  font-weight: normal;
  font-family: "VodafoneBd", "Vodafone", arial, helvetica, sans-serif;
}
.hl-giga {
  font-weight: normal;
  font-family: "VodafoneRg", "Vodafone", arial, helvetica, sans-serif;
  font-size: 65px;
  line-height: 72px;
}
h2 {
  font-size: 30px;
  line-height: 34px;
  font-family: "VodafoneLt", "Vodafone", arial, helvetica, sans-serif;
}
h2.text--colorSecondary {
  color: #ffffff;
}

.headline-main {
  margin-bottom: 40px;
}
.mb--s {
  margin-bottom: 10px;
}

.textCenter {
  text-align: center;
}

.flexbox {
  margin: 0 0 40px -10px;
  min-height: 520px;
}
.flexbox-row {
  border-collapse: separate;
  border-spacing: 20px 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.flexbox-cell {
  display: table-cell;
  position: relative;
  vertical-align: top;
}

.infobubble {
  background-color: #ccc;
  border: solid 1px #fff;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Vodafone", arial, helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  height: 18px;
  line-height: 1;
  margin-left: 2px;
  margin-top: -4px;
  text-align: center;
  vertical-align: middle;
  width: 18px;
}
.infobubble:before {
  content: "i";
  cursor: pointer;
  left: 0;
  position: relative;
  top: 3px;
}

/* layout stage left */
.flexbox-cell--w10 {
  width: 10%;
}

.mb--xs {
  margin-bottom: 5px;
}
.mb--xs.hl-delta {
  color: #000000;
}
.mb--m {
  margin-bottom: 20px;
}
.mb--xxl {
  margin-bottom: 50px;
}

/* layout center stage */
.flexbox-cell--w25 {
  width: 25%;
}

/* layout stage right */
.flexbox-cell--w15 {
  width: 15%;
}

/* .productCart--bright {
  background: #fff;
  border: solid #ccc 1px;
  color: #000;
}
.productCart {
  border: solid #979797 1px;
  padding: 20px;
  position: relative;
  text-decoration: none;
} */
.productCart {
  position: relative;
}
.productCart a {
  color: black;
}

.flag--benefit {
  background: #428600;
  font-size: 14px;
  min-width: 148px;
  padding: 3px 10px;
  top: -20px;
  right: -6px;
}
.flag {
  color: #fff;
  font-weight: bold;
  line-height: 24px;
  position: absolute;
  text-align: center;
  z-index: 1;
}

.productCart-label--bandwidth {
  padding: 2px 0 3px 28px;
}
.productCart-label {
  background: url(https://zuhauseplus.vodafone.de/static/img-bg/radio-off.png) 0
    2px no-repeat;
  cursor: pointer;
  display: inline-block;
  padding: 2px 30px 3px 28px;
  text-decoration: none;
}
.productCart-label.isSelected {
  background-image: url(https://zuhauseplus.vodafone.de/static/img-bg/radio-on.png);
}

h4,
.hl-delta {
  color: #ffffff;
  font-family: "VodafoneRg", arial, helvetica, sans-serif;
  font-size: 16px;
  line-height: 20px;
}
.productCart-price {
  float: none;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 4px;
}
.productCart-value {
  font-family: "VodafoneRg", arial, helvetica, sans-serif;
  font-size: 45px;
  line-height: 40px;
  margin-top: 3px;
}
p.productCart-value {
  margin-bottom: 0;
}
.productCart-value--currency {
  font-size: 30px;
}
.productCart-duration {
  display: inline-block;
  font-size: 14px;
  line-height: 10px;
  margin-left: 5px;
}

.text--colorPrimary {
  color: #e60000;
}

.productCart-durationFn {
  margin-left: 0;
  vertical-align: 0;
}
.footnote {
  color: #333;
  display: inline-block;
  font-family: "Vodafone", arial, helvetica, sans-serif;
  font-weight: 400;
}
/* Caution: .footnote interferes with tv-staion overlays from Dcomm.  */
span.tooltip.footnote {
  background-color: #f4f4f4;
  border: solid 1px #ccc;
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 16px;
}

.productCart-btn {
  margin-bottom: 0;
}
.productCart-btn .btn {
  float: none;
  line-height: 14px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}
.productCart-btn .btn.btn--large a {
  font-size: 16px;
}
.productCart-btn .btn.btn--large a:hover {
  text-decoration: none;
}
.productCart-btn .btn.btn--large:hover {
  background-color: #5e2750;
}
.btn--large a {
  font-size: 20px;
  padding: 4px 20px;
}
.productCart-btn .btn {
  background-color: #9c2aa0;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  height: auto;
}
.btn a {
  color: #ffffff;
  display: block;
  font-family: "VodafoneBd", arial, helvetica, sans-serif;
  font-weight: bold;
  text-decoration: none;
}
.btn.white-btn a {
  color: #333333;
}
.btn--order:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.btn-outline {
  display: inline-block;
  padding: 0 2px;
}
.btn--transparent {
  background-color: transparent;
  border: 1px solid #ccc;
  -webkit-box-shadow: none;
  box-shadow: none;
  min-width: 180px;
  text-align: center;
}
.btn--transparent a {
  color: #fff;
  font-family: "Vodafone", arial, helvetica, sans-serif;
  font-weight: normal;
}
.btn--transparent a:hover {
  text-decoration: none;
}
.btn--smallFontSize a {
  font-size: 14px;
}

small {
  font-size: 12px;
}

svg.stopper-online-advantage.three-play {
  position: absolute;
  top: 30px;
  right: 30px;
}

p.show-modal-link {
  text-decoration: underline;
  margin-top: 0px;
  cursor: pointer;
}

/* tooltips vodafone adaptations */
ol.orderList.orderList--devices {
  margin: 0 0 10px;
}
h3.hl-gamma.redText.mb--m {
  margin: 0;
}

/* 3play specific styles */
h1.hl-mega {
  line-height: 50px;
  font-size: 45px;
  color: #ffffff;
}
h2.text--colorSecondary {
  font-weight: 600;
  margin-bottom: 50px;
}
.flexbox-cell.flexbox-cell--w20 {
  /* 21% instead of 20% to make tv-station info text fit on one line. */
  width: 21%;
}
span.productCart-label.productCart-label--bandwidth {
  white-space: nowrap;
}
.productCart-btn a {
  white-space: nowrap;
}

span.forced-one-liner {
  white-space: nowrap;
}

span.tooltip.horizon-hd-recorder,
span.tooltip.horizon-go-free {
  bottom: -4px;
  position: relative;
}

button.linkStyle.js_dialog-open.btn-tv-hardware,
button.linkStyle.js_dialog-open.btn-tv-stations {
  font-family: VodafoneRg, Vodafone, arial, helvetica, sans-serif;
  font-weight: normal;
}

h3.hl-gamma.redText.mb--m {
  margin-bottom: 15px;
}

a.product-info {
  text-decoration: underline;
}
</style>
