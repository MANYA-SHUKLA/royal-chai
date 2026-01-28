'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const MenuIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 18 18" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 5H5" />
    <path d="M19 19v4" />
    <path d="M15 21h4" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#story', label: 'Our Story', delay: '0ms' },
    { href: '#signup', label: 'Notify Me', delay: '100ms' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-b from-cream/95 to-cream/80 backdrop-blur-xl shadow-lg shadow-amber-100/30 border-b border-gold-300/30 py-3' 
          : 'bg-gradient-to-b from-cream/70 to-transparent backdrop-blur-sm border-b border-gold-200/20 py-4'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="relative group">
              <Logo />
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/0 via-gold-400/10 to-gold-400/0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000"></div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group"
                  style={{ animationDelay: item.delay }}
                >
                  <span className="relative z-10 text-brown-900 font-medium px-4 py-2 transition-all duration-500 group-hover:text-amber-900">
                    {item.label}
                  </span>
                  
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-600 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
                  
                  <span className="absolute inset-0 bg-gradient-to-r from-gold-200/0 to-amber-100/0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:scale-110"></span>
                  
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative">
                      <div className="absolute w-1 h-1 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute w-0.5 h-0.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s', left: '4px', top: '2px' }}></div>
                    </div>
                  </div>
                </a>
              ))}

              <div className="relative ml-4">
                <div className="relative overflow-hidden">
                  <div className="px-6 py-2.5 bg-gradient-to-br from-gold-50 to-amber-50 text-amber-900 rounded-full font-semibold text-sm border border-gold-300 shadow-lg relative z-10 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gold-200/50">
                    <div className="flex items-center space-x-2">
                      <SparklesIcon className="w-4 h-4 text-amber-600 animate-pulse" />
                      <span className="relative">
                        Launching Soon
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-shimmer"></span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 rounded-full opacity-0 animate-spin-slow p-[2px] group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-gold-50 to-amber-50 rounded-full"></div>
                  </div>
                  
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-gold-300 to-amber-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-gradient-to-br from-amber-300 to-gold-400 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
                </div>
                
                <div className="absolute -top-1 -right-1 w-3 h-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-ping"></div>
                  <div className="absolute inset-0.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-3 bg-gradient-to-br from-gold-50 to-amber-50 rounded-full border border-gold-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group"
            >
              <div className="relative z-10">
                {isMobileMenuOpen ? (
                  <XIcon className="w-6 h-6 text-amber-800 transform transition-transform duration-500 rotate-180" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-amber-800 transform transition-transform duration-500" />
                )}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow p-[2px] transition-opacity duration-700">
                <div className="w-full h-full bg-gradient-to-br from-gold-50 to-amber-50 rounded-full"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200/0 to-amber-100/0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
            </button>
          </div>
        </nav>
      </header>

      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 transform ${
        isMobileMenuOpen 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-brown-900/80 to-brown-950/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gold-50 to-amber-50 shadow-2xl shadow-brown-900/50 border-l border-gold-300 transform transition-transform duration-700 ease-out-expo">
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-gradient-to-br from-white to-gold-100 rounded-full border border-gold-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 group"
              >
                <XIcon className="w-6 h-6 text-amber-800 transform transition-transform duration-500" />
              </button>
            </div>
            
            <div className="flex-1 space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-white/80 to-amber-50/80 border border-gold-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <span className="text-2xl font-serif font-bold text-brown-900 relative z-10">
                      {item.label}
                    </span>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-100/0 to-amber-100/0 group-hover:from-gold-100/40 group-hover:to-amber-100/40 transition-all duration-700 rounded-2xl"></div>
                    
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-400 to-amber-600 transition-all duration-700 group-hover:w-full rounded-full"></div>
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                      <SparklesIcon className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                </a>
              ))}
              
              <div className="pt-8">
                <div className="relative p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-300 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-200 to-amber-300 rounded-full flex items-center justify-center border border-gold-400">
                        <SparklesIcon className="w-6 h-6 text-amber-700" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-ping"></div>
                        <div className="absolute inset-0.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-brown-900">Launching Soon</h3>
                      <p className="text-sm text-amber-800">Be among the first to experience</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 rounded-2xl opacity-20 animate-spin-slow p-[2px]">
                    <div className="w-full h-full bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-gold-200">
              <p className="text-center text-sm text-amber-800">
                Experience the Royal Tradition
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;