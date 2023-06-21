"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7413],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(7462),o=(r(7294),r(4137));const n={title:"How to report a website",sidebar_position:3},i=void 0,l={unversionedId:"guides/report-website",id:"guides/report-website",title:"How to report a website",description:"When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:",source:"@site/docs/guides/report-website.md",sourceDirName:"guides",slug:"/guides/report-website",permalink:"/KnowledgeBase/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to report a website",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to install a proxy certificate",permalink:"/KnowledgeBase/guides/proxy-certificate"},next:{title:"How to report bugs",permalink:"/KnowledgeBase/guides/report-bugs"}},s={},d=[{value:"Report a website",id:"report",level:2},{value:"Browser extension",id:"extension",level:3},{value:"Windows",id:"windows",level:3},{value:"Android",id:"android",level:3},{value:"Mac",id:"mac",level:3},{value:"iOS",id:"ios",level:3},{value:"Filling in the form",id:"form",level:2},{value:"Diagnosis of an issue",id:"issue",level:2},{value:"<strong>Filters</strong>",id:"filters",level:3},{value:"<strong>Stealth Mode</strong>",id:"stealth-mode",level:3},{value:"<strong>Extensions</strong>",id:"extensions",level:3},{value:"<strong>Third-party blockers</strong>",id:"third-party-blockers",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Incorrect user rules;"),(0,o.kt)("li",{parentName:"ul"},"Modified algorithms of adding ads;"),(0,o.kt)("li",{parentName:"ul"},"Added filters/extensions from third-party developers;"),(0,o.kt)("li",{parentName:"ul"},"The authors of one of the filters made a mistake when creating the rule;"),(0,o.kt)("li",{parentName:"ul"},"Advertising reinsertion. Find more about this method in our ",(0,o.kt)("a",{parentName:"li",href:"https://adguard.com/blog/ad-reinsertion.html"},"blog"),".")),(0,o.kt)("p",null,"You can help us by filling in an application form with examples of ads you faced with. To do it, please, use instructions for your OS."),(0,o.kt)("h2",{id:"report"},"Report a website"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a ",(0,o.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"direct link"),", you\u2019ll need to enter data manually.")),(0,o.kt)("p",null,"To report a reinsertion of an ad or incorrect displaying of a website, you need to:"),(0,o.kt)("h3",{id:"extension"},"Browser extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser extension settings by clicking on the corresponding icon;"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png",alt:"extension *mobile"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After you've filled in the form, an issue on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("a",{parentName:"li",href:"/adguard-for-windows/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,o.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png",alt:"windows *border"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,o.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open AdGuard settings;"),(0,o.kt)("li",{parentName:"ul"},"\u0421hoose ",(0,o.kt)("strong",{parentName:"li"},"Support"),", then ",(0,o.kt)("strong",{parentName:"li"},"Send Feedback")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Missed ad"),"/",(0,o.kt)("strong",{parentName:"li"},"Incorrect blocking"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png",alt:"android *mobile"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After you've filled in the form, an issue on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,o.kt)("h3",{id:"mac"},"Mac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("a",{parentName:"li",href:"/adguard-for-mac/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,o.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png",alt:"mac *mobile"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,o.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open AdGuard settings;"),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Support"),", then ",(0,o.kt)("strong",{parentName:"li"},"Report incorrect blocking"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png",alt:"ios *mobile"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill in the form for reporting a complaint;"),(0,o.kt)("li",{parentName:"ul"},"After you've done it, an issue on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub")," will be created automatically. There will also be a link to monitor progress towards the solution of your problem.")),(0,o.kt)("h2",{id:"form"},"Filling in the form"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a ",(0,o.kt)("a",{parentName:"p",href:"https://reports.adguard.com/en/new_issue.html"},"direct link"),", you\u2019ll need to enter data manually.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Filling in the form starts with detailing the type and version of a product;")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png",alt:"forma1 *border"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Specify the type of problem and additional information on using third-party software (antivirus, VPN);")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png",alt:"forma2 *border"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png",alt:"forma3 *border"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Application configuration must be specified:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Filters you use;"),(0,o.kt)("li",{parentName:"ul"},"Stealth mode settings, if this function is enabled.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png",alt:"forma4 *border"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../take-screenshot"},"Provide a screenshot")," that captures the essence of a problem;")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Important"),": Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png",alt:"forma5 *border"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Provide additional information that will help filter developers understand the situation;")),(0,o.kt)("p",null,"Also enter your account on ",(0,o.kt)("strong",{parentName:"p"},"GitHub"),", if available (it's necessary for developers to be able to reach you in case they need some additional details);"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png",alt:"forma6 *border"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Check each step before sending the form;")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png",alt:"forma7 *mobile_border"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"You'll be provided with a link to track progress on your task.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png",alt:"forma8 *border"})),(0,o.kt)("h2",{id:"issue"},"Diagnosis of an issue"),(0,o.kt)("p",null,"This option is suitable for those who aren\u2019t afraid of difficulties and don\u2019t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS."),(0,o.kt)("p",null,"For example, you are faced with a situation that your favorite website won\u2019t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:"),(0,o.kt)("h3",{id:"filters"},(0,o.kt)("strong",{parentName:"h3"},"Filters")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disable ",(0,o.kt)("strong",{parentName:"li"},"Ad Blocker"),";"),(0,o.kt)("li",{parentName:"ol"},'If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;'),(0,o.kt)("li",{parentName:"ol"},'If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,o.kt)("li",{parentName:"ol"},"If turning off all the filters hasn't produced any results, apply rule\n",(0,o.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),";\nwhere ",(0,o.kt)("strong",{parentName:"li"},"example.com")," is an example site name that needs to be replaced by your own option;"),(0,o.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,o.kt)("strong",{parentName:"li"},"Stealth Mode"),".")),(0,o.kt)("h3",{id:"stealth-mode"},(0,o.kt)("strong",{parentName:"h3"},"Stealth Mode")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disable ",(0,o.kt)("strong",{parentName:"li"},"Stealth Mode"),";"),(0,o.kt)("li",{parentName:"ol"},"If this solved the problem, turn the module on and turn off the ",(0,o.kt)("strong",{parentName:"li"},"Stealth Mode"),' options one by one. This is done to detect which filters are "breaking" the page;'),(0,o.kt)("li",{parentName:"ol"},'If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,o.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,o.kt)("strong",{parentName:"li"},"Extensions"),".")),(0,o.kt)("h3",{id:"extensions"},(0,o.kt)("strong",{parentName:"h3"},"Extensions")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disable ",(0,o.kt)("strong",{parentName:"li"},"Extensions"),";"),(0,o.kt)("li",{parentName:"ol"},"If this solved the problem, turn on the module and turn off ",(0,o.kt)("strong",{parentName:"li"},"Extensions"),' settings one by one. This is done to find out which setting "breaks" the page;'),(0,o.kt)("li",{parentName:"ol"},'If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.')),(0,o.kt)("h3",{id:"third-party-blockers"},(0,o.kt)("strong",{parentName:"h3"},"Third-party blockers")),(0,o.kt)("p",null,"Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites.\nIf you use such programs, make sure that the problem is on the side of ",(0,o.kt)("strong",{parentName:"p"},"AdGuard"),": disable ",(0,o.kt)("strong",{parentName:"p"},"AdGuard")," filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser.\nIf the problem is caused by ",(0,o.kt)("strong",{parentName:"p"},"AdGuard"),", follow the steps described in the previous paragraphs."))}u.isMDXComponent=!0}}]);