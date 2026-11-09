/* THỦY SẢN TÍM — living motion: canvas aquarium, card tilt, scroll progress. No dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ */
  /* Aquarium: vector fish & shrimp swimming through light rays/bubbles  */
  /* ------------------------------------------------------------------ */
  var GOLD = ['#f6e7bd', '#d8b46c', '#a47a36'];
  var LILAC = ['#e9def7', '#b9a1dc', '#7d5bb0'];
  var rand = function (a, b) { return a + Math.random() * (b - a); };

  function Aquarium(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
    this.dense = canvas.getAttribute('data-aquarium') !== 'light';
    this.items = [];
    this.bubbles = [];
    this.t = 0;
    this.visible = true;
    this.resize();
    this.populate();
    var self = this;
    window.addEventListener('resize', function () { self.resize(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { self.visible = en[0].isIntersecting; if (self.visible) self.loop(); }).observe(canvas);
    }
    document.addEventListener('visibilitychange', function () { if (!document.hidden) self.loop(); });
    this.frame = this.frame.bind(this);
    if (reduce) { this.draw(0); } else { this.loop(); }
  }

  Aquarium.prototype.resize = function () {
    var r = this.c.getBoundingClientRect();
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.w = Math.max(1, r.width);
    this.h = Math.max(1, r.height);
    this.c.width = Math.round(this.w * this.dpr);
    this.c.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  };

  Aquarium.prototype.spawn = function (kind, initial) {
    var depth = rand(0.35, 1); // 1 = closest
    var dir = Math.random() < 0.5 ? 1 : -1;
    var size = (kind === 'shrimp' ? rand(46, 78) : rand(36, 70)) * depth * (this.w < 640 ? 0.75 : 1);
    return {
      kind: kind,
      depth: depth,
      dir: dir,
      size: size,
      x: initial ? rand(0, this.w) : (dir > 0 ? -size * 2 : this.w + size * 2),
      y: rand(this.h * 0.12, this.h * 0.88),
      vy: 0,
      speed: rand(18, 42) * (0.5 + depth * 0.7),
      phase: rand(0, Math.PI * 2),
      wobble: rand(10, 26),
      pal: depth > 0.62 ? GOLD : LILAC,
    };
  };

  Aquarium.prototype.populate = function () {
    var n = this.dense ? (this.w < 640 ? 7 : 12) : (this.w < 640 ? 4 : 7);
    for (var i = 0; i < n; i++) this.items.push(this.spawn(i % 3 === 0 ? 'shrimp' : 'fish', true));
    this.items.sort(function (a, b) { return a.depth - b.depth; });
    for (var j = 0; j < 26; j++) this.bubbles.push({ x: rand(0, this.w), y: rand(0, this.h), r: rand(1, 3.6), s: rand(14, 40), p: rand(0, 6) });
  };

  Aquarium.prototype.loop = function () {
    if (reduce || this.running || !this.visible || document.hidden) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this.frame);
  };

  Aquarium.prototype.frame = function (now) {
    if (!this.visible || document.hidden) { this.running = false; return; }
    var dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.t += dt;
    this.update(dt);
    this.draw(this.t);
    requestAnimationFrame(this.frame);
  };

  Aquarium.prototype.update = function (dt) {
    var self = this;
    this.items.forEach(function (it, i) {
      it.x += it.dir * it.speed * dt;
      it.y += Math.sin(self.t * 0.8 + it.phase) * it.wobble * dt * 0.6;
      var out = it.dir > 0 ? it.x > self.w + it.size * 2.2 : it.x < -it.size * 2.2;
      if (out) self.items[i] = self.spawn(it.kind, false);
    });
    this.items.sort(function (a, b) { return a.depth - b.depth; });
    this.bubbles.forEach(function (b) {
      b.y -= b.s * dt;
      b.x += Math.sin(self.t * 1.4 + b.p) * 6 * dt;
      if (b.y < -10) { b.y = self.h + 10; b.x = rand(0, self.w); }
    });
  };

  Aquarium.prototype.rays = function (t) {
    var ctx = this.ctx;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (var i = 0; i < 4; i++) {
      var x = this.w * (0.18 + i * 0.22) + Math.sin(t * 0.25 + i) * 40;
      var g = ctx.createLinearGradient(x, 0, x + 120, this.h);
      g.addColorStop(0, 'rgba(236, 212, 155, 0.10)');
      g.addColorStop(1, 'rgba(236, 212, 155, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(x - 30, 0);
      ctx.lineTo(x + 50, 0);
      ctx.lineTo(x + 230, this.h);
      ctx.lineTo(x + 60, this.h);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  };

  function grad(ctx, s, pal) {
    var g = ctx.createLinearGradient(-s, -s * 0.5, s, s * 0.5);
    g.addColorStop(0, pal[0]);
    g.addColorStop(0.5, pal[1]);
    g.addColorStop(1, pal[2]);
    return g;
  }

  function drawFish(ctx, it, t) {
    var s = it.size;
    var swing = Math.sin(t * 7 + it.phase) * 0.38;
    ctx.fillStyle = grad(ctx, s, it.pal);
    // body (nose at +x)
    ctx.beginPath();
    ctx.moveTo(s * 0.55, 0);
    ctx.bezierCurveTo(s * 0.3, -s * 0.36, -s * 0.35, -s * 0.34, -s * 0.48, 0);
    ctx.bezierCurveTo(-s * 0.35, s * 0.34, s * 0.3, s * 0.36, s * 0.55, 0);
    ctx.fill();
    // dorsal & pelvic fins
    ctx.beginPath();
    ctx.moveTo(s * 0.12, -s * 0.28);
    ctx.quadraticCurveTo(-s * 0.05, -s * 0.52, -s * 0.22, -s * 0.25);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-s * 0.02, s * 0.27);
    ctx.quadraticCurveTo(-s * 0.12, s * 0.42, -s * 0.24, s * 0.22);
    ctx.fill();
    // tail, hinged at the body's end
    ctx.save();
    ctx.translate(-s * 0.46, 0);
    ctx.rotate(swing);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-s * 0.36, -s * 0.28);
    ctx.quadraticCurveTo(-s * 0.26, 0, -s * 0.36, s * 0.28);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    // gill & eye
    ctx.strokeStyle = 'rgba(23, 10, 46, 0.45)';
    ctx.lineWidth = Math.max(0.8, s * 0.025);
    ctx.beginPath();
    ctx.arc(s * 0.3, 0, s * 0.18, -0.9, 0.9);
    ctx.stroke();
    ctx.fillStyle = 'rgba(23, 10, 46, 0.85)';
    ctx.beginPath();
    ctx.arc(s * 0.38, -s * 0.05, Math.max(1.2, s * 0.045), 0, Math.PI * 2);
    ctx.fill();
  }

  function drawShrimp(ctx, it, t) {
    var s = it.size;
    var flex = Math.sin(t * 3 + it.phase) * 0.06;
    var segs = 7;
    var x = 0, y = 0, ang = 0;
    var pts = [];
    for (var i = 0; i < segs; i++) {
      var r = s * (0.17 - i * 0.017);
      pts.push({ x: x, y: y, r: r, a: ang });
      ang += 0.2 + flex; // the body curls downward toward the tail
      x -= Math.cos(ang) * r * 0.95;
      y += Math.sin(ang) * r * 0.95;
    }
    var fill = grad(ctx, s, it.pal);
    // legs (swimmerets) paddling
    ctx.strokeStyle = it.pal[1];
    ctx.globalAlpha *= 0.8;
    ctx.lineWidth = Math.max(0.8, s * 0.018);
    for (var k = 1; k < 6; k++) {
      var p = pts[k];
      var kick = Math.sin(t * 9 + k * 0.9) * s * 0.05;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y + p.r * 0.6);
      ctx.lineTo(p.x + kick, p.y + p.r * 0.6 + s * 0.14);
      ctx.stroke();
    }
    ctx.globalAlpha /= 0.8;
    // body segments, tail first so the head overlaps
    ctx.fillStyle = fill;
    for (var j = segs - 1; j >= 0; j--) {
      var q = pts[j];
      ctx.save();
      ctx.translate(q.x, q.y);
      ctx.rotate(-q.a * 0.6);
      ctx.beginPath();
      ctx.ellipse(0, 0, q.r * 1.05, q.r * 0.95, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(23, 10, 46, 0.35)';
      ctx.lineWidth = Math.max(0.6, s * 0.012);
      ctx.beginPath();
      ctx.arc(0, 0, q.r * 0.95, -1.2, 1.2);
      ctx.stroke();
      ctx.restore();
    }
    // tail fan
    var tail = pts[segs - 1];
    ctx.save();
    ctx.translate(tail.x, tail.y);
    ctx.rotate(ang + Math.PI * 0.5 + Math.sin(t * 6 + it.phase) * 0.15);
    ctx.fillStyle = fill;
    [-0.5, 0, 0.5].forEach(function (o) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.sin(o) * s * 0.2 - s * 0.05, s * 0.2);
      ctx.lineTo(Math.sin(o) * s * 0.2 + s * 0.05, s * 0.2);
      ctx.closePath();
      ctx.fill();
    });
    ctx.restore();
    // head: carapace, rostrum, eye
    var h = pts[0];
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(h.x - h.r * 0.2, h.y - h.r);
    ctx.quadraticCurveTo(h.x + s * 0.26, h.y - h.r * 1.1, h.x + s * 0.34, h.y - h.r * 0.2);
    ctx.quadraticCurveTo(h.x + s * 0.18, h.y + h.r * 0.9, h.x - h.r * 0.2, h.y + h.r);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(h.x + s * 0.3, h.y - h.r * 0.45);
    ctx.lineTo(h.x + s * 0.52, h.y - h.r * 0.9);
    ctx.lineTo(h.x + s * 0.3, h.y - h.r * 0.2);
    ctx.fill();
    ctx.fillStyle = 'rgba(23, 10, 46, 0.9)';
    ctx.beginPath();
    ctx.arc(h.x + s * 0.2, h.y - h.r * 0.35, Math.max(1.3, s * 0.035), 0, Math.PI * 2);
    ctx.fill();
    // antennae sweeping back over the body
    ctx.strokeStyle = it.pal[0];
    ctx.lineWidth = Math.max(0.6, s * 0.01);
    for (var a = 0; a < 2; a++) {
      var wave = Math.sin(t * 2.4 + it.phase + a) * s * 0.12;
      ctx.beginPath();
      ctx.moveTo(h.x + s * 0.3, h.y - h.r * 0.5);
      ctx.bezierCurveTo(h.x + s * 0.7, h.y - s * 0.5 - a * s * 0.1, h.x - s * 0.2, h.y - s * 0.75 + wave, h.x - s * (1.1 + a * 0.25), h.y - s * 0.35 + wave);
      ctx.stroke();
    }
  }

  Aquarium.prototype.draw = function (t) {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
    this.rays(t);
    var self = this;
    this.items.forEach(function (it) {
      ctx.save();
      ctx.globalAlpha = 0.28 + it.depth * 0.62;
      ctx.translate(it.x, it.y);
      ctx.scale(it.dir, 1);
      ctx.rotate(Math.cos(self.t * 0.8 + it.phase) * 0.08);
      if (it.depth < 0.5) ctx.filter = 'blur(1.5px)';
      if (it.kind === 'shrimp') drawShrimp(ctx, it, t); else drawFish(ctx, it, t);
      ctx.restore();
    });
    ctx.save();
    this.bubbles.forEach(function (b) {
      ctx.strokeStyle = 'rgba(236, 222, 247, 0.45)';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.10)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    ctx.restore();
  };

  document.querySelectorAll('canvas[data-aquarium]').forEach(function (c) { new Aquarium(c); });

  /* ------------------------------------------------------------------ */
  /* Product card tilt + light following the pointer                     */
  /* ------------------------------------------------------------------ */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest && e.target.closest('.pcard');
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', ((px - 0.5) * 10).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((0.5 - py) * 8).toFixed(2) + 'deg');
      card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    });

    /* Hero packs drift gently toward the pointer */
    var visual = document.querySelector('.hero__visual');
    var hero = document.querySelector('.hero');
    if (visual && hero) {
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        var dx = (e.clientX - r.left) / r.width - 0.5;
        var dy = (e.clientY - r.top) / r.height - 0.5;
        visual.style.transform = 'translate3d(' + (dx * 18).toFixed(1) + 'px,' + (dy * 14).toFixed(1) + 'px,0)';
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Floating contact buttons glide after the scroll, then settle        */
  /* ------------------------------------------------------------------ */
  var fab = document.querySelector('[data-fab]');
  if (fab && !reduce) {
    var lastY = window.scrollY, offset = 0, vel = 0, raf = 0;
    var step = function () {
      // spring back to rest
      vel += -offset * 0.12;
      vel *= 0.78;
      offset += vel;
      fab.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
      if (Math.abs(offset) > 0.1 || Math.abs(vel) > 0.1) { raf = requestAnimationFrame(step); return; }
      offset = 0; vel = 0; raf = 0;
      fab.style.transform = '';
    };
    window.addEventListener('scroll', function () {
      var y = window.scrollY, dy = y - lastY;
      lastY = y;
      // lag behind the page a little, like something floating on water
      offset = Math.max(-26, Math.min(26, offset - dy * 0.35));
      if (!raf) raf = requestAnimationFrame(step);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll progress hairline                                            */
  /* ------------------------------------------------------------------ */
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
      ticking = false;
    });
  }, { passive: true });
})();
