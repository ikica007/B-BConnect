import { useEffect, useRef, useState } from 'react';
import logoImg from '../assets/logo_transparent.png';
import { useLanguage } from '../context/LanguageContext';

/**
 * Uvodna animacija (≈3 s): svjetlosni impulsi putuju kroz optička vlakna
 * sa ivica ekrana i spajaju se u B&B CONNECT logo.
 */

const INTRO_MS = 3000;
const FADE_MS = 700;

type Fiber = {
  p0: [number, number];
  c1: [number, number];
  c2: [number, number];
  p3: [number, number];
  start: number; // ms – kad impuls krene
  dur: number; // ms – koliko putuje
  width: number;
  hue: number;
};

function bezier(f: Fiber, t: number): [number, number] {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [
    a * f.p0[0] + b * f.c1[0] + c * f.c2[0] + d * f.p3[0],
    a * f.p0[1] + b * f.c1[1] + c * f.c2[1] + d * f.p3[1],
  ];
}

function makeFibers(w: number, h: number, coreR: number): Fiber[] {
  const cx = w / 2;
  const cy = h / 2;
  const count = w < 640 ? 22 : 34;
  const fibers: Fiber[] = [];
  for (let i = 0; i < count; i++) {
    // ravnomjerno po uglovima, sa malo nasumičnosti
    const ang = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.25;
    const far = Math.hypot(w, h) * 0.62;
    const p0: [number, number] = [cx + Math.cos(ang) * far, cy + Math.sin(ang) * far];
    const endAng = ang + (Math.random() - 0.5) * 0.5;
    const p3: [number, number] = [cx + Math.cos(endAng) * coreR, cy + Math.sin(endAng) * coreR];
    // zakrivljenje – vlakna se lagano uvijaju kao kablovi
    const bend = (Math.random() - 0.5) * far * 0.55;
    const nx = -Math.sin(ang), ny = Math.cos(ang);
    const c1: [number, number] = [
      cx + Math.cos(ang) * far * 0.62 + nx * bend,
      cy + Math.sin(ang) * far * 0.62 + ny * bend,
    ];
    const c2: [number, number] = [
      cx + Math.cos(endAng) * coreR * 2.4 - nx * bend * 0.35,
      cy + Math.sin(endAng) * coreR * 2.4 - ny * bend * 0.35,
    ];
    fibers.push({
      p0, c1, c2, p3,
      start: 120 + Math.random() * 650,
      dur: 650 + Math.random() * 350,
      width: 0.6 + Math.random() * 1.1,
      hue: 192 + Math.random() * 18,
    });
  }
  return fibers;
}

export function IntroFiber() {
  const { language } = useLanguage();
  const [phase, setPhase] = useState<'visible' | 'fading_out' | 'ended'>('visible');
  const [connected, setConnected] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const triggerFadeOut = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setPhase((p) => (p === 'visible' ? 'fading_out' : p));
    window.setTimeout(() => {
      unlockScroll();
      setPhase('ended');
    }, FADE_MS);
  };

  // Tajmer + zaključavanje skrola
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    timerRef.current = window.setTimeout(triggerFadeOut, reduce ? 1500 : INTRO_MS);
    const c = window.setTimeout(() => setConnected(true), 1250);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      window.clearTimeout(c);
      unlockScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Canvas animacija optičkih vlakana
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, fibers: Fiber[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const coreR = Math.min(w * 0.28, 150) * 0.55;
      fibers = makeFibers(w, h, coreR);
    };
    resize();
    window.addEventListener('resize', resize);

    const t0 = performance.now();
    const STEPS = 48;

    const draw = (now: number) => {
      const t = now - t0;
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';

      for (const f of fibers) {
        // 1) Samo vlakno (staklo) – iscrtava se od ivice ka centru
        const reveal = reduce ? 1 : Math.min(1, Math.max(0, (t - f.start * 0.4) / 700));
        if (reveal > 0) {
          ctx.beginPath();
          for (let i = 0; i <= STEPS * reveal; i++) {
            const [x, y] = bezier(f, i / STEPS);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `hsla(${f.hue}, 90%, 60%, 0.16)`;
          ctx.lineWidth = f.width;
          ctx.stroke();
        }
        if (reduce) continue;

        // 2) Svjetlosni impuls sa repom (podaci kroz vlakno)
        const runs = [f.start, f.start + 1150]; // drugi, slabiji talas
        runs.forEach((st, k) => {
          const p = (t - st) / f.dur;
          if (p <= 0 || p >= 1.15) return;
          const head = Math.min(p, 1);
          const tail = Math.max(0, head - 0.28);
          const alpha = (k === 0 ? 1 : 0.55) * (p > 1 ? 1 - (p - 1) / 0.15 : 1);
          const grad = ctx.createLinearGradient(...bezier(f, tail), ...bezier(f, head));
          grad.addColorStop(0, `hsla(${f.hue}, 100%, 60%, 0)`);
          grad.addColorStop(1, `hsla(${f.hue}, 100%, 72%, ${alpha})`);
          ctx.beginPath();
          for (let i = 0; i <= 16; i++) {
            const [x, y] = bezier(f, tail + ((head - tail) * i) / 16);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = grad;
          ctx.lineWidth = f.width + 1.4;
          ctx.shadowColor = `hsla(${f.hue}, 100%, 60%, ${alpha})`;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;
          // vrh impulsa
          const [hx, hy] = bezier(f, head);
          ctx.beginPath();
          ctx.arc(hx, hy, f.width + 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(235, 250, 255, ${alpha})`;
          ctx.fill();
        });
      }

      // 3) Bljesak kad impulsi stignu u jezgro
      const flashT = (t - 1050) / 600;
      if (!reduce && flashT > 0 && flashT < 1) {
        const r = Math.min(w, h) * (0.12 + flashT * 0.35);
        const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, r);
        g.addColorStop(0, `rgba(0, 163, 255, ${0.35 * (1 - flashT)})`);
        g.addColorStop(1, 'rgba(0, 163, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (t < INTRO_MS + FADE_MS) rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (phase === 'ended') return null;

  const isFadingOut = phase === 'fading_out';
  const tagline =
    language === 'bs' ? 'Optički internet · Telekomunikacije' : 'Glasfaser · Telekommunikation';
  const status = connected
    ? language === 'bs' ? 'Povezano' : 'Verbunden'
    : language === 'bs' ? 'Uspostavljanje veze' : 'Verbindung wird hergestellt';

  return (
    <div
      onClick={triggerFadeOut}
      className={`fixed inset-0 z-[99999] h-[100dvh] w-screen overflow-hidden bg-[#060d1a] flex items-center justify-center cursor-pointer transition-opacity ease-in-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-label="B&B Connect"
    >
      <style>{`
        @keyframes bbLogoIn { 0% { opacity: 0; transform: scale(.82); filter: blur(6px) brightness(.6); }
          60% { opacity: 1; filter: blur(0) brightness(1.35); } 100% { opacity: 1; transform: scale(1); filter: blur(0) brightness(1); } }
        @keyframes bbFadeUp { from { opacity: 0; transform: translateY(10px); letter-spacing: .5em; } to { opacity: 1; transform: none; } }
        @keyframes bbGlow { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bbSignal { from { width: 0%; } to { width: 100%; } }
        @keyframes bbPulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .bb-anim { animation: none !important; opacity: 1 !important; } }
      `}</style>

      {/* Ambijentalni sjaj */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,163,255,0.10)_0%,_rgba(6,13,26,0.96)_65%)] pointer-events-none" />

      {/* Optička vlakna */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Logo + natpis */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <div
            className="bb-anim absolute -inset-16 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,163,255,0.28)_0%,_rgba(0,163,255,0.08)_45%,_transparent_70%)]"
            style={{ opacity: 0, animation: 'bbGlow 900ms ease-out 1000ms forwards' }}
          />
          <img
            src={logoImg}
            alt="B&B Connect"
            className="bb-anim relative w-[min(56vw,300px)] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,163,255,0.55)]"
            style={{ opacity: 0, animation: 'bbLogoIn 900ms cubic-bezier(.2,.8,.2,1) 950ms forwards' }}
          />
        </div>

        <div
          className="bb-anim mt-6 sm:mt-8 text-3xl sm:text-5xl font-extrabold tracking-[0.06em] uppercase text-[#F2F6FA]"
          style={{ opacity: 0, animation: 'bbFadeUp 700ms ease-out 1450ms forwards' }}
        >
          <span className="text-[#00A3FF]">B&amp;B</span> Connect
        </div>
        <div
          className="bb-anim mt-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8FA3BF]"
          style={{ opacity: 0, animation: 'bbFadeUp 700ms ease-out 1700ms forwards' }}
        >
          {tagline}
        </div>
      </div>

      {/* Signal linija (kao mjerenje vlakna) */}
      <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-10 w-[min(70vw,320px)] flex flex-col items-center gap-3">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="bb-anim h-full bg-gradient-to-r from-[#0B6FA8] via-[#00A3FF] to-[#B8ECFF] shadow-[0_0_12px_rgba(0,163,255,0.9)]"
            style={{ width: '0%', animation: `bbSignal ${INTRO_MS - 200}ms cubic-bezier(.4,0,.2,1) forwards` }}
          />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8FA3BF] flex items-center gap-2">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${connected ? 'bg-[#00A3FF]' : 'bg-[#8FA3BF]'}`}
            style={{ animation: connected ? undefined : 'bbPulse 700ms ease-in-out infinite' }}
          />
          {status}
        </div>
      </div>

      {/* Preskoči */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          triggerFadeOut();
        }}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors"
      >
        {language === 'bs' ? 'Preskoči' : 'Überspringen'}
      </button>
    </div>
  );
}
