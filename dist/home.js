(()=>{"use strict";var e={868:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(537),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"footer{width:100%;display:flex;justify-content:space-around;background-color:bisque}","",{version:3,sources:["webpack://./src/css/footer.scss"],names:[],mappings:"AAAA,OACI,UAAA,CACA,YAAA,CACA,4BAAA,CACA,uBAAA",sourcesContent:["footer {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    background-color: bisque;\n}"],sourceRoot:""}]);const s=c},871:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(537),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}.spacer{padding-top:20px}","",{version:3,sources:["webpack://./src/css/general.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,QACI,gBAAA",sourcesContent:["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.spacer {\n    padding-top: 20px;\n}"],sourceRoot:""}]);const s=c},951:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(537),r=t.n(o),a=t(645),c=t.n(a),s=t(667),i=t.n(s),u=new URL(t(463),t.b),d=c()(r()),l=i()(u);d.push([e.id,`@font-face{font-family:"narutofont";src:url(${l}) format("truetype")}header{width:100%;height:120px;display:flex;position:sticky;justify-content:space-between;align-items:center;background-color:#ca0505;padding:10px 30px;margin:auto;max-width:100%;font-family:"narutofont",sans-serif;font-weight:100}header .logo{height:100px}header .brand{font-size:35px}header ul{display:flex;text-align:center;gap:30px}header ul button{font-family:"narutofont",sans-serif;border:.5px solid #000;padding:10px 20px;background-color:rgba(0,0,0,0)}header ul button:hover{background-color:red;cursor:pointer}`,"",{version:3,sources:["webpack://./src/css/header.scss"],names:[],mappings:"AAAA,WACI,wBAAA,CACA,8DAAA,CAGJ,OACQ,UAAA,CACA,YAAA,CAEA,YAAA,CACA,eAAA,CACA,6BAAA,CACA,kBAAA,CACA,wBAAA,CAEA,iBAAA,CACA,WAAA,CACA,cAAA,CAEA,mCAAA,CACA,eAAA,CAEA,aACI,YAAA,CAIJ,cACI,cAAA,CAGJ,UACI,YAAA,CACA,iBAAA,CACA,QAAA,CAEA,iBACI,mCAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CAGJ,uBACI,oBAAA,CACA,cAAA",sourcesContent:["@font-face {\n    font-family: 'narutofont';\n    src: url('../fonts/naruto.ttf') format('truetype');\n  }\n\nheader {\n        width: 100%;\n        height: 120px;\n        \n        display: flex;\n        position: sticky;\n        justify-content: space-between;\n        align-items: center;\n        background-color: rgb(202, 5, 5);\n\n        padding:10px 30px;\n        margin: auto;\n        max-width: 100%;\n\n        font-family: 'narutofont', sans-serif;\n        font-weight: 100;\n\n        .logo {\n            height: 100px;\n        }\n\n\n        .brand {\n            font-size: 35px;\n        }\n\n        ul {\n            display: flex;\n            text-align: center;\n            gap: 30px;\n\n            button {\n                font-family: 'narutofont', sans-serif;\n                border: 0.5px solid black;\n                padding: 10px 20px;\n                background-color: transparent;\n            }\n\n            button:hover {\n                background-color: red;\n                cursor: pointer;\n            }\n        }\n}"],sourceRoot:""}]);const A=d},958:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(537),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"main{background-color:#7fffd4}","",{version:3,sources:["webpack://./src/css/main.scss"],names:[],mappings:"AAAA,KACI,wBAAA",sourcesContent:["main {\n    background-color: aquamarine;\n}"],sourceRoot:""}]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],u=o.base?i[0]+o.base:i[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var A=t(l),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==A)n[A].references++,n[A].updater(p);else{var f=r(p,o);o.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var i=o(e,r),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},463:(e,n,t)=>{e.exports=t.p+"eb7e0c70752e2f7b008e.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),s=t(565),i=t.n(s),u=t(216),d=t.n(u),l=t(589),A=t.n(l),p=t(871),f={};f.styleTagTransform=A(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var m=t(951),h={};h.styleTagTransform=A(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var C=t(958),g={};g.styleTagTransform=A(),g.setAttributes=i(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),n()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;var b=t(868),v={};v.styleTagTransform=A(),v.setAttributes=i(),v.insert=c().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),n()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const y=t.p+"3b6edd926a2d6d49ffa9.png",x=document.querySelector("#content"),w=document.createElement("header"),E=document.createElement("main"),k=document.createElement("footer");E.classList.add("spacer"),k.classList.add("spacer"),x.appendChild(w),x.appendChild(E),x.appendChild(k),function(){const e=document.querySelector("header");e.appendChild(function(){const e=document.createElement("img");return e.classList.add("logo"),e.src=y,e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("brand"),e.textContent="Ichiraku Ramen",e}()),e.appendChild(function(){const e=document.createElement("ul");for(let n=0;n<3;n++){const t=document.createElement("button");switch(n){case 0:t.textContent="Home",t.addEventListener("click",(()=>{console.log("home was clicked")})),e.appendChild(t);break;case 1:t.textContent="Menu",t.addEventListener("click",(()=>{console.log("Menu was clicked")})),e.appendChild(t);break;case 2:t.textContent="Contact",t.addEventListener("click",(()=>{console.log("contact was clicked")})),e.appendChild(t)}}return e}())}(),function(){const e=document.querySelector("footer");e.appendChild(function(){const e=document.createElement("div");return e.textContent="Mapita",e}()),e.appendChild(function(){const e=document.createElement("form");return e.textContent="formulario",e}()),e.appendChild(function(){const e=document.createElement("menu");return e.textContent="Menucito",e}())}(),function(){const e=document.querySelector("main"),n=document.querySelector("footer").offsetHeight+document.querySelector("header").offsetHeight;e.style.minHeight=`calc(100vh - ${n}px`,e.textContent="this is main"}()})()})();
//# sourceMappingURL=home.js.map