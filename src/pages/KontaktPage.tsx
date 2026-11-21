import { useEffect, useState, FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Send, Clock, CheckCircle2, User, Globe, X, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendInquiryEmail, buildMailtoUrl, InquiryPayload } from '../lib/sendInquiry';

export function KontaktPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialCategory = searchParams.get('category') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(
    initialService ? `${initialService}` : '',
  );
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMailto, setErrorMailto] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (initialService) {
      setSubject(`${t.contactPage.inquiryPrefix} ${initialService}`);
      setSubmitted(false);
      const formEl = document.getElementById('kontakt-form');
      if (formEl) {
        setTimeout(() => {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialService, t.contactPage.inquiryPrefix]);

  const clearSelectedService = () => {
    searchParams.delete('service');
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
    setSubject('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMailto(null);

    const payload: InquiryPayload = {
      formSource: 'Kontakt stranica (/kontakt)',
      subject: subject.trim() || `Kontaktanfrage von ${name}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      service: initialService
        ? initialCategory && initialCategory !== initialService
          ? `${initialCategory} · ${initialService}`
          : initialService
        : undefined,
      message: message.trim(),
    };

    try {
      await sendInquiryEmail(payload);
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
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
            {t.contactPage.topTag}
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              {t.contactPage.heroBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              {t.contactPage.heroTitlePre} <span className="text-electric">{t.contactPage.heroTitleHighlight}</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              {t.contactPage.heroSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-800/90 border border-navy-700 p-8 rounded-3xl shadow-xl backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">{t.contactPage.companyBadge}</span>
              <h2 className="text-2xl font-bold text-offwhite mb-6">B&B Connect UG</h2>

              <div className="space-y-6 text-coolgray font-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactPage.addressTitle}</h3>
                    <p className="text-offwhite font-medium text-base">Otto-Hahn-Str. 27</p>
                    <p className="text-sm">{t.contactPage.addressCountry}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactPage.emailTitle}</h3>
                    <a href="mailto:info@bundbconnect.de" className="text-offwhite font-medium text-base hover:text-electric transition-colors">
                      info@bundbconnect.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactPage.phoneTitle}</h3>
                    <a href="tel:+491608170468" className="text-offwhite font-medium text-base hover:text-electric transition-colors">
                      +49 160 817 0468
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <User size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactPage.managementTitle}</h3>
                    <p className="text-offwhite font-medium">Amar Bektašević</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactPage.areaTitle}</h3>
                    <p className="text-offwhite font-medium">{t.contactPage.areaValue}</p>
                    <p className="text-xs text-coolgray mt-0.5">{t.contactPage.areaSub}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/60 border border-navy-700 p-6 rounded-2xl flex items-center gap-4">
              <Clock className="text-electric shrink-0" size={28} />
              <div>
                <h4 className="text-sm font-bold text-offwhite">{t.contactPage.hoursTitle}</h4>
                <p className="text-xs text-coolgray">{t.contactPage.hoursValue}</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div id="kontakt-form" className="lg:col-span-7 bg-navy-800/80 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-xl scroll-mt-32">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-electric/20 border border-electric text-electric rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_25px_rgba(0,163,255,0.4)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-offwhite mb-3">{t.contactPage.successTitle}</h3>
                <p className="text-coolgray text-base max-w-md font-light leading-relaxed">
                  {t.contactPage.successMsgStart} <strong className="text-electric">info@bundbconnect.de</strong> {t.contactPage.successMsgEnd}
                </p>
                <button 
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-full cursor-pointer"
                >
                  {t.contactPage.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-1">{t.contactPage.formBadge}</span>
                  <h3 className="text-2xl font-extrabold text-offwhite uppercase">{t.contactPage.formHeading}</h3>
                </div>

                {initialService && (
                  <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-electric/10 border border-electric/30">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-electric block">
                        {t.contactPage.selectedServiceLabel}
                      </span>
                      <p className="text-sm font-semibold text-offwhite">
                        {initialCategory && initialCategory !== initialService ? `${initialCategory} · ${initialService}` : initialService}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={clearSelectedService}
                      aria-label="Clear selected service"
                      className="text-coolgray hover:text-offwhite transition-colors p-1 cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactPage.labelName}</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contactPage.placeholderName} 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactPage.labelEmail}</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contactPage.placeholderEmail} 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactPage.labelPhone}</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contactPage.placeholderPhone} 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactPage.labelSubject}</label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t.contactPage.placeholderSubject} 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactPage.labelMessage}</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactPage.placeholderMessage} 
                    rows={5}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors resize-none"
                  ></textarea>
                </div>

                {errorMailto && (
                  <div className="p-4 rounded-xl bg-navy-900 border border-electric/40 text-xs text-coolgray space-y-2">
                    <div className="flex items-start gap-2 text-offwhite">
                      <AlertCircle size={16} className="text-electric shrink-0 mt-0.5" />
                      <span>{t.contactPage.sendError}</span>
                    </div>
                    <a
                      href={errorMailto}
                      className="inline-flex items-center gap-2 text-electric font-bold underline"
                    >
                      <Mail size={14} />
                      <span>{t.contactPage.openEmailApp}</span>
                    </a>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-10 py-5 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_20px_rgba(0,163,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? t.contactPage.sendingBtn : t.contactPage.submitBtn}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Map Section */}
        <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-electric text-xs font-bold uppercase tracking-widest">{t.contactPage.mapBadge}</span>
              <h3 className="text-2xl font-bold text-offwhite">Otto-Hahn-Str. 27, 32108 Bad Salzuflen</h3>
            </div>
            <a 
              href="https://maps.google.com/?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-navy-900 border border-electric/40 text-electric text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric hover:text-navy-900 transition-all flex items-center gap-2"
            >
              <span>{t.contactPage.openMaps}</span>
              <MapPin size={16} />
            </a>
          </div>

          <div className="w-full h-[460px] md:h-[540px] rounded-2xl overflow-hidden border border-navy-700 bg-navy-950">
            <iframe 
              title="B&B Connect UG Standort - Otto-Hahn-Str. 27, 32108 Bad Salzuflen"
              src="https://maps.google.com/maps?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
