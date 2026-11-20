import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import React, { MouseEvent, useState } from 'react';
import logo from '../assets/logo_transparent.png';

export function InteractiveLogo() {
  const [imgError, setImgError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring for smooth resetting and interpolation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [25, -25]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-25, 25]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="flex items-center justify-center relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] cursor-grab active:cursor-grabbing shrink-0" 
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {!imgError ? (
        <motion.img 
          src={logo} 
          alt="B&B Connect Logo" 
          className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,163,255,0.7)] pointer-events-none" 
          style={{ 
            rotateX, 
            rotateY
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <motion.div
          className="w-full h-full rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 border border-electric/40 flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,163,255,0.25)] relative overflow-hidden"
          style={{ rotateX, rotateY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.2)_0%,transparent_70%)]" />
          <svg className="w-2/3 h-2/3 text-electric drop-shadow-[0_0_20px_rgba(0,163,255,0.8)]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" strokeWidth="3" className="animate-pulse" />
            <polygon points="50,25 72,38 72,62 50,75 28,62 28,38" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="10" fill="#00A3FF" />
            <path d="M50 10 L50 40 M85 30 L60 45 M85 70 L60 55 M50 90 L50 60 M15 70 L40 55 M15 30 L40 45" strokeWidth="1.5" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}
