import Hero from '@/components/Hero';
import { Section } from '@/components/layout/Section';
import About from '@/components/About';
import BrandsSection from '@/components/BrandsSection';
import EventsSection from '@/components/EventsSection';
import Testimonials from '@/components/Testimonials';
import InvestmentPartners from '@/components/InvestmentPartners';
import OfficialPartners from '@/components/OfficialPartners';
import CorporatesSection from '@/components/CorporatesSection';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        {/* Hero section - No top padding, full width */}
        <Section topSpacing="none" bottomSpacing="none" className="px-0">
          <Hero />
        </Section>
        
        {/* About section - Large top and bottom spacing */}
        <Section topSpacing="2xl" bottomSpacing="2xl">
          <About />
        </Section>
        
        {/* Brands section - Large bottom spacing */}
        <Section topSpacing="lg" bottomSpacing="3xl">
          <BrandsSection />
        </Section>
        
        {/* Events section - Large top and bottom spacing */}
        <Section topSpacing="3xl" bottomSpacing="3xl">
          <EventsSection />
        </Section>
        
        {/* Corporates section - Large top and bottom spacing */}
        <Section topSpacing="3xl" bottomSpacing="3xl">
          <CorporatesSection />
        </Section>
        
        {/* Testimonials section - Large top and bottom spacing */}
        <Section topSpacing="3xl" bottomSpacing="3xl" className="bg-gray-900/50">
          <Testimonials />
        </Section>
        
        {/* Investment Partners section - Large top and bottom spacing */}
        <Section topSpacing="3xl" bottomSpacing="3xl">
          <InvestmentPartners />
        </Section>
        
        {/* Official Partners section - Large top and bottom spacing */}
        <Section topSpacing="3xl" bottomSpacing="3xl">
          <OfficialPartners />
        </Section>
      </main>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = Home as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <div className="flex flex-col min-h-screen">
      {page}
    </div>
  );
};

export default PageWithLayout;