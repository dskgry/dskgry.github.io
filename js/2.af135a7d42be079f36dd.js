(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(e,t,n){e.exports=n(17).wrap(n(23)()),e.exports.__esModule=!0},23:function(e,t,n){e.exports=function(){return new Worker(n.p+"4aa38cd704626b4edcf9.worker.js")}},24:function(e,t,n){e.exports=n(17).wrap(n(25)()),e.exports.__esModule=!0},25:function(e,t,n){e.exports=function(){return new Worker(n.p+"f81117dfed6be8bd8513.worker.js")}},26:function(e,t,n){"use strict";n.r(t),n.d(t,"FacesComponent",(function(){return J}));var i=n(0),a=n(19),s=n(3),o=n(18),r=n(2);const l=[{name:"box",displayName:"Box",filter:(e,{x:t,y:n,width:i,height:a},s)=>{e.strokeStyle=c(s),e.strokeRect(t,n,i,a)}},{name:"private",displayName:"Private",filter:(e,{x:t,y:n,width:i,height:a},s)=>{e.fillStyle=c(s);const o=a/4,r=a/5;e.fillRect(t,n+o,i,r)}},{name:"logo",displayName:"Logo",filter:(e,{x:t,y:n,width:i,height:a},s)=>{e.fillStyle="rgba(255,255,255)",e.fillRect(t,n,i,a),e.drawImage(d(s),t,n,i,a)}}],c=e=>"WASM"===e?"rgb(98,111,255)":"rgb(247,223,30)",d=e=>"WASM"===e?h:u,h=new Image;h.src="/assets/logo/wasm-logo-big.png";const u=new Image;function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}u.src="/assets/logo/js-logo-big.png";const g=new Image;g.src="/assets/logo/wasm-logo.png";const v=new Image;v.src="/assets/logo/js-logo.png";class b{constructor(e,t,n){m(this,"canvas",void 0),m(this,"context",void 0),m(this,"currentFilter",void 0),m(this,"fpsColor",void 0);const i=document.createElement("canvas");e.appendChild(i),this.canvas=i,this.context=i.getContext("2d"),this.canvas.width=t,this.canvas.height=n,this.fpsColor="rgb(0,0,0)",this.currentFilter=l[0].filter}updateDrawFunction(e){this.currentFilter=e||l[0].filter}toDataURL(){const{canvas:e}=this;return e.toDataURL("image/jpeg",1)}drawVideo({video:e,faces:t,scale:n,mode:i}){const{canvas:a,context:s}=this;s.drawImage(e,0,0,a.width,a.height),t&&this.drawFaces(t,n,i),"WASM"===i&&this.drawLogo(g),"JS"===i&&this.drawLogo(v)}drawLogo(e){const{context:t}=this;t.fillStyle="rgba(255,255,255)",t.fillRect(0,0,32,32),t.drawImage(e,0,0,32,32)}drawFaces({faces:e,time:t},n,i){const{context:a,currentFilter:s}=this;this.drawFps(t);for(let t=0,o=e.length;t<o;t++){const o=e[t];s(a,{x:o.x*n,y:o.y*n,width:o.width*n,height:o.height*n},i)}}drawFps(e){const{context:t,canvas:n,fpsColor:i}=this,{width:a}=n;t.strokeStyle=i,t.lineWidth=2,t.fillStyle="rgba(255,255,255,.5)",t.fillRect(a-100,0,a,35),t.font="normal 16pt Arial",t.fillStyle=i;const s=Math.round(1e3/e);t.fillText((s<10?"0"+s:s)+" FPS",a-80,25)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.OffscreenCanvas||(window.OffscreenCanvas=class{constructor(e,t){return p(this,"canvas",void 0),this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t,this.canvas.convertToBlob=()=>new Promise(e=>{this.canvas.toBlob(e)}),this.canvas}});class w{constructor(e,t,n){this.scale=n,p(this,"canvas",void 0),p(this,"context",void 0),this.canvas=new OffscreenCanvas(e,t),this.context=this.canvas.getContext("2d")}getScale(){return this.scale}getScaledImageData(e){const{context:t,scale:n}=this,i=Math.round(e.width/n),a=Math.round(e.height/n);return t.drawImage(e,0,0,i,a),t.getImageData(0,0,i,a)}}var f=n(6);class y{constructor(e,t){var n,i,a;this.width=e,this.height=t,a=null,(i="videoElement")in(n=this)?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}start(){return new Promise(e=>{navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{this.initVideo(t),e(this)})})}initVideo(e){const t=document.getElementById("video-elm");t?this.videoElement=t:(this.videoElement=document.createElement("video"),this.videoElement.id="video-elm",this.videoElement.style.display="none",this.videoElement.autoplay=!0,this.videoElement.width=this.width,this.videoElement.height=this.height,document.body.appendChild(this.videoElement)),this.videoElement.srcObject=e}destroy(){const{videoElement:e}=this;e&&(e.srcObject.getTracks().forEach(e=>e.stop()),e.srcObject=null)}getVideoElement(){return this.videoElement}}var j=n(22),x=n(24);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const F=Math.round(1.9375);class C extends i.Component{constructor(e){super(e),O(this,"videoWrap",null),O(this,"videoCanvas",null),O(this,"helperCanvas",null),O(this,"video",null),O(this,"currentFrame",null),O(this,"currentFaces",null),O(this,"loop",()=>{const{video:e,helperCanvas:t,videoCanvas:n,currentFaces:i}=this,{runningWasm:a,runningJs:s}=this.state;e&&n&&t&&n.drawVideo({video:e.getVideoElement(),faces:i,scale:t.getScale(),mode:a?"WASM":s?"JS":null}),this.currentFrame=requestAnimationFrame(this.loop)}),O(this,"runWasm",async()=>{const{video:e,helperCanvas:t}=this;this.setState({runningWasm:!0,runningJs:!1}),this.currentFaces=await Object(x.wasmDetectFaces)(t.getScaledImageData(e.getVideoElement())),this.state.runningWasm&&this.runWasm()}),O(this,"runJs",async()=>{const{video:e,helperCanvas:t}=this;this.setState({runningWasm:!1,runningJs:!0}),this.currentFaces=await Object(j.jsDetectFaces)(t.getScaledImageData(e.getVideoElement())),this.state.runningJs&&this.runJs()}),O(this,"changeFilter",e=>{const{videoCanvas:t}=this,n=l.find(t=>t.name===e.target.value);this.setState({selectedFilter:n}),t&&t.updateDrawFunction(n.filter)}),this.state={loading:!0,runningJs:!1,runningWasm:!1,selectedFilter:l[0]}}async componentDidMount(){await this.initVideo(),await this.initDetection(),requestAnimationFrame(()=>{this.runWasm(),this.setState({loading:!1})})}componentWillUnmount(){const{currentFrame:e,video:t}=this;t&&t.destroy(),e&&cancelAnimationFrame(e)}initDetection(){return Promise.all([Object(x.initWasmFaceDetection)(),Object(j.initJsFaceDetection)()])}initVideo(){return this.videoCanvas=new b(this.videoWrap,310,220),this.helperCanvas=new w(310,220,F),this.run()}async run(){const{video:e}=this;e||(this.video=await new y(310,220).start()),this.loop()}render(e,{loading:t,runningJs:n,runningWasm:a,selectedFilter:s}){return Object(i.h)(W,null,Object(i.h)(D,null,Object(i.h)("label",null,Object(i.h)("span",null,"Filter"),Object(i.h)("select",{onInput:this.changeFilter},l.map(e=>Object(i.h)("option",{key:e.name,value:e.name,selected:s.name===e.name},e.displayName))))),Object(i.h)(S,null,t&&Object(i.h)(f.a,null),Object(i.h)(k,{style:{width:"310px",height:"220px"},ref:e=>this.videoWrap=e})),Object(i.h)(E,null,Object(i.h)(o.a,{wasmLogo:!0,disabled:t,activated:a,width:200,onClick:this.runWasm},"Wasm detection"),Object(i.h)(o.a,{jsLogo:!0,disabled:t||n,activated:n,width:200,onClick:this.runJs},"Js detection")))}}const W=r.b.div`
  margin: 1em auto;
  display: block;
`,S=r.b.div`
  position: relative;
`,E=r.b.div`
  display: flex;
  justify-content: center;

  @media all and (max-width: 470px) {
    flex-direction: column;
    button {
      margin: 5px auto 0 auto;
      display: block;
    }
  }
`,k=r.b.div`
  margin: 0 auto;
  background: gainsboro;
  border: solid 1px gainsboro;
`,D=r.b.div`
  margin: auto;
  width: 310px;
  padding: 0 0 0.3em 0.3em;
  text-align: center;

  span {
    display: inline-block;
    padding: 0 0.3em 0 0;
  }

  select {
    display: inline-block;
    padding: 0.3em 1em;
  }
`,J=()=>{const[e,t]=Object(s.j)(!1);return Object(i.h)(i.Fragment,null,Object(i.h)(a.a,null),e&&Object(i.h)(C,null),!e&&Object(i.h)(I,null,Object(i.h)("p",null,"Press start to initialize the Wasm and JavaScript face detection.",Object(i.h)("b",null," Access to your WebCam")," will be requested, but"," ",Object(i.h)("b",null,"absolutely no image data")," will be transferred to any"," ",Object(i.h)("b",null,"server"),"."),Object(i.h)(o.a,{inline:!0,onClick:()=>t(!0)},"Let's go")))},I=r.b.div`
  text-align: center;
  max-width: 300px;
  overflow: hidden;
  margin: 0 auto;

  p {
    display: block;
  }
`}}]);