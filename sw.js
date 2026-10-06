const CACHE_NAME = "bitacora-pp05-v4";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./videos/header.mp4",
  "./videos/personal.mp4",
  "./videos/preliminares.mp4",
  "./videos/autorizacion.mp4",
  "./videos/proceso.mp4",
  "./videos/vapor.mp4",
  "./videos/punto.mp4",
  "./videos/producto.mp4",
  "./videos/novedades.mp4",
  "./videos/cierre.mp4"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Si algún video todavía no existe en el repo, que no tumbe la instalación
      return Promise.all(
        ASSETS.map((url) => cache.add(url).catch(() => {}))
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Videos: siempre servir el archivo COMPLETO desde caché (evita el problema
  // de las peticiones parciales "Range" que usa el navegador al reproducir).
  if (url.pathname.includes("/videos/")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(new Request(url.href)).then((cached) => cached || fetch(event.request))
      )
    );
    return;
  }

  // Resto de archivos: red primero, y si no hay internet, se usa el caché.
  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(event.request))
  );
});
