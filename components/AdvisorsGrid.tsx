'use client';

import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { newAdvisors } from '../data/new-advisors';
import '../app/styles/animations.css';
import NeoPopButton from './ui/NeoPopButton';
import AdvisorCard from './ui/AdvisorCard';
import type { Advisor } from '@/data/advisors';

const advisors: Advisor[] = [
  ...newAdvisors,
  {
    id: '1',
    name: 'Aakash Sinha',
    company: 'Clazar',
    role: 'Founding Member',
    expertise: 'GTM – US Market, B2B Marketing',
    linkedin: 'https://www.linkedin.com/in/aakash-sinha-34331a66/',
    website: 'https://clazar.io',
    companyLogo: 'https://logo.clearbit.com/clazar.io',
    image: '/Speakers-Advisors-Circle Members/Advisor - Clazar - Aakash.png'
  },
  // Add other advisors from the advisors page here
];

export default function AdvisorsGrid() {
  // Filter advisors to only include those with images
  const filteredAdvisors = useMemo(() => {
    return advisors
      .filter(advisor => advisor.image && advisor.image.trim() !== '')
      .slice(0, 12); // Limit to 12 advisors for better performance
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getRandomColor = (str: string) => {
    const colors = [
      'bg-pink-500/20 text-pink-400',
      'bg-blue-500/20 text-blue-400',
      'bg-green-500/20 text-green-400',
      'bg-purple-500/20 text-purple-400',
      'bg-yellow-500/20 text-yellow-400',
      'bg-red-500/20 text-red-400',
    ];
    const index = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex space-x-6 py-4 animate-scroll">
            {filteredAdvisors.map((advisor) => (
              <div key={advisor.id} className="flex-shrink-0 w-72">
                <AdvisorCard 
                  advisor={advisor as Advisor} 
                />
              </div>
            ))}
            {filteredAdvisors.map((advisor) => (
              <div key={`${advisor.id}-duplicate`} className="flex-shrink-0 w-72">
                <AdvisorCard 
                  advisor={advisor as Advisor} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <NeoPopButton 
          as="link"
          href="/advisors"
          variant="primary"
          size="lg"
          className="mx-auto px-8 py-4 text-lg"
        >
          See All Advisors
          <ChevronRight className="w-5 h-5 ml-3" />
        </NeoPopButton>
      </div>
    </div>
  );
}
