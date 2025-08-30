import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/data/events';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event & { isFeatured?: boolean };
}

export default function EventCard({ event }: EventCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, 'MMM d');
  const dayOfWeek = format(eventDate, 'EEEE');
  
  // Fallback image in case of error or missing image
  const fallbackImage = '/images/event-placeholder.jpg';
  const imageSrc = !imageError ? event.image : fallbackImage;

  // Generate responsive image sizes
  const generateSizes = (): string => {
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px';
  };

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div className="group flex flex-col h-full bg-black rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[4px_4px_0_0_rgba(255,215,0,0.8)] border-2 border-yellow-400/20 hover:border-yellow-400/60 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Image Container with gradient overlay - Full width */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-900/50">
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
            <div className="w-12 h-12 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Main Image */}
        <Image
          src={imageSrc}
          alt={`${event.title} event`}
          fill
          sizes={generateSizes()}
          className={`object-cover transition-all duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
          }`}
          priority={!!event.isFeatured}
          quality={80}
          onLoadingComplete={handleImageLoad}
          onError={handleImageError}
          aria-hidden={isLoading}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {event.isPastEvent && (
          <div 
            className="absolute top-3 right-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border border-red-300/30 shadow-sm"
            aria-label="Past Event"
          >
            Past Event
          </div>
        )}
        
        {/* Date Badge */}
        <div 
          className="absolute bottom-3 left-3 bg-yellow-400 text-black font-bold text-center p-2 rounded-lg border-2 border-yellow-300 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]"
          aria-label={`Event date: ${formattedDate} ${format(eventDate, 'yyyy')}`}
        >
          <div className="text-xl leading-none font-black" aria-hidden="true">
            {format(eventDate, 'd')}
          </div>
          <div className="text-xs uppercase tracking-wider" aria-hidden="true">
            {format(eventDate, 'MMM')}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1 p-4 bg-black relative z-10">
        <div className="flex-1">
          <h3 className="font-bold text-base text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center text-xs text-yellow-400/90 mb-2">
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {dayOfWeek}, {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <svg 
              className="w-4 h-4 mr-1.5 text-yellow-400 flex-shrink-0" 
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
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-800">
          <Link 
            href={`/events/${event.id}`}
            className="relative w-full inline-flex justify-center items-center px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.8)]"
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
    </div>
  );
}
