const CACHE_NAME = 'blogger-pwa-v1';
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', (e) => {
  // Directly passes through the data without letting outside ad networks hijack the mobile view
  if (e.request.url.includes('googleads') || e.request.url.includes('doubleclick')) {
    e.respondWith(new Response('', { status: 200 }));
  } else {
    e.respondWith(fetch(e.request));
  }
});
