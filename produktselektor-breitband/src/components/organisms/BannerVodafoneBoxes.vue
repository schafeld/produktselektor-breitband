<template>
  <div class="banner-vodafone cockpit-background p-6">
    <h1>Unitymedia ist jetzt Vodafone</h1>
    <p class="sub-line">
      Entdecke Highspeed-Internet &amp; Phone Tarife, TV und Mobilfunk im
      ausgezeichneten Vodafone-Netz!
    </p>
    <div class="cockpit-squares">
      <!-- TODO: Check if tracking data attributes etc. are valid. -->
      <a
        class="square"
        data-teaser-tracking-id="umo_web:nkoffer"
        href="https://zuhauseplus.vodafone.de/internet-telefon/kabel/?uc=GEN&amp;sales_id=43904&amp;c_id=umo_ref:nkoffer&amp;j_id=ConConPer723F"
      >
        <icon-house />
        <span class="square-title">Neukunden</span>
        <span class="square-sub-title">Lass Dir Deine Angebote zeigen</span>
      </a>
      <a class="square" href="/kundencenter/">
        <icon-person />
        <span class="square-title">Unitymedia-Kunden</span>
        <span class="square-sub-title">Log Dich als Kunde ein</span>
      </a>
      <a class="square" href="/privatkunden/hilfe_service/hilfe_themen/">
        <icon-tools />
        <span class="square-title">Hilfe &amp; Service</span>
        <span class="square-sub-title">
          Hol Dir Unterstützung zu Deinen Produkten
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import IconPerson from "@/components/atoms/icons/IconPerson";
import IconHouse from "@/components/atoms/icons/IconHouse";
import IconTools from "@/components/atoms/icons/IconTools";

export default {
  components: {
    IconPerson,
    IconHouse,
    IconTools,
  },
};
</script>

<style lang="scss">
// styles taken from design prototype and VF website
// https://www.figma.com/file/7GflSChlzyuvqQzIdUGUUS/20200430-PDP-Final-Draft?node-id=1890%3A561 )
.cockpit-background {
  /* TODO: Update bg image */
  background-image: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/bg_visual_02.jpg);
}
.banner-vodafone {
  text-align: center;
  color: #ffffff;
  h1 {
    left: 28.43%;
    right: 27.58%;
    top: calc(50% - 40px / 2 - 60px);

    font-family: VodafoneRg;
    font-size: 48px;
    line-height: 40px;
    /* identical to box height, or 83% */

    text-align: center;
    color: var(--color-vodafone-white);
  }
  .sub-line {
    top: 38%;
    bottom: 40%;
    font-family: VodafoneRg;
    font-size: 18px;
    line-height: 24px;
    margin: 0 auto;
    width: 70%;
    max-width: 25rem;
    .desktop {
      width: 30%;
    }
  }
  .text {
    display: inline-block;
  }
  .ws2-btn {
    position: relative;
    font-family: "Vodafone", Arial, sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    padding: 12px 20px 14px;
    height: 46px;
    box-shadow: 0 1px 3px rgba(50, 50, 50, 0.6);
    display: inline-flex;
    width: fit-content;
    text-decoration: none;
    &.white-btn {
      background-color: var(--color-vodafone-white);
      color: var(--color-vodafone-dark-grey);
    }
  }
  svg {
    &#i-arrow-ws2-right-sml {
      display: inline-block;
      transform: rotate(-45deg);
      fill: var(--color-vodafone-dark-grey);
      stroke: var(--color-vodafone-dark-grey);
      stroke-width: 2px;
    }
  }
}
// svg.icon.house,
// svg.icon.person,
// svg.icon.tools {
//   width: 100px;
// }
.cockpit-squares svg {
  width: 72px;
  height: 72px;
  position: relative;
  left: 68px;
  margin-top: 20px;
}
</style>
