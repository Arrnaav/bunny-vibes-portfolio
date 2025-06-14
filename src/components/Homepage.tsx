
import React from 'react';
import FloatingBunny from './FloatingBunny';

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <FloatingBunny />
      
      {/* More noticeable animated background elements with happy colors */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-sunny-300/40 dark:bg-sunny-600/30 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-golden-300/50 dark:bg-golden-600/35 rounded-full animate-bounce" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-10 h-10 bg-warm-300/35 dark:bg-warm-600/25 rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-sunny-400/45 dark:bg-sunny-700/35 rounded-full animate-bounce" style={{ animationDuration: '9s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/5 right-1/4 w-7 h-7 bg-golden-400/40 dark:bg-golden-700/30 rounded-full animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/2 right-1/5 w-4 h-4 bg-warm-400/35 dark:bg-warm-700/25 rounded-full animate-bounce" style={{ animationDuration: '11s', animationDelay: '5s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-9 h-9 bg-sunny-300/30 dark:bg-sunny-600/20 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/3 right-2/3 w-6 h-6 bg-golden-300/35 dark:bg-golden-600/25 rounded-full animate-bounce" style={{ animationDuration: '8.5s', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/5 left-2/5 w-8 h-8 bg-warm-300/25 dark:bg-warm-600/15 rounded-full animate-pulse" style={{ animationDuration: '9.5s', animationDelay: '3.5s' }}></div>
      <div className="absolute top-2/3 right-1/6 w-5 h-5 bg-sunny-400/35 dark:bg-sunny-700/25 rounded-full animate-bounce" style={{ animationDuration: '7.5s', animationDelay: '4.5s' }}></div>
      
      {/* Additional geometric shapes */}
      <div className="absolute top-1/6 left-1/2 w-12 h-3 bg-golden-200/30 dark:bg-golden-700/20 rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/6 right-1/2 w-3 h-12 bg-warm-200/35 dark:bg-warm-700/25 rounded-full animate-bounce" style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-sunny-300/40 dark:bg-sunny-600/30 rotate-45 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-2/3 left-1/6 w-8 h-8 bg-golden-300/30 dark:bg-golden-600/20 rotate-12 animate-bounce" style={{ animationDuration: '9s', animationDelay: '4s' }}></div>
      
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Hand-drawn doodle goes here</p>
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
