(()=>{"use strict";var e,t,n,o,r,a,c,i,s,u,l,d,f,p,m={365:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(601),r=n.n(o),a=n(314),c=n.n(a)()(r());c.push([e.id,'* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nbody {\n  margin: 0;\n  background-color: darkblue;\n  display: grid;\n}\n\ninput {\n  width: 5em;\n}\n',""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=o.base?s[0]+o.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function y(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return m[e](n,n.exports,y),n.exports}y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),y.nc=void 0,e=y(72),t=y.n(e),n=y(825),o=y.n(n),r=y(659),a=y.n(r),c=y(56),i=y.n(c),s=y(540),u=y.n(s),l=y(113),d=y.n(l),f=y(365),(p={}).styleTagTransform=d(),p.setAttributes=i(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=u(),t()(f.A,p),f.A&&f.A.locals&&f.A.locals,async function(e){const t=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7bf9ad50d4414a82a2024440241203&q=${e}`,{mode:"cors"}),n=await t.json();var o;console.log(n),o=function(e){const t=(new Date).getHours();console.log(t);const n={condition:e.current.condition.text,feelsLikeF:Math.round(e.current.feelslike_f),tempF:Math.round(e.current.temp_f),uv:e.current.uv,windMPH:Math.round(e.current.wind_mph),location:e.location.name.toUpperCase(),hour1:e.forecast.forecastday[0].hour[t+1],hour2:e.forecast.forecastday[0].hour[t+2],hour3:e.forecast.forecastday[0].hour[t+3],hour4:e.forecast.forecastday[0].hour[t+4],hour5:e.forecast.forecastday[0].hour[t+5]};return console.log(n.hour5),"United States of America"===e.location.country?n.region=e.location.region.toUpperCase():n.region=e.location.country.toUpperCase(),n}(n),document.querySelector("#location").textContent=o.location,document.querySelector("#condition").textContent=o.condition,document.querySelector("#temp-today").textContent=o.tempF,document.querySelector("#feels-like").textContent=`Feels like: ${o.feelsLikeF}`,document.querySelector("#wind").textContent=`Wind: ${o.windMPH} MPH`,document.querySelector("#uv").textContent=`UV Index: ${o.uv}`}(document.querySelector("#get-location").value)})();