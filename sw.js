self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(Cache =>{
            return Cache.addAll(["./", "./css/main.css", "./images/Piano192.png"]);
        })
    );
});

// fetching det som finns i response som då är filerna i cacheAll ovan.
self.addEventListener("fetch", e =>{
    console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});