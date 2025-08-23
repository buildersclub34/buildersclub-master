'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CircleHeroSection = () => {
  // Animation variants with proper TypeScript types
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const imageHover: Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const buttonHover: Variants = {
    initial: { 
      x: 0,
      y: 0,
      boxShadow: '4px 4px 0 0 #FFD700'
    },
    hover: {
      x: 2,
      y: 2,
      boxShadow: '2px 2px 0 0 #FFD700',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      x: 4,
      y: 4,
      boxShadow: '0px 0px 0 0 #FFD700'
    }
  };

  const cards = [
    {
      id: 1,
      title: 'Exclusive Builders Network',
      style: 'neopop-card -style-1 -top',
      content: (
        <div className="p-6 w-full h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 neopop-text-shadow mb-6">
            Exclusive Builders Network
          </h3>
          <div className="w-full flex justify-center">
            <motion.button 
              className="neopop-btn -yellow -medium"
              variants={buttonHover}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span 
                className="inline-flex items-center"
                whileHover={{ x: 2 }}
              >
                Join Now <ArrowRight className="inline ml-2" size={18} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      ),
      animation: 'animate-fade-in-up'
    },
    {
      id: 2,
      style: 'neopop-card -style-2 -top -overlay',
      image: '/Event%20Highlights/BOARD-ROOM-bangalore.png',
      content: (
        <div className="absolute inset-0 flex items-end justify-center p-6">
          <h4 className="text-yellow-400 font-semibold text-center">Event Highlights</h4>
        </div>
      ),
      animation: 'animate-fade-in-down'
    },
    {
      id: 3,
      title: 'Mentorship & Growth',
      style: 'neopop-card -style-3 -top',
      content: (
        <div className="p-6 w-full h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 neopop-text-shadow mb-6">
            Mentorship & Growth
          </h3>
          <div className="w-full flex justify-center">
            <motion.button 
              className="neopop-btn -yellow -medium"
              variants={buttonHover}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span 
                className="inline-flex items-center"
                whileHover={{ x: 2 }}
              >
                Learn More <ArrowRight className="inline ml-2" size={18} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      ),
      animation: 'animate-fade-in-up'
    },
    {
      id: 4,
      style: 'neopop-card -style-4 -top -overlay',
      image: '/Event%20Highlights/BUILDING-IN-TECH-CONFERENCE-1.png',
      content: null,
      animation: 'animate-fade-in-down'
    },
    {
      id: 5,
      style: 'neopop-card -style-1 -top -overlay',
      image: '/Event%20Highlights/CXO-Leadership-Mixer-DELHI-NCR-2.png',
      content: null,
      animation: 'animate-fade-in-up'
    },
    {
      id: 6,
      title: 'Premium Benefits',
      style: 'neopop-card -style-2 -top',
      content: (
        <div className="p-6 w-full h-full flex flex-col justify-center items-center text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 neopop-text-shadow mb-6">
              Premium Benefits
            </h3>
            <ul className="text-yellow-300 space-y-3 text-base mb-6">
              <li className="flex items-center justify-center">
                <span className="mr-2">•</span> Exclusive Events
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">•</span> Founder Forums
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">•</span> Investor Access
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <motion.button 
              className="neopop-btn -yellow -medium"
              variants={buttonHover}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span 
                className="inline-flex items-center"
                whileHover={{ x: 2 }}
              >
                View All <ArrowRight className="inline ml-2" size={18} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      ),
      animation: 'animate-fade-in-down'
    },
    {
      id: 7,
      style: 'neopop-card -style-3 -top -overlay',
      image: '/Event%20Highlights/IMG_4994.jpg',
      content: null,
      animation: 'animate-fade-in-up'
    },
    {
      id: 8,
      title: 'Join the Movement',
      style: 'neopop-card -style-4 -top',
      content: (
        <div className="p-4 w-full h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 neopop-text-shadow">
            Join the Movement
          </h3>
          <p className="text-yellow-300 mb-4">Be part of India&apos;s fastest growing builders community</p>
          <motion.button 
            className="neopop-btn -yellow -medium"
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span 
              className="inline-flex items-center"
              whileHover={{ x: 2 }}
            >
              Apply Now <ArrowRight className="inline ml-2" size={18} />
            </motion.span>
          </motion.button>
        </div>
      ),
      animation: 'animate-fade-in-down'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative mb-16">
        <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6 mt-8 z-20">
          A TBC INITIATIVE
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
          <span className="text-yellow-400">The Builders Circle</span>
          <br className="hidden md:block" />
          <span className="text-xl md:text-2xl font-normal text-gray-300 mt-4 block">
            Where Leaders Build Together
          </span>
        </h1>
      </div>
      <div className="container mx-auto px-4">
        {/* Desktop Grid */}
        <div className="hidden md:block">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={item}
                initial="hidden"
                animate="show"
                whileHover="hover"
                whileTap="tap"
                className={`${card.style} neopop-shadow rounded-lg overflow-hidden relative p-6 flex items-center justify-end flex-col cursor-pointer`}
              >
                {card.image && (
                  <motion.div 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    variants={imageHover}
                  >
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={card.id <= 2} // Only preload first 2 images
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/40"
                      initial={{ opacity: 0.4 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}
                {card.content && (
                  <div className="relative z-10 w-full">
                    {card.content}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden space-y-4">
          {cards.map((card, index) => (
            <motion.div
              key={`mobile-${card.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`business-card ${card.style} rounded-lg overflow-hidden relative p-6 h-48 flex items-center justify-end flex-col`}
            >
              {card.image && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}
              {card.content && (
                <div className="relative z-10 w-full">
                  {card.content}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleHeroSection;
