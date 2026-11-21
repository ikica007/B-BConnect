import { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, MapPin, Users, Calendar, Award, CheckCircle, Send, CheckCircle2, Building2, ExternalLink, AlertCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendInquiryEmail, buildMailtoUrl, InquiryPayload } from '../lib/sendInquiry';

export function ZusammenarbeitPage() {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [field, setField] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMailto, setErrorMailto] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefitIcons = [ShieldCheck, Users, Award];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMailto(null);

    const payload: InquiryPayload = {
      formSource: 'Stranica saradnje i partnera (/zusammenarbeit)',
      subject: `Kooperationsanfrage: ${company}`,
      company: company.trim(),
      email: email.trim(),
      service: field.trim() || undefined,
      message: message.trim(),
    };

    try {
      await sendInquiryEmail(payload);
      setSubmitted(true);
      setCompany('');
      setEmail('');
      setField('');
      setMessage('');
    } catch {
      setErrorMailto(buildMailtoUrl(payload));
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {t.cooperationPage.topTag}
          </span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              {t.cooperationPage.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              {t.cooperationPage.heroTitlePre} <span className="text-electric">{t.cooperationPage.heroTitleHighlight}</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              {t.cooperationPage.heroSubtitle}
            </p>
          </div>
        </div>

        {/* Core Metrics Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <Calendar size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">{t.cooperationPage.metric1Value}</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">{t.cooperationPage.metric1Title}</span>
            <p className="text-xs text-coolgray mt-2 font-light">{t.cooperationPage.metric1Desc}</p>
          </div>

          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <MapPin size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">{t.cooperationPage.metric2Value}</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">{t.cooperationPage.metric2Title}</span>
            <p className="text-xs text-coolgray mt-2 font-light">{t.cooperationPage.metric2Desc}</p>
          </div>

          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <Users size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">{t.cooperationPage.metric3Value}</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">{t.cooperationPage.metric3Title}</span>
            <p className="text-xs text-coolgray mt-2 font-light">{t.cooperationPage.metric3Desc}</p>
          </div>
        </div>

        {/* Detailed Partner Cards */}
        <div className="mb-20">
          <div className="border-b border-navy-700 pb-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-offwhite uppercase tracking-tight">
              {t.cooperationPage.partnersHeading}
            </h2>
            <p className="text-coolgray text-sm font-light mt-1">
              {t.cooperationPage.partnersSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.cooperationPage.partnersList.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-800/80 border border-navy-700 rounded-3xl overflow-hidden shadow-2xl hover:border-electric/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-7 pb-6 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-950 border-b border-navy-700/80 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-electric/10 rounded-bl-full pointer-events-none group-hover:bg-electric/20 transition-colors" />
                    <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-electric/15 border border-electric/30 flex items-center justify-center text-electric">
                        <Building2 size={24} />
                      </div>
                      <ExternalLink size={18} className="text-electric shrink-0" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-offwhite group-hover:text-electric transition-colors relative z-10">
                      {partner.name}
                    </h3>
                  </div>

                  <div className="p-7">
                    <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-3">
                      {partner.role}
                    </h4>
                    <p className="text-coolgray text-sm font-light leading-relaxed mb-6">
                      {partner.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {partner.tags.map((tag, i) => (
                        <span key={i} className="bg-navy-900 border border-navy-700 text-xs text-offwhite px-3 py-1 rounded-lg">
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 py-5 bg-navy-900/60 border-t border-navy-700/80 flex items-center justify-between gap-3">
                  <span className="text-xs text-electric font-bold uppercase tracking-wider group-hover:underline">
                    {t.cooperationPage.visitWebsite}
                  </span>
                  <CheckCircle size={16} className="text-electric shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-navy-800/60 border border-navy-700 rounded-3xl p-8 md:p-12 mb-20 shadow-xl">
          <h3 className="text-2xl font-bold text-offwhite mb-8 uppercase tracking-tight text-center">
            {t.cooperationPage.benefitsTitle}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.cooperationPage.benefits.map((b, i) => {
              const IconComp = benefitIcons[i] || ShieldCheck;
              return (
                <div key={b.title} className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl">
                  <IconComp className="text-electric mb-3" size={28} />
                  <h4 className="text-lg font-bold text-offwhite mb-2">{b.title}</h4>
                  <p className="text-xs text-coolgray font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Application Form */}
        <div className="bg-navy-800/90 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-electric text-xs font-bold uppercase tracking-widest">
              {t.cooperationPage.formBadge}
            </span>
            <h3 className="text-3xl font-extrabold text-offwhite uppercase mt-2">
              {t.cooperationPage.formHeading}
            </h3>
            <p className="text-coolgray text-sm md:text-base font-light mt-2">
              {t.cooperationPage.formSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-electric/20 border border-electric text-electric rounded-full flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(0,163,255,0.4)]">
                <CheckCircle2 size={34} />
              </div>
              <h4 className="text-2xl font-bold text-offwhite mb-2">{t.cooperationPage.successTitle}</h4>
              <p className="text-coolgray text-sm md:text-base max-w-md font-light">
                {t.cooperationPage.successText}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-full cursor-pointer"
              >
                {t.cooperationPage.sendAnother}
              </button>
            </div>
          ) : (
            <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.cooperationPage.labelCompany}</label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.cooperationPage.placeholderCompany}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.cooperationPage.labelEmail}</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.cooperationPage.placeholderEmail}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.cooperationPage.labelField}</label>
                <input
                  type="text"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  placeholder={t.cooperationPage.placeholderField}
                  className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.cooperationPage.labelMessage}</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.cooperationPage.placeholderMessage}
                  className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric resize-none"
                ></textarea>
              </div>

              {errorMailto && (
                <div className="p-4 rounded-xl bg-navy-900 border border-electric/40 text-xs text-coolgray space-y-2">
                  <div className="flex items-start gap-2 text-offwhite">
                    <AlertCircle size={16} className="text-electric shrink-0 mt-0.5" />
                    <span>{t.cooperationPage.sendError}</span>
                  </div>
                  <a
                    href={errorMailto}
                    className="inline-flex items-center gap-2 text-electric font-bold underline"
                  >
                    <Mail size={14} />
                    <span>{t.cooperationPage.openEmailApp}</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric text-navy-900 font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,163,255,0.3)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? t.cooperationPage.sendingBtn : t.cooperationPage.submitBtn}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
