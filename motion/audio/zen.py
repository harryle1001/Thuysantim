"""Nhạc zen tự tạo cho Thủy Sản Tím (không dùng mẫu âm thanh có bản quyền).

  python3 zen.py   → logo-zen.wav (khớp logo reveal 6.2 s), bg-zen.wav (10 s lặp liền mạch)

Âm sắc: chuông xoay (singing bowl), giọt nước, chuông gió ngũ cung, nền drone quãng 5 thuần,
tiếng mưa – gió – nước. Mốc thời gian khớp timeline φ của stage.html.
"""
import numpy as np, wave, os

SR = 48000
PHI = 1.618034
rng = np.random.default_rng(1618)
OUT = os.path.dirname(os.path.abspath(__file__))


def t_axis(dur):
    return np.arange(int(dur * SR)) / SR


def place(buf, sig, t0, pan=0.0):
    """Đặt tín hiệu mono vào buffer stereo tại t0 (giây), pan -1..1."""
    i = int(t0 * SR)
    n = min(len(sig), buf.shape[1] - i)
    if n <= 0:
        return
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    buf[0, i:i + n] += sig[:n] * l * 1.414
    buf[1, i:i + n] += sig[:n] * r * 1.414


def bowl(f0, dur=7.0, amp=1.0):
    t = t_axis(dur)
    ratios, amps, decays = [1, 2.76, 5.40, 8.93], [1, .45, .2, .08], [6.0, 3.8, 2.2, 1.2]
    s = np.zeros_like(t)
    for r, a, d in zip(ratios, amps, decays):
        f = f0 * r
        beat = 0.6 + r * 0.35                           # độ "wow" của chuông
        s += a * np.exp(-t / d) * (np.sin(2 * np.pi * f * t) + np.sin(2 * np.pi * (f + beat) * t)) * .5
    s *= np.minimum(1, t / .004)                         # tiếng gõ mềm
    hit = rng.standard_normal(int(.03 * SR)) * np.exp(-np.arange(int(.03 * SR)) / (.006 * SR)) * .08
    s[:len(hit)] += np.convolve(hit, np.ones(12) / 12, 'same')
    return s * amp


def chime(f, dur=2.4, amp=.25):
    t = t_axis(dur)
    s = np.sin(2 * np.pi * f * t) * np.exp(-t / .9) + .3 * np.sin(2 * np.pi * f * 2.01 * t) * np.exp(-t / .4)
    return s * np.minimum(1, t / .002) * amp


def drop(amp=.5, f_a=700, f_b=1700):
    """Giọt nước: sin quét tần lên nhanh + đuôi gợn."""
    dur = .35
    t = t_axis(dur)
    f = f_a + (f_b - f_a) * (1 - np.exp(-t / .018))
    ph = 2 * np.pi * np.cumsum(f) / SR
    s = np.sin(ph) * np.exp(-t / .045)
    s += .25 * np.sin(2 * np.pi * (f_a * .55) * t) * np.exp(-t / .12)
    return s * np.minimum(1, t / .001) * amp


def pad(dur, freqs, amp=.08, lfo=.1):
    t = t_axis(dur)
    s = np.zeros_like(t)
    for i, f in enumerate(freqs):
        s += np.sin(2 * np.pi * f * t + i) * (.6 + .4 * np.sin(2 * np.pi * lfo * (i + 1) * t + i)) / (1 + i * .4)
    return s * amp


def shaped_noise(n, lo, hi, tilt=-0.5):
    """Nhiễu tuần hoàn (sinh trong miền tần số) → lặp liền mạch."""
    spec = np.fft.rfft(rng.standard_normal(n))
    fr = np.fft.rfftfreq(n, 1 / SR)
    g = np.where((fr > lo) & (fr < hi), 1.0, 0.0) * np.power(np.maximum(fr, 1), tilt)
    g = np.convolve(g, np.ones(200) / 200, 'same')       # mép lọc mềm
    s = np.fft.irfft(spec * g, n)
    return s / np.max(np.abs(s))


def reverb(x, seconds=2.6, mix=.32):
    n = int(seconds * SR)
    ir = rng.standard_normal((2, n)) * np.exp(-np.arange(n) / (seconds / 6.9 * SR))
    ir[:, :int(.012 * SR)] = 0
    ir /= np.sqrt(np.sum(ir ** 2, axis=1, keepdims=True))
    L = x.shape[1] + n
    N = 1 << (L - 1).bit_length()
    wet = np.stack([np.fft.irfft(np.fft.rfft(x[c], N) * np.fft.rfft(ir[c], N), N)[:L] for c in range(2)])
    out = np.zeros((2, L))
    out[:, :x.shape[1]] = x * (1 - mix)
    out += wet * mix * 3
    return out


def save(path, x, peak=.89):
    x = x / np.max(np.abs(x)) * peak
    pcm = (np.clip(x.T, -1, 1) * 32767).astype('<i2')
    with wave.open(path, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
    print('wrote', path)


# ---------------- logo reveal (6.2 s) ----------------
def logo():
    D = 6.2
    b = np.zeros((2, int(D * SR)))
    p = pad(D, [110, 165, 220, 330], amp=.05)
    p *= np.minimum(1, t_axis(D) / 1.6)                  # nền vào từ từ
    place(b, p, 0, -.2); place(b, pad(D, [110.4, 220.6, 277.2], amp=.03) * np.minimum(1, t_axis(D) / 2), 0, .3)
    place(b, drop(.55), .618)                            # giọt chạm nước
    place(b, drop(.12, 900, 2100), .618 + .236, .4)      # giọt bắn nhỏ
    place(b, bowl(220, 6, .55), 1.618, -.1)              # vòng logo khép lại
    for tt, f, pn in [(1.40, 1320, 0), (1.76, 990, -.5), (1.80, 1485, .5), (2.12, 1760, -.3), (2.16, 1100, .3)]:
        place(b, chime(f, amp=.16), tt, pn)              # từng nét chữ T-I-M
    place(b, bowl(330, 4, .38), 3.618, .15)              # chữ THỦY SẢN TÍM
    place(b, chime(2640, amp=.08), 5.0, .4)              # ánh kim trên TÍM
    out = reverb(b)[:, :b.shape[1]]
    fade = int(.45 * SR)
    out[:, -fade:] *= np.linspace(1, 0, fade) ** 2
    out[:, :int(.02 * SR)] *= np.linspace(0, 1, int(.02 * SR))
    save(os.path.join(OUT, 'logo-zen.wav'), out)


# ---------------- background (10 s, lặp liền mạch) ----------------
def background():
    D = 10.0
    n = int(D * SR)
    t = t_axis(D)
    one = np.zeros((2, n))
    rain = np.stack([shaped_noise(n, 500, 9000, -.35), shaped_noise(n, 500, 9000, -.35)]) * .11
    one += rain
    wind_env = .55 + .45 * np.sin(2 * np.pi * t / D - 1.2) * np.sin(2 * np.pi * 2 * t / D)
    one += np.stack([shaped_noise(n, 120, 700, -.8), shaped_noise(n, 120, 700, -.8)]) * wind_env * .09
    # các tần số là bội của 0.1 Hz → chu kỳ khớp đúng 10 s
    place(one, pad(D, [110.0, 165.0, 220.0, 330.0], amp=.045, lfo=.1), 0, -.2)
    place(one, pad(D, [146.8, 220.0, 293.6], amp=.03, lfo=.2), 0, .25)
    events = []
    for _ in range(26):                                  # mưa rơi xuống mặt ao
        events.append((rng.uniform(0, D), drop(rng.uniform(.04, .12), rng.uniform(500, 900), rng.uniform(1300, 2400)), rng.uniform(-.8, .8)))
    events.append((.5, bowl(196, 7, .32), -.1))           # chuông xoay mỗi vòng lặp
    events.append((.5 + D * .618, chime(1174.7, amp=.06), .4))
    # dựng 3 vòng rồi lấy vòng giữa → đuôi vang/âm nối liền mạch
    big = np.tile(one, 3)
    for k in range(3):
        for tt, sig, pn in events:
            place(big, sig, tt + k * D, pn)
    wet = reverb(big, 2.6, .28)
    loop = wet[:, n:2 * n]
    save(os.path.join(OUT, 'bg-zen.wav'), loop, peak=.8)


if __name__ == '__main__':
    logo()
    background()
