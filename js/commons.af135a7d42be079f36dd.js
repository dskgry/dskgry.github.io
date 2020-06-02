(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){"use strict";t.r(n),t.d(n,"createEndpoint",(function(){return o})),t.d(n,"expose",(function(){return c})),t.d(n,"proxy",(function(){return h})),t.d(n,"proxyMarker",(function(){return r})),t.d(n,"releaseProxy",(function(){return a})),t.d(n,"transfer",(function(){return b})),t.d(n,"transferHandlers",(function(){return i})),t.d(n,"windowEndpoint",(function(){return m})),t.d(n,"wrap",(function(){return l}));const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=new WeakSet,i=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:n,port2:t}=new MessageChannel;return c(e,n),[t,[t]]},deserialize:e=>(e.start(),l(e))}],["throw",{canHandle:e=>s.has(e),serialize(e){const n=e instanceof Error;let t=e;return n&&(t={isError:n,message:e.message,stack:e.stack}),[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function c(e,n=self){n.addEventListener("message",(function t(r){if(!r||!r.data)return;const{id:o,type:a,path:i}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(w);let u;try{const n=i.slice(0,-1).reduce((e,n)=>e[n],e),t=i.reduce((e,n)=>e[n],e);switch(a){case 0:u=t;break;case 1:n[i.slice(-1)[0]]=w(r.data.value),u=!0;break;case 2:u=t.apply(n,l);break;case 3:u=h(new t(...l));break;case 4:{const{port1:n,port2:t}=new MessageChannel;c(e,t),u=b(n,[n])}break;case 5:u=void 0}}catch(e){u=e,s.add(e)}Promise.resolve(u).catch(e=>(s.add(e),e)).then(e=>{const[r,s]=f(e);n.postMessage(Object.assign(Object.assign({},r),{id:o}),s),5===a&&(n.removeEventListener("message",t),d(n))})})),n.start&&n.start()}function d(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function l(e,n){return function e(n,t=[],r=function(){}){let s=!1;const i=new Proxy(r,{get(r,o){if(u(s),o===a)return()=>v(n,{type:5,path:t.map(e=>e.toString())}).then(()=>{d(n),s=!0});if("then"===o){if(0===t.length)return{then:()=>i};const e=v(n,{type:0,path:t.map(e=>e.toString())}).then(w);return e.then.bind(e)}return e(n,[...t,o])},set(e,r,o){u(s);const[a,i]=f(o);return v(n,{type:1,path:[...t,r].map(e=>e.toString()),value:a},i).then(w)},apply(r,a,i){u(s);const c=t[t.length-1];if(c===o)return v(n,{type:4}).then(w);if("bind"===c)return e(n,t.slice(0,-1));const[d,l]=p(i);return v(n,{type:2,path:t.map(e=>e.toString()),argumentList:d},l).then(w)},construct(e,r){u(s);const[o,a]=p(r);return v(n,{type:3,path:t.map(e=>e.toString()),argumentList:o},a).then(w)}});return i}(e,[],n)}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e){const n=e.map(f);return[n.map(e=>e[0]),(t=n.map(e=>e[1]),Array.prototype.concat.apply([],t))];var t}const g=new WeakMap;function b(e,n){return g.set(e,n),e}function h(e){return Object.assign(e,{[r]:!0})}function m(e,n=self,t="*"){return{postMessage:(n,r)=>e.postMessage(n,t,r),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}function f(e){for(const[n,t]of i)if(t.canHandle(e)){const[r,o]=t.serialize(e);return[{type:3,name:n,value:r},o]}return[{type:0,value:e},g.get(e)||[]]}function w(e){switch(e.type){case 3:return i.get(e.name).deserialize(e.value);case 0:return e.value}}function v(e,n,t){return new Promise(r=>{const o=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===o&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},n),t)})}},18:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),o=t(2);const a=({disabled:e,activated:n,loading:t,width:o,wasmLogo:a,jsLogo:i,inline:c,children:d,onClick:l})=>Object(r.h)(s,{disabled:e||n,onClick:l,activated:n,loading:t,width:o,wasmLogo:a,jsLogo:i,inline:c},Object(r.h)("span",null,t?"...":d)),s=o.b.button.attrs(({disabled:e})=>({disabled:e}))`
  display: ${({inline:e})=>e?"inline":"block"};
  width: ${({width:e})=>e?e+"px":"120px"};
  margin: 1em;
  padding: 1em;
  border: solid 1px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);
  
  :hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, .6);
  }
  
  :active {
    box-shadow: none;
  }
  
  :disabled {
    opacity: 0.4;
    box-shadow: none;
    cursor: default;
  }
  
  span {
    padding-left: ${({wasmLogo:e,jsLogo:n})=>e||n?"25px":"0"};
  }
  
  
  
  ${({wasmLogo:e,jsLogo:n})=>e||n?"":"\n    background: var(--primary-color);\n    border: 1px solid var(--primary-dark-color);\n    color: var(--light-color);\n  "} 

  ${({loading:e})=>e?"\n    opacity: 0.5;\n    border-color: black;\n    box-shadow: none !important;\n  ":""}  

  ${({disabled:e,activated:n})=>e&&n?"\n    opacity: 1;\n  ":""}
  
  ${({wasmLogo:e})=>e?"\n    background: url('/assets/logo/wasm-logo.png') 1px center no-repeat;\n    border-color: var(--primary-color);\n  ":""} 

  ${({jsLogo:e})=>e?"\n    background: url('/assets/logo/js-logo.png') 1px center no-repeat;\n    border-color: var(--thrd-color);\n  ":""}  
`},19:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(0),o=t(7),a=t(2);const s=()=>Object(r.h)(i,null,Object(r.h)(o.Link,{href:"/prime",activeClassName:"link-active"},"Primes"),Object(r.h)(o.Link,{href:"/faces",activeClassName:"link-active"},"Face detect")),i=a.b.div`
  margin: 0 auto;
  border-top: none;
  width: 170px;
  display: flex;
  justify-content: space-between;
  padding: 0.2em 0.5em;
  background: var(--primary-color);
  box-shadow: 0 4px 5px -2px #343434;

  a {
    padding: 0 0.3em;
    color: var(--light-color);
    text-decoration: none;
  }

  a.link-active {
    font-weight: bold;
  }
`}}]);