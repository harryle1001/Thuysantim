/* THỦY SẢN TÍM — ad landing page: AJAX callback form, scroll reveals, floating contact dock,
   conversion events (dataLayer / Meta / TikTok if their tags are installed) and the ocean backdrop,
   loaded only after the page is idle and only on devices that can afford it. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function track(name, data) {
    try {
      (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: 'lp_' + name }, data || {}));
      if (name === 'lead') {
        if (window.fbq) window.fbq('track', 'Lead');
        if (window.ttq) window.ttq.track('SubmitForm');
        if (window.gtag) window.gtag('event', 'generate_lead');
      } else if (window.fbq) window.fbq('track', 'Contact');
    } catch (e) { /* tracking must never break the page */ }
  }
  $$('[data-track]').forEach(function (a) {
    a.addEventListener('click', function () { track(a.getAttribute('data-track')); });
  });

  /* ---------- Callback form ---------- */
  var form = $('[data-lp-form]');
  if (form && window.fetch) {
    var err = $('[data-form-error]', form);
    var btn = $('button[type="submit"]', form);
    var showErr = function (msg) { err.textContent = msg; err.hidden = false; };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.hidden = true;
      var name = form.name.value.trim(), phone = form.phone.value.trim();
      if (!name) { form.name.focus(); return showErr('Bà con vui lòng nhập họ tên.'); }
      if (!/^[+0-9][0-9 .-]{7,16}$/.test(phone)) { form.phone.focus(); return showErr('Số điện thoại chưa đúng, bà con kiểm tra lại giúp.'); }
      btn.disabled = true; btn.classList.add('is-loading');
      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: new URLSearchParams(new FormData(form)),
        credentials: 'same-origin',
      })
        .then(function (r) { return r.json(); })
        .then(function (r) {
          if (!r.ok) return showErr(r.error || 'Có lỗi, bà con thử lại giúp.');
          track('lead', { lp_issue: (form.querySelector('input[name="message"]:checked') || {}).value || '' });
          $('[data-form-body]').hidden = true;
          var done = $('[data-form-done]');
          done.hidden = false;
          done.focus({ preventScroll: true });
          done.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        })
        .catch(function () { showErr('Mất kết nối mạng. Bà con gọi hotline giúp nhé.'); })
        .then(function () { btn.disabled = false; btn.classList.remove('is-loading'); });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var items = $$('.rv');
  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('rv-on');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Contact dock: appears once the hero CTA scrolls away, hides over the form ---------- */
  var dock = $('[data-dock]'), cta = $('[data-hero-cta]'), formBox = $('#dang-ky');
  if (dock && cta && 'IntersectionObserver' in window) {
    var past = false, onForm = false;
    var sync = function () { dock.classList.toggle('is-on', past && !onForm); };
    new IntersectionObserver(function (es) { past = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; sync(); }).observe(cta);
    new IntersectionObserver(function (es) { onForm = es[0].isIntersecting; sync(); }, { threshold: 0.35 }).observe(formBox);
  } else if (dock) dock.classList.add('is-on');

  /* ---------- Ocean backdrop (WebGL) — after load, skipped on Data Saver / low-memory phones ---------- */
  var canvas = $('[data-ocean]');
  var conn = navigator.connection || {};
  var weak = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '') || (navigator.deviceMemory && navigator.deviceMemory < 2);
  if (canvas && !weak) {
    var nonce = (document.currentScript && document.currentScript.nonce) || ($('script[nonce]') || {}).nonce || '';
    var boot = function () {
      var s = document.createElement('script');
      s.src = '/js/ocean.js?v=1.0.0';
      s.async = true;
      if (nonce) s.nonce = nonce;
      s.onload = function () { if (document.documentElement.classList.contains('ocean-on')) canvas.classList.add('is-on'); };
      document.body.appendChild(s);
    };
    var idle = function () { (window.requestIdleCallback || function (f) { setTimeout(f, 300); })(boot, { timeout: 2500 }); };
    if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle);
  } else if (canvas) canvas.remove();
})();
