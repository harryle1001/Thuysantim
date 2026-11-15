import React from 'react';
import { AbsoluteFill, Audio, Easing, continueRender, delayRender, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/800.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import { Ocean } from './Ocean';
import { Icon } from './Icons';
import captions from './captions.json';

// Nạp đủ font (kể cả subset tiếng Việt) trước khi chụp frame, tránh dấu hỏi/ngã bị thay bằng font dự phòng
const SAMPLE = 'THỦY SẢN TÍM Ủ Ả ỗ ụ ấ ề ữ ợ ộ đ ơ ư';
const fontHandle = delayRender('fonts');
Promise.all(
  ['400', '500', '600', '800'].map((w) => document.fonts.load(`${w} 40px "Be Vietnam Pro"`, SAMPLE))
    .concat(['500', '600', 'italic 600'].map((w) => document.fonts.load(`${w} 40px "Cormorant Garamond"`, SAMPLE))),
).then(() => continueRender(fontHandle), () => continueRender(fontHandle));

const PHI = 1.618033988749895;
const SANS = "'Be Vietnam Pro', sans-serif";
const SERIF = "'Cormorant Garamond', serif";
const GOLD = 'linear-gradient(135deg,#f6e7bd 0%,#d8b46c 50%,#a47a36 100%)';
const CHAMP = '#f0d79a';
const INK = '#eaf2f8';
const MUTED = 'rgba(214,230,242,.72)';
const EASE = Easing.bezier(0.22, 1, 0.36, 1);

// Mốc cảnh (frame @30fps)
const S = { logo: [0, 180], problem: [180, 300], solution: [480, 300], products: [780, 480], promise: [1260, 300], end: [1560, 240] } as const;

const k = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE });
const usePortrait = () => { const { width, height } = useVideoConfig(); return height > width; };

// Hiện/ẩn mềm cho cả cảnh
const Scene: React.FC<{ dur: number; children: React.ReactNode; out?: boolean }> = ({ dur, children, out = true }) => {
  const f = useCurrentFrame();
  const o = Math.min(k(f, 0, 18), out ? 1 - k(f, dur - 16, dur) : 1);
  return <AbsoluteFill style={{ opacity: o, filter: `blur(${(1 - o) * 6}px)` }}>{children}</AbsoluteFill>;
};

// Phần tử nổi lên như bong bóng
const Rise: React.FC<{ at: number; children: React.ReactNode; style?: React.CSSProperties; dist?: number }> = ({ at, children, style, dist = 40 }) => {
  const f = useCurrentFrame();
  const p = k(f, at, at + 26);
  return <div style={{ opacity: p, transform: `translateY(${(1 - p) * dist}px)`, filter: `blur(${(1 - p) * 8}px)`, ...style }}>{children}</div>;
};

const Eyebrow: React.FC<{ children: React.ReactNode; center?: boolean }> = ({ children, center }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: center ? 'center' : 'flex-start', fontFamily: SANS, fontWeight: 600, fontSize: 22, letterSpacing: '0.32em', color: CHAMP, textTransform: 'uppercase' }}>
    <span style={{ width: 54, height: 1, background: GOLD }} />{children}{center && <span style={{ width: 54, height: 1, background: GOLD }} />}
  </div>
);

const Title: React.FC<{ children: React.ReactNode; size?: number; center?: boolean }> = ({ children, size = 84, center }) => (
  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: size, lineHeight: 1.06, color: INK, textAlign: center ? 'center' : 'left', textShadow: '0 4px 30px rgba(0,10,25,.5)' }}>{children}</div>
);
const Em: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ fontStyle: 'italic', background: GOLD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{children}</span>
);

const glass: React.CSSProperties = {
  background: 'linear-gradient(160deg,rgba(15,95,158,.20),rgba(4,22,42,.62))',
  border: '1px solid rgba(216,180,108,.28)', borderRadius: 22, boxShadow: '0 24px 60px rgba(0,8,20,.35), inset 0 1px 0 rgba(246,231,189,.12)',
};

const Wordmark: React.FC<{ size: number }> = ({ size }) => (
  <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: size, letterSpacing: '0.045em', color: '#fff', whiteSpace: 'nowrap', lineHeight: 1 }}>
    THỦY SẢN <span style={{ color: CHAMP }}>TÍM</span>
  </div>
);

// Khiên logo + vệt sáng vàng quét qua
const Shield: React.FC<{ size: number; sweepAt: number }> = ({ size, sweepAt }) => {
  const f = useCurrentFrame();
  const sw = interpolate(f, [sweepAt, sweepAt + 40], [-60, 160], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'relative', width: size, height: size, filter: 'drop-shadow(0 0 40px rgba(216,180,108,.35)) drop-shadow(0 20px 40px rgba(0,0,0,.45))' }}>
      <Img src={staticFile('thuysantim-logo.svg')} style={{ width: size, height: size }} />
      <div style={{ position: 'absolute', inset: 0, WebkitMaskImage: `url(${staticFile('thuysantim-logo.svg')})`, WebkitMaskSize: '100% 100%',
        background: `linear-gradient(115deg,transparent ${sw - 18}%,rgba(255,250,230,.85) ${sw}%,transparent ${sw + 18}%)`, mixBlendMode: 'screen' }} />
    </div>
  );
};

/* ---------------- 1. Logo ---------------- */
const LogoScene: React.FC = () => {
  const f = useCurrentFrame(); const P = usePortrait();
  const s = k(f, 8, 70); const t = k(f, 40, 90); const tg = k(f, 70, 120);
  const shield = <div style={{ opacity: s, transform: `scale(${0.82 + 0.18 * s})`, filter: `blur(${(1 - s) * 14}px)` }}><Shield size={P ? 340 : 300} sweepAt={78} /></div>;
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: P ? 'center' : 'flex-start', gap: 26 }}>
      <div style={{ opacity: t, transform: `translateX(${P ? 0 : (1 - t) * -30}px) translateY(${P ? (1 - t) * 24 : 0}px)`, clipPath: `inset(-60% ${(1 - t) * 100}% -40% 0)` }}>
        <Wordmark size={P ? 104 : 120} />
      </div>
      <div style={{ opacity: tg, fontFamily: SANS, fontWeight: 500, fontSize: P ? 30 : 34, color: 'rgba(214,230,242,.85)', letterSpacing: `${0.18 + tg * 0.1}em`, whiteSpace: 'nowrap' }}>
        TINH HOA SINH HỌC · VỮNG VÀNG MÙA VỤ
      </div>
    </div>
  );
  return (
    <Scene dur={S.logo[1]}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', flexDirection: P ? 'column' : 'row', gap: P ? 60 : 72, paddingBottom: P ? 260 : 60 }}>
        {shield}{text}
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- 2. Vấn đề ---------------- */
const PROBLEMS = [
  { i: 'gas', t: 'Khí độc tăng cao', d: 'NH₃, NO₂, H₂S khiến tôm nổi đầu, bỏ ăn' },
  { i: 'mud', t: 'Đáy ao dơ, nước mất màu', d: 'Bùn hữu cơ tích tụ, tảo tàn, pH dao động' },
  { i: 'liver', t: 'Gan tụy yếu, phân trắng', d: 'Tôm chậm lớn, hao hụt, FCR tăng' },
  { i: 'pill', t: 'Lạm dụng kháng sinh', d: 'Tồn dư trong tôm, nguy cơ bị trả hàng' },
];
const ProblemScene: React.FC = () => {
  const P = usePortrait();
  return (
    <Scene dur={S.problem[1]}>
      <AbsoluteFill style={{ padding: P ? '230px 70px 0' : '120px 130px 0', gap: P ? 50 : 64 }}>
        <Rise at={6}><Eyebrow>Nỗi lo mùa vụ</Eyebrow></Rise>
        <Rise at={14}><Title size={P ? 84 : 92}>Mỗi vụ nuôi, bà con<br />lo nhất <Em>điều gì?</Em></Title></Rise>
        <div style={{ display: 'grid', gridTemplateColumns: P ? '1fr' : 'repeat(4,1fr)', gap: P ? 26 : 30, marginTop: P ? 10 : 40 }}>
          {PROBLEMS.map((p, i) => (
            <Rise key={p.t} at={50 + i * 22} dist={70} style={{ height: '100%' }}>
              <div style={{ ...glass, height: '100%', boxSizing: 'border-box', borderColor: 'rgba(233,160,122,.28)', padding: P ? '26px 32px' : '38px 32px', display: 'flex', flexDirection: P ? 'row' : 'column', alignItems: P ? 'center' : 'flex-start', gap: P ? 28 : 22, minHeight: P ? 0 : 300 }}>
                <div style={{ flex: 'none', width: 92, height: 92, borderRadius: 46, display: 'grid', placeItems: 'center', background: 'rgba(233,160,122,.10)', border: '1px solid rgba(233,160,122,.35)' }}>
                  <Icon name={p.i} size={54} tone="warn" />
                </div>
                <div>
                  <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: P ? 36 : 34, color: INK, lineHeight: 1.2 }}>{p.t}</div>
                  <div style={{ fontFamily: SANS, fontSize: P ? 27 : 25, color: MUTED, marginTop: 10, lineHeight: 1.4 }}>{p.d}</div>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- 3. Giải pháp ---------------- */
const STAGES = ['Chuẩn bị ao', 'Thả giống', 'Nuôi tăng trọng', 'Thu hoạch'];
const Cycle: React.FC<{ r: number }> = ({ r }) => {
  const f = useCurrentFrame();
  const prog = k(f, 70, 230);
  const C = 2 * Math.PI * r; const box = r * 2 + 360;
  return (
    <div style={{ position: 'relative', width: box, height: box }}>
      <svg width={box} height={box} style={{ position: 'absolute', inset: 0 }}>
        <defs><linearGradient id="arc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6e7bd" /><stop offset=".5" stopColor="#d8b46c" /><stop offset="1" stopColor="#a47a36" /></linearGradient></defs>
        <circle cx={box / 2} cy={box / 2} r={r} fill="none" stroke="rgba(214,230,242,.14)" strokeWidth={2} />
        <circle cx={box / 2} cy={box / 2} r={r} fill="none" stroke="url(#arc)" strokeWidth={4} strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - prog)} transform={`rotate(-90 ${box / 2} ${box / 2})`} />
        <circle cx={box / 2} cy={box / 2} r={r / PHI} fill="rgba(37,200,180,.06)" stroke="rgba(120,230,215,.25)" strokeWidth={1} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center', opacity: k(f, 40, 70) }}>
          <Icon name="microbe" size={86} />
          <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 600, fontSize: 40, color: CHAMP, marginTop: 6 }}>Chu kỳ nuôi</div>
        </div>
      </div>
      {STAGES.map((s, i) => {
        const a = -Math.PI / 2 + (i * Math.PI) / 2; const on = k(f, 70 + i * 40, 90 + i * 40);
        const x = box / 2 + Math.cos(a) * r, y = box / 2 + Math.sin(a) * r;
        const lx = box / 2 + Math.cos(a) * (r + 64), ly = box / 2 + Math.sin(a) * (r + 64);
        const align = i === 1 ? 'left' : i === 3 ? 'right' : 'center';
        return (
          <React.Fragment key={s}>
            <div style={{ position: 'absolute', left: x - 22, top: y - 22, width: 44, height: 44, borderRadius: 22, background: on > 0.5 ? GOLD : 'rgba(4,22,42,.9)',
              border: '2px solid #d8b46c', boxShadow: `0 0 ${30 * on}px rgba(216,180,108,.8)`, display: 'grid', placeItems: 'center', fontFamily: SANS, fontWeight: 700, fontSize: 18, color: on > 0.5 ? '#04162a' : CHAMP }}>{`0${i + 1}`}</div>
            <div style={{ position: 'absolute', left: lx, top: ly, transform: `translate(${align === 'left' ? '0' : align === 'right' ? '-100%' : '-50%'},-50%)`,
              opacity: 0.35 + 0.65 * on, fontFamily: SANS, fontWeight: 600, fontSize: 30, color: INK, whiteSpace: 'nowrap' }}>{s}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
const SolutionScene: React.FC = () => {
  const P = usePortrait();
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 34, maxWidth: P ? 940 : 760, alignItems: P ? 'center' : 'flex-start' }}>
      <Rise at={6}><Eyebrow center={P}>Giải pháp sinh học</Eyebrow></Rise>
      <Rise at={14}><Title size={P ? 88 : 86} center={P}>Xử lý <Em>tận gốc</Em>,<br />không cần kháng sinh</Title></Rise>
      <Rise at={34}><div style={{ fontFamily: SANS, fontSize: P ? 32 : 32, lineHeight: 1.5, color: MUTED, textAlign: P ? 'center' : 'left' }}>
        Chủng vi sinh <b style={{ color: INK, fontWeight: 600 }}>bản địa</b>, phân lập từ chính ao nuôi Việt Nam — thích nghi nhanh, phân hủy bùn đáy, giảm khí độc, giữ màu nước ổn định.
      </div></Rise>
      <Rise at={52}><div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: P ? 'center' : 'flex-start' }}>
        {['Chuẩn GMP', 'Lab vi sinh & PCR', 'Kiểm nghiệm từng lô'].map((x) => (
          <span key={x} style={{ fontFamily: SANS, fontWeight: 500, fontSize: 23, color: CHAMP, padding: '10px 22px', borderRadius: 40, border: '1px solid rgba(216,180,108,.4)', background: 'rgba(4,22,42,.45)' }}>{x}</span>
        ))}
      </div></Rise>
    </div>
  );
  return (
    <Scene dur={S.solution[1]}>
      <AbsoluteFill style={{ flexDirection: P ? 'column' : 'row', alignItems: 'center', justifyContent: P ? 'flex-start' : 'center', padding: P ? '170px 60px 0' : '0 110px 60px', gap: P ? 0 : 20 }}>
        {text}
        <div style={{ transform: `scale(${P ? 0.88 : 0.9})`, marginTop: P ? -30 : 0 }}><Cycle r={P ? 250 : 240} /></div>
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- 4. Sản phẩm ---------------- */
const CATS = [
  { i: 'microbe', t: 'Men vi sinh', d: 'Phân hủy hữu cơ, ổn định nước và đường ruột', p: 'TÍM PRO-BIO 9' },
  { i: 'drop', t: 'Xử lý nước & đáy', d: 'Hấp thu khí độc, cải thiện đáy, ổn định pH', p: 'TÍM ZEO-CLEAR' },
  { i: 'mineral', t: 'Khoáng & Vitamin', d: 'Hỗ trợ lột xác, cứng vỏ, chống sốc', p: 'TÍM MINERAL PLUS' },
  { i: 'shield', t: 'Bổ gan & Đường ruột', d: 'Giải độc gan tụy, tăng hấp thu, giảm FCR', p: 'TÍM LIVER GUARD' },
  { i: 'leaf', t: 'Thảo dược', d: 'Chiết xuất tự nhiên, không tồn dư kháng sinh', p: 'TÍM HERBA-GUT' },
  { i: 'flask', t: 'Sát trùng & Oxy', d: 'Diệt khuẩn, nấm; cấp cứu thiếu oxy', p: 'TÍM DO-OXY' },
];
const ProductScene: React.FC = () => {
  const f = useCurrentFrame(); const P = usePortrait();
  return (
    <Scene dur={S.products[1]}>
      <AbsoluteFill style={{ padding: P ? '150px 56px 0' : '96px 130px 0', gap: P ? 34 : 46, alignItems: 'center' }}>
        <Rise at={6}><Eyebrow center>6 nhóm sản phẩm chủ lực</Eyebrow></Rise>
        <Rise at={14}><Title size={P ? 78 : 84} center>Giải pháp toàn diện<br />cho <Em>mọi giai đoạn</Em></Title></Rise>
        <div style={{ display: 'grid', gridTemplateColumns: P ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: P ? 22 : 28, width: '100%', marginTop: P ? 6 : 10 }}>
          {CATS.map((c, i) => {
            const hi = Math.max(0, 1 - Math.abs((f - 150 - i * 45) / 30)); // ánh sáng lướt qua từng nhóm
            return (
              <Rise key={c.t} at={40 + i * 12} dist={60} style={{ height: '100%' }}>
                <div style={{ ...glass, height: '100%', boxSizing: 'border-box', padding: P ? '26px 26px' : '30px 34px', display: 'flex', flexDirection: P ? 'column' : 'row', gap: P ? 14 : 26, alignItems: P ? 'flex-start' : 'center', minHeight: P ? 0 : 190,
                  borderColor: `rgba(216,180,108,${0.28 + hi * 0.6})`, boxShadow: `0 24px 60px rgba(0,8,20,.35), 0 0 ${50 * hi}px rgba(216,180,108,${0.35 * hi})`, transform: `translateY(${-hi * 6}px)` }}>
                  <div style={{ flex: 'none', width: P ? 72 : 96, height: P ? 72 : 96, borderRadius: P ? 20 : 26, display: 'grid', placeItems: 'center', background: 'rgba(216,180,108,.08)', border: '1px solid rgba(216,180,108,.3)' }}>
                    <Icon name={c.i} size={P ? 44 : 58} />
                  </div>
                  <div>
                    <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: P ? 34 : 33, color: INK }}>{c.t}</div>
                    <div style={{ fontFamily: SANS, fontSize: P ? 25 : 23, color: MUTED, marginTop: 8, lineHeight: 1.4 }}>{c.d}</div>
                    <div style={{ marginTop: 14, fontFamily: SANS, fontWeight: 600, fontSize: P ? 20 : 19, letterSpacing: '0.14em', color: CHAMP }}>{c.p}</div>
                  </div>
                </div>
              </Rise>
            );
          })}
        </div>
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- 5. Cam kết ---------------- */
const PROMISES = [
  { i: 'shield', t: '100% sinh học', d: 'Không kháng sinh, không chất cấm' },
  { i: 'headset', t: 'Kỹ sư tư vấn 1:1', d: 'Phác đồ riêng cho từng ao, miễn phí' },
  { i: 'truck', t: 'Giao nhanh toàn quốc', d: '24–72 giờ đến tận nơi' },
  { i: 'badge', t: 'Có phiếu kiểm nghiệm', d: 'Phiếu COA cho từng lô hàng' },
];
const STATS = [{ n: 15, s: '', l: 'năm kinh nghiệm' }, { n: 650, s: '+', l: 'đại lý toàn quốc' }, { n: 28, s: '', l: 'tỉnh thành' }, { n: 12000, s: '+', l: 'ao nuôi tin dùng' }];
const PromiseScene: React.FC = () => {
  const f = useCurrentFrame(); const P = usePortrait();
  return (
    <Scene dur={S.promise[1]}>
      <AbsoluteFill style={{ padding: P ? '220px 60px 0' : '110px 130px 0', gap: P ? 44 : 54, alignItems: 'center' }}>
        <Rise at={6}><Eyebrow center>Cam kết của Thủy Sản Tím</Eyebrow></Rise>
        <div style={{ display: 'grid', gridTemplateColumns: P ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: P ? 24 : 30, width: '100%' }}>
          {PROMISES.map((p, i) => (
            <Rise key={p.t} at={20 + i * 26} dist={50} style={{ height: '100%' }}>
              <div style={{ ...glass, height: '100%', boxSizing: 'border-box', padding: '40px 26px 36px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, minHeight: P ? 340 : 330 }}>
                <div style={{ width: 120, height: 120, borderRadius: 60, display: 'grid', placeItems: 'center', border: '1px solid rgba(216,180,108,.45)', background: 'radial-gradient(circle,rgba(216,180,108,.16),rgba(216,180,108,0) 70%)' }}>
                  <Icon name={p.i} size={66} />
                </div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: P ? 46 : 46, color: INK, lineHeight: 1.1 }}>{p.t}</div>
                <div style={{ fontFamily: SANS, fontSize: P ? 25 : 24, color: MUTED, lineHeight: 1.4 }}>{p.d}</div>
              </div>
            </Rise>
          ))}
        </div>
        <Rise at={140} style={{ width: '100%' }}>
          <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(216,180,108,.6),transparent)', marginBottom: P ? 34 : 40 }} />
          <div style={{ display: 'grid', gridTemplateColumns: P ? 'repeat(2,1fr)' : 'repeat(4,1fr)', rowGap: 30 }}>
            {STATS.map((s, i) => {
              const v = Math.round(s.n * k(f, 150 + i * 8, 220 + i * 8));
              return (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: P ? 76 : 80, lineHeight: 1, background: GOLD, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                    {v.toLocaleString('vi-VN')}{s.s}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 24, color: MUTED, marginTop: 8, letterSpacing: '0.04em' }}>{s.l}</div>
                </div>
              );
            })}
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- 6. Kết ---------------- */
const EndScene: React.FC = () => {
  const f = useCurrentFrame(); const P = usePortrait();
  const s = k(f, 6, 70); const t = k(f, 40, 95);
  const halo = 0.5 + 0.5 * Math.sin(f / 18);
  return (
    <Scene dur={S.end[1]} out={false}>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 56, paddingBottom: P ? 200 : 40 }}>
        <div style={{ position: 'absolute', width: 900, height: 900, borderRadius: 450, background: `radial-gradient(circle,rgba(216,180,108,${0.10 + 0.05 * halo}),rgba(216,180,108,0) 60%)`, opacity: s, top: '50%', left: '50%', transform: `translate(-50%,-${P ? 58 : 55}%)` }} />
        <div style={{ opacity: s, transform: `scale(${0.86 + 0.14 * s})`, filter: `blur(${(1 - s) * 12}px)` }}><Shield size={P ? 380 : 330} sweepAt={70} /></div>
        <div style={{ opacity: t, transform: `translateY(${(1 - t) * 26}px)`, letterSpacing: `${(1 - t) * 0.2}em` }}><Wordmark size={P ? 104 : 116} /></div>
      </AbsoluteFill>
    </Scene>
  );
};

/* ---------------- Phụ đề ---------------- */
const Subtitles: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig(); const P = usePortrait();
  const t = f / fps; const c = captions.find((x) => t >= x.from && t < x.to);
  if (!c) return null;
  const o = Math.min(k(t, c.from, c.from + 0.25), 1 - k(t, c.to - 0.25, c.to));
  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: P ? 330 : 54, pointerEvents: 'none' }}>
      <div style={{ opacity: o, maxWidth: P ? 920 : 1500, textAlign: 'center', fontFamily: SANS, fontWeight: 500, fontSize: P ? 40 : 38, lineHeight: 1.4, color: '#fff',
        padding: '12px 30px', borderRadius: 14, background: 'rgba(2,12,24,.58)', textShadow: '0 2px 8px rgba(0,0,0,.6)' }}>{c.text}</div>
    </AbsoluteFill>
  );
};

/* ---------------- Ghép ---------------- */
export const Intro: React.FC = () => {
  const f = useCurrentFrame(); const { durationInFrames } = useVideoConfig();
  const ip = (inp: number[], out: number[]) => interpolate(f, inp, out, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.sin) });
  const depth = ip([0, 180, 480, 780, 1260, 1560, 1800], [0.0, 0.16, 0.34, 0.44, 0.6, 0.8, 0.95]);
  const murk = ip([190, 270, 440, 540], [0, 0.85, 0.85, 0]);
  const bloom = ip([480, 720, 1260], [0, 1, 2]);
  const fadeOut = interpolate(f, [durationInFrames - 20, durationInFrames - 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fadeIn = interpolate(f, [0, 14], [1, 0], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: '#04162a', fontVariantNumeric: 'lining-nums' }}>
      <Ocean depth={depth} murk={murk} bloom={bloom} />
      <Sequence from={S.logo[0]} durationInFrames={S.logo[1]}><LogoScene /></Sequence>
      <Sequence from={S.problem[0]} durationInFrames={S.problem[1]}><ProblemScene /></Sequence>
      <Sequence from={S.solution[0]} durationInFrames={S.solution[1]}><SolutionScene /></Sequence>
      <Sequence from={S.products[0]} durationInFrames={S.products[1]}><ProductScene /></Sequence>
      <Sequence from={S.promise[0]} durationInFrames={S.promise[1]}><PromiseScene /></Sequence>
      <Sequence from={S.end[0]} durationInFrames={S.end[1]}><EndScene /></Sequence>
      <Subtitles />
      <AbsoluteFill style={{ background: '#000', opacity: Math.max(fadeOut, fadeIn) }} />
      <Audio src={staticFile('music.wav')} />
    </AbsoluteFill>
  );
};
