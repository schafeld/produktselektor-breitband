<template>
  <!-- TODO: Fix responsive layout -->
  <div
    class="tiles-existing-customer vodafone-teaser-module-collection flex flex-col md:flex-row"
  >
    <div class="teaser-module-box gigaspeed">
      <div class="textarea">
        <div class="headline">Gigaspeed</div>
        <div class="copy">
          Surfe mit bis zu 1000 Mbit/s im Kabel-Glasfasernetz*. Bis zu 12
          Freimonate.Red Internet &amp; Phone 1000 Cable:
        </div>
        <div class="price-module">
          <div class="left">19,99 €</div>
          <div class="right">
            <span>pro Monat</span>
            <span class="smaller">ab dem 7. Monat 49,99 €</span>
          </div>
        </div>
        <div class="cta">
          <a href="/">Bereit für die Zukunft?</a>
        </div>
      </div>
    </div>
    <div class="teaser-module-box gigakombi">
      <div class="textarea dark">
        <div class="headline">
          Gemeinsam günstiger
        </div>
        <div class="copy">
          Kombiniere Deinen Unitymedia-Tarif lässt mit einem Vodafone
          Red-Mobilfunk-Tarif und spar dabei
        </div>
        <div class="price-module">
          <span class="bottom">bis zu</span>
          <span class="price">10 €</span>
          <span class="bottom">pro Monat</span>
        </div>
        <div class="cta">
          <a href="/">Möglichkeiten entdecken</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vodafone-teaser-module-collection {
  margin: 0 auto;
  max-width: 1280px;
}
.teaser-module-box {
  max-width: 638px;
  max-height: 570px;
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 5px;
}
.teaser-module-box.gigaspeed {
  background: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/bk-teaser-01.png);
  background-size: cover;
}
.teaser-module-box.gigakombi {
  background: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/bk-teaser-02.png);
  background-size: cover;
}
.teaser-module-box .textarea {
  background: rgba(255, 255, 255, 0.7);
  padding: 28px 30px 30px 30px;
  color: #333333;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  height: 100%;
  max-height: 235px;
}
.teaser-module-box .textarea.dark {
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
}
.teaser-module-box .textarea .headline {
  font-family: VodafoneRg;
  font-size: 30px;
  line-height: 34px;
  padding-bottom: 6px;
}
.teaser-module-box .textarea .copy {
  font-family: VodafoneRg;
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 13px;
}
.teaser-module-box .textarea .price-module {
  display: flex;
  justify-content: center;
  padding-bottom: 22px;
}
.teaser-module-box .textarea .price-module .bottom {
  position: relative;
  bottom: -25px;
  padding: 0 5px;
}
.teaser-module-box .textarea .price-module .left {
  font-family: VodafoneRg;
  font-size: 45px;
  line-height: 50px;
  color: #ff0000;
  padding-right: 11px;
}
.teaser-module-box .textarea .price-module .price {
  font-family: VodafoneRg;
  font-size: 45px;
  line-height: 56px;
  color: #ffffff;
}
.teaser-module-box .textarea .price-module .right {
  display: flex;
  flex-direction: column;
  font-family: VodafoneRg;
  font-size: 18px;
  line-height: 18px;
  text-align: left;
  top: 5px;
  position: relative;
}
.teaser-module-box .textarea .price-module .right .smaller {
  font-size: 14px;
}
.teaser-module-box .textarea .cta {
  background: #ffffff;
  box-shadow: none;
  max-width: 204px;
  margin: 0 auto;
  padding: 13px 20px;
}
.teaser-module-box .textarea .cta a {
  text-decoration: none;
  font-family: VodafoneRg;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #3a3a3a;
}
</style>
