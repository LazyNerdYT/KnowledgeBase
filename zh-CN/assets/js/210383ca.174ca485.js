"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7822],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={title:"Compatibility issues with different macOS versions",sidebar_position:4},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/big-sur-issues",id:"adguard-for-mac/solving-problems/big-sur-issues",title:"Compatibility issues with different macOS versions",description:"Currently existing problems",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/big-sur-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/big-sur-issues",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/solving-problems/big-sur-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/big-sur-issues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Compatibility issues with different macOS versions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to install AdGuard on macOS High Sierra and above",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/solving-problems/high-sierra-compatibility"},next:{title:"Installation problems solving",permalink:"/KnowledgeBase/zh-CN/adguard-for-mac/solving-problems/installation-issues"}},s={},p=[{value:"Currently existing problems",id:"currently-existing-problems",level:2},{value:"Monterey 12: currently existing problems",id:"monterey-12-currently-existing-problems",level:3},{value:"Compatibility with iCloud Private Relay",id:"compatibility-with-icloud-private-relay",level:4},{value:"Compatibility with Protect Mail Activity",id:"compatibility-with-protect-mail-activity",level:4},{value:"Monterey 12, Big Sur 11.6 and later: currently existing problems",id:"monterey-12-big-sur-116-and-later-currently-existing-problems",level:3},{value:"Compatibility with Cisco AnyConnect",id:"compatibility-with-cisco-anyconnect",level:4},{value:"Compatibility with Flutter",id:"compatibility-with-flutter",level:4},{value:"VPN apps with legacy API",id:"vpn-apps-with-legacy-api",level:4},{value:"Already fixed problems",id:"already-fixed-problems",level:2},{value:"Compatibility with Little Snitch 5",id:"compatibility-with-little-snitch-5",level:3},{value:"Compatibility with local proxies",id:"compatibility-with-local-proxies",level:3},{value:"Example 1: Configuring an upstream Shadowsocks proxy",id:"example-1-configuring-an-upstream-shadowsocks-proxy",level:4},{value:"Example 2: Configuring an upstream Surge proxy",id:"example-2-configuring-an-upstream-surge-proxy",level:4},{value:"Alternatives to using a Network Extension",id:"alternatives-to-using-a-network-extension",level:2},{value:"Using &quot;Automatic proxy&quot; filtering mode",id:"using-automatic-proxy-filtering-mode",level:3},{value:"Enabling Kernel Extension in Big Sur and Monterey",id:"enabling-kernel-extension-in-big-sur-and-monterey",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"currently-existing-problems"},"Currently existing problems"),(0,o.kt)("p",null,"Every year Apple releases a new version of macOS, introducing innovative solutions and adding new useful features. But some of them, such as Network Extensions API (Big Sur) or iCloud Private Relay (Monterey), cause some problems to many applications, AdGuard not being an exception. In this article we go over the known issues specific to each macOS version and possible ways to solve them."),(0,o.kt)("h3",{id:"monterey-12-currently-existing-problems"},"Monterey 12: currently existing problems"),(0,o.kt)("p",null,"These problems aren't fixed by Apple yet, or fixed only partially."),(0,o.kt)("h4",{id:"compatibility-with-icloud-private-relay"},"Compatibility with iCloud Private Relay"),(0,o.kt)("p",null,"Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard has no ability to block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections. When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. That's why by default, AdGuard uses the \"default route\" which disables iCloud Private Relay."),(0,o.kt)("p",null,"For a deeper understanding of this problem, read ",(0,o.kt)("a",{parentName:"p",href:"https://kb.adguard.com/en/macos/solving-problems/icloud-private-relay"},"this article"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended solution")),(0,o.kt)("p",null,"We recommend using AdGuard together with a more traditional VPN service such as ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative solution")),(0,o.kt)("p",null,'You can prevent AdGuard from using the "default route" by disabling it. It can be done via Advanced Settings -> ',(0,o.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel"),". Note that enabling this setting will cause the problems described above."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Advanced Settings"})),(0,o.kt)("h4",{id:"compatibility-with-protect-mail-activity"},"Compatibility with Protect Mail Activity"),(0,o.kt)("p",null,"Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails. However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically."),(0,o.kt)("p",null,"For a deeper understanding of this problem, read ",(0,o.kt)("a",{parentName:"p",href:"https://kb.adguard.com/en/macos/solving-problems/protect-mail-activity"},"this article"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended solution")),(0,o.kt)("p",null,"At this point, we recommend using a more traditional VPN service, such as AdGuard VPN, instead of the new Apple's privacy features."),(0,o.kt)("h3",{id:"monterey-12-big-sur-116-and-later-currently-existing-problems"},"Monterey 12, Big Sur 11.6 and later: currently existing problems"),(0,o.kt)("p",null,"These problems aren't fixed by Apple yet, or fixed only partially."),(0,o.kt)("h4",{id:"compatibility-with-cisco-anyconnect"},"Compatibility with Cisco AnyConnect"),(0,o.kt)("p",null,"AdGuard will not work together with Cisco AnyConnect while in ",(0,o.kt)("em",{parentName:"p"},"Network Extension")," mode. You have to switch AdGuard to ",(0,o.kt)("em",{parentName:"p"},"Automatic Proxy")," mode. To do so, follow ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},"this instruction"),"."),(0,o.kt)("h4",{id:"compatibility-with-flutter"},"Compatibility with Flutter"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates. If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won\'t open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:')),(0,o.kt)("p",null,"1) Use AdGuard in ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},"Automatic Proxy")," mode."),(0,o.kt)("p",null,"2) Disable SIP and switch AdGuard to Kernel Extension mode as explained ",(0,o.kt)("a",{parentName:"p",href:"#kernel-extension"},"here"),"."),(0,o.kt)("h4",{id:"vpn-apps-with-legacy-api"},"VPN apps with legacy API"),(0,o.kt)("p",null,"Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:"),(0,o.kt)("p",null,"1) Open AdGuard's menu. 2) Select ",(0,o.kt)("em",{parentName:"p"},"Preferences..."),". 3) Switch to the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab. 4) Click the ",(0,o.kt)("em",{parentName:"p"},"Applications...")," button. 5) Find the app you want to exclude and uncheck the checkbox next to it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/legacy.jpg",alt:"Filtered applications"})),(0,o.kt)("h2",{id:"already-fixed-problems"},"Already fixed problems"),(0,o.kt)("p",null,"These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur."),(0,o.kt)("h3",{id:"compatibility-with-little-snitch-5"},"Compatibility with Little Snitch 5"),(0,o.kt)("p",null,"At this moment, Network Extension mode in AdGuard isn't compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://obdev.at/products/littlesnitch/index.html"},"Little Snitch 5"),". When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates."),(0,o.kt)("p",null,"It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to ",(0,o.kt)("a",{parentName:"p",href:"#automatic-proxy"},(0,o.kt)("strong",{parentName:"a"},"Automatic Proxy"))," filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug."),(0,o.kt)("h3",{id:"compatibility-with-local-proxies"},"Compatibility with local proxies"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: now AdGuard can filter local proxies (mostly) without any problems. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.")),(0,o.kt)("p",null,"To configure an upstream proxy in AdGuard for Mac in Big Sur, you need to go to ",(0,o.kt)("em",{parentName:"p"},"AdGuard menu -> Advanced -> Advanced Settings..."),". Click on the ",(0,o.kt)("em",{parentName:"p"},"Value")," area of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to configure a proxy."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/proxy_en.jpg",alt:"Proxy settings in AdGuard for Mac on Big Sur"})),(0,o.kt)("p",null,"Enter a string that looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"scheme://user:password@host:port"),", where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"scheme")," is either ",(0,o.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"https"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"socks4")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5"),", depending on your proxy type,"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5")," proxy type, set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to make AdGuard route UDP traffic to the proxy server."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"host")," is the IP address of your proxy server,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"port")," is the desired port number to be used by the proxy server."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5://localhost:6322")," will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.")))),(0,o.kt)("p",null,"Click ",(0,o.kt)("em",{parentName:"p"},"Apply")," to make AdGuard route all traffic that went through it to the configured proxy server."),(0,o.kt)("p",null,"If you run into any problems, please contact our tech support at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,o.kt)("h4",{id:"example-1-configuring-an-upstream-shadowsocks-proxy"},"Example 1: Configuring an upstream Shadowsocks proxy"),(0,o.kt)("p",null,"Here's an example of how to configure an upstream proxy for ",(0,o.kt)("a",{parentName:"p",href:"https://shadowsocks.org/en/index.html"},"Shadowsocks"),"."),(0,o.kt)("p",null,"First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (",(0,o.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," values were chosen randomly here):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "server":"111.222.333.444",\n   "server_port":8388,\n   "local_port":1080,\n   "password":"barfoo!",\n   "timeout":600,\n   "method":"chacha20-ietf-poly1305"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can find more information about how to get started on ",(0,o.kt)("a",{parentName:"p",href:"https://shadowsocks.org/en/config/quick-guide.html"},"Shadowsocks website"),".")),(0,o.kt)("p",null,"Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' or 'Auto Mode' in its settings! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/shadowsocks.jpg",alt:"Select Manual Mode or Auto Mode in settings"})),(0,o.kt)("p",null,"Now go to ",(0,o.kt)("em",{parentName:"p"},"AdGuard menu -> Advanced -> Advanced Settings...")," and set the ",(0,o.kt)("em",{parentName:"p"},"Value")," area of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5://localhost:1080"),'. Notice that you need to use "local_port" value from the JSON file here.'),(0,o.kt)("p",null,"Because Shadowsocks uses SOCKS5, you also need to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," setting in AdGuard Advanced Settings to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to make AdGuard route UDP traffic to the proxy server."),(0,o.kt)("h4",{id:"example-2-configuring-an-upstream-surge-proxy"},"Example 2: Configuring an upstream Surge proxy"),(0,o.kt)("p",null,"In Big Sur v11.1+, there are no known conflicts between AdGuard and Surge proxy. If you are using an older version of Big Sur (prior to 11.1), check that ",(0,o.kt)("strong",{parentName:"p"},"System Proxy")," in the bottom right corner is disabled. Otherwise, Surge won't work with AdGuard. On the other hand, ",(0,o.kt)("strong",{parentName:"p"},"Enhanced Mode")," can be enabled without causing a conflict in any Big Sur version."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/surge.jpg",alt:"Configuring an upstream Surge proxy"})),(0,o.kt)("p",null,"Now go to ",(0,o.kt)("em",{parentName:"p"},"AdGuard menu -> Advanced -> Advanced Settings...")," and set the ",(0,o.kt)("em",{parentName:"p"},"Value")," area of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"socks5://localhost:6153")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:6152"),", depending on which type of proxy you want to use. Notice that you need to use ",(0,o.kt)("strong",{parentName:"p"},"port")," value that's indicated in the ",(0,o.kt)("strong",{parentName:"p"},"Events")," area of the ",(0,o.kt)("strong",{parentName:"p"},"Activity")," tab in your Surge client."),(0,o.kt)("p",null,"If you chose SOCKS5 protocol, you also need to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," setting in AdGuard Advanced Settings to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to make AdGuard route UDP traffic to the proxy server."),(0,o.kt)("h2",{id:"alternatives-to-using-a-network-extension"},"Alternatives to using a Network Extension"),(0,o.kt)("p",null,"It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first."),(0,o.kt)("h3",{id:"using-automatic-proxy-filtering-mode"},'Using "Automatic proxy" filtering mode'),(0,o.kt)("p",null,"If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to ",(0,o.kt)("em",{parentName:"p"},"Automatic proxy")," mode."),(0,o.kt)("p",null,"1) Open AdGuard's menu. 2) Select ",(0,o.kt)("em",{parentName:"p"},"Preferences..."),". 3) Switch to the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab. 4) Click the ",(0,o.kt)("em",{parentName:"p"},"Select Mode...")," button. 5) Select ",(0,o.kt)("em",{parentName:"p"},"Automatic Proxy"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/automatic-proxy_en.jpg",alt:"Switch AdGuard to Automatic proxy mode"})),(0,o.kt)("p",null,"Now AdGuard has automatically added a ",(0,o.kt)("strong",{parentName:"p"},".pac")," file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Take into account that some apps may ignore this system setting and their traffic will not be filtered.")),(0,o.kt)("h3",{id:"enabling-kernel-extension-in-big-sur-and-monterey"},"Enabling Kernel Extension in Big Sur and Monterey"),(0,o.kt)("p",null,"By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:"),(0,o.kt)("p",null,"1) Click the ",(0,o.kt)("em",{parentName:"p"},"Apple symbol")," in the Menu bar. 2) Click ",(0,o.kt)("em",{parentName:"p"},"Restart\u2026")," 3) Hold down ",(0,o.kt)("em",{parentName:"p"},"Command-R")," to reboot into Recovery Mode. 4) Click ",(0,o.kt)("em",{parentName:"p"},"Utilities"),". 5) Select ",(0,o.kt)("em",{parentName:"p"},"Terminal"),". 6) Type ",(0,o.kt)("inlineCode",{parentName:"p"},"csrutil disable"),". 7) Press ",(0,o.kt)("em",{parentName:"p"},"Return")," or ",(0,o.kt)("em",{parentName:"p"},"Enter")," on your keyboard. 8) Click the ",(0,o.kt)("em",{parentName:"p"},"Apple symbol")," in the Menu bar. 9) Click ",(0,o.kt)("em",{parentName:"p"},"Restart\u2026")),(0,o.kt)("p",null,"Now that SIP is disabled, this is how you enable Kernel Extension:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/content/kb/ad_blocker/mac/kernel_en.jpg",alt:"Enable Kernel Extension"})),(0,o.kt)("p",null,"1) Open AdGuard's menu. 2) Select ",(0,o.kt)("em",{parentName:"p"},"Preferences..."),". 3) Switch to the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab. 4) Click the ",(0,o.kt)("em",{parentName:"p"},"Select Mode...")," button. 5) Select ",(0,o.kt)("em",{parentName:"p"},"Kernel Extension"),". 6) Confirm that you want to switch to Kernel Extension."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"However, we only recommend using this method if everything else fails, as this may lead to unexpected issues.")))}d.isMDXComponent=!0}}]);