'use client';

import Image from 'next/image';

const partners = [
  { id: 1, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/65-2.png', alt: 'Partner 1' },
  { id: 2, logo: '/logos brands/Nasscom-logo-svg.svg', alt: 'Nasscom' },
  { id: 3, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/86.png', alt: 'Partner 3' },
  { id: 4, logo: '/logos brands/Nvidia_logo.svg', alt: 'Nvidia' },
  { id: 5, logo: '/logos brands/Dell_Logo.svg', alt: 'Dell' },
  { id: 6, logo: '/logos brands/intel-svgrepo-com.svg', alt: 'Intel' },
  { id: 7, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/92.png', alt: 'Partner 7' },
  { id: 8, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/91.png', alt: 'Partner 8' },
  { id: 9, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/77.png', alt: 'Partner 9' },
  { id: 10, logo: 'https://thebuildersclub.me/wp-content/uploads/2024/09/78.png', alt: 'Partner 10' },
];

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
      {partners.map((partner, index) => (
        <div 
          key={partner.id}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-4 md:p-6 flex items-center justify-center h-32 md:h-40 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 border border-gray-800/50 hover:border-yellow-400/30 opacity-100 translate-y-0"
          style={{ 
            transitionDelay: `${index * 50}ms`,
            backdropFilter: 'blur(8px)'
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={partner.logo}
              alt={partner.alt}
              fill
              className="object-contain p-2 filter brightness-0 invert"
              style={{ 
                filter: 'brightness(0) invert(1)'
              }}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              priority={index < 3} // Only preload first 3 images
            />
          </div>
        </div>
      ))}
    </div>
  );
}
