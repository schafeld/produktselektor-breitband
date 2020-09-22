<template>
  <section class="responsive-tiles">
    <!-- You may want to keep this component as template for responsive tiles that reorder on small screens. -->
    <h2>Deine Vorteile</h2>
    <!-- TODO: Turn article into/ use molecule 1/3 -->
    <article class="provider-change flex w-full flex-col lg:flex-row">
      <div class="article-text lg:w-1/2 w-full">
        <h3 class="hl-beta">Wechseln statt Warten</h3>
        <p>
          Wechsel schon heute zu uns und nutze unsere Produkte trotz laufendem
          DSL-Vertrag sofort. Bis zu 12 Monate für 0 € Grundgebühr.
        </p>
      </div>
      <div class="article-image bg-red-100 lg:w-1/2 w-full">
        placeholder solid color, TODO: Insert proper image.
      </div>
    </article>
    <!-- TODO: Turn article into/ use molecule 2/3 -->
    <article class="downgrade-option flex w-full flex-col lg:flex-row">
      <div class="article-image bg-red-100 lg:w-1/2 w-full order-2 lg:order-1">
        placeholder solid color, TODO: Insert proper image.
      </div>
      <div class="article-text lg:w-1/2 sm:w-full order-1 lg:order-2">
        <h3 class="hl-beta">Downgrade-Garantie</h3>
        <p>
          Entscheide Dich ob du bis zum 7. Monat Deinen Tarif behalten möchtest
          oder in einen kleineren wechseln willst.
        </p>
      </div>
    </article>
    <!-- TODO: Turn article into/ use molecule 3/3 -->
    <article class="recommendation-premium flex w-full flex-col lg:flex-row">
      <div class="article-text lg:w-1/2 w-full">
        <h3 class="hl-beta">Bis zu 180 € Prämie für Dich und Deinen Freund</h3>
        <p>Produkt auswählen. Empfehlung versenden. Über Prämie freuen.</p>
      </div>
      <div class="article-image bg-red-100 lg:w-1/2 w-full">
        placeholder solid color, TODO: Insert proper image.
      </div>
    </article>
  </section>
</template>
