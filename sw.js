const cacheName = 'news-v1';
// Filer som kan sparas i cache
const staticAssets = [
   './index.html',
   './Css/test.css',
   './js/Motion.js',
   './Css/choise.css',
   './js/animation.js',
   './images/blur_strong.jpg',
   './choise.html',
];

self.addEventListener('install', async e => {
   const cache = await caches.open(cacheName);
   await cache.addAll(staticAssets);
   return self.skipWaiting();
});

self.addEventListener('activate', e => {
   self.clients.claim();
});

self.addEventListener('fetch', async e => {
   const req = e.request;
   const url = new URL(req.url);

   if (url.origin === location.origin) {
      e.respondWith(cacheFirst(req));
   } else {
      e.respondWith(networkAndCache(req));
   }
});

// cacheFirst-funktion med felhantering
async function cacheFirst(req) {
   const cache = await caches.open(cacheName);
   const cached = await cache.match(req);
   return cached || fetch(req).catch(() => console.error("Nätverksförfrågan misslyckades:", req.url));
}

// networkAndCache-funktion med felhantering
async function networkAndCache(req) {
   const cache = await caches.open(cacheName);
   try {
      const fresh = await fetch(req);
      await cache.put(req, fresh.clone());
      return fresh;
   } catch (e) {
      console.error("Nätverksförfrågan misslyckades och hämtas från cache:", req.url);
      const cached = await cache.match(req);
      return cached;
   }
}
