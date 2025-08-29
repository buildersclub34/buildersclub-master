import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/data/events';
import { format } from 'date-fns';

export function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, 'MMM d');
  const dayOfWeek = format(eventDate, 'EEEE');
  
  return (
    <div className="group bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-yellow-400/20 hover:-translate-y-1 border-2 border-yellow-400/20 hover:border-yellow-400/40">
      {/* Image Container - Square 1:1 */}
      <div className="relative w-full aspect-square">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        {event.isPastEvent && (
          <div className="absolute top-3 right-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
            Past Event
          </div>
        )}
        
        {/* Date Badge */}
        <div className="absolute bottom-3 left-3 bg-yellow-400/90 text-black font-bold text-center p-2 rounded-lg backdrop-blur-sm">
          <div className="text-xl leading-none">{format(eventDate, 'd')}</div>
          <div className="text-xs uppercase tracking-wider">{format(eventDate, 'MMM')}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 bg-black">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-yellow-400 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-yellow-400/80 mb-2">
            {dayOfWeek}, {event.time}
          </p>
          <p className="text-sm text-gray-400 flex items-center">
            <svg 
              className="w-4 h-4 mr-1.5 text-yellow-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="truncate">{event.location}</span>
          </p>
        </div>
        
        <Link 
          href={`/events/${event.id}`}
          className="w-full inline-flex justify-center items-center px-4 py-2.5 border-2 border-yellow-400 text-sm font-bold rounded-lg text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-200 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          View Details
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
