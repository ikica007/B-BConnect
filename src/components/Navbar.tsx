import { Menu, X, ArrowLeft, Globe } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_transparent.png';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700">
        <div className="container mx-auto px-4 xl:px-8 h-20 md:h-24 lg:h-28 flex items-center justify-between gap-2 md:gap-4">
          {/* Logo area */}
          <Link 
            to="/" 
            className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0 relative z-[60]"
          >
            {!imgError ? (
              <img 
                src={logo} 
                alt="B&B Connect" 
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-[0_0_12px_rgba(0,163,255,0.4)]"
                onError={() => setImgError(true)} 
              />
            ) : (
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-navy-800 border border-electric/40 flex items-center justify-center p-2 text-electric">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" strokeWidth="6" />
                  <circle cx="50" cy="50" r="14" fill="#00A3FF" />
                </svg>
              </div>
            )}
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-2xl lg:text-3xl font-extrabold tracking-[0.05em] text-offwhite uppercase leading-none flex gap-1.5 md:gap-2">
                <span className="text-electric"><TextRoll>B&B</TextRoll></span> <TextRoll>CONNECT</TextRoll>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center text-[11px] xl:text-[13px] font-bold tracking-[0.1em] leading-snug flex-1 justify-center px-4">
            <div className="flex items-center gap-6 xl:gap-10 uppercase">
              <Link 
                to="/leistungen" 
                className={`hover:text-electric transition-colors whitespace-nowrap ${location.pathname === '/leistungen' ? 'text-electric border-b-2 border-electric pb-1' : 'text-offwhite'}`}
              >
                <TextRoll>{t.nav.services}</TextRoll>
              </Link>
              <Link 
                to="/zusammenarbeit" 
                className={`hover:text-electric transition-colors whitespace-nowrap ${location.pathname === '/zusammenarbeit' ? 'text-electric border-b-2 border-electric pb-1' : 'text-offwhite'}`}
              >
                <TextRoll>{t.nav.cooperation}</TextRoll>
              </Link>
              <Link 
                to="/ueber-uns" 
                className={`hover:text-electric transition-colors whitespace-nowrap ${location.pathname === '/ueber-uns' ? 'text-electric border-b-2 border-electric pb-1' : 'text-offwhite'}`}
              >
                <TextRoll>{t.nav.about}</TextRoll>
              </Link>
              <Link 
                to="/kontakt" 
                className={`hover:text-electric transition-colors whitespace-nowrap ${location.pathname === '/kontakt' ? 'text-electric border-b-2 border-electric pb-1' : 'text-offwhite'}`}
              >
                <TextRoll>{t.nav.contact}</TextRoll>
              </Link>
            </div>
          </div>

          {/* Right side actions + Language Switcher */}
          <div className="flex items-center gap-3 xl:gap-5 text-[11px] xl:text-[13px] font-bold tracking-[0.1em] shrink-0">
            <div
              role="group"
              aria-label={t.nav.languageLabel}
              className="inline-flex items-center bg-navy-800/90 border border-navy-700 rounded-full p-1 relative z-[60]"
            >
              <Globe size={14} className="text-electric ml-2 mr-1.5 hidden sm:block" />
              <button
                type="button"
                onClick={() => setLanguage('de')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase transition-all cursor-pointer ${
                  language === 'de'
                    ? 'bg-electric text-navy-900 shadow-[0_0_12px_rgba(0,163,255,0.4)]'
                    : 'text-coolgray hover:text-offwhite'
                }`}
                aria-pressed={language === 'de'}
                title="Deutsch"
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage('bs')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase transition-all cursor-pointer ${
                  language === 'bs'
                    ? 'bg-electric text-navy-900 shadow-[0_0_12px_rgba(0,163,255,0.4)]'
                    : 'text-coolgray hover:text-offwhite'
                }`}
                aria-pressed={language === 'bs'}
                title="Bosanski"
              >
                BS
              </button>
            </div>

            <Link 
              to="/kontakt"
              className="hidden sm:inline-flex bg-electric text-navy-900 px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric-dim hover:text-offwhite transition-colors shadow-[0_0_15px_rgba(0,163,255,0.3)] whitespace-nowrap"
            >
              {t.nav.sendInquiry}
            </Link>
            <button 
              className="flex lg:hidden items-center justify-center hover:text-electric transition-colors shrink-0 relative z-[60]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy-900/98 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center lg:hidden"
          >
            {/* Top Back Arrow button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-6 flex items-center gap-2 text-electric font-bold tracking-widest text-xs uppercase bg-navy-800/80 border border-electric/30 px-4 py-2.5 rounded-full hover:bg-electric hover:text-navy-900 transition-all shadow-[0_0_15px_rgba(0,163,255,0.2)]"
            >
              <ArrowLeft size={18} />
              <span>{t.nav.back}</span>
            </button>

            <div className="flex flex-col items-center gap-7 text-lg sm:text-2xl font-bold tracking-widest uppercase text-center px-6 mt-12">
              <Link 
                to="/" 
                className={`hover:text-electric transition-colors ${location.pathname === '/' ? 'text-electric' : 'text-offwhite'}`}
              >
                {t.nav.home}
              </Link>
              <Link 
                to="/leistungen" 
                className={`hover:text-electric transition-colors ${location.pathname === '/leistungen' ? 'text-electric' : 'text-offwhite'}`}
              >
                {t.nav.services}
              </Link>
              <Link 
                to="/zusammenarbeit" 
                className={`hover:text-electric transition-colors ${location.pathname === '/zusammenarbeit' ? 'text-electric' : 'text-offwhite'}`}
              >
                {t.nav.cooperation}
              </Link>
              <Link 
                to="/ueber-uns" 
                className={`hover:text-electric transition-colors ${location.pathname === '/ueber-uns' ? 'text-electric' : 'text-offwhite'}`}
              >
                {t.nav.about}
              </Link>
              <Link 
                to="/kontakt" 
                className={`hover:text-electric transition-colors ${location.pathname === '/kontakt' ? 'text-electric' : 'text-offwhite'}`}
              >
                {t.nav.contact}
              </Link>

              <div className="pt-4 border-t border-navy-700/80 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase border transition-all ${
                    language === 'de'
                      ? 'bg-electric text-navy-900 border-electric'
                      : 'bg-navy-800 text-coolgray border-navy-700 hover:text-offwhite'
                  }`}
                >
                  Deutsch (DE)
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('bs')}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase border transition-all ${
                    language === 'bs'
                      ? 'bg-electric text-navy-900 border-electric'
                      : 'bg-navy-800 text-coolgray border-navy-700 hover:text-offwhite'
                  }`}
                >
                  Bosanski (BS)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
