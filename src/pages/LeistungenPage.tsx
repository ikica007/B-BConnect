import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Flame, Network, Layers, HardDrive, Wrench, Cpu, Radio, Zap, ShieldCheck, Send, Check } from 'lucide-react';

export function LeistungenPage() {
  const [selectedService] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      num: 1,
      code: "01",
      title: "Tiefbau & Erdarbeiten",
      subtitle: "Schachtarbeiten & Trassenvorbereitung",
      shortDesc: "Schachtarbeiten, Grabenfräsen und professionelle Bodenvorbereitung für Trassen.",
      fullDesc: "Präzise Erdaushubarbeiten und Baugrundvorbereitung für den Ausbau moderner Glasfasernetze. Wir führen Schachtarbeiten sowohl im öffentlichen Straßen- und Gehwegbereich als auch auf privaten Grundstücken durch. Einsatz von Kompaktbaggern, Grabenfräsen und grabenloser Verlegetechnik zum Schutz bestehender Oberflächen.",
      highlights: [
        "Handschacht- & Maschinenschachtarbeiten",
        "Gehweg- und Asphaltaufbruch",
        "Schachtsetzarbeiten & Kabelschächte",
        "Schonender Baugruundaushub"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      icon: Flame
    },
    {
      num: 2,
      code: "02",
      title: "Glasfaser-Trassenverlegung",
      subtitle: "Kabelzug & Speedpipes",
      shortDesc: "Fachgerechte Verlegung von Glasfaserkabeln und Mikrorohrverbänden.",
      fullDesc: "Verlegung von Glasfaserkabeln und Speedpipe-Rohrverbänden in offener und geschlossener Bauweise. Wir achten strikt auf minimale Biegeradien, Zugspannungsschutz und normgerechte Sandbettung zur Vermeidung zukünftiger Kabelschäden.",
      highlights: [
        "Speedpipe- & Mikrorohrverlegung",
        "Kabelzug & Einblastechnik",
        "Verlegung von Trassenwarnbändern",
        "Dokumentation des Trassenverlaufs"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
      icon: Network
    },
    {
      num: 3,
      code: "03",
      title: "Pflasterarbeiten & Arealgestaltung",
      subtitle: "Behaton & Reinstatement",
      shortDesc: "Behaton-Pflasterung, Reinstatement und Oberflächenwiederherstellung.",
      fullDesc: "Vollständige Wiederherstellung aller geöffneten Oberflächen. Nach den Erdarbeiten stellen wir Gehwege, Auffahrten und Gartenbereiche in ihren Ursprungszustand wieder her. Professionelles Setzen von Behaton-Steinen, Bordsteinen und Plattenbelägen.",
      highlights: [
        "Fachgerechte Behaton-Pflasterung",
        "Rütteln & Verdichten nach DIN",
        "Gehweg- & Bordeinfassung",
        "Saubere Garten- & Arealaufarbeitung"
      ],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
      icon: Layers
    },
    {
      num: 4,
      code: "04",
      title: "Hausanschlüsse & FTTH / FTTB",
      subtitle: "Gebäudeanbindung & HÜP",
      shortDesc: "Anbindung von Wohn- und Gewerbeobjekten an das moderne Glasfasernetz.",
      fullDesc: "Herstellung kompletter Gebäudeanschlüsse. Wir bohren und dichten Hausdurchführungen druckwasserdicht nach aktuellen Vorgaben ab, verlegen das Kabel vom Gehweg bis in den Keller oder HWR und installieren den Hausübergabepunkt (HÜP).",
      highlights: [
        "Druckwasserdichte Wanddurchführung",
        "HÜP-Montage (Hausübergabepunkt)",
        "FTTH / FTTB Anbindung",
        "Zerstörungsfreie Hauseinführung"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      icon: HardDrive
    },
    {
      num: 5,
      code: "05",
      title: "Gebäude-Innenmontage & Endmontage",
      subtitle: "GF-TA, ONT & Signaltests",
      shortDesc: "Präzise Endmontage von Netzkomponenten in Gebäuden.",
      fullDesc: "Montage und Verkabelung der aktiven und passiven Netzkomponenten im Kundenobjekt. Dazu gehören die Installation des Optical Network Terminals (ONT), des Netzabschlusses (TA/GF-TA) und die saubere Leitungsführung an der Wand.",
      highlights: [
        "GF-TA (Glasfaser-Teilnehmeranschluss)",
        "ONT-Montage & Stromanbindung",
        "Saubere Kabelführung in Kabelkanälen",
        "Funktions- & Signaltest vor Ort"
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      icon: Wrench
    },
    {
      num: 6,
      code: "06",
      title: "Glasfaser-Spleißtechnik & OTDR-Messung",
      subtitle: "Fusionsspleißung & Reflektometrie",
      shortDesc: "Präzisionsspleißen und normgerechte OTDR-Qualitätsmessung.",
      fullDesc: "Hochpräzises Fusionsspleißen von einzelnen Lichtwellenleitern sowie Bänderkabeln im Mikrometerbereich. Nach der Spleißung führen wir normgerechte Dämpfungsmessungen und OTDR-Reflektometermessungen durch und erstellen vollständige Messprotokolle.",
      highlights: [
        "Präzisions-Lichtbogenspleißen",
        "Zertifizierte OTDR-Reflektometrie",
        "Dämpfungsmessung (dB)",
        "Automatisierte LWL-Messprotokolle"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      icon: Cpu
    },
    {
      num: 7,
      code: "07",
      title: "Gebäude- & Netzwerkverkabelung",
      subtitle: "Steigzonen & Netzkanäle",
      shortDesc: "Strukturierte Kabelverlegung in Innenräumen und Steigzonen.",
      fullDesc: "Verlegung von Glasfaser- und Netzwerkkabeln (CAT6a/CAT7) durch mehrere Stockwerke, Steigzonen, Leerrohre und Zwischendecken. Ideal für Mehrfamilienhäuser, Bürogebäude und Industrieanlagen.",
      highlights: [
        "Etagenübergreifender Kabeleinzug",
        "Verlegung in Steigzonen & Kanälen",
        "Brandschutzgerechte Abschottung",
        "CAT6a / CAT7 / LWL Innenverkabelung"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      icon: Radio
    },
    {
      num: 8,
      code: "08",
      title: "Netzwerk- & Steckdoseninstallation",
      subtitle: "OTO-, RJ45- & Stromunterputzdosen",
      shortDesc: "Fachgerechte Montage aller Anschlussdosen und Endgeräte.",
      fullDesc: "Installation, Beschaltung und Beschriftung von optischen OTO-Dosen, RJ45-Netzwerkdosen sowie stromführenden Steckdosen. Höchste Ästhetik und dauerhafte Kontaktqualität für Geschäfts- und Wohnräume.",
      highlights: [
        "Glasfaserdosen (OTO / GF-TA)",
        "RJ45-Datendosen & Patchfelder",
        "Strom- & Kombidosenunterputz/Aufputz",
        "Saubere Beschriftung & Prüfung"
      ],
      image: "https://images.unsplash.com/photo-1517420784964-214615854181?q=80&w=1200&auto=format&fit=crop",
      icon: Zap
    },
    {
      num: 9,
      code: "09",
      title: "Verteiler-Spleißarbeiten (DP / LVT / POP / UFFE)",
      subtitle: "Hauptknoten- & Verteilermontage",
      shortDesc: "Komplexe Spleißarbeiten an Hauptverteilern und POP-Knotenpunkten.",
      fullDesc: "Fachgerechtes Spleißen und Patchen in Verteilerkästen (DP), LVT-Verteilern, UFFE-Spleißgehäusen und zentralen Point-of-Presence (PoP) Netzwerkknoten. Einbinden von Hauptkabeln in Verteilerstrukturen mit höchster Systemzuverlässigkeit.",
      highlights: [
        "PoP-Netzknotenpunkte (Point of Presence)",
        "DP / LVT Verteiler-Spleißung",
        "UFFE Gehäuse- & Kassettenspleißung",
        "High-Density LWL-Kassettenmanagement"
      ],
      image: "https://images.unsplash.com/photo-1520869578617-557561d7b114?q=80&w=1200&auto=format&fit=crop",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-28 pb-24 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-electric font-bold tracking-widest text-xs uppercase bg-navy-800/90 border border-electric/30 px-5 py-2.5 rounded-full hover:bg-electric hover:text-navy-900 transition-all shadow-[0_0_15px_rgba(0,163,255,0.2)]"
          >
            <ArrowLeft size={18} />
            <span>Zurück zur Startseite</span>
          </Link>

          <span className="text-xs uppercase tracking-widest text-coolgray hidden sm:inline-block font-mono">
            B&B CONNECT UG &bull; SPEZIALLEISTUNGEN
          </span>
        </div>

        {/* Page Hero Header */}
        <div className="bg-gradient-to-br from-navy-800/90 via-navy-900 to-navy-950 border border-navy-700 p-8 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-electric text-xs font-bold tracking-[0.25em] mb-4 uppercase bg-electric/10 border border-electric/20 px-4 py-2 rounded-full inline-block">
              UNSERE LEISTUNGEN IN DEUTSCHLAND
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-offwhite uppercase tracking-tight mt-4 leading-tight">
              Komplette Glasfaser- & <span className="text-electric">Tiefbaulösungen</span>
            </h1>
            <p className="text-coolgray text-base md:text-xl font-light mt-6 leading-relaxed">
              B&B Connect ist Ihr spezialisierter Partner für den lückenlosen Netzausbau. Wir bieten alle 9 Kerndisziplinen der modernen Breitbandinfrastruktur aus einer Hand.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-navy-700/80 text-xs font-bold text-coolgray">
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> 9 Spezialdisziplinen
              </span>
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> OTDR-Messprotokolle
              </span>
              <span className="flex items-center gap-2 text-offwhite">
                <CheckCircle2 size={16} className="text-electric" /> Bundesweit im Einsatz
              </span>
            </div>
          </div>
        </div>

        {/* Complete 9 Detailed Services List */}
        <div className="space-y-12 mb-20">
          <div className="border-b border-navy-700 pb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-offwhite uppercase tracking-tight">
              Alle 9 Arbeitsphasen im Überblick
            </h2>
            <p className="text-coolgray text-sm font-light mt-1">
              Klicken Sie auf eine Leistung, um detaillierte Spezifikationen einzusehen.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {allServices.map((service) => {
              const IconComp = service.icon;
              const isSelected = selectedService === service.num;

              return (
                <div 
                  key={service.num}
                  className={`lg:col-span-12 bg-navy-800/80 border transition-all duration-300 rounded-3xl overflow-hidden shadow-xl ${
                    isSelected ? 'border-electric shadow-[0_0_25px_rgba(0,163,255,0.25)]' : 'border-navy-700 hover:border-electric/50'
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                    
                    {/* Left: Image & Number */}
                    <div className="md:col-span-4 relative rounded-2xl overflow-hidden h-56 md:h-64 bg-navy-950">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-navy-900/90 border border-electric/40 text-electric font-mono font-extrabold text-sm px-3.5 py-1.5 rounded-full shadow-lg">
                        {service.code}
                      </div>
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-navy-900/90 text-electric flex items-center justify-center border border-white/10">
                        <IconComp size={20} />
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs uppercase tracking-widest text-electric font-bold">
                            {service.subtitle}
                          </span>
                          <span className="text-xs font-mono text-coolgray bg-navy-900 px-3 py-1 rounded-full border border-navy-700">
                            B&B Standard
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-offwhite mb-3">
                          {service.num}. {service.title}
                        </h3>

                        <p className="text-coolgray text-sm md:text-base font-light leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-6 bg-navy-900/80 p-4 rounded-xl border border-navy-700/60">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-offwhite font-medium">
                              <Check size={14} className="text-electric shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-navy-700/60 flex items-center justify-between">
                        <span className="text-xs text-coolgray uppercase tracking-wider font-bold">
                          Qualitätsgeprüfte Ausführung
                        </span>
                        <a 
                          href="#anfrage" 
                          className="text-xs font-bold text-electric hover:underline uppercase tracking-wider flex items-center gap-1"
                        >
                          <span>Dieses Gewerk anfragen</span> &rarr;
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Service Request Section */}
        <div id="anfrage" className="bg-navy-800/90 border border-navy-700 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-electric text-xs font-bold uppercase tracking-widest">
              DIREKTANFRAGE
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-offwhite uppercase mt-2">
              Leistung für Ihr Projekt anfordern
            </h3>
            <p className="text-coolgray text-sm md:text-base font-light mt-2">
              Wählen Sie die benötigten Gewerke aus oder schreiben Sie uns Ihre Anforderungen. Unser Team meldet sich umgehend.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Ihre Anfrage wurde gesendet.'); }}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Name / Firma</label>
                <input required type="text" placeholder="Ihre Firma oder Name" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">E-Mail Adresse</label>
                <input required type="email" placeholder="info@ihre-firma.de" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Gewünschte Arbeiten</label>
              <select className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric">
                <option value="alle">Alle 9 Gewerke (Komplettausbau)</option>
                {allServices.map((s) => (
                  <option key={s.num} value={s.title}>{s.num}. {s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-coolgray mb-2 font-bold">Projektbeschreibung</label>
              <textarea rows={4} required placeholder="Beschreiben Sie Standort, Umfang (m Meter Trasse, Anzahl Anschlüsse etc.)" className="w-full bg-navy-900 border border-navy-700 text-offwhite px-4 py-3 rounded-xl focus:outline-none focus:border-electric resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-electric text-navy-900 font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-electric-dim hover:text-offwhite transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,163,255,0.3)]">
              <span>ANFRAGE ABSENDEN</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
