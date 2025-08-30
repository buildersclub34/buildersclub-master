import { Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "How to Build a $1M ARR SaaS Business",
      description: "Learn the strategies and frameworks used by successful SaaS founders to reach $1M ARR.",
      duration: "42 min",
      date: "AUG 10, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
      url: "https://www.youtube.com/@thebuildersclub"
    },
    {
      id: 2,
      title: "The Future of AI in Startups",
      description: "Exploring how AI is transforming the startup landscape and how founders can leverage it.",
      duration: "38 min",
      date: "AUG 3, 2024",
      image: "https://images.unsplash.com/photo-1677442135136-760c813314b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
      url: "https://www.youtube.com/@thebuildersclub"
    },
    {
      id: 3,
      title: "From Idea to First 1000 Users",
      description: "Practical steps to go from zero to your first 1000 users without a marketing budget.",
      duration: "35 min",
      date: "JUL 27, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
      url: "https://www.youtube.com/@thebuildersclub"
    },
    {
      id: 4,
      title: "Fundraising Masterclass",
      description: "Everything you need to know about raising your first round of funding.",
      duration: "45 min",
      date: "JUL 20, 2024",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
      url: "https://www.youtube.com/@thebuildersclub"
    },
  ];

  return (
    <section id="videos" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest <span className="text-yellow-400">Videos</span></h2>
            <p className="text-gray-400">Watch our latest content with industry leaders</p>
          </div>
          <Link 
            href="https://www.youtube.com/@thebuildersclub" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium mt-4 md:mt-0 group"
          >
            View All Videos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900/50 border border-gray-800 group-hover:border-yellow-400/30 transition-all duration-300">
                <div className="absolute inset-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <Play className="text-black w-6 h-6 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full z-20">
                  {video.duration}
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  <span>{video.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1.5" />
                  <span>{video.duration}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                  {video.description}
                </p>
                <Link 
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-yellow-400 text-sm font-medium group-hover:underline"
                >
                  Watch Now
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
