'use client';
import React, { useState, useEffect } from 'react';

const SendIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" x2="11" y1="2" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"/>
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

const CrownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const GiftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="8" width="18" height="4" rx="1"/>
    <line x1="12" x2="12" y1="8" y2="21"/>
    <path d="M12 21h7a2 2 0 0 0 2-2v-9"/>
    <path d="M5 10v9a2 2 0 0 0 2 2h5"/>
    <path d="M12 8l-.66-4.63a2 2 0 0 0-3.96 1.13L12 8z"/>
    <path d="M12 8l.66-4.63a2 2 0 0 1 3.96 1.13L12 8z"/>
  </svg>
);

const LockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    
    createConfetti();
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const createConfetti = () => {
    const colors = ['#fbbf24', '#f59e0b', '#d97706', '#facc15', '#eab308'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-particle';
      confetti.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        top: 50%;
        left: 50%;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        z-index: 10000;
        pointer-events: none;
        opacity: 0.8;
      `;
      
      document.body.appendChild(confetti);
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 30 + Math.random() * 20;
      let vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity;
      
      let x = 50;
      let y = 50;
      let rotation = 0;
      
      const animate = () => {
        x += vx;
        y += vy;
        vy += 0.5;
        rotation += 5;
        
        confetti.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        confetti.style.opacity = `${1 - (Math.abs(x - 50) + Math.abs(y - 50)) / 100}`;
        
        if (Math.abs(x) < 200 && Math.abs(y) < 200) {
          requestAnimationFrame(animate);
        } else {
          confetti.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
  };

  return (
    <section id="signup" className="relative py-24 bg-gradient-to-b from-cream via-amber-50/30 to-cream overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-1/4 left-10 w-24 h-24 opacity-10 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-amber-600 to-gold-500 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 opacity-10 animate-float-slower">
          <div className="w-full h-full bg-gradient-to-tr from-amber-700 to-gold-600 rounded-full blur-xl"></div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 w-64 h-64">
          <div className="w-full h-full bg-gradient-to-br from-gold-400/10 to-amber-500/5 rounded-full animate-pulse-slow blur-3xl"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-gold-300 to-amber-400 rounded-2xl flex items-center justify-center border border-gold-400 shadow-lg rotate-45 group-hover:rotate-90 transition-all duration-700">
                <CrownIcon className="w-8 h-8 text-white -rotate-45 group-hover:-rotate-90 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative bg-gradient-to-br from-white via-cream to-amber-50 rounded-3xl p-8 md:p-12 border border-gold-300 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-500 to-gold-400 rounded-3xl opacity-0 group-hover:opacity-10 animate-spin-slow p-[1px] transition-opacity duration-1000">
                <div className="w-full h-full bg-gradient-to-br from-white via-cream to-amber-50 rounded-3xl"></div>
              </div>
              
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-br from-gold-300/30 to-amber-400/30"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${particle.id * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="text-center mb-10 relative">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <StarIcon className="w-6 h-6 text-amber-500 fill-current animate-pulse" />
                  <span className="text-gold-700 font-semibold tracking-widest text-sm uppercase">
                    Exclusive Access
                  </span>
                  <StarIcon className="w-6 h-6 text-amber-500 fill-current animate-pulse" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-6 leading-tight">
                  Be the First to Taste
                  <span className="block mt-2 relative">
                    <span className="relative">
                      Royal Tradition
                      <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-shimmer"></span>
                    </span>
                  </span>
                </h3>
                
                <p className="text-xl text-brown-700 max-w-2xl mx-auto leading-relaxed">
                  Join our exclusive waitlist for launch updates, special offers, 
                  and a taste of centuries-old tradition.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                {isSubmitted ? (
                  <div className="relative text-center py-12">
                    <div className="relative inline-block mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-ping opacity-20"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center border-2 border-emerald-300 shadow-lg">
                        <CheckIcon className="w-12 h-12 text-emerald-600" />
                      </div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full blur-xl animate-pulse-slow"></div>
                    </div>
                    
                    <h4 className="text-3xl font-bold text-emerald-800 mb-3">
                      Welcome to the Royal Circle!
                    </h4>
                    <p className="text-brown-700 text-lg mb-6">
                      You&apos;re now on our exclusive list. We&apos;ll notify you when 
                      we launch with a special welcome gift.
                    </p>
                    
                    <div className="inline-flex items-center space-x-2 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-200">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-emerald-700 text-sm">
                        Returning to form in 5 seconds...
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="relative group">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setInputFocus(true)}
                          onBlur={() => setInputFocus(false)}
                          placeholder="Enter your royal email address"
                          className="w-full px-8 py-6 bg-white/95 backdrop-blur-sm border-2 border-gold-300 rounded-2xl text-brown-900 text-lg placeholder-brown-400/60 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100/50 transition-all duration-500 shadow-lg"
                          required
                          disabled={isLoading}
                        />
                        
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <SendIcon className={`w-5 h-5 transition-all duration-500 ${
                            inputFocus ? 'text-amber-600' : 'text-gold-400'
                          }`} />
                        </div>
                        
                        {inputFocus && (
                          <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl animate-pulse-gentle pointer-events-none"></div>
                        )}
                      </div>
                      
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          className="relative px-10 py-4 bg-gradient-to-r from-amber-600 via-gold-500 to-amber-600 text-white font-semibold rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-200 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-500 flex items-center space-x-3 group/btn overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-gold-400 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                          
                          <div className="relative z-10 flex items-center space-x-3">
                            {isLoading ? (
                              <>
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span className="font-medium">Brewing...</span>
                              </>
                            ) : (
                              <>
                                <SparklesIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                                <span className="font-medium">Join Waitlist</span>
                                <GiftIcon className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 transform group-hover/btn:translate-x-1 transition-all duration-300" />
                              </>
                            )}
                          </div>
                          
                          {isHovered && !isLoading && (
                            <>
                              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                              <div className="absolute -top-2 -right-1 w-1.5 h-1.5 bg-amber-200 rounded-full animate-float" style={{ animationDelay: '0.2s' }}></div>
                              <div className="absolute -bottom-1 left-4 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '0.4s' }}></div>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gold-300/50">
                      {[
                        { icon: GiftIcon, text: '20% OFF on launch', color: 'from-amber-500 to-gold-500' },
                        { icon: CrownIcon, text: 'Early access priority', color: 'from-gold-500 to-amber-600' },
                        { icon: LockIcon, text: 'Privacy guaranteed', color: 'from-amber-600 to-gold-600' },
                      ].map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-gradient-to-br from-white to-amber-50 rounded-xl border border-gold-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center`}>
                            <benefit.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-brown-800 font-medium">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center pt-8 border-t border-gold-300/50">
                      <div className="inline-flex items-center space-x-2 bg-amber-50/80 px-6 py-3 rounded-full border border-gold-200">
                        <LockIcon className="w-4 h-4 text-amber-700" />
                        <p className="text-brown-600 text-sm font-medium">
                          We respect your privacy. No spam, ever. Unsubscribe anytime.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold-300 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-300 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-300 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold-300 rounded-br-3xl"></div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/10 via-amber-500/5 to-gold-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gold-200 shadow-lg">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">1,847</div>
                  <div className="text-sm text-brown-600">Royal Members</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">48</div>
                  <div className="text-sm text-brown-600">Days to Launch</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800 mb-1">20%</div>
                  <div className="text-sm text-brown-600">Exclusive Discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;