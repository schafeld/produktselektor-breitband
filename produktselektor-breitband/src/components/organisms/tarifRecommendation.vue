<template>
  <div class="recommendation-overlay">
    <h1 class="h1">Bandbreiten-Empfehlung</h1>
    <h3 class="h2">Wie viele der folgenden Geräte hast Du im Haushalt?</h3>
    <div class="flexbox-row">
      <div class="flexbox-cell flexbox-cell--w50">
        <div
          class="flexbox-row counter-category"
          v-for="(category, index) in categories[0]"
          :key="index"
        >
          <counter-element
            :name="category.title"
            :subtitle="category.subtitle"
            v-on:remove="deviceCount--"
            v-on:add="deviceCount++"
          />
        </div>
      </div>
      <div class="flexbox-cell flexbox-cell--w50 flexbox-cell--vDivider">
        <div
          class="flexbox-row counter-category"
          v-for="(category, index) in categories[1]"
          :key="index"
        >
          <counter-element
            :name="category.title"
            :subtitle="category.subtitle"
            v-on:remove="deviceCount--"
            v-on:add="deviceCount++"
          />
        </div>
      </div>
    </div>
    <div class="divider mb--l"></div>
    <div class="flexbox-row textCenter mb--m">
      <div class="flexbox-cell flexbox-cell--w33">
        <p class="article mb--xs">
          <b>Anzahl der Geräte</b>
        </p>
        <h2>
          <b class="counter devices">{{ deviceCount }}</b>
        </h2>
      </div>
      <div
        class="flexbox-cell flexbox-cell--w33 flexbox-cell--vDivider"
        v-if="minProduct.download != advisedProduct.download"
      >
        <p class="article mb--xs">
          <b>Mindestbandbreite</b>
        </p>
        <h2>
          <b class="redText"
            ><span class="speed recommendation minimum">{{
              minProduct.download
            }}</span>
            Mbit/s</b
          >
        </h2>
      </div>
      <div class="flexbox-cell flexbox-cell--w33 flexbox-cell--vDivider">
        <p class="article mb--xs">
          <b>Empfohlene Bandbreite</b>
        </p>
        <h2>
          <b class="redText"
            ><span class="speed recommendation optimum">{{
              advisedProduct.download
            }}</span>
            Mbit/s</b
          >
        </h2>
      </div>
    </div>
    <div class="flexbox-row textCenter">
      <div class="flexbox-cell flexbox-cell--w33" style="color:#ffffff">
        empty
      </div>
      <div
        class="flexbox-cell flexbox-cell--w33"
        v-if="minProduct.download != advisedProduct.download"
      >
        <kiss-cta color="red" v-on:buttonClick="goToOffer(minProduct)"
          >Zum Angebot</kiss-cta
        >
      </div>
      <div class="flexbox-cell flexbox-cell--w33">
        <kiss-cta color="red" v-on:buttonClick="goToOffer(advisedProduct)"
          >Zum Angebot</kiss-cta
        >
      </div>
    </div>
  </div>
</template>

<script>
import kissCta from "@/components/atoms/kissCta";
import counterElement from "@/components/molecules/counterElement";
export default {
  components: {
    kissCta,
    counterElement
  },
  data() {
    return {
      deviceCount: 0,
      categories: [
        [
          {
            title: "Smartphones"
          },
          {
            title: "Tablets "
          },
          {
            title: "Notebooks / Laptops "
          },
          {
            title: "Desktop-PCs"
          }
        ],
        [
          {
            title: "Fernseher"
          },
          {
            title: "Smart TV / Apple TV / Amazon Firestick"
          },
          {
            title: "Spielkonsole",
            subtitle: "(z.B. Playstation, Xbox, Switch)"
          },
          {
            title: "Sonstige Geräte",
            subtitle: "(z.B. Ebooks, Alexa, etc.)"
          }
        ]
      ]
    };
  },
  computed: {
    minProduct() {
      let helperProduct = { download: "50" };
      let tempValue = "";
      if (this.deviceCount < 4) {
        tempValue = this.$store.getters.getBBProducts[3].skus[0];
      } else if (this.deviceCount < 10) {
        tempValue = this.$store.getters.getBBProducts[2].skus[0];
      } else if (this.deviceCount < 15) {
        tempValue = this.$store.getters.getBBProducts[1].skus[0];
      } else if (this.deviceCount >= 15) {
        tempValue = this.$store.getters.getBBProducts[0].skus[0];
      }
      if (tempValue) {
        helperProduct = this.$store.getters.getProduct(tempValue);
      }
      return helperProduct;
    },
    advisedProduct() {
      let helperProduct = { download: "250" };
      let tempValue = "";
      if (this.deviceCount < 4) {
        tempValue = this.$store.getters.getBBProducts[2].skus[0];
      } else if (this.deviceCount < 10) {
        tempValue = this.$store.getters.getBBProducts[1].skus[0];
      } else if (this.deviceCount >= 10) {
        tempValue = this.$store.getters.getBBProducts[0].skus[0];
      }
      if (tempValue) {
        helperProduct = this.$store.getters.getProduct(tempValue);
      }
      return helperProduct;
    }
  },
  methods: {
    goToOffer(product) {
      if (this.$store.getters.getActiveProduct[1] === "HRZ_TV_0420_1") {
        this.$router.push(product.url);
        this.$store.commit("setOverlayContent", { headline: "", copy: "" });
      } else {
        this.$router.push(product.url);
        this.$store.commit("setOverlayContent", { headline: "", copy: "" });
      }
      this.$emit("goToOffer");
    }
  }
};
</script>
<style>
.counter-button--minus {
  line-height: 52px;
}
.counter-button {
  background-color: #f4f4f4;
  color: #888;
  cursor: pointer;
  font-size: 40px;
  -webkit-touch-callout: none;
  user-select: none;
}
.counter {
  display: inline-block;
  height: 55px;
  text-align: center;
  vertical-align: top;
  width: 55px;
}
.counter-number {
  border: 1px solid #ebebeb;
  font-size: 32px;
  line-height: 56px;
}
.counter {
  display: inline-block;
  height: 55px;
  text-align: center;
  vertical-align: top;
  width: 55px;
}
.counter-button--plus {
  line-height: 56px;
}
.counter-button {
  background-color: #f4f4f4;
  color: #888;
  cursor: pointer;
  font-size: 40px;
  -webkit-touch-callout: none;
  user-select: none;
}
.counter {
  display: inline-block;
  height: 55px;
  text-align: center;
  vertical-align: top;
  width: 55px;
}

.counter-categoryName {
  border-top: 1px solid #ebebeb;
  padding-top: 5px;
}
.flexbox-cell--w50 {
  width: 50%;
}
.flexbox-cell {
  position: relative;
  float: left;
}
.article {
  font-size: 16px;
  line-height: 22px;
}
.counter-category {
  border-collapse: collapse;
  margin-bottom: 10px;
}

.flexbox-cell--w50 {
  width: 50%;
}
.flexbox-cell--vDivider {
  border-left: 1px solid #e3e3e3;
}
.flexbox-cell {
  display: table-cell;
  position: relative;
  vertical-align: top;
}

.mb--l {
  margin-bottom: 30px;
}
.divider {
  border-top: solid 1px #ccc;
  clear: both;
  margin: 10px 0;
  margin-bottom: 10px;
}
.flexbox-cell--w33 {
  width: 33%;
}
.flexbox-row {
  border-collapse: separate;
  border-spacing: 20px 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.textCenter {
  text-align: center;
}
.flexbox-cell--vDivider {
  border-left: 1px solid #e3e3e3;
}
.flexbox-cell--w50 {
  width: 50%;
}
.flexbox-cell {
  display: table-cell;
  position: relative;
  vertical-align: top;
}
.mb--xs {
  margin-bottom: 5px;
}
.article {
  font-size: 16px;
  line-height: 22px;
}
.redText {
  color: #e60000;
}
b,
strong {
  font-weight: bold;
}
h2,
.hl-beta {
  color: #333;
  font-family: VodafoneLt, arial, helvetica, sans-serif;
  font-size: 30px;
  line-height: 34px;
}
</style>
