
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [progress, setProgress] = useState(0);

  const taglines = [
    "Warming up Figma fingers… 🐰💅",
    "Labbad labbad… almost there…",
    "Designs loading at Bunny speed™"
  ];

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    return () => {
      clearInterval(taglineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="text-6xl animate-bounce">🐰</div>
          <div className="absolute -top-2 -right-2 text-2xl animate-spin">✨</div>
        </div>
        
        <div className="space-y-4">
          <p className="text-2xl font-bold text-gray-800 animate-pulse">
            {taglines[currentTagline]}
          </p>
          
          <div className="w-80 bg-white/50 backdrop-blur rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 w-6 h-full bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600">{progress}% loaded</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
