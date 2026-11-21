import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-transparent py-8 border-t border-navy-700/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between text-coolgray text-xs">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/kontakt" className="hover:text-electric transition-colors">{t.footer.imprint}</Link>
            <Link to="/kontakt" className="hover:text-electric transition-colors">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
