'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const testimonials = [
  {
    id: 1,
    quote: "The Builders Circle has been instrumental in helping us scale our operations. The quality of connections and insights from fellow members is unmatched.",
    author: "Karthik",
    role: "Founder, Startyour SaaS",
    image: "/Speakers-Advisors-Circle Members/Circle Member  - karthik - Startyour SaaS - Circle.png"
  },
  {
    id: 2,
    quote: "The knowledge sharing within The Builders Circle has been a game-changer for our go-to-market strategy. The community is incredibly supportive.",
    author: 'Anmol Mahajan',
    role: 'Circle Member',
    image: '/Speakers-Advisors-Circle Members/Circle Member - Anmol Mahajan.png'
  },
  {
    id: 3,
    quote: "As a startup founder, I've found The Builders Circle to be an exceptional platform for finding mentors and investors who truly understand the journey.",
    author: "Rahul Roy",
    role: "Founder, Arista Vault",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Arista Vault - Rahul Roy.png"
  },
  {
    id: 4,
    quote: "The Builders Circle has provided me with invaluable product insights and connections that have directly impacted our roadmap and growth.",
    author: "Arpit",
    role: "Founder, Angoor.ai",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Arpit - Angoor.ai.png"
  },
  {
    id: 5,
    quote: "The peer learning and networking opportunities at The Builders Circle have been transformative for our brand's growth and market positioning.",
    author: "Debarya Dutta",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Debarya Dutta.png"
  },
  {
    id: 6,
    quote: "Being part of The Builders Circle has opened doors to strategic partnerships that have accelerated our market expansion and customer acquisition.",
    author: "Manas",
    role: "TKG Foods",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Manas - TKG Foods.png"
  },
  {
    id: 7,
    quote: "The Builders Circle is where I found both investors and advisors who truly understand the startup journey and challenges of scaling in India.",
    author: "Mayank",
    role: "Founder, Datavio",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Mayank - Datavio.png"
  },
  {
    id: 8,
    quote: "The quality of discussions and the willingness of members to help each other is what makes The Builders Circle special and valuable.",
    author: "Monika",
    role: "Presto Apps",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Monika - presto Apps.png"
  },
  {
    id: 9,
    quote: "The Builders Circle has been a catalyst for our growth, providing access to mentors and resources we wouldn't have found otherwise.",
    author: "Nithin",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Nithin.png"
  },
  {
    id: 10,
    quote: "The insights from fellow founders have been invaluable in navigating the challenges of scaling our business in the current market.",
    author: "Rahul Johar",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Rahul Johar.png"
  },
  {
    id: 11,
    quote: "The Builders Circle has been instrumental in helping us refine our product strategy and connect with potential enterprise clients.",
    author: "Rakesh",
    role: "Founder, Previu",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Rakesh - Previu.png"
  },
  {
    id: 12,
    quote: "The quality of the network and the depth of experience within The Builders Circle is truly exceptional for any founder's journey.",
    author: "Sanjana",
    role: "Cosmos",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Sanjana - Cosmos.png"
  },
  {
    id: 13,
    quote: "The Builders Circle provided us with the right connections to scale our operations and enter new markets effectively.",
    author: "Sanjana Tripuramallu",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Sanjana Tripuramallu.png"
  },
  {
    id: 14,
    quote: "The peer learning sessions and founder stories at The Builders Circle have been invaluable for our growth journey.",
    author: "Shuchi",
    role: "6C",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Shuchi - 6C.png"
  },
  {
    id: 15,
    quote: "Being part of The Builders Circle has significantly expanded our network and opened up new business opportunities.",
    author: "Srirupa",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Srirupa.png"
  },
  {
    id: 16,
    quote: "The mentorship and guidance I've received through The Builders Circle have been instrumental in shaping our company's strategy.",
    author: "Sumit Rastogi",
    role: "Circle Member",
    image: "/Speakers-Advisors-Circle Members/Circle Member - Sumit Rastogi.png"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotate testimonials and handle window resize
  useEffect(() => {
    if (isPaused) return;
    
    const handleResize = () => {
      // Recalculate current index based on new window width
      const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      setCurrentIndex(0); // Reset to first page on resize for simplicity
    };
    
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
      setCurrentIndex(prevIndex => prevIndex >= maxIndex ? 0 : prevIndex + 1);
    }, 6000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPaused]);

  const nextSlide = () => {
    const itemsPerPage = typeof window === 'undefined' ? 4 : 
      window.innerWidth < 768 ? 1 : 
      window.innerWidth < 1024 ? 2 : 4;
    const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
    setCurrentIndex(prevIndex => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    const itemsPerPage = typeof window === 'undefined' ? 4 : 
      window.innerWidth < 768 ? 1 : 
      window.innerWidth < 1024 ? 2 : 4;
    const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
    setCurrentIndex(prevIndex => prevIndex <= 0 ? maxIndex : prevIndex - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

    // Get current testimonials to display (4 at a time)
  const getCurrentTestimonials = () => {
    if (typeof window === 'undefined') {
      return testimonials.slice(0, 4); // Default to 4 items on server
    }
    
    const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, testimonials.length);
    
    // If we're at the end and don't have enough items for a full page,
    // take from the beginning to fill the remaining slots
    if (endIndex - startIndex < itemsPerPage) {
      const remainingItems = itemsPerPage - (endIndex - startIndex);
      return [
        ...testimonials.slice(startIndex, endIndex),
        ...testimonials.slice(0, remainingItems)
      ];
    }
    
    return testimonials.slice(startIndex, endIndex);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 w-full">
        {getCurrentTestimonials().map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`w-full fade-in-up delay-${index}`}
          >
            <div className="h-full bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 h-full flex flex-col">
              <div className="flex-grow">
                <div className="text-yellow-400 mb-4">
                  <svg width="30" height="22" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
                    <path d="M15.2 0L9.2 30H0L10 0H15.2ZM40 0L34 30H24.8L34.8 0H40Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center mt-4 pt-4 border-t border-gray-800">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-yellow-500/30 mr-3 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=1f2937&color=f59e0b&size=128`;
                    }}
                  />
                </div>
                <div>
                  <p className="font-medium text-sm text-white">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full z-10 transition-all duration-300 hover:scale-110"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full z-10 transition-all duration-300 hover:scale-110"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ 
          length: Math.ceil(testimonials.length / 
            (typeof window === 'undefined' ? 4 : 
             window.innerWidth < 768 ? 1 : 
             window.innerWidth < 1024 ? 2 : 4)) 
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-gray-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-0 {
          animation-delay: 0s;
        }
        
        .delay-1 {
          animation-delay: 0.2s;
        }
        
        .delay-2 {
          animation-delay: 0.4s;
        }
        
        .delay-3 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
