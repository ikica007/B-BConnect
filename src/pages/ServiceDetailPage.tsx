import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Users,
  ShieldCheck,
  Cable,
  HardHat,
  Zap,
  Send,
} from 'lucide-react';
import { findSubcategory } from '../data/serviceCatalog';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons = {
  fiber: Cable,
  civil: HardHat,
  ev: Zap,
};

export function ServiceDetailPage() {
  const { categorySlug, serviceSlug } = useParams<{
    categorySlug: string;
    serviceSlug: string;
  }>();
  const { language, t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const match = findSubcategory(categorySlug, serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgError(false);
  }, [categorySlug, serviceSlug]);

  if (!match) {
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

  const { category, subcategory } = match;
  const catText = category.content[language];
  const subText = subcategory.content[language];
  const IconComp = categoryIcons[category.iconKey];
  const siblingServices = category.subcategories.filter((s) => s.slug !== subcategory.slug);

  const contactHref = `/kontakt?service=${encodeURIComponent(subText.title)}&category=${encodeURIComponent(catText.title)}#kontakt-form`;

  return (
    <div className="pt-28 md:pt-32 pb-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-electric font-bold tracking-wider text-xs uppercase bg-navy-800/90 border border-electric/30 px-4 py-2.5 rounded-xl hover:bg-electric hover:text-navy-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t.serviceDetailPage.backToServices}</span>
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-coolgray flex-wrap"
          >
            <Link to="/" className="hover:text-offwhite transition-colors">
              {t.nav.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              to={`/leistungen?kategorie=${category.slug}`}
              className="hover:text-offwhite transition-colors"
            >
              {catText.title}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-electric font-semibold">{subText.title}</span>
          </nav>
        </div>

        {/* Hero / Main Service Card */}
        <div className="bg-navy-900/90 border border-navy-700 rounded-2xl overflow-hidden mb-10">
          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Left: Title & Description */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-electric font-mono font-bold tabular-nums mb-3">
                  <span>{category.number}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase tracking-wider">{catText.title}</span>
                  <span aria-hidden="true">·</span>
                  <span>{subcategory.code}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-offwhite tracking-tight leading-[1.15] text-balance mb-3">
                  {subText.title}
                </h1>

                <p className="text-electric text-sm sm:text-base font-medium mb-6">
                  {subText.tagline}
                </p>

                <div className="space-y-4 text-coolgray text-sm sm:text-base font-light leading-relaxed mb-8">
                  {subText.fullDesc.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-navy-800 flex flex-wrap items-center gap-6 text-xs text-coolgray">
                <span className="inline-flex items-center gap-2 text-offwhite font-medium">
                  <MapPin size={15} className="text-electric shrink-0" />
                  <span>{t.serviceDetailPage.badgeArea}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-offwhite font-medium">
                  <Users size={15} className="text-electric shrink-0" />
                  <span>{t.serviceDetailPage.badgeTeam}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-offwhite font-medium">
                  <ShieldCheck size={15} className="text-electric shrink-0" />
                  <span>{t.serviceDetailPage.badgeQuality}</span>
                </span>
              </div>
            </div>

            {/* Right: Service Image Showcase */}
            <div className="lg:col-span-5 relative bg-navy-950 min-h-[260px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-navy-800 flex flex-col">
              <div className="relative flex-1 min-h-[260px] overflow-hidden">
                {!imgError ? (
                  <img
                    src={subcategory.image}
                    alt={`${subText.title} — ${catText.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover lg:absolute lg:inset-0"
                  />
                ) : (
                  <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
                      <IconComp size={32} />
                    </div>
                    <p className="text-sm font-bold text-offwhite">{subText.title}</p>
                    <p className="text-xs text-coolgray mt-1">{catText.title}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="px-6 py-4 bg-navy-950/95 border-t border-navy-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-electric font-bold block">
                    {t.serviceDetailPage.techStandardLabel}
                  </span>
                  <p className="text-xs text-coolgray font-light mt-0.5">
                    {subText.technicalNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scope / Highlights & Execution Workflow */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Technical Scope */}
          <div className="lg:col-span-6 bg-navy-900/85 border border-navy-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-offwhite mb-2">
              {t.serviceDetailPage.scopeTitle}
            </h2>
            <p className="text-xs text-coolgray font-light mb-6">
              {t.serviceDetailPage.scopeSubtitle}
            </p>
            <ul className="space-y-3.5">
              {subText.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-offwhite font-light leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-md bg-electric/15 border border-electric/30 flex items-center justify-center text-electric shrink-0 mt-0.5">
                    <Check size={13} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Steps */}
          <div className="lg:col-span-6 bg-navy-900/85 border border-navy-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-offwhite mb-2">
              {t.serviceDetailPage.processTitle}
            </h2>
            <p className="text-xs text-coolgray font-light mb-6">
              {t.serviceDetailPage.processSubtitle}
            </p>
            <div className="space-y-4">
              {subText.processSteps.map((st) => (
                <div
                  key={st.step}
                  className="flex items-start gap-4 p-4 rounded-xl bg-navy-950/70 border border-navy-800"
                >
                  <span className="text-sm font-mono font-extrabold text-electric tabular-nums shrink-0 mt-0.5">
                    {st.step}.
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-offwhite">{st.title}</h3>
                    <p className="text-xs text-coolgray font-light mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Subcategories in same category */}
        {siblingServices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-bold text-offwhite mb-4">
              {t.serviceDetailPage.relatedPrefix} {catText.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {siblingServices.map((sib) => {
                const sibText = sib.content[language];
                return (
                  <Link
                    key={sib.slug}
                    to={`/leistungen/${category.slug}/${sib.slug}`}
                    className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-navy-900/80 border border-navy-700 hover:border-electric/60 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xs font-mono font-bold text-electric tabular-nums shrink-0">
                        {sib.code}
                      </span>
                      <span className="text-sm font-medium text-offwhite group-hover:text-electric transition-colors truncate">
                        {sibText.title}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-coolgray group-hover:text-electric shrink-0"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Direct Contact CTA */}
        <div className="bg-navy-800/90 border border-electric/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
              {catText.title} · {subText.title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-offwhite tracking-tight">
              {t.serviceDetailPage.ctaHeading}
            </h2>
            <p className="text-sm text-coolgray font-light mt-2 leading-relaxed">
              {t.serviceDetailPage.ctaSubtitle}
            </p>
          </div>

          <Link
            to={contactHref}
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
