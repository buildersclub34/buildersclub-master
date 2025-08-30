import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getEventById } from '@/data/events';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import NeoPopButton from '@/components/ui/NeoPopButton';

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);
  
  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const formattedDate = format(eventDate, 'EEEE, MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          href="/events" 
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </Link>
      </div>

      {/* Event Header */}
      <div className="relative">
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          {event.isPastEvent && (
            <div className="absolute top-6 right-6 bg-red-600/90 text-white font-bold px-4 py-1.5 rounded-full text-sm backdrop-blur-sm z-10">
              Past Event
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-4 backdrop-blur-sm">
                {event.eventType === 'investor-date' ? 'Investor Date' : 'Event'}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{event.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-yellow-300/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* About Section */}
            <div className="bg-gray-900/50 border-2 border-yellow-400/20 rounded-xl p-8 mb-8 hover:border-yellow-400/40 transition-colors">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">About This Event</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">{event.about}</p>
                
                <h3 className="text-xl font-bold text-yellow-400 mt-8 mb-4">Event Details</h3>
                <p className="text-gray-300 mb-6">{event.description}</p>

                {event.eventType === 'investor-date' && (
                  <div className="mt-8 p-6 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-3">Attendee Profile:</h4>
                    <ul className="space-y-2 text-gray-300">
                      {event.industry && <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span><span className="font-medium">Industry:</span> {event.industry}</span>
                      </li>}
                      {event.stage && <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span><span className="font-medium">Stage:</span> {event.stage}</span>
                      </li>}
                      {event.investmentFocus && <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span><span className="font-medium">Investment Focus:</span> {event.investmentFocus}</span>
                      </li>}
                    </ul>
                  </div>
                )}

                <div className="mt-8 p-6 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                  <h4 className="font-bold text-yellow-400 mb-3">About A Date with an investor:</h4>
                  <div className="space-y-3 text-gray-300">
                    <p>A Date with an investor is an initiative by The Builders Club to get founders to meet investors in their industry in their office over coffee and conversations.</p>
                    <p>Unlike other events, this is not a pitch presentation. This is a simple, casual conversation between the investors team and 4-5 founders who are excited about building great products and businesses.</p>
                    <p>Investor Dates will happen across cities throughout the year, and you are welcome to register if you are raising funds, and are looking to get connected to investors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-gray-900/50 border-2 border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-colors sticky top-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">Event Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-400/10 p-2 rounded-lg mr-4">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Date & Time</p>
                    <p className="text-white font-medium">
                      {formattedDate}<br />
                      <span className="text-yellow-400">{event.time}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400/10 p-2 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">{event.location}</p>
                  </div>
                </div>
                
                {event.attendees && event.attendees.length > 0 && (
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="bg-yellow-400/10 p-2 rounded-lg mr-4">
                        <Users className="w-5 h-5 text-yellow-400" />
                      </div>
                      <p className="text-sm text-gray-400">
                        {event.attendees.length} {event.attendees.length === 1 ? 'Person' : 'People'} Attending
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-12 -mt-2">
                      {event.attendees.slice(0, 5).map((attendee, index) => (
                        <div key={index} className="h-10 w-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-sm font-medium text-yellow-400">
                          {attendee.split(' ').map(n => n[0]).join('')}
                        </div>
                      ))}
                      {event.attendees.length > 5 && (
                        <div className="h-10 w-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-sm font-medium text-yellow-400">
                          +{event.attendees.length - 5}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="pt-4">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <NeoPopButton 
                      className="w-full py-3 text-lg"
                      rightIcon={
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      }
                      aria-label={event.isPastEvent ? 'View event details' : 'Register for this event'}
                    >
                      {event.isPastEvent ? 'View Event' : 'Register Now'}
                    </NeoPopButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
