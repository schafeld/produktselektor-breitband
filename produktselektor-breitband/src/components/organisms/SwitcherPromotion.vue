<template>
  <div class="wechselvorteil-promotion">
    <div class="container">
      <div class="textarea">
        <div class="headline">Wechseln statt warten</div>
        <div class="subline">
          Nutz Red Internet & Phone trotz<br />
          laufendem DSL-Vertrag sofort.
        </div>
        <div class="cta">
          <a
            href="https://zuhauseplus.vodafone.de/internet-telefon/wechseln.html"
            >Mehr erfahren
            <img
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/arrow-left-up.svg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="chameleon">
        <div class="bubble">
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/bubble_wechselvorteil.svg"
            alt=""
          />
        </div>
        <div class="animal">
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/visual_wechselvorteil.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wechselvorteil-promotion {
  background: #e60000;
}
.wechselvorteil-promotion .container {
  max-width: 1280px;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 0 auto;
}
.wechselvorteil-promotion .textarea {
  color: #ffffff;
  font-family: VodafoneRg;
  max-width: 400px;
  width: 100%;
  padding: 70px 0 50px 0;
  margin: 0 17px;
}
.wechselvorteil-promotion .textarea .headline {
  font-size: 36px;
  line-height: 45px;
  padding-bottom: 34px;
}
.wechselvorteil-promotion .textarea .subline {
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 19px;
}
.wechselvorteil-promotion .textarea .cta {
  background: #ffffff;
  box-shadow: none;
  max-width: 204px;
  padding: 0 20px;
}
.wechselvorteil-promotion .textarea .cta a {
  text-decoration: none;
  font-family: VodafoneBd;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #3a3a3a;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
}
.wechselvorteil-promotion .chameleon {
  position: relative;
}
.wechselvorteil-promotion .chameleon .bubble {
  position: absolute;
  left: 50%;
  z-index: 2;
  padding: 30px 0 0 0;
  top: 0%;
}
.wechselvorteil-promotion .chameleon .animal {
  position: absolute;
  left: 10%;
  bottom: 0;
  z-index: 1;
}
.wechselvorteil-promotion .chameleon .animal img {
  width: 100%;
  padding: 30px 0 0 0;
  height: auto;
}
@media screen and (max-width: 879px) {
  .wechselvorteil-promotion .container {
    grid-template-columns: 100%;
  }
  .wechselvorteil-promotion .chameleon .animal {
    position: relative;
  }
  .wechselvorteil-promotion .chameleon .animal {
    left: 25px;
  }
}
</style>
