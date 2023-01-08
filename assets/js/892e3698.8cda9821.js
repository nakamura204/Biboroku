"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=l,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={id:"multi-layer-perceptron",slug:"/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",sidebar_position:3,sidebar_label:"MLP"},i=void 0,o={unversionedId:"machine-learning/basics/multi-layer-perceptron",id:"machine-learning/basics/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/machine-learning/basics/mlp.md",sourceDirName:"machine-learning/basics",slug:"/multi-layer-perceptron",permalink:"/Biboroku/docs/multi-layer-perceptron",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"multi-layer-perceptron",slug:"/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",sidebar_position:3,sidebar_label:"MLP"},sidebar:"tutorialSidebar",previous:{title:"\u4ea4\u5dee\u691c\u8a3c",permalink:"/Biboroku/docs/cross_validation"},next:{title:"\u81ea\u5df1\u6559\u5e2b\u3042\u308a\u5b66\u7fd2",permalink:"/Biboroku/docs/self-supervised-learning"}},p={},c=[{value:"MLP",id:"mlp",level:2},{value:"\u6d3b\u6027\u5316\u95a2\u6570",id:"\u6d3b\u6027\u5316\u95a2\u6570",level:2},{value:"\u56de\u5e30MLP",id:"\u56de\u5e30mlp",level:2},{value:"\u5206\u985eMLP",id:"\u5206\u985emlp",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"mlp"},"MLP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u3064\u306e\u5165\u529b\u5c64\u3068\u4e00\u3064\u4ee5\u4e0a\u306eTLU\u5c64\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u96a0\u308c\u5c64\u3068\u6700\u5f8c\u306b\u51fa\u529b\u5c64\u3068\u547c\u3070\u308c\u308bTLU\u5c64\u304b\u3089\u306a\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30d7\u30ed\u30d1\u30b2\u30fc\u30b7\u30e7\u30f3(\u8aa4\u5dee\u9006\u4f1d\u64ad\u6cd5)\u3068\u547c\u3070\u308c\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u7528\u3044\u3066\u8a13\u7df4\u304c\u884c\u308f\u308c\u308b\u3002\u3053\u306e\u8a13\u7df4\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8aa4\u5dee\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u306b\u3001\u500b\u3005\u306e\u63a5\u7d9a\u91cd\u307f\u3068\u30d0\u30a4\u30a2\u30b9\u9805\u3092\u3069\u306e\u3088\u3046\u306b\u64cd\u4f5c\u3059\u3079\u304d\u304b\u81ea\u52d5\u7684\u306b\u8a08\u7b97\u3059\u308b\u3002")),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u624b\u9806\u3067\u8a08\u7b97\u304c\u884c\u308f\u308c\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5ea6\u306b\u4e00\u500b\u306e\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u51e6\u7406\u3059\u308b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8a13\u7df4\u30bb\u30c3\u30c8\u5168\u4f53\u3092\u8907\u6570\u56de\u51e6\u7406\u3059\u308b\u3002(\u3053\u3053\u306e\u30d1\u30b9\u3092\u30a8\u30dd\u30c3\u30af\uff08epoch\uff09\u3068\u547c\u3076)"),(0,l.kt)("li",{parentName:"ul"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5165\u529b\u5c64\u306b\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u4e00\u3064\u305a\u3064\u6e21\u3059\u3002\u5165\u529b\u5c64\u306f\u7b2c\u4e00\u306e\u96a0\u308c\u5c64\u306b\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u9001\u308b\u3002\u6b21\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3053\u306e\u5c64\u306e\u3059\u3079\u3066\u306e\u30cb\u30e5\u30fc\u30ed\u30f3\u306e\u51fa\u529b\u3092\u8a08\u7b97\u3057\u3001\u7d50\u679c\u3092\u6b21\u306e\u96a0\u308c\u5c64\u306b\u9001\u308b\u3002\u3053\u308c\u3092\u6700\u5f8c\u306e\u5c64\u307e\u3067\u7d9a\u3051\u308b\u3002\u3053\u308c\u304c\u524d\u9032\u30d1\u30b9\u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u51fa\u529b\u8aa4\u5dee\u3092\u95a2\u6570\u3001\u6307\u6a19\u306b\u3088\u3063\u3066\u6e2c\u5b9a\u3059\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u500b\u3005\u306e\u51fa\u529b\u63a5\u7d9a\u90e8\u304c\u8aa4\u5dee\u306b\u3069\u308c\u3060\u3051\u5f71\u97ff\u3092\u53ca\u307c\u3057\u3066\u3044\u308b\u304b\u3092\u8a08\u7b97\u3059\u308b\u3002\u5165\u529b\u5c64\u306b\u9054\u3059\u308b\u307e\u3067\u3053\u308c\u3092\u7e70\u308a\u66ff\u3048\u3059\u3002(\u5f8c\u9000\u30d1\u30b9)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8a08\u7b97\u3057\u305f\u8aa4\u5dee\u306e\u52fe\u914d\u3092\u4f7f\u3063\u3066\u9006\u65b9\u5411\u306b\u9032\u307f\u3001\u3059\u3079\u3066\u306e\u63a5\u7d9a\u91cd\u307f\u3092\u66f4\u65b0(\u8aa4\u5dee\u304c\u5c0f\u3055\u304f\u306a\u308b\u3088\u3046\u306b)\u3059\u308b\u3002")),(0,l.kt)("h2",{id:"\u6d3b\u6027\u5316\u95a2\u6570"},"\u6d3b\u6027\u5316\u95a2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u30b7\u30b0\u30e2\u30a4\u30c9\u95a2\u6570\n",(0,l.kt)("img",{alt:"reguralization_img001",src:r(3889).Z,width:"480",height:"480"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53cc\u66f2\u7dda\u95a2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ReLU\u95a2\u6570"))),(0,l.kt)("h2",{id:"\u56de\u5e30mlp"},"\u56de\u5e30MLP"),(0,l.kt)("h2",{id:"\u5206\u985emlp"},"\u5206\u985eMLP"),(0,l.kt)("p",null,"tags:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"machine learning\nkeywords:"),(0,l.kt)("li",{parentName:"ul"},"machine learning")),(0,l.kt)("hr",null))}s.isMDXComponent=!0},3889:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20211212155552-b0297fa1801fb6c43398a559ced75b33.gif"}}]);