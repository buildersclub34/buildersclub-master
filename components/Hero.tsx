'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import NeoPopButton from './ui/NeoPopButton';
import SectionHeader from './SectionHeader';

// Counter Component with Animation
interface AnimatedCounterProps {
  value: number;
  label: string;
  subLabel?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  label, 
  subLabel,
  suffix = '',
  className = '' 
}) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const animateValue = (start: number, end: number, duration: number): void => {
    const range = end - start;
    const minFrameTime = 30; // 30fps
    const steps = Math.ceil(duration / minFrameTime);
    const increment = range / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;
      
      if (step >= steps) {
        current = end;
        clearInterval(timer);
      }
      
      setCount(Math.floor(current));
    }, minFrameTime);
  };

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue(0, value, 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={counterRef} className={`relative group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 text-center border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 h-full flex flex-col justify-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-1 sm:mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="space-y-0.5">
          <div className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
            {label}
          </div>
          {subLabel && (
            <div className="text-white/60 text-xs sm:text-sm font-medium">
              {subLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface MousePosition {
  x: number;
  y: number;
}

// Hero component with consistent spacing
export default function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Handle mouse move effect and animations
  useEffect(() => {
    // Set visibility to true after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Mouse move effect with throttling for better performance
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle the mouse move updates
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            // Unobserve after animation is applied
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is in view
      }
    );
    
    // Store the current ref value in a variable
    const currentStatsRef = statsRef.current;
    
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
      // Reset scroll behavior
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Content container with consistent padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8">
            <span className="block">Build the Future</span>
            <span className="text-yellow-400">With Us</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
            Empowering the next generation of builders, creators, and innovators with the tools, 
            resources, and community they need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Join Our Community
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-900 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats section */}
          <div 
            ref={statsRef}
            className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 transition-opacity duration-500"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <AnimatedCounter 
              value={1000}
              label="Community Members"
              className="text-center"
            />
            <AnimatedCounter 
              value={50}
              label="Startups Supported"
              className="text-center"
            />
            <AnimatedCounter 
              value={10}
              label="Investor Partners"
              className="text-center"
            />
            <AnimatedCounter 
              value={25}
              label="Events Hosted"
              className="text-center"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div 
        className="absolute top-1/4 -right-20 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </div>

        @media (min-width: 768px) {
          .neopop-btn {
            padding: 14px 32px;
            letter-spacing: 2px;
            border-width: 3px;
            transform: translate(-4px, -4px);
            box-shadow: 6px 6px 0 0 var(--neopop-secondary),
                      8px 8px 0 0 var(--neopop-primary);
            font-size: 1rem;
          }
        }

        .neopop-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 0 var(--neopop-secondary),
                    6px 6px 0 0 var(--neopop-primary);
        }

        .neopop-btn:active {
          transform: translate(0, 0);
          box-shadow: 2px 2px 0 0 var(--neopop-secondary);
        }

        .neopop-primary {
          background: var(--neopop-primary);
          color: var(--neopop-secondary);
          border-color: var(--neopop-secondary);
        }

        .neopop-secondary {
          background: var(--neopop-secondary);
          color: var(--neopop-primary);
          border-color: var(--neopop-primary);
        }

        /* Video Background */
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .video-bg video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }



        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, 20px); }
          50% { transform: translate(0, 40px); }
          75% { transform: translate(-20px, 20px); }
        }

        /* Typography */
        .neon-text {
          letter-spacing: 1px;
        }
      `}</style>
      


      <section 
        className="relative min-h-[90vh] sm:min-h-screen bg-black text-white overflow-hidden pt-16 pb-12 sm:pt-24 md:pt-32 lg:pt-40"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Video Background */}
        <div className="video-bg">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="object-cover w-full h-full"
            style={{
              objectPosition: 'center',
              minHeight: '100%',
              minWidth: '100%',
              width: 'auto',
              height: 'auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <source src="/BG hero.webm" type="video/webm" />
            <source src="/BG hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center h-full">
          <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center mt-16 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-48">
            {/* Main Heading */}
            <div className="text-center mb-6 sm:mb-10 md:mb-12 max-w-5xl mx-auto px-2">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-none mb-3 sm:mb-4">
                Empowering Business Leaders,{' '}
                <span className="text-yellow-400 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Everywhere!
                </span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                Join a global network of CXOs, founders, working professionals, and investors shaping tomorrow&apos;s business
              </p>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 z-10 w-full px-2">
            <NeoPopButton
              as="link"
              href="https://nas.io/tbc"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center justify-center"
            >
              Join the Club
            </NeoPopButton>
            <NeoPopButton
              as="link"
              href="/circle"
              variant="secondary"
              size="lg"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <span className="text-2xl leading-none hidden sm:inline">•</span>
              <span>Become a Circle Member</span>
            </NeoPopButton>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <a 
              href="https://www.linkedin.com/company/thebuildersclub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/inthebuildersclub/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.352.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.884-.3-1.878-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a 
              href="https://x.com/thebuildersc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/thebuildersclub1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                <path 
                  fillRule="evenodd" 
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Combined Animated Stats Section */}
          <div 
            ref={statsRef}
            className="w-full max-w-6xl mx-auto mt-8 sm:mt-16 px-2 sm:px-4 md:px-6 opacity-0"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              <AnimatedCounter 
                value={75} 
                label="Business Leaders" 
                suffix="K+" 
                className="bg-black/20 hover:bg-black/30"
              />
              <AnimatedCounter 
                value={250} 
                label="Events" 
                suffix="+"
                className="bg-black/20 hover:bg-black/30"
              />
              <AnimatedCounter 
                value={100} 
                label="Advisors" 
                suffix="+" 
                className="hidden sm:block bg-black/20 hover:bg-black/30"
              />
              <AnimatedCounter 
                value={300} 
                label="Investors" 
                suffix="+" 
                className="hidden md:block bg-black/20 hover:bg-black/30"
              />
              <AnimatedCounter 
                value={500} 
                label="Businesses" 
                subLabel="Empowered" 
                suffix="+" 
                className="col-span-2 sm:col-span-1 md:col-auto bg-black/20 hover:bg-black/30"
              />
            </div>
          </div>


        </div>
      </div>
    </section>
    </>
  );
}