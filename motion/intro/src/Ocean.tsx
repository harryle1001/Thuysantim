// Nền nước WebGL — cùng ngôn ngữ hình ảnh với public/js/ocean.js (bảng màu "dark dive", god rays,
// caustics, sương trôi, plankton vàng), thêm: bọt khí, độ đục (cảnh vấn đề), vi sinh phát sáng (cảnh giải pháp).
// Mọi thứ là hàm thuần của thời gian -> mỗi frame render xác định, không giật.
import React, { useLayoutEffect, useRef } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const VS = 'attribute vec2 aP;varying vec2 vUv;void main(){vUv=aP*.5+.5;gl_Position=vec4(aP,0.,1.);}';
const FS = `precision highp float;
varying vec2 vUv;
uniform vec2 uRes;uniform float uTime,uDepth,uMurk,uBloom;
float h1(float n){return fract(sin(n)*43758.5453);}
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h1(i),h1(i+1.),f);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n2(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return v;}
float caustic(vec2 p,float t){vec2 q=p;float c=0.;
 for(int i=0;i<3;i++){float fi=float(i);q+=vec2(sin(q.y*1.27+t*.62+fi*1.7),cos(q.x*1.13-t*.55+fi*2.3))*.62;c+=abs(sin(q.x)*sin(q.y));}
 return pow(clamp(1.-c/3.,0.,1.),7.);}
// lớp hạt: mỗi ô lưới một hạt, trôi theo vel, nhấp nháy
float sparks(vec2 p,float sc,vec2 vel,float t,float sz,float seed){
 vec2 q=p*sc+vel*t;vec2 id=floor(q);vec2 f=fract(q)-.5;
 float r=h2(id+seed);vec2 o=vec2(h2(id+seed+1.7),h2(id+seed+3.1))-.5;
 float d=length(f-o*.7);float tw=.55+.45*sin(t*(1.+r*2.)+r*40.);
 return smoothstep(sz,0.,d)*step(.55,r)*tw;}
float bubbles(vec2 p,float t){float b=0.;
 for(int i=0;i<2;i++){float fi=float(i);float sc=5.+fi*4.;
  vec2 q=p*sc;q.y-=t*(.9+fi*.5);q.x+=sin(q.y*.9+fi*3.)*.18;
  vec2 id=floor(q);vec2 f=fract(q)-.5;float r=h2(id+fi*9.);
  float rad=.035+.06*r;float d=length(f-vec2(h2(id+2.)-.5,0.)*.6);
  float ring=smoothstep(rad,rad*.6,d)-smoothstep(rad*.75,rad*.2,d)*.6;
  b+=ring*step(.92,r);}
 return b;}
void main(){
 float asp=uRes.x/uRes.y;float t=uTime;
 vec2 uv=vUv;vec2 p=vec2((uv.x-.5)*asp,uv.y);
 float d=clamp(uDepth*1.04+(.5-uv.y)*.16,0.,1.);
 float shallow=1.-smoothstep(0.,.6,uDepth);
 vec3 dT=vec3(.045,.25,.40),dM=vec3(.018,.11,.205),dD=vec3(.004,.022,.05);
 vec3 col=mix(mix(dT,dM,smoothstep(0.,.5,d)),dD,smoothstep(.45,1.,d));
 float fog=fbm(p*1.6+vec2(t*.018,-t*.011));
 col+=vec3(.02,.09,.12)*(fog-.35)*(1.-d*.6);
 vec2 s=vec2(sin(t*.07)*.15,1.32);vec2 r=p-s;float ang=atan(r.x,-r.y);
 float ray=n1(ang*9.+t*.16)*.62+n1(ang*23.-t*.23)*.38;ray=smoothstep(.42,1.,ray);
 float fall=exp(-length(r)*1.25)*smoothstep(-.1,.75,uv.y);
 col+=ray*fall*(shallow*.9+.12)*vec3(.30,.55,.62)*(1.-uMurk*.75);
 float surf=smoothstep(.62,1.,uv.y)*(1.-smoothstep(0.,.2,uDepth));
 col+=caustic(vec2(p.x*3.,uv.y*9.-t*.15),t*1.3)*surf*vec3(.5,.75,.8);
 float c=caustic(p*4.+vec2(t*.05,0.),t*.9);
 col+=c*vec3(.10,.22,.26)*shallow*smoothstep(.2,.9,uv.y)*(1.-uMurk);
 // độ đục: nước ngả xanh rêu - nâu, phù sa lơ lửng
 vec3 murkC=vec3(.11,.12,.07)+vec3(.05,.04,.01)*fbm(p*3.+vec2(t*.04,t*.02));
 col=mix(col,murkC*(.55+.45*fog),uMurk*.78);
 col+=sparks(p,26.,vec2(.05,-.12),t,.09,4.)*vec3(.35,.3,.18)*uMurk;
 // plankton vàng & tuyết biển
 float pg=sparks(p,18.,vec2(.02,.05),t,.06,1.)+sparks(p,34.,vec2(-.03,.03),t,.05,2.)*.6;
 col+=pg*mix(vec3(.85,.72,.42),vec3(.95,.82,.52),d)*(.18+.55*d)*(1.-uMurk*.7);
 col+=sparks(p,12.,vec2(.0,-.04),t,.035,3.)*vec3(.5,.62,.7)*.35;
 // vi sinh phát sáng lan từ tâm (cảnh giải pháp)
 vec2 cp=p-vec2(0.,.5);float rad=length(cp);
 float front=uBloom*1.25;
 float m=sparks(p,22.,vec2(.03,.02)*sin(t*.3),t,.12,7.)+sparks(p,40.,vec2(-.02,.04),t,.1,8.);
 float inside=smoothstep(front,front-.35,rad);
 col+=m*inside*vec3(.25,.95,.85)*.55*(1.-smoothstep(1.2,2.,uBloom)*.75);
 col+=smoothstep(.06,0.,abs(rad-front))*vec3(.15,.55,.5)*.35*step(.01,uBloom)*(1.-smoothstep(.9,1.,uBloom));
 col+=bubbles(p,t)*vec3(.55,.75,.85)*.35*(1.-d*.5);
 float v=length((uv-.5)*vec2(1.,.9));col*=1.-smoothstep(.45,1.05,v)*.6;
 col+=(h2(uv*uRes+t)-.5)*.012;
 gl_FragColor=vec4(col,1.);}`;

export const Ocean: React.FC<{ depth: number; murk: number; bloom: number; scale?: number }> = ({ depth, murk, bloom, scale = 0.6 }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const ref = useRef<HTMLCanvasElement>(null);
  const st = useRef<{ gl: WebGLRenderingContext; u: Record<string, WebGLUniformLocation | null> } | null>(null);
  const w = Math.round(width * scale), h = Math.round(height * scale);

  useLayoutEffect(() => {
    const cv = ref.current!;
    if (!st.current) {
      const gl = cv.getContext('webgl', { preserveDrawingBuffer: true, antialias: false })!;
      const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || 'shader'); return s; };
      const pr = gl.createProgram()!;
      gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
      const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'aP'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const u: Record<string, WebGLUniformLocation | null> = {};
      for (const n of ['uRes', 'uTime', 'uDepth', 'uMurk', 'uBloom']) u[n] = gl.getUniformLocation(pr, n);
      st.current = { gl, u };
    }
    const { gl, u } = st.current;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(u.uRes, w, h); gl.uniform1f(u.uTime, frame / fps + 3.0);
    gl.uniform1f(u.uDepth, depth); gl.uniform1f(u.uMurk, murk); gl.uniform1f(u.uBloom, bloom);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.finish();
  }, [frame, fps, w, h, depth, murk, bloom]);

  return <canvas ref={ref} width={w} height={h} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
};
