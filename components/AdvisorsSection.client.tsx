'use client';

import AdvisorsGrid from './AdvisorsGrid';
import { advisors as existingAdvisors } from '@/data/advisors';
import { newAdvisors } from '@/data/new-advisors';

interface AdvisorsSectionProps {
  advisors?: any[]; // You might want to replace 'any' with a proper Advisor type
}

const AdvisorsSection: React.FC<AdvisorsSectionProps> = () => {
  // Combine both advisor lists
  const allAdvisors = [...existingAdvisors, ...newAdvisors];

  return (
    <section className="w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our <span className="text-yellow-400">Advisors</span>
        </h2>
        <AdvisorsGrid />
      </div>
    </section>
  );
};

export default AdvisorsSection;
