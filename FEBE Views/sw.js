const CACHE_NAME = "catarak-sense-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/deteksi.html",
  "/kontak.html",
  "/style/index.css",
  "/assets/img/catarak.png",
  "/assets/img/hero.jpg",
  "/assets/img/artikel/artikel-1.jpg",
  "/assets/img/artikel/artikel-2.jpg",
  "/assets/img/artikel/artikel-3.jpg",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  
  // Tambahkan file JS atau lainnya jika ada
];

// Simpan file saat install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Gunakan cache saat offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) =>
      cachedResponse || fetch(event.request)
    )
  );
});

// Update cache kalau ada versi baru
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      )
    )
  );
  self.clients.claim();
});
