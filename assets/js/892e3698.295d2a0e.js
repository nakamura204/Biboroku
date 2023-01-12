"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2041],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>o});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=n,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function o(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var N=2;N<m;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3335:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var s=t(7462),n=(t(7294),t(3905));const m={id:"multi-layer-perceptron",slug:"/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",sidebar_position:3,sidebar_label:"MLP"},p=void 0,r={unversionedId:"machine-learning/basics/multi-layer-perceptron",id:"machine-learning/basics/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/docs/machine-learning/basics/mlp.md",sourceDirName:"machine-learning/basics",slug:"/multi-layer-perceptron",permalink:"/Biboroku/docs/multi-layer-perceptron",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"multi-layer-perceptron",slug:"/multi-layer-perceptron",title:"MLP",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u4ea4\u5dee\u691c\u8a3c\u306b\u3064\u3044\u3066\u3068\u305d\u306e\u7a2e\u985e\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",sidebar_position:3,sidebar_label:"MLP"},sidebar:"tutorialSidebar",previous:{title:"\u4ea4\u5dee\u691c\u8a3c",permalink:"/Biboroku/docs/cross_validation"},next:{title:"\u81ea\u5df1\u6559\u5e2b\u3042\u308a\u5b66\u7fd2",permalink:"/Biboroku/docs/self-supervised-learning"}},l={},N=[{value:"MLP",id:"mlp",level:2},{value:"\u6d3b\u6027\u5316\u95a2\u6570",id:"\u6d3b\u6027\u5316\u95a2\u6570",level:2},{value:"\u56de\u5e30MLP",id:"\u56de\u5e30mlp",level:2},{value:"\u5206\u985eMLP",id:"\u5206\u985emlp",level:2}],i={toc:N};function c(a){let{components:e,...m}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,m,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"mlp"},"MLP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u3064\u306e\u5165\u529b\u5c64\u3068\u4e00\u3064\u4ee5\u4e0a\u306eTLU\u5c64\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u96a0\u308c\u5c64\u3068\u6700\u5f8c\u306b\u51fa\u529b\u5c64\u3068\u547c\u3070\u308c\u308bTLU\u5c64\u304b\u3089\u306a\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30d0\u30c3\u30af\u30d7\u30ed\u30d1\u30b2\u30fc\u30b7\u30e7\u30f3(\u8aa4\u5dee\u9006\u4f1d\u64ad\u6cd5)\u3068\u547c\u3070\u308c\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u7528\u3044\u3066\u8a13\u7df4\u304c\u884c\u308f\u308c\u308b\u3002\u3053\u306e\u8a13\u7df4\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8aa4\u5dee\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u306b\u3001\u500b\u3005\u306e\u63a5\u7d9a\u91cd\u307f\u3068\u30d0\u30a4\u30a2\u30b9\u9805\u3092\u3069\u306e\u3088\u3046\u306b\u64cd\u4f5c\u3059\u3079\u304d\u304b\u81ea\u52d5\u7684\u306b\u8a08\u7b97\u3059\u308b\u3002")),(0,n.kt)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u624b\u9806\u3067\u8a08\u7b97\u304c\u884c\u308f\u308c\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u5ea6\u306b\u4e00\u500b\u306e\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u51e6\u7406\u3059\u308b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8a13\u7df4\u30bb\u30c3\u30c8\u5168\u4f53\u3092\u8907\u6570\u56de\u51e6\u7406\u3059\u308b\u3002(\u3053\u3053\u306e\u30d1\u30b9\u3092\u30a8\u30dd\u30c3\u30af\uff08epoch\uff09\u3068\u547c\u3076)"),(0,n.kt)("li",{parentName:"ul"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5165\u529b\u5c64\u306b\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u4e00\u3064\u305a\u3064\u6e21\u3059\u3002\u5165\u529b\u5c64\u306f\u7b2c\u4e00\u306e\u96a0\u308c\u5c64\u306b\u30df\u30cb\u30d0\u30c3\u30c1\u3092\u9001\u308b\u3002\u6b21\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u3053\u306e\u5c64\u306e\u3059\u3079\u3066\u306e\u30cb\u30e5\u30fc\u30ed\u30f3\u306e\u51fa\u529b\u3092\u8a08\u7b97\u3057\u3001\u7d50\u679c\u3092\u6b21\u306e\u96a0\u308c\u5c64\u306b\u9001\u308b\u3002\u3053\u308c\u3092\u6700\u5f8c\u306e\u5c64\u307e\u3067\u7d9a\u3051\u308b\u3002\u3053\u308c\u304c\u524d\u9032\u30d1\u30b9\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u51fa\u529b\u8aa4\u5dee\u3092\u95a2\u6570\u3001\u6307\u6a19\u306b\u3088\u3063\u3066\u6e2c\u5b9a\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u500b\u3005\u306e\u51fa\u529b\u63a5\u7d9a\u90e8\u304c\u8aa4\u5dee\u306b\u3069\u308c\u3060\u3051\u5f71\u97ff\u3092\u53ca\u307c\u3057\u3066\u3044\u308b\u304b\u3092\u8a08\u7b97\u3059\u308b\u3002\u5165\u529b\u5c64\u306b\u9054\u3059\u308b\u307e\u3067\u3053\u308c\u3092\u7e70\u308a\u66ff\u3048\u3059\u3002(\u5f8c\u9000\u30d1\u30b9)"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u306b\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u8a08\u7b97\u3057\u305f\u8aa4\u5dee\u306e\u52fe\u914d\u3092\u4f7f\u3063\u3066\u9006\u65b9\u5411\u306b\u9032\u307f\u3001\u3059\u3079\u3066\u306e\u63a5\u7d9a\u91cd\u307f\u3092\u66f4\u65b0(\u8aa4\u5dee\u304c\u5c0f\u3055\u304f\u306a\u308b\u3088\u3046\u306b)\u3059\u308b\u3002")),(0,n.kt)("h2",{id:"\u6d3b\u6027\u5316\u95a2\u6570"},"\u6d3b\u6027\u5316\u95a2\u6570"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30b7\u30b0\u30e2\u30a4\u30c9\u95a2\u6570")),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"x")))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x) = \\frac{1}{1+e^{-x}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0908em",verticalAlign:"-0.7693em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6973em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7693em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"sigmoid",src:t(4176).Z,width:"432",height:"288"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53cc\u66f2\u7dda\u95a2\u6570")),(0,n.kt)("h2",{id:"-1"}),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mi",{parentName:"msup"},"x")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"x")))),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mi",{parentName:"msup"},"x")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"x")))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x) = \\frac{e^x - e^{-x}}{e^x+e^{-x}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.2177em",verticalAlign:"-0.7693em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4483em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.5904em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6973em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.989em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7713em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7693em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tanh",src:t(6051).Z,width:"432",height:"288"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ReLU\u95a2\u6570")),(0,n.kt)("h2",{id:"-2"}),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,n.kt)("mtable",{parentName:"mrow",rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mn",{parentName:"mrow"},"0"))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mo",{parentName:"mrow"},">"),(0,n.kt)("mn",{parentName:"mrow"},"0")))))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)= \\begin{cases} 0, \\leq0\\\\ x, >0 \\end{cases}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,n.kt)("span",{parentName:"span",className:"delimsizing size4"},"{")),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-l"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.69em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.69em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.008em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},">"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.19em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ReLU",src:t(9862).Z,width:"432",height:"288"})),(0,n.kt)("h2",{id:"\u56de\u5e30mlp"},"\u56de\u5e30MLP"),(0,n.kt)("h2",{id:"\u5206\u985emlp"},"\u5206\u985eMLP"),(0,n.kt)("p",null,"tags:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"machine learning"),(0,n.kt)("li",{parentName:"ul"},"Deep learning")),(0,n.kt)("p",null,"keywords:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"machine learning"),(0,n.kt)("li",{parentName:"ul"},"Deep learning")),(0,n.kt)("hr",null))}c.isMDXComponent=!0},9862:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/ReLU-baf79749c821eb8262aa2ff9d272f07f.gif"},6051:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/hyperbolic-a193d6f59d8f939b263ed14b9ee9b6c8.gif"},4176:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/sigmoid-7ef81ee470bd91d44e90cd34716f8416.gif"}}]);