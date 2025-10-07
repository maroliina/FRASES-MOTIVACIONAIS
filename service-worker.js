self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "black-cat.png",
            "cat192.png",
            "soup.png",
            "sparkles.png",
            "sun (1).png",
            "manha.jpeg",
            "tarde.jpg",
            "noite.jpeg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});