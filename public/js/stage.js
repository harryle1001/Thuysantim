/* Sân khấu thương hiệu trang chủ: bật/tắt nhạc của video hoàng hôn, phim giới thiệu. */
(function () {
  'use strict';
  var v = document.querySelector('[data-stage-video]');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || {};
  var lite = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');
  // Video hoàng hôn: chỉ tải sau khi trang xong (tránh tranh băng thông với CSS/ảnh đầu trang); bỏ qua nếu tiết kiệm dữ liệu / giảm chuyển động
  function startHero() {
    if (!v || reduce || lite) return;
    Array.prototype.forEach.call(v.querySelectorAll('source[data-src]'), function (s) { s.src = s.getAttribute('data-src'); s.removeAttribute('data-src'); });
    v.load();
    var p = v.play(); if (p && p.catch) p.catch(function () {});
  }
  if (document.readyState === 'complete') setTimeout(startHero, 200);
  else window.addEventListener('load', function () { setTimeout(startHero, 200); }, { once: true });
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
    // Poster phim giới thiệu (dưới màn hình đầu): chỉ nạp khi cuộn gần tới
    var posterSrc = film.getAttribute('data-poster');
    if (posterSrc) {
      var setPoster = function () { film.setAttribute('poster', posterSrc); film.removeAttribute('data-poster'); };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { setPoster(); io.disconnect(); } }, { rootMargin: '600px 0px' });
        io.observe(film);
      } else setPoster();
    }
    var fig = film.closest('.sd__film');
    film.addEventListener('play', function () {
      if (fig) fig.classList.add('is-playing');
      if (v && !v.muted) { v.muted = true; if (btn) { btn.setAttribute('aria-pressed', 'false'); var l = btn.querySelector('[data-stage-sound-label]'); if (l) l.textContent = btn.getAttribute('data-off'); } }
    });
    film.addEventListener('pause', function () { if (fig && film.currentTime === 0) fig.classList.remove('is-playing'); });
  }
})();
