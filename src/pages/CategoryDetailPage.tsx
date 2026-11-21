import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Cable,
  HardHat,
  Zap,
  Send,
} from 'lucide-react';
import { findCategory } from '../data/serviceCatalog';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons = {
  fiber: Cable,
  civil: HardHat,
  ev: Zap,
};

export function CategoryDetailPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { language, t } = useLanguage();

  const category = findCategory(categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="pt-32 pb-24 relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl text-center">
          <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-offwhite mb-4">
              {t.serviceDetailPage.notFoundTitle}
            </h1>
            <p className="text-coolgray text-sm sm:text-base mb-8">
              {t.serviceDetailPage.notFoundDesc}
            </p>
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 bg-electric text-navy-900 font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-electric-dim hover:text-offwhite transition-colors"
            >
              <ArrowLeft size={16} />
              <span>{t.serviceDetailPage.backToServices}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const catText = category.content[language];
  const IconComp = categoryIcons[category.iconKey];

  return (
    <div className="pt-28 md:pt-32 pb-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Top Back Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-electric font-bold tracking-wider text-xs uppercase bg-navy-800/90 border border-electric/30 px-4 py-2.5 rounded-xl hover:bg-electric hover:text-navy-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t.nav.backHome}</span>
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-coolgray flex-wrap"
          >
            <Link to="/" className="hover:text-offwhite transition-colors">
              {t.nav.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/leistungen" className="hover:text-offwhite transition-colors">
              {t.nav.services}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-electric font-semibold">{catText.title}</span>
          </nav>
        </div>

        {/* Category Hero Header */}
        <div className="bg-navy-900/90 border border-navy-700 rounded-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-electric/15 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <IconComp size={22} />
                </div>
                <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider tabular-nums">
                  {category.number} · {catText.subtitle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-offwhite tracking-tight leading-[1.12] mb-4">
                {catText.title}
              </h1>

              <p className="text-coolgray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                {catText.description}
              </p>
            </div>

            <div className="lg:col-span-5 relative min-h-[220px] bg-navy-950 border-t lg:border-t-0 lg:border-l border-navy-800">
              <img
                src={category.image}
                alt={catText.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Subcategories Grid with Images & Descriptions */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-offwhite uppercase tracking-tight mb-2">
            {catText.title}
          </h2>
          <p className="text-sm text-coolgray font-light mb-8">
            {t.categoriesSection.chooseServiceHint}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub) => {
              const subText = sub.content[language];
              return (
                <Link
                  key={sub.slug}
                  to={`/leistungen/${category.slug}/${sub.slug}`}
                  className="group bg-navy-900/90 border border-navy-700 rounded-2xl overflow-hidden hover:border-electric/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 bg-navy-950 overflow-hidden">
                      <img
                        src={sub.image}
                        alt={subText.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                      <div className="absolute top-3 left-3 bg-navy-900/90 border border-electric/30 text-electric font-mono font-bold text-xs px-2.5 py-1 rounded-lg tabular-nums">
                        {sub.code}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-offwhite group-hover:text-electric transition-colors mb-2 leading-snug">
                        {subText.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-coolgray font-light leading-relaxed">
                        {subText.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-navy-800 flex items-center justify-between text-xs font-bold text-electric">
                    <span>{t.servicesPage.requestThis}</span>
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Direct Contact CTA */}
        <div className="bg-navy-800/90 border border-electric/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
              {catText.title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-offwhite tracking-tight">
              {t.serviceDetailPage.ctaHeading}
            </h2>
            <p className="text-sm text-coolgray font-light mt-2 leading-relaxed">
              {t.serviceDetailPage.ctaSubtitle}
            </p>
          </div>

          <Link
            to={`/kontakt?category=${encodeURIComponent(catText.title)}&service=${encodeURIComponent(catText.title)}#kontakt-form`}
            className="inline-flex items-center justify-center gap-3 bg-electric text-navy-900 font-bold tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-electric-dim hover:text-offwhite transition-colors uppercase whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(0,163,255,0.25)]"
          >
            <Send size={16} />
            <span>{t.serviceDetailPage.ctaButton}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
