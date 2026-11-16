/* THỦY SẢN TÍM — "Ocean Dive": a fixed WebGL backdrop. Scrolling the page dives the camera from the
   sunlit surface (god rays, caustics, bubbles) down to the deep (marine snow, bioluminescent plankton,
   gold sparkles) with schools of fish crossing mid-water. Raw WebGL1, no dependencies; Lenis (optional)
   gives the smooth wheel. Adaptive resolution keeps phones smooth; reduced-motion gets a still frame. */
(function () {
  'use strict';
  var canvas = document.querySelector('[data-ocean]');
  if (!canvas) return;
  var root = document.documentElement;
  // Never compete with first paint / LCP: start only after `load`, when the main thread is idle.
  // Until then (and when WebGL is unavailable) the CSS gradient on html.has-ocean is the backdrop.
  function schedule() {
    var go = function () { if (window.requestIdleCallback) requestIdleCallback(init, { timeout: 1500 }); else setTimeout(init, 200); };
    if (document.readyState === 'complete') go(); else window.addEventListener('load', go, { once: true });
  }
  schedule();

  function init() {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = window.matchMedia && window.matchMedia('(max-width: 820px), (pointer: coarse)').matches;

  var lenis = null;
  function fail() {
    root.classList.remove('ocean-on');
    root.classList.add('ocean-off');
    canvas.remove();
    if (lenis) { lenis.destroy(); lenis = null; window.tstLenis = null; } // autoRaf is off → would freeze the wheel
  }

  // failIfMajorPerformanceCaveat: skip software-rendered WebGL (no GPU / blocklisted driver) — a full-screen
  // shader there costs seconds of main-thread time; the static gradient is used instead.
  var gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, premultipliedAlpha: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: true });
  if (!gl) return fail();
  // Software rasterisers that don't report the caveat (SwiftShader, llvmpipe, Basic Render Driver)
  var dbg = gl.getExtension('WEBGL_debug_renderer_info');
  if (dbg && /swiftshader|llvmpipe|softpipe|software|basic render/i.test(String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)))) return fail();
  var hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
  var PREC = hp && hp.precision > 0 ? 'highp' : 'mediump';

  /* ------------------------------------------------------------------ */
  /* Shaders                                                             */
  /* ------------------------------------------------------------------ */
  var BG_VS = 'attribute vec2 aP;varying vec2 vUv;void main(){vUv=aP*.5+.5;gl_Position=vec4(aP,0.,1.);}';

  var BG_FS = [
    'precision ' + PREC + ' float;',
    'varying vec2 vUv;',
    'uniform vec2 uRes;uniform float uTime,uDepth,uDark;uniform vec2 uPtr;',
    'float h1(float n){return fract(sin(n)*43758.5453);}',
    'float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h1(i),h1(i+1.),f);}',
    'float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    ' return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<3;i++){v+=a*n2(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return v;}',
    'float caustic(vec2 p,float t){vec2 q=p;float c=0.;',
    ' for(int i=0;i<3;i++){float fi=float(i);q+=vec2(sin(q.y*1.27+t*.62+fi*1.7),cos(q.x*1.13-t*.55+fi*2.3))*.62;c+=abs(sin(q.x)*sin(q.y));}',
    ' return pow(clamp(1.-c/3.,0.,1.),7.);}',
    'void main(){',
    ' float asp=uRes.x/uRes.y;float t=uTime;',
    ' vec2 uv=vUv;vec2 p=vec2((uv.x-.5)*asp,uv.y);',
    ' float d=clamp(uDepth*1.04+(.5-uv.y)*.16,0.,1.);',
    ' float shallow=1.-smoothstep(0.,.55,uDepth);',
    // palettes: light = airy lagoon (keeps dark text readable); dark = full dive to the abyss
    ' vec3 lT=vec3(.925,.972,.99),lM=vec3(.85,.935,.968),lD=vec3(.79,.895,.945);',
    ' vec3 dT=vec3(.045,.25,.40),dM=vec3(.018,.11,.205),dD=vec3(.004,.022,.05);',
    ' vec3 cL=mix(mix(lT,lM,smoothstep(0.,.5,d)),lD,smoothstep(.5,1.,d));',
    ' vec3 cD=mix(mix(dT,dM,smoothstep(0.,.5,d)),dD,smoothstep(.45,1.,d));',
    ' vec3 col=mix(cL,cD,uDark);',
    // drifting volumetric haze
    ' float fog=fbm(p*1.6+vec2(t*.018,-t*.011)+uPtr*.04);',
    ' col+=mix(vec3(.03,.05,.06)*(fog-.45),vec3(.02,.09,.12)*(fog-.35)*(1.-d*.6),uDark);',
    // god rays from above (follow the pointer slightly)
    ' vec2 s=vec2(uPtr.x*.12,1.32);vec2 r=p-s;float ang=atan(r.x,-r.y);',
    ' float ray=n1(ang*9.+t*.16)*.62+n1(ang*23.-t*.23)*.38;ray=smoothstep(.42,1.,ray);',
    ' float fall=exp(-length(r)*mix(1.05,1.35,uDark))*smoothstep(-.1,.75,uv.y);',
    ' float rays=ray*fall*shallow;',
    ' col+=rays*mix(vec3(.30,.30,.26),vec3(.30,.55,.62),uDark);',
    // surface shimmer band near the very top of the page
    ' float surf=smoothstep(.6,1.,uv.y)*(1.-smoothstep(0.,.14,uDepth));',
    ' float sh=caustic(vec2(p.x*3.,uv.y*9.-t*.15),t*1.3);',
    ' col+=surf*(.10+sh*.55)*mix(vec3(.9,.95,1.),vec3(.45,.75,.85),uDark)*.55;',
    // caustics dancing through the shallows
    ' float cs=caustic(p*vec2(4.2,5.2)+vec2(t*.05,uDepth*6.),t)*shallow;',
    ' col+=cs*mix(vec3(.40,.42,.40),vec3(.25,.55,.62),uDark)*(.35+.65*uv.y);',
    // faint bioluminescent bloom in the deep
    ' float deep=smoothstep(.45,1.,uDepth)*uDark;',
    ' float bl=fbm(p*2.4-vec2(t*.03,uDepth*3.));',
    ' col+=deep*vec3(.0,.16,.20)*smoothstep(.5,.95,bl);',
    // vignette + dither (kills gradient banding)
    ' vec2 v=uv-.5;float vig=1.-dot(v*vec2(.9,1.1),v*vec2(.9,1.1))*mix(.22,.9,uDark);',
    ' col*=vig;',
    ' col+=(h2(gl_FragCoord.xy+fract(t))-.5)/255.;',
    ' gl_FragColor=vec4(col,1.);',
    '}'
  ].join('\n');

  // Particle types: 0 marine snow · 1 plankton glow · 2 bubble · 3 gold sparkle · 4 fish
  var PT_VS = [
    'precision ' + PREC + ' float;',
    'attribute vec3 aPos;attribute vec4 aMeta;', // meta: type, seed, size, school
    'uniform vec2 uRes;uniform float uTime,uDepth,uDark,uVel,uPx;uniform vec2 uPtr;',
    'varying vec4 vCol;varying float vType,vBlur,vAng,vStretch,vSeed;',
    'const float COL=4.;',
    'void main(){',
    ' float type=aMeta.x,seed=aMeta.y,size=aMeta.z;float t=uTime;float asp=uRes.x/uRes.y;',
    ' float z=aPos.z;vec2 q;float vis=1.;vAng=0.;vStretch=1.;',
    ' if(type<3.5){',
    '  float drift=type==2.?t*(.05+seed*.07):-t*(.006+seed*.01);', // bubbles rise, snow sinks
    '  float y=mod(aPos.y+uDepth*16./z+drift+2.,COL)-2.;',
    '  float x=aPos.x*asp*1.08+sin(t*.2+seed*40.)*.03+(type==2.?sin(t*1.6+seed*30.)*.012:0.);',
    '  q=vec2(x,y);',
    '  vStretch=type==2.?1.:1.+min(abs(uVel)*2.8,2.6)*(2.5/z);',
    '  if(type==1.)vis=smoothstep(.18,.75,uDepth)*(.55+.45*sin(t*1.4+seed*60.));',
    '  else if(type==2.)vis=1.-smoothstep(.3,.7,uDepth);',
    '  else if(type==3.)vis=.65+.35*sin(t*2.2+seed*80.);',
    ' }else{',
    // fish: two schools crossing in opposite directions, visible through mid-water
    '  float sc=aMeta.w;float dir=sc<.5?1.:-1.;',
    '  float u=fract(t*.016+sc*.47);float cx=dir*(u*2.-1.)*asp*1.9;',
    '  float cy=.18-sc*.5+sin(t*.21+sc*3.)*.12+(uDepth-.5)*-.6;',
    '  vec2 off=aPos.xy*vec2(.34,.15);off+=vec2(sin(t*.9+seed*20.),cos(t*.7+seed*13.))*.02;',
    '  q=vec2(cx,cy)+off;',
    '  float dy=cos(t*.21+sc*3.)*.0252;vAng=atan(dy,dir*.0608*asp);',
    '  vis=smoothstep(.12,.32,uDepth)*(1.-smoothstep(.72,.9,uDepth));',
    ' }',
    ' vec2 par=uPtr*(.05/z);',
    ' gl_Position=vec4((q.x+par.x)/asp,q.y+par.y,0.,1.);',
    ' float px=size*uRes.y*uPx/(z*9.);',
    ' float focus=abs(z-4.6)/5.;vBlur=clamp(focus,.0,1.);',
    ' px*=1.+vBlur*.55*step(type,3.5);',
    ' gl_PointSize=clamp(px*vStretch,1.,64.);',
    ' float fade=smoothstep(1.8,3.,z)*(1.-smoothstep(9.,12.3,z));',
    ' float a=vis*fade/(1.+vBlur*vBlur*5.);',
    ' vec3 cl,cd;',
    ' if(type==0.){cl=vec3(.22,.42,.55);cd=vec3(.75,.88,.95);a*=mix(.22,.42,uDark);}',
    ' else if(type==1.){cl=vec3(.08,.45,.55);cd=vec3(.25,.95,.92);a*=mix(.16,.7,uDark);}',
    ' else if(type==2.){cl=vec3(1.);cd=vec3(.7,.92,1.);a*=mix(.6,.38,uDark);}',
    ' else if(type==3.){cl=vec3(.72,.55,.22);cd=vec3(.98,.84,.5);a*=mix(.38,.7,uDark);}',
    ' else{cl=vec3(.10,.24,.34);cd=vec3(.55,.75,.88);a*=mix(.3,.26,uDark);}',
    ' vCol=vec4(mix(cl,cd,uDark),a);vType=type;vSeed=seed;',
    '}'
  ].join('\n');

  var PT_FS = [
    'precision ' + PREC + ' float;',
    'uniform float uTime,uDark;',
    'varying vec4 vCol;varying float vType,vBlur,vAng,vStretch,vSeed;',
    'void main(){',
    ' vec2 pc=vec2(gl_PointCoord.x*2.-1.,1.-gl_PointCoord.y*2.);float a;',
    ' if(vType<3.5){',
    '  vec2 e=vec2(pc.x*vStretch,pc.y);float d=length(e);',
    '  if(vType==2.){',
    '   float ring=smoothstep(.2,0.,abs(d-.72))*.75+smoothstep(.95,.7,d)*.12;',
    '   float hi=smoothstep(.32,0.,length(pc-vec2(-.3,.32)))*.9;a=ring+hi;',
    '  }else{',
    '   float soft=mix(.35,.95,vBlur);a=smoothstep(1.,1.-soft,d);',
    '   a+=exp(-d*d*9.)*mix(.6,1.,uDark)*(1.-vBlur);',
    '   if(vType==3.){float st=max(0.,1.-abs(pc.x)*9.)*max(0.,1.-abs(pc.y))+max(0.,1.-abs(pc.y)*9.)*max(0.,1.-abs(pc.x));a+=st*.8*(1.-vBlur);}',
    '  }',
    ' }else{',
    // fish silhouette (SDF): body ellipse + forked tail with wiggle, rotated to heading
    '  float c=cos(vAng),s=sin(vAng);vec2 f=vec2(c*pc.x+s*pc.y,-s*pc.x+c*pc.y);',
    '  float w=sin(uTime*9.+vSeed*30.)*.06;',
    '  float body=length(vec2(f.x/.55,(f.y-w*f.x)/.16));',
    '  vec2 tp=f-vec2(-.62,w*1.6);float tail=max(abs(tp.y)-(-.1-tp.x)*.9,abs(tp.x+.05)-.17);',
    '  float m=1.-smoothstep(.92,1.04,body);m=max(m,1.-smoothstep(-.02,.03,tail));',
    '  float sheen=smoothstep(.1,-.1,f.y)*smoothstep(1.,.3,body)*.5;',
    '  a=m*(1.+sheen*uDark);',
    ' }',
    ' a*=vCol.a;if(a<.004)discard;',
    // premultiplied: alpha 0 => additive glow (dark), alpha a => normal blend (light)
    ' gl_FragColor=vec4(vCol.rgb*a,a*(1.-uDark*.92));',
    '}'
  ].join('\n');

  function sh(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn('[ocean]', gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  function prog(vs, fs) {
    var v = sh(gl.VERTEX_SHADER, vs), f = sh(gl.FRAGMENT_SHADER, fs);
    if (!v || !f) return null;
    var p = gl.createProgram();
    gl.attachShader(p, v); gl.attachShader(p, f); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { console.warn('[ocean]', gl.getProgramInfoLog(p)); return null; }
    var u = {}, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < n; i++) { var info = gl.getActiveUniform(p, i); u[info.name] = gl.getUniformLocation(p, info.name); }
    return { p: p, u: u };
  }

  var bg = prog(BG_VS, BG_FS);
  var pt = prog(PT_VS, PT_FS);
  if (!bg || !pt) return fail();

  /* ------------------------------------------------------------------ */
  /* Geometry                                                            */
  /* ------------------------------------------------------------------ */
  var quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

  var R = Math.random;
  var counts = mobile ? { snow: 300, plank: 150, bubble: 34, gold: 34, fish: 36 } : { snow: 680, plank: 320, bubble: 64, gold: 70, fish: 64 };
  var list = [];
  function add(type, n, sizeA, sizeB) {
    for (var i = 0; i < n; i++) {
      var z = 1.8 + Math.pow(R(), 1.15) * 10.5;
      list.push((R() * 2 - 1), (R() * 4 - 2), z, type, R(), sizeA + R() * (sizeB - sizeA), 0);
    }
  }
  add(0, counts.snow, 0.35, 0.95);
  add(1, counts.plank, 0.55, 1.3);
  add(2, counts.bubble, 0.9, 2.1);
  add(3, counts.gold, 0.5, 1.05);
  for (var f = 0; f < counts.fish; f++) {
    var school = f < counts.fish * 0.55 ? 0 : 1;
    var ang = R() * Math.PI * 2, rad = Math.sqrt(R());
    list.push(Math.cos(ang) * rad, Math.sin(ang) * rad, 4.2 + R() * 3.0, 4, R(), 2.9 + R() * 1.0, school);
  }
  var data = new Float32Array(list);
  var COUNT = data.length / 7;
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  var aPos = gl.getAttribLocation(pt.p, 'aPos'), aMeta = gl.getAttribLocation(pt.p, 'aMeta'), aP = gl.getAttribLocation(bg.p, 'aP');

  /* ------------------------------------------------------------------ */
  /* State: scroll depth, velocity, pointer, theme                       */
  /* ------------------------------------------------------------------ */
  var st = { depth: 0, tDepth: 0, vel: 0, lastY: window.scrollY, dark: 0, tDark: 0, ptr: [0, 0], tPtr: [0, 0] };
  function readTheme() { st.tDark = root.getAttribute('data-theme') === 'dark' ? 1 : 0; }
  readTheme(); st.dark = st.tDark;
  new MutationObserver(readTheme).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  function readDepth() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    st.tDepth = Math.min(1, Math.max(0, window.scrollY / max));
  }
  readDepth(); st.depth = st.tDepth;

  if (!mobile) {
    window.addEventListener('pointermove', function (e) {
      st.tPtr[0] = (e.clientX / window.innerWidth) * 2 - 1;
      st.tPtr[1] = -((e.clientY / window.innerHeight) * 2 - 1);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Resolution (adaptive)                                               */
  /* ------------------------------------------------------------------ */
  var dprCap = mobile ? 1.25 : 1.5;
  var quality = mobile ? 0.8 : 1;
  var cw = 0, ch = 0, pxScale = 1;
  function resize(force) {
    var w = canvas.clientWidth, h = canvas.clientHeight;
    // Ignore the small height jumps of a mobile URL bar showing/hiding
    if (!force && w === cw && Math.abs(h - ch) < 140) return;
    cw = w; ch = h;
    pxScale = Math.min(window.devicePixelRatio || 1, dprCap) * quality;
    canvas.width = Math.max(1, Math.round(w * pxScale));
    canvas.height = Math.max(1, Math.round(h * pxScale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize(true);
  window.addEventListener('resize', function () { resize(false); });

  /* ------------------------------------------------------------------ */
  /* Smooth scroll (Lenis) — desktop wheel only; touch stays native      */
  /* ------------------------------------------------------------------ */
  if (!reduce && window.Lenis) {
    lenis = new window.Lenis({ autoRaf: false, lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95, allowNestedScroll: true, anchors: { offset: -96 } });
    window.tstLenis = lenis;
    // Keep Lenis paused while a drawer/overlay locks the body
    new MutationObserver(function () {
      if (document.body.style.overflow === 'hidden') lenis.stop(); else lenis.start();
    }).observe(document.body, { attributes: true, attributeFilter: ['style'] });
  }

  /* ------------------------------------------------------------------ */
  /* Render loop                                                         */
  /* ------------------------------------------------------------------ */
  var start = performance.now(), last = start, running = false, frames = 0, slow = 0, lost = false, shown = false, winStart = start;
  var timeFrozen = 18.0;

  function draw(now) {
    var t = reduce ? timeFrozen : (now - start) / 1000;
    gl.disable(gl.BLEND);
    gl.useProgram(bg.p);
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.enableVertexAttribArray(aP);
    gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f((bg.u.uRes || null), canvas.width, canvas.height);
    gl.uniform1f((bg.u.uTime || null), t);
    gl.uniform1f((bg.u.uDepth || null), st.depth);
    gl.uniform1f((bg.u.uDark || null), st.dark);
    gl.uniform2f((bg.u.uPtr || null), st.ptr[0], st.ptr[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disableVertexAttribArray(aP);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(pt.p);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(aPos);
    gl.enableVertexAttribArray(aMeta);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 28, 0);
    gl.vertexAttribPointer(aMeta, 4, gl.FLOAT, false, 28, 12);
    gl.uniform2f((pt.u.uRes || null), canvas.width, canvas.height);
    gl.uniform1f((pt.u.uTime || null), t);
    gl.uniform1f((pt.u.uDepth || null), st.depth);
    gl.uniform1f((pt.u.uDark || null), st.dark);
    gl.uniform1f((pt.u.uVel || null), st.vel);
    gl.uniform1f((pt.u.uPx || null), 1);
    gl.uniform2f((pt.u.uPtr || null), st.ptr[0], st.ptr[1]);
    gl.drawArrays(gl.POINTS, 0, COUNT);
  }

  function step(now) {
    if (!running) return;
    var dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    if (lenis) lenis.raf(now);
    readDepth();
    var k = 1 - Math.pow(0.0009, dt);           // frame-rate independent easing
    st.depth += (st.tDepth - st.depth) * k;
    var y = window.scrollY;
    var v = dt > 0 ? (y - st.lastY) / (window.innerHeight * dt) : 0;
    st.lastY = y;
    st.vel += (Math.max(-3, Math.min(3, v)) - st.vel) * (1 - Math.pow(0.002, dt));
    st.dark += (st.tDark - st.dark) * (1 - Math.pow(0.02, dt));
    st.ptr[0] += (st.tPtr[0] - st.ptr[0]) * k * 0.6;
    st.ptr[1] += (st.tPtr[1] - st.ptr[1]) * k * 0.6;
    draw(now);
    if (!shown) { shown = true; root.classList.add('ocean-on'); } // fade in after the first real frame

    // Adaptive quality: drop resolution if the device can't hold ~45 fps; still too slow at the
    // lowest resolution → fall back to the static gradient instead of draining the device
    frames++;
    if (dt > 0.024) slow++;
    if (frames >= 90 || (frames >= 10 && now - winStart > 2000)) {
      if (slow > frames * 0.5) {
        if (quality > 0.5) { quality = Math.max(0.5, quality - 0.15); resize(true); }
        else if (slow > frames * 0.8) { pause(); fail(); return; }
      }
      frames = 0; slow = 0; winStart = now;
    }
    requestAnimationFrame(step);
  }

  function play() { if (running || lost) return; running = true; last = performance.now(); requestAnimationFrame(step); }
  function pause() { running = false; }

  canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); lost = true; pause(); fail(); });

  if (reduce) {
    // Still frame that follows the scroll position, no animation
    var redraw = function () { readDepth(); st.depth = st.tDepth; readTheme(); st.dark = st.tDark; draw(0); };
    window.addEventListener('scroll', redraw, { passive: true });
    window.addEventListener('resize', function () { resize(false); redraw(); });
    new MutationObserver(redraw).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    redraw();
    root.classList.add('ocean-on');
  } else {
    document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else play(); });
    play();
  }
  }
})();
