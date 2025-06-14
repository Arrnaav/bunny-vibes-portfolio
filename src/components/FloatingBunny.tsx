
import React, { useState } from 'react';

const FloatingBunny = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-30 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : 'animate-bounce'}`}
           style={{ animationDuration: isHovered ? '0s' : '3s' }}>
        <div className="relative">
          <div className="text-4xl">{isHovered ? '🐰💭' : '🐰'}</div>
          {isHovered && (
            <div className="absolute -top-16 -left-20 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-rose-200 dark:border-coral-700 whitespace-nowrap animate-scale-in">
              <p className="text-sm text-gray-700 dark:text-gray-300">Hop hop! 🌟</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingBunny;
