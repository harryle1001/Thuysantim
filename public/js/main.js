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
  if (toTop) toTop.addEventListener('click', function () { if (window.__lenis) window.__lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Dropdowns ---------- */
  $$('[data-dropdown]').forEach(function (dd) {
    var btn = $('[data-dropdown-toggle]', dd);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
  });
  function closeDropdowns() {
    $$('[data-dropdown].is-open').forEach(function (d) {
      d.classList.remove('is-open');
      var b = $('[data-dropdown-toggle]', d);
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  doc.addEventListener('click', closeDropdowns);
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDropdowns(); });

  var openMini, closeMini;

  /* ---------- Drawer & search ---------- */
  var drawer = $('[data-drawer]');
  var search = $('[data-search]');
  function lock(on) { doc.body.style.overflow = on ? 'hidden' : ''; if (window.__lenis) { if (on) window.__lenis.stop(); else window.__lenis.start(); } }
  $$('[data-nav-open]').forEach(function (b) { b.addEventListener('click', function () { drawer.hidden = false; lock(true); }); });
  $$('[data-nav-close]').forEach(function (b) { b.addEventListener('click', function () { drawer.hidden = true; lock(false); }); });
  $$('[data-search-open]').forEach(function (b) {
    b.addEventListener('click', function () { search.hidden = false; lock(true); setTimeout(function () { $('input', search).focus(); }, 30); });
  });
  function closeSearch() { if (search) { search.hidden = true; lock(false); } }
  $$('[data-search-close]').forEach(function (b) { b.addEventListener('click', closeSearch); });
  if (search) search.addEventListener('click', function (e) { if (e.target === search) closeSearch(); });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSearch(); if (closeMini) closeMini(); if (drawer && !drawer.hidden) { drawer.hidden = true; lock(false); } }
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
        if (r.ok) { setCartCount(r.count); if (r.html && openMini) openMini(r.html); else toast(r.message, 'success'); } else toast(r.error || 'Error', 'error');
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

  /* ---------- Product row carousels (home) ---------- */
  $$('[data-prow]').forEach(function (row) {
    var track = $('.prow__track', row), prev = $('[data-prow-prev]', row), next = $('[data-prow-next]', row);
    if (!track) return;
    var sync = function () {
      var max = track.scrollWidth - track.clientWidth - 2;
      row.classList.toggle('is-static', max <= 0);
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };
    var step = function (dir) {
      var card = track.firstElementChild;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var w = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
      track.scrollBy({ left: dir * Math.max(w, Math.floor((track.clientWidth + gap) / w) * w), behavior: 'smooth' });
    };
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });
  /* ---------- Mini cart (slide-out) ---------- */
  var mcart = $('[data-mcart]');
  if (mcart) {
    var mbody = $('[data-mcart-body]', mcart);
    var lastFocus;
    var fill = function (html) { if (typeof html === 'string') mbody.innerHTML = html; };
    openMini = function (html) {
      fill(html);
      lastFocus = doc.activeElement;
      mcart.hidden = false;
      lock(true);
      requestAnimationFrame(function () { mcart.classList.add('is-open'); $('.mcart__head .icon-btn', mcart).focus({ preventScroll: true }); });
    };
    closeMini = function () {
      if (mcart.hidden) return;
      mcart.classList.remove('is-open');
      lock(false);
      setTimeout(function () { mcart.hidden = true; }, 320);
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };
    $$('[data-mcart-close]', mcart).forEach(function (b) { b.addEventListener('click', closeMini); });
    // Header cart icon opens the drawer (still a normal link without JS / on the cart page itself)
    $$('a.hcart').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || doc.body.classList.contains('page-cart')) return;
        e.preventDefault();
        openMini('');
        mbody.classList.add('is-loading');
        fetch('/' + locale + '/cart/mini', { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
          .then(function (r) { return r.json(); })
          .then(function (r) { fill(r.html); setCartCount(r.count); })
          .catch(function () { window.location.href = a.href; })
          .then(function () { mbody.classList.remove('is-loading'); });
      });
    });
    mbody.addEventListener('click', function (e) {
      var b = e.target.closest('[data-mqty]');
      if (!b) return;
      var line = b.closest('[data-mline]');
      var cur = parseInt($('.mline__qty b', line).textContent, 10) || 0;
      var d = parseInt(b.getAttribute('data-mqty'), 10);
      mbody.classList.add('is-loading');
      post('/' + locale + '/cart/update', { pid: line.getAttribute('data-pid'), vi: line.getAttribute('data-vi'), qty: d === 0 ? 0 : Math.max(0, cur + d), mini: 1 })
        .then(function (r) { if (r.ok) { setCartCount(r.count); fill(r.html); } })
        .catch(function () { toast('Network error', 'error'); })
        .then(function () { mbody.classList.remove('is-loading'); });
    });
  }

  /* ---------- Instant search suggestions ---------- */
  $$('form[data-suggest]').forEach(function (form) {
    var input = $('input[name="q"]', form);
    var box = doc.createElement('div');
    box.className = 'ssug';
    box.id = 'ssug-' + Math.random().toString(36).slice(2, 8);
    box.setAttribute('role', 'listbox');
    box.setAttribute('data-lenis-prevent', '');
    box.hidden = true;
    form.appendChild(box);
    input.setAttribute('aria-controls', box.id);
    input.setAttribute('aria-autocomplete', 'list');
    var timer, ctl, active = -1;
    var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); };
    var hide = function () { box.hidden = true; active = -1; };
    var items = function () { return $$('.ssug__item', box); };
    var mark = function (i) {
      var list = items();
      list.forEach(function (el, k) { el.classList.toggle('is-active', k === i); el.setAttribute('aria-selected', k === i); });
      active = i;
    };
    var run = function () {
      var q = input.value.trim();
      if (q.length < 2) return hide();
      if (ctl) ctl.abort();
      ctl = 'AbortController' in window ? new AbortController() : null;
      fetch(form.getAttribute('data-suggest') + '?q=' + encodeURIComponent(q), { signal: ctl && ctl.signal, credentials: 'same-origin' })
        .then(function (r) { return r.json(); })
        .then(function (r) {
          var html = '<p class="ssug__head">' + esc(form.getAttribute('data-s-title')) + '</p>';
          if (!r.items.length) html += '<p class="ssug__none">' + esc(form.getAttribute('data-s-none')) + '</p>';
          r.items.forEach(function (it) {
            html += '<a class="ssug__item" role="option" href="' + esc(it.url) + '"><img src="' + esc(it.img) + '" alt="" width="44" height="44" loading="lazy"><span><b>' + esc(it.title.split('—')[0].trim()) + '</b><small>' + esc(it.sku || '') + '</small></span><em>' + esc(it.price) + '</em></a>';
          });
          html += '<button class="ssug__all" type="submit">' + esc(form.getAttribute('data-s-all')) + ' “' + esc(q) + '” →</button>';
          box.innerHTML = html;
          box.hidden = false;
          active = -1;
        })
        .catch(function () {});
    };
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 180); });
    input.addEventListener('focus', function () { if (box.innerHTML && input.value.trim().length > 1) box.hidden = false; });
    input.addEventListener('keydown', function (e) {
      var list = items();
      if (box.hidden || !list.length) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); mark((active + 1) % list.length); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); mark((active - 1 + list.length) % list.length); }
      else if (e.key === 'Enter' && active > -1) { e.preventDefault(); window.location.href = list[active].href; }
      else if (e.key === 'Escape') hide();
    });
    doc.addEventListener('click', function (e) { if (!form.contains(e.target)) hide(); });
  });

  /* ---------- Pond dose calculator ---------- */
  var dc = $('[data-dcalc]');
  if (dc) {
    var rules = JSON.parse(dc.getAttribute('data-rules') || '[]');
    var unitName = JSON.parse(dc.getAttribute('data-units') || '{}');
    var nfmt = new Intl.NumberFormat(dc.getAttribute('data-locale') === 'vi' ? 'vi-VN' : 'en-US', { maximumFractionDigits: 1 });
    var val = function (k) { var v = parseFloat(($('[data-in="' + k + '"]', dc).value || '').replace(',', '.')); return v > 0 ? v : 0; };
    // Pick a readable unit: 0.4 kg → 400 g, 2500 ml → 2.5 L
    var pretty = function (x, unit) {
      if (unit === 'kg' && x < 1) return [x * 1000, 'g'];
      if (unit === 'l' && x < 1) return [x * 1000, 'ml'];
      if (unit === 'g' && x >= 1000) return [x / 1000, 'kg'];
      if (unit === 'ml' && x >= 1000) return [x / 1000, 'l'];
      return [x, unit];
    };
    var calc = function () {
      var picked = $('input[name="dose-rule"]:checked', dc);
      var r = rules[picked ? +picked.value : 0];
      if (!r) return;
      $$('[data-for]', dc).forEach(function (el) { el.hidden = el.getAttribute('data-for').split(' ').indexOf(r.type) === -1; });
      var vol = val('area') * val('depth');
      var base = r.type === 'vol' ? vol : r.type === 'area' ? val('area') : val('feed');
      $('[data-vol]', dc).textContent = nfmt.format(vol);
      if (!base) { $('[data-out]', dc).textContent = '—'; return; }
      var hi = pretty(r.max * base, r.unit);
      var lo = r.min * base * (hi[0] / (r.max * base)); // same unit as the upper bound
      var u = unitName[hi[1]] || hi[1];
      $('[data-out]', dc).textContent = nfmt.format(lo) === nfmt.format(hi[0]) ? nfmt.format(lo) + ' ' + u : nfmt.format(lo) + ' – ' + nfmt.format(hi[0]) + ' ' + u;
    };
    dc.addEventListener('input', calc);
    dc.addEventListener('change', calc);
    calc();
  }

  /* ---------- Recently viewed products (stored only in this browser) ---------- */
  var recent = $('[data-recent]');
  if (recent) {
    var KEY = 'tst-recent-' + locale;
    var list = [];
    try { list = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { list = []; }
    var cur = JSON.parse(recent.getAttribute('data-current'));
    var others = list.filter(function (x) { return x && x.id !== cur.id; });
    try { localStorage.setItem(KEY, JSON.stringify([cur].concat(others).slice(0, 8))); } catch (e) { /* private mode */ }
    if (others.length) {
      var e2 = function (t) { return String(t || '').replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); };
      $('[data-recent-list]', recent).innerHTML = others.slice(0, 6).map(function (x) {
        return '<a class="rcard" href="' + e2(x.u) + '"><img src="' + e2(x.i) + '" alt="" width="72" height="72" loading="lazy"><span><b>' + e2(x.t) + '</b>' + (x.p ? '<em>' + e2(x.p) + '</em>' : '') + '</span></a>';
      }).join('');
      recent.hidden = false;
    }
  }

  /* ---------- Quick-contact button (folds into one on phones) ---------- */
  var fab = $('[data-fab]');
  var fabBtn = $('[data-fab-toggle]');
  if (fab && fabBtn) {
    fabBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = fab.classList.toggle('is-open');
      fabBtn.setAttribute('aria-expanded', open);
    });
    doc.addEventListener('click', function (e) { if (!fab.contains(e.target)) { fab.classList.remove('is-open'); fabBtn.setAttribute('aria-expanded', 'false'); } });
  }
})();

/* Print buttons on policy pages */
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('[data-print]');
  if (b) window.print();
});
