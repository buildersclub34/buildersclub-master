'use client';

import { useState } from 'react';
import { getUpcomingEvents, getPastEvents } from '@/data/events';
import EventCard from '@/components/EventCard';
import SectionHeader from './SectionHeader';

type EventType = 'all' | 'investor-date' | 'conference' | 'networking' | 'board-meeting';

export function EventsShowcase() {
  const [activeFilter, setActiveFilter] = useState<EventType>('all');
  const [showPastEvents, setShowPastEvents] = useState(true);

  // Get all events
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  // Filter events based on active filter
  const filterEvents = (events: any[]) => 
    events.filter(event => activeFilter === 'all' || event.eventType === activeFilter);

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  const eventTypes: { type: EventType; label: string }[] = [
    { type: 'all', label: 'All' },
    { type: 'investor-date', label: 'Investor Date' },
    { type: 'conference', label: 'Conference' },
    { type: 'networking', label: 'Networking' },
    { type: 'board-meeting', label: 'Board Meeting' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col text-center items-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
              Community & Events
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Partner <span className="text-yellow-400">Initiatives</span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Explore our curated selection of events, workshops, and programs designed to empower and connect the builder community.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventTypes.map(({ type, label }) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveFilter(type)}
              className={`relative inline-flex items-center justify-center font-bold text-center uppercase tracking-wider whitespace-nowrap border-2 rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform min-w-fit hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transform -translate-x-1 -translate-y-1 border-b-4 border-r-4 ${
                activeFilter === type
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-600' 
                  : 'bg-transparent hover:bg-yellow-500/10 text-yellow-400 border-yellow-500/50'
              } px-6 py-2 text-sm font-medium shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Upcoming Events
          </h3>
          {filteredUpcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcomingEvents.map((event) => (
                <EventCard key={`upcoming-${event.id}`} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">No upcoming events scheduled. Check back soon!</p>
          )}
        </div>

        {/* Past Events Section */}
        <div className="mt-12">
          <div 
            className="flex justify-between items-center mb-8 cursor-pointer"
            onClick={() => setShowPastEvents(!showPastEvents)}
          >
            <h3 className="text-2xl font-bold text-white">
              Past Events
            </h3>
            <button 
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
              aria-label={showPastEvents ? 'Collapse past events' : 'Expand past events'}
            >
              {showPastEvents ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              )}
            </button>
          </div>
          
          <div className={`overflow-hidden transition-all duration-300 ${showPastEvents ? 'max-h-[2000px]' : 'max-h-0'}`}>
            {filteredPastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
                {filteredPastEvents.map((event) => (
                  <EventCard key={`past-${event.id}`} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">No past events to display.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
