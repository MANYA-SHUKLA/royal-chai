'use client';

import React, { useState, useEffect } from 'react';

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const SparklesIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M9 5H5"/>
    <path d="M19 19v4"/>
    <path d="M15 21h4"/>
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

const LeafIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('story');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const storyCards = [
    {
      id: 'heritage',
      icon: ShieldIcon,
      title: 'Heritage',
      description: 'Drawing from centuries-old recipes perfected in royal kitchens, we preserve the authentic taste and preparation methods that have been cherished for generations.',
      color: 'from-gold-400 to-amber-500',
      accentColor: 'gold-500',
      decoration: CrownIcon,
      particles: 8,
    },
    {
      id: 'authenticity',
      icon: HeartIcon,
      title: 'Authenticity',
      description: 'Every ingredient is carefully sourced and blended to maintain the true essence of royal Indian chai. No compromises, just pure tradition in every cup.',
      color: 'from-amber-500 to-gold-600',
      accentColor: 'amber-600',
      decoration: TargetIcon,
      particles: 6,
    },
    {
      id: 'story',
      icon: UsersIcon,
      title: 'Story',
      description: "More than just tea, we're sharing a cultural legacy. Join us in celebrating the rituals, conversations, and moments that chai has inspired throughout history.",
      color: 'from-gold-600 to-amber-700',
      accentColor: 'gold-700',
      decoration: BookOpenIcon,
      particles: 7,
    },
  ];

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-cream/60 to-amber-50/80">
        <div className="absolute top-20 left-10 w-40 h-40 opacity-10 animate-float-slow">
          <LeafIcon className="w-full h-full text-amber-700" />
        </div>
        <div className="absolute bottom-32 right-16 w-32 h-32 opacity-10 animate-float-slower rotate-45">
          <CoffeeIcon className="w-full h-full text-gold-600" />
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 via-amber-300/5 to-transparent rounded-full blur-3xl animate-pulse-orb"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/8 via-gold-300/5 to-transparent rounded-full blur-3xl animate-pulse-orb-reverse"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-shimmer"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-6 bg-gradient-to-r from-gold-400/20 via-amber-500/15 to-gold-400/20 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-gold-100 to-amber-50 rounded-2xl flex items-center justify-center border border-gold-300 shadow-lg rotate-45 group hover:rotate-90 transition-all duration-700">
                <HeartIcon className="w-10 h-10 text-amber-700 -rotate-45 group-hover:-rotate-90 transition-all duration-700" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6">
                <StarIcon className="w-full h-full text-gold-500 fill-current animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-brown-900 mb-6">
              <span className="relative">
                Chai Culture
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 rounded-full"></span>
              </span>
            </h3>
            
            <p className="text-xl text-brown-700 max-w-3xl mx-auto mb-8">
              Where every sip tells a story of tradition, passion, and royal heritage
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400 rounded-full"></div>
              <SparklesIcon className="w-6 h-6 text-amber-600 animate-spin-slow" />
              <div className="w-12 h-0.5 bg-gradient-to-r from-gold-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className={`relative mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/10 via-amber-500/5 to-gold-400/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/90 via-cream/80 to-amber-50/90 backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-2xl border border-gold-300/50">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400/50 rounded-tl-xl"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400/50 rounded-tr-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400/50 rounded-bl-xl"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400/50 rounded-br-xl"></div>
              
              <div className="relative">
                <SparklesIcon className="absolute -top-6 -left-6 w-8 h-8 text-amber-500/50 animate-pulse-gentle" />
                <SparklesIcon className="absolute -bottom-6 -right-6 w-8 h-8 text-gold-500/50 animate-pulse-gentle" style={{ animationDelay: '0.5s' }} />
                
                <p className="text-2xl md:text-3xl text-brown-800 italic text-center leading-relaxed font-light">
                  &ldquo;We&apos;re building something close to our hearts — a brand that brings the royal tradition of Indian chai to the world. Our heritage, authenticity, and story are at the core of everything we do.&rdquo;
                </p>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gold-300/30">
                <div className="flex items-center justify-center space-x-3">
                  <CrownIcon className="w-5 h-5 text-amber-600" />
                  <span className="text-brown-700 font-medium">The Royal Chai Family</span>
                  <CrownIcon className="w-5 h-5 text-amber-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyCards.map((card, index) => {
              const Icon = card.icon;
              const Decoration = card.decoration;
              const isHovered = hoveredCard === card.id;
              
              return (
                <div
                  key={card.id}
                  className={`relative transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative h-full bg-gradient-to-br from-white via-amber-50 to-gold-50/30 rounded-3xl p-8 border-2 transition-all duration-500 overflow-hidden group ${
                    isHovered 
                      ? 'border-gold-400 shadow-2xl scale-105' 
                      : 'border-gold-200 shadow-xl'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm"></div>
                    
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {Array.from({ length: card.particles }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-gradient-to-br from-gold-300/20 to-amber-400/10"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            opacity: isHovered ? 0.6 : 0.2,
                            transform: `scale(${isHovered ? 1 : 0})`,
                            transition: `all 0.5s ease-out ${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${card.color}/20 to-transparent blur-2xl transition-all duration-700 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
                    }`}></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-8">
                        <div className={`relative mr-6 transition-all duration-500 group-hover:scale-110`}>
                          <div className={`absolute -inset-4 bg-gradient-to-br ${card.color}/20 rounded-full blur-lg transition-all duration-500 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                          <div className={`relative w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                            isHovered ? 'border-white shadow-lg' : 'border-gold-300'
                          }`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className={`absolute -top-2 -right-2 transition-all duration-500 ${
                            isHovered ? 'opacity-100 rotate-12 scale-110' : 'opacity-0 scale-90'
                          }`}>
                            <Decoration className="w-6 h-6 text-amber-600" />
                          </div>
                        </div>
                        
                        <h4 className="text-2xl font-serif font-bold text-brown-900">
                          {card.title}
                        </h4>
                      </div>
                      
                      <p className="text-brown-700 leading-relaxed text-lg">
                        {card.description}
                      </p>
                      
                      <div className={`w-full h-1 bg-gradient-to-r ${card.color} mt-6 transform origin-left transition-all duration-500 rounded-full ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StorySection;