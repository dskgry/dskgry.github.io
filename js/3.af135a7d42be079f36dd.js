(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{20:function(t,l,e){t.exports=e(17).wrap(e(21)()),t.exports.__esModule=!0},21:function(t,l,e){t.exports=function(){return new Worker(e.p+"26ef0dbacf2d90fd9fc2.worker.js")}},27:function(t,l,e){"use strict";e.r(l),e.d(l,"Prime",(function(){return s})),e.d(l,"Wrap",(function(){return j}));var n=e(0),c=e(3),o=e(6),a=e(20),b=e(2);const u=({resultWasm:t,resultJs:l})=>Object(n.h)(r,null,Object(n.h)("section",null,Object(n.h)("table",null,Object(n.h)("thead",null,Object(n.h)("tr",null,Object(n.h)("th",{style:{width:"20%"}}),Object(n.h)("th",{style:{width:"40%"}},"Wasm"),Object(n.h)("th",{style:{width:"40%"}},"JS"))),Object(n.h)("tbody",null,Object(n.h)("tr",null,Object(n.h)("td",null,"Took (in ms)"),Object(n.h)("td",null,null!==t?Object(n.h)("p",null,t.took):Object(n.h)("p",null,"-")),Object(n.h)("td",null,null!==l?Object(n.h)("p",null,l.took):Object(n.h)("p",null,"-"))),Object(n.h)("tr",null,Object(n.h)("td",null,"Result"),Object(n.h)("td",null,null!==t?Object(n.h)("p",null,t.matches):Object(n.h)("p",null,"-")),Object(n.h)("td",null,null!==l?Object(n.h)("p",null,l.matches):Object(n.h)("p",null,"-")))))),t&&l&&Object(n.h)(d,null,"Wasm was"," ",l.took>0?Math.round(100*(1-t.took/l.took)):0,"% faster")),r=b.b.div`
  display: block;

  table {
    width: 95%;
    margin: 1em auto;
    border-collapse: collapse;
  }

  table th {
    text-align: left;
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: var(--primary-color);
    color: var(--light-color);
  }

  table td,
  th {
    border: 1px solid #ddd;
    padding: 0.5em;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`,d=b.b.p`
  text-align: center;
  font-weight: bold;
`;var i=e(18),h=e(19);const s=()=>{const[t,l]=Object(c.j)(!0),[e,b]=Object(c.j)(!1),[r,d]=Object(c.j)(!1),[s,m]=Object(c.j)(null),[f,g]=Object(c.j)(null),[w,k]=Object(c.j)(1e5);Object(c.d)(()=>{Object(a.initialize)().then(()=>l(!1))},[]);return Object(n.h)(n.Fragment,null,Object(n.h)(h.a,null),t&&Object(n.h)(o.a,null),!t&&Object(n.h)(j,null,Object(n.h)(O,null,"Count primes in range:",Object(n.h)("input",{type:"number",onChange:t=>(t=>{const l=parseInt(t,10);isNaN(l)?k(10):k(l>3e5?3e5:l<10?10:l),m(null),g(null)})(t.target.value),min:10,max:3e5,disabled:e||r,value:w})),Object(n.h)(p,null,Object(n.h)(i.a,{onClick:async()=>{m(null),b(!0),m(await Object(a.runWasm)(w)),b(!1)},wasmLogo:!0,loading:e},"Calculate"),Object(n.h)(i.a,{jsLogo:!0,loading:r,onClick:async()=>{g(null),d(!0),g(await Object(a.runJs)(w)),d(!1)}},"Calculate")),Object(n.h)(u,{resultWasm:s,resultJs:f})))},j=b.b.div`
  padding: 0.5em 0.2em;
`,O=b.b.label`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    display: block;
    padding: 1em;
    outline: none;
    border: none;
    border-bottom: solid 1px var(--secondary-color);
  }

  input:disabled {
    background: white;
    color: var(--disabled-color);
  }
`,p=b.b.div`
  display: flex;
  justify-content: center;
`}}]);