import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PartnerDealsSection = () => {
  const deals = [
    {
      id: 1,
      name: 'Notion',
      description: 'Organize teamwork and increase productivity',
      users: '10,238',
      deal: '6 months free on the Business plan with Unlimited AI',
      savings: '$12,000',
      tags: ['Collaboration', 'Task Management', 'Productivity'],
      logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/j5avtsi9fmcbxnl3sf7cnak600zg',
      isPremium: false
    },
    {
      id: 2,
      name: 'Make',
      description: 'A no-code AI platform for limitless automation',
      users: '6,296',
      deal: '12 months free on Teams plan',
      savings: '$636',
      tags: ['Automation', 'No-Code', 'Workflows'],
      logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/cdkedczs1bt3ixi5mtkz2f76ds8e',
      isPremium: true
    },
    {
      id: 3,
      name: 'Stripe',
      description: 'Manage your online payments',
      users: '4,152',
      deal: 'Waived Stripe fees on your next $20,000 in payment processing',
      savings: '$500',
      tags: ['E-Commerce', 'Payments', 'Fintech'],
      logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/0hiu8hhbwq3u94n8u4o77p0ibgvm',
      isPremium: true
    },
    {
      id: 4,
      name: 'Apollo.io',
      description: 'Sales Intelligence and Engagement Platform',
      users: '2,366',
      deal: '50% off the annual Basic or Professional plan for 1 year (Up to 5 seats)',
      savings: '$3,000',
      tags: ['Prospecting', 'AI Sales', 'Lead Management'],
      logo: 'https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,c_pad,dpr_auto,f_auto,fl_progressive,h_48,q_auto:good,w_48/v1/production/4dk4vgqcb6zd5weh0afogwg77iox',
      isPremium: false
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center items-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
            Exclusive Offers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Deals</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Special offers and discounts from our partners to help you build and grow your startup.
          </p>
        </div>

        <div className="relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/80 rounded-2xl -m-4 z-0"></div>
            
            <div className="relative z-10">
              {/* Search and Filter */}
              <div className="mb-8 bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 shadow-2xl shadow-black/30">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-yellow-400" />
                      </div>
                      <input 
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-700 rounded-lg leading-5 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm" 
                        placeholder="Search tools and services..." 
                        type="text" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-300 font-medium">Filter by:</span>
                    
                    <div className="relative">
                      <select className="appearance-none block w-full pl-3 pr-10 py-2.5 text-base border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm">
                        <option value="all">All Categories</option>
                        <option value="productivity">Productivity</option>
                        <option value="development">Development</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <select className="appearance-none block w-full pl-3 pr-10 py-2.5 text-base border border-gray-700 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all duration-200 sm:text-sm backdrop-blur-sm">
                        <option value="popular">Most Popular</option>
                        <option value="newest">Newest</option>
                        <option value="savings">Highest Savings</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Deals Grid */}
              <div className="relative mt-8">
                <div className="absolute -inset-4 -m-2 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-30"></div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-2xl shadow-black/30">
                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ gridAutoRows: '1fr', placeItems: 'stretch center' }}>
                      {deals.map((deal) => (
                        <div key={deal.id} className="w-full h-full">
                          <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-visible hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-300 h-full flex flex-col hover:border-yellow-500/50 transform hover:-translate-y-1 min-h-[450px] max-w-[320px] mx-auto w-full">
                            <div className="flex gap-4 items-start p-5 pb-0 relative z-10">
                              <div className="flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                                <div className="absolute inset-0 bg-yellow-500/10 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-gray-700/50">
                                  <Image 
                                    src={deal.logo} 
                                    alt={`${deal.name} Logo`} 
                                    width={48} 
                                    height={48} 
                                    className="rounded-md h-12 w-12 object-contain"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0 pt-1 relative">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                                      {deal.name}
                                    </h3>
                                    <div className="mt-1.5 flex items-center">
                                      <span className="text-xs text-gray-400">
                                        <span className="font-medium text-yellow-400">{deal.users}</span> members using this
                                      </span>
                                    </div>
                                  </div>
                                  {deal.isPremium && (
                                    <div className="flex items-center space-x-2">
                                      <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium px-2.5 py-1 rounded-full border border-yellow-500/30">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                                        </svg>
                                        Premium
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="px-5 pb-5 pt-0 flex-1 flex flex-col relative z-10">
                              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6">
                                {deal.description}
                              </p>
                              
                              <div className="mt-auto flex flex-col">
                                <div className="border-t border-gray-700/50 pt-5">
                                  <p className="text-yellow-400 font-bold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                                    {deal.deal}
                                  </p>
                                  <p className="text-xs text-gray-400 mb-2">
                                    Save up to <span className="font-bold text-yellow-400">{deal.savings}</span>
                                  </p>
                                </div>
                                
                                <div className="mt-4 mb-5">
                                  <Link 
                                    href="#" 
                                    className="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold text-sm rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/20"
                                  >
                                    <div className="flex items-center justify-center gap-2">
                                      Get This Deal
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  {deal.tags.map((tag, index) => (
                                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full border border-gray-600">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <Link 
                              href={`/products/${deal.name.toLowerCase().replace(/\s+/g, '-')}/`} 
                              className="absolute inset-0 z-1" 
                              aria-label={`View ${deal.name} details`}
                            ></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default PartnerDealsSection;
