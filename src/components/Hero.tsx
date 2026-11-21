import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TextRoll } from './TextRoll';
import { InteractiveLogo } from './InteractiveLogo';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 lg:pt-28 flex items-center overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 lg:pl-12 xl:pl-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 min-h-[calc(100vh-80px)] py-12 lg:py-0">
        <div className="z-20 w-full lg:w-3/5 xl:w-[60%] flex-shrink-0 pt-4 md:pt-8 lg:pt-0">
          <h1 className="text-[11vw] sm:text-[3rem] md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-extrabold text-offwhite tracking-tight mb-8 md:mb-12 flex flex-col items-center lg:items-start uppercase relative z-20 leading-[1.05]">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-4 md:gap-x-8">
              <TextRoll hoverClassName="text-electric">{t.hero.titleLine1Word1}</TextRoll>
              <TextRoll hoverClassName="text-electric">{t.hero.titleLine1Word2}</TextRoll>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-4 md:gap-x-8 text-electric mt-1 md:mt-2">
              <TextRoll hoverClassName="text-offwhite">{t.hero.titleLine2Word1}</TextRoll>
              <TextRoll hoverClassName="text-offwhite">{t.hero.titleLine2Word2}</TextRoll>
            </div>
          </h1>
          
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/leistungen"
              className="bg-offwhite text-navy-900 rounded-full px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest text-[10px] md:text-xs flex items-center gap-3 md:gap-4 hover:bg-offwhite/90 transition-colors uppercase relative z-30 w-fit"
            >
              {t.hero.cta} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end w-full relative z-20 pointer-events-auto pr-0 lg:pr-12 xl:pr-24 mt-4 lg:mt-0">
          <InteractiveLogo />
        </div>
      </div>
    </section>
  );
}
