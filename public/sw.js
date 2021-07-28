let CACHE_NAME = 'appv1';

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        cache.addAll([
          '/static/js/main.chunk.js',
          '/static/js/vendors~main.chunk.js',
          '/static/js/bundle.js',
          '/static/css/main.9b64c1d9.chunk.css',
          '/static/js/2.7b84d58f.chunk.js',
          '/static/js/main.9dc57f96.chunk.js',
          '/index.html',
          '/'
        ]);
      })
      .catch((err)=>{
        console.log('error', err);
      })
  );
})

this.addEventListener('fetch', function(event) {
  if(!navigator.onLine){
  event.respondWith(
    caches.match(event.request)
      .then(function(result) {
        // Cache hit - return response
        console.log('results', result);
        if (result) {
          return result;
        }
      }
    )
  );
    }
});