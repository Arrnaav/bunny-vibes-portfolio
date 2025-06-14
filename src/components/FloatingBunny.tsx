
import React, { useState } from 'react';

const FloatingBunny = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-30 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-700 ${isHovered ? 'scale-125 rotate-12' : ''}`} style={{ animation: isHovered ? 'none' : 'bounce 8s infinite' }}>
        <div className="relative">
          <div className="text-5xl filter drop-shadow-lg">{isHovered ? '🐰💭' : '🐰'}</div>
          {isHovered && (
            <div className="absolute -top-20 -left-24 bg-white/95 dark:bg-gray-800/95 p-4 rounded-2xl shadow-2xl border-2 border-orange-200 dark:border-red-700 whitespace-nowrap animate-scale-in backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Hop hop! Design magic! 🌟✨</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-200 dark:border-t-red-700"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingBunny;
