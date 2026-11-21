import { Link } from 'react-router-dom';
import { Cable, HardHat, Zap, ArrowRight } from 'lucide-react';
import { serviceCatalog } from '../data/serviceCatalog';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons = {
  fiber: Cable,
  civil: HardHat,
  ev: Zap,
};

export function ServiceCategories() {
  const { language, t } = useLanguage();

  return (
    <section
      id="leistungen"
      className="relative z-20 py-16 md:py-24 border-y border-navy-700/60 bg-navy-950/75 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-electric mb-3">
            {t.categoriesSection.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-offwhite tracking-tight text-balance leading-[1.12]">
            {t.categoriesSection.heading}
          </h2>
          <p className="text-coolgray text-sm sm:text-base font-light mt-3 leading-relaxed">
            {t.categoriesSection.subtitle}
          </p>
        </div>

        {/* 3 Main Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCatalog.map((category) => {
            const IconComp = categoryIcons[category.iconKey];
            const catText = category.content[language];

            return (
              <Link
                key={category.slug}
                to={`/leistungen/${category.slug}`}
                className="group bg-navy-900/90 border border-navy-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-electric/60 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Category Header Media */}
                  <div className="relative h-56 bg-navy-950 overflow-hidden">
                    <img
                      src={category.image}
                      alt={catText.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/45 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                      <div>
                        <span className="text-xs text-electric font-mono font-bold tabular-nums block mb-1">
                          {category.number}
                        </span>
                        <h3 className="text-2xl font-extrabold text-offwhite tracking-tight group-hover:text-electric transition-colors">
                          {catText.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-navy-900/90 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                        <IconComp size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Category Short 1-2 Sentence Description */}
                  <div className="p-6">
                    <p className="text-sm text-coolgray font-light leading-relaxed">
                      {catText.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 py-4 border-t border-navy-800 bg-navy-950/40 flex items-center justify-between text-xs font-bold text-electric">
                  <span>{t.categoriesSection.overviewLink}</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
