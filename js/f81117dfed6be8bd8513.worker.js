!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"initWasmFaceDetection",(function(){return b})),n.d(t,"wasmDetectFaces",(function(){return w}));const r=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),s=new WeakSet,c=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize:e=>{return e.start(),function e(t,n=[],r=function(){}){let s=!1;const c=new Proxy(r,{get(r,a){if(l(s),a===o)return()=>h(t,{type:5,path:n.map(e=>e.toString())}).then(()=>{u(t),s=!0});if("then"===a){if(0===n.length)return{then:()=>c};const e=h(t,{type:0,path:n.map(e=>e.toString())}).then(m);return e.then.bind(e)}return e(t,[...n,a])},set(e,r,a){l(s);const[o,c]=p(a);return h(t,{type:1,path:[...n,r].map(e=>e.toString()),value:o},c).then(m)},apply(r,o,c){l(s);const i=n[n.length-1];if(i===a)return h(t,{type:4}).then(m);if("bind"===i)return e(t,n.slice(0,-1));const[u,d]=f(c);return h(t,{type:2,path:n.map(e=>e.toString()),argumentList:u},d).then(m)},construct(e,r){l(s);const[a,o]=f(r);return h(t,{type:3,path:n.map(e=>e.toString()),argumentList:a},o).then(m)}});return c}(e,[],t);var t}}],["throw",{canHandle:e=>s.has(e),serialize(e){const t=e instanceof Error;let n=e;return t&&(n={isError:t,message:e.message,stack:e.stack}),[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function i(e,t=self){t.addEventListener("message",(function n(a){if(!a||!a.data)return;const{id:o,type:c,path:l}=Object.assign({path:[]},a.data),f=(a.data.argumentList||[]).map(m);let h;try{const t=l.slice(0,-1).reduce((e,t)=>e[t],e),n=l.reduce((e,t)=>e[t],e);switch(c){case 0:h=n;break;case 1:t[l.slice(-1)[0]]=m(a.data.value),h=!0;break;case 2:h=n.apply(t,f);break;case 3:h=function(e){return Object.assign(e,{[r]:!0})}(new n(...f));break;case 4:{const{port1:t,port2:n}=new MessageChannel;i(e,n),h=function(e,t){return d.set(e,t),e}(t,[t])}break;case 5:h=void 0}}catch(e){h=e,s.add(e)}Promise.resolve(h).catch(e=>(s.add(e),e)).then(e=>{const[r,a]=p(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),a),5===c&&(t.removeEventListener("message",n),u(t))})})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){const t=e.map(p);return[t.map(e=>e[0]),(n=t.map(e=>e[1]),Array.prototype.concat.apply([],n))];var n}const d=new WeakMap;function p(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:3,name:t,value:r},a]}return[{type:0,value:e},d.get(e)||[]]}function m(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function h(e,t,n){return new Promise(r=>{const a=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}let y,g;const b=()=>new Promise(e=>{const t=self;t.cv?e():(importScripts("/assets/wasm/face/opencv_glue.js"),t.cv().onRuntimeInitialized=()=>{y=t.Module,g=new y.CascadeClassifier,v("/assets/wasm/face/haarcascade_frontalface_alt.xml","haarcascade_frontalface.xml").then(()=>{g.load("haarcascade_frontalface.xml"),e()})})}),w=async e=>{const t=performance.now(),n=y.matFromImageData(e),r=new y.RectVector,a=new y.Mat;y.cvtColor(n,a,y.COLOR_RGBA2GRAY),g.detectMultiScale(a,r);const o=[];for(let e=0,t=r.size();e<t;e++){const{x:t,y:n,width:a,height:s}=r.get(e);o.push({x:t,y:n,width:a,height:s})}return n.delete(),r.delete(),a.delete(),{faces:o,time:performance.now()-t}},v=(e,t)=>fetch(e).then(e=>e.arrayBuffer()).then(e=>y.FS_createDataFile("/",t,new Uint8Array(e),!0,!1,!1));i(Object.keys(t).reduce((function(e,n){return"__esModule"==n||(e[n]=t[n]),e}),{}))}]);