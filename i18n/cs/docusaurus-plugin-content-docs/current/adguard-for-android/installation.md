---
title: Instalace
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Požadavky na systém

**Verze OS:** Android 7.0 nebo vyšší

**RAM:** alespoň 2 GB

**Volné místo na disku:** 500 MB

## Instalace

Většina aplikací pro Android je distribuována prostřednictvím služby Google Play. AdGuard zde však není prezentován, protože společnost Google zakazuje distribuci blokátorů reklam na úrovni sítě prostřednictvím služby Google Play, tj. aplikace, které blokují reklamy v jiných aplikacích. You will find more information about Google restrictive policy [in our blog](https://adguard.com/blog/adguard-google-play-removal.html).

Proto můžete AdGuard pro Android nainstalovat pouze ručně. Chcete-li aplikaci používat v mobilním zařízení, musíte provést následující kroky.

1. **Stáhněte si aplikaci do zařízení**. Zde je několik způsobů, jak to můžete udělat:

    - přejděte na [náš web](https://adguard.com/adguard-android/overview.html) a klepněte na tlačítko *Stáhnout*
    - spusťte prohlížeč a zadejte následující URL: [https://adguard.com/apk](https://adguard.com/apk)
    - nebo naskenujte tento QR kód:

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Povolte instalaci aplikací z neznámých zdrojů**. Po dokončení stahování souboru klepněte na *Otevřít* v oznámení.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Zobrazí se vyskakovací okno. Klepněte na *Nastavení*, přejděte na *Instalace neznámých aplikací* a udělte oprávnění pro prohlížeč, který jste použili ke stažení souboru.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Nainstalujte aplikaci**. Jakmile prohlížeč získá potřebná oprávnění, systém se vás zeptá, zda chcete aplikaci AdGuard nainstalovat. Klepněte na *Instalovat*.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Poté budete požádáni o přečtení *licenční smlouvy AdGuard* a *Zásad ochrany osobních údajů*. Můžete se také podílet na vývoji produktů. Za tímto účelem můžete zaškrtnout políčka *Odesílat automatická hlášení o pádech* a *Odesílat technická a interakční data*. Klepněte na *Pokračovat*.

    ![Privacy Policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Vytvořte lokální VPN**. Aby bylo možné filtrovat veškerý provoz přímo v zařízení a nesměrovat jej přes vzdálený server, musí AdGuard navázat spojení VPN.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Povolte HTTPS filtrování**. Není to povinná volba, ale doporučujeme ji zapnout, abyste dosáhli nejlepší kvality blokování reklam.

    Pokud vaše zařízení používá systém Android 7-9, budete po nastavení lokální VPN vyzváni k instalaci kořenového certifikátu a konfiguraci HTTPS filtrování.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Po klepnutí na *Instalovat nyní* se zobrazí výzva k ověření instalace certifikátu pomocí hesla nebo otisku prstu.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Odinstalování/přeinstalování AdGuardu

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Find AdGuard in the list of installed apps and press *Uninstall*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall AdGuard, just download the apk file again and follow the steps outlined in the Installation section. Uninstallation is not required beforehand.
