const CACHE_NAME = 'files';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './greeting.js',
  './music/images/',
  '/music/images/after-dark.jpeg',
  '/music/images/aircraft.jpeg',
  '/music/images/all-girls-are-the-same.jpeg',
  '/music/images/avoid-me.jpeg',
  '/music/images/back-to-you.jpeg',
  '/music/images/bad-habit.jpeg',
  '/music/images/baixo.jpeg',
  '/music/images/ballin.jpeg',
  '/music/images/barking.jpeg',
  '/music/images/blueberry-faygo.jpeg',
  '/music/images/brazilian-beach-rumba.jpeg',
  '/music/images/brazilian-danca-phonk.jpeg',
  '/music/images/brazilian-phonk-mano.jpeg',
  '/music/images/brewed-by-you.jpeg',
  '/music/images/buster.jpeg',
  '/music/images/cactus-cafe.jpeg',
  '/music/images/chug-jug-with-you.jpeg',
  '/music/images/circus.jpeg',
  '/music/images/classical-phonk.jpeg',
  '/music/images/close-eyes-slowed-reverb.jpeg',
  '/music/images/close-eyes-sped-up.jpeg',
  '/music/images/close-eyes.jpeg',
  '/music/images/coffee-moments.jpeg',
  '/music/images/default.png',
  '/music/images/easier.jpeg',
  '/music/images/eggstreme-duck-phonk.jpeg',
  '/music/images/everybody-wants-to-rule-the-world.jpeg',
  '/music/images/forever-never.jpeg',
  '/music/images/gaming.avif',
  '/music/images/ghost!.jpeg',
  '/music/images/gigachad-theme.jpeg',
  '/music/images/goofy.jpeg',
  '/music/images/holiday.jpeg',
  '/music/images/hollywood-perfect.jpeg',
  '/music/images/hyptonic-data.jpeg',
  '/music/images/i-see-london-i-see-france.jpeg',
  '/music/images/jazz-in-my-coffee.jpeg',
  '/music/images/kerosene.jpeg',
  '/music/images/kyoto-nights.jpeg',
  '/music/images/lemonade.jpeg',
  '/music/images/living-life-in-the-night-slowed.jpeg',
  '/music/images/lofi-jazz.jpeg',
  '/music/images/loud-indian-music.jpeg',
  '/music/images/love-you-better.jpeg',
  '/music/images/lovely-bastards.jpeg',
  '/music/images/luxury.jpeg',
  '/music/images/mariahcarey.jpeg',
  '/music/images/mathematical-disrespect.jpeg',
  '/music/images/mcareyalbum.png',
  '/music/images/meme.jpeg',
  '/music/images/memory-reboot.jpeg',
  '/music/images/mercedes.jpeg',
  '/music/images/metamorphosis-slowed-reverb.jpeg',
  '/music/images/metamorphosis.jpeg',
  '/music/images/metamorphosis.png',
  '/music/images/mix.jpeg',
  '/music/images/murder-in-my-mind.jpeg',
  '/music/images/my-ordinary-life.jpeg',
  '/music/images/neon-blade.jpeg',
  '/music/images/nom-nom-nom-nom-nom-nom-nom.jpeg',
  '/music/images/outside.jpeg',
  '/music/images/paint-the-town-red.jpeg',
  '/music/images/past-lives.jpeg',
  '/music/images/peppa-pig.jpeg',
  '/music/images/phonk.jpeg',
  '/music/images/psycho-cruise.jpeg',
  '/music/images/rainstorm.jpeg',
  '/music/images/rapper.jpeg',
  '/music/images/rave.jpeg',
  '/music/images/RO7-3ALATOL.jpeg',
  '/music/images/sea-of-thieves.jpeg',
  '/music/images/shadow.jpeg',
  '/music/images/slidin.jpeg',
  '/music/images/slowed-and-reverb.jpeg',
  '/music/images/snowman.jpeg',
  '/music/images/somebody-that-i-used-to-know.jpeg',
  '/music/images/somebodys-watching-me.jpeg',
  '/music/images/soviet-anthem.jpeg',
  '/music/images/spicy.jpeg',
  '/music/images/sticking-out-your-gyat-for-the-rizzler.jpeg',
  '/music/images/sushi.jpeg',
  '/music/images/that-kyoto-vibe.jpeg',
  '/music/images/the-box.jpeg',
  '/music/images/the-perfect-girl.jpeg',
  '/music/images/thousand.jpeg',
  '/music/images/tiktok.webp',
  '/music/images/tokyo-drift.jpeg',
  '/music/images/unholy.jpeg',
  '/music/images/upload.png',
  '/music/images/vibes.jpg',
  '/music/images/whopper.jpeg',
  '/music/images/Yoasobi_banner.jpg',
  '/music/images/yoasobi.jpeg',
  '/music/images/あの夢をなぞって.jpeg',
  '/music/images/セブンティーン.jpeg',
  '/music/images/ハルカ.jpeg',
  '/music/images/ハルジオン.jpeg',
  '/music/images/ハルジオン.png',
  '/music/images/ミスター.jpeg',
  '/music/images/もう少しだけ.jpeg',
  '/music/images/もしも命が描けたら.jpeg',
  '/music/images/三原色.jpeg',
  '/music/images/夜に駆ける.jpeg',
  '/music/images/怪物.jpeg',
  '/music/images/怪物.png',
  '/music/images/祝福.jpeg',
  'music/songs/9mm.mp3',
  'music/songs/after-dark.mp3',
  'music/songs/aircraft.mp3',
  'music/songs/all-girls-are-the-same.mp3',
  'music/songs/avoid-me.mp3',
  'music/songs/back-to-you.mp3',
  'music/songs/bad-habit.mp3',
  'music/songs/BAIXO.mp3',
  'music/songs/ballin.mp3',
  'music/songs/barking.mp3',
  'music/songs/blueberry-faygo.mp3',
  'music/songs/brazilian-beach-rumba.mp3',
  'music/songs/brazilian-danca-phonk.mp3',
  'music/songs/BRAZILIAN-DANÇA-PHONK.mp3',
  'music/songs/brazilian-phonk-mano.mp3',
  'music/songs/buster.mp3',
  'music/songs/cactus-cafe.mp3',
  'music/songs/chug-jug-with-you.mp3',
  'music/songs/circus.mp3',
  'music/songs/classical-phonk.mp3',
  'music/songs/close-eyes-slowed-reverb.mp3',
  'music/songs/close-eyes-sped-up.mp3',
  'music/songs/close-eyes.mp3',
  'music/songs/coffee-moments.mp3',
  'music/songs/easier.mp3',
  'music/songs/eggstreme-duck-phonk.mp3',
  'music/songs/everybody-wants-to-rule-the-world.mp3',
  'music/songs/forever-never.mp3',
  'music/songs/GHOST!.mp3',
  'music/songs/gigachad-theme.mp3',
  'music/songs/holiday.mp3',
  'music/songs/hollywood-perfect.mp3',
  'music/songs/hyptonic-data.mp3',
  'music/songs/i-see-london-i-see-france.mp3',
  'music/songs/jazz-in-my-coffee.mp3',
  'music/songs/kerosene.mp3',
  'music/songs/kyoto-nights.mp3',
  'music/songs/lemonade.mp3',
  'music/songs/living-life-in-the-night-slowed.mp3',
  'music/songs/loud-indian-music.mp3',
  'music/songs/love-you-better.mp3',
  'music/songs/lovely-bastards.mp3',
  'music/songs/luxury.mp3',
  'music/songs/mariahcarey.mp3',
  'music/songs/mathematical-disrespect.mp3',
  'music/songs/memory-reboot.mp3',
  'music/songs/mercedes.mp3',
  'music/songs/metamorphosis-slowed-reverb.mp3',
  'music/songs/metamorphosis.mp3',
  'music/songs/murder-in-my-mind.mp3',
  'music/songs/my-ordinary-life.mp3',
  'music/songs/NEON-BLADE.mp3',
  'music/songs/nom-nom-nom-nom-nom-nom-nom.mp3',
  'music/songs/outside.mp3',
  'music/songs/paint-the-town-red.mp3',
  'music/songs/past-lives.mp3',
  'music/songs/peppa-pig.mp3',
  'music/songs/psycho-cruise.mp3',
  'music/songs/PSYCHO-FUNK.mp3',
  'music/songs/rainstorm.mp3',
  'music/songs/rave.mp3',
  'music/songs/RO7-3ALATOL.mp3',
  'music/songs/sea-of-the-thieves.mp3',
  'music/songs/shadow.mp3',
  'music/songs/slidin.mp3',
  'music/songs/snowman.mp3',
  'music/songs/somebody-that-i-used-to-know.mp3',
  'music/songs/somebodys-watching-me.mp3',
  'music/songs/soviet-anthem.mp3',
  'music/songs/spicy.mp3',
  'music/songs/sushi.mp3',
  'music/songs/that-kyoto-vibe.mp3',
  'music/songs/the-box.mp3',
  'music/songs/the-perfect-girl.mp3',
  'music/songs/thousand.mp3',
  'music/songs/tokyo-drift.mp3',
  'music/songs/unholy.mp3',
  'music/songs/whopper.mp3',
  'music/songs/あの夢をなぞって.mp3',
  'music/songs/セブンティーン.mp3',
  'music/songs/ハルカ.mp3',
  'music/songs/ハルジオン.mp3',
  'music/songs/もう少しだけ.mp3',
  'music/songs/もしも命が描けたら.mp3',
  'music/songs/三原色.mp3',
  'music/songs/夜に駆ける.mp3',
  'music/songs/怪物.mp3',
  'music/songs/祝福.mp3',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Cache opened');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
