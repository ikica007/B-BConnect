import { TextRoll } from './TextRoll';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_transparent.png';

export function Footer() {
  return (
    <footer className="bg-transparent pt-28 pb-12 border-t border-navy-700/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-20 justify-between">
          <div className="w-full lg:w-[35%] pr-0 lg:pr-8">
            <Link 
              to="/"
              className="flex items-center gap-4 mb-6 cursor-pointer inline-flex"
            >
              <img src={logo} alt="B&B Connect Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]" />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-3xl font-extrabold tracking-[0.05em] text-offwhite uppercase leading-none flex gap-2">
                  <span className="text-electric"><TextRoll>B&B</TextRoll></span> <TextRoll>CONNECT</TextRoll>
                </span>
              </div>
            </Link>
            <p className="text-coolgray text-sm leading-relaxed mb-6 font-light">
              Ihr verlässlicher Partner für Glasfasermontage, Tiefbau, Spleißarbeiten und Netzwerkverkabelung – bundesweit im täglichen Einsatz.
            </p>
            <div className="text-coolgray text-sm space-y-3 font-light">
              <p className="flex items-center gap-3">
                <span className="text-electric">📍</span> 
                <span className="text-offwhite font-medium">Otto-Hahn-Str. 27, 32108 Bad Salzuflen, Deutschland</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-electric">📧</span> 
                <a href="mailto:info@bundbconnect.de" className="hover:text-electric transition-colors">info@bundbconnect.de</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-electric">📞</span> 
                <a href="tel:+4952229809900" className="hover:text-electric transition-colors">+49 (0) 5222 / 980 99 00</a>
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-[35%] grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-offwhite font-bold tracking-widest text-xs mb-6 uppercase">Spezialseiten</h4>
              <ul className="flex flex-col gap-3 text-coolgray text-sm">
                <li><Link to="/leistungen" className="hover:text-electric transition-colors w-fit">Unsere Leistungen</Link></li>
                <li><Link to="/zusammenarbeit" className="hover:text-electric transition-colors w-fit">Unsere Zusammenarbeit</Link></li>
                <li><Link to="/ueber-uns" className="hover:text-electric transition-colors w-fit">Über uns</Link></li>
                <li><Link to="/kontakt" className="hover:text-electric transition-colors w-fit">Kontakt</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-offwhite font-bold tracking-widest text-xs mb-6 uppercase">Partner & Bereich</h4>
              <ul className="flex flex-col gap-3 text-coolgray text-sm">
                <li className="text-offwhite font-medium">Libra GmbH</li>
                <li className="text-offwhite font-medium">L-Tec GmbH</li>
                <li className="text-coolgray text-xs mt-2">Bundesweit &gt; 20 Fachkräfte</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-[28%]">
            <h4 className="text-offwhite font-bold tracking-widest text-xs mb-6 uppercase">Standortkarte</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-navy-700 shadow-xl relative bg-navy-950">
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
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-navy-700 text-coolgray text-xs">
          <p>&copy; {new Date().getFullYear()} B&B Connect UG. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/kontakt" className="hover:text-electric transition-colors">Impressum</Link>
             <Link to="/kontakt" className="hover:text-electric transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
