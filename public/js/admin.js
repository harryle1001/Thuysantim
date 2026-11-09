/* THỦY SẢN TÍM — admin interactions */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  // Sidebar toggle (mobile)
  var side = $('[data-side]');
  $$('[data-side-toggle]').forEach(function (b) {
    b.addEventListener('click', function (e) { e.stopPropagation(); side.classList.toggle('is-open'); });
  });
  document.addEventListener('click', function (e) {
    if (side && side.classList.contains('is-open') && !side.contains(e.target)) side.classList.remove('is-open');
  });

  // Language tabs: switch all multilingual fields inside the same form
  $$('[data-lang-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var scope = btn.closest('form') || document;
      var lang = btn.getAttribute('data-lang-tab');
      $$('[data-lang-tab]', scope).forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-lang-tab') === lang); });
      $$('[data-lang]', scope).forEach(function (f) { f.hidden = f.getAttribute('data-lang') !== lang; });
    });
  });

  // Required VI fields hidden behind another tab → switch back to VI on invalid
  $$('form').forEach(function (f) {
    f.addEventListener('invalid', function (e) {
      var ml = e.target.closest('[data-lang]');
      if (ml && ml.hidden) {
        var tab = $('[data-lang-tab="' + ml.getAttribute('data-lang') + '"]', f);
        if (tab) tab.click();
      }
    }, true);
  });

  // Variants
  var vbox = $('[data-variants]');
  var tpl = $('#variant-tpl');
  $$('[data-add-variant]').forEach(function (b) {
    b.addEventListener('click', function () { vbox.appendChild(tpl.content.cloneNode(true)); });
  });
  document.addEventListener('click', function (e) {
    var rm = e.target.closest('[data-remove-variant]');
    if (rm && vbox && vbox.children.length > 1) rm.closest('.variant-row').remove();
  });

  // Image preview
  $$('[data-preview-input]').forEach(function (inp) {
    inp.addEventListener('change', function () {
      var f = inp.files && inp.files[0];
      var img = $('[data-preview]', inp.closest('.fld'));
      if (f && img) img.src = URL.createObjectURL(f);
    });
  });

  // Confirm destructive actions
  $$('form[data-confirm]').forEach(function (f) {
    f.addEventListener('submit', function (e) { if (!window.confirm(f.getAttribute('data-confirm'))) e.preventDefault(); });
  });

  // Clickable rows
  $$('tr[data-href]').forEach(function (tr) {
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', function (e) { if (!e.target.closest('a,button,input')) window.location = tr.getAttribute('data-href'); });
  });

  // Auto-hide flash
  var flash = $('[data-flash]');
  if (flash) setTimeout(function () { flash.style.transition = 'opacity .4s'; flash.style.opacity = '0'; setTimeout(function () { flash.remove(); }, 400); }, 4000);
})();
