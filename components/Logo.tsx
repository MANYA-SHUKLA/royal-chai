'use client';

import React, { useState, useEffect } from 'react';

const CrownIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </svg>
);

const SparklesIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 5H5" />
    <path d="M19 19v4" />
    <path d="M15 21h4" />
  </svg>
);

const LeafIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const CoffeeIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative flex items-center space-x-4 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-gold-300/30 to-amber-400/20"
            style={{
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: isHovered ? 0.6 : 0,
              transform: `scale(${isHovered ? 1 : 0})`,
              transition: `all 0.5s ease-out ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative">
        <div className={`absolute -inset-4 bg-gradient-to-br from-gold-400/30 via-amber-500/20 to-gold-400/30 rounded-full blur-xl transition-all duration-700 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
        }`}></div>

        <div className="absolute -inset-3">
          <div className={`absolute inset-0 border-2 border-gold-300/50 rounded-full transition-all duration-1000 ${
            isHovered ? 'opacity-100 animate-spin-slow' : 'opacity-0'
          }`}></div>
          <div className={`absolute inset-1 border border-amber-400/30 rounded-full transition-all duration-1200 ${
            isHovered ? 'opacity-100 animate-spin-slow-reverse' : 'opacity-0'
          }`}></div>
        </div>

        <div className={`relative w-14 h-14 bg-gradient-to-br from-gold-400 via-amber-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isHovered ? 'scale-110 shadow-gold-300/50' : 'shadow-gold-200/30'
        }`}>
          <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm"></div>
          
          <div className="relative">
            <CrownIcon className={`w-7 h-7 text-white transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`} />
            
            {isHovered && (
              <>
                <div className="absolute -top-2 -right-2">
                  <SparklesIcon className="w-3 h-3 text-amber-200 animate-ping" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <SparklesIcon className="w-2 h-2 text-gold-300 animate-ping" style={{ animationDelay: '0.2s' }} />
                </div>
              </>
            )}
          </div>

          <div className="absolute -top-2 -right-2 opacity-0 transition-opacity duration-500" style={{ opacity: isHovered ? 1 : 0 }}>
            <LeafIcon className="w-4 h-4 text-amber-300 animate-float" style={{ animationDelay: '0s' }} />
          </div>
          <div className="absolute -bottom-2 -left-2 opacity-0 transition-opacity duration-500" style={{ opacity: isHovered ? 1 : 0 }}>
            <CoffeeIcon className="w-3 h-3 text-gold-400 animate-float" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        <div className={`absolute inset-0 border-2 border-gold-400/50 rounded-full transition-all duration-1000 ${
          isHovered ? 'animate-ping' : 'opacity-0'
        }`}></div>
      </div>

      <div className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}>
        <div className="relative">
          <div className={`absolute -inset-4 bg-gradient-to-r from-gold-400/10 to-amber-500/10 rounded-full blur-lg transition-all duration-700 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-brown-900 tracking-wider leading-none">
              <span className="relative inline-block">
                ROYAL
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-amber-600 rounded-full transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-0'
                }`}></span>
              </span>
              <span className="block text-lg md:text-xl font-normal text-amber-800 tracking-widest mt-1 transition-all duration-300 hover:tracking-wider">
                CHAI
              </span>
            </h1>
            
            <div className="relative mt-2">
              <div className={`absolute -inset-2 bg-gradient-to-r from-gold-200/20 to-amber-200/10 rounded-full blur transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <p className={`relative text-xs font-semibold text-gold-700 tracking-[0.3em] transition-all duration-500 ${
                isHovered ? 'tracking-[0.4em] text-gold-800' : ''
              }`}>
                EST. 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full transition-all duration-700 ${
        isHovered ? 'w-16' : 'w-0'
      }`}></div>
    </div>
  );
};


export default Logo;