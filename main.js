(()=>{"use strict";var n={868:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(537),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,'footer{font-family:"narutofont",sans-serif;width:100%;padding:20px 0;display:flex;justify-content:space-around;background-color:bisque}',"",{version:3,sources:["webpack://./src/css/footer.scss"],names:[],mappings:"AAAA,OACI,mCAAA,CACA,UAAA,CACA,cAAA,CACA,YAAA,CACA,4BAAA,CACA,uBAAA",sourcesContent:["footer {\n    font-family: 'narutofont', sans-serif;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: space-around;\n    background-color: bisque;\n}"],sourceRoot:""}]);const c=i},871:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(537),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),A=new URL(t(463),t.b),d=i()(a()),l=s()(A);d.push([n.id,`@font-face{font-family:"narutofont";src:url(${l}) format("truetype")}*{margin:0;padding:0;box-sizing:border-box}.spacer{padding-top:20px}`,"",{version:3,sources:["webpack://./src/css/general.scss"],names:[],mappings:"AAAA,WACI,wBAAA,CACA,8DAAA,CAIJ,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,QACI,gBAAA",sourcesContent:["@font-face {\n    font-family: 'narutofont';\n    src: url('../fonts/naruto.ttf') format('truetype');\n  }\n\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.spacer {\n    padding-top: 20px;\n}"],sourceRoot:""}]);const p=d},951:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(537),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,'header{width:100%;height:120px;display:flex;position:sticky;justify-content:space-between;align-items:center;background-color:#ca0505;padding:10px 30px;margin:auto;max-width:100%;font-family:"narutofont",sans-serif;font-weight:100}header div{flex-grow:1;flex-basis:0}header div .logo{height:100px;width:100px}header .brand{font-size:35px;text-align:center}header .navbar-container{flex-grow:1;flex-basis:0;display:flex;justify-content:right}header .navbar-container ul{display:flex;text-align:center;gap:20px}header .navbar-container ul button{font-family:"narutofont",sans-serif;border:.5px solid #000;padding:10px 20px;background-color:rgba(0,0,0,0)}header .navbar-container ul button:hover{background-color:red;cursor:pointer}',"",{version:3,sources:["webpack://./src/css/header.scss"],names:[],mappings:"AAAA,OACI,UAAA,CACA,YAAA,CAEA,YAAA,CACA,eAAA,CACA,6BAAA,CACA,kBAAA,CACA,wBAAA,CAEA,iBAAA,CACA,WAAA,CACA,cAAA,CAEA,mCAAA,CACA,eAAA,CAEA,WACI,WAAA,CACA,YAAA,CACA,iBACI,YAAA,CACA,WAAA,CAKR,cACI,cAAA,CACA,iBAAA,CAGJ,yBACI,WAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CAEA,4BACI,YAAA,CACA,iBAAA,CACA,QAAA,CAEA,mCACI,mCAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CAGJ,yCACI,oBAAA,CACA,cAAA",sourcesContent:["header {\n    width: 100%;\n    height: 120px;\n    \n    display: flex;\n    position: sticky;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(202, 5, 5);\n\n    padding:10px 30px;\n    margin: auto;\n    max-width: 100%;\n\n    font-family: 'narutofont', sans-serif;\n    font-weight: 100;\n\n    div {\n        flex-grow: 1;\n        flex-basis: 0;\n        .logo {\n            height: 100px;\n            width: 100px;\n        }\n    }\n\n\n    .brand {\n        font-size: 35px;\n        text-align: center;\n    }\n\n    .navbar-container {\n        flex-grow: 1;\n        flex-basis: 0;\n        display: flex;\n        justify-content: right;\n        \n        ul {\n            display: flex;\n            text-align: center;\n            gap: 20px;\n    \n            button {\n                font-family: 'narutofont', sans-serif;\n                border: 0.5px solid black;\n                padding: 10px 20px;\n                background-color: transparent;\n            }\n    \n            button:hover {\n                background-color: red;\n                cursor: pointer;\n            }\n        }\n    }\n    \n}"],sourceRoot:""}]);const c=i},958:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(537),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),A=new URL(t(824),t.b),d=i()(a()),l=s()(A);d.push([n.id,`main{background-image:url(${l});font-family:"narutofont",sans-serif;word-spacing:10px;line-height:1.7}main .container{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px}main .container .banner{height:180px}main .container .content{background-color:rgba(255,228,196,.5);padding:10px;width:50%}main .menu{padding:15px 15px;display:grid;align-items:center;gap:15px;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}main .menu .dish{margin:auto;background-color:rgba(234,230,231,.7);min-width:300px;height:480px;padding:30px;border:1px solid #000;border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:18px}main .menu .dish img{width:250px}main .info{width:50%;margin:auto;padding:15px 0;background-color:rgba(234,230,231,.7)}main .info h2,main .info ul{text-align:center}`,"",{version:3,sources:["webpack://./src/css/main.scss"],names:[],mappings:"AAAA,KACI,wDAAA,CACA,mCAAA,CACA,iBAAA,CACA,eAAA,CAEA,gBACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,QAAA,CAEA,wBACI,YAAA,CAGJ,yBAEI,qCAAA,CACA,YAAA,CACA,SAAA,CAKR,WAEI,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CACA,0DAAA,CAEA,iBACE,WAAA,CACA,qCAAA,CACA,eAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAGA,qBACE,WAAA,CAKR,WAEE,SAAA,CACA,WAAA,CACA,cAAA,CACA,qCAAA,CAEA,4BACE,iBAAA",sourcesContent:["main {\n    background-image: url(\"../img/konoha.jpg\");\n    font-family: 'narutofont', sans-serif;\n    word-spacing: 10px;\n    line-height: 1.7;\n\n    .container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 10px;\n\n        .banner {\n            height: 180px;\n        }\n\n        .content {\n            \n            background-color: rgba(255, 228, 196, 0.5);\n            padding: 10px;\n            width: 50%;\n\n        }  \n    }\n\n    .menu {\n\n        padding: 15px 15px;        \n        display: grid;\n        align-items: center;\n        gap: 15px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\n        .dish {\n          margin: auto;\n          background-color: rgba(234, 230, 231, 0.7);\n          min-width: 300px;\n          height: 480px;\n          padding: 30px;\n          border: 1px solid black;\n          border-radius: 10px;\n\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          gap: 18px;\n\n\n          img {\n            width: 250px;\n          }\n        }\n    }\n\n    .info {\n      \n      width: 50%;\n      margin: auto;\n      padding: 15px 0;\n      background-color: rgba(234, 230, 231, 0.7);\n\n      h2, ul {\n        text-align: center;\n      }\n     \n    }\n}"],sourceRoot:""}]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],A=o.base?s[0]+o.base:s[0],d=r[A]||0,l="".concat(A," ").concat(d);r[A]=d+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),A=0;A<r.length;A++){var d=t(r[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},463:(n,e,t)=>{n.exports=t.p+"eb7e0c70752e2f7b008e.ttf"},824:(n,e,t)=>{n.exports=t.p+"bc037670c04937a23442.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),A=t(216),d=t.n(A),l=t(589),p=t.n(l),u=t(871),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const f=t.p+"63627cb99fe45921f633.png";function C(){document.querySelector("main").innerHTML=""}function h(){C();const n=document.querySelector("main"),e=document.createElement("div");e.classList.add("container"),e.style.minHeight=n.style.minHeight;const t=document.createElement("img");t.classList.add("banner"),t.src=f;const o=document.createElement("div");o.classList.add("content"),o.textContent="Welcome to Ichiraku Ramen, the favorite dining spot of Konoha’s number one, hyperactive ninja, Naruto Uzumaki! Nestled in the heart of the Hidden Leaf Village, our humble ramen shop has been serving up delicious bowls of ramen for generations. Our secret-recipe broth and hand-pulled noodles have been praised by Hokages and heroes alike. Whether you’re refueling after a mission or celebrating with friends, Ichiraku Ramen is the place to be. Remember, a bowl of ramen a day keeps the Shadow Clones at bay!",e.appendChild(t),e.appendChild(o),n.appendChild(e)}function g(){C();const n=document.querySelector("main"),e=document.createElement("p");e.textContent="CONTACT",e.style.textAlign="center",e.style.paddingTop="15px",e.style.fontSize="30px",e.style.color="red";const t=document.createElement("div");t.classList.add("contact"),t.style.minHeight=n.style.minHeight,n.appendChild(e);const o=document.createElement("div");o.classList.add("info"),o.innerHTML="\n    <h2>Hours</h2>\n\n    <ul>\n        <li>Tuesday: 12:00 - 22:00</li>\n        <li> Wednesday: 12:00 - 22:00</li>\n        <li>Thursday: 12:00 - 22:00</li>\n        <li>Friday: 12:00 - 23:30</li>\n        <li>Saturday: 12:00 - 23:30</li>\n        <li>Sunday: 12:00 - 23:30</li>\n        <li></li>\n    </ul>\n\n    <h2>Contact Us</h2>\n    <ul>\n        <li>p: 123-456-7890</li>\n        <li>e: ramen@ichiraku.com</li>\n    </ul>\n   \n    ",n.appendChild(o)}const b=t.p+"e18c4471560943d35d30.jpeg",x=t.p+"90493a938b1b29d8a80c.jpeg",y=t.p+"3c9a828b36fd40ee2c45.jpeg",v=t.p+"1b303c4c91202f80f4ca.jpeg";function w(){const n=[{name:"Shoyu Ramen",description:"Shoyu, or soy sauce, ramen uses soy sauce as its main seasoning.",pictureUrl:b},{name:"Miso Ramen",description:"Miso ramen is based on miso. This creates a thick, rich, and deep umami flavor in the broth. Miso ramen is often based on chicken stock.",pictureUrl:x},{name:"Tonkotsu Ramen",description:"Tonkotsu ramen is one of the most popular and well-known styles of ramen nowadays. The name refers to pork bones, the basis of the stock and the predominant flavor.",pictureUrl:y},{name:"Shio Ramen",description:"Shio ramen is the oldest and perhaps simplest style of ramen broth, with mainly salt seasoning.",pictureUrl:v}];C();const e=document.querySelector("main"),t=document.createElement("p");t.textContent="Our Menu",t.style.textAlign="center",t.style.paddingTop="15px",t.style.fontSize="30px",t.style.color="red";const o=document.createElement("div");o.classList.add("menu"),o.style.minHeight=e.style.minHeight,e.appendChild(t);for(let e=0;e<n.length;e++){const t=document.createElement("div");t.classList.add("dish");const a=document.createElement("img");a.src=n[e].pictureUrl;const r=document.createElement("h3");r.textContent=n[e].name;const i=document.createElement("p");i.textContent=n[e].description,t.appendChild(r),t.appendChild(a),t.appendChild(i),o.appendChild(t)}e.appendChild(o)}var k=t(951),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=d(),e()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;const S=t.p+"3b6edd926a2d6d49ffa9.png";var B=t(868),I={};I.styleTagTransform=p(),I.setAttributes=s(),I.insert=i().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=d(),e()(B.Z,I),B.Z&&B.Z.locals&&B.Z.locals;var T=t(958),j={};j.styleTagTransform=p(),j.setAttributes=s(),j.insert=i().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=d(),e()(T.Z,j),T.Z&&T.Z.locals&&T.Z.locals,function(){const n=document.querySelector("#content"),e=document.createElement("header"),t=document.createElement("main"),o=document.createElement("footer");n.appendChild(e),n.appendChild(t),n.appendChild(o),function(){const n=document.querySelector("header");n.appendChild(function(){const n=document.createElement("div"),e=document.createElement("img");return e.classList.add("logo"),e.src=S,n.appendChild(e),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("brand"),n.textContent="Ichiraku Ramen",n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("navbar-container");const e=document.createElement("ul");for(let n=0;n<3;n++){const t=document.createElement("button");switch(n){case 0:t.textContent="Home",t.addEventListener("click",(()=>{console.log("home was clicked"),h()})),e.appendChild(t);break;case 1:t.textContent="Menu",t.addEventListener("click",(()=>{console.log("Menu was clicked"),w()})),e.appendChild(t);break;case 2:t.textContent="Contact",t.addEventListener("click",(()=>{console.log("contact was clicked"),g()})),e.appendChild(t)}}return n.appendChild(e),n}())}(),function(){const n=document.querySelector("footer");n.appendChild(function(){const n=document.createElement("div");return n.textContent="Sasuke",n}()),n.appendChild(function(){const n=document.createElement("form");return n.textContent="Naruto",n}()),n.appendChild(function(){const n=document.createElement("menu");return n.textContent="Sakura",n}())}(),function(){const n=document.querySelector("main"),e=document.querySelector("footer").offsetHeight+document.querySelector("header").offsetHeight;n.style.minHeight=`calc(100vh - ${e}px)`,h()}()}()})()})();
//# sourceMappingURL=main.js.map