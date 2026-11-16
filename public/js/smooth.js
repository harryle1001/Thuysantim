/* Smooth scrolling with Lenis (self-hosted at /vendor/lenis). Skipped for reduced motion. */
(function () {
  'use strict';
  if (typeof window.Lenis !== 'function') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var lenis = new window.Lenis({
    autoRaf: true,
    lerp: 0.1,
    wheelMultiplier: 1,
    // let inner scroll areas (menus, drawers, table of contents) scroll on their own
    prevent: function (node) {
      return !!(node.closest && node.closest('.drawer, .drawer__panel, [data-search], .toc ol, .summary__items, .catmenu__list, .table-wrap, [data-lenis-prevent]'));
    },
  });
  window.__lenis = lenis;
  // same-page links (#section): glide there instead of jumping
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
    var id = decodeURIComponent(a.getAttribute('href').slice(1)), el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    lenis.scrollTo(el); // Lenis honours the CSS scroll-margin / scroll-padding, same stop as a normal jump
    if (history.pushState) history.pushState(null, '', '#' + id);
  });
})();
