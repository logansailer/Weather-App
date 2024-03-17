(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),u=new URL(t(173),t.b),d=a()(o()),l=s()(u);d.push([e.id,`* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  color: white;\n}\n\nbody {\n  margin: 0;\n  background-image: url(${l});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n}\n\nheader {\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\ninput {\n  color: white;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 2em;\n  text-align: center;\n  position: relative;\n}\n\n::placeholder {\n  color: white;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 2.3em;\n}\n\nmain {\n  height: 95vh;\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  align-items: center;\n}\n\n.todayDiv {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1.5fr;\n  grid-template-rows: 0.4fr 0.1fr 2fr;\n  margin: 0 5em;\n  width: 70%;\n}\n\n.condition {\n  grid-area: 1 / 1 / 1 / 3;\n  margin: 0;\n  font-size: 1.8em;\n}\n\n.location {\n  grid-area: 2 / 1 / 3 / 4;\n  margin: 0;\n  font-size: 2.5em;\n}\n\n.temp-today {\n  grid-area: 3 / 1 / 3 / 2;\n  margin: 0 0.1em 0 0;\n  font-size: 8em;\n}\n\n.info-today {\n  margin: 2em 0 2em 0;\n  grid-area: 3 / 2 / 4 / 2;\n}\n\n.border {\n  border-left: 1px solid white;\n}\n\n.info {\n  margin: 0 0 1em 1em;\n  font-size: 1.2em;\n}\n\n.warning {\n  margin: 0 0 0 1em;\n  font-size: xx-large;\n  grid-area: 2 / 3 / 4 / 4;\n}\n\n.hourly {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  margin: 0 5em;\n  text-align: center;\n}\n\n.temp-hourly {\n  font-size: x-large;\n}\n\n.cond-hourly {\n  font-size: large;\n}\n\n@media (width <= 1000px) {\n  .header {\n    margin: 0em;\n  }\n  i {\n    visibility: hidden;\n  }\n  .todayDiv {\n    margin: 1em;\n    width: 95%;\n  }\n  .info-today {\n    grid-area: 3 / 2 / 4 / 4;\n  }\n  .warning {\n    font-size: x-large;\n    margin: 0;\n    grid-area: 4 / 1 / 5 / 4;\n  }\n  .hourly {\n    margin: 1em;\n  }\n}\n`,""]);const f=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var d=t(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},173:(e,n,t)=>{e.exports=t.p+"a067b0c3c6f5d7354927.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),u=t(540),d=t.n(u),l=t(113),f=t.n(l),p=t(365),m={};function h(e,n){return e+n>23?e:e+n}function g(){!async function(e){const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7bf9ad50d4414a82a2024440241203&q=${e}/`,{mode:"cors"});!function(e){var n;document.querySelector("#location").textContent=`${e.location}, ${e.region}`,document.querySelector("#condition").textContent=e.condition,document.querySelector("#temp-today").textContent=`${e.tempF}°`,document.querySelector("#feels-like").textContent=`Feels like: ${e.feelsLikeF}°`,document.querySelector("#wind").textContent=`Wind: ${e.windMPH} MPH`,document.querySelector("#uv").textContent=`UV Index: ${e.uv}`,document.querySelector("#warning").textContent=0===(n=e.uv)?"You don't need to apply sunscreen right now, but this may change later in the day":0<n&&n<=2.9?"Sunscreen may not be needed at the moment. Radiation is low enough that you can safely go outside without protection, but sun protection should still be considered. This may change throughout the day.":2.9<n&&n<=5?"You should apply sunscreen before going outside. Seek shade when sun is most intense.":5<n&&n<=10?"Sunscreen is necessary before going outside. Protective clothing and sunglasses may also be necessary. Reapply sunscreen often.":10<n&&n<=11?"Going outside for long periods is ill-advised. If outside, sunscreen and sun protective clothing are absolutely necessary.":void 0;for(let n=1;n<6;n++)document.querySelector(`#time-${n}`).textContent=e.hour[n].time.slice(11),document.querySelector(`#temp-${n}`).textContent=`${Math.round(e.hour[n].temp_f)}°`,document.querySelector(`#cond-${n}`).textContent=e.hour[n].condition.text}(function(e){const n=new Date((new Date).toLocaleString("en-US",{timeZone:e.location.tz_id})).getHours(),t={condition:e.current.condition.text,feelsLikeF:Math.round(e.current.feelslike_f),tempF:Math.round(e.current.temp_f),uv:e.current.uv,windMPH:Math.round(e.current.wind_mph),location:e.location.name.toUpperCase(),hour:{1:e.forecast.forecastday[0].hour[h(n,1)],2:e.forecast.forecastday[0].hour[h(n,2)],3:e.forecast.forecastday[0].hour[h(n,3)],4:e.forecast.forecastday[0].hour[h(n,4)],5:e.forecast.forecastday[0].hour[h(n,5)]}};return"United States of America"===e.location.country?t.region=e.location.region.toUpperCase():t.region=e.location.country.toUpperCase(),t}(await n.json()))}(document.querySelector("#get-location").value||"New York")}function y(e){e.preventDefault(),g()}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(p.A,m),p.A&&p.A.locals&&p.A.locals;const v=document.querySelector("form"),b=document.querySelector("#submit");v.addEventListener("submit",y),b.addEventListener("click",y),g()})()})();