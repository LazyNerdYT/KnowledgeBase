---
title: Установка
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Системные требования

**Версия ОС:** Android 7.0 или выше

**Объём оперативной памяти**: от 2 ГБ

**Свободное пространство на диске**: 500 МБ

## Установка

AdGuard для Android не представлен на Google Play: Google запрещает распространять через этот магазин блокировщики сетевого уровня — то есть те, которые блокируют рекламу в других приложениях. You will find more information about Google restrictive policy [in our blog](https://adguard.com/blog/adguard-google-play-removal.html).

Поэтому установить AdGuard для Android можно только вручную. Ниже — инструкции, как это сделать.

1. **Скачайте приложение на устройство**. Вот несколько способов сделать это:

    - перейдите на [наш сайт](https://adguard.com/adguard-android/overview.html) и нажмите кнопку *Скачать*
    - запустите браузер и введите: [https://adguard.com/apk](https://adguard.com/apk)
    - или отсканируйте этот QR-код:

    ![QR-код *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Разрешите установку приложений из неизвестных источников**. После завершения загрузки файла нажмите *Открыть* в уведомлении.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Появится всплывающее окно. Tap *Settings*, navigate to *Install unknown apps*, and grant permission for the browser you've used to download the file.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Установить приложение**. Как только браузер получит необходимые разрешения, система спросит, хотите ли вы установить приложение AdGuard. Нажмите *Установить*.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Затем вам будет предложено ознакомиться с *Лицензионным соглашением AdGuard* и *Политикой конфиденциальности*. Вы также можете помочь в разработке продукта. Для этого отметьте галочкой *Отправлять автоматические отчёты об ошибках* и *Отправлять технические данные и информацию о взаимодействиях*. Затем нажмите *Продолжить*.

    ![Политика конфиденциальности *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Создайте локальный VPN**. Чтобы фильтровать весь трафик непосредственно на вашем устройстве, а не направлять его через удалённый сервер, AdGuard необходимо установить VPN-соединение.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Включите HTTPS-фильтрацию**. Это не обязательная опция, но мы советуем включить её для наилучшего качества блокировки рекламы.

    Если на устройстве ОС Android 7–9, то после настройки локального VPN будет предложено установить корневой сертификат и настроить HTTPS-фильтрацию.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    После нажатия кнопки *Установить сейчас* нужно будет подтвердить подлинность установки сертификата с помощью пароля или отпечатка пальца.

    ![Enable HTTPS filtering on Android 7-9. Шаг 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Удаление/переустановка AdGuard

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Find AdGuard in the list of installed apps and press *Uninstall*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall AdGuard, just download the apk file again and follow the steps outlined in the Installation section. Uninstallation is not required beforehand.
