import Vue from "vue";
import Vuex from "vuex";
import trackAddToBasketButton from "@/helper/trackAddToBasketButton.js";

let lastSeenProduct = window.localStorage.getItem("lastSeenProduct");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastSeenProduct: lastSeenProduct ? JSON.parse(lastSeenProduct) : "",
    products: [
      {
        set: "2play",
        title: "Red Internet & Phone 50",
        skus: ["2P_RIP_50_1"],
        upfront_price: 69.99,
        monthly_price: 19.99,
        monthOfPriceChange: 25,
        productrateplans: 29.99,
        contract_duration: 24,
        online_advantage: 30,
        download: "50",
        upload: "5",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 50</h3><br>Ab dem 25. Monat gilt der Preis von 29,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-50",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-50-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "2play",
        title: "Red Internet & Phone 100",
        skus: ["2P_RIP_100_1"],
        upfront_price: 69.99,
        monthly_price: 19.99,
        monthOfPriceChange: 7,
        productrateplans: 34.99, // Besit
        contract_duration: 24,
        online_advantage: 120,
        download: "100",
        upload: "10",
        deliveryfee: 0,
        recommended: false,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 100</h3><br>Ab dem 7. Monat gilt der Preis von 34,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-100",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-100-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "2play",
        title: "Red Internet & Phone 250",
        skus: ["2P_RIP_250_1"],
        upfront_price: 69.99,
        monthly_price: 19.99,
        monthOfPriceChange: 7,
        productrateplans: 39.99, // Besit
        contract_duration: 24,
        online_advantage: 170,
        download: "250",
        upload: "25",
        deliveryfee: 0,
        recommended: true,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 250</h3><br>Ab dem 7. Monat gilt der Preis von 39,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-250",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-250-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Power_Upload_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      /*
      {
        set: "2play",
        title: "Red Internet & Phone 500",
        skus: ["2P_RIP_500_1"],
        upfront_price: 69.99,
        monthly_price: 19.99,
        monthOfPriceChange: 7,
        productrateplans: 44.99, // Besit
        contract_duration: 24,
        online_advantage: 170,
        download: "500",
        upload: "25",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 500</h3><br>Ab dem 7. Monat gilt der Preis von 44,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-500",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-500-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Power_Upload_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "2play",
        title: "Red Internet & Phone 1000",
        skus: ["2P_RIP_1000_1"],
        upfront_price: 69.99,
        monthly_price: 19.99,
        monthOfPriceChange: 7,
        productrateplans: 49.99, // Besit
        contract_duration: 24,
        online_advantage: 170,
        download: "1000",
        upload: "50",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 1000</h3><br>Ab dem 7. Monat gilt der Preis von 49,99 € pro Monat. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Aktivierungsgebühr 69,99 €. Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.  Für Red Internet & Phone 1000 ist die Nutzung eines Modems nach dem Standard DOCSIS 3.1 erforderlich.',
        url: "/internet-phone-1000",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      */
      {
        set: "2play",
        title: "Vodafone CableMax",
        skus: ["2P_RIP_1000_1"],
        upfront_price: 0,
        monthly_price: 39.99,
        contract_duration: 24,
        online_advantage: 0,
        wifiRouter: 0,
        download: "1000",
        upload: "50",
        deliveryfee: 0,
        legaltext: `Das 79,98 € Einmalentgelt (bestehend aus 69,99 € Bereitstellungsentgelt bzw. Aktivierungsgebühr und 9,99 € Lieferpauschale) erlassen wir Dir. Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 12 Wochen bzw. 3 Monate in NRW, Hessen und BW vor Laufzeitende in Textform gekündigt wurde.<br>
<br>
        Inklusive Sicherheitspaket für 2 Geräte in den ersten 2 Monaten gratis, ab dem 3. Monat 3,99 €/Monat (nicht in NRW, Hessen und BW); jederzeit in Textform kündbar mit einer 4-Wochen-Frist.<br>
        <br>
        Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern von Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct /Min. Call-by-Call und Preselection nicht verfügbar.<br>
        <br>
        Mit Vodafone CableMax erhalten Sie das schnellste aktuell bei Ihnen verfügbare Vodafone Internet & Phone Produkt über Kabel mit einer maximalen Downloadgeschwindigkeit von 500 oder 1000 Mbit/s. Der erforderliche WLAN-Kabelrouter wird während der Vertragslaufzeit zur Verfügung gestellt und ist nach Vertragsende zurückzugeben.<br>
        <br>
        Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Beachten Sie bitte die Verfügbarkeit: Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüfen Sie bitte, ob Sie die Produkte im gewünschten Objekt nutzen können.<br>
        <br>
        Anbieter in NRW: Vodafone NRW GmbH, in Hessen: Vodafone Hessen GmbH & Co. KG, in Baden-Württemberg: Vodafone BW GmbH, alle Aachener Straße 746–750, 50933 Köln, in den übrigen Bundesländern: Vodafone Kabel Deutschland GmbH, Betastraße 6-8, 85774 Unterföhring<br>`,
        url: "/internet-phone-1000",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf",
        options: [
          "Telefon_Komfort_1",
          "Security-Package_1",
          "Euro_Flat_1",
          "Mob_Euro_Flat_1",
          "International_Flat_1",
          "International_Allnet_1"
        ],
        effectivePrice: 40.4,
        billType: "Online-Rechnung",
        contractCancellation: 3,
        contractPrerequisites:
          "Kein Kabelanschluss-Vertrag notwendig, es muss nur ein Kabel-Anschluss an Deinem Wohnort verfügbar sein."
      },
      {
        set: "3play",
        title: "Red Internet & Phone 50 Cable + Horizon TV",
        skus: ["2P_RIP_50_1", "HRZ_TV_0420_1"],
        upfront_price: 69.99,
        monthly_price: 24.98,
        monthOfPriceChange: 13,
        productrateplans: 39.98, // Besit
        contract_duration: 24,
        online_advantage: 30,
        download: "50",
        upload: "5",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 50 + Horizon TV</h3><br>Der Preis setzt sich zusammen aus dem Red Internet & Phone 50 Cable (19,99 € pro Monat die ersten 24 Monate, danach 29,99 € pro Monat) und dem Preis für Horizon TV (4,99 € pro Monat die ersten 12 Monate, danach 9,99 € pro Monat). Bei Beendigung des Vertrags über das Internet & Phone Produkt gilt der reguläre monatliche Preis in Höhe von 14,99 € für Horizon TV.) Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Einmalige Aktivierungsgebühr 69,99 €. Voraussetzung für Horizon TV ist ein Kabelanschlussvertrag von Vodafone (z.B. im Einzelnutzervertrag 20,99€ pro Monat oder oft in den Mietnebenkosten enthalten). Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist. ',
        url: "/internet-phone-tv-50",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-50-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "3play",
        title: "Red Internet & Phone 100 Cable + Horizon TV",
        skus: ["2P_RIP_100_1", "HRZ_TV_0420_1"],
        upfront_price: 69.99,
        monthly_price: 24.98,
        monthOfPriceChange: 7,
        productrateplans: 44.98, // Besit
        contract_duration: 24,
        online_advantage: 120,
        download: "100",
        upload: "10",
        deliveryfee: 0,
        recommended: false,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 100 + Horizon TV</h3><br>Der Preis setzt sich zusammen aus dem Red Internet & Phone 100 Cable (19,99 € pro Monat die ersten 6 Monate, danach 34,99 € pro Monat) und dem Preis für Horizon TV (4,99 € pro Monat die ersten 12 Monate, danach 9,99 € pro Monat). Bei Beendigung des Vertrags über das Internet & Phone Produkt gilt der reguläre monatliche Preis in Höhe von 14,99 € für Horizon TV.) Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Einmalige Aktivierungsgebühr 69,99 €. Voraussetzung für Horizon TV ist ein Kabelanschlussvertrag von Vodafone (z.B. im Einzelnutzervertrag 20,99€ pro Monat oder oft in den Mietnebenkosten enthalten). Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-tv-100",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-100-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "3play",
        title: "Red Internet & Phone 250 Cable + Horizon TV",
        skus: ["2P_RIP_250_1", "HRZ_TV_0420_1"],
        upfront_price: 69.99,
        monthly_price: 24.98,
        monthOfPriceChange: 7,
        productrateplans: 49.98, // Besit
        contract_duration: 24,
        online_advantage: 170,
        download: "250",
        upload: "25",
        deliveryfee: 0,
        recommended: true,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 250 + Horizon TV</h3><br>Der Preis setzt sich zusammen aus dem Red Internet & Phone 250 Cable (19,99 € pro Monat die ersten 6 Monate, danach 39,99 € pro Monat) und dem Preis für Horizon TV (4,99 € pro Monat die ersten 12 Monate, danach 9,99 € pro Monat). Bei Beendigung des Vertrags über das Internet & Phone Produkt gilt der reguläre monatliche Preis in Höhe von 14,99 € für Horizon TV.) Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Einmalige Aktivierungsgebühr 69,99 €. Voraussetzung für Horizon TV ist ein Kabelanschlussvertrag von Vodafone (z.B. im Einzelnutzervertrag 20,99€ pro Monat oder oft in den Mietnebenkosten enthalten). Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist.',
        url: "/internet-phone-tv-250",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-250-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Power_Upload_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      /*
      {
        set: "3play",
        title: "Red Internet & Phone 500 Cable + Horizon TV",
        skus: ["2P_RIP_500_1", "HRZ_TV_0420_1"],
        upfront_price: 69.99,
        monthly_price: 24.98,
        monthOfPriceChange: 7,
        productrateplans: 54.98, // Besit
        contract_duration: 24,
        online_advantage: 170,
        download: "500",
        upload: "25",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 500 + Horizon TV</h3><br>Der Preis setzt sich zusammen aus dem Red Internet & Phone 500 Cable (19,99 € pro Monat die ersten 6 Monate, danach 44,99 € pro Monat) und dem Preis für Horizon TV (4,99 € pro Monat die ersten 12 Monate, danach 9,99 € pro Monat). Bei Beendigung des Vertrags über das Internet & Phone Produkt gilt der reguläre monatliche Preis in Höhe von 14,99 € für Horizon TV.) Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Einmalige Aktivierungsgebühr 69,99 €. Voraussetzung für Horizon TV ist ein Kabelanschlussvertrag von Vodafone (z.B. im Einzelnutzervertrag 20,99€ pro Monat oder oft in den Mietnebenkosten enthalten). Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist. ',
        url: "/internet-phone-tv-500",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-500-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Power_Upload_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      */
      {
        set: "3play",
        title: "Red Internet & Phone 1000 Cable + Horizon TV",
        skus: ["2P_RIP_1000_1", "HRZ_TV_0420_1"],
        upfront_price: 69.99,
        monthly_price: 24.98,
        monthOfPriceChange: 7,
        productrateplans: 59.98,
        contract_duration: 24,
        online_advantage: 170,
        download: "1000",
        upload: "50",
        deliveryfee: 0,
        legaltext:
          '<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Red Internet & Phone 1000 + Horizon TV</h3><br>Der Preis setzt sich zusammen aus dem Red Internet & Phone 1000 Cable (19,99 € pro Monat die ersten 6 Monate, danach 49,99 € pro Monat) und dem Preis für Horizon TV (4,99 € pro Monat die ersten 12 Monate, danach 9,99 € pro Monat). Bei Beendigung des Vertrags über das Internet & Phone Produkt gilt der reguläre monatliche Preis in Höhe von 14,99 € für Horizon TV.) Mindestlaufzeit 24 Monate. Verlängerung um je 12 Monate, wenn nicht 3 Monate vor Laufzeitende in Textform gekündigt wurde. Einmalige Aktivierungsgebühr 69,99 €. Voraussetzung für Horizon TV ist ein Kabelanschlussvertrag von Vodafone (z.B. im Einzelnutzervertrag 20,99€ pro Monat oder oft in den Mietnebenkosten enthalten). Festnetz-Flat ins deutsche Festnetz. Sonderrufnummern sind von der Festnetz-Flat ausgenommen. Telefonate in alle deutschen Mobilfunknetze 19,9 Ct/Min, Telefonate ins Ausland, z. B. USA, ab 9,9 Ct/Min. Call-by-Call und Preselection nicht verfügbar. Du bekommst den erforderlichen WLAN-Kabelrouter für den Zeitraum Deines Vertrags zur Verfügung gestellt. Nach Vertragsende ist der Kabel-Router zurückzugeben. Gilt nur für Internet & Phone-Neukunden, in deren Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von Vodafone vorhanden war. Internet & Phone-Produkte sind in vielen unserer Kabel-Ausbaugebiete und mit modernisiertem Hausnetz verfügbar. Prüf bitte, ob das Produkt bei Dir verfügbar ist. Für Red Internet & Phone 1000 ist die Nutzung eines Modems nach dem Standard DOCSIS 3.1 erforderlich.',
        url: "/internet-phone-tv-1000",
        pib:
          "//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf",
        options: [
          {
            title: "Internet-Optionen",
            skus: ["Telefon_Komfort_1", "Security-Package_1"]
          },
          {
            title: "Telefon-Optionen",
            skus: [
              "Telefon_Komfort_1",
              "Euro_Flat_1",
              "Mob_Euro_Flat_1",
              "International_Flat_1",
              "International_Allnet_1"
            ]
          }
        ]
      },
      {
        set: "tv",
        title: "Horizon TV",
        subtitle: "Der optimale Einstieg in Ihre Entertainmentwelt",
        family: "tv",
        skus: ["HRZ_TV_0420_1"],
        shortSku: "HTV",
        upfront_price: 39.99,
        monthly_price: 4.99,
        monthOfPriceChange: 13,
        productrateplans: 9.99,
        contract_duration: 24,
        onlinePromotion: false,
        legaltext: "UMEFN_099",
        deliveryfee: 9.99,
        gradient: "linear-gradient(45deg, #A50501, #E80000)",
        bullets: [
          "Live-TV und zeitversetztes Fernsehen mit dem Horizon HD-Recorder",
          "Entertainment-Allrounder für Aufnahmen, Apps, TV-Mediatheken uvm.",
          'Viele private Sender in HD genießen <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><a style="color: green;" data-action="Hyperlink" href="#/privatkunden/tv/tv-anschluss/hd-option/">HD-Option</a> bereits in Horizon TV enthalten</span></span>',
          'Zu Hause mobil fernsehen auf Tablet, Smartphone oder TV mit Horizon Go Free <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Unitymedia Internet-Anschluss notwendig</span></span>'
        ],
        hardware: ["Horizon-Recorder"],
        available: true,
        promoCode: ["broadbandPromotion"]
      }
    ],
    options: [
      {
        skus: ["Security-Package_1"],
        monthly_price: 0,
        monthOfPriceChange: 4,
        productrateplans: 2.99,
        title: "F-Secure Sicherheitspaket",
        bullets: [
          "Echtzeitschutz vor Viren, Spyware, Trojanern u.a.",
          "Für sicheres Online-Banking und -Shopping",
          'Die ersten 3 Monate kostenlos<span class="tooltip js_tooltip" data-tt=""><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Das preisgekrönte F-Secure Sicherheitspaket kostet ab dem 4. Monat nur 3,99 € mtl. und ist jederzeit mit einer Frist von einem Monat kündbar.</span></span>',
          "Schutz für bis zu 3 PCs oder Laptops",
          "Mit Browsing-Schutz, Firewall und Kindersicherung",
          "Kostenlose automatische Updates",
          "Unterstützt auch Windows 10 (32 und 64 Bit)",
          "Schneller Download für NRW, Hessen und Baden-Württemberg"
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für F-Secure Sicherheitspaket</h3><br>Unser Sicherheitspaket kostet ab dem 4. Monat nur 3,99 € mtl. und ist jederzeit mit einer Frist von einem Monat kündbar.`
      },
      {
        skus: ["Telefon_Komfort_1"],
        monthly_price: 4.99,
        title: "KOMFORT-Option",
        bullets: [
          "FRITZ!Box 6591 mit neuester WLAN-Technologie",
          "Highspeed-Verbindung für alle WLAN-Geräte",
          "Für Geschwindigkeiten bis 1 Gbit/s",
          "Mit Mesh für mehr WLAN-Reichweite",
          "DECT-Telefonanlage mit vielen ISDN-Funktionen",
          "HD Voice inklusive",
          "USB 3.0 Schnittstelle für Drucker und Festplatte"
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für KOMFORT-Option</h3><br>zzgl. einmaliger Aktivierung 29,99 €. Die Mindestvertragslaufzeit richtet sich nach dem zugrunde liegenden Telefonanschlussvertrag. Standardmäßig 3 Rufnummern, auf Wunsch Bestellung einer 4. bis 6. Rufnummer für einmalig 9,99 € pro Rufnummer. Bestellung der 4. bis 6. Rufnummer über die telefonische Kundenbetreuung.`,
        excludedSkus: []
      },
      {
        skus: ["Power_Upload_1"],
        monthly_price: 2.99,
        title: "Power Upload",
        bullets: [
          "Verkürzt die Ladezeiten bei Upload von großen Dateimengen",
          "Ideal beim Upload von Fotos oder Videos",
          "Kombinierbar mit allen unseren Breitband Tarifen",
          "Keine Aktivierungsgebühr, sofort nutzbar"
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Power Upload</h3><br>Die Option Power Upload verdoppelt die dem Breitbandprodukt zugrunde liegende Uploadgeschwindigkeit und kostet 2,99 € mtl. Die Vertragslaufzeit richtet sich nach dem zugrunde liegenden Breitbandprodukt.`,
        excludedSkus: []
      },
      {
        skus: ["Euro_Flat_1"],
        monthly_price: 4.99,
        title: "Euro-Flat plus",
        bullets: [
          'Flatrate ins Festnetz von über 25 europäischen und weiteren Ländern<span class="tooltip js_tooltip bottom-tooltip" data-tt=""><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Kostenlos telefonieren in das Festnetz der folgenden Länder:</strong> <br> Andorra, Australien, Belgien, Dänemark, Frankreich, Französisch Guyana, Griechenland, Großbritannien, Guadeloupe, Guernsey, Irland, Isle of Man, Italien, Jersey, Kanada, Liechtenstein, Luxemburg, Martinique, Mayotte, Monaco, Niederlande, Norwegen, Österreich, Polen, Portugal, Réunion, Saint Martin, San Marino, Schweden, Schweiz, Slowakei, Slowenien, Spanien, Spitzbergen und Jan Mayen, Tschechien, USA, Vatikanstadt.</span></span>'
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Euro-Flat plus</h3><br>Buchbar zu allen Kabel-Produkten von Vodafone mit einem Festnetz-Telefonanschluss. Mindestlaufzeit 6 Monate. Kündbar in Textform mit einer Frist von 1 Monat, erstmals zum Ende der Mindestlaufzeit. Der Wechsel aus der Option in einen regulierten Tarif ist innerhalb eines Werktages möglich. Sonderrufnummern und VPN-Telefondienste ausgeschlossen. Call-by-Call und Preselection nicht verfügbar.`,
        excludedSkus: [
          "Mob_Euro_Flat_1",
          "International_Flat_1",
          "International_Allnet_1"
        ]
      },
      {
        skus: ["Mob_Euro_Flat_1"],
        monthly_price: 9.99,
        title: "Mobile & Euro-Flat plus",
        bullets: [
          "Flatrate in die deutschen Mobilfunknetze",
          `Flatrate ins Festnetz von über 25 europäischen und weiteren Ländern<span class="tooltip js_tooltip left-tooltip bottom-tooltip" data-tt=""><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Kostenlos telefonieren in das Festnetz der folgenden Länder:</strong> <br> Andorra, Australien, Belgien, Dänemark, Frankreich, Französisch Guyana, Griechenland, Großbritannien, Guadeloupe, Guernsey, Irland, Isle of Man, Italien, Jersey, Kanada, Liechtenstein, Luxemburg, Martinique, Mayotte, Monaco, Niederlande, Norwegen, Österreich, Polen, Portugal, Réunion, Saint Martin, San Marino, Schweden, Schweiz, Slowakei, Slowenien, Spanien, Spitzbergen und Jan Mayen, Tschechien, USA, Vatikanstadt.</span></span>`
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Mobile & Euro-Flat plus</h3><br>Buchbar zu allen Kabel-Produkten von Vodafone mit einem Festnetz-Telefonanschluss. Mindestlaufzeit 6 Monate. Kündbar in Textform mit einer Frist von 1 Monat, erstmals zum Ende der Mindestlaufzeit. Der Wechsel aus der Option in einen regulierten Tarif ist innerhalb eines Werktages möglich. Sonderrufnummern und VPN-Telefondienste ausgeschlossen. Call-by-Call und Preselection nicht verfügbar.`,
        excludedSkus: [
          "Euro_Flat_1",
          "International_Flat_1",
          "International_Allnet_1"
        ]
      },
      {
        skus: ["International_Flat_1"],
        monthly_price: 14.99,
        title: "Mobile & International Flat",
        bullets: [
          "Flatrate in die deutschen Mobilfunknetze",
          `Flatrate ins Festnetz von über 60 Ländern<span class="tooltip js_tooltip bottom-tooltip" data-tt=""><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Kostenlos telefonieren in das Festnetz der folgenden Länder:</strong> <br> Amerikanische Jungferninseln, Andorra, Argentinien, Belgien, Brunei Darussalam, China, Dänemark, Estland, Finnland, Frankreich, Französisch Guyana, Griechenland, Großbritannien, Guadeloupe, Guam, Guernsey, Hongkong, Indien, Irland, Isle of Man, Israel, Italien, Japan, Jersey, Kanada, Kroatien, Liechtenstein, Litauen, Luxemburg, Malaysia, Malta, Martinique, Mayotte, Mexico, Monaco, Neuseeland, Niederlande, Norwegen, Österreich, Panama, Peru, Polen, Portugal, Puerto Rico, Réunion, Rumänien, Russland, Saint Martin, San Marino, Schweden, Schweiz, Singapur, Slowakei, Slowenien, Spanien, Spitzbergen und Jan Mayen, Südafrika, Südkorea, Taiwan, Thailand, Tschechien, Türkei, Ungarn, USA, Vatikanstadt, Venezuela, Zypern.</span></span>`
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Mobile & International Flat</h3><br>Buchbar zu allen Kabel-Produkten von Vodafone mit einem Festnetz-Telefonanschluss. Mindestlaufzeit 6 Monate. Kündbar in Textform mit einer Frist von 1 Monat, erstmals zum Ende der Mindestlaufzeit. Der Wechsel aus der Option in einen regulierten Tarif ist innerhalb eines Werktages möglich. Sonderrufnummern und VPN-Telefondienste ausgeschlossen. Call-by-Call und Preselection nicht verfügbar.`,
        excludedSkus: [
          "Euro_Flat_1",
          "Mob_Euro_Flat_1",
          "International_Allnet_1"
        ]
      },
      {
        skus: ["International_Allnet_1"],
        monthly_price: 19.99,
        title: "Mobile & International-Allnet-Flat",
        bullets: [
          "Flatrate in die deutschen Mobilfunknetze",
          `Flatrate ins Fest- und Mobilfunknetz von über 60 Ländern<span class="tooltip js_tooltip left-tooltip bottom-tooltip" data-tt=""><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Kostenlos telefonieren in das Festnetz der folgenden Länder:</strong> <br> Amerikanische Jungferninseln, Andorra, Argentinien, Belgien, Brunei Darussalam, China, Dänemark, Estland, Finnland, Frankreich, Französisch Guyana, Griechenland, Großbritannien, Guadeloupe, Guam, Guernsey, Hongkong, Indien, Irland, Isle of Man, Israel, Italien, Japan, Jersey, Kanada, Kroatien, Liechtenstein, Litauen, Luxemburg, Malaysia, Malta, Martinique, Mayotte, Mexico, Monaco, Neuseeland, Niederlande, Norwegen, Österreich, Panama, Peru, Polen, Portugal, Puerto Rico, Réunion, Rumänien, Russland, Saint Martin, San Marino, Schweden, Schweiz, Singapur, Slowakei, Slowenien, Spanien, Spitzbergen und Jan Mayen, Südafrika, Südkorea, Taiwan, Thailand, Tschechien, Türkei, Ungarn, USA, Vatikanstadt, Venezuela, Zypern.</span></span>`
        ],
        legaltext: `<h3 class="h3 legal-dialog-header">Rechtliche Hinweise für Mobile & Innternetional-Allnet-Flat</h3><br>Buchbar zu allen Kabel-Produkten von Vodafone mit einem Festnetz-Telefonanschluss. Mindestlaufzeit 6 Monate. Kündbar in Textform mit einer Frist von 1 Monat, erstmals zum Ende der Mindestlaufzeit. Der Wechsel aus der Option in einen regulierten Tarif ist innerhalb eines Werktages möglich. Sonderrufnummern und VPN-Telefondienste ausgeschlossen. Call-by-Call und Preselection nicht verfügbar.`,
        excludedSkus: ["Euro_Flat_1", "Mob_Euro_Flat_1", "International_Flat_1"]
      }
    ],
    activeProduct: [],
    basket: [],
    loggedInCostumer: false, // truly logged-in customer (used only in Fallback Shop, not in widgets so far)
    existingCustomer: false, // not checked, just assumed because clicked/chosen by visitor
    overlay: {
      headline: "",
      copy: ""
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getActiveProduct(state) {
      return state.activeProduct;
    },
    getProduct: state => payload => {
      let tempProduct = {};
      if (Array.isArray(payload)) {
        tempProduct = state.products.find(
          product => JSON.stringify(product.skus) === JSON.stringify(payload)
        );
      } else {
        tempProduct = state.products.find(
          product => product.skus[0] === payload
        );
      }
      if (tempProduct === undefined) {
        if (Array.isArray(payload)) {
          tempProduct = state.options.find(
            option => JSON.stringify(option.skus) === JSON.stringify(payload)
          );
        } else {
          tempProduct = state.options.find(
            option => option.skus[0] === payload
          );
        }
      }
      return tempProduct;
    },
    getBBProducts(state) {
      let helperProduct = state.products.filter(product => {
        if (product.set === "2play") {
          return product;
        }
      });
      return helperProduct;
    },
    getBBTVProducts(state) {
      let helperProduct = state.products.filter(product => {
        if (product.set === "3play") {
          return product;
        }
      });
      return helperProduct;
    },
    isProductInBasket: state => payload => {
      let helperBoolean = false;
      if (state.basket.indexOf(payload) > -1) {
        helperBoolean = true;
      }
      return helperBoolean;
    },
    getBasket: state => {
      return state.basket;
    },
    getBasketPrice: (state, getters) => {
      let price = 0;
      state.basket.forEach(sku => {
        if (getters.getProduct(sku).monthly_price) {
          price += Math.round(getters.getProduct(sku).monthly_price * 100);
        } else if (getters.getProduct(sku).upfront_price) {
          price += Math.round(getters.getProduct(sku).upfront_price * 100);
        }
      });
      console.log("the current basket price is " + price / 100);
      return (price = price / 100);
    },
    getBasketSkuString: state => {
      let skuString = "";
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket.length === i + 1) {
          skuString += state.basket[i];
        } else {
          skuString += state.basket[i] + ",";
        }
      }
      return skuString;
    },
    isLoggedInCustomer: state => {
      return state.loggedInCostumer;
    },
    isExistingCustomer: state => {
      return state.existingCustomer;
    },
    getLastSeenProduct: state => {
      return state.lastSeenProduct;
    },
    getOverlayContent: state => {
      return state.overlay;
    }
  },
  mutations: {
    setActiveProduct(state, payload) {
      state.activeProduct = payload;
    },
    setBasket(state, payload) {
      state.basket = payload;
    },
    addOptionToBasket(state, payload) {
      state.basket.push(payload);
    },
    removeOptionFromBasket(state, payload) {
      let helperIndex = state.basket.indexOf(payload);
      state.basket.splice(helperIndex, 1);
    },
    goToCheckout(state, { getters }) {
      trackAddToBasketButton(
        getters.getBasket,
        getters.getBasketPrice,
        process.env.NODE_ENV,
        getters.getBasketSkuString
      );
    },
    setLoggedInCustomer(state) {
      state.loggedInCostumer = true;
    },
    setExistingCustomer(state, payload) {
      state.existingCustomer = payload;
    },
    setLastSeenProduct(state, payload) {
      state.lastSeenProduct = payload;
      window.localStorage.setItem(
        "lastSeenProduct",
        JSON.stringify(state.lastSeenProduct)
      );
    },
    setOverlayContent(state, payload) {
      state.overlay = payload;
    }
  },
  actions: {
    setActiveProduct({ commit }, payload) {
      var forActive = JSON.parse(JSON.stringify(payload));
      var forBasket = JSON.parse(JSON.stringify(payload));
      commit("setActiveProduct", forActive);
      commit("setLastSeenProduct", forActive);
      commit("setBasket", forBasket);
    },
    toggleOptionToBasket({ commit, getters }, payload) {
      let helperBoolean = false;
      if (getters.getBasket.indexOf(payload) === -1) {
        commit("addOptionToBasket", payload);
        helperBoolean = true;
      } else {
        commit("removeOptionFromBasket", payload);
        helperBoolean = true;
      }
      return helperBoolean;
    },
    addToBasket({ commit, getters }) {
      console.log("Action 'addToBasket' called " + commit + " " + getters);
      commit("goToCheckout", { getters });
    }
  }
});
