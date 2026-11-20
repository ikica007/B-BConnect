import { Hero } from '../components/Hero';
import { ScrollSequence } from '../components/ScrollSequence';
import { Productivity } from '../components/Productivity';
import { Gallery } from '../components/Gallery';
import { Network } from '../components/Network';
import { About } from '../components/About';
import { CaseStudy } from '../components/CaseStudy';
import { Contact } from '../components/Contact';
import { StickyCards } from '../components/StickyCards';
import { ChevronRight, Layers, Handshake, Users, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <Hero />
      <ScrollSequence />
      <StickyCards />

      {/* Direct Page Link Teasers */}
      <section className="bg-navy-950/80 py-16 border-y border-navy-700/60 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.25em] uppercase bg-electric/10 border border-electric/20 px-4 py-1.5 rounded-full">
              Spezialseiten entdecken
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-offwhite uppercase mt-4">
              Detaillierte Einblicke in unsere Bereiche
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/leistungen" 
              className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl hover:border-electric transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-navy-900 transition-colors">
                  <Layers size={22} />
                </div>
                <h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-electric transition-colors">
                  Unsere Leistungen
                </h3>
                <p className="text-xs text-coolgray font-light leading-relaxed">
                  Alle 9 Spezialleistungen im Bereich Glasfaser, Tiefbau & Spleißtechnik auf einer Seite.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-electric mt-6 pt-4 border-t border-navy-800">
                <span>Zur Leistungsseite</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/zusammenarbeit" 
              className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl hover:border-electric transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-navy-900 transition-colors">
                  <Handshake size={22} />
                </div>
                <h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-electric transition-colors">
                  Unsere Zusammenarbeit
                </h3>
                <p className="text-xs text-coolgray font-light leading-relaxed">
                  Libra GmbH, L-Tec GmbH & bundesweiter Einsatz mit über 20 Spezialkräften.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-electric mt-6 pt-4 border-t border-navy-800">
                <span>Zur Partnerseite</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/ueber-uns" 
              className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl hover:border-electric transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-navy-900 transition-colors">
                  <Users size={22} />
                </div>
                <h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-electric transition-colors">
                  Über uns
                </h3>
                <p className="text-xs text-coolgray font-light leading-relaxed">
                  Unternehmensprofil der B&B Connect UG und Leitung durch Amar Bektašević.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-electric mt-6 pt-4 border-t border-navy-800">
                <span>Mehr über uns</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/kontakt" 
              className="bg-navy-900/90 border border-navy-700 p-6 rounded-2xl hover:border-electric transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-navy-900 transition-colors">
                  <PhoneCall size={22} />
                </div>
                <h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-electric transition-colors">
                  Kontakt & Anfahrt
                </h3>
                <p className="text-xs text-coolgray font-light leading-relaxed">
                  Otto-Hahn-Str. 27, 32108 Bad Salzuflen, E-Mail, Telefon und Google Map.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-electric mt-6 pt-4 border-t border-navy-800">
                <span>Zur Kontaktseite</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Productivity />
      <Gallery />
      <Network />
      <About />
      <CaseStudy />
      <Contact />
    </div>
  );
}
