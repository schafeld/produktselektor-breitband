<template>
  <div class="bk-routing-panels">
    <div class="headline">Unser Portal für Unitymedia-Bestandskunden</div>
    <div class="subline">Wir bleiben an Deiner Seite</div>
    <div class="panel-collection flex flex-col md:flex-row">
      <div class="panel">
        <div class="icon">
          <img
            class="icon my-vodafone"
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/my-vodafone-mid.svg"
          />
        </div>
        <div class="headline">Unitymedia-Login</div>
        <div class="subline">
          Übersicht Deiner Daten, Tarife, Rechungen und mehr
        </div>
        <div class="cta">
          <a href="/">
            Zum Login
            <img
              class="icon arrow"
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/arrow-right.svg"
            />
          </a>
        </div>
      </div>
      <div class="panel">
        <div class="icon">
          <img
            class="icon engineer"
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/engineer-mid.svg"
          />
        </div>
        <div class="headline">Hilfe &amp; Service</div>
        <div class="subline">
          Hol Dir Unterstützung zu Deinen Produkten
        </div>
        <div class="cta">
          <a href="/">
            Zur Serviceübersicht
            <img
              class="icon arrow"
              src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/weichenseite/arrow-right.svg"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bk-routing-panels {
  background: #ffffff;
  padding: 80px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 938px;
  text-align: center;
}
.bk-routing-panels .headline {
  font-family: VodafoneRg;
  font-size: 36px;
  line-height: 54px;
  color: #333333;
}
.bk-routing-panels .subline {
  font-family: VodafoneBd;
  font-size: 25px;
  line-height: 54px;
  color: #333333;
  padding-bottom: 27px;
}
.bk-routing-panels .panel-collection {
  /* display: flex;
  justify-content: space-between;
  flex-direction: row; */
  max-width: 610px;
  margin: 0 auto;
  width: 100%;
}
.bk-routing-panels .panel-collection .panel {
  max-height: 332px;
  max-width: 288px;
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  color: #3a3a3a;
  padding: 22px 20px 30px 20px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  text-align: center;
  margin: 10px auto;
}
.bk-routing-panels .panel-collection .panel .headline {
  font-family: VodafoneLt;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 34px;
  padding-bottom: 44px;
}
.bk-routing-panels .panel-collection .panel .subline {
  font-family: VodafoneRg;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 42px;
  width: 80%;
  margin: 0 auto;
}
.bk-routing-panels .panel-collection .panel .cta a {
  text-decoration: none;
  font-family: VodafoneRg;
  font-size: 15.9984px;
  line-height: 22px;
  text-align: right;
  color: #2b2b2b;
}
img.icon.my-vodafone,
img.icon.engineer {
  margin: 0 auto 10px;
}
img.icon.arrow {
  display: inline-block;
}
</style>
