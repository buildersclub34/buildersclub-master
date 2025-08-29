import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import NeoPopButton from './ui/NeoPopButton';

const cityData = [
  {
    id: 'bangalore',
    name: 'Bangalore',
    members: '500+',
    events: '45+',
    description: 'The tech and startup hub of India',
    color: 'from-blue-500 to-cyan-400',
    landmark: 'Vidhana Soudha',
    image: '/City Icons/Bengaluru - India.png',
    icon: '/City Icons/Bengaluru - India.png'
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    members: '450+',
    events: '38+',
    description: 'The business and political capital',
    color: 'from-purple-500 to-pink-500',
    landmark: 'India Gate',
    image: '/City Icons/New Delhi ▪️India.png',
    icon: '/City Icons/New Delhi ▪️India.png'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    members: '420+',
    events: '42+',
    description: 'The financial capital of India',
    color: 'from-amber-500 to-orange-500',
    landmark: 'Gateway of India',
    image: '/City Icons/Mumbai ▪️India.png',
    icon: '/City Icons/Mumbai ▪️India.png'
  },
  {
    id: 'pune',
    name: 'Pune',
    members: '380+',
    events: '35+',
    description: 'The Oxford of the East',
    color: 'from-green-500 to-emerald-400',
    landmark: 'Shaniwar Wada',
    image: '/City Icons/Pune India Vintage Travel Tourism Poster.png',
    icon: '/City Icons/Pune India Vintage Travel Tourism Poster.png'
  }
];

const ChaptersSection = () => {
  return (
    <section className="w-full py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Growing <span className="text-yellow-400">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our active chapters across major cities and be part of India&apos;s most vibrant builder community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cityData.map((city) => (
            <div 
              key={city.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center">
                  <Image 
                    src={city.image} 
                    alt={`${city.name}`} 
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-sm text-yellow-400 font-medium">{city.landmark}</p>
                </div>
              </div>
              
              <div className="p-5 flex flex-col">
                <p className="text-gray-300 mb-5 flex-grow text-sm leading-relaxed">{city.description}</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700/50">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{city.members}</div>
                    <div className="text-xs text-gray-400 font-medium">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{city.events}</div>
                    <div className="text-xs text-gray-400 font-medium">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">Active</div>
                    <div className="text-xs text-gray-400 font-medium">Chapter</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Can&apos;t find your city? Help us start a chapter in your city!
          </p>
          <NeoPopButton
            as="button"
            variant="primary"
            size="lg"
            className="mx-auto px-10 py-4 text-lg font-bold tracking-wider"
          >
            Start a Chapter
            <ChevronRight className="w-5 h-5 ml-3" />
          </NeoPopButton>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full filter blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full filter blur-3xl -ml-20 -mb-20"></div>
    </section>
  );
};

export default ChaptersSection;
