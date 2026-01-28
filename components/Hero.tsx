'use client';

import React, { useState, useEffect } from 'react';

const LeafIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M9 5H5"/>
    <path d="M19 19v4"/>
    <path d="M15 21h4"/>
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const CoffeeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
    <line x1="6" x2="6" y1="2" y2="4"/>
    <line x1="10" x2="10" y1="2" y2="4"/>
    <line x1="14" x2="14" y1="2" y2="4"/>
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 500, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatingOrnaments = [
    { top: '15%', left: '5%', delay: '0s', icon: CrownIcon },
    { top: '25%', right: '8%', delay: '0.5s', icon: SparklesIcon },
    { top: '65%', left: '10%', delay: '1s', icon: CoffeeIcon },
    { top: '75%', right: '12%', delay: '1.5s', icon: TrophyIcon },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-300/20 via-amber-300/15 to-transparent rounded-full blur-3xl animate-pulse-orb" />
          <div className="absolute inset-10 bg-gradient-to-br from-gold-400/10 via-transparent to-amber-400/10 rounded-full blur-xl animate-spin-slow" />
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-amber-200/15 to-gold-200/10"
              style={{
                left: `${50 + Math.sin(Date.now() / 1000 + i) * 30}%`,
                top: `${50 + Math.cos(Date.now() / 1000 + i) * 30}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `orbit ${10 + Math.random() * 6}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-20 right-10 w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-400/15 via-gold-300/12 to-transparent rounded-full blur-3xl animate-pulse-orb-reverse" />
          <div className="absolute inset-16 bg-gradient-to-bl from-transparent via-gold-200/8 to-amber-200/8 rounded-full blur-2xl animate-spin-slow-reverse" />
          <div className="absolute inset-0 border border-gold-300/15 rounded-full animate-ping-gentle" />
        </div>

        <div className="absolute right-[14%] top-[28%] w-28 h-28">
          <div className="absolute inset-0 rounded-2xl border-2 border-gold-300/40 bg-white/10 backdrop-blur-lg rotate-12 animate-spin-slow shadow-lg" />
          <div className="absolute inset-4 rounded-lg border border-amber-500/30 bg-gradient-to-br from-white/20 to-transparent animate-spin-slow-reverse" />
          <div className="absolute inset-8 rounded-sm border border-gold-400/25 animate-ping-gentle" />
        </div>

        <div className="absolute left-[12%] bottom-[18%] w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/35 bg-gradient-to-br from-amber-200/15 to-transparent animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border border-gold-400/30 animate-spin-slow-reverse" />
          <div className="absolute inset-10 rounded-full border border-amber-300/25 animate-ping-gentle" />
        </div>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-gold-300/25 to-amber-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float-particle ${particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          >
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-200/40 to-transparent" />
          </div>
        ))}

        {floatingOrnaments.map((ornament, index) => {
          const Icon = ornament.icon;
          return (
            <div
              key={index}
              className="absolute opacity-40 animate-float-ornament-1"
              style={{
                top: ornament.top,
                left: ornament.left,
                right: ornament.right,
                animationDelay: ornament.delay,
              }}
            >
              <Icon className="w-8 h-8 text-amber-600/50" />
            </div>
          );
        })}

        <div className="absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-1 w-64 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent origin-left"
              style={{
                transform: `rotate(${i * 30}deg) translateX(0)`,
                animation: `ray-rotate 30s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="relative inline-block group mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 via-amber-500/15 to-gold-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
          <div className="relative flex items-center space-x-3 bg-gradient-to-r from-gold-100/90 to-amber-50/90 backdrop-blur-lg px-8 py-3 rounded-full border border-gold-300 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
            <StarIcon className="w-5 h-5 text-gold-600 fill-current animate-pulse" />
            <span className="text-gold-800 font-semibold text-sm tracking-widest uppercase">
              Premium Royal Chai Experience
            </span>
            <div className="relative">
              <SparklesIcon className="w-5 h-5 text-amber-600 animate-spin-slow" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="relative mb-10">
          <span className="block text-5xl md:text-8xl font-serif font-bold text-brown-900 leading-none tracking-tight">
            <span className="relative">
              Brew
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full"></span>
            </span>
            <span className="block mt-4">The Royal</span>
            <div className="relative inline-block mt-4">
              <span className="relative z-10 bg-gradient-to-r from-amber-800 via-brown-900 to-amber-800 bg-clip-text text-transparent">
                Tradition
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-300/20 to-amber-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            </div>
          </span>
        </h1>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute -inset-8 bg-gradient-to-r from-amber-50/30 via-cream/20 to-gold-50/30 rounded-3xl blur-2xl"></div>
          <p className="relative text-2xl md:text-3xl text-brown-700 leading-relaxed font-light bg-gradient-to-b from-brown-800 to-brown-900 bg-clip-text text-transparent">
            Premium instant chai tea premix inspired by centuries of 
            <span className="font-medium text-amber-700"> royal Indian heritage</span>. 
            Experience tradition perfected.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-12 mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative group">
              <LeafIcon className={`w-${i === 3 ? 12 : 8} h-${i === 3 ? 12 : 8} text-amber-${700 + i * 100}/60 transform transition-all duration-700 group-hover:scale-125 group-hover:text-amber-600`} 
                style={{ transform: `rotate(${i * 15}deg)` }}
              />
              <div className="absolute inset-0 bg-current blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="relative mb-16">
          <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/10 via-amber-500/5 to-gold-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div 
            className="relative inline-block group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-gold-400/30 via-amber-500/20 to-gold-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative px-12 py-6 bg-gradient-to-r from-gold-500 via-amber-600 to-gold-500 rounded-full shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 animate-shimmer"></div>
              
              <div className="relative flex items-center space-x-4">
                <CrownIcon className="w-8 h-8 text-white animate-pulse-gentle" />
                <span className="text-white font-bold text-3xl md:text-4xl tracking-wider">
                  COMING SOON
                </span>
                <div className="relative">
                  <SparklesIcon className="w-8 h-8 text-white animate-spin-slow" />
                  {isHovered && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-amber-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </>
                  )}
                </div>
              </div>            
              <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-pulse-gentle"></div>
            </div>
            
            {isHovered && (
              <>
                <div className="absolute -top-4 -left-4 w-2 h-2 bg-gold-300 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -top-6 -right-2 w-1.5 h-1.5 bg-amber-200 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-4 left-8 w-1 h-1 bg-gold-400 rounded-full animate-float" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute -bottom-6 right-6 w-2 h-2 bg-amber-300 rounded-full animate-float" style={{ animationDelay: '0.9s' }}></div>
              </>
            )}
          </div>
        </div>
        <div className="relative mt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-0.5 h-20 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-14 h-14 bg-gradient-to-br from-amber-50 to-gold-100 rounded-full border border-gold-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110"
          >
            <ChevronDownIcon className="w-6 h-6 text-amber-800 mx-auto animate-bounce group-hover:animate-none" />
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/10 to-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
          </button>
          <p className="mt-4 text-sm text-brown-600/70 animate-pulse-gentle">
            Discover Our Story
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream via-cream/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;