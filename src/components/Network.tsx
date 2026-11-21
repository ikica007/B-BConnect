import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TextRoll } from './TextRoll';
import { useLanguage } from '../context/LanguageContext';

export function Network() {
  const { t } = useLanguage();

  return (
    <section className="bg-transparent py-24 md:py-48 border-t border-navy-700/50 text-center relative overflow-hidden">
      {/* Abstract grid/light background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-electric blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-2 text-coolgray text-xs font-bold tracking-[0.2em] mb-8 md:mb-12 uppercase">
          <ArrowUpRight size={16} /> <TextRoll center>{t.network.badge}</TextRoll>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-[3.5rem] font-light text-offwhite mb-12 md:mb-16 max-w-5xl mx-auto leading-tight flex flex-col gap-2 items-center uppercase">
          <TextRoll center>{t.network.line1}</TextRoll>
          <span className="font-bold"><TextRoll center>{t.network.line2}</TextRoll></span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Link
            to="/leistungen"
            className="bg-electric text-navy-900 rounded-full px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest text-[10px] md:text-xs hover:bg-electric-dim hover:text-offwhite transition-colors"
          >
            {t.network.ctaMore}
          </Link>
          <Link
            to="/kontakt"
            className="bg-transparent border border-navy-700 text-offwhite rounded-full px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest text-[10px] md:text-xs hover:bg-navy-800 transition-colors"
          >
            {t.network.ctaQuery}
          </Link>
        </div>
      </div>
    </section>
  );
}
