/* THỦY SẢN TÍM — front-end interactions (vanilla, no dependencies) */
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var locale = root.getAttribute('data-locale') || 'vi';
  var csrfMeta = doc.querySelector('meta[name="csrf-token"]');
  var CSRF = csrfMeta ? csrfMeta.content : '';
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ---------- Toast ---------- */
  var liveToast = $('[data-live-toast]');
  var toastTimer;
  function toast(msg, type) {
    if (!liveToast) return;
    liveToast.className = 'toast toast--' + (type || 'success') + ' is-visible';
    liveToast.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { liveToast.classList.remove('is-visible'); }, 3200);
  }
  var flashToast = $('[data-toast]');
  if (flashToast) setTimeout(function () { flashToast.classList.remove('is-visible'); }, 4500);

  /* ---------- Light / dark theme ---------- */
  var themeMeta = $('[data-theme-color]');
  var themeBtns = $$('[data-theme-toggle]');
  function applyTheme(t, animate) {
    if (animate) {
      root.classList.add('theme-anim');
      setTimeout(function () { root.classList.remove('theme-anim'); }, 450);
    }
    root.setAttribute('data-theme', t);
    if (themeMeta) themeMeta.content = t === 'dark' ? '#06111c' : '#fbfcfd';
    swapPacks(t === 'dark');
    themeBtns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(t === 'dark'));
      b.setAttribute('aria-label', b.getAttribute(t === 'dark' ? 'data-label-light' : 'data-label-dark'));
      b.title = b.getAttribute('aria-label');
    });
  }
  // Generated packshots have a pale studio backdrop; in dark mode use the cut-out version.
  // Live site: /pack/x.svg <-> /pack/x.svg?bg=0 · static preview: img/pack/x.svg <-> img/pack/x-t.svg
  function packSrc(src, dark) {
    if (!src) return src;
    var m = src.match(/^(.*img\/pack\/[a-z0-9-]+?)(-t)?\.svg$/);
    if (m) return m[1] + (dark ? '-t' : '') + '.svg';
    m = src.match(/^(.*\/pack\/[a-z0-9-]+\.svg)(\?bg=0)?$/);
    if (m) return m[1] + (dark ? '?bg=0' : '');
    return src;
  }
  function swapPacks(dark) {
    $$('img:not(.hero__pack):not([data-pack-fixed])').forEach(function (img) {
      var src = img.getAttribute('src'), next = packSrc(src, dark);
      if (next !== src) img.setAttribute('src', next);
    });
    $$('[data-thumb]').forEach(function (b) { b.setAttribute('data-thumb', packSrc(b.getAttribute('data-thumb'), dark)); });
  }
  function storedTheme() { try { return localStorage.getItem('tst-theme'); } catch (e) { return null; } }
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  themeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('tst-theme', next); } catch (e) { /* private mode */ }
      applyTheme(next, true);
    });
  });
  // Follow the operating system until the visitor picks a theme themselves
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onMq = function (e) { if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light', true); };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }

  /* ---------- Header shadow & back-to-top ---------- */
  var header = $('[data-header]');
  var toTop = $('[data-to-top]');
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 10);
    if (toTop) toTop.hidden = y < 700;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Dropdowns ---------- */
  $$('[data-dropdown]').forEach(function (dd) {
    var btn = $('[data-dropdown-toggle]', dd);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
  });
  doc.addEventListener('click', function () {
    $$('[data-dropdown].is-open').forEach(function (d) { d.classList.remove('is-open'); });
  });

  /* ---------- Drawer & search ---------- */
  var drawer = $('[data-drawer]');
  var search = $('[data-search]');
  function lock(on) { doc.body.style.overflow = on ? 'hidden' : ''; }
  $$('[data-nav-open]').forEach(function (b) { b.addEventListener('click', function () { drawer.hidden = false; lock(true); }); });
  $$('[data-nav-close]').forEach(function (b) { b.addEventListener('click', function () { drawer.hidden = true; lock(false); }); });
  $$('[data-search-open]').forEach(function (b) {
    b.addEventListener('click', function () { search.hidden = false; lock(true); setTimeout(function () { $('input', search).focus(); }, 30); });
  });
  function closeSearch() { if (search) { search.hidden = true; lock(false); } }
  $$('[data-search-close]').forEach(function (b) { b.addEventListener('click', closeSearch); });
  if (search) search.addEventListener('click', function (e) { if (e.target === search) closeSearch(); });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSearch(); if (drawer && !drawer.hidden) { drawer.hidden = true; lock(false); } }
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Count-up stats ---------- */
  var nf = new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en-US' : 'vi-VN');
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var end = parseInt(el.getAttribute('data-count'), 10) || 0;
        var start = performance.now();
        var dur = 1600;
        (function tick(now) {
          var p = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = nf.format(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        cio.unobserve(el);
      });
    }, { threshold: 0.1 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(function (c) { c.textContent = nf.format(parseInt(c.getAttribute('data-count'), 10) || 0); });
  }

  /* ---------- Cart helpers ---------- */
  function post(url, data) {
    var body = new URLSearchParams(data);
    body.append('_csrf', CSRF);
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': CSRF },
      body: body.toString(),
      credentials: 'same-origin',
    }).then(function (r) { return r.json().then(function (j) { j._status = r.status; return j; }); });
  }
  function setCartCount(n) {
    $$('[data-cart-count]').forEach(function (el) {
      el.textContent = n;
      el.hidden = !n;
      el.classList.remove('bump');
      void el.offsetWidth;
      el.classList.add('bump');
    });
  }

  doc.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    var form = btn.closest('form') || (btn.closest('[data-buybar]') ? $('[data-buybox]') : null);
    var vi = btn.getAttribute('data-vi');
    var qty = 1;
    if (form) {
      var checked = $('input[name="vi"]:checked', form);
      if (checked) vi = checked.value;
      var q = $('input[name="qty"]', form);
      if (q) qty = q.value;
    }
    btn.classList.add('is-loading');
    post('/' + locale + '/cart/add', { pid: btn.getAttribute('data-pid'), vi: vi || 0, qty: qty })
      .then(function (r) {
        if (r.ok) { setCartCount(r.count); toast(r.message, 'success'); } else toast(r.error || 'Error', 'error');
      })
      .catch(function () { toast('Network error', 'error'); })
      .then(function () { btn.classList.remove('is-loading'); });
  });

  /* ---------- Quantity steppers ---------- */
  doc.addEventListener('click', function (e) {
    var b = e.target.closest('[data-qty]');
    if (!b) return;
    var input = $('input[name="qty"]', b.closest('.qty'));
    var v = (parseInt(input.value, 10) || 1) + (b.getAttribute('data-qty') === '+' ? 1 : -1);
    var min = parseInt(input.min || '1', 10);
    input.value = Math.max(min, Math.min(999, v));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  /* ---------- Cart page live update ---------- */
  var cartRoot = $('[data-cart]');
  if (cartRoot) {
    var upd = function (line, qty) {
      post('/' + locale + '/cart/update', { pid: line.getAttribute('data-pid'), vi: line.getAttribute('data-vi'), qty: qty }).then(function (r) {
        if (!r.ok) return;
        if (!r.count) { window.location.reload(); return; }
        setCartCount(r.count);
        if (r.line === null) line.remove();
        else $('[data-line-amount]', line).textContent = r.line;
        $('[data-subtotal]').textContent = r.subtotal;
        $('[data-shipping]').textContent = r.shipping;
        $('[data-total]').textContent = r.total;
      });
    };
    cartRoot.addEventListener('change', function (e) {
      if (e.target.name !== 'qty') return;
      upd(e.target.closest('[data-line]'), e.target.value);
    });
    cartRoot.addEventListener('click', function (e) {
      var rm = e.target.closest('[data-remove]');
      if (rm) { e.preventDefault(); upd(rm.closest('[data-line]'), 0); }
    });
  }

  /* ---------- Product page ---------- */
  var pd = $('[data-product]');
  if (pd) {
    var priceEl = $('[data-price]', pd);
    var barPrice = $('[data-bar-price]');
    $$('input[name="vi"]', pd).forEach(function (r) {
      r.addEventListener('change', function () {
        if (priceEl) priceEl.textContent = r.getAttribute('data-price-label');
        if (barPrice) barPrice.textContent = r.getAttribute('data-price-label');
      });
    });
    // thumbnails
    var main = $('[data-gallery-main]');
    $$('[data-thumb]').forEach(function (t) {
      t.addEventListener('click', function () {
        main.src = t.getAttribute('data-thumb');
        $$('[data-thumb]').forEach(function (x) { x.classList.toggle('is-active', x === t); });
      });
    });
    // sticky buy bar on mobile
    var bar = $('[data-buybar]');
    var buyBox = $('[data-buybox]');
    if (bar && buyBox && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { bar.classList.toggle('is-visible', !en[0].isIntersecting && en[0].boundingClientRect.top < 0); }).observe(buyBox);
    }
  }

  /* ---------- Tabs ---------- */
  $$('[data-tabs]').forEach(function (tabs) {
    var btns = $$('[role="tab"]', tabs);
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) {
          var on = x === b;
          x.setAttribute('aria-selected', on);
          x.tabIndex = on ? 0 : -1;
          $('#' + x.getAttribute('aria-controls')).hidden = !on;
        });
      });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        var n = btns[(i + d + btns.length) % btns.length];
        n.focus();
        n.click();
      });
    });
  });

  /* ---------- AJAX forms (newsletter, callback) ---------- */
  $$('form[data-ajax-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      if (!window.fetch) return;
      e.preventDefault();
      var btn = $('button[type="submit"]', f);
      if (btn) btn.classList.add('is-loading');
      fetch(f.action, {
        method: 'POST',
        headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: new URLSearchParams(new FormData(f)),
        credentials: 'same-origin',
      })
        .then(function (r) { return r.json(); })
        .then(function (r) {
          toast(r.ok ? r.message : r.error, r.ok ? 'success' : 'error');
          if (r.ok) f.reset();
        })
        .catch(function () { toast('Network error', 'error'); })
        .then(function () { if (btn) btn.classList.remove('is-loading'); });
    });
  });

  /* ---------- Prevent double submit on regular forms ---------- */
  $$('form[data-once]').forEach(function (f) {
    f.addEventListener('submit', function () {
      var b = $('button[type="submit"]', f);
      if (b) { b.classList.add('is-loading'); b.setAttribute('aria-busy', 'true'); }
    });
  });

  /* ---------- Disease search & filter ---------- */
  var dlist = $('[data-disease-list]');
  if (dlist) {
    var input = $('[data-disease-search]');
    var species = 'all';
    var norm = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd').toLowerCase(); };
    var empty = $('[data-disease-empty]');
    var apply = function () {
      var q = norm(input.value.trim());
      var shown = 0;
      $$('[data-disease]', dlist).forEach(function (c) {
        var okS = species === 'all' || c.getAttribute('data-species') === species || c.getAttribute('data-species') === 'all';
        var okQ = !q || norm(c.textContent).indexOf(q) > -1;
        c.hidden = !(okS && okQ);
        if (!c.hidden) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    };
    input.addEventListener('input', apply);
    $$('[data-species-filter]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        species = a.getAttribute('data-species-filter');
        $$('[data-species-filter]').forEach(function (x) { x.classList.toggle('is-active', x === a); });
        apply();
      });
    });
  }

  /* ---------- Copy to clipboard ---------- */
  doc.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copy]');
    if (!c || !navigator.clipboard) return;
    navigator.clipboard.writeText(c.getAttribute('data-copy')).then(function () { toast('✓ ' + c.getAttribute('data-copy'), 'success'); });
  });

  /* ---------- Auto-submit selects ---------- */
  $$('[data-autosubmit]').forEach(function (el) {
    el.addEventListener('change', function () { el.form.submit(); });
  });

  /* ---------- Share ---------- */
  var shareBtn = $('[data-share]');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var done = function () { toast('✓ ' + (shareBtn.getAttribute('data-copied') || 'Link'), 'success'); };
      if (navigator.share && matchMedia('(pointer: coarse)').matches) navigator.share({ title: doc.title, url: location.href }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, function () {});
    });
  }

  /* ---------- Blog: instant filter on this page (accent-insensitive) ---------- */
  var postFilter = $('[data-post-filter]');
  if (postFilter) {
    var fold = function (s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); };
    var postItems = $$('[data-post-item]').map(function (el) { return { el: el, text: fold(el.textContent) }; });
    var postEmpty = $('[data-post-empty]');
    postFilter.addEventListener('input', function () {
      var words = fold(postFilter.value).split(/\s+/).filter(Boolean);
      var shown = 0;
      postItems.forEach(function (it) {
        var ok = words.every(function (w) { return it.text.indexOf(w) !== -1; });
        it.el.hidden = !ok;
        if (ok) shown++;
      });
      if (postEmpty) postEmpty.hidden = shown > 0;
    });
  }

  /* ---------- Article table of contents: highlight the section being read ---------- */
  var toc = $('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    var links = $$('a[href^="#"]', toc);
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var heads = links.map(function (a) { return doc.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (current) current.classList.remove('is-active');
        current = map[e.target.id];
        if (current) current.classList.add('is-active');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    heads.forEach(function (h) { spy.observe(h); });
    // On phones the contents list starts folded so the article comes first
    if (matchMedia('(max-width: 1023px)').matches) toc.removeAttribute('open');
  }

  /* ---------- Header category menu (click for touch, hover handled in CSS) ---------- */
  $$('[data-catmenu]').forEach(function (m) {
    var btn = $('[data-catmenu-toggle]', m);
    if (!btn) return;
    var set = function (open) { m.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!m.classList.contains('is-open')); });
    doc.addEventListener('click', function (e) { if (!m.contains(e.target)) set(false); });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && m.classList.contains('is-open')) { set(false); btn.focus(); }
    });
  });

  /* ---------- Home slider ---------- */
  var slider = $('[data-slider]');
  if (slider) {
    var slides = $$('.slide', slider), dots = $$('[data-slide-to]', slider), idx = 0, timer = null;
    var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var go = function (n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        var on = i === idx;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', on ? 'false' : 'true');
        $$('a', s).forEach(function (a) { if (on) a.removeAttribute('tabindex'); else a.setAttribute('tabindex', '-1'); });
      });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    };
    var stop = function () { if (timer) clearInterval(timer); timer = null; };
    var play = function () { if (still || slides.length < 2) return; stop(); timer = setInterval(function () { go(idx + 1); }, 5500); };
    var prev = $('[data-slide-prev]', slider), next = $('[data-slide-next]', slider);
    if (prev) prev.addEventListener('click', function () { go(idx - 1); play(); });
    if (next) next.addEventListener('click', function () { go(idx + 1); play(); });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(+d.getAttribute('data-slide-to')); play(); }); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', play);
    slider.addEventListener('focusin', stop);
    // Swipe on phones
    var sx = null;
    slider.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      sx = null;
      if (Math.abs(dx) > 40) { go(idx + (dx < 0 ? 1 : -1)); play(); }
    });
    play();
  }

  /* ---------- Home: products by category tabs ---------- */
  var catTabs = $('[data-cat-tabs]');
  if (catTabs) {
    var tabs = $$('[data-cat-tab]', catTabs), cells = $$('[data-cat]', catTabs);
    tabs.forEach(function (tb) {
      tb.addEventListener('click', function () {
        var k = tb.getAttribute('data-cat-tab');
        tabs.forEach(function (x) { x.setAttribute('aria-selected', String(x === tb)); });
        cells.forEach(function (c) { c.hidden = Boolean(k) && c.getAttribute('data-cat') !== k; });
      });
    });
  }
})();
