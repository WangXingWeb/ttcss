/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d78f6ce677fccb9c713c5b673192629"
  },
  {
    "url": "assets/css/0.styles.25ccf019.css",
    "revision": "7bd1936227e4db66d11123ed56cbece3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ttcss.png",
    "revision": "c9e9c6dff077ff6541558806af059504"
  },
  {
    "url": "assets/js/10.86651029.js",
    "revision": "a2a76673a8491b50d2960a55e37334b8"
  },
  {
    "url": "assets/js/11.99b5f600.js",
    "revision": "6d42a72e1d6dda51da00692559f0d181"
  },
  {
    "url": "assets/js/12.8348a8b7.js",
    "revision": "1d8a7c69e0c1d6009c391605c412be51"
  },
  {
    "url": "assets/js/13.6217e0eb.js",
    "revision": "b45a828a6d87580df602b8e6fc5e5db4"
  },
  {
    "url": "assets/js/14.4819860a.js",
    "revision": "691351280354410a712ab6001515a8d7"
  },
  {
    "url": "assets/js/15.d5c1b21b.js",
    "revision": "0d7d12ec4754baf1a273cc23135e82bc"
  },
  {
    "url": "assets/js/16.2856a2a7.js",
    "revision": "45a5646f7a2b1d8ac09cbedf38b42e28"
  },
  {
    "url": "assets/js/2.f071cb86.js",
    "revision": "24dd484ac56f5b8128be17632b043ad0"
  },
  {
    "url": "assets/js/3.b3eed753.js",
    "revision": "2e5feb7b0f7f269081e1be6e56b15335"
  },
  {
    "url": "assets/js/4.0f642756.js",
    "revision": "fcb370b734ce167fb03dbb8a32f08ea8"
  },
  {
    "url": "assets/js/5.cd0a891a.js",
    "revision": "b5a5cd5c9c299b9b9a3aaeac5df89805"
  },
  {
    "url": "assets/js/6.2218d5ff.js",
    "revision": "c5e21bbf3494274bb97f742c1d7e7354"
  },
  {
    "url": "assets/js/7.e4afab19.js",
    "revision": "58b68a7923442ded4f848c1895f2d71c"
  },
  {
    "url": "assets/js/8.89f6102a.js",
    "revision": "32faed512f311f0fc293f90f066667bf"
  },
  {
    "url": "assets/js/9.91bd496b.js",
    "revision": "6fd5fe683d2246f9edfd49a5e13aed95"
  },
  {
    "url": "assets/js/app.c622ea76.js",
    "revision": "b587f8f81ae28eb9a8a8a6fccbdd605e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1ef610285b4398c2f56721a1eb2e5a38"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6bca8d7992e067cdbac2328eef8d0f1f"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "92c38f195ad1ef70d818aa64819e8a1c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "5d8f4d6347fe844da23f133eb1fb4932"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "658bd9f00e1de007d26f52192f95b15d"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "6a35684041346bb504838054e1396b20"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "5d00843d05378ec83549e74563f09cf0"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "658bd9f00e1de007d26f52192f95b15d"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "152b179261f5e9bbce1e68ab4d901885"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "5440ac1931db3261b4e5323dce8bd34c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "d72aecd1c8c4c18ab688f35be5202326"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "948eb6fdb64747b7bdb07483638056a1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "15dda87eebd6a29d5a7097e6952fa388"
  },
  {
    "url": "指南/快速上手.html",
    "revision": "cc922cf665ae7b77ff65ecc8ba318359"
  },
  {
    "url": "指南/深色模式.html",
    "revision": "c675a16518488e3316e7761ba66ca599"
  },
  {
    "url": "文档/color.html",
    "revision": "0534c43f2c67476433d351b2b8f907cc"
  },
  {
    "url": "文档/容器.html",
    "revision": "03b1c1d3c74a96d33097fac5bf7ded9c"
  },
  {
    "url": "文档/文本.html",
    "revision": "11e1fcd40c04c764099595a113b25a03"
  },
  {
    "url": "文档/间距.html",
    "revision": "bdc96e9b472d79313a3c76c512fa2b70"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
