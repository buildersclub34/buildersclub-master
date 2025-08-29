'use client';

import React, { useState, useEffect } from 'react';
import { Rocket, Users, Star, Check, ArrowRight, ChevronRight, Handshake, Briefcase, MessageSquare, Award, Zap, UserCheck, BarChart2, Target, Lightbulb, TrendingUp, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredBuilders } from "@/data/builders";
import { circleBuilders } from "@/data/circleBuilders";
import BuildersGrid from "@/components/BuildersGrid";
import dynamic from 'next/dynamic';
import styles from './testimonials.module.css';
import SectionHeader from '../../components/SectionHeader';
import NeoPopButton from '../../components/ui/NeoPopButton';
import ClientLayout from '../ClientLayout';
import CircleHeroSection from '../../components/CircleHeroSection';
import MembersGrid from '../../components/MembersGrid';
import ChaptersSection from '../../components/ChaptersSection';
import PartnersSection from '../../components/PartnersSection';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

// Commenting out the missing PartnersSection for now
// const PartnersSection = dynamic(() => import('../../components/PartnersSection'), {
//   ssr: false,
// });

const AdvisorsGrid = dynamic(() => import('../../components/AdvisorsGrid'), {
  ssr: false,
});

const MembershipSection = dynamic(() => import('../../components/MembershipSection'), {
  ssr: false,
});

function BuildersCircle() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId === playingVideo ? null : videoId);
  };

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      title: 'Exclusive Access',
      description: 'Get early access to premium content, tools, and resources before anyone else.',
      gradient: 'from-amber-500/10 to-yellow-500/5',
      borderColor: 'border-amber-500/30',
      hoverBorderColor: 'border-yellow-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-500/15 hover:to-yellow-500/10',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Private Community',
      description: 'Connect with like-minded builders in our exclusive members-only community.',
      gradient: 'from-yellow-500/10 to-amber-500/5',
      borderColor: 'border-yellow-500/30',
      hoverBorderColor: 'border-amber-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-500/15 hover:to-amber-500/10',
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Expert Guidance',
      description: 'Learn from industry experts and successful entrepreneurs in our mastermind sessions.',
      gradient: 'from-amber-600/10 to-yellow-600/5',
      borderColor: 'border-amber-600/30',
      hoverBorderColor: 'border-yellow-500/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-600/15 hover:to-yellow-600/10',
    },
    {
      icon: <Check className="w-8 h-8 text-yellow-400" />,
      title: 'Hands-on Support',
      description: 'Get personalized feedback and support for your projects from our team of experts.',
      gradient: 'from-yellow-600/10 to-amber-600/5',
      borderColor: 'border-yellow-600/30',
      hoverBorderColor: 'border-amber-500/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-600/15 hover:to-amber-600/10',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Network',
      description: 'Meet new curated founders, investors and CXOs every month.',
      gradient: 'from-blue-500/10 to-indigo-500/5',
      borderColor: 'border-blue-500/30',
      hoverBorderColor: 'border-indigo-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-indigo-500/10',
    },
    {
      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
      title: 'Business Referrals',
      description: 'Business referral among the circle members + Get top industry connects from the club',
      gradient: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-purple-500/30',
      hoverBorderColor: 'border-pink-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-purple-500/15 hover:to-pink-500/10',
    },
    {
      icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
      title: 'Co-Founder Connect',
      description: 'Looking for a co-founder? Meet potential co-founders in the club.',
      gradient: 'from-green-500/10 to-teal-500/5',
      borderColor: 'border-green-500/30',
      hoverBorderColor: 'border-teal-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-green-500/15 hover:to-teal-500/10',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
      title: 'Build in Public',
      description: 'Share your progress, get feedback, and learn from others in the community.',
      gradient: 'from-rose-500/10 to-red-500/5',
      borderColor: 'border-rose-500/30',
      hoverBorderColor: 'border-red-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-rose-500/15 hover:to-red-500/10',
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Mentorship',
      description: 'Get guidance from experienced entrepreneurs and industry experts.',
      gradient: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'border-amber-500/30',
      hoverBorderColor: 'border-orange-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-amber-500/15 hover:to-orange-500/10',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: 'Investor Access',
      description: 'Connect with angel investors and VCs looking to fund promising startups.',
      gradient: 'from-emerald-500/10 to-cyan-500/5',
      borderColor: 'border-emerald-500/30',
      hoverBorderColor: 'border-cyan-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-emerald-500/15 hover:to-cyan-500/10',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-yellow-400" />,
      title: 'Workshops',
      description: 'Participate in exclusive workshops and masterclasses on various topics.',
      gradient: 'from-violet-500/10 to-fuchsia-500/5',
      borderColor: 'border-violet-500/30',
      hoverBorderColor: 'border-fuchsia-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-violet-500/15 hover:to-fuchsia-500/10',
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Accountability',
      description: 'Stay on track with your goals through our accountability framework.',
      gradient: 'from-sky-500/10 to-blue-500/5',
      borderColor: 'border-sky-500/30',
      hoverBorderColor: 'border-blue-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-sky-500/15 hover:to-blue-500/10',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Pitch Practice',
      description: 'Practice your pitch and get feedback from experienced founders.',
      gradient: 'from-yellow-500/10 to-amber-500/5',
      borderColor: 'border-yellow-500/30',
      hoverBorderColor: 'border-amber-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-yellow-500/15 hover:to-amber-500/10',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Idea Validation',
      description: 'Test your startup ideas with a community of builders and experts.',
      gradient: 'from-lime-500/10 to-green-500/5',
      borderColor: 'border-lime-500/30',
      hoverBorderColor: 'border-green-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-lime-500/15 hover:to-green-500/10',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: 'Growth Hacking',
      description: 'Learn growth strategies that work from successful founders.',
      gradient: 'from-orange-500/10 to-red-500/5',
      borderColor: 'border-orange-500/30',
      hoverBorderColor: 'border-red-400/50',
      hoverBg: 'hover:bg-gradient-to-br hover:from-orange-500/15 hover:to-red-500/10',
    }
  ];

  const growthCircleBenefits = [
    'Business Referrals',
    'Product Demos for your product within the community',
    'Monthly Board Room meetings for help & advice',
    'Exclusive Mixers',
    'Access to curated partner events',
    'Meet new curated founders, investors and CXOs every month',
    'Exclusive Investor Connects',
    'Pitch deck circulated in co-investor network',
    '1:1 advisory with investors',
    'Profile and company milestones covered & amplified by TBC platform',
    '$1000+ worth of Monthly Value'
  ];

  const eliteCircleBenefits = [
    'Onboarded as advisory for The Builders Club',
    'Profile and company milestones covered & amplified by TBC platform',
    'CXO Roundtable invites',
    'Speaker Opportunities',
    'Connect with peer network of advisors, CXOs & Founders',
    'Exclusive Mixers',
    'Access to curated partner events',
    'Meet new curated founders, investors and CXOs every month',
    'Opportunity to invest in early stage startups',
    'Connect with VC / PE firms for next fundraise',
    '$5000+ worth of Monthly Value',
    'Rs. 1Cr+ worth of value created for current members'
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the eligibility for becoming a part of The Builders Circle?",
      answer: "For the growth circle, you need to at least be seed funded or doing a business of $200K. We also include a few startups who are a part of the fundraising track in this. For becoming a part of the elite circle, you need to be either an enterprise CXO or Series B+ Founder or CXO."
    },
    {
      question: "Are the circles region specific?",
      answer: "No, The Builders Circle is open to members globally."
    },
    {
      question: "How many circles are there?",
      answer: "There are two main circles: Growth Circle for early to mid-stage founders and Elite Circle for established founders and CXOs."
    },
    {
      question: "What are the membership charges?",
      answer: "Please contact us for detailed membership plans and pricing."
    }
  ];

  const [activeTab, setActiveTab] = useState('growth');

  // Define the type for circle positions
  interface CirclePosition {
    size: number;
    left: number;
    top: number;
  }

  const [circlePositions, setCirclePositions] = useState<CirclePosition[]>([]);

  useEffect(() => {
    const positions: CirclePosition[] = [];  // Add type annotation here
    for (let i = 0; i < 15; i++) {
      const size = 150 + (i * 10);
      const left = 10 + (i * 6);
      const top = 10 + ((i * 20) % 80);
      positions.push({ size, left, top });
    }
    setCirclePositions(positions);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <style jsx global>{
        `
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
      `}</style>
      <CircleHeroSection />
      
      {/* Builders Section */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col text-center items-center mb-12">
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
                Our Network
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Builders</span>
              </h2>
              <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                A community of passionate founders and industry leaders building the future
              </p>
            </div>
          </div>
          <BuildersGrid 
            builders={circleBuilders} 
            maxItems={8} 
            showViewAll={false}
            basePath="/circle"
          />  
        </div>
      </section>
      
      <MembersGrid />
      <ChaptersSection />
      
      {/* Give and Take Session Section */}
      <section className="w-full py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] group">
              <Image
                src="/Event Highlights/IMG_5906-2048x1536.jpg"
                alt="Give and Take Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-4 py-1.5 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4">
                  Exclusive Session
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Experience Our Community</h3>
                <p className="text-gray-300">Get a taste of what we offer</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-block">
                <div className="px-4 py-1.5 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-4 inline-flex items-center">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                  </span>
                  Limited Time Offer
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Join Our <span className="text-yellow-400">Give & Take</span> Session
              </h2>
              
              <p className="text-xl text-gray-300">
                Experience the power of our community with a free trial session. Connect with like-minded builders, share your challenges, and get valuable insights from industry experts.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Connect with industry leaders',
                  'Get feedback on your ideas',
                  'Expand your professional network',
                  'Learn from real-world experiences'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <NeoPopButton
                  as="button"
                  variant="primary"
                  size="lg"
                  className="px-10 py-4 text-lg font-bold tracking-wider"
                >
                  Get Your Free Session
                  <ArrowRight className="w-5 h-5 ml-3" />
                </NeoPopButton>
                
                <p className="mt-4 text-sm text-gray-400">
                  Limited spots available. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5 rounded-2xl p-10 md:p-16 overflow-hidden border border-white/10">
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="flex flex-col text-center items-center mb-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Community</span></h2>
                </div>
                <div className="relative">
                  <div className="flex overflow-x-auto pb-8 -mx-4 snap-x snap-mandatory scrollbar-hide">
                    <div className="flex space-x-6">
                      {[
                        {
                          id: 'F0hIWT5HNsY',
                          title: 'The Builders Circle: Founder Stories',
                          description: 'Hear directly from our founders about their journey with The Builders Circle.'
                        },
                        {
                          id: '6J_o7rbTVmA',
                          title: 'Building Together: The Community Experience',
                          description: 'Discover the power of our collaborative founder community.'
                        },
                        {
                          id: 'DUmuQi95KM0',
                          title: 'Growth & Success in The Builders Circle',
                          description: 'Learn how our members achieve remarkable growth together.'
                        }
                      ].map((video, index) => (
                        <div key={index} className="w-[300px] md:w-[400px] flex-shrink-0 snap-center">
                          <div className="relative group bg-black/30 rounded-xl overflow-hidden border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
                            <div className="relative aspect-video">
                              <Image
                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                alt={video.title}
                                fill
                                className="object-cover cursor-pointer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-30 transition-opacity"></div>
                              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                  <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" />
                                </div>
                              </div>
                            </div>
                            <div className="p-6">
                              <h4 className="text-xl font-bold text-white mb-2">{video.title}</h4>
                              <p className="text-white/80 text-sm">{video.description}</p>
                              <button className="mt-4 text-[#FFD700] text-sm font-medium flex items-center group">
                                Play Video
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        {/* Enhanced About The Circle Section */}
        <section className="relative py-24 overflow-hidden bg-black">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
          </div>
          
          {/* Glow Effects */}
          <div className="absolute -top-1/4 -right-1/4 w-full max-w-2xl h-[600px] bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-full max-w-2xl h-[600px] bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
                  EXCLUSIVE COMMUNITY
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Elevate Your <span className="text-yellow-400">Business Journey</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-300 mb-6">
                    The Builders Circle is a <span className="font-semibold text-white">curated collective</span> of founders, executives, and industry leaders committed to mutual growth and success.
                  </p>
                  <p className="text-xl text-gray-300">
                    Through our <span className="font-semibold text-white">exclusive programs</span> and <span className="font-semibold text-white">high-value connections</span>, we provide the tools and network to transform your business trajectory.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-8 md:p-10 border-b border-gray-800/50 bg-gradient-to-r from-yellow-500/5 to-transparent">
                  <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Your <span className="text-yellow-400">All-Access Pass</span> to Growth
                  </h3>
                  <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">
                    Unlock a comprehensive suite of benefits designed to accelerate your business success
                  </p>
                </div>
                
                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 md:p-10">
                  {[
                    {
                      icon: <Users className="w-8 h-8 text-yellow-400" />,
                      title: 'Monthly Give & Take',
                      description: 'Exchange high-value opportunities and strategic introductions with vetted members.'
                    },
                    {
                      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
                      title: 'Advisor Breakfasts',
                      description: 'Intimate sessions with top CXOs and industry leaders.'
                    },
                    {
                      icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
                      title: 'Strategy Reviews',
                      description: 'Quarterly 1:1 sessions with TBC experts to refine your growth plan.'
                    },
                    {
                      icon: <Award className="w-8 h-8 text-yellow-400" />,
                      title: 'Premium Events',
                      description: 'Unlimited access to all TBC summits, workshops, and masterclasses.'
                    },
                    {
                      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
                      title: 'Advisory Board',
                      description: 'Direct access to our panel of experienced executives for guidance.'
                    },
                    {
                      icon: <Zap className="w-8 h-8 text-yellow-400" />,
                      title: 'Partner Benefits',
                      description: 'Exclusive discounts and credits worth over $100K from our partners.'
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="group bg-gray-800/30 hover:bg-gray-800/50 p-6 rounded-xl border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 mb-4 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="px-8 pb-10 text-center">
                  <div className="inline-flex flex-col items-center">
                    <NeoPopButton 
                      as="link"
                      href="https://nas.io/tbc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden px-8 py-4 text-lg font-bold"
                    >
                      <span className="relative z-10">Join The Inner Circle</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </NeoPopButton>
                    <p className="mt-4 text-sm text-gray-500">Limited spots available. Apply today.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join The Builders Circle Section - Content will be added here */}
        
        {/* Advisors Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-16">
              <SectionHeader
                title="Meet Our Esteemed"
                highlightedText="Advisors"
                description="Learn from and connect with industry leaders and domain experts from top companies"
                badgeText="Expert Network"
                align="center"
                titleClassName="text-3xl md:text-4xl lg:text-5xl"
              />
            </div>
            <div className="relative">
              <AdvisorsGrid />
            </div>
          </div>
        </section>

        {/* Membership Section - Temporarily Commented Out
        <MembershipSection />
        */}

        {/* Partners Section */}
        <PartnersSection />

        {/* Testimonials */}
        <section className="py-20 relative overflow-hidden bg-black">
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              title="What Our Members"
              highlightedText="Say"
              description="Hear from founders and executives who have transformed their businesses with our network."
              badgeText="Testimonials"
              align="center"
              titleClassName="text-3xl md:text-4xl lg:text-5xl"
            />
            
            <div className="mt-16">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeader
              badgeText="FAQ"
              title="Frequently Asked"
              highlightedText="Questions"
              description="Find answers to common questions about The Builders Circle membership and benefits."
              align="center"
              className="text-center mb-16"
              titleClassName="text-3xl md:text-4xl font-bold"
            />
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-800 pb-4"
                >
                  <button
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
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

      </main>
    </div>
  );
}

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = BuildersCircle as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;
