if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()})),i.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},i=(i,s)=>{Promise.all(i.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(i)};self.define=(i,a,n)=>{s[i]||(s[i]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+i.slice(1)};return Promise.all(a.map(i=>{switch(i){case"exports":return s;case"module":return r;default:return e(i)}})).then(e=>{const i=n(...e);return s.default||(s.default=i),s})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/Edit.4e0f6709.js",revision:"671f32560989bd7f80f8ad2e99f53da6"},{url:"assets/GameBuiltIn.d535bd84.js",revision:"6e2750e5949e3ac609cf9fe4b30b35ba"},{url:"assets/GameByEncodedTopic.0962f1cb.js",revision:"7f6e00664286c6969c91b2e3b620eae4"},{url:"assets/GameById.110894f2.js",revision:"735bf3f49008cb8bb8da03f1b243b574"},{url:"assets/Home.beb38360.js",revision:"418c3326aba60ed0bde82d6cfbf0bd4a"},{url:"assets/index.2c9b1027.js",revision:"a25525fbbdd4dbbf7418568b58570603"},{url:"assets/style.260c3d84.css",revision:"946923b252e43c15d98cb4448460e5fb"},{url:"assets/TheGame.2a8bd4e9.js",revision:"65ae3fbff36dce2559cb4e1923c3e320"},{url:"assets/topic.7da3fbee.js",revision:"2c64d94ae55a78ed497a07b745a77231"},{url:"assets/TopicEncoding.de7adf33.js",revision:"5d2a64e22d9e8b5e645817f8cfac0518"},{url:"assets/TopicStore.7d285d8b.js",revision:"5bf3f41afb936f3ad8525b91647fb9b0"},{url:"assets/VIcon.d44955ae.js",revision:"cc48fa39b8cf485d62ef103cc1db0569"},{url:"fonts/Inter-Bold.woff2",revision:"6c02f6bd8522dc9bb79d58829aa3d2bd"},{url:"fonts/Inter-Regular.woff2",revision:"2ddfbbfd61fa41d24078763e3740d72f"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"6de16254d1b4193353e7015f9177535d"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"b37f3ac1eb5aa62879c3a06deb75789d"},{url:"manifest.json",revision:"506048ff8294cdfaa3ef1a587bc6f59d"}],{})}));