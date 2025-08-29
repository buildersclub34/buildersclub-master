import React from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Builder } from '../data/builders';
import NeoPopButton from './ui/NeoPopButton';

interface BuildersGridProps {
  builders: Builder[];
  maxItems?: number;
  showViewAll?: boolean;
  basePath?: string; // Add basePath prop for custom routing
}

const BuildersGrid: React.FC<BuildersGridProps> = ({ 
  builders, 
  maxItems, 
  showViewAll = true,
  basePath = '/builders' // Default to /builders for backward compatibility
}) => {
  const displayedBuilders = maxItems ? builders.slice(0, maxItems) : builders;

  // Generate a consistent color based on builder ID
  const getBuilderColor = (id: string): string => {
    const colors = [
      'rgba(234, 179, 8, 0.2)',
      'rgba(59, 130, 246, 0.2)',
      'rgba(168, 85, 247, 0.2)',
      'rgba(16, 185, 129, 0.2)',
      'rgba(239, 68, 68, 0.2)'
    ];
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedBuilders.map((builder) => {
          const builderColor = getBuilderColor(builder.id);
          
          // Convert tags to array if it's a string
          const tagsArray = Array.isArray(builder.tags) 
            ? builder.tags 
            : typeof builder.tags === 'string' 
              ? (builder.tags as string).split(',').map((tag: string) => tag.trim())
              : [];

          return (
            <div 
              key={builder.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-yellow-500/20 hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-0.5"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Link 
                  href={`${basePath}/${builder.id}`}
                  className="absolute inset-0 z-10 w-full h-full"
                  prefetch={true}
                >
                  <span className="sr-only">View {builder.name}&apos;s profile</span>
                </Link>
                
                {/* Main Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={builder.image}
                    alt={builder.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLDivElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`w-full h-full bg-gray-800 flex items-center justify-center text-3xl font-bold text-white`}
                    style={{ 
                      backgroundColor: builderColor,
                      display: 'none' // Will be shown if image fails to load
                    }}
                  >
                    {builder.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1">{builder.name}</h3>
                    <p className="text-yellow-400 text-sm mb-2">{builder.role}</p>
                    
                    {/* Company */}
                    {builder.company && (
                      <div className="mb-4">
                        <span className="text-gray-300 text-sm">{builder.company}</span>
                      </div>
                    )}
                    
                    {/* Tags */}
                    {tagsArray.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tagsArray.slice(0, 3).map((tag: string, index: number) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      {builder.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${builder.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-gray-300 hover:text-yellow-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${builder.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {builder.twitter && (
                        <a
                          href={`https://twitter.com/${builder.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-gray-300 hover:text-yellow-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${builder.name}'s Twitter`}
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showViewAll && maxItems && builders.length > maxItems && (
        <div className="mt-16 text-center">
          <NeoPopButton 
            as="link"
            href="/builders"
            variant="primary"
            size="lg"
            className="mx-auto px-8 py-4 text-lg"
          >
            View All Members
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </NeoPopButton>
        </div>
      )}
    </div>
  );
};

export default BuildersGrid;
