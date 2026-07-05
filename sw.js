const CACHE_NAME = 'loey-routebook-v1';
const CACHE_URLS = ['/','index.html','manifest.json','css/style.css','js/main.js','lib/leaflet.css','lib/leaflet.js','lib/chart.umd.min.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(c){return c.addAll(CACHE_URLS);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(n){return Promise.all(n.filter(function(x){return x!==CACHE_NAME;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
