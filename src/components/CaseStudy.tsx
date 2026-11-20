import { ArrowUpRight, Handshake, Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { Link } from 'react-router-dom';

export function CaseStudy() {
  const partners = [
    {
      name: "Libra GmbH",
      role: "Strategischer Infrastrukturpartner",
      desc: "Gemeinsame Durchführung von Großprojekten im Bereich Glasfaser-Trassenbau, Kabelzug und komplexe Netzverteilung.",
      tag: "Aktiver Partner",
      icon: Building2
    },
    {
      name: "L-Tec GmbH",
      role: "Telekommunikations- & Technikpartner",
      desc: "Kooperation bei anspruchsvollen Spleißarbeiten, Messungen (OTDR) und technischen Endmontagen für moderne Breitbandnetze.",
      tag: "Aktiver Partner",
      icon: Handshake
    }
  ];

  return (
    <section id="zusammenarbeit" className="relative py-28 md:py-40 bg-transparent flex items-center justify-center border-t border-navy-700/50">
      
      {/* Background glow & subtle overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric/10 blur-[180px] rounded-full" />
      </div>
      
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.15)]">
            <ArrowUpRight size={16} /> <TextRoll center>UNSERE ZUSAMMENARBEIT</TextRoll>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite tracking-tight uppercase max-w-4xl leading-tight">
            <TextRoll center>Starke Partnerschaften für</TextRoll>{' '}
            <span className="text-electric block mt-2"><TextRoll center>Höchste Netzqualität</TextRoll></span>
          </h2>
          <p className="text-coolgray text-base md:text-xl font-light max-w-3xl mt-6">
            Zuverlässigkeit und Erfolg entstehen durch vertrauensvolle Zusammenarbeit. Wir sind stolz auf die partnerschaftliche Kooperation mit führenden Unternehmen der Branche.
          </p>
        </div>

        {/* Partners Showcase Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          {partners.map((partner, idx) => {
            const IconComp = partner.icon;
            return (
              <div 
                key={idx}
                className="bg-navy-800/90 border border-navy-700 p-8 md:p-10 rounded-3xl backdrop-blur-xl hover:border-electric/60 transition-all duration-500 hover:-translate-y-1 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-bl-full pointer-events-none group-hover:bg-electric/20 transition-colors" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-electric/20 border border-electric/40 flex items-center justify-center text-electric">
                    <IconComp size={28} />
                  </div>
                  <span className="bg-electric/10 border border-electric/30 text-electric text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {partner.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-offwhite mb-2 group-hover:text-electric transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-electric font-bold mb-4">
                  {partner.role}
                </p>
                <p className="text-coolgray text-sm md:text-base leading-relaxed font-light mb-6">
                  {partner.desc}
                </p>

                <div className="flex items-center gap-2 text-xs text-electric font-bold pt-4 border-t border-navy-700/80">
                  <CheckCircle size={16} />
                  <span>Langfristige Projektkooperation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Performance Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-electric text-xs font-bold tracking-widest uppercase mb-1 block">
              Zahlen & Fakten
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-offwhite">
              Nahtloser Einsatz in ganz Deutschland
            </h3>
            <p className="text-coolgray text-sm md:text-base mt-2 max-w-xl font-light">
              Mehr als ein Jahr ununterbrochener Betrieb, über 20 spezialisierte Fachkräfte und bundesweite Flexibilität.
            </p>
          </div>
          <Link 
            to="/zusammenarbeit" 
            className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-8 py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(0,163,255,0.3)] flex items-center gap-2"
          >
            <span>PARTNERSEITE ÖFFNEN</span>
            <ExternalLink size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
