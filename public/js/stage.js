/* Sân khấu thương hiệu trang chủ: bật/tắt nhạc của video hoàng hôn, phim giới thiệu. */
(function () {
  'use strict';
  var v = document.querySelector('[data-stage-video]');
  var btn = document.querySelector('[data-stage-sound]');
  if (v && btn) {
    var label = btn.querySelector('[data-stage-sound-label]');
    btn.addEventListener('click', function () {
      v.muted = !v.muted;
      if (!v.muted) { v.volume = 0.7; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      var on = !v.muted;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (label) label.textContent = on ? btn.getAttribute('data-on') : btn.getAttribute('data-off');
    });
  }
  var film = document.querySelector('[data-film]');
  if (film) {
    var fig = film.closest('.sd__film');
    film.addEventListener('play', function () {
      if (fig) fig.classList.add('is-playing');
      if (v && !v.muted) { v.muted = true; if (btn) { btn.setAttribute('aria-pressed', 'false'); var l = btn.querySelector('[data-stage-sound-label]'); if (l) l.textContent = btn.getAttribute('data-off'); } }
    });
    film.addEventListener('pause', function () { if (fig && film.currentTime === 0) fig.classList.remove('is-playing'); });
  }
})();
