
import React, { useState, useEffect } from 'react';

const InteractiveFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const facts = [
    { icon: '🎵', text: 'Listens to K-pop while designing' },
    { icon: '☕', text: 'Powered by chai and creativity' },
    { icon: '🌙', text: 'Dreams in wireframes' },
    { icon: '🎯', text: 'Every pixel has a purpose' },
    { icon: '🐰', text: 'Bunny-level energy always' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-8 z-20 hidden lg:block">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-orange-200/50 dark:border-red-700/50 hover:scale-105 transition-all duration-300 cursor-pointer max-w-xs">
        <div className="flex items-center space-x-3">
          <span className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>
            {facts[currentFact].icon}
          </span>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {facts[currentFact].text}
          </p>
        </div>
        <div className="flex justify-center mt-3 space-x-1">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentFact 
                  ? 'bg-orange-500 w-4' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFacts;
