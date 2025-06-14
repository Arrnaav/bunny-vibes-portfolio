
import React, { useState, useEffect } from 'react';
import FloatingBunny from './FloatingBunny';
import CursorTrail from './CursorTrail';

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
      
      {/* Subtle background elements - more in number, less focused */}
      <div className="absolute top-16 left-8 w-12 h-12 bg-orange-200/10 dark:bg-orange-800/10 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-amber-200/8 dark:bg-amber-800/8 rounded-full opacity-15" style={{ animation: 'bounce 15s infinite' }}></div>
      <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-yellow-200/12 dark:bg-yellow-800/12 rounded-full opacity-18 animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
      <div className="absolute top-2/3 left-1/6 w-14 h-14 bg-red-200/10 dark:bg-red-800/10 rounded-full opacity-12 animate-pulse" style={{ animationDelay: '6s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-1/4 left-12 w-6 h-6 bg-orange-300/15 dark:bg-orange-700/15 rounded-full opacity-20" style={{ animation: 'bounce 20s infinite', animationDelay: '3s' }}></div>
      <div className="absolute top-12 right-1/4 w-10 h-10 bg-amber-300/8 dark:bg-amber-700/8 rounded-full opacity-10 animate-pulse" style={{ animationDuration: '14s', animationDelay: '8s' }}></div>
      <div className="absolute bottom-12 left-1/4 w-5 h-5 bg-yellow-300/10 dark:bg-yellow-700/10 rounded-full opacity-15" style={{ animation: 'bounce 25s infinite', animationDelay: '5s' }}></div>
      <div className="absolute top-1/3 left-1/8 w-7 h-7 bg-red-300/8 dark:bg-red-700/8 rounded-full opacity-12 animate-pulse" style={{ animationDuration: '16s', animationDelay: '7s' }}></div>
      <div className="absolute bottom-1/3 right-1/8 w-9 h-9 bg-orange-400/12 dark:bg-orange-600/12 rounded-full opacity-14" style={{ animation: 'bounce 30s infinite', animationDelay: '9s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-11 h-11 bg-amber-400/6 dark:bg-amber-600/6 rounded-full opacity-8 animate-pulse" style={{ animationDuration: '18s', animationDelay: '10s' }}></div>
      <div className="absolute bottom-3/4 left-1/3 w-4 h-4 bg-yellow-400/8 dark:bg-yellow-600/8 rounded-full opacity-10" style={{ animation: 'bounce 35s infinite', animationDelay: '12s' }}></div>
      <div className="absolute top-1/5 left-2/5 w-13 h-13 bg-red-400/5 dark:bg-red-600/5 rounded-full opacity-8 animate-pulse" style={{ animationDuration: '20s', animationDelay: '15s' }}></div>
      
      {/* Very subtle floating gradient orbs */}
      <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-gradient-to-r from-orange-200/5 to-red-200/5 dark:from-orange-800/5 dark:to-red-800/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '22s' }}></div>
      <div className="absolute bottom-1/6 left-1/6 w-40 h-40 bg-gradient-to-r from-amber-200/4 to-yellow-200/4 dark:from-amber-800/4 dark:to-yellow-800/4 rounded-full blur-3xl" style={{ animation: 'bounce 40s infinite', animationDelay: '8s' }}></div>
      
      <div className="text-center z-10 px-6 max-w-6xl">
        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Improved text hierarchy with proper spacing */}
          <div className="space-y-12 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 dark:text-gray-200 leading-tight">
              Hi! I am
            </h1>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent leading-tight tracking-tight hover:scale-105 transition-all duration-500 cursor-default">
              Padmakaar Khobragade
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                But you can call me{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-black text-4xl md:text-5xl lg:text-6xl animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300" style={{ animationDuration: '3s' }}>
                  BUNNY
                </span>
              </p>
              
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light italic">
                (because my name is hard to pronounce)
              </p>
            </div>
          </div>
          
          {/* Simplified profile area with better spacing */}
          <div className="my-20 relative">
            <div 
              className="w-48 h-48 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl border-2 border-orange-200 dark:border-red-700 flex items-center justify-center group cursor-pointer relative overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight/2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth/2) * 0.005}deg)`,
                transition: 'all 0.3s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-red-100/30 dark:from-orange-900/20 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center group relative z-10">
                <div className="text-6xl mb-2 transition-all duration-500 group-hover:scale-110">🐰</div>
                <p className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors font-medium">Hand-drawn doodle goes here</p>
              </div>
            </div>
          </div>
          
          {/* Simplified role badges with better spacing */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-16">
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 p-6 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:scale-105 hover:shadow-lg">
                <span className="text-2xl">🎨</span>
                <span className="font-semibold text-lg">UX Designer</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-2 h-2 bg-orange-400 rounded-full opacity-50"></div>
            
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 p-6 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/10 hover:scale-105 hover:shadow-lg">
                <span className="text-2xl">✨</span>
                <span className="font-semibold text-lg">Pixel Perfectionist</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-2 h-2 bg-red-400 rounded-full opacity-50"></div>
            
            <div className="group relative cursor-pointer">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 p-6 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-900/10 hover:scale-105 hover:shadow-lg">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-lg">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
