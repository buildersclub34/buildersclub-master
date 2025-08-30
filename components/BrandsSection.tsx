'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

// Filter out any potentially problematic logos
const validBrands = [
  {
    name: 'Brand 1',
    logo: '/logos brands/Brands.png',
  },
  {
    name: 'Brand 4',
    logo: '/logos brands/Brands (4).png',
  },
  {
    name: 'Brand 5',
    logo: '/logos brands/Brands (5).png',
  },
  {
    name: 'Brand 6',
    logo: '/logos brands/Brands (6).png',
  },
  {
    name: 'Brand 8',
    logo: '/logos brands/Brands (8).png',
  },
  {
    name: 'Brand 9',
    logo: '/logos brands/Brands (9).png',
  },
  {
    name: 'Brand 10',
    logo: '/logos brands/Brands (10).png',
  },
  {
    name: 'Brand 11',
    logo: '/logos brands/Brands (11).png',
  },
  {
    name: 'Partner 2',
    logo: '/logos brands/Partner (2).png',
  },
  {
    name: 'Partner 3',
    logo: '/logos brands/Partner (3).png',
  },
  {
    name: 'Partner 4',
    logo: '/logos brands/Partner (4).png',
  },
  {
    name: 'Partner 5',
    logo: '/logos brands/Partner (5).png',
  },
  {
    name: 'Partner 7',
    logo: '/logos brands/Partner (7).png',
  },
  {
    name: 'Partner 8',
    logo: '/logos brands/Partner (8).png',
  },
  {
    name: 'Partner 9',
    logo: '/logos brands/Partner (9).png',
  },
  {
    name: 'Partner 10',
    logo: '/logos brands/Partner (10).png',
  },
  {
    name: 'Partner 11',
    logo: '/logos brands/Partner (11).png',
  },
  {
    name: 'Partner 13',
    logo: '/logos brands/Partner (13).png',
  },
  {
    name: 'Partner 14',
    logo: '/logos brands/Partner (14).png',
  },
  {
    name: 'Partner 15',
    logo: '/logos brands/Partner (15).png',
  },
  {
    name: 'Partner 16',
    logo: '/logos brands/Partner (16).png',
  },
  {
    name: 'Partner 17',
    logo: '/logos brands/Partner (17).png',
  },
  {
    name: 'Partner 18',
    logo: '/logos brands/Partner (18).png',
  },
  {
    name: 'Partner 19',
    logo: '/logos brands/Partner (19).png',
  },
  {
    name: 'Partner 20',
    logo: '/logos brands/Partner (20).png',
  },
  {
    name: 'Partner 21',
    logo: '/logos brands/Partner (21).png',
  },
  {
    name: 'Partner 22',
    logo: '/logos brands/Partner (22).png',
  },
  {
    name: 'Partner 23',
    logo: '/logos brands/Partner (23).png',
  },
  {
    name: 'Partner 24',
    logo: '/logos brands/Partner (24).png',
  },
  {
    name: 'Partner 25',
    logo: '/logos brands/Partner (25).png',
  },
  {
    name: 'Partner 26',
    logo: '/logos brands/Partner (26).png',
  },
  {
    name: 'Partner 27',
    logo: '/logos brands/Partner (27).png',
  },
  {
    name: 'D2C Partner 1',
    logo: '/logos brands/Partner - D2C.png',
  },
  {
    name: 'D2C Partner 2',
    logo: '/logos brands/Partner - D2C (2).png',
  },
  {
    name: 'D2C Partner 3',
    logo: '/logos brands/Partner - D2C (3).png',
  },
  {
    name: 'D2C Partner 4',
    logo: '/logos brands/Partner - D2C (4).png',
  },
  {
    name: 'D2C Partner 5',
    logo: '/logos brands/Partner - D2C (5).png',
  },
  {
    name: 'D2C Partner 6',
    logo: '/logos brands/Partner - D2C (6).png',
  },
  {
    name: 'D2C Partner 7',
    logo: '/logos brands/Partner - D2C (7).png',
  },
].filter(brand => !brand.logo.includes('Partner') && !brand.logo.includes('Advisor') && !brand.logo.includes('Circle Member') && !brand.logo.includes('Investor'));

// Only use a subset of brands for better performance
const brands = validBrands.slice(0, 20);

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Duplicate the brand items for infinite scrolling
    const scrollerInner = scrollerRef.current;
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Brands We've"
          highlightedText="Worked With"
          description="Trusted by leading companies and innovative startups worldwide"
          badgeText="Partners"
        />
      </div>

      <div 
        ref={containerRef}
        className="w-full overflow-hidden -mt-4"
      >
        <div 
          ref={scrollerRef}
          className="flex items-center gap-12 w-max whitespace-nowrap pt-2"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
            {brands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex flex-col items-center justify-center group"
              >
                <div className={`${['Brand 1', 'Brand 4', 'Brand 5'].includes(brand.name) ? 'w-48 h-36' : 'w-40 h-32'} flex items-center justify-center bg-black/20 rounded-xl border border-white/5 hover:border-[#FFD700]/30 transition-all duration-200 p-4`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt=""
                      fill
                      className="object-contain transition-transform duration-200 hover:scale-105"
                      sizes={['Brand 1', 'Brand 4', 'Brand 5'].includes(brand.name) ? '(max-width: 768px) 140px, 160px' : '(max-width: 768px) 120px, 140px'}
                      unoptimized
                      style={{
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.9,
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2.5));
          }
        }
      `}</style>
    </section>
  );
}
