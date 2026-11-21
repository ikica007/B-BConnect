import { Hero } from '../components/Hero';
import { ServiceCategories } from '../components/ServiceCategories';
import { About } from '../components/About';
import { CaseStudy } from '../components/CaseStudy';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <div>
      <Hero />
      <ServiceCategories />
      <About />
      <CaseStudy />
      <Contact />
    </div>
  );
}
