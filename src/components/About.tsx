import { ArrowUpRight, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="ueber-uns" className="bg-transparent py-24 md:py-36 border-t border-navy-700/50 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.15)]">
            <ArrowUpRight size={16} /> <TextRoll center>{t.aboutSection.badge}</TextRoll>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-offwhite tracking-tight uppercase max-w-4xl leading-[1.15]">
            <TextRoll center>{t.aboutSection.headingLine1}</TextRoll>{' '}
            <span className="text-electric block mt-2"><TextRoll center>{t.aboutSection.headingLine2}</TextRoll></span>
          </h2>
        </div>

        {/* Top Info Grid: Amar Bektasevic & Company Overview */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Leader Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-navy-800 rounded-3xl p-3 border border-navy-700 shadow-2xl relative overflow-hidden group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" 
                  alt="B&B Connect Glasfaser Expertise" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-electric/30">
                  <p className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.aboutSection.managementLabel}</p>
                  <h3 className="text-2xl font-bold text-offwhite">{t.aboutSection.directorName}</h3>
                  <p className="text-xs text-coolgray mt-1">{t.aboutSection.directorSub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light text-offwhite mb-6 leading-snug">
              {t.aboutSection.leadPre}{' '}
              <span className="text-electric font-bold">{t.aboutSection.leadHighlight}</span>{' '}
              {t.aboutSection.leadPost}
            </h3>

            <p className="text-coolgray text-base md:text-lg mb-6 leading-relaxed font-light">
              <strong>{t.aboutSection.p1Before}</strong> {t.aboutSection.p1Mid} <strong>{t.aboutSection.directorName}</strong> {t.aboutSection.p1After}
            </p>

            <p className="text-coolgray text-base md:text-lg mb-8 leading-relaxed font-light">
              {t.aboutSection.p2}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <Calendar className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">{t.aboutSection.metric1Value}</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">{t.aboutSection.metric1Label}</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <MapPin className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">{t.aboutSection.metric2Value}</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">{t.aboutSection.metric2Label}</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <Users className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">{t.aboutSection.metric3Value}</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">{t.aboutSection.metric3Label}</span>
              </div>
            </div>

            {/* Link to Dedicated Page */}
            <div className="mt-8">
              <Link 
                to="/ueber-uns" 
                className="inline-flex items-center gap-2 bg-electric text-navy-900 font-bold tracking-widest text-xs px-8 py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase shadow-[0_0_15px_rgba(0,163,255,0.3)]"
              >
                <span>{t.aboutSection.ctaOpenPage}</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
