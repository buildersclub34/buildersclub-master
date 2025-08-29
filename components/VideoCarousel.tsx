import React from 'react';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, thumbnail, videoId }) => {
  return (
    <div className="w-[300px] md:w-[400px] flex-shrink-0 snap-center transform transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative group bg-gradient-to-br from-black/40 to-black/70 rounded-xl overflow-hidden border border-white/10 hover:border-[#FFD700]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/10 h-full flex flex-col group-hover:-translate-y-2">
        {/* Thumbnail with play button overlay */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 p-6 bg-gradient-to-t from-black/90 to-transparent mt-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-50 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#FFD700]/40">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h4 className="text-white/90 text-sm mb-4 leading-relaxed group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-300 text-sm mb-4 flex-1">{description}</p>
          <button 
            className="mt-4 text-[#FFD700] text-sm font-medium flex items-center group hover:text-white transition-colors duration-300 w-fit px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50 border border-[#FFD700]/30 hover:border-[#FFD700]/60"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
          >
            Watch Video
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoCarousel: React.FC = () => {
  const videos = [
    {
      id: 'F0hIWT5HNsY',
      title: 'The Builders Circle: Founder Stories',
      description: 'Hear directly from our founders about their journey with The Builders Circle.',
    },
    {
      id: '6J_o7rbTVmA',
      title: 'Building Together: The Community Experience',
      description: 'Discover the power of our collaborative founder community.',
    },
    {
      id: 'DUmuQi95KM0',
      title: 'Growth & Success in The Builders Circle',
      description: 'Learn how our members achieve remarkable growth together.',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Community</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Discover the stories and experiences of our vibrant community of builders and creators.
          </p>
        </div>

        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FFD700]/5 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FFD700]/5 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-8 -mx-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex space-x-6 px-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  videoId={video.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
