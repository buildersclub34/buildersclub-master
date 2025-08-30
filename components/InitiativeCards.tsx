'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Calendar, Network, Handshake } from 'lucide-react';
import Link from 'next/link';

const initiatives = [
  {
    id: 1,
    title: 'The Builders Circle',
    description: 'A peer-driven community for founders & CXOs to help each other solve business problems and grow their businesses.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    href: 'https://thebuildersclub.me/circle',
    delay: 0.1
  },
  {
    id: 2,
    title: 'Investments Track',
    description: 'Helping businesses scale through strategic investments and growth support.',
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    href: '#',
    delay: 0.2
  },
  {
    id: 3,
    title: 'Business Networking & Insight Events',
    description: 'High-value gatherings for business leaders to connect and gain insights.',
    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
    href: '#',
    delay: 0.3
  },
  {
    id: 4,
    title: 'Strategic Partnerships & Services Network',
    description: 'Connection to agencies and service partners for enterprise scaling.',
    icon: <Network className="w-6 h-6 text-yellow-400" />,
    href: '#',
    delay: 0.4
  },
  {
    id: 5,
    title: 'AI Tech Tuesdays',
    description: 'Online series to learn how to use AI in your business.',
    icon: <Handshake className="w-6 h-6 text-yellow-400" />,
    href: '#',
    delay: 0.5
  }
];

import { Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      bounce: 0.4,
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
};

export default function InitiativeCards() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              className="group relative"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={initiative.delay}
            >
              <Link 
                href={initiative.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-gray-800 group-hover:border-yellow-400/50 transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-[0_10px_30px_-10px_rgba(255,215,0,0.15)]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Card content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-black border-2 border-yellow-400/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/40 transition-all duration-300">
                      {initiative.icon}
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-300 mb-6 flex-grow">
                      {initiative.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-yellow-400 font-medium group-hover:underline">
                        Learn more
                        <svg 
                          className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
