'use client';

import { motion } from 'framer-motion';
import { 
  Mic, 
  Users, 
  MessageSquare, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Mail, 
  FileText, 
  Video, 
  Clock, 
  Play, 
  Sparkles,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import EventsSection from '@/components/EventsSection';
import { featuredBuilders } from '@/data/builders';
import Link from 'next/link';
import Image from 'next/image';
import ClientLayout from '../ClientLayout';
import SectionHeader from '../../components/SectionHeader';
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Separator } from '../../components/ui/separator';
import { Badge } from '../../components/ui/badge';
import PartnerDealsSection from '../../components/PartnerDealsSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ContentCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number }>;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
  className?: string;
}

const ContentCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  linkText, 
  children, 
  className = '' 
}: ContentCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 h-full ${className}`}
    whileHover={{ y: -5 }}
  >
    <div className="p-1 h-full">
      <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold ml-3">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        {children}
        {link && (
          <Link 
            href={link}
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors mt-4"
          >
            {linkText}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
);

interface PodcastCardProps {
  title: string;
  description: string;
  image?: string;
  date: string;
  duration?: string;
  className?: string;
}

const PodcastCard = ({ title, description, date, duration, image, className = '' }: PodcastCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`group cursor-pointer ${className}`}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900/50 border border-gray-800 group-hover:border-yellow-400/30 transition-colors">
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 border-2 border-yellow-400/30">
            <Play className="w-6 h-6" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end p-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="text-black ml-1 w-5 h-5" />
        </div>
      </div>
      {duration && (
        <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full z-20">
          {duration}
        </div>
      )}
    </div>
    <div className="mt-4">
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <Calendar className="w-4 h-4 mr-1.5" />
        <span>{date}</span>
        {duration && (
          <>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{duration}</span>
          </>
        )}
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
        {title}
      </h4>
      <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      <div className="mt-3 flex items-center text-yellow-400 text-sm font-medium">
        Listen Now
        <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
  showDetails?: boolean;
}

const ProfileCard = ({ name, role, company, image, className = '', showDetails = false }: ProfileCardProps) => (
  <motion.div 
    variants={fadeInUp}
    className={`group text-center ${className}`}
    whileHover={showDetails ? { y: -5 } : {}}
    transition={{ duration: 0.3 }}
  >
    <Link href={`/content/builders/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-400 transition-colors bg-gray-800/50">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent flex items-center justify-center text-3xl font-bold text-yellow-400/50">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h4 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">{name}</h4>
      <p className="text-yellow-400 text-sm">{role}</p>
      <p className="text-gray-400 text-sm">{company}</p>
      
      {showDetails && (
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center text-yellow-400 text-sm font-medium">
            View Profile
            <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      )}
    </Link>
  </motion.div>
);

interface Speaker {
  name: string;
  company: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  timezone: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  isFeatured: boolean;
  speakers: Speaker[];
  link?: string;  // Made link optional with '?'
}

const EventCard = ({ event }: { event: Event }) => {
  // Ensure we have a valid URL for the Link component
  const eventLink = event.link ? event.link : '/events';
  
  return (
    <motion.div 
      variants={fadeInUp}
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/5 ${event.isFeatured ? 'lg:col-span-2' : ''}`}>
        {event.isFeatured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
            Featured
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center text-yellow-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{event.time}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          <p className="text-gray-300 mb-6">{event.description}</p>
          <div className="flex justify-between items-center">
            <Link 
              href={eventLink}
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group-hover:translate-x-1 transition-transform"
            >
              Learn More
              <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {event.isFeatured && (
              <span className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
                Limited Seats
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function ContentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
              <BookOpen className="w-5 h-5 mr-2" />
              EXPLORE CONTENT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">LEARN</span> <br />
              <span className="text-yellow-400">FROM THE</span> <br />
              <span className="text-yellow-400">BUILDERS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover podcasts, builder profiles, and testimonials from our community of innovative founders and creators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#podcasts" 
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                Listen to Podcasts
              </a>
              <Link 
                href="/content/builders"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                View Builder Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection />
      
      {/* Partner Deals Section */}
      <PartnerDealsSection />

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader
            badgeText="FAQ"
            title="Frequently Asked"
            highlightedText="Questions"
            description="Find answers to common questions about our content, events, and community."
            className="text-center"
          />
          
          <div className="space-y-4 mt-12">
            {[
              {
                question: "How can I access the content?",
                answer: "All our content is available on our website. Some exclusive content may require you to sign up or become a member."
              },
              {
                question: "Are the events free to attend?",
                answer: "We offer both free and paid events. Check the event details for pricing information. Members often get discounts or free access to certain events."
              },
              {
                question: "Can I suggest topics for future content?",
                answer: "Yes! We welcome suggestions for content topics. You can submit your ideas through our contact form or during our community calls."
              },
              {
                question: "How can I become a speaker at your events?",
                answer: "We're always looking for great speakers. Please reach out to us with your topic and experience, and we'll be in touch if it's a good fit for our audience."
              },
              {
                question: "Do you offer certificates for attending events?",
                answer: "Yes, we provide certificates of participation for most of our events. Please check the event details or contact us for more information."
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

// Use a type assertion to add the getLayout property to the page component
const PageWithLayout = ContentPage as any;
PageWithLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};

export default PageWithLayout;

// Small Play icon component for the podcast card
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
