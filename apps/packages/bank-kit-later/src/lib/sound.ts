/**
 * Interface sound design — short Web Audio cues for bank-kit feedback.
 * Respects reduced motion and an optional mute preference.
 */

export type BankSoundKind = "tap" | "success" | "error" | "open" | "close";

const MUTE_KEY = "solui-bank-kit-mute-sound";

let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AC) return null;
  if (!sharedCtx) sharedCtx = new AC();
  return sharedCtx;
}


export function isBankSoundMuted(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }
  try {
    return window.localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setBankSoundMuted(muted: boolean) {
  try {
    window.localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {
    /* ignore */
  }
}

const presets: Record<
  BankSoundKind,
  {
    freq: number;
    freqEnd: number;
    duration: number;
    type: OscillatorType;
    gain: number;
  }
> = {
  tap: {
    freq: 420,
    freqEnd: 380,
    duration: 0.04,
    type: "triangle",
    gain: 0.03,
  },
  open: { freq: 320, freqEnd: 520, duration: 0.08, type: "sine", gain: 0.035 },
  close: { freq: 480, freqEnd: 280, duration: 0.07, type: "sine", gain: 0.03 },
  success: {
    freq: 520,
    freqEnd: 780,
    duration: 0.12,
    type: "triangle",
    gain: 0.04,
  },
  error: {
    freq: 220,
    freqEnd: 140,
    duration: 0.14,
    type: "sawtooth",
    gain: 0.028,
  },
};

/** Play a short UI sound. No-ops when muted or unavailable. */
export function playBankSound(kind: BankSoundKind) {
  if (isBankSoundMuted()) return;
  const ctx = getCtx();
  if (!ctx) return;

  void ctx.resume().then(() => {
    const p = presets[kind];
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = p.type;
    osc.frequency.setValueAtTime(p.freq, now);
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(p.freqEnd, 40),
      now + p.duration,
    );
    gain.gain.setValueAtTime(p.gain, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + p.duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + p.duration + 0.02);
  });
}
