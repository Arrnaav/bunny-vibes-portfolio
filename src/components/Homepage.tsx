
import React from 'react';
import FloatingBunny from './FloatingBunny';
import BackgroundElements from './BackgroundElements';

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <FloatingBunny />
      <BackgroundElements />
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="relative space-y-4">
            <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium">
              Hi! I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sunny-500 via-golden-500 to-warm-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
              Padmakaar Khobragade
            </h1>
            <div className="absolute -top-4 -right-4 text-4xl animate-pulse" style={{ animationDuration: '4s' }}>🌟</div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            but you can call me{' '}
            <span className="bg-gradient-to-r from-sunny-400 to-golden-500 bg-clip-text text-transparent font-bold text-4xl animate-pulse" style={{ animationDuration: '3s' }}>
              BUNNY
            </span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            (because my name is hard to pronounce)
          </p>
          
          {/* Placeholder for hand-drawn doodle */}
          <div className="my-12">
            <div className="w-48 h-48 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl border-4 border-sunny-200 dark:border-golden-700 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-2">🐰</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 hover:text-sunny-600 dark:hover:text-golden-400 hover:scale-110 transition-all duration-300 hover:rotate-2 cursor-default select-none">
                  Hand-drawn doodle goes here
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse" style={{ animationDuration: '2s' }}>🎨</span>
              <span>UX Designer</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-sunny-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse" style={{ animationDuration: '2.5s' }}>✨</span>
              <span>Pixel Perfectionist</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-golden-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse" style={{ animationDuration: '3s' }}>🚀</span>
              <span>Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
