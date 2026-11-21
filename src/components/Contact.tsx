import { useState, FormEvent } from 'react';
import { TextRoll } from './TextRoll';
import { MapPin, Mail, Phone, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendInquiryEmail, buildMailtoUrl, InquiryPayload } from '../lib/sendInquiry';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMailto, setErrorMailto] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMailto(null);

    const payload: InquiryPayload = {
      formSource: 'Početna stranica — Kontakt forma',
      subject: subject.trim() || `Projektanfrage von ${name}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      await sendInquiryEmail(payload);
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setErrorMailto(buildMailtoUrl(payload));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="bg-transparent py-24 md:py-36 border-t border-navy-700/50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-electric text-xs font-bold tracking-[0.25em] mb-2 uppercase bg-electric/10 border border-electric/20 px-4 py-1.5 rounded-full">
            {t.contactSection.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight">
            <TextRoll center>{t.contactSection.headingLine1}</TextRoll>{' '}
            <span className="text-electric"><TextRoll center>{t.contactSection.headingLine2}</TextRoll></span>
          </h2>
          <p className="text-coolgray text-base md:text-lg max-w-2xl mt-4 font-light">
            {t.contactSection.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16 md:mb-20">
          
          {/* Contact Information & Details */}
          <div className="lg:col-span-5 bg-navy-800/90 border border-navy-700 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-offwhite mb-6">
              {t.contactSection.companyName}
            </h3>
            
            <div className="space-y-6 text-coolgray font-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactSection.addressLabel}</h4>
                  <p className="text-offwhite font-medium">Otto-Hahn-Str. 27</p>
                  <p className="text-sm">{t.contactSection.addressLine2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactSection.emailLabel}</h4>
                  <a href="mailto:info@bundbconnect.de" className="text-offwhite font-medium hover:text-electric transition-colors">
                    info@bundbconnect.de
                  </a>
                  <p className="text-xs text-coolgray mt-0.5">{t.contactSection.emailNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactSection.phoneLabel}</h4>
                  <a href="tel:+491608170468" className="text-offwhite font-medium hover:text-electric transition-colors">
                    +49 160 817 0468
                  </a>
                  <p className="text-xs text-coolgray mt-0.5">{t.contactSection.phoneHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">{t.contactSection.areaLabel}</h4>
                  <p className="text-offwhite font-medium">{t.contactSection.areaValue}</p>
                  <p className="text-xs text-coolgray mt-0.5">{t.contactSection.areaNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-navy-800/60 border border-navy-700/80 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-electric/20 border border-electric text-electric rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_25px_rgba(0,163,255,0.4)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-offwhite mb-3">{t.contactSection.successTitle}</h3>
                <p className="text-coolgray text-base max-w-md">
                  {t.contactSection.successMsgStart} <strong className="text-electric">info@bundbconnect.de</strong> {t.contactSection.successMsgEnd}
                </p>
                <button 
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-full cursor-pointer"
                >
                  {t.contactSection.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-offwhite mb-2">{t.contactSection.formTitle}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactSection.labelName}</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contactSection.placeholderName} 
                      className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactSection.labelEmail}</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contactSection.placeholderEmail} 
                      className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactSection.labelSubject}</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.contactSection.placeholderSubject} 
                    className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">{t.contactSection.labelMessage}</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactSection.placeholderMessage} 
                    rows={5}
                    className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors resize-none"
                  ></textarea>
                </div>

                {errorMailto && (
                  <div className="p-4 rounded-xl bg-navy-900 border border-electric/40 text-xs text-coolgray space-y-2">
                    <div className="flex items-start gap-2 text-offwhite">
                      <AlertCircle size={16} className="text-electric shrink-0 mt-0.5" />
                      <span>{t.contactSection.sendError}</span>
                    </div>
                    <a
                      href={errorMailto}
                      className="inline-flex items-center gap-2 text-electric font-bold underline"
                    >
                      <Mail size={14} />
                      <span>{t.contactSection.openEmailApp}</span>
                    </a>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-10 py-5 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors self-start mt-2 uppercase cursor-pointer flex items-center gap-3 shadow-[0_0_20px_rgba(0,163,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? t.contactSection.sendingBtn : t.contactSection.submitBtn}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="bg-navy-800/80 border border-navy-700 p-6 md:p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-electric text-xs font-bold uppercase tracking-widest block mb-1">
                {t.contactSection.locationLabel}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-offwhite">
                Otto-Hahn-Str. 27, 32108 Bad Salzuflen
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 border border-electric/40 text-electric text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric hover:text-navy-900 transition-all flex items-center gap-2 shrink-0"
            >
              <span>{t.contactSection.openMaps}</span>
              <MapPin size={16} />
            </a>
          </div>

          <div className="w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden border border-navy-700 bg-navy-950">
            <iframe
              title="B&B Connect UG Standort - Otto-Hahn-Str. 27, 32108 Bad Salzuflen"
              src="https://maps.google.com/maps?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
