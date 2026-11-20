import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Handshake, Building2, ShieldCheck, MapPin, Users, Calendar, Award, CheckCircle, Send, ArrowUpRight } from 'lucide-react';

export function ZusammenarbeitPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerList = [
    {
      name: "Libra GmbH",
      role: "Strategischer Partner für Tiefbau & Trassentrassierung",
      desc: "Langfristige und erfolgreiche Zusammenarbeit in Großprojekten im Bereich Tiefbau, Kabelzug und Trassenverlegung in Deutschland. Gemeinsam realisieren wir kilometerlange Glasfaserabschnitte fristgerecht und in höchster Güte.",
      tags: ["Tiefbau", "Kabelzug", "Großprojekte"],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "L-Tec GmbH",
      role: "Spezialpartner für Lichtwellenleiter- & Netztechnik",
      desc: "Engineered Cooperation für komplexe Spleißarbeiten, OTDR-Dämpfungsmessungen und PoP-Knotenpunkt-Anbindungen. Vertrauensvolle Synergie zur Beschleunigung des Breitbandausbaus.",
      tags: ["Spleißtechnik", "OTDR-Messung", "PoP / Verteiler"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
    }
  ];

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
            B&B CONNECT UG &bull; PARTNERSCHAFTEN
          </span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              UNSERE ZUSAMMENARBEIT & PARTNER
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              Starke Partnerschaften, <span className="text-electric">Verlässliche Ergebnisse</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              B&B Connect arbeitet eng mit etablierten Branchenführern zusammen. Gemeinsam bündeln wir Kompetenzen, um den Netzausbau in ganz Deutschland zügig und in Spitzenqualität umzusetzen.
            </p>
          </div>
        </div>

        {/* Core Metrics Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <Calendar size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">&gt; 1 Jahr</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">Täglicher Einsatz</span>
            <p className="text-xs text-coolgray mt-2 font-light">Ununterbrochene Praxis- & Baustellenerfahrung in Großprojekten.</p>
          </div>

          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <MapPin size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">Alle Städte</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">Ganz Deutschland</span>
            <p className="text-xs text-coolgray mt-2 font-light">Einsatzflexibel in allen Bundesländern und Metropolregionen.</p>
          </div>

          <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4">
              <Users size={28} />
            </div>
            <span className="text-3xl font-extrabold text-offwhite mb-1">&gt; 20 Radnika</span>
            <span className="text-xs text-electric uppercase font-bold tracking-widest">Qualifizierte Fachkräfte</span>
            <p className="text-xs text-coolgray mt-2 font-light">Erfahrenes Team aus Spleißern, Tiefbauern und Netztechnikern.</p>
          </div>
        </div>

        {/* Detailed Partner Cards */}
        <div className="mb-20">
          <div className="border-b border-navy-700 pb-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-offwhite uppercase tracking-tight">
              Aktuelle Hauptpartner
            </h2>
            <p className="text-coolgray text-sm font-light mt-1">
              Unsere Schlüsselpartner, mit denen wir täglich Großprojekte realisieren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerList.map((partner, index) => (
              <div 
                key={index}
                className="bg-navy-800/80 border border-navy-700 rounded-3xl overflow-hidden shadow-2xl hover:border-electric/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 relative overflow-hidden bg-navy-950">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="bg-electric text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                        Vertragspartner
                      </span>
                      <h3 className="text-3xl font-extrabold text-offwhite">
                        {partner.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xs uppercase tracking-widest text-electric font-bold mb-3">
                      {partner.role}
                    </h4>
                    <p className="text-coolgray text-sm md:text-base font-light leading-relaxed mb-6">
                      {partner.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {partner.tags.map((t, i) => (
                        <span key={i} className="bg-navy-900 border border-navy-700 text-xs text-offwhite px-3 py-1 rounded-lg">
                          ✓ {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-navy-900/60 border-t border-navy-700/80 flex items-center justify-between">
                  <span className="text-xs text-coolgray font-bold uppercase tracking-wider">Status: Aktiv im Projekt</span>
                  <CheckCircle size={18} className="text-electric" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-navy-800/60 border border-navy-700 rounded-3xl p-8 md:p-12 mb-20 shadow-xl">
          <h3 className="text-2xl font-bold text-offwhite mb-8 uppercase tracking-tight text-center">
            Vorteile einer Zusammenarbeit mit B&B Connect
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl">
              <ShieldCheck className="text-electric mb-3" size={28} />
              <h4 className="text-lg font-bold text-offwhite mb-2">Termintreue & Qualität</h4>
              <p className="text-xs text-coolgray font-light leading-relaxed">
                Wir halten vertragliche Fristen ein und liefern nach allen geltenden Telekom- und VDE-Standards.
              </p>
            </div>

            <div className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl">
              <Users className="text-electric mb-3" size={28} />
              <h4 className="text-lg font-bold text-offwhite mb-2">Skalierbares Team</h4>
              <p className="text-xs text-coolgray font-light leading-relaxed">
                Mit über 20 Fachkräften passen wir unsere Kapazitäten flexibel an Ihre Projektgröße an.
              </p>
            </div>

            <div className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl">
              <Award className="text-electric mb-3" size={28} />
              <h4 className="text-lg font-bold text-offwhite mb-2">Zertifizierte Messungen</h4>
              <p className="text-xs text-coolgray font-light leading-relaxed">
                Lückenlose OTDR-Messprotokolle und transparente Dokumentation aller Spleißpunkte.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Application Form */}
        <div className="bg-navy-800/90 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-electric text-xs font-bold uppercase tracking-widest">
              KOOPERATION ANFRAGEN
            </span>
            <h3 className="text-3xl font-extrabold text-offwhite uppercase mt-2">
              Werden Sie unser nächster Partner
            </h3>
            <p className="text-coolgray text-sm md:text-base font-light mt-2">
              Suchen Sie ein zuverlässiges Subunternehmer-Team oder einen Kooperationspartner für den Breitbandausbau? Treten Sie mit uns in Kontakt.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank für Ihre Partneranfrage!'); }}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Unternehmensname</label>
                <input required type="text" placeholder="z. B. Musterbau GmbH" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Ansprechpartner / E-Mail</label>
                <input required type="email" placeholder="kontakt@firma.de" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Kooperationsfeld</label>
              <input type="text" placeholder="z. B. Generalunternehmer Tiefbau, Glasfaseranbieter, Spleißpartner" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Nachricht</label>
              <textarea rows={4} required placeholder="Schildern Sie kurz Ihr Vorhaben oder Ihr Projekt..." className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-electric text-navy-900 font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,163,255,0.3)]">
              <span>PARTNERANFRAGE SENDEN</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
