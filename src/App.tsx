/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiveBackground } from './components/LiveBackground';
import { LanguageProvider } from './context/LanguageContext';
import { IntroFiber } from './components/IntroFiber';

import { HomePage } from './pages/HomePage';
import { LeistungenPage } from './pages/LeistungenPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ZusammenarbeitPage } from './pages/ZusammenarbeitPage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { KontaktPage } from './pages/KontaktPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <IntroFiber />
        <div className="min-h-screen text-offwhite font-sans selection:bg-electric selection:text-navy-900 relative">
          <LiveBackground />
          <div className="relative z-10 flex flex-col min-h-screen justify-between">
            <Navbar />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/leistungen" element={<LeistungenPage />} />
                <Route path="/leistungen/:categorySlug" element={<CategoryDetailPage />} />
                <Route path="/leistungen/:categorySlug/:serviceSlug" element={<ServiceDetailPage />} />
                <Route path="/zusammenarbeit" element={<ZusammenarbeitPage />} />
                <Route path="/ueber-uns" element={<UeberUnsPage />} />
                <Route path="/kontakt" element={<KontaktPage />} />
                {/* Fallback route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
