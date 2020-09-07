<template>
  <div class="banner-vodafone cockpit-background p-6">
    <h1>Unitymedia ist jetzt Vodafone</h1>
    <p class="sub-line">
      Entdecke Highspeed-Internet &amp; Phone Tarife, TV und
      Mobilfunk im ausgezeichneten Vodafone-Netz!
    </p>
    <a
      href="https://www.vodafone.de"
      class="ws2-btn white-btn external-link mt-2"
      target="_blank"
    >
      <span class="text mr-2">Zu vodafone.de</span>
      <svg id="i-arrow-ws2-right-sml" class="invisible md:visible md:desktop" viewBox="0 0 100 100">
        <path
          d="M91.507 50.797c.029-.069.045-.141.066-.212.017-.059.04-.116.052-.177.027-.135.041-.271.041-.408v-.001c0-.136-.014-.272-.041-.407-.012-.062-.035-.119-.053-.178-.021-.071-.037-.142-.065-.21-.029-.07-.069-.133-.105-.199-.029-.053-.052-.108-.087-.159a2.087 2.087 0 0 0-.26-.318L55.64 13.11a2.084 2.084 0 0 0-2.946 2.946l31.86 31.86H10.417a2.083 2.083 0 1 0 0 4.166h74.137l-31.86 31.86a2.082 2.082 0 1 0 2.946 2.946l35.415-35.415c.097-.097.184-.204.261-.319.034-.05.057-.105.086-.158.036-.065.076-.129.105-.199z"
          class="st0"
        ></path>
      </svg>
    </a>
  </div>
</template>

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
    font-family: "Vodafone",Arial,sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    padding: 12px 20px 14px;
    height: 46px;
    box-shadow: 0 1px 3px rgba(50,50,50,0.6);
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
    .desktop {
      width: 23px;
    }
  }
}
</style>
