"""Nhạc nền sang trọng cho background hoàng hôn tối giản (tự tạo bằng code, không dùng mẫu có bản quyền).

  python3 sang-trong.py  → sang-trong.wav (20 s, lặp liền mạch, 48 kHz stereo)

Ambient piano + pad ấm cung Rê trưởng, 4 hợp âm mỗi hợp âm 5 s: Dmaj9 → Bm11 → Gmaj9 → A6sus.
Giai điệu piano thưa, nốt rơi theo nhịp φ; reverb dài; đuôi vang cuộn về đầu để lặp không vấp.
"""
import numpy as np, wave, os

SR, DUR, PHI = 48000, 20.0, 1.618034
OUT = os.path.dirname(os.path.abspath(__file__))
rng = np.random.default_rng(1618)
TAIL = 7.0
N = int((DUR + TAIL) * SR)
buf = np.zeros((2, N))


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def place(sig, t0, pan=0.0, gain=1.0):
    i = int(t0 * SR) % int(DUR * SR)
    n = min(len(sig), N - i)
    l, r = np.cos((pan + 1) * np.pi / 4) * 1.414, np.sin((pan + 1) * np.pi / 4) * 1.414
    buf[0, i:i + n] += sig[:n] * l * gain
    buf[1, i:i + n] += sig[:n] * r * gain


def piano(m, dur=6.0, vel=1.0):
    t = np.arange(int(dur * SR)) / SR
    f = hz(m)
    s = np.zeros_like(t)
    for k, (a, d) in enumerate([(1, 2.6), (.42, 1.6), (.2, 1.0), (.1, .7), (.05, .45)], start=1):
        inh = 1 + .0004 * k * k                      # độ lệch hoà âm nhẹ như dây đàn
        s += a * np.exp(-t / d) * np.sin(2 * np.pi * f * k * inh * t)
    s *= np.minimum(1, t / .006) * vel
    return s * .22


def pad(notes, dur):
    t = np.arange(int(dur * SR)) / SR
    env = np.minimum(1, t / 1.8) * np.minimum(1, (dur - t) / 2.2).clip(0)
    s = np.zeros_like(t)
    for m in notes:
        f = hz(m)
        for det in (-.12, .12):                     # chorus nhẹ
            ff = f * 2 ** (det / 12)
            s += np.sin(2 * np.pi * ff * t) + .28 * np.sin(2 * np.pi * 2 * ff * t) + .08 * np.sin(2 * np.pi * 3 * ff * t)
    lfo = 1 + .08 * np.sin(2 * np.pi * t / 5)
    return s * env * lfo / (len(notes) * 2) * .5


def sub(m, dur):
    t = np.arange(int(dur * SR)) / SR
    env = np.minimum(1, t / 1.2) * np.minimum(1, (dur - t) / 1.5).clip(0)
    return np.sin(2 * np.pi * hz(m) * t) * env * .16


def bell(m, dur=5.0):
    t = np.arange(int(dur * SR)) / SR
    f = hz(m)
    s = np.exp(-t / 2.2) * (np.sin(2 * np.pi * f * t) + .3 * np.sin(2 * np.pi * f * 2.76 * t) * np.exp(-t / .8))
    return s * np.minimum(1, t / .003) * .05


# D=62 ... hợp âm (MIDI) và nốt bass
CHORDS = [
    ([50, 57, 62, 66, 69, 73, 76], 38),   # Dmaj9
    ([47, 54, 62, 66, 69, 76], 35),       # Bm11
    ([43, 50, 59, 62, 66, 69], 31),       # Gmaj9
    ([45, 52, 62, 64, 66, 69], 33),       # A6sus
]
MELODY = [  # (giây trong hợp âm, nốt, lực)
    [(0.0, 78, .9), (1.618, 81, .7), (3.09, 76, .6)],
    [(0.0, 78, .85), (1.618, 74, .65), (3.09, 73, .55)],
    [(0.0, 74, .85), (1.618, 78, .65), (3.09, 81, .6)],
    [(0.0, 76, .85), (1.618, 73, .6), (3.618, 69, .5)],
]
for i, (notes, bass) in enumerate(CHORDS):
    t0 = i * 5.0
    place(pad(notes, 7.0), t0 - .6, pan=0)
    place(sub(bass, 6.0), t0, pan=0)
    for j, m in enumerate(notes[1:4]):                         # rải hợp âm piano nhẹ ở đầu ô nhịp
        place(piano(m, 6, .45), t0 + .08 * j, pan=-.3 + .3 * j)
    for (dt, m, v) in MELODY[i]:
        place(piano(m, 6, v), t0 + dt + .382, pan=.25 * np.sin(i + dt))
place(bell(93), 9.6, pan=.5); place(bell(90), 19.4, pan=-.5)

# reverb: đáp ứng xung nhiễu tắt dần (2,8 s), stereo, trộn 38,2 %
ir_n = int(2.8 * SR)
tt = np.arange(ir_n) / SR
wet = np.zeros_like(buf)
for c in range(2):
    ir = rng.standard_normal(ir_n) * np.exp(-tt / .7)
    ir[: int(.02 * SR)] *= np.linspace(0, 1, int(.02 * SR))
    L = 1 << int(np.ceil(np.log2(N + ir_n)))
    wet[c] = np.fft.irfft(np.fft.rfft(buf[c], L) * np.fft.rfft(ir, L), L)[:N]
wet /= np.max(np.abs(wet)) + 1e-9
dry = buf / (np.max(np.abs(buf)) + 1e-9)
mix = dry * .618 + wet * .382 * 1.2

# cuộn đuôi về đầu → lặp liền mạch
M = int(DUR * SR)
loop = mix[:, :M].copy()
loop[:, : N - M] += mix[:, M:]
loop /= np.max(np.abs(loop)) * 1.12
pcm = (loop.T * 32767).astype('<i2')
with wave.open(os.path.join(OUT, 'sang-trong.wav'), 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('sang-trong.wav', DUR, 's')
