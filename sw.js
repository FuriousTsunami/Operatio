const staticCacheName = "staticCacheV9";
const assets = [
  "/",
  "/index.html",
  "/CSS/style.css",
  "/CSS/w3.css",
  "/Images/Icon-72.png",
  "/app.js",
  "/JavaScript/db.js",
  "/LogHours",
  "/JavaScript/ui.js",
  "/About",
  "/Explore",
  "/Favorites",
  "/GetStarted",
  "/Settings",
  "/SignIn",
  "/manifest.json",
];

self.addEventListener("install", evt => {
  console.log("ServiceWorker Installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching Assets");
      for(var i = 0; i <= assets.length; i++){
        cache.add(assets[i]);
      }
    })
  );
});
self.addEventListener("activate", evt => {
  console.log("ServiceWorker Activated");
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return fetch(fetchEvent.request) || res;
    })
  )
})
