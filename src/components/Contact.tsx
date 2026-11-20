import { useState, FormEvent } from 'react';
import { TextRoll } from './TextRoll';
import { MapPin, Mail, Phone, Send, Clock, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-transparent py-24 md:py-36 border-t border-navy-700/50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-electric text-xs font-bold tracking-[0.25em] mb-2 uppercase bg-electric/10 border border-electric/20 px-4 py-1.5 rounded-full">
            KONTAKT & ANFRAGE
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight">
            <TextRoll center>Nehmen Sie</TextRoll>{' '}
            <span className="text-electric"><TextRoll center>Kontakt auf</TextRoll></span>
          </h2>
          <p className="text-coolgray text-base md:text-lg max-w-2xl mt-4 font-light">
            Wir freuen uns auf Ihre Projektanfrage. Schreiben Sie uns eine Nachricht oder rufen Sie uns direkt an.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Contact Information & Details */}
          <div className="lg:col-span-5 bg-navy-800/90 border border-navy-700 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-offwhite mb-6">
              B&B Connect UG
            </h3>
            
            <div className="space-y-6 text-coolgray font-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Adresse</h4>
                  <p className="text-offwhite font-medium">Otto-Hahn-Str. 27</p>
                  <p className="text-sm">32108 Bad Salzuflen, Deutschland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">E-Mail</h4>
                  <a href="mailto:info@bundbconnect.de" className="text-offwhite font-medium hover:text-electric transition-colors">
                    info@bundbconnect.de
                  </a>
                  <p className="text-xs text-coolgray mt-0.5">Schnelle Antwort garantiert</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Telefon</h4>
                  <a href="tel:+4952229809900" className="text-offwhite font-medium hover:text-electric transition-colors">
                    +49 (0) 5222 / 980 99 00
                  </a>
                  <p className="text-xs text-coolgray mt-0.5">Mo. - Fr. 08:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Einsatzgebiet</h4>
                  <p className="text-offwhite font-medium">Bundesweit (Ganz Deutschland)</p>
                  <p className="text-xs text-coolgray mt-0.5">&gt; 20 hochqualifizierte Fachkräfte vor Ort</p>
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
                <h3 className="text-3xl font-bold text-offwhite mb-3">Vielen Dank!</h3>
                <p className="text-coolgray text-base max-w-md">
                  Ihre Nachricht wurde erfolgreich an <strong className="text-electric">info@bundbconnect.de</strong> übermittelt. Wir setzen uns umgehend mit Ihnen in Verbindung.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-bold text-electric hover:underline uppercase tracking-wider bg-navy-900 border border-electric/30 px-6 py-3 rounded-full"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-offwhite mb-2">Nachricht senden</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Vor- & Nachname</label>
                    <input 
                      type="text" 
                      required
                      placeholder="z. B. Max Mustermann" 
                      className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">E-Mail Adresse</label>
                    <input 
                      type="email" 
                      required
                      placeholder="ihre.mail@firma.de" 
                      className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Telefonnummer / Betreff</label>
                  <input 
                    type="text" 
                    placeholder="Anfrage zu Glasfaser-, Tiefbau- oder Spleißarbeiten" 
                    className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Ihre Nachricht</label>
                  <textarea 
                    required
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihre Anforderung..." 
                    rows={5}
                    className="w-full bg-navy-900/90 border border-navy-700 text-offwhite px-5 py-3.5 rounded-xl focus:outline-none focus:border-electric transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-10 py-5 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors self-start mt-2 uppercase cursor-pointer flex items-center gap-3 shadow-[0_0_20px_rgba(0,163,255,0.3)]"
                >
                  <span>NACHRICHT SENDEN</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <span className="text-electric text-xs font-bold uppercase tracking-widest">Unternehmensstandort</span>
              <h3 className="text-2xl font-bold text-offwhite mt-1">Otto-Hahn-Str. 27, 32108 Bad Salzuflen</h3>
            </div>
            <a 
              href="https://maps.google.com/?q=Otto-Hahn-Str.+27,+32108+Bad+Salzuflen,+Germany" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 md:mt-0 text-xs font-bold text-electric hover:underline uppercase tracking-wider flex items-center gap-2"
            >
              <span>Auf Google Maps öffnen</span>
              <MapPin size={16} />
            </a>
          </div>

          <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden border border-navy-700 shadow-2xl relative bg-navy-950">
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
    </section>
  );
}

