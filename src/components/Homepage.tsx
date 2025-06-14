
import React from 'react';
import FloatingBunny from './FloatingBunny';

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <FloatingBunny />
      
      {/* Subtle animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-200/30 dark:bg-orange-700/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-amber-200/40 dark:bg-amber-700/25 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-1/2 left-1/5 w-4 h-4 bg-yellow-200/25 dark:bg-yellow-700/15 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-orange-300/35 dark:bg-orange-800/20 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/5 right-1/4 w-3 h-3 bg-amber-300/30 dark:bg-amber-800/20 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/2 right-1/5 w-2 h-2 bg-yellow-300/25 dark:bg-yellow-800/15 rounded-full animate-bounce delay-1200"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-orange-200/25 dark:bg-orange-700/15 rounded-full animate-pulse delay-800"></div>
      <div className="absolute top-1/3 right-2/3 w-2 h-2 bg-amber-200/30 dark:bg-amber-700/20 rounded-full animate-bounce delay-400"></div>
      <div className="absolute bottom-1/5 left-2/5 w-4 h-4 bg-yellow-200/20 dark:bg-yellow-700/10 rounded-full animate-pulse delay-600"></div>
      <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-orange-300/25 dark:bg-orange-800/15 rounded-full animate-bounce delay-900"></div>
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform cursor-default">
              Padmakaar Khobragade
            </h1>
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🌟</div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Hi! I'm{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-4xl animate-pulse">
              BUNNY
            </span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            (because my name is hard to pronounce)
          </p>
          
          {/* Placeholder for hand-drawn doodle */}
          <div className="my-12">
            <div className="w-48 h-48 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl border-4 border-orange-200 dark:border-amber-700 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-2">🐰</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hand-drawn doodle goes here</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse">🎨</span>
              <span>UX Designer</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse">✨</span>
              <span>Pixel Perfectionist</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse">🚀</span>
              <span>Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
