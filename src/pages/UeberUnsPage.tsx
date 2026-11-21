import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { serviceCatalog } from '../data/serviceCatalog';

export function UeberUnsPage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Nav */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-electric font-bold tracking-widest text-xs uppercase bg-navy-800/90 border border-electric/30 px-5 py-2.5 rounded-full hover:bg-electric hover:text-navy-900 transition-all shadow-[0_0_15px_rgba(0,163,255,0.2)]"
          >
            <ArrowLeft size={18} />
            <span>{t.nav.backHome}</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-coolgray hidden sm:inline-block font-mono">
            {t.aboutPage.topTag}
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              {t.aboutPage.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              {t.aboutPage.heroTitlePre} <span className="text-electric">{t.aboutPage.heroTitleHighlight}</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              {t.aboutPage.heroSubtitle}
            </p>
          </div>
        </div>

        {/* Leadership & Profile Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5">
            <div className="bg-navy-800 rounded-3xl p-3 border border-navy-700 shadow-2xl relative overflow-hidden">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" 
                  alt="Amar Bektasevic B&B Connect" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-electric/30">
                  <p className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.aboutPage.managementLabel}</p>
                  <h3 className="text-2xl font-bold text-offwhite">Amar Bektašević</h3>
                  <p className="text-xs text-coolgray mt-1">{t.aboutPage.directorSub}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-offwhite uppercase">
              {t.aboutPage.profileHeading}
            </h2>
            <p className="text-coolgray text-base md:text-lg font-light leading-relaxed">
              {t.aboutPage.p1Before} <strong>B&B Connect UG</strong> {t.aboutPage.p1Mid} <strong>Amar Bektašević</strong> {t.aboutPage.p1After}
            </p>
            <p className="text-coolgray text-base md:text-lg font-light leading-relaxed">
              {t.aboutPage.p2Before} <strong>{t.aboutPage.p2Bold}</strong> {t.aboutPage.p2After}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <Calendar className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">{t.aboutPage.stat1Value}</span>
                <span className="text-xs text-coolgray uppercase font-bold">{t.aboutPage.stat1Label}</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <MapPin className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">{t.aboutPage.stat2Value}</span>
                <span className="text-xs text-coolgray uppercase font-bold">{t.aboutPage.stat2Label}</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <Users className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">{t.aboutPage.stat3Value}</span>
                <span className="text-xs text-coolgray uppercase font-bold">{t.aboutPage.stat3Label}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Categories Summary */}
        <div className="bg-navy-800/60 border border-navy-700 rounded-3xl p-8 md:p-12 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-navy-700 gap-4">
            <div>
              <span className="text-electric text-xs font-bold uppercase tracking-widest">{t.aboutPage.fieldBadge}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-offwhite mt-1">{t.aboutPage.fieldHeading}</h3>
            </div>
            <Link to="/leistungen" className="bg-electric text-navy-900 font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric-dim transition-colors">
              {t.aboutPage.fieldCta}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCatalog.map((cat) => (
              <div key={cat.slug} className="bg-navy-900/90 border border-navy-700/80 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-extrabold text-electric">{cat.number}.</span>
                    <span className="text-xs text-coolgray tabular-nums">
                      {cat.subcategories.length} {t.categoriesSection.servicesCountLabel}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-offwhite mb-2">{cat.content[language].title}</h4>
                  <p className="text-xs text-coolgray font-light mb-4">{cat.content[language].description}</p>
                  <ul className="space-y-1.5 border-t border-navy-800 pt-3">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          to={`/leistungen/${cat.slug}/${sub.slug}`}
                          className="flex items-center justify-between gap-2 text-xs text-offwhite hover:text-electric transition-colors py-1"
                        >
                          <span className="truncate">{sub.content[language].title}</span>
                          <ChevronRight size={14} className="text-electric shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Address & Contact Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-electric text-xs font-bold uppercase tracking-widest">{t.aboutPage.hqBadge}</span>
            <h3 className="text-2xl font-bold text-offwhite mt-1">B&B Connect UG</h3>
            <p className="text-coolgray text-sm mt-1">{t.aboutPage.hqAddress}</p>
            <p className="text-coolgray text-sm mt-1">{t.aboutPage.hqEmailLabel} <a href="mailto:info@bundbconnect.de" className="text-electric underline">info@bundbconnect.de</a></p>
          </div>

          <Link 
            to="/kontakt"
            className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-8 py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase shrink-0 shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          >
            {t.aboutPage.hqCta}
          </Link>
        </div>

      </div>
    </div>
  );
}
