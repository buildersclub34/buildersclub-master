'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { newAdvisors } from '../data/new-advisors';
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
  const [searchTerm, setSearchTerm] = useState('');
  // Display all advisors without pagination

  const filteredAdvisors = useMemo(() => {
    let result = [...advisors];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (advisor) =>
          advisor.name.toLowerCase().includes(term) ||
          advisor.company.toLowerCase().includes(term) ||
          advisor.expertise.toLowerCase().includes(term) ||
          advisor.role.toLowerCase().includes(term)
      );
    }
    
    // Always return only first 12 advisors
    return result.slice(0, 12);
  }, [searchTerm]);

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
    <div className="w-full">
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search advisors by name, company, or expertise..."
            className="w-full pl-12 pr-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAdvisors.map((advisor) => (
          <AdvisorCard 
            key={advisor.id} 
            advisor={advisor as Advisor} 
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <NeoPopButton 
          as="link"
          href="/advisors"
          variant="primary"
          size="default"
          className="mx-auto"
        >
          See All Advisors
          <ChevronRight className="w-4 h-4 ml-2" />
        </NeoPopButton>
      </div>
    </div>
  );
}
