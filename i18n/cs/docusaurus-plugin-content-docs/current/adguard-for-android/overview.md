---
title: Přehled funkcí
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

::::::note Odmítnutí odpovědnosti

AdGuard pro Android nelze zaměňovat s Blokátorem obsahu AdGuard. Blokátor obsahu AdGuard je aplikace dostupná v Google Play, která má omezené funkce, aby splňovala stanovy obchodu. AdGuard pro Android je naopak výkonná aplikace pro blokování reklam, správu aplikací a další funkce, které jsou popsány v tomto článku. AdGuard pro Android můžete stáhnout [webových stránek AdGuardu](https://adguard.com/adguard-android/overview.html).

:::

## Ochrana

Tato obrazovka kombinuje všechny funkce AdGuard ochrany:

- Blokování reklam
- Ochrana před sledováním
- Blokování obtěžování
- DNS ochrana
- Firewall
- Bezpečné prohlížení
- Integrace s AdGuard VPN

Více informací o jednotlivých funkcích najdete níže.

### Blokování reklam

Funkce blokuje reklamy pomocí blokování reklam a jazykově specifických filtrů. Chcete-li se dozvědět více o mechanismu blokování reklam, můžete si přečíst [vyhrazený článek](/general/ad-filtering/how-ad-blocking-works).

Základní ochrana účinně blokuje reklamy na většině webových stránek. Chcete-li lépe přizpůsobit blokování reklam, můžete:

- Povolit jazykově specifické filtry — obsahují pravidla filtrování pro blokování reklam na webových stránkách v konkrétních jazycích

- Přidejte webové stránky na seznam povolených – tyto weby nebudou AdGuardem filtrovány

- Vytvářet uživatelská pravidla – AdGuard je použije na konkrétních webových stránkách. [Naučte se vytvářet vlastní uživatelská pravidla](/general/ad-filtering/create-own-filters)

![Ad blocking *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### Ochrana před sledováním

*Ochrana před sledováním* (dříve *Režim utajení*) zabraňuje webovým stránkám shromažďovat informace o vás, jako jsou vaše IP adresy, informace o vašem prohlížeči a operačním systému, rozlišení obrazovky a stránce, na kterou jste přišli nebo ze které jste byli přesměrováni. Může také blokovat soubory cookies, které webové stránky používají k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k rozpoznání při další návštěvě.

![Tracking protection *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

K dispozici jsou tři předkonfigurované úrovně ochrany. Zde jsou uvedeny funkce, které jsou v nich povoleny:

 1. **Standardní**

    a. *Blokování slídičů*. Toto nastavení chrání před online čítači a nástroji webové analýzy pomocí AdGuard filtru ochrany sledování

    b. *Požádat webové stránky, aby vás nesledovaly*. Toto nastavení odesílá požadavky [Global Privacy Control](https://globalprivacycontrol.org/) a [Do-Not-Track](https://en.wikipedia.org/wiki/Do_Not_Track) na navštívené webové stránky a žádá webové aplikace, aby zakázaly sledování vaší aktivity

    c. *Odstranit X-Client-Data hlavičku*. Toto nastavení brání prohlížeči Google Chrome odesílat informace o verzi a úpravách do domén Google (včetně DoubleClick a Google Analytics)

 2. **Vysoká**

    a. *Blokování slídičů*

    b. *Odebrat sledovací parametry z URL*. Toto nastavení odebere parametry sledování, jako je `utm_*` a `fb_ref` z adres URL pomocí AdGuard filtru sledování URL

    c. *Skrýt vyhledávací dotazy*

    d. *Požádat webové stránky, aby vás nesledovaly*

    e. *Automatické odstranění cookies třetích stran*. Toto nastavení omezuje životnost TTL cookie třetích stran na 180 minut

    :::caution

    This setting deletes all third-party cookies, including the information of your logins through social networks or other third-party services. You may have to periodically re-log in to some websites and face other cookie-related issues. To block only tracking cookies, use the *Standard* protection level.


:::

    f. *Odstranit X-Client-Data hlavičku*

 3. **Maximální**

    a. *Blokování slídičů*

    b. *Odebrat sledovací parametry z URL*

    c. *Skrýt vyhledávací dotazy*

    d. *Požádat webové stránky, aby vás nesledovaly*

    e. *Automatické odstranění cookies třetích stran*

    f. *Blokovat WebRTC*. Tento způsob nastavení blokuje WebRTC, technologii, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi a která může umožnit ostatním zjistit vaši skutečnou IP adresu, i když používáte proxy nebo VPN

    g. *Blokovat Push API*. Tato funkce brání webovým stránkám v odesílání oznámení, bez ohledu na stav aktivity vašeho prohlížeče

    h. *Blokovat Location API*. Toto nastavení zabrání prohlížečům v detekci vašich dat GPS

    i. *Skrýt třetím stranám Referrer ID*. Toto nastavení skrývá záhlaví HTTP, které obsahuje URL adresu úvodní stránky a změní ji na výchozí nebo specifikovanou. V příslušném poli je možné nastavit vlastní Referrer ID

    j. *Skrýt identifikaci Vašeho prohlížeče*. Toto nastavení odstraňuje identifikační informace ze záhlaví identifikátora prohlížeče, které obvykle obsahuje název a verzi prohlížeče, operačního systému a nastavení jazyka

    k. *Odstranit X-Client-Data hlavičku*

Ochranu před sledování můžete jemně doladit výběrem úrovně ochrany *Vlastní*. [Více informací o dalších nastaveních ochrany před sledováním](/general/stealth-mode)

### Blokování obtěžování

Tato funkce je založena na AdGuard filtrech obtěžování a umožňuje blokovat vyskakovací okna, okna online asistentů, oznámení o souborech cookies, výzvy ke stažení mobilních aplikací a podobné obtěžující prvky. [Více informací o filtrech obtěžování](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS ochrana

*DNS ochrana* umožňuje filtrovat DNS požadavky pomocí vybraného DNS serveru, DNS filtrů a uživatelských pravidel:

- Některé DNS servery mají seznamy blokování, které pomáhají blokovat DNS požadavky na potenciálně škodlivé domény

- Kromě DNS serverů může AdGuard filtrovat DNS požadavky sám pomocí speciálního DNS filtru. Obsahuje velký seznam reklamních a sledovacích domén — požadavky na ně jsou přesměrovány do "černé díry" serveru

- Domény můžete také blokovat a odblokovat vytvořením uživatelských pravidel. Možná si budete muset přečíst náš článek o [syntaxi pravidel DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

V této části můžete vybrat DNS server pro řešení DNS požadavků, blokování reklam a slídičů a šifrování DNS přenosů. Klepnutím na server si přečtěte jeho celý popis a vyberte protokol. Pokud jste požadovaný server nenašli, můžete jej přidat ručně:

- Klikněte na *Přidat DNS server* a zadejte adresu serveru (nebo adresy)

- Případně můžete vybrat DNS server ze seznamu [známých poskytovatelů DNS](https://adguard-dns.io/kb/general/dns-providers/) a kliknout na *Přidat do AdGuardu* vedle něj

- Pokud používáte soukromý server AdGuard DNS, můžete jej přidat do AdGuardu z [ovládacího panelu](https://adguard-dns.io/dashboard/)

 Ve výchozím nastavení je vybrán *Automatický DNS*. Nastaví DNS server na základě AdGuardu a nastavení zařízení. Pokud máte povolenou integraci s AdGuard VPN nebo jiným proxy serverem SOCKS5, připojí se k *AdGuard DNS bez filtrování* nebo k jinému serveru, který zadáte. Ve všech ostatních případech se připojuje k DNS serveru vybranému v nastavení zařízení.

#### DNS filtry

Tato část umožňuje přidávat vlastní DNS filtry a pravidla DNS filtrování. Další filtry najdete na [filterlists.com](https://filterlists.com/).

### Firewall

Tato funkce pomáhá spravovat přístup k internetu pro konkrétní aplikace nainstalované v zařízení a pro zařízení obecně.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Globální pravidla brány firewall

Tato část umožňuje řídit přístup k internetu pro celé zařízení.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Tato pravidla platí pro všechny aplikace v zařízení, pokud jste pro ně nenastavili vlastní pravidla.

#### Vlastní pravidla brány firewall

V této části můžete řídit přístup k internetu pro konkrétní aplikace — blokovat ty, které nepovažujete za důvěryhodné, nebo naopak odblokovat ty, které chcete používat navzdory globálním pravidlům brány firewall.

1. Otevřete *Vlastní pravidla brány firewall*. V části *Aplikace s vlastními pravidly* klepněte na *Přidat aplikaci*.

    ![Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Vyberte aplikaci, pro kterou chcete nastavit jednotlivá pravidla.

    ![Adding an app to Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. V části *Dostupná vlastní pravidla* vyberte ta, která chcete nakonfigurovat a klepněte na ikonu "+". Pravidla se nyní objeví části *Použitá vlastní pravidla*.

    ![Added rule *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. Pokud potřebujete zablokovat určitý typ připojení, přepněte přepínač doleva. Pokud to chcete povolit, ponechte přepínač zapnutý. Vlastní pravidla jsou nadřazena globálním pravidlům: jakékoli změny provedené v části *Globální pravidla brány firewall* nebudou mít na tuto aplikaci vliv.

Chcete-li odstranit pravidlo nebo aplikaci v části *Vlastní pravidla*, přejeďte prstem doleva.

### Rychlé akce

*Rychlé akce* jsou založeny na požadavcích z *Nedávné aktivity* (které lze nalézt v části *Statistiky*). Tato část zobrazuje, které aplikace se nedávno připojily k internetu.

![Quick actions *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

Pokud uvidíte aplikaci, která by vůbec neměla používat internet, nebo aplikaci, kterou jste v poslední době nepoužívali, můžete její přístup zablokovat.

### Bezpečné prohlížení

Bezpečné prohlížení AdGuard vás chrání před návštěvou těchto nebezpečných stránek. Také vás upozorní na potenciální škodlivý software.

![Browsing Security *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

Pokud se chystáte navštívit nebezpečnou webovou stránku, Bezpečné prohlížení zobrazí následující varování:

![Browsing Security warning *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Upozorňujeme, že AdGuard pro Android není antivirový program. Nezabrání stahování virů ani neodstraní již stažené viry. Chcete-li své zařízení plně ochránit, doporučujeme používat AdGuard ve spojení s antivirovým programem.

Bezpečné prohlížení je bezpečné: AdGuard neví, jaké webové stránky navštěvujete. Ke kontrole zabezpečení webových stránek používá místo adres URL předpony hash.

### Integrace s AdGuard VPN

AdGuard pro Android vytváří lokální VPN pro filtrování provozu. Při spuštěné aplikaci AdGuard pro Android tedy nelze používat jiné aplikace VPN. Aplikace AdGuard i AdGuard VPN však mají režimy integrace, které umožňují jejich společné používání.

V tomto režimu funguje AdGuard VPN jako odchozí proxy, přes který AdGuard směruje svůj provoz. To umožňuje AdGuardu vytvořit rozhraní VPN a blokovat reklamy a slídiče lokálně, zatímco AdGuard VPN směruje veškerý provoz přes vzdálený server.

Pokud AdGuard VPN ukončíte, přestane ji AdGuard používat jako odchozí proxy server. Pokud AdGuard zakážete, bude AdGuard VPN směrovat provoz přes vlastní rozhraní VPN.

Pokud máte Blokátor reklam AdGuard a nainstalujete AdGuard VPN, blokátor reklam to detekuje a automaticky povolí *Integraci s AdGuard VPN*. Totéž se děje i obráceně. Všimněte si, že pokud jste povolili integraci, nebudete moci spravovat výjimky aplikací a připojovat se k DNS serverům z aplikace AdGuard VPN. Aplikace, které mají být směrovány přes tunel VPN, můžete určit prostřednictvím *Nastavení* → *Filtrování* → *Síť* → *Proxy* → *Aplikace provozované skrze proxy*. Chcete-li vybrat DNS server, otevřete AdGuard → *DNS ochrana* → *DNS server*.

## Správa aplikací

V této části můžete spravovat nastavení oprávnění a filtrování pro všechny aplikace nainstalované v zařízení.

![App management *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Kliknutím na aplikaci můžete spravovat její nastavení:

- Filtrovat její data pomocí AdGuardu
- Blokovat reklamy a slídiče v této aplikaci (*Filtrovat obsah aplikace*)
- Filtrovat její HTTPS provoz (pro aplikace, které nejsou v prohlížeči, to vyžaduje [instalaci certifikátu AdGuard CA do systémového úložiště](/adguard-for-android/solving-problems/https-certificate-for-rooted/), který je k dispozici na zařízeních s přístupem root)
- Směrovat skrze zadaný proxy server nebo AdGuard VPN v režimu integrace

![App management: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Z kontextového menu můžete také přistupovat ke statistikám aplikace.

![App management: Chrome. Context menu *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Kompatibilní a nekompatibilní aplikace

Ve výchozím nastavení jsou skrze AdGuard směrovány a filtrovány pouze kompatibilní aplikace. Tyto aplikace fungují správně i po zapnutí filtrování.

Nekompatibilní aplikace, jako je Správce stahování, rádio, systémové aplikace s UID 1000 a 1001 (například služby Google Play), mohou při směrování skrze AdGuard fungovat nesprávně. Proto se při pokusu o směrování nebo filtrování všech aplikací může zobrazit následující upozornění:

![Route all apps dialog *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Pro zajištění správného fungování všech aplikací nainstalovaných v zařízení důrazně doporučujeme, abyste skrze AdGuard směrovali pouze kompatibilní aplikace. Úplný seznam aplikací, které se nedoporučují filtrovat, najdete v části *Nastavení* → *Obecné* → *Pokročilé* → *Nízkoúrovňová nastavení* → *Ochrana* → *Aplikace ve výjimkách*.

## Statistiky

Tato funkce vám poskytne kompletní přehled o provozu ve vašem zařízení: kolik požadavků je odesláno a kterým společnostem, kolik dat je odesláno a staženo, jaké požadavky jsou blokovány atd.

![Statistics *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Statistiky jsou rozděleny do různých sekcí.

### Požadavky

Tato sekce zobrazuje počet zablokovaných reklam, slídičů a celkový počet požadavků za vybrané časové období: 24 hodin, 7 dní, 30 dní nebo po celou dobu. Požadavky můžete filtrovat také podle typu dat: mobilní data, Wi-Fi nebo všechna data dohromady.

*Nedávná aktivita*, dříve známá jako *Záznam filtrování* zobrazuje posledních 10000 požadavků zpracovaných AdGuardem. Klepnutím na *Přizpůsobit* filtrujte požadavky podle stavu (*obvyklé*, *blokované*, *modifikované* nebo *na seznamu povolených*) nebo původní (*vlastní* nebo *třetích stran*).

Klepnutím na požadavek můžete zobrazit jeho podrobnosti a přidat pravidlo blokování nebo odblokování.

### Využití dat

Tato sekce zobrazuje množství staženého, nahraného a ušetřeného datového provozu za vybrané časové období a typ dat. Klepnutím na *uložené*, *nahrané* nebo *stažené* zobrazíte graf využití dat v průběhu času.

### Aplikace

Tato sekce zobrazuje statistiky všech aplikací nainstalovaných ve vašem zařízení. Aplikace můžete třídit podle počtu blokovaných reklam, slídičů nebo podle počtu odeslaných požadavků.

Klepnutím na *Zobrazit všechny aplikace* rozbalíte seznam svých aplikací seřazený podle počtu reklam, slídičů nebo požadavků.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Pokud klepnete na aplikaci, zobrazí se její úplné statistiky: požadavky, které odesílá, domény a společnosti, na které obrací.

### Společnosti

Tato sekce zobrazuje společnosti, na které se vaše zařízení obrací. Co to znamená? AdGuard detekuje domény, do kterých vaše zařízení odesílá požadavky a určuje, kterým společnostem patří. Databázi společností najdete na [GitHubu](https://github.com/AdguardTeam/companiesdb).

### Statistiky DNS

Tato sekce zobrazuje údaje o požadavcích zpracovávaných *DNS ochranou*. Celkový počet odeslaných požadavků a počet požadavků zablokovaných AdGuardem si můžete prohlédnout v číslech a grafech. Najdete zde také statistiky o množství ušetřených, stažených a nahraných dat.

### Využití baterie

Tato sekce zobrazuje statistiky o prostředcích zařízení použitých AdGuardem za posledních 24 hodin. Údaje se mohou lišit od nastavení vašeho zařízení. K tomu dochází proto, že systém připisuje provoz filtrovaných aplikací AdGuardu. Zařízení tedy zobrazuje, že AdGuard spotřebovává více prostředků, než ve skutečnosti spotřebovává. [Přečtěte si více o problémech s baterií a spotřebou](/adguard-for-android/solving-problems/battery/)

## Nastavení

### Obecné

Tato sekce vám pomůže spravovat vzhled a chování aplikace: můžete nastavit barevný motiv a jazyk, spravovat oznámení a další. Pokud chcete týmu AdGuard pomoci detekovat pády aplikace a zkoumat použitelnost, můžete povolit *Automatické hlášení pádů* a *Odesílání technických a interakčních dat*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

V sekci *Aktualizace aplikace a filtrů* můžete nakonfigurovat automatické aktualizace filtrů a vybrat kanál aktualizace aplikace. Vyberte *Hlavní* pro větší stabilitu a *Beta* nebo *Nightly* pro včasný přístup k novým funkcím.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Pokročilá nastavení

*Automatizace* vám umožňuje spravovat AdGuard prostřednictvím aplikací Tasker.

*Watchdog* pomáhá chránit AdGuard před ukončením systémem ([další informace o režimu úspory baterie v Androidu](/adguard-for-android/solving-problems/background-work/)). Zadaná hodnota bude interval v sekundách mezi kontrolami watchdog.

*Úroveň záznamu* definuje, jaká data o provozu aplikace by měla být zaznamenána. Ve výchozím nastavení aplikace shromažďuje údaje o vlastních událostech. Úroveň *Ladění* zaznamenává více událostí – povolte ji, pokud o to tým AdGuardu požádá, abyste mu pomohli lépe porozumět problému. [Více informací o shromažďování a odesílání záznamů](/adguard-for-android/solving-problems/logcat/)

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Sekce *Nízkoúrovňová nastavení* je určena pro zkušené uživatele. [Více informací o nízkoúrovňových nastavení](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Filtrování

Tato sekce umožňuje spravovat nastavení HTTPS filtrování, filtry a uživatelské skripty a nastavit proxy server.

![Filtering *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Síť

##### HTTPS filtrování

K blokování reklam a slídičů na většině webových stránek a ve většině aplikací potřebuje AdGuard filtrovat jejich provoz HTTPS. [Více informací o HTTPS filtrování](/general/https-filtering/what-is-https-filtering)

###### Bezpečnostní certifikáty

Za účelem správy šifrovaného provozu nainstaluje AdGuard do vašeho zařízení certifikát CA. Je to bezpečné: provoz je filtrován lokálně a AdGuard ověřuje bezpečnost připojení.

Ve starších verzích Androidu se certifikát nainstaluje automaticky. V systému Android 11 a novějších verzích je třeba certifikát nainstalovat ručně. [Pokyny k instalaci](/adguard-for-android/solving-problems/manual-certificate/)

Certifikát CA v uživatelském úložišti stačí k filtrování provozu HTTPS v prohlížečích a některých aplikacích. Existují však aplikace, které důvěřují pouze certifikátům ze systémového úložiště. Chcete-li tam filtrovat provoz HTTPS, musíte do systémového úložiště nainstalovat CA certifikát AdGuardu. [Pokyny](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### Filtrované aplikace HTTPS

Tato sekce obsahuje seznam aplikací, pro které AdGuard filtruje provoz HTTPS. Upozorňujeme, že nastavení lze použít pro všechny aplikace pouze v případě, že máte certifikáty CA v uživatelském úložišti i v systémovém úložišti.

###### Weby s HTTPS filtrováním

Toto nastavení umožňuje spravovat weby, pro které má AdGuard filtrovat provoz HTTPS.

Filtrování HTTPS umožňuje AdGuardu filtrovat obsah požadavků a odezev, tato data však nikdy neshromažďujeme ani neukládáme. Pro zvýšení bezpečnosti však z HTTPS filtrování vyřazujeme weby, [které obsahují potenciálně citlivé informace](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Výběrem jednoho z režimů můžete do výjimek přidat také weby, které považujete za nezbytné:

- Vyloučení konkrétních webových stránek z HTTPS filtrování
- Filtrování provozu HTTPS pouze na webech přidaných do výjimek

Ve výchozím nastavení také nefiltrujeme weby s certifikáty s rozšířeným ověřením (EV), jako jsou například finanční webové stránky. Pokud potřebujete, můžete také povolit možnost *Filtrovat weby s certifikáty EV*.

##### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

##### Routing mode

This section allows you to select the traffic filtering method.

- *Local VPN* filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The *Local VPN* mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [*Integrated mode*](#integration-with-adguard-vpn).

:::

- *Automatic proxy* is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Filtry

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::note

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

#### Uživatelské skripty

Userscripts are mini-programs written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra is a custom userscript that prevents websites from bypassing ad blockers and re-inserting blocked ads.

### Licence

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](#free-vs-full-version)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status if you have recently extended its validity
- Open the AdGuard account to manage your license there
- Reset your license – for example, if you've reached device limit for this license and want to apply another one

![License screen *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Podpora

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting *[FAQ](https://adguard.com/support/adguard_for_android.html)* or this knowledge base before contacting support.

![Support *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via *Report incorrect blocking*.

For unusual app behavior, select *Report a bug*. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use *Request a feature*.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::

### Free vs full version

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard for Android has a free and a paid version. Paid features extend AdGuard's capabilities:

- *Ad blocking in apps* allows you to block ads in non-browser apps. You can specify apps for filtering in [*App management*](#app-management)

:::note

AdGuard uses its own ad-free media player to block ads in YouTube videos. To open the media player, open the YouTube app and share a video with AdGuard. This feature is free.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Browsing Security* warns you if you're about to visit a potentially dangerous website. [Back to Browsing Security](#browsing-security)

- *Custom filters and user rules* allow you to add your own filtering rules and third-party filters to fine-tune ad blocking. [Back to filters](#filters)

- *Userscripts* allow you to use AdGuard Extra to bypass ad blocker bans and install other userscripts to extend your browser's functionality. [Back to userscripts](#userscripts)

You can get access to these features by [purchasing a license](https://adguard.com/license.html). [How to activate the license](/general/license/activation/#activating-adguard-for-android)

### Rooted vs non-rooted devices

Due to additional security measures of Android apps, some AdGuard features are only available on rooted devices. Here's the list of them:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Installing a certificate into the system store is only possible on rooted devices
- The [**Automatic proxy** routing mode](#routing-mode) requires root access due to Android's limitations on system-wide traffic filtering
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
