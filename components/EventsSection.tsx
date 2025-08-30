'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getUpcomingEvents, getPastEvents } from '@/data/events';
import EventCard from './EventCard';
import { format } from 'date-fns';

export default function EventsSection() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  // Show past events by default if no upcoming events
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>(
    upcomingEvents.length > 0 ? 'upcoming' : 'past'
  );

  // Group events by month
  const groupEventsByMonth = (events: typeof upcomingEvents) => {
    return events.reduce((acc, event) => {
      const monthYear = format(new Date(event.date), 'MMMM yyyy');
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(event);
      return acc;
    }, {} as Record<string, typeof upcomingEvents>);
  };

  const upcomingEventsByMonth = groupEventsByMonth(upcomingEvents);
  const pastEventsByMonth = groupEventsByMonth(pastEvents);

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full mb-4">
            Events
          </span>
          <h2 className="text-4xl font-bold mb-4">
            {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {activeTab === 'upcoming' 
              ? 'Join our upcoming events, workshops, and networking sessions'
              : 'Check out our past events and highlights'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-900 rounded-full p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'upcoming' 
                  ? 'bg-yellow-400 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'past' 
                  ? 'bg-yellow-400 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Past ({pastEvents.length})
            </button>
          </div>
        </div>

        {activeTab === 'upcoming' ? (
          upcomingEvents.length > 0 ? (
            <div className="space-y-16">
              {Object.entries(upcomingEventsByMonth).map(([monthYear, monthEvents]) => (
                <div key={monthYear}>
                  <div className="relative mb-6">
                    <h3 className="text-xl font-bold text-yellow-400 relative z-10 inline-block px-4 py-1 bg-black border-2 border-yellow-400 rounded-lg transform -rotate-1">
                      {monthYear}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {monthEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-900/50 rounded-xl border-2 border-yellow-400/30 p-8 group hover:border-yellow-400/60 transition-colors duration-300">
              <div className="bg-yellow-400/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="h-10 w-10 text-yellow-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">No events scheduled</h3>
              <p className="text-gray-300">Check back later for updates!</p>
            </div>
          )
        ) : (
          <div className="space-y-16">
            {Object.entries(pastEventsByMonth)
              .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime()) // Sort months in descending order
              .map(([monthYear, monthEvents]) => (
                <div key={monthYear}>
                  <div className="relative mb-6">
                    <h3 className="text-xl font-bold text-yellow-400 relative z-10 inline-block px-4 py-1 bg-black border-2 border-yellow-400 rounded-lg transform -rotate-1">
                      {monthYear}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {monthEvents
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort events by date
                      .map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/events">
            <button className="group relative px-8 py-3 text-lg font-bold text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              View All {activeTab === 'upcoming' ? 'Upcoming' : 'Past'} Events
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
