import { useEffect, useState, FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Cable,
  HardHat,
  Zap,
  Send,
  ChevronRight,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { serviceCatalog, CategorySlug } from '../data/serviceCatalog';
import { sendInquiryEmail, buildMailtoUrl, InquiryPayload } from '../lib/sendInquiry';

const categoryIcons = {
  fiber: Cable,
  civil: HardHat,
  ev: Zap,
};

export function LeistungenPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get('kategorie') as CategorySlug | null;
  const [activeCategory, setActiveCategory] = useState<'all' | CategorySlug>(
    paramCategory && ['glasfaser', 'tiefbau', 'ladeinfrastruktur'].includes(paramCategory)
      ? paramCategory
      : 'all',
  );
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('alle');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMailto, setErrorMailto] = useState<string | null>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (paramCategory && ['glasfaser', 'tiefbau', 'ladeinfrastruktur'].includes(paramCategory)) {
      setActiveCategory(paramCategory);
    } else {
      setActiveCategory('all');
    }
  }, [paramCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (cat: 'all' | CategorySlug) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('kategorie');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ kategorie: cat }, { replace: true });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMailto(null);

    const serviceLabel =
      selectedOption === 'alle' ? t.servicesPage.formAllOption : selectedOption;

    const payload: InquiryPayload = {
      formSource: 'Stranica usluga (/leistungen)',
      subject: `Leistungsanfrage: ${serviceLabel} (${company})`,
      company: company.trim(),
      email: email.trim(),
      service: serviceLabel,
      message: description.trim(),
    };

    try {
      await sendInquiryEmail(payload);
      setSubmitted(true);
      setCompany('');
      setEmail('');
      setDescription('');
    } catch {
      setErrorMailto(buildMailtoUrl(payload));
    } finally {
      setIsSubmitting(false);
    }
  };

  const visibleCategories =
    activeCategory === 'all'
      ? serviceCatalog
      : serviceCatalog.filter((c) => c.slug === activeCategory);

  return (
    <div className="pt-28 pb-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-electric font-bold tracking-widest text-xs uppercase bg-navy-800/90 border border-electric/30 px-5 py-2.5 rounded-xl hover:bg-electric hover:text-navy-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t.nav.backHome}</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-coolgray hidden sm:inline-block font-mono">
            {t.servicesPage.topTag}
          </span>
        </div>

        {/* Page Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-2xl mb-14 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.2em] mb-3 uppercase block">
              {t.servicesPage.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight leading-tight">
              {t.servicesPage.heroTitlePre}{' '}
              <span className="text-electric">{t.servicesPage.heroTitleHighlight}</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-5 leading-relaxed">
              {t.servicesPage.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-navy-700/80 text-xs font-bold text-coolgray">
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> {t.servicesPage.pill1}
              </span>
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> {t.servicesPage.pill2}
              </span>
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> {t.servicesPage.pill3}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-navy-700 pb-6 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-offwhite uppercase tracking-tight">
              {t.servicesPage.listHeading}
            </h2>
            <p className="text-coolgray text-sm font-light mt-1">
              {t.servicesPage.listSub}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={t.categoriesSection.filterLabel}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-navy-900/90 border border-navy-700 rounded-xl self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-electric text-navy-900'
                  : 'text-coolgray hover:text-offwhite'
              }`}
            >
              {t.categoriesSection.allTab}
            </button>
            {serviceCatalog.map((cat) => {
              const catText = cat.content[language];
              const isSelected = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                    isSelected
                      ? 'bg-electric text-navy-900'
                      : 'text-coolgray hover:text-offwhite'
                  }`}
                >
                  {cat.number}. {catText.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Subcategories */}
        <div className="space-y-16 mb-20">
          {visibleCategories.map((category) => {
            const IconComp = categoryIcons[category.iconKey];
            const catText = category.content[language];

            return (
              <section key={category.slug} id={category.slug}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                      <IconComp size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider tabular-nums">
                        {category.number} · {category.subcategories.length}{' '}
                        {t.categoriesSection.servicesCountLabel}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-offwhite">
                        {catText.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-coolgray font-light mt-1 max-w-2xl">
                        {catText.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subcategories.map((sub) => {
                    const subText = sub.content[language];
                    return (
                      <Link
                        key={sub.slug}
                        to={`/leistungen/${category.slug}/${sub.slug}`}
                        className="group bg-navy-900/90 border border-navy-700 rounded-2xl overflow-hidden hover:border-electric/60 transition-colors duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-44 bg-navy-950 overflow-hidden">
                            <img
                              src={sub.image}
                              alt={subText.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                            <div className="absolute top-3 left-3 bg-navy-900/90 border border-electric/30 text-electric font-mono font-bold text-xs px-2.5 py-1 rounded-lg tabular-nums">
                              {sub.code}
                            </div>
                          </div>

                          <div className="p-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-electric block mb-1.5">
                              {catText.title}
                            </span>
                            <h4 className="text-lg font-bold text-offwhite group-hover:text-electric transition-colors mb-2 leading-snug">
                              {subText.title}
                            </h4>
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
              </section>
            );
          })}
        </div>

        {/* Direct Service Request Section */}
        <div
          id="anfrage"
          className="bg-navy-800/90 border border-navy-700 p-8 md:p-12 rounded-2xl backdrop-blur-xl"
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-electric text-xs font-bold uppercase tracking-widest">
              {t.servicesPage.formBadge}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-offwhite uppercase mt-2">
              {t.servicesPage.formHeading}
            </h3>
            <p className="text-coolgray text-sm md:text-base font-light mt-2">
              {t.servicesPage.formSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-electric/20 border border-electric text-electric rounded-full flex items-center justify-center mb-5">
                <CheckCircle2 size={34} />
              </div>
              <h4 className="text-2xl font-bold text-offwhite mb-2">
                {t.servicesPage.successTitle}
              </h4>
              <p className="text-coolgray text-sm md:text-base max-w-md font-light">
                {t.servicesPage.successText}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-xl cursor-pointer"
              >
                {t.servicesPage.sendAnother}
              </button>
            </div>
          ) : (
            <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">
                    {t.servicesPage.labelCompany}
                  </label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.servicesPage.placeholderCompany}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">
                    {t.servicesPage.labelEmail}
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.servicesPage.placeholderEmail}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">
                  {t.servicesPage.labelWork}
                </label>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                >
                  <option value="alle">{t.servicesPage.formAllOption}</option>
                  {serviceCatalog.map((cat) => (
                    <optgroup
                      key={cat.slug}
                      label={`${cat.number}. ${cat.content[language].title}`}
                    >
                      {cat.subcategories.map((sub) => (
                        <option
                          key={`${cat.slug}-${sub.slug}`}
                          value={`${cat.content[language].title}: ${sub.content[language].title}`}
                        >
                          {sub.code} — {sub.content[language].title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">
                  {t.servicesPage.labelDesc}
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.servicesPage.placeholderDesc}
                  className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric resize-none"
                ></textarea>
              </div>

              {errorMailto && (
                <div className="p-4 rounded-xl bg-navy-900 border border-electric/40 text-xs text-coolgray space-y-2">
                  <div className="flex items-start gap-2 text-offwhite">
                    <AlertCircle size={16} className="text-electric shrink-0 mt-0.5" />
                    <span>{t.servicesPage.sendError}</span>
                  </div>
                  <a
                    href={errorMailto}
                    className="inline-flex items-center gap-2 text-electric font-bold underline"
                  >
                    <Mail size={14} />
                    <span>{t.servicesPage.openEmailApp}</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric text-navy-900 font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-electric-dim hover:text-offwhite transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? t.servicesPage.sendingBtn : t.servicesPage.submitBtn}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
