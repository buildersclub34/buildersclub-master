import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Top companies and their representatives
const topCompanies = [
  {
    id: 'google',
    name: 'Vaibhav Jain',
    company: 'Google',
    role: 'Engineering Lead',
    image: '/Speakers-Advisors-Circle Members/Advisor - Vaibhav Jain - Google.png'
  },
  {
    id: 'reliance',
    name: 'Bhushan Nadoni',
    company: 'Reliance',
    role: 'Category Lead',
    image: '/Speakers-Advisors-Circle Members/147.png'
  },
  {
    id: 'rakuten',
    name: 'Chaitra Chidanand',
    company: 'Rakuten',
    role: 'VP of Product',
    image: '/Speakers-Advisors-Circle Members/Advisor - Rakuten - Chaitra.png'
  },
  {
    id: 'rapido',
    name: 'Rishikesh',
    company: 'Rapido',
    role: 'Co-founder',
    image: '/Speakers-Advisors-Circle Members/Advisor - Rishikesh - Rapido.png'
  },
  {
    id: 'aditya-birla',
    name: 'Atul Aggarwal',
    company: 'Aditya Birla',
    role: 'Fashion & Retail',
    image: '/Speakers-Advisors-Circle Members/Advisor - Atul Aggarwal-Aditya Birla Fashion & Retail.png'
  },
  {
    id: 'inflexor',
    name: 'Murli Ravi',
    company: 'Inflexor',
    role: 'Partner',
    image: '/Speakers-Advisors-Circle Members/Advisor - Murli - Inflexor.png'
  },
  {
    id: 'happilo',
    name: 'Chand Tiwari',
    company: 'Happilo',
    role: 'Co-founder',
    image: '/Speakers-Advisors-Circle Members/Advisor - Chand Tiwari - Happilo.png'
  },
  {
    id: 'limechat',
    name: 'Aniket',
    company: 'LimeChat',
    role: 'Founder',
    image: '/Speakers-Advisors-Circle Members/Advisor - Aniket - Limechat.png'
  },
  {
    id: 'driveu',
    name: 'Ashok',
    company: 'DriveU',
    role: 'Co-founder',
    image: '/Speakers-Advisors-Circle Members/Advisor - DriveU - Ashok.png'
  }
];

const MembersGrid = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-400/10 transition-all duration-1000"
            style={{
              width: `${150 + i * 10}px`,
              height: `${150 + i * 10}px`,
              left: `${10 + i * 6}%`,
              top: `${10 + (i * 20) % 60}%`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-1.5 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4 inline-flex items-center">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Trusted by the best
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Backed by <span className="text-yellow-400">Industry Leaders</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8">
              Join an elite network of visionaries and innovators from the world&apos;s most influential companies.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
              <span className="ml-2 text-gray-300">Rated 5/5 by 1000+ members</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-amber-500 p-1 rounded-3xl shadow-2xl shadow-yellow-500/20">
              <div className="bg-gray-900 p-6 md:p-8 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {topCompanies.map((member) => (
                    <div 
                      key={member.id}
                      className="bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-yellow-400/20 flex flex-col items-center justify-center h-32 hover:border-yellow-400/50 transition-colors duration-300"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-yellow-400/30">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-400 truncate w-full">
                          {member.company}
                        </div>
                        <div className="text-xs text-yellow-400/70 truncate w-full">
                          {member.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-400/10 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersGrid;
