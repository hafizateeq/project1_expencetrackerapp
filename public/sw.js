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