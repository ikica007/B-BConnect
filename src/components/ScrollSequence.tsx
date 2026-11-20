import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextRoll } from './TextRoll';
import logo2 from '../assets/logo_transparent.png';
import logo3 from '../assets/logo_transparent.png';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 151;

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [loadedLowCount, setLoadedLowCount] = useState(0);
  const [isLowLoaded, setIsLowLoaded] = useState(false);
  
  const framesLow = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const framesHigh = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  
  const currentFrameIndex = useRef(0);
  const renderedFrameIndex = useRef(-1);
  const rAFId = useRef<number>(0);
  const isVisible = useRef(true);

  useEffect(() => {
    // 1. Generate URLs
    const lowUrls: string[] = [];
    const highUrls: string[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const padded = i.toString().padStart(4, '0');
      lowUrls.push(`https://res.cloudinary.com/ergt62r3/image/upload/f_auto,q_auto:eco,w_640/seq/frame_${padded}.jpg`);
      highUrls.push(`https://res.cloudinary.com/ergt62r3/image/upload/f_auto,q_auto:best,w_1920,dpr_auto/seq/frame_${padded}.jpg`);
    }

    // 2. Load LOW tier
    let loaded = 0;
    const loadLowPromises = lowUrls.map((url, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          framesLow.current[i] = img;
          loaded++;
          setLoadedLowCount(loaded);
          resolve();
        };
        img.onerror = () => {
          // Resolve even on error to not block
          resolve();
        };
        img.src = url;
      });
    });

    Promise.all(loadLowPromises).then(() => {
      setIsLowLoaded(true);
      
      // 3. Load HIGH tier in background sequentially
      let highIndex = 0;
      const loadNextHigh = () => {
        if (highIndex >= TOTAL_FRAMES) return;
        const img = new Image();
        const i = highIndex;
        img.onload = () => {
          framesHigh.current[i] = img;
          if (renderedFrameIndex.current === i) {
            renderedFrameIndex.current = -1; // force redraw
          }
          highIndex++;
          loadNextHigh();
        };
        img.onerror = () => {
          highIndex++;
          loadNextHigh();
        };
        img.src = highUrls[i];
      };
      loadNextHigh();
    });
  }, []);

  useEffect(() => {
    if (!isLowLoaded) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Drawing function
    const drawFrame = () => {
      const index = currentFrameIndex.current;
      if (index === renderedFrameIndex.current || !isVisible.current) {
        rAFId.current = requestAnimationFrame(drawFrame);
        return;
      }

      const img = framesHigh.current[index] || framesLow.current[index];
      if (img) {
        // resize canvas internal res
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cw = canvas.clientWidth;
        const ch = canvas.clientHeight;
        
        if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
           canvas.width = cw * dpr;
           canvas.height = ch * dpr;
        }

        const iw = img.width;
        const ih = img.height;
        
        // contain-fit calculation with 0.96 breathing room
        const scale = Math.min((cw * dpr) / iw, (ch * dpr) / ih) * 0.96;
        const dw = iw * scale;
        const dh = ih * scale;
        const dx = (cw * dpr - dw) / 2;
        const dy = (ch * dpr - dh) / 2;
        
        // Fill background
        ctx.fillStyle = '#08090D';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Radial gradient behind the map
        const cx = (cw * dpr) / 2;
        const cy = (ch * dpr) / 2;
        const r = Math.max(dw, dh) / 2;
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, 'rgba(0,48,140,0.10)');
        gradient.addColorStop(1, 'rgba(0,48,140,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, dx, dy, dw, dh);
        renderedFrameIndex.current = index;
      }
      rAFId.current = requestAnimationFrame(drawFrame);
    };
    
    rAFId.current = requestAnimationFrame(drawFrame);
    
    const handleResize = () => {
       renderedFrameIndex.current = -1; // Force redraw on resize
    };
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible.current = entry.isIntersecting;
      });
    }, { threshold: 0 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500%',
        pin: true,
        scrub: 0.5,
      }
    });

    const frameObj = { frame: 0 };
    tl.to(frameObj, {
      frame: TOTAL_FRAMES - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: () => {
        currentFrameIndex.current = Math.round(frameObj.frame);
      }
    }, 0);

    // Overlays
    tl.fromTo('.overlay-1', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.05);
    tl.to('.overlay-1', { autoAlpha: 0, y: -50, duration: 0.05 }, 0.25);

    tl.fromTo('.overlay-2', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.05 }, 0.35);
    tl.to('.overlay-2', { autoAlpha: 0, y: -50, duration: 0.05 }, 0.55);

    tl.fromTo('.overlay-3', { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.05 }, 0.65);
    tl.to('.overlay-3', { autoAlpha: 0, scale: 1.1, duration: 0.05 }, 0.95);

    // Refresh ScrollTrigger to recalculate positions for subsequent components
    // since this timeline is created asynchronously after images load
    setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 50);

    return () => {
      cancelAnimationFrame(rAFId.current);
      tl.kill();
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isLowLoaded]);

  return (
    <section ref={containerRef} className="relative w-[100vw] h-[100vh] bg-transparent overflow-hidden m-0 p-0 max-w-none">
      {!isLowLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-navy-900/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="text-electric text-3xl font-bold font-mono tracking-widest">
              {Math.round((loadedLowCount / TOTAL_FRAMES) * 100)}%
            </div>
            <div className="text-coolgray text-xs tracking-[0.2em] uppercase">
              Loading Sequence
            </div>
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full object-cover" 
      />
      
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-20">
        <div className="overlay-1 absolute opacity-0 p-6 sm:p-8 md:p-12 drop-shadow-[0_20px_50px_rgba(0,163,255,0.15)] bg-navy-900/60 backdrop-blur-2xl border-l-[4px] border-l-electric/80 border-y border-y-white/10 border-r border-r-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-3xl w-[90%] md:max-w-3xl md:w-auto left-[5%] md:left-[10%] top-[15%] md:top-[20%] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 pointer-events-auto group hover:bg-navy-900/80 hover:border-l-electric transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric/10 to-transparent opacity-50 pointer-events-none" />
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border border-white/20 group-hover:border-electric/50 shadow-[0_0_20px_rgba(0,163,255,0)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.3)] transition-all duration-500 relative z-10 bg-navy-950 flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img src={logo2} alt="Glasfaser" className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-700" />
          </div>
          <div className="relative z-10 flex flex-col items-center sm:items-start">
            <h2 className="text-[6vw] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 sm:mb-3 tracking-tighter flex flex-col drop-shadow-md">
              <TextRoll hoverClassName="text-white">HOCHGESCHWINDIGKEITS-</TextRoll>
              <TextRoll hoverClassName="text-white">GLASFASER</TextRoll>
            </h2>
            <div className="text-xs sm:text-sm md:text-xl text-electric font-medium tracking-wide flex items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <span className="w-6 sm:w-10 h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,163,255,0.8)]" />
              <TextRoll hoverClassName="text-white">Die Zukunft der Konnektivität</TextRoll>
            </div>
          </div>
        </div>
        
        <div className="overlay-2 absolute opacity-0 p-6 sm:p-8 md:p-12 drop-shadow-[0_20px_50px_rgba(0,163,255,0.15)] bg-navy-900/60 backdrop-blur-2xl border-r-[4px] border-r-electric/80 border-y border-y-white/10 border-l border-l-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-3xl w-[90%] md:max-w-3xl md:w-auto right-[5%] md:right-[10%] top-[45%] md:top-[45%] flex flex-col-reverse sm:flex-row items-center sm:items-start text-center sm:text-right gap-6 sm:gap-8 pointer-events-auto group hover:bg-navy-900/80 hover:border-r-electric transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-electric/10 to-transparent opacity-50 pointer-events-none" />
          <div className="text-center sm:text-right relative z-10 flex flex-col items-center sm:items-end">
            <h2 className="text-[6vw] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 sm:mb-3 tracking-tighter flex flex-col items-center sm:items-end drop-shadow-md">
              <TextRoll hoverClassName="text-white">MODERNE</TextRoll>
              <TextRoll hoverClassName="text-white">TELEKOMMUNIKATION</TextRoll>
            </h2>
            <div className="text-xs sm:text-sm md:text-xl text-electric font-medium tracking-wide flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
              <TextRoll hoverClassName="text-white">Maßgeschneiderte Lösungen</TextRoll>
              <span className="w-6 sm:w-10 h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,163,255,0.8)] hidden sm:block" />
            </div>
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border border-white/20 group-hover:border-electric/50 shadow-[0_0_20px_rgba(0,163,255,0)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.3)] transition-all duration-500 relative z-10 bg-navy-950 flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img src={logo3} alt="Telekommunikation" className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-700" />
          </div>
        </div>
        
        <div className="overlay-3 absolute text-center opacity-0 w-full px-4 sm:px-6 drop-shadow-[0_30px_60px_rgba(0,163,255,0.2)] pointer-events-auto">
          <div className="inline-block bg-navy-900/60 backdrop-blur-2xl border border-white/10 p-6 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col items-center group hover:border-electric/30 hover:bg-navy-900/80 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4 sm:mb-8 uppercase tracking-tighter leading-[1.1] flex flex-col items-center drop-shadow-sm">
              <TextRoll center hoverClassName="text-white">Ganz Deutschland</TextRoll>
              <TextRoll center hoverClassName="text-white">Verbunden</TextRoll>
            </h2>
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-transparent via-electric to-transparent mx-auto mb-4 sm:mb-8 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-32 sm:group-hover:w-48 transition-all duration-500" />
            <div className="text-sm sm:text-xl md:text-3xl text-coolgray font-medium tracking-[0.2em] uppercase">
              <TextRoll center hoverClassName="text-electric">Wir verbinden, was zählt</TextRoll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
