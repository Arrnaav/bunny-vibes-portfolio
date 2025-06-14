
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
      
      {/* More subtle background elements - increased quantity, reduced visibility */}
      <div className="absolute top-20 left-12 w-8 h-8 bg-orange-200/5 dark:bg-orange-800/5 rounded-full opacity-40 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-amber-200/4 dark:bg-amber-800/4 rounded-full opacity-30" style={{ animation: 'bounce 20s infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-200/6 dark:bg-yellow-800/6 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '6s', animationDuration: '15s' }}></div>
      <div className="absolute top-3/4 left-1/5 w-10 h-10 bg-red-200/5 dark:bg-red-800/5 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '9s', animationDuration: '18s' }}></div>
      <div className="absolute bottom-1/3 left-16 w-4 h-4 bg-orange-300/7 dark:bg-orange-700/7 rounded-full opacity-45" style={{ animation: 'bounce 25s infinite', animationDelay: '4s' }}></div>
      <div className="absolute top-16 right-1/3 w-7 h-7 bg-amber-300/4 dark:bg-amber-700/4 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '22s', animationDelay: '12s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-yellow-300/5 dark:bg-yellow-700/5 rounded-full opacity-35" style={{ animation: 'bounce 30s infinite', animationDelay: '7s' }}></div>
      <div className="absolute top-2/5 left-1/6 w-5 h-5 bg-red-300/4 dark:bg-red-700/4 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '25s', animationDelay: '11s' }}></div>
      <div className="absolute bottom-2/5 right-1/6 w-6 h-6 bg-orange-400/6 dark:bg-orange-600/6 rounded-full opacity-25" style={{ animation: 'bounce 35s infinite', animationDelay: '15s' }}></div>
      <div className="absolute top-4/5 right-2/5 w-9 h-9 bg-amber-400/3 dark:bg-amber-600/3 rounded-full opacity-15 animate-pulse" style={{ animationDuration: '28s', animationDelay: '18s' }}></div>
      <div className="absolute bottom-4/5 left-2/5 w-2 h-2 bg-yellow-400/4 dark:bg-yellow-600/4 rounded-full opacity-40" style={{ animation: 'bounce 40s infinite', animationDelay: '20s' }}></div>
      <div className="absolute top-1/6 left-3/5 w-11 h-11 bg-red-400/3 dark:bg-red-600/3 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '32s', animationDelay: '22s' }}></div>
      <div className="absolute bottom-1/6 right-3/5 w-8 h-8 bg-orange-500/4 dark:bg-orange-500/4 rounded-full opacity-30" style={{ animation: 'bounce 45s infinite', animationDelay: '25s' }}></div>
      <div className="absolute top-1/2 left-4 w-4 h-4 bg-amber-500/5 dark:bg-amber-500/5 rounded-full opacity-25 animate-pulse" style={{ animationDuration: '20s', animationDelay: '8s' }}></div>
      <div className="absolute top-1/4 right-4 w-6 h-6 bg-yellow-500/3 dark:bg-yellow-500/3 rounded-full opacity-35" style={{ animation: 'bounce 38s infinite', animationDelay: '13s' }}></div>
      
      {/* Ultra-subtle floating gradient orbs */}
      <div className="absolute top-1/5 right-1/5 w-40 h-40 bg-gradient-to-r from-orange-200/2 to-red-200/2 dark:from-orange-800/2 dark:to-red-800/2 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '35s' }}></div>
      <div className="absolute bottom-1/5 left-1/5 w-48 h-48 bg-gradient-to-r from-amber-200/1.5 to-yellow-200/1.5 dark:from-amber-800/1.5 dark:to-yellow-800/1.5 rounded-full blur-3xl" style={{ animation: 'bounce 50s infinite', animationDelay: '12s' }}></div>
      <div className="absolute top-3/5 right-1/3 w-32 h-32 bg-gradient-to-r from-red-200/2 to-orange-200/2 dark:from-red-800/2 dark:to-orange-800/2 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '42s', animationDelay: '20s' }}></div>
      
      <div className="text-center z-10 px-6 max-w-6xl">
        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Improved text hierarchy with better spacing and font combinations */}
          <div className="space-y-8 mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              Hi! I am
            </h1>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent leading-none tracking-tighter hover:scale-105 transition-all duration-500 cursor-default mb-6">
              Padmakaar Khobragade
            </h2>
            
            <div className="space-y-4 mt-12">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed tracking-wide">
                But you can call me{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-black text-3xl md:text-4xl lg:text-5xl animate-pulse cursor-pointer hover:scale-110 transition-transform duration-300" style={{ animationDuration: '3s' }}>
                  BUNNY
                </span>
              </p>
              
              <p className="text-base md:text-lg text-gray-400 dark:text-gray-500 font-light italic mt-3 tracking-wider">
                (because my name is hard to pronounce)
              </p>
            </div>
          </div>
          
          {/* Profile area with better spacing */}
          <div className="my-24 relative">
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
          
          {/* Role badges with improved spacing */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20">
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
