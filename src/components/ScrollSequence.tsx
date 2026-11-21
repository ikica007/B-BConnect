import { motion } from 'framer-motion';
import { TextRoll } from './TextRoll';
import logo2 from '../assets/logo_transparent.png';
import logo3 from '../assets/logo_transparent.png';
import { useLanguage } from '../context/LanguageContext';

export function ScrollSequence() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-transparent overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-16 md:gap-24 relative z-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="self-start p-6 sm:p-8 md:p-12 drop-shadow-[0_20px_50px_rgba(0,163,255,0.15)] bg-navy-900/60 backdrop-blur-2xl border-l-[4px] border-l-electric/80 border-y border-y-white/10 border-r border-r-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-3xl w-full md:max-w-3xl md:w-auto flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 group hover:bg-navy-900/80 hover:border-l-electric transition-all duration-500 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric/10 to-transparent opacity-50 pointer-events-none" />
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border border-white/20 group-hover:border-electric/50 shadow-[0_0_20px_rgba(0,163,255,0)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.3)] transition-all duration-500 relative z-10 bg-navy-950 flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={logo2}
              alt="Glasfaser"
              className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-700"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center sm:items-start">
            <h2 className="text-[6vw] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 sm:mb-3 tracking-tighter flex flex-col drop-shadow-md">
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card1Title1}</TextRoll>
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card1Title2}</TextRoll>
            </h2>
            <div className="text-xs sm:text-sm md:text-xl text-electric font-medium tracking-wide flex items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <span className="w-6 sm:w-10 h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,163,255,0.8)]" />
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card1Sub}</TextRoll>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="self-end p-6 sm:p-8 md:p-12 drop-shadow-[0_20px_50px_rgba(0,163,255,0.15)] bg-navy-900/60 backdrop-blur-2xl border-r-[4px] border-r-electric/80 border-y border-y-white/10 border-l border-l-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-3xl w-full md:max-w-3xl md:w-auto flex flex-col-reverse sm:flex-row items-center sm:items-start text-center sm:text-right gap-6 sm:gap-8 group hover:bg-navy-900/80 hover:border-r-electric transition-all duration-500 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-electric/10 to-transparent opacity-50 pointer-events-none" />
          <div className="text-center sm:text-right relative z-10 flex flex-col items-center sm:items-end">
            <h2 className="text-[6vw] sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 sm:mb-3 tracking-tighter flex flex-col items-center sm:items-end drop-shadow-md">
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card2Title1}</TextRoll>
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card2Title2}</TextRoll>
            </h2>
            <div className="text-xs sm:text-sm md:text-xl text-electric font-medium tracking-wide flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
              <TextRoll hoverClassName="text-white">{t.sequenceCards.card2Sub}</TextRoll>
              <span className="w-6 sm:w-10 h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,163,255,0.8)] hidden sm:block" />
            </div>
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border border-white/20 group-hover:border-electric/50 shadow-[0_0_20px_rgba(0,163,255,0)] group-hover:shadow-[0_0_40px_rgba(0,163,255,0.3)] transition-all duration-500 relative z-10 bg-navy-950 flex items-center justify-center p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={logo3}
              alt="Telekommunikation"
              className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center w-full drop-shadow-[0_30px_60px_rgba(0,163,255,0.2)] mt-4"
        >
          <div className="inline-flex bg-navy-900/60 backdrop-blur-2xl border border-white/10 p-6 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex-col items-center group hover:border-electric/30 hover:bg-navy-900/80 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4 sm:mb-8 uppercase tracking-tighter leading-[1.1] flex flex-col items-center drop-shadow-sm">
              <TextRoll center hoverClassName="text-white">{t.sequenceCards.card3Title1}</TextRoll>
              <TextRoll center hoverClassName="text-white">{t.sequenceCards.card3Title2}</TextRoll>
            </h2>
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-transparent via-electric to-transparent mx-auto mb-4 sm:mb-8 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-32 sm:group-hover:w-48 transition-all duration-500" />
            <div className="text-sm sm:text-xl md:text-3xl text-coolgray font-medium tracking-[0.2em] uppercase">
              <TextRoll center hoverClassName="text-electric">{t.sequenceCards.card3Sub}</TextRoll>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

