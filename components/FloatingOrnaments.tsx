'use client';

import React, { useEffect, useState } from 'react';

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M9 5H5"/>
    <path d="M19 19v4"/>
    <path d="M15 21h4"/>
  </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const CircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const FloatingOrnaments = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [particles] = useState(() => 
    Array.from({ length: 25 }, (_, i) => {
      const seed1 = (i * 9301 + 49297) % 233280;
      const seed2 = (i * 4253 + 61589) % 233280;
      const seed3 = (i * 1753 + 37189) % 233280;
      const seed4 = (i * 2371 + 89123) % 233280;
      const seed5 = (i * 3571 + 53647) % 233280;
      
      return {
        id: i,
        x: (seed1 / 233280) * 100,
        y: (seed2 / 233280) * 100,
        size: (seed3 / 233280) * 8 + 2,
        delay: (seed4 / 233280) * 5,
        speed: (seed5 / 233280) * 4 + 2,
      };
    })
  );

  const [orbParticles] = useState(() =>
    Array.from({ length: 12 }, (_, i) => {
      const seed1 = (i * 7919 + 23571) % 233280;
      const seed2 = (i * 5381 + 47689) % 233280;
      const seed3 = (i * 3217 + 12347) % 233280;
      const seed4 = (i * 6421 + 71293) % 233280;
      
      return {
        id: i,
        width: (seed1 / 233280) * 4 + 1,
        height: (seed2 / 233280) * 4 + 1,
        duration: (seed3 / 233280) * 4 + 8,
        delay: i * 0.5,
        offsetX: Math.sin(i * 0.52) * 40,
        offsetY: Math.cos(i * 0.52) * 40,
      };
    })
  );

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ornaments = [
    {
      type: 'crown',
      className: 'absolute top-[15%] left-[10%] w-8 h-8 text-amber-400/40 animate-float-ornament-1',
      icon: CrownIcon,
    },
    {
      type: 'leaf',
      className: 'absolute top-[25%] right-[15%] w-6 h-6 text-amber-500/30 rotate-45 animate-float-ornament-2',
      icon: LeafIcon,
    },
    {
      type: 'sparkle',
      className: 'absolute bottom-[20%] left-[12%] w-4 h-4 text-gold-400/40 animate-float-ornament-3',
      icon: SparklesIcon,
    },
    {
      type: 'circle',
      className: 'absolute bottom-[30%] right-[10%] w-5 h-5 text-amber-300/25 animate-float-ornament-4',
      icon: CircleIcon,
    },
  ];

  return (
    <div 
      aria-hidden="true" 
      className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div className="absolute -top-32 -left-28 h-[520px] w-[520px] rounded-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-300/25 via-amber-300/15 to-transparent rounded-full blur-3xl animate-pulse-orb" />
        
        <div className="absolute inset-8 bg-gradient-to-br from-gold-400/10 via-transparent to-amber-400/10 rounded-full blur-xl animate-spin-slow" />
        
        {orbParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-amber-200/15 to-gold-200/10"
            style={{
              left: `${50 + particle.offsetX}%`,
              top: `${50 + particle.offsetY}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              animationName: 'orbit',
              animationDuration: `${particle.duration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute -bottom-40 -right-28 h-[560px] w-[560px] rounded-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-gold-300/15 to-transparent rounded-full blur-3xl animate-pulse-orb-reverse" />
        
        <div className="absolute inset-16 bg-gradient-to-tr from-transparent via-gold-200/5 to-amber-200/5 rounded-full blur-2xl animate-spin-slow-reverse" />
        
        <div className="absolute inset-0 border border-gold-300/10 rounded-full animate-ping-gentle" />
      </div>

      <div className="absolute left-[8%] top-[22%] h-56 w-56">
        <div className="absolute inset-0 border border-amber-400/25 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[0.5px] animate-spin-slow" />
        
        <div className="absolute inset-4 border border-gold-300/20 rounded-full animate-spin-slow-reverse" />
        
        <div className="absolute inset-8 border border-amber-500/15 rounded-full animate-ping-gentle" />
      </div>

      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.18),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(234,179,8,0.14),transparent_55%),radial-gradient(circle_at_50%_50%,rgba(252,211,77,0.08),transparent_70%)] opacity-80 blur-2xl" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)] animate-shimmer opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/10 to-transparent animate-spin-slow rounded-full" />
      </div>

      {ornaments.map((ornament, index) => {
        const Icon = ornament.icon;
        return (
          <div
            key={index}
            className={`${ornament.className} transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
            style={{
              animationDelay: `${index * 200}ms`,
            }}
          >
            <Icon className="w-full h-full" />
            <div className="absolute inset-0 bg-current blur-sm opacity-30 -z-10" />
          </div>
        );
      })}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-gold-300/20 to-amber-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationName: 'float-particle',
            animationDuration: `${particle.speed}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${particle.delay}s`,
            opacity: isVisible ? 0.6 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-200/40 to-transparent" />
        </div>
      ))}

      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5">
        <div className="absolute inset-0 border border-amber-400/20 rounded-full animate-pulse-gentle" />
        <div 
          className="absolute inset-8 border border-gold-300/15 rounded-full animate-pulse-gentle" 
          style={{ 
            animationDelay: '0.5s' 
          }} 
        />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-5">
        <div className="absolute inset-0 border border-amber-300/20 rotate-45 animate-spin-slow" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-1 w-48 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent origin-left"
            style={{
              transform: `rotate(${i * 45}deg) translateX(0)`,
              animationName: 'ray-rotate',
              animationDuration: '20s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="grain absolute inset-0 opacity-[0.015]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brown-900/15 via-transparent to-transparent" />
      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold-900/10 via-transparent to-transparent" />
    </div>
  );
};

export default FloatingOrnaments;