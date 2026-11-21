import glasfaserImg from '../assets/images/glasfaser_service_work_1795273843561.jpg';
import tiefbauImg from '../assets/images/tiefbau_service_work_1795273844419.jpg';
import ladeinfrastrukturImg from '../assets/images/ladeinfrastruktur_service_work_1795273843761.jpg';
import { Language } from '../i18n/translations';

export type CategorySlug = 'glasfaser' | 'tiefbau' | 'ladeinfrastruktur';

export interface SubcategoryContent {
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string[];
  highlights: string[];
  processSteps: { step: string; title: string; desc: string }[];
  technicalNote: string;
}

export interface SubcategoryItem {
  slug: string;
  code: string;
  image: string;
  content: Record<Language, SubcategoryContent>;
}

export interface CategoryContent {
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceCategory {
  slug: CategorySlug;
  number: string;
  image: string;
  iconKey: 'fiber' | 'civil' | 'ev';
  content: Record<Language, CategoryContent>;
  subcategories: SubcategoryItem[];
}

export const serviceCatalog: ServiceCategory[] = [
  {
    slug: 'glasfaser',
    number: '01',
    image: glasfaserImg,
    iconKey: 'fiber',
    content: {
      de: {
        title: 'Glasfaser',
        subtitle: 'Montage, Spleißtechnik, Einblasen & Aktivierung',
        description:
          'Vom Hausübergabepunkt bis zum PoP-Hauptverteiler: Wir übernehmen die vollständige passive und aktive Glasfasertechnik nach höchsten Netzbetreiber-Standards.',
      },
      bs: {
        title: 'Glasfaser (Optika)',
        subtitle: 'Montaža, varenje, upuhivanje, mjerenja i aktivacija',
        description:
          'Od kućnog priključka do glavnih PoP čvorišta: izvodimo kompletnu pasivnu i aktivnu optičku tehniku po najvišim standardima operatera u Njemačkoj.',
      },
    },
    subcategories: [
      {
        slug: 'glasfasermontage',
        code: '1.1',
        image: glasfaserImg,
        content: {
          de: {
            title: 'Glasfasermontage (HÜP, NT, APL)',
            tagline: 'Fachgerechte End- und Übergabemontage im Gebäude',
            shortDesc:
              'Präzise Installation und Beschaltung von HÜP, Netzabschluss (NT/ONT) und Abschlusspunkt Linientechnik (APL).',
            fullDesc: [
              'Wir übernehmen die komplette mechanische und optische Montage der Gebäudekomponenten im Rahmen des FTTH- und FTTB-Ausbaus. Dazu gehört das fachgerechte Setzen des Hausübergabepunkts (HÜP), des Abschlusspunkts Linientechnik (APL) sowie des optischen Netzabschlusses (NT/ONT) im Technikraum oder direkt in den Wohneinheiten.',
              'Unsere Techniker achten auf normgerechte Biegeradien, saubere Kabelführung in Aufputz- oder Unterputzkanälen sowie eindeutige Beschriftung nach Vorgaben des jeweiligen Netzbetreibers.',
            ],
            highlights: [
              'Montage von HÜP, APL und Teilnehmeranschlussdosen (GF-TA)',
              'Installation und Positionierung von NT / ONT-Endgeräten',
              'Saubere Leitungsführung im Gebäude und in Steigzonen',
              'Vollständige Dokumentation mit Seriennummern und Fotos',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Standortprüfung',
                desc: 'Begehung des Hausanschlussraums und Festlegung der optimalen Montageposition.',
              },
              {
                step: '02',
                title: 'Komponentenmontage',
                desc: 'Befestigung von HÜP, APL und GF-TA sowie saubere Zugentlastung.',
              },
              {
                step: '03',
                title: 'Funktionsabnahme',
                desc: 'Optische Sichtprüfung, Beschriftung und Übergabe an den Kunden bzw. Netzbetreiber.',
              },
            ],
            technicalNote: 'Ausführung nach VDE- und Telekom-Richtlinien für FTTH/FTTB-Innenausbau.',
          },
          bs: {
            title: 'Glasfasermontage (HÜP, NT, APL)',
            tagline: 'Stručna montaža priključnih i završnih jedinica u objektu',
            shortDesc:
              'Precizna ugradnja i povezivanje HÜP kutija, optičkog mrežnog terminala (NT/ONT) i APL završnih tačaka.',
            fullDesc: [
              'Izvodimo kompletnu mehaničku i optičku montažu opreme unutar objekata u sklopu FTTH i FTTB projekata. To obuhvata stručno postavljanje kućne priključne kutije (HÜP), linijske završne tačke (APL) te mrežnog terminala (NT/ONT) u tehničkim prostorijama ili stanovima.',
              'Naši tehničari strogo paze na dozvoljene radijuse savijanja vlakana, uredno vođenje kablova kroz kanalice i jasno označavanje u skladu sa standardima mrežnog operatera.',
            ],
            highlights: [
              'Montaža HÜP, APL i optičkih utičnica (GF-TA)',
              'Ugradnja i pozicioniranje NT / ONT uređaja',
              'Uredno vođenje kablova kroz objekte i vertikale',
              'Kompletna foto-dokumentacija i evidencija serijskih brojeva',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Pregled objekta',
                desc: 'Provjera priključne prostorije i određivanje optimalne tačke za montažu.',
              },
              {
                step: '02',
                title: 'Montaža opreme',
                desc: 'Fiksiranje HÜP, APL i GF-TA jedinica uz urednu zaštitu kablova.',
              },
              {
                step: '03',
                title: 'Završna provjera',
                desc: 'Kontrola spojeva, označavanje i predaja spremne instalacije.',
              },
            ],
            technicalNote: 'Izvedba u skladu sa VDE i Telekom smjernicama za FTTH/FTTB instalacije.',
          },
        },
      },
      {
        slug: 'glasfaserspleissen',
        code: '1.2',
        image: glasfaserImg,
        content: {
          de: {
            title: 'Glasfaserspleißen (HÜP, DP, NVT, POP, MUFFE)',
            tagline: 'Hochpräzises Fusionsspleißen auf allen Netzebenen',
            shortDesc:
              'Verlustarmes Lichtbogenspleißen an HÜP, Distribution Points (DP), Netzverteilern (NVT), PoP-Standorten und Muffen.',
            fullDesc: [
              'Das Fusionsspleißen bildet das technische Herzstück jedes Glasfasernetzes. Unsere zertifizierten Spleißteams arbeiten mit modernsten Kernzentrierungs-Spleißgeräten auf sämtlichen Ebenen der Netzinfrastruktur – vom einzelnen Hausübergabepunkt (HÜP) über Distribution Points (DP) und Netzverteiler (NVT) bis hin zu Muffen im Erdreich und zentralen PoP-Hauptverteilern.',
              'Jede Faserablage erfolgt sauber strukturiert in Spleißkassetten mit minimalen Dämpfungswerten und lückenloser Belegungsdokumentation.',
            ],
            highlights: [
              'Spleißarbeiten an HÜP, DP, NVT, PoP-Knoten und Erdmuffen',
              'Einsatz moderner 3-Achsen-Kernzentrierungs-Spleißgeräte',
              'Sauberes Kassetten- und Überlängenmanagement nach Spleißplan',
              'Geringste Spleißdämpfung für stabile Langzeitperformance',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Vorbereitung & Absetzen',
                desc: 'Fachgerechtes Abmanteln der Bündeladern und Reinigung der Glasfasern.',
              },
              {
                step: '02',
                title: 'Fusionsspleißen',
                desc: 'Automatisches Lichtbogenspleißen mit sofortiger Dämpfungskontrolle.',
              },
              {
                step: '03',
                title: 'Kassettenablage',
                desc: 'Sicheres Einlegen der Spleißschützer gemäß Netzbetreiber-Spleißplan.',
              },
            ],
            technicalNote: 'Durchschnittliche Spleißdämpfung unter 0,03 dB im Singlemode-Bereich.',
          },
          bs: {
            title: 'Glasfaserspleißen (HÜP, DP, NVT, POP, MUFFE)',
            tagline: 'Visokoprecizno fuziono varenje na svim nivoima mreže',
            shortDesc:
              'Varenje optičkih vlakana sa minimalnim slabljenjem na HÜP, DP, NVT, POP čvorištima i spojnicama (mufama).',
            fullDesc: [
              'Fuziono varenje predstavlja srce svake optičke mreže. Naši certificirani varioci rade na najsavremenijim uređajima za centriranje jezgra vlakna na svim tačkama mrežne infrastrukture – od kućnih kutija (HÜP), preko DP i NVT razvodnika, pa sve do podzemnih mufa i glavnih PoP stanica.',
              'Svako vlakno se uredno polaže u kasete prema planu spajanja, čime se garantuje maksimalna pouzdanost i minimalno slabljenje signala.',
            ],
            highlights: [
              'Varenje na HÜP, DP, NVT, PoP čvorištima i podzemnim mufama',
              'Rad sa modernim aparatima za precizno centriranje vlakana',
              'Uredno slaganje rezervi i vlakana u kasete po planu varenja',
              'Minimalni gubici signala za dugoročnu stabilnost mreže',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Priprema vlakana',
                desc: 'Pažljivo skidanje zaštitnih slojeva, čišćenje i precizno rezanje vlakana.',
              },
              {
                step: '02',
                title: 'Fuziono varenje',
                desc: 'Spajanje električnim lukom uz trenutnu procjenu kvaliteta vara.',
              },
              {
                step: '03',
                title: 'Slaganje u kasetu',
                desc: 'Postavljanje zaštitne navlake i uredno slaganje prema šemi mreže.',
              },
            ],
            technicalNote: 'Prosječno slabljenje po varu ispod 0,03 dB za singlemode vlakna.',
          },
        },
      },
      {
        slug: 'glasfaser-einblasarbeiten',
        code: '1.3',
        image: glasfaserImg,
        content: {
          de: {
            title: 'Glasfaser-Einblasarbeiten',
            tagline: 'Schonendes Einblasen von Mikrokabeln über lange Strecken',
            shortDesc:
              'Effizientes Einblasen von Glasfaser- und Mikrokabeln in Speedpipes und Leerrohrverbände mittels Hochdruck-Kompressortechnik.',
            fullDesc: [
              'Mit leistungsstarken Einblasgeräten und kalibrierten Kompressoren bringen wir Glasfaserkabel und Mini-Bündeladerkabel schnell und materialschonend in vorhandene Mikrorohrverbände (Speedpipes) ein.',
              'Vor jedem Einblasvorgang prüfen wir die Rohrtrasse per Kalibrier- und Drucktest auf Durchgängigkeit und Dichtheit, um Reibungsschäden auszuschließen und maximale Einblaslängen zu erreichen.',
            ],
            highlights: [
              'Rohrprüfung: Kalibrier-, Druck- und Dichtigkeitstests vorab',
              'Schonendes Einblasen durch kontrollierte Schubkraftüberwachung',
              'Geeignet für Backbone-, Verteilnetz- und Hausanschlusskabel',
              'Einsatz von wassergekühlten Kompressoren für große Strecken',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Kalibrierung',
                desc: 'Durchblasen des Schwamm- und Kalibrierkörpers zur Prüfung des Rohrdurchgangs.',
              },
              {
                step: '02',
                title: 'Einblasvorgang',
                desc: 'Synchronisiertes Einblasen mit Druckluft und elektronischer Kraftbegrenzung.',
              },
              {
                step: '03',
                title: 'Schlaufensicherung',
                desc: 'Ablängen der Kabelreserven an Schächten und Verteilern inklusive Endkappen.',
              },
            ],
            technicalNote: 'Überwachte Einblasparameter zum vollständigen Schutz der Fasern.',
          },
          bs: {
            title: 'Glasfaser-Einblasarbeiten (Upuhivanje optike)',
            tagline: 'Sigurno upuhivanje optičkih mikrokablova na velike udaljenosti',
            shortDesc:
              'Efikasno upuhivanje optičkih kablova u Speedpipe i zaštitne cijevi pomoću specijalnih mašina i kompresora.',
            fullDesc: [
              'Pomoću savremenih mašina za upuhivanje i snažnih kompresora brzo i bezbjedno uvodimo optičke kablove u položene mikrocijevi (Speedpipe) bez opterećenja samih vlakana.',
              'Prije svakog upuhivanja obavezno vršimo kalibraciju i test pritiska cijevi kako bismo potvrdili prohodnost i spriječili bilo kakva oštećenja na trasi.',
            ],
            highlights: [
              'Prethodna provjera prohodnosti i zaptivenosti cijevi (kalibracija)',
              'Kontrola potisne sile i brzine radi potpune zaštite kabla',
              'Upuhivanje magistralnih, distributivnih i kućnih optičkih kablova',
              'Profesionalna kompresorska oprema za duge dionice',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Kalibracija cijevi',
                desc: 'Testiranje cijevi pod pritiskom i provjera čistoće i prohodnosti.',
              },
              {
                step: '02',
                title: 'Upuhivanje kabla',
                desc: 'Precizno vođeno upuhivanje pomoću komprimovanog zraka.',
              },
              {
                step: '03',
                title: 'Osiguranje rezervi',
                desc: 'Ostavljanje potrebnih dužina kabla u šahtovima i zatvaranje cijevi.',
              },
            ],
            technicalNote: 'Stalna kontrola parametara upuhivanja za očuvanje integriteta vlakana.',
          },
        },
      },
      {
        slug: 'otdr-messungen',
        code: '1.4',
        image: glasfaserImg,
        content: {
          de: {
            title: 'OTDR-Messungen',
            tagline: 'Zertifizierte Lichtwellenleiter-Messtechnik & Protokollierung',
            shortDesc:
              'Normgerechte bidirektionale OTDR-Reflektometrie, Einfügedämpfungsmessung und vollständige Abnahmeprotokolle.',
            fullDesc: [
              'Eine lückenlose messtechnische Prüfung ist Voraussetzung für die Freigabe jedes Glasfasernetzes. Wir führen kalibrierte OTDR-Messungen (Optical Time Domain Reflectometry) sowie Pegel- und Dämpfungsmessungen auf den relevanten Wellenlängen (z. B. 1310 nm, 1550 nm, 1625 nm) durch.',
              'Alle Messkurven werden ausgewertet, bei Abweichungen unmittelbar lokalisiert und als vollständige PDF- und SOR-Messprotokolle für Ihre Netzdokumentation bereitgestellt.',
            ],
            highlights: [
              'Bidirektionale OTDR-Messungen mit Vorlauf- und Nachlauffaser',
              'Exakte Fehler- und Ereignislokalisierung bis auf den Meter genau',
              'Endflächeninspektion mittels Videomikroskop (IEC 61300-3-35)',
              'Übergabe vollständiger SOR- und PDF-Abnahmeprotokolle',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Steckerreinigung',
                desc: 'Mikroskopische Prüfung und Reinigung aller optischen Steckverbindungen.',
              },
              {
                step: '02',
                title: 'Messdurchführung',
                desc: 'Mehrwellen-OTDR-Messung inklusive Spleiß- und Steckerdämpfungsanalyse.',
              },
              {
                step: '03',
                title: 'Protokollausgabe',
                desc: 'Auswertung der Trace-Dateien und Übergabe an den Auftraggeber.',
              },
            ],
            technicalNote: 'Kalibrierte OTDR-Messtechnik mit vollständiger Abnahmedokumentation.',
          },
          bs: {
            title: 'OTDR-Messungen (OTDR mjerenja optike)',
            tagline: 'Certifikovana mjerenja optičke mreže i izrada protokola',
            shortDesc:
              'Normirana dvosmjerna OTDR reflektometrija, mjerenje slabljenja signala i isporuka kompletnih mjernih protokola.',
            fullDesc: [
              'Detaljno mjerno ispitivanje predstavlja uslov za puštanje svake optičke mreže u rad. Vršimo precizna kalibrisana OTDR mjerenja i mjerenja slabljenja na svim relevantnim talasnim dužinama (1310 nm, 1550 nm, 1625 nm).',
              'Sve krivulje se analiziraju, eventualni gubici ili prekidi odmah lociraju, a naručiocu isporučujemo kompletne SOR i PDF protokole za tehničku dokumentaciju.',
            ],
            highlights: [
              'Dvosmjerna OTDR mjerenja sa predvlaknom i završnim vlaknom',
              'Precizno lociranje kvarova i događaja na trasi u metar',
              'Inspekcija čistoće konektora video-mikroskopom (IEC 61300-3-35)',
              'Isporuka kompletnih SOR i PDF izvještaja spremnih za primopredaju',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Čišćenje konektora',
                desc: 'Mikroskopska provjera i profesionalno čišćenje optičkih konektora.',
              },
              {
                step: '02',
                title: 'OTDR testiranje',
                desc: 'Mjerenje na više talasnih dužina uz analizu svakog vara i spoja.',
              },
              {
                step: '03',
                title: 'Izrada protokola',
                desc: 'Obrada mjernih fajlova i dostava atesta investitoru.',
              },
            ],
            technicalNote: 'Redovno kalibrisani OTDR instrumenti prema zahtjevima operatera.',
          },
        },
      },
      {
        slug: 'aktivierung-entstoerung',
        code: '1.5',
        image: glasfaserImg,
        content: {
          de: {
            title: 'Aktivierung und Entstörung',
            tagline: 'Schnelle Inbetriebnahme & gezielte Störungsbeseitigung',
            shortDesc:
              'Patchen im Verteiler, Signalprüfung bis zum Endkunden sowie zügige Fehleranalyse und Instandsetzung im Störungsfall.',
            fullDesc: [
              'Wir bringen Anschlüsse ans Netz und halten bestehende Strecken zuverlässig in Betrieb. Bei der Aktivierung übernehmen wir das Patchen im PoP oder NVT, die Endgeräteprüfung beim Kunden sowie die Signalverifikation bis zur erfolgreichen Online-Schaltung.',
              'Im Störungsfall orten unsere Techniker Faserbrüche, defekte Spleiße oder geknickte Patchkabel schnell mittels OTDR und Rotlichtquelle und stellen die Verbindung umgehend wieder her.',
            ],
            highlights: [
              'End-to-End Aktivierung und Rangierung in Verteilern (NVT / PoP)',
              'Fehlerortung bei Faserbrüchen, Dämpfungsfehlern und Ausfällen',
              'Schnelle Reparatur vor Ort inklusive Nachmessung',
              'Freundliche Kundenbetreuung direkt beim Vor-Ort-Termin',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Diagnose',
                desc: 'Messung des Pegels und Eingrenzung der Fehlerstelle im Netzabschnitt.',
              },
              {
                step: '02',
                title: 'Rangierung / Reparatur',
                desc: 'Patchen, Nachspleißen oder Austausch beschädigter Komponenten.',
              },
              {
                step: '03',
                title: 'Freigabe',
                desc: 'Verifizierung des stabilen Signals bis zur Online-Bestätigung.',
              },
            ],
            technicalNote: 'Kurze Reaktionszeiten zur Minimierung von Ausfallzeiten.',
          },
          bs: {
            title: 'Aktivierung und Entstörung (Aktivacija i otklanjanje kvarova)',
            tagline: 'Brzo puštanje u rad i pouzdano rješavanje smetnji na mreži',
            shortDesc:
              'Prespajanje u razvodnicima, provjera signala kod krajnjeg korisnika te brza dijagnostika i sanacija kvarova.',
            fullDesc: [
              'Puštamo optičke priključke u rad i osiguravamo stabilnost postojećih trasa. Tokom aktivacije vršimo prespajanje (patchen) u PoP ili NVT ormarima, testiranje kod korisnika i verifikaciju optičkog signala sve do uspostavljanja internet veze.',
              'U slučaju kvara naši tehničari brzo lociraju prekid vlakna ili povećano slabljenje pomoću OTDR uređaja i lasera te u najkraćem roku vraćaju mrežu u funkciju.',
            ],
            highlights: [
              'Aktivacija priključaka i prespajanje u razvodnicima (NVT / PoP)',
              'Brzo lociranje prekida vlakana i problema sa slabljenjem',
              'Hitna sanacija varova i zamjena oštećenih dijelova na terenu',
              'Profesionalna i ljubazna komunikacija sa krajnjim korisnicima',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Dijagnostika',
                desc: 'Mjerenje nivoa signala i precizno lociranje uzroka smetnje.',
              },
              {
                step: '02',
                title: 'Intervencija',
                desc: 'Prespajanje, ponovno varenje ili zamjena neispravnih konektora.',
              },
              {
                step: '03',
                title: 'Potvrda rada',
                desc: 'Finalni test kvaliteta signala i potvrda stabilne veze.',
              },
            ],
            technicalNote: 'Brza terenska reakcija radi minimalnog zastoja mreže.',
          },
        },
      },
    ],
  },
  {
    slug: 'tiefbau',
    number: '02',
    image: tiefbauImg,
    iconKey: 'civil',
    content: {
      de: {
        title: 'Tiefbau',
        subtitle: 'Hausanschlüsse, Grabenbau, Querungen & Oberflächen',
        description:
          'Präziser Leitungs- und Straßenbau für Glasfasertrassen – von der grabenlosen Erdrakete bis zur sauberen Wiederherstellung von Pflaster- und Asphaltflächen.',
      },
      bs: {
        title: 'Tiefbau (Niskogradnja i iskopi)',
        subtitle: 'Kućni priključci, kopanje kanala, podbušivanja i asfalt/behaton',
        description:
          'Precizni zemljani i građevinski radovi za optičke trase – od bezrovovskog probijanja raketama do besprijekornog vraćanja asfalta i behatonki.',
      },
    },
    subcategories: [
      {
        slug: 'glasfaser-hausanschluesse',
        code: '2.1',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Glasfaser-Hausanschlüsse',
            tagline: 'Komplette Anbindung von der Grundstücksgrenze bis ins Haus',
            shortDesc:
              'Vollständige Erstellung von FTTH-Hausanschlüssen inklusive Trassenbau auf Privatgrundstücken und schonender Gartenquerung.',
            fullDesc: [
              'Wir realisieren die gesamte Tiefbaustrecke für den Glasfaser-Hausanschluss – von der Haupttrasse im Gehweg über Einfahrten und Vorgärten bis direkt zur Hauswand.',
              'Durch sorgfältige Planung, Abdeckung angrenzender Flächen und saubere Verfüllung hinterlassen wir jedes Grundstück im vereinbarten Zustand.',
            ],
            highlights: [
              'Komplette Abwicklung vom Gehweg bis zum Gebäude',
              'Schonende Bearbeitung von Vorgärten, Beeten und Einfahrten',
              'Verlegung der Hausanschluss-Speedpipes nach Norm',
              'Klare Abstimmung mit Eigentümern und Hausverwaltungen',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Hausbegehung',
                desc: 'Gemeinsame Festlegung der Trassenführung mit dem Eigentümer.',
              },
              {
                step: '02',
                title: 'Leitungsbau',
                desc: 'Erstellung des Anschlussgrabens und Verlegung des Schutzrohrs.',
              },
              {
                step: '03',
                title: 'Wiederherstellung',
                desc: 'Fachgerechtes Verdichten und sauberes Schließen der Oberfläche.',
              },
            ],
            technicalNote: 'Termingerechte Einzel- und Sammelanschlüsse für Wohn- und Gewerbeobjekte.',
          },
          bs: {
            title: 'Glasfaser-Hausanschlüsse (Kućni optički priključci)',
            tagline: 'Kompletno dovođenje optike od glavne trase do objekta',
            shortDesc:
              'Potpuna izvedba kućnih priključaka uključujući kopanje na privatnim parcelama i pažljiv prolazak kroz dvorišta.',
            fullDesc: [
              'Realizujemo kompletnu građevinsku trasu za optički kućni priključak – od glavne linije na trotoaru, preko prilaza i dvorišta, sve do samog zida objekta.',
              'Pažljivim planiranjem, zaštitom okolnih površina i urednim zatrpavanjem ostavljamo svako dvorište čisto i uređeno.',
            ],
            highlights: [
              'Kompletan rad od trotoara do ulaza u objekat',
              'Pažljiv rad u uređenim dvorištima, vrtovima i prilazima',
              'Polaganje priključnih cijevi po važećim normama',
              'Jasan dogovor i komunikacija sa vlasnicima objekata',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Dogovor trase',
                desc: 'Obilazak terena i usaglašavanje rute sa vlasnikom objekta.',
              },
              {
                step: '02',
                title: 'Iskop i polaganje',
                desc: 'Izrada priključnog rova i polaganje zaštitnih cijevi.',
              },
              {
                step: '03',
                title: 'Sanacija terena',
                desc: 'Zatrpavanje, nabijanje i uredno vraćanje površine.',
              },
            ],
            technicalNote: 'Efikasna realizacija pojedinačnih i serijskih kućnih priključaka.',
          },
        },
      },
      {
        slug: 'kabelgrabenbau',
        code: '2.2',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Kabelgrabenbau',
            tagline: 'Offener Leitungsgrabenbau für Haupt- und Verteilertrassen',
            shortDesc:
              'Maschineller und manueller Aushub von Kabelgräben inklusive Sandbettung, Trassenwarnband und Lagenverdichtung.',
            fullDesc: [
              'Für den Ausbau innerörtlicher und überörtlicher Glasfasertrassen erstellen wir normgerechte Kabelgräben mit passgenauen Kompaktbaggern, Grabenfräsen sowie im präzisen Handschacht im Bereich bestehender Versorgungsleitungen.',
              'Die Verlegung umfasst das Sandbett, die fachgerechte Positionierung der Rohrverbände, das Trassenwarnband sowie das schichtweise Verdichten gemäß ZTV A-StB.',
            ],
            highlights: [
              'Maschinen- und Handschachtarbeiten rund um Bestandsleitungen',
              'Normgerechte Verlegetiefe und Sandbettung für Speedpipes',
              'Einbau von Trassenwarn- und Ortungsbändern',
              'Lagenweises Verfüllen und Verdichten mit Prüfprotokoll',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Leitungsauskunft & Suchschlitz',
                desc: 'Sicherung bestehender Strom-, Gas- und Wasserleitungen vor Baubeginn.',
              },
              {
                step: '02',
                title: 'Grabenaushub & Rohrverlegung',
                desc: 'Sauberer Aushub und spannungslose Ablage der Rohrverbände im Sandbett.',
              },
              {
                step: '03',
                title: 'Verfüllung & Verdichtung',
                desc: 'Schichtweises Verfüllen nach Vorgaben der Straßenbaulastträger.',
              },
            ],
            technicalNote: 'Ausführung gemäß ZTV A-StB und den kommunalen Aufbruchrichtlinien.',
          },
          bs: {
            title: 'Kabelgrabenbau (Kopanje kablovskih kanala)',
            tagline: 'Otvoreni iskopi za magistralne i distributivne trase',
            shortDesc:
              'Mašinsko i ručno kopanje kablovskih rovova uključujući pješčanu posteljicu, trake upozorenja i nabijanje.',
            fullDesc: [
              'Za izgradnju gradskih i prigradskih optičkih trasa izvodimo propisne kablovske kanale pomoću mini bagera, freza, kao i preciznim ručnim kopanjem u zonama postojećih instalacija.',
              'Radovi obuhvataju formiranje pješčanog sloja, polaganje cijevi, postavljanje upozoravajuće trake i slojevito nabijanje tla po ZTV A-StB normama.',
            ],
            highlights: [
              'Mašinsko i oprezno ručno kopanje oko postojećih vodova',
              'Propisana dubina rova i pješčana zaštita za cijevi',
              'Postavljanje signalnih i locirajućih traka',
              'Slojevito zatrpavanje i nabijanje tla po standardu',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Provjera instalacija',
                desc: 'Lociranje postojećih vodova struje, plina i vode prije početka iskopa.',
              },
              {
                step: '02',
                title: 'Kopanje i polaganje',
                desc: 'Izrada rova i precizno polaganje cijevi u pješčani sloj.',
              },
              {
                step: '03',
                title: 'Zatrpavanje i sabijanje',
                desc: 'Kontrolisano zatrpavanje po slojevima do nivoa podloge.',
              },
            ],
            technicalNote: 'Izvedba u skladu sa ZTV A-StB i opštinskim propisima o prokopima.',
          },
        },
      },
      {
        slug: 'erdraketen-grabenlose-verlegung',
        code: '2.3',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Erdraketen / grabenlose Verlegung',
            tagline: 'Oberflächenschonende Unterquerung ohne Aufbruch',
            shortDesc:
              'Zielgenaue grabenlose Bodenverdrängung mit Erdraketen unter Einfahrten, Gärten, Mauern und Wegen.',
            fullDesc: [
              'Wo Oberflächen wie hochwertige Einfahrten, Terrassen, Beete oder Straßen nicht geöffnet werden sollen, setzen wir moderne Erdraketen zur grabenlosen Verlegung ein.',
              'Von einer kompakten Startgrube bis zur Zielgrube treiben wir das Schutzrohr zielgenau durch das Erdreich – wirtschaftlich, schnell und ohne unnötige Oberflächenschäden.',
            ],
            highlights: [
              'Kein Aufreißen von hochwertigen Pflaster- oder Rasenflächen',
              'Präzise Ausrichtung für Start- und Zielgruben',
              'Deutliche Zeit- und Kostenersparnis bei Unterquerungen',
              'Sofortiger Einzug von Schutzrohren und Speedpipes',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Start- & Zielgrube',
                desc: 'Kleine Baugruben an beiden Enden der geplanten Unterquerung.',
              },
              {
                step: '02',
                title: 'Vortrieb',
                desc: 'Zielgerichtete Bodenverdrängung mit pneumatischer Erdrakete.',
              },
              {
                step: '03',
                title: 'Rohreinzug',
                desc: 'Nachziehen des Schutzrohrs direkt während oder nach dem Vortrieb.',
              },
            ],
            technicalNote: 'Ideal für Grundstückszufahrten, Gehwege und gärtnerisch gestaltete Anlagen.',
          },
          bs: {
            title: 'Erdraketen / grabenlose Verlegung (Rakete / bezrovovsko polaganje)',
            tagline: 'Podbušivanje bez raskopavanja i oštećenja površina',
            shortDesc:
              'Precizno probijanje tla pneumatskim raketama ispod prilaza, dvorišta, ograda i uređenih površina.',
            fullDesc: [
              'Tamo gdje kvalitetne površine poput dvorišnih prilaza, terasa, travnjaka ili saobraćajnica ne treba raskopavati, koristimo savremene zemljane rakete.',
              'Između male startne i ciljne jame precizno provlačimo zaštitne cijevi ispod površine – brzo, čisto i bez nepotrebnih naknadnih sanacija.',
            ],
            highlights: [
              'Očuvanje postojećeg behatona, asfalta i uređenih travnjaka',
              'Minimalne startne i ciljne jame',
              'Značajna ušteda vremena na podbušivanjima',
              'Direktno uvlačenje zaštitnih cijevi u zemlju',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Startna i ciljna jama',
                desc: 'Priprema kompaktnih jama na ulazu i izlazu podbušivanja.',
              },
              {
                step: '02',
                title: 'Probijanje tla',
                desc: 'Precizno usmjereni prolaz pneumatske rakete ispod prepreke.',
              },
              {
                step: '03',
                title: 'Uvlačenje cijevi',
                desc: 'Postavljanje zaštitne cijevi odmah tokom ili nakon prolaska.',
              },
            ],
            technicalNote: 'Idealno za prelaze ispod prilaza, trotoara i uređenih okućnica.',
          },
        },
      },
      {
        slug: 'strassen-gehwegquerungen',
        code: '2.4',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Straßen- und Gehwegquerungen',
            tagline: 'Sichere Trassenführung im öffentlichen Verkehrsraum',
            shortDesc:
              'Fachgerechte Querung von Fahrbahnen und Gehwegen inklusive Verkehrsabsicherung und normgerechter Wiederherstellung.',
            fullDesc: [
              'Straßen- und Gehwegquerungen erfordern präzise Koordination, verkehrsrechtliche Sicherheit und robuste Bauausführung. Wir führen sowohl offene Querungen in Halbseitenbauweise als auch geschlossene Unterquerungen durch.',
              'Von der Einrichtung der Baustellenabsicherung (RSA) bis zur abnahmefertigen Asphalt- oder Pflasterdecke bleibt der Verkehrsfluss bestmöglich erhalten.',
            ],
            highlights: [
              'Offene und grabenlose Querung von Fahrbahnen & Gehwegen',
              'Baustellenabsicherung nach RSA-Vorgaben',
              'Tragfähige Rohrumhüllung und Verdichtung unter Verkehrslasten',
              'Enge Abstimmung mit Kommunen und Bauämtern',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Verkehrssicherung',
                desc: 'Absperrung und Beschilderung des Arbeitsbereichs gemäß RSA.',
              },
              {
                step: '02',
                title: 'Querungsbau',
                desc: 'Schutzrohrverlegung quer zur Straße bzw. zum Gehweg.',
              },
              {
                step: '03',
                title: 'Verkehrsfreigabe',
                desc: 'Verdichteter Aufbau und nahtloser Oberflächenschluss.',
              },
            ],
            technicalNote: 'Ausführung mit voller Berücksichtigung der Verkehrssicherungspflicht.',
          },
          bs: {
            title: 'Straßen- und Gehwegquerungen (Prelazi preko ulica i trotoara)',
            tagline: 'Sigurno prevođenje trasa u zoni javnog saobraćaja',
            shortDesc:
              'Stručni prekopi i podbušivanja saobraćajnica i trotoara uz propisnu saobraćajnu signalizaciju i sanaciju.',
            fullDesc: [
              'Prelazi preko ulica i pješačkih staza zahtijevaju dobru organizaciju, saobraćajnu bezbjednost i čvrstu izvedbu. Radimo i otvorene prokope po fazama i zatvorena podbušivanja bez zaustavljanja saobraćaja.',
              'Od postavljanja gradilišne signalizacije do završnog sloja asfalta ili kocki obezbjeđujemo uredan i bezbjedan rad.',
            ],
            highlights: [
              'Otvoreno presijecanje ili podbušivanje kolovoza i trotoara',
              'Propisno obezbjeđenje gradilišta saobraćajnom signalizacijom',
              'Stabilno zatrpavanje i nabijanje otporno na opterećenje vozila',
              'Usklađenost sa zahtjevima opština i upravitelja puteva',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Osiguranje zone',
                desc: 'Postavljanje zaštitnih ograda i saobraćajnih znakova.',
              },
              {
                step: '02',
                title: 'Izrada prelaza',
                desc: 'Polaganje zaštitnih cijevi ispod ulice ili pješačke staze.',
              },
              {
                step: '03',
                title: 'Zatvaranje i predaja',
                desc: 'Nabijanje slojeva i vraćanje kolovoza u funkciju.',
              },
            ],
            technicalNote: 'Potpuno poštovanje propisa o sigurnosti saobraćaja na gradilištu.',
          },
        },
      },
      {
        slug: 'pflaster-asphaltarbeiten',
        code: '2.5',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Pflaster- und Asphaltarbeiten',
            tagline: 'Makellose Oberflächenwiederherstellung nach Tiefbau',
            shortDesc:
              'Fachgerechtes Setzen von Verbundpflaster, Naturstein, Bordsteinen sowie Kalt- und Heißasphaltarbeiten.',
            fullDesc: [
              'Ein sauberer Tiefbau zeigt sich am Ergebnis der geschlossenen Oberfläche. Wir stellen Gehwege, Hofeinfahrten, Parkflächen und Fahrbahnen nach Abschluss der Rohrverlegung optisch und statisch einwandfrei wieder her.',
              'Ob Behaton-Verbundpflaster, Plattenbeläge, Mosaikpflaster oder Asphaltdeckschicht – wir arbeiten passgenau und sorgen für dauerhafte Setzungsfreiheit.',
            ],
            highlights: [
              'Verlegen von Behaton-, Beton- und Natursteinpflaster',
              'Herstellung tragfähiger Frostschutz- und Bettungsschichten',
              'Fachgerechter Asphaltanschluss mit Fugenverguss',
              'Setzen und Ausrichten von Bord- und Randsteinen',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Unterbau & Planum',
                desc: 'Aufbau und Abziehen der Schotter- und Splittbettung auf Sollhöhe.',
              },
              {
                step: '02',
                title: 'Oberflächenbau',
                desc: 'Passgenaues Verlegen der Steine bzw. Einbau des Asphalts.',
              },
              {
                step: '03',
                title: 'Abrütteln & Verfugen',
                desc: 'Einkehren von Fugensand und abschließende Flächenverdichtung.',
              },
            ],
            technicalNote: 'Ebenheit und Tragfähigkeit nach geltenden DIN- und ZTV-Pflaster-Normen.',
          },
          bs: {
            title: 'Pflaster- und Asphaltarbeiten (Behaton i asfaltiranje)',
            tagline: 'Vrhunsko vraćanje površina u prvobitno stanje',
            shortDesc:
              'Stručna ugradnja behaton kocki, ploča, ivičnjaka kao i sanacija asfaltnih površina nakon zemljanih radova.',
            fullDesc: [
              'Kvalitet niskogradnje se najbolje vidi po završnoj površini. Nakon polaganja cijevi uredno i trajno vraćamo trotoare, dvorišne prilaze, parkinge i ulice u prvobitno stanje.',
              'Bilo da se radi o behaton kockama, betonskim pločama ili asfaltiranju, garantujemo ravnu, stabilnu i estetski besprijekornu završnu obradu.',
            ],
            highlights: [
              'Postavljanje svih vrsta behaton kocki i kamenih ploča',
              'Kvalitetna priprema i nabijanje tampon sloja i posteljice',
              'Asfaltiranje i brtvljenje spojeva na saobraćajnicama',
              'Ugradnja i ravnanje betonskih ivičnjaka',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Priprema podloge',
                desc: 'Nasipanje, nivelisanje i nabijanje tamponske i pješčane podloge.',
              },
              {
                step: '02',
                title: 'Ugradnja sloja',
                desc: 'Precizno slaganje behatonki ili ugradnja asfalta.',
              },
              {
                step: '03',
                title: 'Završno nabijanje',
                desc: 'Fugiranje pijeskom i završno ravnanje vibro-pločom.',
              },
            ],
            technicalNote: 'Visoka stabilnost i ravnost podloge po njemačkim građevinskim normama.',
          },
        },
      },
      {
        slug: 'hauseinfuehrungen',
        code: '2.6',
        image: tiefbauImg,
        content: {
          de: {
            title: 'Hauseinführungen',
            tagline: 'Gas- und druckwasserdichte Gebäudeabdichtung',
            shortDesc:
              'Präzise Kernbohrungen durch Keller- oder Bodenplatten sowie fachgerechte Abdichtung nach DIN 18533.',
            fullDesc: [
              'Der Übergang vom Erdreich in das Gebäude ist ein sensibler Bereich für den Feuchtigkeitsschutz. Wir führen passgenaue Kernbohrungen durch Fundament- und Kellerwände aus und montieren zertifizierte Einsparten- oder Mehrsparten-Hauseinführungen.',
              'Alle Durchführungen werden gas- und druckwasserdicht versiegelt, sodass das Bauwerk dauerhaft vor eindringender Feuchtigkeit geschützt bleibt.',
            ],
            highlights: [
              'Erschütterungsarme Kernbohrungen in Beton und Mauerwerk',
              'Gas- und druckwasserdichte Dichtungseinsätze',
              'Geeignet für unterkellerte Gebäude und Bodenplatten',
              'Innen- und Außenabdichtung mit Qualitätsnachweis',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Wandprüfung',
                desc: 'Ortung von Bewehrung und vorhandenen Hausleitungen vor dem Bohren.',
              },
              {
                step: '02',
                title: 'Kernbohrung',
                desc: 'Staubarme Diamantkernbohrung im exakt benötigten Durchmesser.',
              },
              {
                step: '03',
                title: 'Abdichtung',
                desc: 'Einbau und Verpressung bzw. Verschraubung der Dichtungselemente.',
              },
            ],
            technicalNote: 'Geprüfte Systemabdichtungen zum Schutz vor drückendem Wasser.',
          },
          bs: {
            title: 'Hauseinführungen (Kućni prodori i zaptivanje)',
            tagline: 'Vodonepropusni i plinonepropusni ulazi u objekat',
            shortDesc:
              'Precizno bušenje zidova i temelja uz certificirano zaptivanje protiv podzemnih voda i vlage.',
            fullDesc: [
              'Mjesto ulaska kabla iz zemlje u objekat je ključno za zaštitu od vlage. Izvodimo precizna dijamantska bušenja kroz podrumske zidove ili temeljne ploče i ugrađujemo certificirane ulazne brtve.',
              'Svaki prodor se profesionalno zaptiva protiv vode pod pritiskom i plina, čime objekat ostaje trajno zaštićen od prodora vlage.',
            ],
            highlights: [
              'Precizno dijamantsko bušenje betona i cigle bez vibracija',
              'Ugradnja certificiranih vodonepropusnih i plinskih brtvi',
              'Rješenja za objekte sa podrumom i bez podruma',
              'Trajna zaštita objekta od vlage uz urednu završnu obradu',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Kontrola zida',
                desc: 'Provjera pozicije i postojećih instalacija unutar zida.',
              },
              {
                step: '02',
                title: 'Bušenje otvora',
                desc: 'Čisto dijamantsko bušenje tačno definisanog prečnika.',
              },
              {
                step: '03',
                title: 'Zaptivanje',
                desc: 'Ugradnja i stezanje dihtung-sistema za potpunu nepropusnost.',
              },
            ],
            technicalNote: 'Korištenje atestiranih sistema za trajnu hidroizolaciju prodora.',
          },
        },
      },
    ],
  },
  {
    slug: 'ladeinfrastruktur',
    number: '03',
    image: ladeinfrastrukturImg,
    iconKey: 'ev',
    content: {
      de: {
        title: 'Ladeinfrastruktur',
        subtitle: 'Tiefbau, Fundamente, Trassen & Erdung für E-Mobilität',
        description:
          'Zuverlässige Bau- und Infrastrukturvorbereitung für E-Ladesäulen und Ladeparks – von Schwerlastfundamenten über Erdungsarbeiten bis zur fertigen Stellplatz-Pflasterung.',
      },
      bs: {
        title: 'Ladeinfrastruktur (Infrastruktura za E-punjače)',
        subtitle: 'Niskogradnja, temelji, trase, šahtovi i uzemljenje za punionice',
        description:
          'Pouzdana građevinska i infrastrukturna priprema za E-punjače i parkinge za punjenje – od betonskih temelja i uzemljenja do uređenja parking površina.',
      },
    },
    subcategories: [
      {
        slug: 'tiefbau-ladesaeulen-ladeparks',
        code: '3.1',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Tiefbau für E-Ladesäulen und Ladeparks',
            tagline: 'Kompletter Baugrund- und Trassenbau für E-Mobilität',
            shortDesc:
              'Schlüsselfertige Tiefbauarbeiten für öffentliche Ladehubs, Firmenparkplätze, Einzelhandel und Flottenstandorte.',
            fullDesc: [
              'Wir schaffen die vollständige bauliche Grundlage für AC- und DC-Schnellladestandorte sowie komplette Ladeparks. Unsere Teams koordinieren Aushub, Leerrohrsysteme, Transformatoranbindungen und Stellplatzgestaltung effizient aus einer Hand.',
              'Dabei arbeiten wir Hand in Hand mit Elektrofachbetrieben, Energieversorgern und Ladeinfrastruktur-Betreibern, damit Montage und Inbetriebnahme reibungslos gelingen.',
            ],
            highlights: [
              'Bauliche Erschließung von Pkw- und Lkw-Ladeparks',
              'Koordinierte Trassen vom Netzanschluss bzw. Trafo bis zur Säule',
              'Einbau von Anfahrschutzpollern und Stellplatzmarkierung',
              'Termingerechte Umsetzung bei laufendem Parkplatzbetrieb',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Standortabsteckung',
                desc: 'Vermessung und Einzeichnung der Ladeplätze, Trassen und Fundamente.',
              },
              {
                step: '02',
                title: 'Tiefbau & Leitungswege',
                desc: 'Aushub, Trassenbau und Setzen der Versorgungsinfrastruktur.',
              },
              {
                step: '03',
                title: 'Übergabe an Elektrotechnik',
                desc: 'Abnahmefertige Vorbereitung für die anschließende Säulenmontage.',
              },
            ],
            technicalNote: 'Ausgelegt für AC-Wallbox-Cluster bis hin zu High-Power-Charging-Parks (HPC).',
          },
          bs: {
            title: 'Tiefbau für E-Ladesäulen und Ladeparks (Niskogradnja za E-punionice)',
            tagline: 'Kompletna građevinska priprema za stanice za punjenje vozila',
            shortDesc:
              'Građevinski radovi za javne punionice, poslovne parkinge, trgovačke centre i stanice za vozne parkove.',
            fullDesc: [
              'Pripremamo kompletnu građevinsku infrastrukturu za AC i brze DC punionice kao i čitave parkove za punjenje električnih vozila. Naši timovi izvode iskope, cjevovode, pripremaju veze prema trafo-stanicama i uređuju parking mjesta.',
              'Usko sarađujemo sa elektro-firmama i investitorima kako bi montaža punjača protekla bez ikakvih zastoja.',
            ],
            highlights: [
              'Kompletna priprema terena za putničke i teretne E-punionice',
              'Izgradnja trasa od priključka ili trafoa do svakog mjesta punjenja',
              'Ugradnja zaštitnih stubića i priprema parking prostora',
              'Organizovan rad i na postojećim aktivnim parkinzima',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Iskolčavanje terena',
                desc: 'Mjerenje i obilježavanje pozicija punjača, temelja i rovova.',
              },
              {
                step: '02',
                title: 'Zemljani radovi',
                desc: 'Iskop, polaganje zaštitnih cijevi i postavljanje infrastrukture.',
              },
              {
                step: '03',
                title: 'Predaja za elektro-montažu',
                desc: 'Spremna podloga za postavljanje i spajanje samih punjača.',
              },
            ],
            technicalNote: 'Prilagođeno za sve tipove punjača, uključujući brze HPC stanice.',
          },
        },
      },
      {
        slug: 'fundamentbau-ladesaeulen',
        code: '3.2',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Fundamentbau für Ladesäulen',
            tagline: 'Standsichere Fertig- und Ortbetonfundamente',
            shortDesc:
              'Passgenaues Setzen von Systemfertigfundamenten oder Schalung und Gießen von Stahlbetonfundamenten inklusive Kabeleinführung.',
            fullDesc: [
              'Jede Ladesäule und Gleichrichterstation benötigt ein tragfähiges, frostsicheres Fundament mit exakt positionierten Kabeleinführungen. Wir setzen sowohl herstellerspezifische Fertigteilfundamente als auch individuell bewehrte Ortbetonfundamente.',
              'Vor dem Verfüllen werden sämtliche Leerrohre und Leerdurchführungen millimetergetreu ausgerichtet und gegen Beton- und Feuchtigkeitseintritt gesichert.',
            ],
            highlights: [
              'Einbau von System-Fertigfundamenten und Ortbeton-Lösungen',
              'Bewehrung und frostsichere Gründung nach Herstellerangabe',
              'Exakte Ausrichtung der Leer- und Kabeleinführungsrohre',
              'Ebenes Nivellieren für sofortige Verschraubung der Säulen',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Fundamentgrube',
                desc: 'Frostfreier Aushub und Herstellung der Sauberkeitsschicht.',
              },
              {
                step: '02',
                title: 'Setzen / Betonieren',
                desc: 'Einheben des Fertigfundaments oder Betonage mit integrierten Rohrbögen.',
              },
              {
                step: '03',
                title: 'Nivellierung',
                desc: 'Präzise Höhen- und Winkelkontrolle für den Sockelanschluss.',
              },
            ],
            technicalNote: 'Kompatibel mit allen gängigen AC-, DC- und HPC-Ladesäulenherstellern.',
          },
          bs: {
            title: 'Fundamentbau für Ladesäulen (Izrada temelja za E-punjače)',
            tagline: 'Stabilni betonski i montažni temelji sa uvodima za kablove',
            shortDesc:
              'Precizno postavljanje gotovih betonskih temelja ili šalovanje i betoniranje armiranobetonskih stopa za punjače.',
            fullDesc: [
              'Svaki stub za punjenje i ispravljačka stanica zahtijevaju čvrst temelj otporan na mraz sa tačno pozicioniranim uvodima za energetske i komunikacione kablove. Ugrađujemo kako fabričke gotove temelje tako i armiranobetonske temelje po projektu.',
              'Sva bužir i zaštitna crijeva se prije zatrpavanja pozicioniraju u milimetar i osiguravaju za lako naknadno provlačenje kablova.',
            ],
            highlights: [
              'Ugradnja gotovih temelja i armiranog betona na licu mjesta',
              'Fundiranje ispod granice smrzavanja prema uputama proizvođača',
              'Precizno postavljanje uvodnih koljena i cijevi za kablove',
              'Tačno nivelisanje za direktnu montažu kućišta punjača',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Iskop jame',
                desc: 'Priprema temeljne jame i tamponskog sloja.',
              },
              {
                step: '02',
                title: 'Montaža ili betoniranje',
                desc: 'Postavljanje gotovog bloka ili lijevanje armiranog betona.',
              },
              {
                step: '03',
                title: 'Nivelisanje',
                desc: 'Provjera ravnosti i visine površine za montažu stuba.',
              },
            ],
            technicalNote: 'Kompatibilno sa svim vodećim proizvođačima AC, DC i HPC punjača.',
          },
        },
      },
      {
        slug: 'kabeltrassen-leerrohrverlegung',
        code: '3.3',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Kabeltrassen- und Leerrohrverlegung',
            tagline: 'Leistungsfähige Energietrassen und Reserverohre',
            shortDesc:
              'Normgerechte Verlegung von Mittel- und Niederspannungs-Leerrohren, Kabelschutzrohren und Steuerleitungen für Ladeparks.',
            fullDesc: [
              'Moderne Ladeparks benötigen leistungsstarke Kabelwege sowohl für die Energieversorgung als auch für Lastmanagement und Datenkommunikation. Wir verlegen flexible und starre Kabelschutzrohre (z. B. DN110/DN160) sowie Steuer- und Glasfaser-Leerrohre mit definierten Abständen.',
              'Zusätzliche Reserverohre ermöglichen später eine unkomplizierte Erweiterung weiterer Ladepunkte ohne erneute Aufbrucharbeiten.',
            ],
            highlights: [
              'Verlegung von Starkstrom-Schutzrohren und Leerrohrsystemen',
              'Separate Rohrführung für Daten-, Netzwerk- und Steuerkabel',
              'Einhaltung von Mindestabständen und großen Biegeradien',
              'Einbau von Trassenwarnband und Einmaßdokumentation',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Trassenplanung',
                desc: 'Festlegung der Rohrquerschnitte und Belegung im Grabenprofil.',
              },
              {
                step: '02',
                title: 'Rohrverlegung',
                desc: 'Sicheres Kuppeln, Sandbettung und Fixieren mittels Abstandhaltern.',
              },
              {
                step: '03',
                title: 'Dokumentation',
                desc: 'Aufmaß des Rohrverlaufs vor dem Verfüllen des Grabens.',
              },
            ],
            technicalNote: 'Zukunftssichere Auslegung inklusive Reservekapazitäten für spätere Erweiterungen.',
          },
          bs: {
            title: 'Kabeltrassen- und Leerrohrverlegung (Kablovske trase i zaštitne cijevi)',
            tagline: 'Snažne energetske trase i cijevi za buduće proširenje',
            shortDesc:
              'Propisno polaganje energetskih zaštitnih cijevi, rezervnih cijevi i vodova za upravljanje i podatke.',
            fullDesc: [
              'Moderni parkinzi za punjenje zahtijevaju pouzdane trase kako za visoke snage napajanja tako i za upravljanje opterećenjem i mrežnu komunikaciju. Polažemo energetske zaštitne cijevi (npr. DN110/DN160) kao i odvojene cijevi za optiku i upravljačke kablove.',
              'Ugradnjom rezervnih cijevi omogućavamo jednostavno dodavanje novih punjača u budućnosti bez ponovnog kopanja.',
            ],
            highlights: [
              'Polaganje cijevi za jake struje i napojne kablove',
              'Odvojene cijevi za podatkovne, optičke i signalne vodove',
              'Poštovanje propisanih razmaka i radijusa savijanja kablova',
              'Postavljanje trake upozorenja i snimanje tačne trase',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Plan profila rova',
                desc: 'Raspored cijevi po dubini i širini u skladu sa snagom napajanja.',
              },
              {
                step: '02',
                title: 'Polaganje cijevi',
                desc: 'Spajanje cijevi, fiksiranje odstojnicima i zatrpavanje pijeskom.',
              },
              {
                step: '03',
                title: 'Dokumentacija',
                desc: 'Snimanje položene trase prije zatvaranja kanala.',
              },
            ],
            technicalNote: 'Planirano sa rezervnim kapacitetom za kasniju nadogradnju stanica.',
          },
        },
      },
      {
        slug: 'kernbohrungen-erdungsarbeiten',
        code: '3.4',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Kernbohrungen und Erdungsarbeiten',
            tagline: 'Sichere Gebäudeeinführung & normgerechter Blitz-/Potentialausgleich',
            shortDesc:
              'Durchführungen für Ladezuleitungen sowie fachgerechte Verlegung von Ringerdern, Tiefenerdern und Potentialausgleich.',
            fullDesc: [
              'Für den sicheren Betrieb von E-Ladesäulen sind einwandfreie Gebäudedurchführungen zur Unterverteilung sowie normgerechte Erdungssysteme unverzichtbar.',
              'Wir erstellen die notwendigen Kernbohrungen durch Wände, Stützen oder Decken und verlegen Erdungsbänder (V4A) bzw. Tiefenerder direkt im Zuge der Fundament- und Grabenarbeiten.',
            ],
            highlights: [
              'Diamant-Kernbohrungen für Zuleitungen in Gebäude und Technikräume',
              'Verlegung von V4A-Banderdern und Tiefenerdern im Erdreich',
              'Anbindung an den Fundamenterder bzw. Potentialausgleich',
              'Korrosionssichere Verbindungstechnik nach VDE-Vorgaben',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Bohr- & Erdungsplan',
                desc: 'Abstimmung der Durchdringungspunkte und Erdungswiderstandsanforderungen.',
              },
              {
                step: '02',
                title: 'Bohrung & Verlegung',
                desc: 'Erstellung der Kernbohrungen und Einbringen der Erdungsanlage.',
              },
              {
                step: '03',
                title: 'Anschlussvorbereitung',
                desc: 'Ausführen der Erdungsfahnen am Fundament für den Elektroanschluss.',
              },
            ],
            technicalNote: 'Korrosionsbeständiges V4A-Material gemäß DIN 18014 und VDE.',
          },
          bs: {
            title: 'Kernbohrungen und Erdungsarbeiten (Bušenje zidova i uzemljenje)',
            tagline: 'Sigurni prodori za napojne kablove i uzemljenje punionica',
            shortDesc:
              'Dijamantsko bušenje prolaza za kablove te polaganje traka uzemljenja (V4A) i sondi za izjednačenje potencijala.',
            fullDesc: [
              'Za siguran rad stanica za punjenje električnih vozila neophodni su čisti prodori prema razvodnim ormarima u objektu i kvalitetan sistem uzemljenja.',
              'Vršimo precizna dijamantska bušenja kroz zidove i ploče te tokom iskopa polažemo pocinčane ili inox (V4A) trake za uzemljenje i sonde direktno uz temelje punjača.',
            ],
            highlights: [
              'Dijamantsko bušenje za uvod glavnih energetskih kablova',
              'Polaganje V4A traka za uzemljenje i dubinskih sondi u zemlju',
              'Povezivanje na glavni sistem uzemljenja i izjednačenja potencijala',
              'Antikorozivni spojevi prema važećim VDE standardima',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Određivanje tačaka',
                desc: 'Usaglašavanje mjesta bušenja i rute uzemljenja.',
              },
              {
                step: '02',
                title: 'Bušenje i polaganje',
                desc: 'Izrada otvora i postavljanje trake uzemljenja u rov i uz temelj.',
              },
              {
                step: '03',
                title: 'Izvod za spajanje',
                desc: 'Ostavljanje priključnih izvoda uz temelj za elektro-priključenje.',
              },
            ],
            technicalNote: 'Upotreba V4A nehrđajućih traka po normama DIN 18014 i VDE.',
          },
        },
      },
      {
        slug: 'kabelschachtbau',
        code: '3.5',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Kabelschachtbau',
            tagline: 'Zug-, Verteiler- und Abzweigschächte für Ladeinfrastruktur',
            shortDesc:
              'Lieferung und Einbau von Beton- und Kunststoff-Kabelziehschächten bis hin zu Schwerlastabdeckungen Klasse D400.',
            fullDesc: [
              'Bei größeren Ladeparks oder langen Zuleitungsstrecken erleichtern strategisch platzierte Kabelschächte das Einziehen schwerer Stromkabel sowie spätere Wartungs- und Erweiterungsarbeiten.',
              'Wir bauen Fertigteil-Betonschächte und modulare Kunststoffschächte exakt auf Geländehöhe ein – inklusive Drainageschicht und befahrbaren Schachtabdeckungen.',
            ],
            highlights: [
              'Einbau von Beton- und Verbundwerkstoff-Kabelschächten',
              'Schwerlastabdeckungen bis Belastungsklasse D400 für Lkw-Bereiche',
              'Saubere Rohreinführungen und Abdichtungen am Schachtkörper',
              'Versickerungsfähige Schachtsohle gegen Staunässe',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Baugrubenaushub',
                desc: 'Aushub der Schachtgrube und Einbringen einer Kies-/Drainageschicht.',
              },
              {
                step: '02',
                title: 'Schachtmontage',
                desc: 'Setzen des Schachts und Anschluss der ankommenden Leerrohre.',
              },
              {
                step: '03',
                title: 'Höhenanpassung',
                desc: 'Bündiges Einpassen der Schachtabdeckung in den Fahrbahn- oder Pflasterbelag.',
              },
            ],
            technicalNote: 'Belastungsklassen B125 bis D400 je nach Verkehrsfläche.',
          },
          bs: {
            title: 'Kabelschachtbau (Izgradnja kablovskih šahtova)',
            tagline: 'Ugradnja vučnih i razvodnih šahtova za E-punionice',
            shortDesc:
              'Postavljanje betonskih i kompozitnih kablovskih šahtova sa poklopcima nosivosti do klase D400 za teška vozila.',
            fullDesc: [
              'Na većim parkinzima za punjenje i dužim trasama kablovski šahtovi znatno olakšavaju uvlačenje debelih energetskih kablova, održavanje i buduće proširenje mreže.',
              'Ugrađujemo gotove betonske i modularne šahtove u nivou terena, sa drenažnim slojem na dnu i poklopcima prilagođenim opterećenju vozila.',
            ],
            highlights: [
              'Ugradnja betonskih i kompozitnih kablovskih šahtova',
              'Poklopci nosivosti B125 do D400 za parkinge i teretne zone',
              'Uredno uvođenje i zaptivanje cijevi u zid šahta',
              'Drenažni sloj na dnu šahta protiv zadržavanja vode',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Iskop i drenaža',
                desc: 'Kopanje jame za šaht i postavljanje šljunčanog drenažnog sloja.',
              },
              {
                step: '02',
                title: 'Postavljanje šahta',
                desc: 'Spuštanje šahta i spajanje svih dolaznih i odlaznih cijevi.',
              },
              {
                step: '03',
                title: 'Nivelisanje poklopca',
                desc: 'Poravnanje okvira i poklopca u ravni sa asfaltom ili behatonom.',
              },
            ],
            technicalNote: 'Klase opterećenja B125 do D400 u zavisnosti od namjene površine.',
          },
        },
      },
      {
        slug: 'pflaster-asphaltarbeiten',
        code: '3.6',
        image: ladeinfrastrukturImg,
        content: {
          de: {
            title: 'Pflaster- und Asphaltarbeiten',
            tagline: 'Fertigstellung von Ladebuchten, Sockeln & Zufahrten',
            shortDesc:
              'Sauberer Oberflächenschluss rund um Fundamente, Schaltschränke, Sockel und Stellflächen in Pflaster oder Asphalt.',
            fullDesc: [
              'Nach Verlegung der Energietrassen und dem Setzen der Fundamente sorgen wir für das optisch und funktional makellose Finish des gesamten Ladeparks.',
              'Wir passen Verbundpflaster, Rasengittersteine, Bordsteine und Asphaltflächen exakt an die neuen Ladesäulensockel und Anfahrschutzsysteme an – belastbar und langlebig.',
            ],
            highlights: [
              'Passgenaue Pflasteranarbeitung an Säulensockel und Fundamente',
              'Wiederherstellung und Neubau von Parkbuchten & Zufahrten',
              'Asphaltarbeiten inklusive Nahtversiegelung',
              'Sauberes Einsetzen von Bordeinfassungen und Schutzinseln',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Tragschicht & Gefälle',
                desc: 'Verdichten der Tragschichten mit gezielter Oberflächenentwässerung.',
              },
              {
                step: '02',
                title: 'Zuschnitt & Einbau',
                desc: 'Präzises Anarbeiten von Steinen oder Asphalt an Fundamente und Poller.',
              },
              {
                step: '03',
                title: 'Endabnahme',
                desc: 'Reinigung der Stellplätze für die direkte Nutzung durch E-Fahrzeuge.',
              },
            ],
            technicalNote: 'Belastbare Ausführung für stark frequentierte Gewerbe- und Kundenparkplätze.',
          },
          bs: {
            title: 'Pflaster- und Asphaltarbeiten (Behaton i asfaltiranje za punionice)',
            tagline: 'Završno uređenje parking mjesta, ostrva i prilaza oko punjača',
            shortDesc:
              'Čista obrada behatona, ivičnjaka i asfalta oko temelja punjača, razvodnih ormara i parking mjesta.',
            fullDesc: [
              'Nakon polaganja energetskih kablova i postavljanja temelja brinemo se za besprijekoran završni izgled kompletnog parkinga za punjenje.',
              'Precizno uklapamo behaton kocke, ivičnjake i asfalt oko novih postolja punjača i zaštitnih stubića – spremno za svakodnevno opterećenje vozila.',
            ],
            highlights: [
              'Precizno uklapanje behatonki oko temelja i zaštitnih stubova',
              'Obnova i izgradnja parking boksova i prilaznih traka',
              'Asfaltiranje sa zaptivanjem spojeva',
              'Postavljanje ivičnjaka i ostrva za punionice',
            ],
            processSteps: [
              {
                step: '01',
                title: 'Podloga i padovi',
                desc: 'Nabijanje podloge uz obezbjeđenje pravilnog oticanja vode.',
              },
              {
                step: '02',
                title: 'Ugradnja i rezanje',
                desc: 'Precizno rezanje i uklapanje kocki ili asfalta uz temelje.',
              },
              {
                step: '03',
                title: 'Završno čišćenje',
                desc: 'Predaja čistih i odmah upotrebljivih parking mjesta za E-vozila.',
              },
            ],
            technicalNote: 'Izdržljiva izvedba za frekventne poslovne i javne parkinge.',
          },
        },
      },
    ],
  },
];

export function findCategory(categorySlug?: string): ServiceCategory | undefined {
  return serviceCatalog.find((c) => c.slug === categorySlug);
}

export function findSubcategory(
  categorySlug?: string,
  serviceSlug?: string,
): { category: ServiceCategory; subcategory: SubcategoryItem } | undefined {
  const category = findCategory(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find((s) => s.slug === serviceSlug);
  if (!subcategory) return undefined;
  return { category, subcategory };
}
