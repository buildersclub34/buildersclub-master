'use client';

import Image from 'next/image';

// Only include high-quality logos without white backgrounds
const partners = [
  { id: 1, logo: '/logos brands/Nasscom-logo-svg.svg', size: 120, name: 'Nasscom' },
  { id: 2, logo: '/logos brands/Nvidia_logo.svg', size: 120, name: 'Nvidia' },
  { id: 3, logo: '/logos brands/Dell_Logo.svg', size: 120, name: 'Dell' },
  { id: 4, logo: '/logos brands/Advisor (2).png', size: 120, name: 'Advisor 2' },
  { id: 5, logo: '/logos brands/Advisor (3).png', size: 120, name: 'Advisor 3' },
  { id: 6, logo: '/logos brands/Advisor (4).png', size: 120, name: 'Advisor 4' },
  { id: 7, logo: '/logos brands/Advisor (5).png', size: 120, name: 'Advisor 5' },
  { id: 8, logo: '/logos brands/Advisor (6).png', size: 120, name: 'Advisor 6' },
];

const FloatingPartners = () => {
  const positions = [
    { top: '10%', left: '5%' },
    { top: '15%', right: '10%' },
    { top: '25%', left: '8%' },
    { bottom: '30%', right: '5%' },
    { top: '20%', right: '25%' },
    { bottom: '20%', left: '20%' },
    { top: '60%', left: '10%' },
    { top: '70%', right: '15%' },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
      <div className="w-full h-full relative">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className="absolute"
            style={{
              ...positions[index],
              width: partner.size,
              height: partner.size,
              opacity: 1,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes={`${partner.size}px`}
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))',
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingPartners;
