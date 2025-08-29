import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Handshake } from 'lucide-react';
import SectionHeader from './SectionHeader';
import NeoPopButton from './ui/NeoPopButton';

const partners = [
  {
    name: 'Notion',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/j5avtsi9fmcbxnl3sf7cnak600zg',
    description: 'Organize teamwork and increase productivity',
    members: '10,238',
    savings: '$12,000',
    offer: '6 months free on the Business plan with Unlimited AI',
    tags: ['Collaboration', 'Task Management', 'Productivity'],
    isPremium: false
  },
  {
    name: 'Make',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/cdkedczs1bt3ixi5mtkz2f76ds8e',
    description: 'A no-code AI platform for limitless automation',
    members: '6,296',
    savings: '$636',
    offer: '12 months free on Teams plan',
    tags: ['Automation', 'No-Code', 'Workflows'],
    isPremium: true
  },
  {
    name: 'Stripe',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/0hiu8hhbwq3u94n8u4o77p0ibgvm',
    description: 'Manage your online payments',
    members: '4,152',
    savings: '$500',
    offer: 'Waived Stripe fees on your next $20,000 in payment processing',
    tags: ['E-Commerce', 'Payments', 'Fintech'],
    isPremium: true
  },
  {
    name: 'Apollo.io',
    logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/4dk4vgqcb6zd5weh0afogwg77iox',
    description: 'Sales Intelligence and Engagement Platform',
    members: '2,366',
    savings: '$3,000',
    offer: '50% off the annual Basic or Professional plan for 1 year (Up to 5 seats)',
    tags: ['Prospecting', 'AI Sales', 'Lead Management'],
    isPremium: false
  }
];

const PartnersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <SectionHeader
            title="Our Trusted"
            highlightedText="Partners"
            description="Exclusive deals and discounts from our trusted partners to help you build and grow your business."
            badgeText="Partnerships"
            align="center"
            icon={<Handshake className="w-5 h-5" />}
            titleClassName="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>

        <div className="relative mt-12">
          <div className="absolute -inset-4 -m-2 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-2xl shadow-black/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6" style={{ gridAutoRows: '1fr', placeItems: 'stretch center' }}>
              {partners.map((partner, index) => (
                <div key={index} className="w-full h-full">
                  <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-visible hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-300 h-full flex flex-col hover:border-yellow-500/50 transform hover:-translate-y-1 min-h-[450px] max-w-[320px] mx-auto w-full">
                    <div className="flex gap-4 items-start p-5 pb-0 relative z-10">
                      <div className="flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 bg-yellow-500/10 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-gray-700/50">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} Logo`}
                            width={48}
                            height={48}
                            className="rounded-md h-12 w-12 object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 pt-1 relative">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                              {partner.name}
                            </h3>
                            <div className="mt-1.5 flex items-center">
                              <span className="text-xs text-gray-400">
                                <span className="font-medium text-yellow-400">{partner.members}</span> members using this
                              </span>
                            </div>
                          </div>
                          {partner.isPremium && (
                            <div className="flex items-center space-x-2">
                              <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2.5 py-1 rounded-full border border-yellow-500/30">
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                                </svg>
                                Premium
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-0 flex-1 flex flex-col relative z-10">
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6">
                        {partner.description}
                      </p>
                      <div className="mt-auto flex flex-col">
                        <div className="border-t border-gray-700/50 pt-5">
                          <p className="text-yellow-400 font-bold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                            {partner.offer}
                          </p>
                          <p className="text-xs text-gray-400 mb-2">
                            Save up to <span className="font-bold text-yellow-400">{partner.savings}</span>
                          </p>
                        </div>
                        <div className="mt-4 mb-5">
                          <a
                            className="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold text-sm rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/20"
                            href="#"
                          >
                            <div className="flex items-center justify-center gap-2">
                              Get This Deal
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {partner.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* See All Partners Button */}
        <div className="flex justify-center mt-12">
          <NeoPopButton
            as="link"
            href="/partners"
            variant="primary"
            size="lg"
            className="px-8 py-3 text-lg font-bold"
          >
            See All Partners
          </NeoPopButton>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
