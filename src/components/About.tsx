import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { Link } from 'react-router-dom';

export function About() {
  const servicesList = [
    { num: '01', title: 'Erdarbeiten & Tiefbau', desc: 'Kopanje: Schachtarbeiten, Grabenfräsen und professionelle Bodenvorbereitung für Kabeltrassen.' },
    { num: '02', title: 'Glasfaser-Trassenverlegung', desc: 'Polaganje optičkih kablova: Fachgerechte Verlegung von Glasfaserkabeln und Mikrorohrverbänden.' },
    { num: '03', title: 'Pflasterarbeiten & Arealgestaltung', desc: 'Ugradnja behatonki i uređivanje dvorišta: Behaton-Pflasterung, Reinstatement und Oberflächenwiederherstellung.' },
    { num: '04', title: 'Hausanschlüsse & FTTH', desc: 'Kućni priključci i optika: Anbindung von Wohn- und Gewerbeobjekten an das moderne Glasfasernetz.' },
    { num: '05', title: 'Innenmontage & Endmontage', desc: 'Unutrašnje završne montaže faze: Präzise Endmontage von Netzkomponenten in Gebäuden.' },
    { num: '06', title: 'Spleißtechnik & OTDR-Messung', desc: 'Varenje optike i mjerenje optike: Präzisionsspleißen und normgerechte OTDR-Qualitätsmessung.' },
    { num: '07', title: 'Gebäude- & Netzwerkverkabelung', desc: 'Unutrašnje razvlačenje i sprovođenje optičkih i mrežnih kablova: Strukturierte Kabelverlegung in Innenräumen.' },
    { num: '08', title: 'Steck- & Netzwerkdoseninstallation', desc: 'Ugrađivanje optičkih, mrežnih i strujnih utičnica: Fachgerechte Montage aller Anschlussdosen.' },
    { num: '09', title: 'Verteiler-Spleißarbeiten (DP / LVT / POP / UFFE)', desc: 'Varenje DP/LVT/POP/UFFE: Komplexe Rangier- und Spleißarbeiten an Hauptverteilern und POP-Knotenpunkten.' },
  ];

  return (
    <section id="ueber-uns" className="bg-transparent py-24 md:py-36 border-t border-navy-700/50 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.15)]">
            <ArrowUpRight size={16} /> <TextRoll center>Über uns & Unternehmensprofil</TextRoll>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-offwhite tracking-tight uppercase max-w-4xl leading-[1.15]">
            <TextRoll center>B&B CONNECT – Ihre Experten für</TextRoll>{' '}
            <span className="text-electric block mt-2"><TextRoll center>Glasfaser & Netzwerkinfrastruktur</TextRoll></span>
          </h2>
        </div>

        {/* Top Info Grid: Amar Bektasevic & Company Overview */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          
          {/* Image & Leader Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-navy-800 rounded-3xl p-3 border border-navy-700 shadow-2xl relative overflow-hidden group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" 
                  alt="B&B Connect Glasfaser Expertise" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-electric/30">
                  <p className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Geschäftsführung</p>
                  <h3 className="text-2xl font-bold text-offwhite">Amar Bektašević</h3>
                  <p className="text-xs text-coolgray mt-1">Leitung & Strategischer Ausbau der B&B Connect UG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light text-offwhite mb-6 leading-snug">
              Höchste Präzision, Zuverlässigkeit und <span className="text-electric font-bold">deutschlandweite Einsatzbereitschaft</span> aus einer Hand.
            </h3>

            <p className="text-coolgray text-base md:text-lg mb-6 leading-relaxed font-light">
              <strong>B&B Connect</strong> steht für moderne Telekommunikationsinfrastruktur und zukunftssicheren Glasfaserausbau. Unter der Leitung von <strong>Amar Bektašević</strong> haben wir uns als verlässlicher Partner für Großprojekte, Telekommunikationsanbieter und Bauunternehmen etabliert.
            </p>

            <p className="text-coolgray text-base md:text-lg mb-8 leading-relaxed font-light">
              Mit mehr als einem Jahr ununterbrochenem, täglichem Einsatz vor Ort kombinieren wir tiefgreifende Branchenerfahrung mit modernster Spleiß- und Tiefbautechnik. Unser Team realisiert komplexe Netzausbau-Projekte termingerecht und in erstklassiger Ausführungsqualität.
            </p>

            {/* Key Metrics Pill Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <Calendar className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">&gt; 1 Jahr</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">Täglicher Einsatz</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <MapPin className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">Alle Städte</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">In ganz Deutschland</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl flex flex-col items-center text-center">
                <Users className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite mb-0.5">Über 20</span>
                <span className="text-xs text-coolgray uppercase tracking-wider">Fachkräfte & Experten</span>
              </div>
            </div>

            {/* Link to Dedicated Page */}
            <div className="mt-8">
              <Link 
                to="/ueber-uns" 
                className="inline-flex items-center gap-2 bg-electric text-navy-900 font-bold tracking-widest text-xs px-8 py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase shadow-[0_0_15px_rgba(0,163,255,0.3)]"
              >
                <span>ÜBER UNS SEITE ÖFFNEN</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Complete 9 Services Numbered List in Uber Uns */}
        <div className="bg-navy-800/60 border border-navy-700/80 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pb-6 border-b border-navy-700/80 gap-4">
            <div>
              <span className="text-electric text-xs font-bold tracking-widest uppercase">Gesamtes Leistungsspektrum</span>
              <h3 className="text-2xl md:text-3xl font-bold text-offwhite mt-1">Unser Leistungsangebot im Detail</h3>
            </div>
            <span className="bg-electric/20 text-electric text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-electric/30">
              9 Spezialdisziplinen
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((item) => (
              <div 
                key={item.num}
                className="bg-navy-900/90 border border-navy-700/60 p-6 rounded-2xl hover:border-electric/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-electric font-mono group-hover:scale-110 transition-transform">
                      {item.num}.
                    </span>
                    <CheckCircle2 size={18} className="text-electric/40 group-hover:text-electric transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-offwhite mb-2 group-hover:text-electric transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-coolgray leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
