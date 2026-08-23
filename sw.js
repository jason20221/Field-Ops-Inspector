const CACHE='field-ops-v12';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.mode==='navigate'||r.destination==='document'||r.destination==='script'){
   e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match(r)));
 }else{
   e.respondWith(fetch(r).catch(()=>caches.match(r)));
 }
});