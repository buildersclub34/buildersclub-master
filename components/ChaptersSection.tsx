import React from 'react';
import Image from 'next/image';

const cityData = [
  {
    id: 'bangalore',
    name: 'Bangalore',
    members: '500+',
    events: '45+',
    description: 'The tech and startup hub of India',
    color: 'from-blue-500 to-cyan-400',
    landmark: 'Vidhana Soudha',
    image: '/images/cities/bangalore.jpg',
    icon: '/images/cities/icons/bangalore.png'
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    members: '450+',
    events: '38+',
    description: 'The business and political capital',
    color: 'from-purple-500 to-pink-500',
    landmark: 'India Gate',
    image: '/images/cities/delhi.jpg',
    icon: '/images/cities/icons/delhi.png'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    members: '420+',
    events: '42+',
    description: 'The financial capital of India',
    color: 'from-amber-500 to-orange-500',
    landmark: 'Gateway of India',
    image: '/images/cities/mumbai.jpg',
    icon: '/images/cities/icons/mumbai.png'
  },
  {
    id: 'pune',
    name: 'Pune',
    members: '380+',
    events: '35+',
    description: 'The Oxford of the East',
    color: 'from-green-500 to-emerald-400',
    landmark: 'Shaniwar Wada',
    image: '/images/cities/pune.jpg',
    icon: '/images/cities/icons/pune.png'
  }
];

const ChaptersSection = () => {
  return (
    <section className="w-full py-16 bg-gray-900 relative overflow-hidden">
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
              <div className="relative h-40 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-30`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <Image 
                      src={city.icon} 
                      alt={`${city.name} icon`} 
                      layout="fill"
                      objectFit="contain"
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">{city.name}</h3>
                  <p className="text-sm text-yellow-400">{city.landmark}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{city.description}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{city.members}</div>
                    <div>Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{city.events}</div>
                    <div>Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">Active</div>
                    <div>Chapter</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Can&apos;t find your city? Help us start a chapter in your city!
          </p>
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9)] active:shadow-none">
            Start a Chapter
          </button>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full filter blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full filter blur-3xl -ml-20 -mb-20"></div>
    </section>
  );
};

export default ChaptersSection;
