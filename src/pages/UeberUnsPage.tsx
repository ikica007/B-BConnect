import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Calendar } from 'lucide-react';

export function UeberUnsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreServices = [
    { num: "01", title: "Tiefbau & Erdarbeiten", desc: "Professionelle Erdarbeiten & Schachtbau" },
    { num: "02", title: "Glasfaser-Trassenverlegung", desc: "Kabelzug & Speedpipes Rohrverbände" },
    { num: "03", title: "Pflasterarbeiten & Arealgestaltung", desc: "Behaton-Pflasterung & Reinstatement" },
    { num: "04", title: "Hausanschlüsse & FTTH", desc: "HÜP & Druckwasserdichte Durchführung" },
    { num: "05", title: "Innenmontage & Endmontage", desc: "GF-TA, ONT & Signaltests vor Ort" },
    { num: "06", title: "Spleißtechnik & OTDR-Messung", desc: "Präzisionsfusionsspleißen & Messprotokolle" },
    { num: "07", title: "Gebäude- & Netzwerkverkabelung", desc: "Steigzonen, Kanäle & CAT7 Verkabelung" },
    { num: "08", title: "Steck- & Netzwerkdoseninstallation", desc: "OTO-, RJ45- & Stromanschlussdosen" },
    { num: "09", title: "Verteiler- & Knotenpunktspleißung", desc: "Spleißung an DP / LVT / POP / UFFE Knoten" }
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
            B&B CONNECT UG &bull; UNTERNEHMENSPROFIL
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              ÜBER B&B CONNECT UG
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              Geleitet von <span className="text-electric">Amar Bektašević</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              B&B Connect UG steht für Fachkompetenz, Verlässlichkeit und Innovation im Bereich der Glasfaser- und Netzwerkinfrastruktur. Mit über 20 hochqualifizierten Fachkräften sind wir in allen Städten Deutschlands im täglichen Einsatz.
            </p>
          </div>
        </div>

        {/* Leadership & Profile Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5">
            <div className="bg-navy-800 rounded-3xl p-3 border border-navy-700 shadow-2xl relative overflow-hidden">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" 
                  alt="Amar Bektasevic B&B Connect" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-electric/30">
                  <p className="text-xs uppercase tracking-widest text-electric font-bold mb-1">Geschäftsführung</p>
                  <h3 className="text-2xl font-bold text-offwhite">Amar Bektašević</h3>
                  <p className="text-xs text-coolgray mt-1">Leitung & Strategischer Netzbau &bull; B&B Connect UG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-offwhite uppercase">
              Qualität, Präzision & Deutschlandweiter Einsatz
            </h2>
            <p className="text-coolgray text-base md:text-lg font-light leading-relaxed">
              In der heutigen Zeit ist eine schnelle, stabile Telekommunikationsinfrastruktur das Fundament für Wirtschaft und Lebensqualität. <strong>B&B Connect UG</strong> unter der Leitung von <strong>Amar Bektašević</strong> hat es sich zur Aufgabe gemacht, den Glasfaserausbau in Deutschland mit höchster handwerklicher und technischer Perfektion voranzutreiben.
            </p>
            <p className="text-coolgray text-base md:text-lg font-light leading-relaxed">
              Mit <strong>mehr als einem Jahr ununterbrochener, täglicher Arbeit auf Baustellen</strong> quer durch alle Bundesländer verfügen unsere Mitarbeiter über profunde Praxiserfahrung – von Erdarbeiten und Tiefbau bis hin zum komplexen Spleißen in Point-of-Presence (PoP) Hauptverteilern.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <Calendar className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">&gt; 1 Jahr</span>
                <span className="text-xs text-coolgray uppercase font-bold">Täglicher Betrieb</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <MapPin className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">Ganz Deutschland</span>
                <span className="text-xs text-coolgray uppercase font-bold">In allen Städten</span>
              </div>
              <div className="bg-navy-800/80 border border-navy-700 p-5 rounded-2xl">
                <Users className="text-electric mb-2" size={24} />
                <span className="text-xl font-bold text-offwhite block">&gt; 20 Spezialisten</span>
                <span className="text-xs text-coolgray uppercase font-bold">Fachkräfte vor Ort</span>
              </div>
            </div>
          </div>

        </div>

        {/* 9 Work Disciplines Summary */}
        <div className="bg-navy-800/60 border border-navy-700 rounded-3xl p-8 md:p-12 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-navy-700 gap-4">
            <div>
              <span className="text-electric text-xs font-bold uppercase tracking-widest">GESAMTES TÄTIGKEITSFELD</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-offwhite mt-1">Alle 9 Kernleistungen auf einen Blick</h3>
            </div>
            <Link to="/leistungen" className="bg-electric text-navy-900 font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider hover:bg-electric-dim transition-colors">
              Alle Details ansehen &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreServices.map((s) => (
              <div key={s.num} className="bg-navy-900/90 border border-navy-700/80 p-5 rounded-2xl flex items-start gap-4">
                <span className="text-lg font-mono font-extrabold text-electric">{s.num}.</span>
                <div>
                  <h4 className="text-sm font-bold text-offwhite">{s.title}</h4>
                  <p className="text-xs text-coolgray font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Address & Contact Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-electric text-xs font-bold uppercase tracking-widest">UNTERNEHMENSSITZ</span>
            <h3 className="text-2xl font-bold text-offwhite mt-1">B&B Connect UG</h3>
            <p className="text-coolgray text-sm mt-1">Otto-Hahn-Str. 27, 32108 Bad Salzuflen, Deutschland</p>
            <p className="text-coolgray text-sm mt-1">E-Mail: <a href="mailto:info@bundbconnect.de" className="text-electric underline">info@bundbconnect.de</a></p>
          </div>

          <Link 
            to="/kontakt"
            className="bg-electric text-navy-900 font-bold tracking-widest text-xs px-8 py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors uppercase shrink-0 shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          >
            KONTAKT SEITE ÖFFNEN
          </Link>
        </div>

      </div>
    </div>
  );
}
