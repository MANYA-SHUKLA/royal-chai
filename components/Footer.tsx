'use client';

import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 2"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
     <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const LeafIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
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

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M9 5H5"/>
    <path d="M19 19v4"/>
    <path d="M15 21h4"/>
  </svg>
);

const ArrowUpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m5 12 7-7 7 7"/>
    <path d="M12 19V5"/>
  </svg>
);

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { 
      icon: InstagramIcon, 
      href: '#', 
      label: 'Instagram',
      color: 'from-pink-500 via-red-400 to-yellow-500',
      hoverColor: 'from-pink-600 via-red-500 to-yellow-600',
    },
    { 
      icon: FacebookIcon, 
      href: '#', 
      label: 'Facebook',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'from-blue-700 to-blue-800',
    },
    { 
      icon: TwitterIcon, 
      href: '#', 
      label: 'Twitter',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'from-sky-600 to-sky-700',
    },
    { 
      icon: MailIcon, 
      href: '#', 
      label: 'Email',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'from-amber-600 to-amber-700',
    },
  ];

  const footerLinks = [
    { href: '#', label: 'Privacy Policy', icon: SparklesIcon },
    { href: '#', label: 'Terms of Service', icon: LeafIcon },
    { href: '#', label: 'Shipping Policy', icon: CoffeeIcon },
    { href: '#', label: 'Contact Us', icon: MailIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingOrnaments = [
    { top: '10%', left: '5%', delay: '0s', size: 'w-4 h-4' },
    { top: '15%', right: '8%', delay: '0.5s', size: 'w-3 h-3' },
    { top: '30%', left: '12%', delay: '1s', size: 'w-5 h-5' },
    { top: '40%', right: '15%', delay: '1.5s', size: 'w-4 h-4' },
    { top: '60%', left: '7%', delay: '2s', size: 'w-3 h-3' },
    { top: '70%', right: '10%', delay: '2.5s', size: 'w-5 h-5' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-brown-900 via-brown-950 to-black text-amber-50 pt-20 pb-16 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-900/5 via-transparent to-amber-900/10"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-amber-700/10 to-gold-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="absolute bottom-32 right-20 w-40 h-40">
          <div className="w-full h-full bg-gradient-to-bl from-amber-800/10 to-gold-700/5 rounded-full blur-3xl animate-pulse-slow-reverse"></div>
        </div>
        
        {floatingOrnaments.map((ornament, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-br from-amber-500/10 to-gold-400/5 ${ornament.size} animate-float-slow`}
            style={{
              top: ornament.top,
              left: ornament.left,
              right: ornament.right,
              animationDelay: ornament.delay,
            }}
          />
        ))}
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
          <div className="absolute inset-0 border border-amber-600/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-16 border border-gold-500/15 rounded-full animate-spin-slow-reverse"></div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 z-50 transition-all duration-700 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-amber-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-amber-600 to-gold-500 rounded-2xl flex items-center justify-center border border-amber-400/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
            <ArrowUpIcon className="w-6 h-6 text-white group-hover:animate-bounce" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-gold-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Logo />
            </div>
            <p className="max-w-xs text-amber-200/60 font-serif italic text-sm text-center md:text-left">
              &quot;Royal traditions, modern moments. Experience the timeless taste.&quot;
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const isHovered = hoveredSocial === social.label;
              
              return (
                <div key={index} className="relative group perspective" onMouseEnter={() => setHoveredSocial(social.label)} onMouseLeave={() => setHoveredSocial(null)}>
                  <a
                    href={social.href}
                    className="relative block w-12 h-12 bg-gradient-to-br from-brown-800 to-brown-900 rounded-xl flex items-center justify-center border border-amber-900/50 shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-amber-500/30 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <Icon className={`w-5 h-5 text-amber-300/70 transition-all duration-500 group-hover:text-amber-100 group-hover:scale-110 transform ${isHovered ? 'animate-bounce' : ''}`} />
                  </a>
                  
                  {isHovered && (
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gradient-to-r from-amber-900 to-brown-900 text-amber-100 text-[10px] py-1 px-3 rounded-full border border-amber-800/50 whitespace-nowrap shadow-lg">
                        {social.label}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-amber-900/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-amber-300/40">
          <p>© {currentYear} Royal Chai. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a 
                  key={index} 
                  href={link.href}
                  className="relative group flex items-center space-x-2 transition-colors duration-300 hover:text-amber-200"
                >
                  <Icon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
          <div className="flex items-center space-x-2 text-sm text-amber-200/80">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
            <span>in India by MANYA SHUKLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;