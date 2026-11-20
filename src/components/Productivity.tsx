import { ArrowUpRight, Wrench, ShieldCheck, Cpu, HardDrive, Network, Radio, Layers, Zap, Flame, ExternalLink } from 'lucide-react';
import { TextRoll } from './TextRoll';
import { Link } from 'react-router-dom';

export function Productivity() {
  const servicesData = [
    {
      num: "01",
      title: "Tiefbau & Erdarbeiten",
      subtitle: "Trassenvorbereitung & Schachtbau",
      description: "Fachgerechte Erdaushubarbeiten, Schachtbau, Grabenfräsen und Oberflächenvorbereitung für den zukunftssicheren Leitungsbau.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
      icon: Flame
    },
    {
      num: "02",
      title: "Glasfaser-Trassenverlegung",
      subtitle: "Kabelzug & Speedpipes",
      description: "Präzise Verlegung von Glasfaserkabeln, Mikrorohrverbänden (Speedpipes) und Kabelschutzrohren nach höchsten Standards.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      icon: Network
    },
    {
      num: "03",
      title: "Pflasterarbeiten & Arealgestaltung",
      subtitle: "Behaton-Pflasterung & Reinstatement",
      description: "Professionelle Reinstatement-Arbeiten, Behaton-Pflasterung, Gehweg-Wiederherstellung und saubere Umfeldgestaltung.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
      icon: Layers
    },
    {
      num: "04",
      title: "Hausanschlüsse & FTTH / FTTB",
      subtitle: "HÜP & Wanddurchführung",
      description: "Herstellung kompletter Gebäudeanschlüsse, Wanddurchführungen, Hauseinführungen und FTTH-Anbindungen.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      icon: HardDrive
    },
    {
      num: "05",
      title: "Gebäude-Innenmontage & Endmontage",
      subtitle: "GF-TA, ONT & Signaltests",
      description: "Saubere und fachgerechte Installation von HÜP-, TA- und ONT-Komponenten in Wohn- und Gewerbeeinheiten.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      icon: Wrench
    },
    {
      num: "06",
      title: "Glasfaser-Spleißtechnik & OTDR",
      subtitle: "Spleißung & Dämpfungsmessung",
      description: "Hochpräzises Lichtwellenleiter-Fusionsspleißen sowie zertifizierte OTDR-Dämpfungsmessungen mit Messprotokollierung.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      icon: Cpu
    },
    {
      num: "07",
      title: "Gebäude- & Netzwerkverkabelung",
      subtitle: "Steigzonen & Kanäle",
      description: "Strukturierte Verlegung von Glasfaser- und CAT7-Netzwerkkabeln über Steigzonen, Kanäle und Zwischendecken.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      icon: Radio
    },
    {
      num: "08",
      title: "Netzwerk- & Steckdoseninstallation",
      subtitle: "OTO-, RJ45- & Stromanschlüsse",
      description: "Installation und Beschaltung von Glasfaserdosen (OTO), RJ45-Netzwerkdosen sowie stromführenden Steckdosen.",
      image: "https://images.unsplash.com/photo-1517420784964-214615854181?q=80&w=800&auto=format&fit=crop",
      icon: Zap
    },
    {
      num: "09",
      title: "Verteiler- & Hauptknotenspleißung",
      subtitle: "DP / LVT / POP / UFFE Knoten",
      description: "Komplexe Spleiß-, Rangier- und Inbetriebnahmesysteme an Verteilern, PoP-Knotenpunkten, LVT-, DP- und UFFE-Verteilern.",
      image: "https://images.unsplash.com/photo-1520869578617-557561d7b114?q=80&w=800&auto=format&fit=crop",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="leistungen" className="bg-transparent py-24 md:py-36 border-t border-navy-700/50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.15)]">
            <ArrowUpRight size={16} /> <TextRoll center>UNSERE LEISTUNGEN</TextRoll>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-offwhite tracking-tight uppercase max-w-4xl leading-[1.15]">
            <TextRoll center>Professionelle Lösungen für</TextRoll>{' '}
            <span className="text-electric block mt-2"><TextRoll center>Moderne Netzwerkinfrastrukturen</TextRoll></span>
          </h2>
          <p className="text-coolgray text-base md:text-xl font-light max-w-2xl mt-6">
            Von den ersten Tiefbauarbeiten bis zur hochpräzisen Verteilermessung – B&B Connect bietet das vollständige Spektrum professioneller Glasfaserleistungen.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.num}
                className="bg-navy-800/80 border border-navy-700 rounded-3xl overflow-hidden hover:border-electric/60 transition-all duration-500 hover:-translate-y-2 group shadow-xl flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="h-52 relative overflow-hidden bg-navy-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-navy-900/90 backdrop-blur-md border border-electric/40 text-electric font-mono font-extrabold text-sm px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,163,255,0.3)]">
                    {item.num}
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-electric group-hover:border-electric group-hover:bg-electric group-hover:text-navy-900 transition-all duration-300">
                    <IconComp size={20} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-electric font-bold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-offwhite mb-3 group-hover:text-electric transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-coolgray text-sm leading-relaxed font-light mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy-700/60 flex items-center justify-between text-xs font-bold text-coolgray group-hover:text-electric transition-colors">
                    <span className="uppercase tracking-wider">Qualitätsgarantie</span>
                    <span>✓ Standardisiert</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action - Dedicated Page Link */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link 
            to="/leistungen" 
            className="inline-flex items-center gap-3 bg-electric text-navy-900 font-bold tracking-widest text-xs px-10 py-5 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase shadow-[0_0_25px_rgba(0,163,255,0.3)]"
          >
            <span>EIGENE SEITE FÜR LEISTUNGEN ÖFFNEN</span>
            <ExternalLink size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
