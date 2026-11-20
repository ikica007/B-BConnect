import { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Send, Clock, CheckCircle2, Building2, User, Globe } from 'lucide-react';

export function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span>Zurück zur Startseite</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-coolgray hidden sm:inline-block font-mono">
            B&B CONNECT UG &bull; KONTAKT & ANFAHRT
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              KONTAKT & STANDORT
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              Sprechen Sie mit <span className="text-electric">B&B Connect</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              Ob Projektanfrage, Partnerschaftsangebot oder technische Auskunft – unser Team steht Ihnen jederzeit gerne zur Verfügung.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-800/90 border border-navy-700 p-8 rounded-3xl shadow-xl backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">Unternehmensdaten</span>
              <h2 className="text-2xl font-bold text-offwhite mb-6">B&B Connect UG</h2>

              <div className="space-y-6 text-coolgray font-light">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Standort & Adresse</h3>
                    <p className="text-offwhite font-medium text-base">Otto-Hahn-Str. 27</p>
                    <p className="text-sm">32108 Bad Salzuflen, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Offizielle E-Mail</h3>
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
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Telefonkontakt</h3>
                    <a href="tel:+4952229809900" className="text-offwhite font-medium text-base hover:text-electric transition-colors">
                      +49 (0) 5222 / 980 99 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <User size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Geschäftsführung</h3>
                    <p className="text-offwhite font-medium">Amar Bektašević</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Einsatzgebiet</h3>
                    <p className="text-offwhite font-medium">Alle Städte in ganz Deutschland</p>
                    <p className="text-xs text-coolgray mt-0.5">&gt; 20 Fachkräfte vor Ort</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/60 border border-navy-700 p-6 rounded-2xl flex items-center gap-4">
              <Clock className="text-electric shrink-0" size={28} />
              <div>
                <h4 className="text-sm font-bold text-offwhite">Bürozeiten</h4>
                <p className="text-xs text-coolgray">Montag &ndash; Freitag: 08:00 &ndash; 18:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-navy-800/80 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-electric/20 border border-electric text-electric rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_25px_rgba(0,163,255,0.4)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-offwhite mb-3">Vielen Dank!</h3>
                <p className="text-coolgray text-base max-w-md font-light leading-relaxed">
                  Ihre Nachricht wurde erfolgreich an <strong className="text-electric">info@bundbconnect.de</strong> übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-full"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-1">SCHNELLE ANFRAGE</span>
                  <h3 className="text-2xl font-extrabold text-offwhite uppercase">Schreiben Sie uns direkt</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Vor- & Nachname</label>
                    <input 
                      type="text" 
                      required
                      placeholder="z. B. Max Mustermann" 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">E-Mail Adresse</label>
                    <input 
                      type="email" 
                      required
                      placeholder="ihre.mail@firma.de" 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Telefonnummer</label>
                    <input 
                      type="tel" 
                      placeholder="+49 123 456789" 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Betreff</label>
                    <input 
                      type="text" 
                      placeholder="Anfrage, Glasfaser, Tiefbau..." 
                      className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Ihre Nachricht</label>
                  <textarea 
                    required
                    placeholder="Beschreiben Sie Ihr Anliegen, Projekt oder Ihre Fragen..." 
                    rows={5}
                    className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-10 py-5 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                >
                  <span>NACHRICHT JETZT SENDEN</span>
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
              <span className="text-electric text-xs font-bold uppercase tracking-widest">GOOGLE MAPS NAVI</span>
              <h3 className="text-2xl font-bold text-offwhite">Otto-Hahn-Str. 27, 32108 Bad Salzuflen</h3>
            </div>
            <a 
              href="https://maps.google.com/?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-navy-900 border border-electric/40 text-electric text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric hover:text-navy-900 transition-all flex items-center gap-2"
            >
              <span>Auf Google Maps öffnen</span>
              <MapPin size={16} />
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-navy-700 bg-navy-950">
            <iframe 
              src="https://maps.google.com/maps?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
