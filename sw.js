// ══════════════════════════════════════════════════════
// CACHE VERSION — Increment this on every deploy
// ══════════════════════════════════════════════════════
const CACHE_VERSION = 19;
const CACHE = `flip-clock-v${CACHE_VERSION}`;

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Minshawi.mp3',
  '/magpie 1.mp3',
  '/takbirat.m4a',
  '/Azkar.mp3',
  '/icon-192.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
