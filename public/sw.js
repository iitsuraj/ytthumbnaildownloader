if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/484c840239a025432effd6ecc373d498fa764368.aca24c3e4e8dd3d8ac33.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/commons.821e9c0c721ecd463254.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/framework.ae602c9f15f1d83ed78e.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/main-8277eb8445da8fe4b77e.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/pages/_app-fe501acca8c466ce56f1.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/pages/_error-276bd7231f08cd5de291.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/pages/about-dca5e0da1e40baf2b933.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/pages/index-c4625af9096c415c50a3.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/polyfills-99d808df29361cf7ffb1.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/css/a49f53bc0e27304f4747.css",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/mTUJPu2p0Ftg_RrAGFafB/_buildManifest.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/_next/static/mTUJPu2p0Ftg_RrAGFafB/_ssgManifest.js",revision:"mTUJPu2p0Ftg_RrAGFafB"},{url:"/apple-touch-icon.png",revision:"b4016fecddf517153e6b9174536b36a2"},{url:"/assets/icon-192x192.png",revision:"8528c38861ed399133f26b8cdf27fed4"},{url:"/assets/icon-256x256.png",revision:"1d4e882a57023bb485061e17a9c3431b"},{url:"/assets/icon-384x384.png",revision:"afc3efd4dca161ce72f957ba33257555"},{url:"/assets/icon-512x512.png",revision:"2e4e7999c4fc16ea4998844efc623ce8"},{url:"/favicon-16x16.png",revision:"f4a19a3384c27e4ce6c7ad2b570ab876"},{url:"/favicon-32x32.png",revision:"0334236714f05c084060204133338e64"},{url:"/favicon.ico",revision:"f84c59d823f1729779d9a2770fdd22d8"},{url:"/manifest.json",revision:"01a8a22a4c50c0de769ace7f7a71d8bf"},{url:"/robots.txt",revision:"5086c9d6229c473c521448eeff865095"},{url:"/sitemap.xml",revision:"2e4541687965f0a41a48173e24a2c8d8"},{url:"/social-1200x800.png",revision:"a0b101ea348cb8917e35585d69fa3f56"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:172800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:172800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute("/^https?.*/",new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:172800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:1,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:3,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));