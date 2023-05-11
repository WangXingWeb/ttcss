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
    "revision": "e73641e1bfdf90cfa50e5319a9658044"
  },
  {
    "url": "assets/css/0.styles.b2f79d85.css",
    "revision": "f787cf9f46ed0375bc25b4f46bcc11ee"
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
    "url": "assets/js/10.35218d41.js",
    "revision": "970573ab31469685a579a94b5509ae18"
  },
  {
    "url": "assets/js/11.069da98e.js",
    "revision": "483797001063cb82a896b27b66923ef3"
  },
  {
    "url": "assets/js/12.bcf42e81.js",
    "revision": "44aa184dbda62893f025317244968047"
  },
  {
    "url": "assets/js/13.96d684ba.js",
    "revision": "3f065ec3c7b61f5578ad9fbc2a25c9d9"
  },
  {
    "url": "assets/js/14.55ad7348.js",
    "revision": "1b27c86ef1a354610fcb3b40c647399e"
  },
  {
    "url": "assets/js/15.f1edcf63.js",
    "revision": "1f0572509ec4373ad432e41d13518b71"
  },
  {
    "url": "assets/js/16.80e32364.js",
    "revision": "16d6a214b0b91e7bba50f09de998f978"
  },
  {
    "url": "assets/js/17.530b2d28.js",
    "revision": "cd22da2334dd3abb8e3a1b400ba25d39"
  },
  {
    "url": "assets/js/18.100115b1.js",
    "revision": "f3ef902ca3623109eb00b150df1dc1b2"
  },
  {
    "url": "assets/js/2.dc9c3142.js",
    "revision": "e613e51d194190944abc46ceb100ef8a"
  },
  {
    "url": "assets/js/3.caeba4af.js",
    "revision": "49be7314e1021361ddec9f6ec080d45b"
  },
  {
    "url": "assets/js/4.850a0ea8.js",
    "revision": "9a903e1bf3552ef3031331cbbd2cf3ff"
  },
  {
    "url": "assets/js/5.fc673d3f.js",
    "revision": "a9cd3da4faca4a73d3cc1761ca248e18"
  },
  {
    "url": "assets/js/6.46bfb993.js",
    "revision": "c93adebe5180a368fd7ad598f706d03b"
  },
  {
    "url": "assets/js/7.14c22ca0.js",
    "revision": "f3b220a6d0b618a150449b4bcacaa12f"
  },
  {
    "url": "assets/js/8.896bafd7.js",
    "revision": "489e36b08e3cebc41bbdef24c7b77208"
  },
  {
    "url": "assets/js/9.147a002c.js",
    "revision": "66efd0231802d2396d56f143d175aec1"
  },
  {
    "url": "assets/js/app.c0ff0e8d.js",
    "revision": "fce576fbcc2e33c61f93fe134b748ffa"
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
    "revision": "be3a75237a2bd1d9a05d3eb94adad969"
  },
  {
    "url": "指南/快速上手.html",
    "revision": "24e1b88bacd194dfb76621fb10ac4645"
  },
  {
    "url": "指南/深色模式.html",
    "revision": "9879f87f7c7ad157bcb8fb46bfdf61df"
  },
  {
    "url": "指南/集成PurgeCSS.html",
    "revision": "5ef97bf3ca4a76fcd11a5260e10a1be4"
  },
  {
    "url": "文档/color.html",
    "revision": "3f1309f21fb69e00034213839ef38cc6"
  },
  {
    "url": "文档/flex.html",
    "revision": "9d410bd81361521ce500533921b7c086"
  },
  {
    "url": "文档/容器.html",
    "revision": "6f7667a7bdc562bc3f1a731f57ced0f7"
  },
  {
    "url": "文档/文本.html",
    "revision": "a3c4d8a79bb16873be6afe2a44729513"
  },
  {
    "url": "文档/间距.html",
    "revision": "0569661174fee469c080f795427f0e2d"
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
