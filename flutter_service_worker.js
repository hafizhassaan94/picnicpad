'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1ca44c816f38f72abef6549f67ca58f7",
"assets/assets/images/address_icon.png": "860753c6fc94a158226f97e1d5b9b9ec",
"assets/assets/images/bookings.png": "f5c30ad38146060f66944388172c3d30",
"assets/assets/images/bottomRight.png": "cfd43ea0f2f0772a4389bd84abac62af",
"assets/assets/images/building.png": "f3ed758fbfa3911859750bbe333d365e",
"assets/assets/images/camera_bg.png": "69bd693d6203440491c89f61eac319b4",
"assets/assets/images/chat_icon.png": "237be1d3bba647c59af82013dbc469a1",
"assets/assets/images/contact_icon.png": "274d5f6a7f364d348ea244d902e067a8",
"assets/assets/images/dashboard_icon.png": "b6e6fad9c7d51de71ef6065c586c99a2",
"assets/assets/images/dustbin.png": "3ca012466798fd1b51172f0cc7e6ab5e",
"assets/assets/images/emoji.png": "e5f2d5f7d130d5508f0789dbffbc1bff",
"assets/assets/images/food_icon.png": "2ea456238565edcf7cff5692bff05148",
"assets/assets/images/list_menu_icon.png": "a47dda70cd9056a3dcaa3f1bee025b5a",
"assets/assets/images/locationGrey.png": "968c55c3fbb3706d92443a5765f7f86f",
"assets/assets/images/logout_icon.png": "5432583abe4bf0256b8f7ee13e24f65c",
"assets/assets/images/logo_name.png": "3a886471d7443c31252780ea2fb7ed4a",
"assets/assets/images/menu_icon.png": "b6892236ab57cd92039aad54957e948d",
"assets/assets/images/noti_icon.png": "5bcbeda61e48b95bde2923c6a9ba32fb",
"assets/assets/images/officeChair.png": "867e1bb030ac46eabda4f4cf976c2835",
"assets/assets/images/owner.png": "266424f70d97d4719e79ec04a7860c3d",
"assets/assets/images/owner_icon.png": "f8b4ae6517267762bc98021b919c6714",
"assets/assets/images/parkedCar.png": "5ae019a45b24853c380dca4c40c846bd",
"assets/assets/images/party.png": "5bcff802c2fdef0af31d44b83dd106a8",
"assets/assets/images/partyLeft.png": "6b82ea1a220f789939edea8b55b7a745",
"assets/assets/images/partyRight.png": "190cda0dae44fd156614fe5ef960f79b",
"assets/assets/images/party_icon.png": "1aef4dfed9e6b06ce5d93a0f30b4a724",
"assets/assets/images/pinkLogo.png": "71527928e137d8355a47b177304fd945",
"assets/assets/images/polygon.png": "fabedd6314f94110f7a4cbe3bf518c50",
"assets/assets/images/privacy_icon.png": "c0e118facf40d08022bf63a80c04569d",
"assets/assets/images/property_icon.png": "af84128567f9517aa9b812f1618c85a7",
"assets/assets/images/property_white.png": "39de29cfddf3902ee8388b52c7bfd930",
"assets/assets/images/renter.png": "7284eba9c5d3de34b8d48bfc10552a55",
"assets/assets/images/rent_icon.png": "ffb7f6c41fda86cb7781829d7b3e06ba",
"assets/assets/images/request_icon.png": "617188101d082d64f8b822eaa60af373",
"assets/assets/images/role_icon.png": "405722b659a81903f25c56f86285e0a2",
"assets/assets/images/role_icon2.png": "efbd8e078f1078b0271d0dee901be827",
"assets/assets/images/sendButton.png": "c1bafa9cc46d12aaafb8995fe55535ed",
"assets/assets/images/signature.png": "2e5e284e9b25d4de0d19c80bf68ccbe5",
"assets/assets/images/sub_admin_icon.png": "5048dd4600dff4d223e05c33068171e0",
"assets/assets/images/toilet.png": "50c4fe962c21bde137b85647f1e1ea76",
"assets/assets/images/topLeft.png": "11c46ad1feddb686caaebc2920f671d1",
"assets/assets/images/upload_image.png": "ba6d161dee9e2253856e3bb217024b73",
"assets/assets/images/user.png": "ea8cf576d41b7878b7ca5a07b542747e",
"assets/assets/images/view.png": "382ab573056bdd5d4d29c71cfb8c5bb9",
"assets/assets/images/whiteLogo.png": "c17869289059ce7f816e9d2c2d98525c",
"assets/assets/translations/en.json": "f247ad5d8b0dca65a346208bc43dfba0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a8c144daf309b76884cb716bb04666dc",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "92fa24e8f6d31438cd58224d2aaf8543",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "0fcccde25d21af1c9e46b863e0849f5c",
"icons/Icon-512.png": "c75c07a01b0c35b527141e28b90b9c93",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3748386d0c9fce42062121da8307329",
"/": "f3748386d0c9fce42062121da8307329",
"main.dart.js": "bdd6d83351b314b2f34e81b32abcc31c",
"manifest.json": "5fca7f720490a91fa0e3c23819650e4d",
"version.json": "616192fae97ab513a5ea047baf92d47b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
