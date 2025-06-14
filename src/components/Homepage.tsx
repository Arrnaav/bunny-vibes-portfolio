
import React, { useState, useEffect } from 'react';
import FloatingBunny from './FloatingBunny';
import CursorTrail from './CursorTrail';
import InteractiveFacts from './InteractiveFacts';

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <CursorTrail />
      <FloatingBunny />
      
      {/* Enhanced slow moving background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/20 dark:bg-orange-800/20 rounded-full opacity-40 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-200/15 dark:bg-amber-800/15 rounded-full opacity-30" style={{ animation: 'bounce 10s infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-200/25 dark:bg-yellow-800/25 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-200/20 dark:bg-red-800/20 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '5s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-12 h-12 bg-orange-300/25 dark:bg-orange-700/25 rounded-full opacity-35" style={{ animation: 'bounce 15s infinite', animationDelay: '2s' }}></div>
      <div className="absolute top-16 right-1/3 w-28 h-28 bg-amber-300/15 dark:bg-amber-700/15 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '9s', animationDelay: '7s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-14 h-14 bg-yellow-300/20 dark:bg-yellow-700/20 rounded-full opacity-30" style={{ animation: 'bounce 18s infinite', animationDelay: '4s' }}></div>
      <div className="absolute top-1/4 left-1/6 w-18 h-18 bg-red-300/15 dark:bg-red-700/15 rounded-full opacity-25 animate-pulse" style={{ animationDuration: '11s', animationDelay: '6s' }}></div>
      <div className="absolute bottom-1/4 right-1/6 w-22 h-22 bg-orange-400/20 dark:bg-orange-600/20 rounded-full opacity-20" style={{ animation: 'bounce 20s infinite', animationDelay: '8s' }}></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/5 right-1/5 w-40 h-40 bg-gradient-to-r from-orange-200/10 to-red-200/10 dark:from-orange-800/10 dark:to-red-800/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '14s' }}></div>
      <div className="absolute bottom-1/5 left-1/5 w-60 h-60 bg-gradient-to-r from-amber-200/8 to-yellow-200/8 dark:from-amber-800/8 dark:to-yellow-800/8 rounded-full blur-2xl" style={{ animation: 'bounce 25s infinite', animationDelay: '5s' }}></div>
      
      <div className="text-center z-10 px-6 max-w-5xl">
        <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="relative group">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent mb-6 hover:scale-105 transition-all duration-500 cursor-default leading-tight tracking-tight">
              Hi! I am Padmakaar Khobragade
            </h1>
            <div className="absolute -top-6 -right-6 text-5xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-125" style={{ animation: 'bounce 6s infinite' }}>🌟</div>
          </div>
          
          <div className="relative">
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-bold leading-relaxed">
              But you can call me{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-black text-5xl md:text-6xl animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300" style={{ animationDuration: '3s' }}>
                  BUNNY
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium italic">
            (because my name is hard to pronounce)
          </p>
          
          {/* Enhanced interactive profile area */}
          <div className="my-16 relative">
            <div 
              className="w-56 h-56 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-2xl border-4 border-orange-200 dark:border-red-700 flex items-center justify-center group cursor-pointer relative overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight/2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth/2) * 0.01}deg)`,
                transition: 'all 0.3s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50 dark:from-orange-900/30 dark:to-red-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center group relative z-10">
                <div className="text-7xl mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">🐰</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-medium">Hand-drawn doodle goes here</p>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Magnetic floating elements around profile */}
            <div className="absolute top-4 left-4 text-2xl animate-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '1s', animationDuration: '4s' }}>✨</div>
            <div className="absolute top-4 right-4 text-2xl animate-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '2s', animationDuration: '5s' }}>🎨</div>
            <div className="absolute bottom-4 left-4 text-2xl animate-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '3s', animationDuration: '6s' }}>💫</div>
            <div className="absolute bottom-4 right-4 text-2xl animate-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '4s', animationDuration: '7s' }}>🚀</div>
          </div>
          
          {/* Enhanced role badges with magnetic effects */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12">
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-110 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-3xl" style={{ animation: 'pulse 4s infinite' }}>🎨</span>
                <span className="font-bold text-lg">UX Designer</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/0 to-red-500/0 group-hover:from-orange-400/20 group-hover:to-red-500/20 rounded-2xl blur transition-all duration-300"></div>
            </div>
            
            <div className="hidden sm:block w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
            
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 p-4 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 hover:scale-110 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-3xl" style={{ animation: 'pulse 5s infinite', animationDelay: '1s' }}>✨</span>
                <span className="font-bold text-lg">Pixel Perfectionist</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/0 to-pink-500/0 group-hover:from-red-400/20 group-hover:to-pink-500/20 rounded-2xl blur transition-all duration-300"></div>
            </div>
            
            <div className="hidden sm:block w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
            
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 p-4 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:scale-110 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-3xl" style={{ animation: 'pulse 6s infinite', animationDelay: '2s' }}>🚀</span>
                <span className="font-bold text-lg">Problem Solver</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/0 to-yellow-500/0 group-hover:from-amber-400/20 group-hover:to-yellow-500/20 rounded-2xl blur transition-all duration-300"></div>
            </div>
          </div>
          
          {/* Interactive floating text elements with enhanced effects */}
          <div className="absolute top-1/4 left-8 hidden lg:block">
            <div className="text-orange-400 dark:text-orange-300 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-125 transform rotate-12 hover:rotate-6 hover:shadow-lg p-3 rounded-lg hover:bg-orange-50/50 dark:hover:bg-orange-900/20">
              <span className="text-base font-bold">Design is fun! 🎉</span>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-8 hidden lg:block">
            <div className="text-red-400 dark:text-red-300 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-125 transform -rotate-12 hover:-rotate-6 hover:shadow-lg p-3 rounded-lg hover:bg-red-50/50 dark:hover:bg-red-900/20">
              <span className="text-base font-bold">Pixels & Coffee ☕</span>
            </div>
          </div>
          
          <div className="absolute top-1/3 left-1/6 hidden xl:block">
            <div className="text-amber-400 dark:text-amber-300 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-125 transform rotate-6 hover:rotate-3 hover:shadow-lg p-3 rounded-lg hover:bg-amber-50/50 dark:hover:bg-amber-900/20">
              <span className="text-sm font-medium">Ctrl+Z is life 🔄</span>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/5 hidden xl:block">
            <div className="text-yellow-400 dark:text-yellow-300 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-125 transform -rotate-6 hover:-rotate-3 hover:shadow-lg p-3 rounded-lg hover:bg-yellow-50/50 dark:hover:bg-yellow-900/20">
              <span className="text-sm font-medium">Figma Files: 247 📁</span>
            </div>
          </div>
        </div>
      </div>
      
      <InteractiveFacts />
    </div>
  );
};

export default Homepage;
