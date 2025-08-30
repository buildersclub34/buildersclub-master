'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { events, getUpcomingEvents, getPastEvents } from '@/data/events';
import EventCard from '@/components/EventCard';
import { format } from 'date-fns';
import { Search, Filter, X, Calendar, CalendarDays, MapPin } from 'lucide-react';
import NeoPopButton from '@/components/ui/NeoPopButton';
import PartnersGrid from '@/components/PartnersGrid';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Get current date in YYYY-MM-DD format for comparison
  const currentDate = new Date().toISOString().split('T')[0];

  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  // Get unique locations and event types for filters
  const locations = Array.from(new Set(events.map(event => event.city)));
  const eventTypes = Array.from(new Set(events.map(event => event.eventType)));

  // Filter events based on search and filters
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = locationFilter === 'all' || event.city === locationFilter;
    const matchesType = eventTypeFilter === 'all' || event.eventType === eventTypeFilter;
    const isPastEvent = new Date(event.date) < new Date();
    
    return matchesSearch && matchesLocation && matchesType && (showPastEvents ? isPastEvent : !isPastEvent);
  });

  const displayedEvents = showPastEvents ? pastEvents : upcomingEvents;
  const hasEvents = filteredEvents.length > 0;

  // Group events by month
  const eventsByMonth: { [key: string]: typeof events } = {};
  
  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  sortedEvents.forEach(event => {
    const date = new Date(event.date);
    const monthYear = format(date, 'MMMM yyyy');
    
    if (!eventsByMonth[monthYear]) {
      eventsByMonth[monthYear] = [];
    }
    
    eventsByMonth[monthYear].push(event);
  });

  const eventHighlights = [
    '/Event Highlights/1.png',
    '/Event Highlights/1748868254229.jpg',
    '/Event Highlights/4.jpg',
    '/Event Highlights/BOARD-ROOM-bangalore.png',
    '/Event Highlights/BUILDING-IN-TECH-CONFERENCE-1.png',
    '/Event Highlights/CXO-Leadership-Mixer-DELHI-NCR-2.png',
    '/Event Highlights/IMG_4994.jpg',
    '/Event Highlights/IMG_5842-1-scaled-e1738634729297-2048x760.jpg',
    '/Event Highlights/IMG_5906-2048x1536.jpg',
    '/Event Highlights/IMG_5920-2048x1536.jpg',
    '/Event Highlights/IMG_9649-2048x1536.jpg',
    '/Event Highlights/WhatsApp-Image-2025-01-13-at-11.02.58-AM-1536x1153.jpeg',
    '/Event Highlights/WhatsApp-Image-2025-01-25-at-5.03.52-PM-1024x768.jpeg',
    '/Event Highlights/pravega-1-1024x576.png'
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I register for an event?",
      answer: "You can register for any of our upcoming events by clicking on the 'Register Now' button on the event card. You'll be directed to a registration form where you can provide your details and complete the registration process."
    },
    {
      question: "Are there any fees to attend the events?",
      answer: "Some of our events are free to attend, while others may require a registration fee. The event details will clearly mention if there's any fee involved. We also offer early bird discounts for certain events, so make sure to register early!"
    },
    {
      question: "Can I get a refund if I can't attend after registering?",
      answer: "Our refund policy varies by event. Generally, we offer full refunds up to 48 hours before the event. Please check the specific event details for the refund policy, or contact our support team for assistance."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special group rates for teams or groups registering together. Please contact our events team at events@thebuildersclub.in for more information on group discounts and registration."
    },
    {
      question: "How can I become a speaker at one of your events?",
      answer: "We're always looking for passionate speakers to share their knowledge and experiences. Please send your speaking proposal along with your bio and topics to speakers@thebuildersclub.in. Our team will review your application and get back to you."
    },
    {
      question: "Are your events available online?",
      answer: "Many of our events are available both in-person and online. The event format will be clearly mentioned in the event details. For online events, you'll receive a Zoom or other platform link after registration."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm z-20">
              <CalendarDays className="w-5 h-5 mr-2" />
              {showPastEvents ? 'PAST EVENTS' : 'UPCOMING EVENTS'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-yellow-400">EXPERIENCE</span> <br />
              <span className="text-yellow-400">OUR</span> <br />
              <span className="text-yellow-400">EVENTS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {showPastEvents 
                ? 'Relive the highlights from our past events, workshops, and networking sessions.' 
                : 'Discover and join our upcoming events, workshops, and networking opportunities.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-8 py-3 text-lg inline-flex shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
              >
                {showPastEvents ? 'View Upcoming Events' : 'View Past Events'}
              </button>
              <Link 
                href="/contact"
                className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017] px-8 py-3 text-lg inline-flex items-center gap-2 shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none"
              >
                Host an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

      {/* Filters */}
      <div className="bg-yellow-400 p-1 rounded-xl mb-12 shadow-[6px_6px_0_0_#000] border-2 border-black">
        <div className="bg-black p-6 rounded-lg border-2 border-black">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-yellow-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 bg-gray-900 border-2 border-yellow-400 rounded-lg leading-5 text-white placeholder-yellow-400/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm transition-all duration-200"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <select
                  className="appearance-none bg-gray-900 pl-10 pr-8 py-3 border-2 border-yellow-400 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 cursor-pointer"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="all" className="bg-gray-900">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location} className="bg-gray-900">
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Filter className="h-4 w-4 text-yellow-400" />
                </div>
                <select
                  className="appearance-none bg-gray-900 pl-10 pr-8 py-3 border-2 border-yellow-400 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 cursor-pointer"
                  value={eventTypeFilter}
                  onChange={(e) => setEventTypeFilter(e.target.value)}
                >
                  <option value="all" className="bg-gray-900">All Types</option>
                  {eventTypes.map((eventType) => (
                    <option key={eventType} value={eventType} className="bg-gray-900">
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>
              
              <NeoPopButton
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="px-6 py-3 text-sm"
              >
                {showPastEvents ? 'Show Upcoming' : 'Show Past'}
              </NeoPopButton>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="mb-16">
        {hasEvents ? (
          <>
            {Object.entries(eventsByMonth).map(([monthYear, monthEvents]) => (
              <div key={monthYear} className="mb-16">
                <div className="relative mb-8">
                  <h2 className="text-2xl font-bold text-yellow-400 relative z-10 inline-block px-4 py-1 bg-black border-2 border-yellow-400 rounded-lg transform -rotate-1">
                    {monthYear}
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {monthEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center py-16 bg-gray-900/50 rounded-xl border-2 border-yellow-400/30 p-8 group hover:border-yellow-400/60 transition-colors duration-300">
            <div className="bg-yellow-400/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="h-10 w-10 text-yellow-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">No events found</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              {searchQuery || locationFilter !== 'all' || eventTypeFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : `There are currently no ${showPastEvents ? 'past' : 'upcoming'} events scheduled.`}
            </p>
            {(searchQuery || locationFilter !== 'all' || eventTypeFilter !== 'all') && (
              <NeoPopButton
                onClick={() => {
                  setSearchQuery('');
                  setLocationFilter('all');
                  setEventTypeFilter('all');
                }}
                className="px-6 py-3"
              >
                Clear all filters
              </NeoPopButton>
            )}
          </div>
        )}
      </div>

      {/* Event Highlights Section */}
      <div className="max-w-7xl mx-auto mb-24">
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
          {eventHighlights.map((image, index) => (
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
          <NeoPopButton className="mx-auto">
            View All Highlights
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NeoPopButton>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our events, registration process, and more.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-800 pb-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-yellow-400 transform transition-transform ${openFaq === index ? 'rotate-90' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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

      {/* Call to Action */}
      <div className="bg-yellow-400 p-1 rounded-xl shadow-[8px_8px_0_0_#000] border-2 border-black transform hover:-translate-y-1 transition-transform duration-200">
        <div className="bg-black p-10 text-center rounded-lg border-2 border-black">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Host Your Event With Us</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Want to host your next event at our venue or partner with us? Get in touch to discuss exciting opportunities.
          </p>
          <Link href="/contact" className="inline-block">
            <NeoPopButton className="px-8 py-4 text-lg">
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NeoPopButton>
          </Link>
        </div>
      </div>
      </div>
      
      {/* Partners Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="flex flex-col text-center items-center mb-16">
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
                Our Network
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Our <span className="text-yellow-400">Partners</span>
              </h2>
              <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                A network of ecosystem partners who help in creating more visibility and adding value to our community.
              </p>
            </div>
          </div>
          
          <PartnersGrid />
          
          <div className="text-center mt-16">
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017] px-6 py-2 text-lg group shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none"
            >
              <span className="flex items-center">
                Become a Partner
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
