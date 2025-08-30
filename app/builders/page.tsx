'use client';

import { useState, useEffect, useMemo, ReactNode } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { circleBuilders } from '@/data/circleBuilders';
import type { Builder } from '@/data/builders';
import BuildersGrid from '@/components/BuildersGrid';

// Create a simple layout component since ClientLayout is missing
const ClientLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-black text-white">
    {children}
  </div>
);

// Pagination settings
const ITEMS_PER_PAGE = 12;

export default function BuildersPage() {
  // State initialization
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Filter builders based on search term
  const filteredBuilders = useMemo(() => {
    if (!searchTerm.trim()) return circleBuilders;
    
    const term = searchTerm.toLowerCase().trim();
    return circleBuilders.filter((builder: Builder) => {
      // Check if tags is a string or array and search accordingly
      const tagMatch = Array.isArray(builder.tags) 
        ? builder.tags.some(tag => tag.toLowerCase().includes(term))
        : typeof builder.tags === 'string' 
          ? builder.tags.toLowerCase().includes(term)
          : false;
          
      return (
        builder.name.toLowerCase().includes(term) ||
        (builder.company?.toLowerCase().includes(term) ?? false) ||
        (builder.role?.toLowerCase().includes(term) ?? false) ||
        tagMatch
      );
    });
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredBuilders.length / ITEMS_PER_PAGE) || 1;
  const paginatedBuilders = filteredBuilders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Set client-side flag and handle initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      
      // Simulate loading
      const timer = setTimeout(() => {
        setIsLoading(false);
        
        // Check for data loading errors
        if (circleBuilders.length === 0) {
          setError('No builders data available. Please try again later.');
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle scroll and page reset effects
  useEffect(() => {
    if (!isLoading && !error && typeof window !== 'undefined') {
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset to first page when search term changes
      if (searchTerm) {
        setCurrentPage(1);
      }
    }
  }, [searchTerm, currentPage, isLoading, error]);

  // Show skeleton loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="h-12 bg-gray-800 rounded-full w-1/3 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-800 rounded-full w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-800 rounded-full w-1/4 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-900/50 rounded-2xl p-6 border-2 border-gray-800 animate-pulse">
                <div className="aspect-square w-full rounded-xl bg-gray-800 mb-4"></div>
                <div className="h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-gray-900/50 rounded-xl border border-red-500/30">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Generate page numbers for pagination
  const getPageNumbers = (): Array<number | '...'> => {
    const pageNumbers: Array<number | '...'> = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of the middle section
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the start or end
      if (currentPage <= 3) {
        endPage = 3;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 2;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Handle page change
  const handlePageChange = (page: number | '...') => {
    if (page === '...' || page === currentPage) return;
    setCurrentPage(Number(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate a consistent color based on builder ID
  const getBuilderColor = (id: string) => {
    const colors = [
      'rgba(234, 179, 8, 0.2)',
      'rgba(59, 130, 246, 0.2)',
      'rgba(168, 85, 247, 0.2)',
      'rgba(16, 185, 129, 0.2)',
      'rgba(239, 68, 68, 0.2)'
    ];
    // Use the builder ID to generate a consistent index
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Builders</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A community of passionate founders, creators, and industry leaders building the future.
            </p>
          </div>
        </div>
      </div>

      {/* Builders Grid Section */}
      <section id="explore" className="py-16 md:py-24 bg-black relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Search */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Search builders by name, company, or expertise..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                />
              </div>
            </div>
          </div>

          {/* Builders Grid */}
          <BuildersGrid 
            builders={paginatedBuilders} 
            maxItems={ITEMS_PER_PAGE} 
            showViewAll={false}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-700 rounded-md bg-gray-900/50 text-gray-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-300 px-4">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-700 rounded-md bg-gray-900/50 text-gray-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Add layout function for consistent layout
BuildersPage.getLayout = function getLayout(page: ReactNode) {
  return <ClientLayout>{page}</ClientLayout>;
};
