let cacheName = 'Portfolio App';
// let caches;
let filesToCache = [
  '/',
  'index.html',
  'skills.html',
  'skill1.html',
  'skill2.html',
  'portfolio.html',
  'styles.css',
  'init-nav.js',
  'manifest.json',
  'registerServiceWorker.js',
  'fontawesome-free-5.13.0-web/css/all.css',
  'lightboxpopupflashy/assets/css/style.css',
  'pushmenu/css/normalize.css',
  'pushmenu/css/icons.css',
  'pushmenu/css/component.css',
  'pushmenu/js/modernizr.custom.js',
  'pushmenu/js/classie.js',
  'pushmenu/js/mlpushmenu.js',
  'images/profilepic.png',
  'images/macgraphic.png',
  'images/platformgame.png',
  'images/sengclinic.png',
  'images/stuffedwing.png',
  'images/osca.png',
  'images/imagesearch.png',
  'images/asianforensicnetwork.png'

]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
    console.log(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request,{
        cacheName: cacheName
    }).then(function(response){
        console.log("Fetching "+e.request.url);
      return response || fetch (e.request)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});