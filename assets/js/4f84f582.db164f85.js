"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7519],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={title:"Browser Assistant",sidebar_position:3},i=void 0,s={unversionedId:"adguard-for-mac/browser-assistant",id:"adguard-for-mac/browser-assistant",title:"Browser Assistant",description:"AdGuard Assistant\u2019s primary function is to manage filtering directly from the browser. It has existed for quite a long time, and its form and content have changed. More precisely, it used to be a mere userscript incorporated into the AdGuard for Mac app and became a full-fledged browser extension. Now it definitely yields more benefits.",source:"@site/docs/adguard-for-mac/browser-assistant.md",sourceDirName:"adguard-for-mac",slug:"/adguard-for-mac/browser-assistant",permalink:"/KnowledgeBase/adguard-for-mac/browser-assistant",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/browser-assistant.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Browser Assistant",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install/Uninstall",permalink:"/KnowledgeBase/adguard-for-mac/installation"},next:{title:"Manual certificate installation",permalink:"/KnowledgeBase/adguard-for-mac/solving-problems/manual-certificate-installation"}},l={},d=[{value:"Benefits",id:"benefits",level:2},{value:"Independence",id:"independence",level:3},{value:"Compatibility with the main app",id:"compatibility-with-the-main-app",level:3},{value:"Smart onboarding",id:"smart-onboarding",level:3},{value:"Separate tab in settings",id:"separate-tab-in-settings",level:2},{value:"Legacy Assistant",id:"legacy-assistant",level:2},{value:"How to install AdGuard Browser Assistant",id:"how-to-install-adguard-browser-assistant",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AdGuard Assistant\u2019s primary function is to manage filtering directly from the browser. It has existed for quite a long time, and its form and content have changed. More precisely, it used to be a mere userscript incorporated into the AdGuard for Mac app and became a full-fledged browser extension. Now it definitely yields more benefits."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/assistantmac.jpg",alt:"Browser Assistant"})),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("h3",{id:"independence"},"Independence"),(0,r.kt)("p",null,"AdGuard Browser Assistant is an extension installed in a browser, so there is no need to wait for the userscript to be injected into the filtered web page, as it was with the preceding one. In other words, it is more autonomous from the main AdGuard app. Still, Browser Assistant needs the installed AdGuard for Mac, because there is no point in using the extension without the app."),(0,r.kt)("h3",{id:"compatibility-with-the-main-app"},"Compatibility with the main app"),(0,r.kt)("p",null,"If you got into the habit of using our previous AdGuard ad blocker extension ",(0,r.kt)("a",{parentName:"p",href:"/adguard-browser-extension/integration-mode"},"in Integration mode"),", you may like the solution that we have developed for the new Browser Assistant."),(0,r.kt)("admonition",{title:"Background information",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In previous versions of the AdGuard Browser Extension (before v3.5), if you had it installed along with a desktop AdGuard for Mac, the extension took over the functions of Assistant, stopped filtering itself and relied on the app to do this. The extension and the app worked in conjunction but sometimes the integration would fail. Some websites would stop being protected by the desktop program and be backed up only by the less powerful extension."),(0,r.kt)("p",{parentName:"admonition"},"When using the Browser Assistant, all these problems don\u2019t matter as there can be no conflicts in essence. The role of the Browser Assistant is well defined and it can\u2019t hinder the functioning of the main app, so there is no need to worry.")),(0,r.kt)("h3",{id:"smart-onboarding"},"Smart onboarding"),(0,r.kt)("p",null,"When AdGuard for Mac is installed for the first time, the thing a user encounters in the first place is the onboarding. During this process the user quickly learns about AdGuard's settings and can customize filtering to their liking. At one stage AdGuard will determine the user's default browser and provide them with a download link for the new Assistant."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/assistant_onboarding_safari.jpg",alt:"Installing a new browser assistant"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On rare occasions, a browser may prove incompatible with the Browser Assistant, and the user will be offered to install the legacy version instead.")),(0,r.kt)("h2",{id:"separate-tab-in-settings"},"Separate tab in settings"),(0,r.kt)("p",null,"The new Browser Assistant has its own tab in AdGuard for Mac settings, together with Stealth Mode, Browsing Security, Parental Control and others. Don\u2019t worry if you missed the opportunity to install Browser Assistant during the onboarding, you'll find this option in the app's settings. Besides, there is a checkbox to enable the legacy Assistant."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/assistant-separate-tab.png",alt:"Browser Assistant tab"})),(0,r.kt)("h2",{id:"legacy-assistant"},"Legacy Assistant"),(0,r.kt)("p",null,"Legacy Assistant is the previous version of Assistant, which is a mere userscript, not a browser extension. Basically, there are two cases when you might want to pick it instead of the new Browser Assistant: 1) the new Assistant is not available for your browser; 2) you are used to the green shield icon and want to leave things as they were.  If you recognize yourself in any of these scenarios, then the legacy version will suit you."),(0,r.kt)("h2",{id:"how-to-install-adguard-browser-assistant"},"How to install AdGuard Browser Assistant"),(0,r.kt)("p",null,"Technically, you won\u2019t need to do it on your own: during the onboarding process AdGuard app will determine your default browser and offer to install Browser Assistant for it. Yet, if you missed that step, you can download it yourself."),(0,r.kt)("p",null,"AdGuard Browser Assistant is available for all popular browsers: Chrome, Firefox, Safari, Edge, Opera, and Yandex. To install the Browser Assistant for your default browser, you can do it directly from the app settings, but you also have an opportunity to install it for other browsers."),(0,r.kt)("p",null,"To install the one you need (or many, it is not prohibited but even encouraged), go to ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-assistant/overview.html"},"our website"),", click the browser icon and then the ",(0,r.kt)("em",{parentName:"p"},"Install")," button. That\u2019s it!"))}p.isMDXComponent=!0}}]);