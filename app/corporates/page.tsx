'use client';

import { Play, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import PartnerDealsSection from '@/components/PartnerDealsSection';
import SectionHeader from '@/components/SectionHeader';

export default function CorporatesPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setShowVideo(true);
    videoRef.current?.play();
  };

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center px-6 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                <path d="m21 3 1 11h-2"></path>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                <path d="M3 4h8"></path>
              </svg>
              For Corporates & Enterprises
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Gateway to <span className="text-yellow-400">Business Innovation</span> & <span className="text-yellow-400">Strategic Partnerships</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with forward-thinking corporates to drive innovation, business development, and industry leadership through access to our vast network of founders, CXOs, and investors.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/partner-registration" 
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Partner with Us
              </Link>
              <button 
                onClick={handlePlayVideo}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <video 
              ref={videoRef}
              className="w-full rounded-lg"
              controls
              autoPlay
              src="/videos/corporate-partnerships.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* How We Help Enterprises Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-yellow-400/10 border-2 border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">How We Help Enterprises:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Access to Decision Makers */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">Access to Decision Makers</h4>
                    <p className="text-gray-300">Reach the decision makers in enterprises, SMBs and Growth Stage startups</p>
                  </div>
                </div>

                {/* Innovation Partnerships */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">Innovation Partnerships</h4>
                    <p className="text-gray-300">Connect with startups & scale-ups for cutting-edge solutions</p>
                  </div>
                </div>

                {/* Business Development */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">Business Development</h4>
                    <p className="text-gray-300">Expand your market reach through strategic partnerships</p>
                  </div>
                </div>

                {/* Brand Positioning */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                      <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3 1 11h-2"></path>
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                      <path d="M3 4h8"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">Brand Positioning</h4>
                    <p className="text-gray-300">Showcase thought leadership via events, content, and collaborations</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link 
                  href="/partner-registration" 
                  className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex text-lg px-8 py-4 mx-auto shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
                >
                  Partner with The Builders Club
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event <span className="text-yellow-400">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Glimpses from our most memorable events and gatherings with the community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/Event Highlights/1.png',
              '/Event Highlights/1748868254229.jpg',
              '/Event Highlights/4.jpg',
              '/Event Highlights/BOARD-ROOM-bangalore.png',
              '/Event Highlights/BUILDING-IN-TECH-CONFERENCE-1.png',
              '/Event Highlights/CXO-Leadership-Mixer-DELHI-NCR-2.png'
            ].map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.2)]"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image}
                    alt={`Event highlight ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-lg font-bold mb-1">
                        {image.split('/').pop()?.split('.')[0].replace(/-/g, ' ')}
                      </h3>
                      <div className="w-12 h-0.5 bg-yellow-400 mb-2"></div>
                      <p className="text-yellow-300 text-sm">View Gallery</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/events"
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Deals Section */}
      <PartnerDealsSection />

      {/* Brands Section */}
      <section className="relative bg-black overflow-hidden py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col text-center items-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
              Partners
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Brands We&apos;ve{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Worked With
              </span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Trusted by leading companies and innovative startups worldwide
            </p>
          </div>
        </div>
        
        <div className="w-full overflow-hidden -mt-4">
          <div 
            style={{ 
              animation: 'scroll 30s linear infinite',
              animationPlayState: 'running'
            }} 
            className="flex items-center gap-12 w-max whitespace-nowrap pt-2"
          >
            {[
              '/logos brands/Brands.png',
              '/logos brands/Brands (4).png',
              '/logos brands/Brands (5).png',
              '/logos brands/Brands (6).png',
              '/logos brands/Brands (8).png',
              '/logos brands/Brands (9).png',
              '/logos brands/Brands (10).png',
              '/logos brands/Brands (11).png'
            ].flatMap((logo, i) => [
              <div key={`${i}-1`} className="flex flex-col items-center justify-center group">
                <div className="w-48 h-36 flex items-center justify-center bg-black/20 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-all duration-200 p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo}
                      alt="Brand logo"
                      fill
                      className="object-contain transition-transform duration-200 hover:scale-105"
                      style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                    />
                  </div>
                </div>
              </div>,
              <div key={`${i}-2`} className="flex flex-col items-center justify-center group">
                <div className="w-40 h-32 flex items-center justify-center bg-black/20 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-all duration-200 p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo}
                      alt="Brand logo"
                      fill
                      className="object-contain transition-transform duration-200 hover:scale-105"
                      style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            ])}
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 4)); }
          }
        `}</style>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            badgeText="FAQ"
            title="Frequently Asked"
            highlightedText="Questions"
            description="Find answers to common questions about our corporate partnerships and programs."
            className="text-center"
          />
          
          <div className="space-y-4 mt-12">
            {[
              {
                question: "How can my company partner with The Builders Club?",
                answer: "We offer various partnership opportunities for corporates. You can start by filling out our partnership form, and our team will get in touch to discuss the best way to collaborate based on your business objectives."
              },
              {
                question: "What are the benefits of becoming a corporate partner?",
                answer: "Corporate partners gain access to our network of startups and founders, early access to innovative solutions, speaking opportunities at our events, and potential investment opportunities in promising startups."
              },
              {
                question: "Can we sponsor events or programs?",
                answer: "Yes, we offer various sponsorship packages for our events and programs. These can be customized based on your marketing and business development goals."
              },
              {
                question: "How do you ensure the right match between corporates and startups?",
                answer: "We carefully assess the strategic goals of both parties and facilitate curated introductions based on mutual interests, industry focus, and potential for collaboration."
              },
              {
                question: "What kind of support do you provide for corporate innovation programs?",
                answer: "We help design and implement innovation programs including hackathons, accelerators, and open innovation challenges, providing access to our network of startups, mentors, and industry experts."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-800 pb-4 group"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-yellow-400 transform transition-transform ${openFaq === index ? 'rotate-90' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="text-gray-300 pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
