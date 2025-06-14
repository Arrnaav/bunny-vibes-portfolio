
import React from 'react';
import FloatingBunny from './FloatingBunny';

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <FloatingBunny />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 dark:bg-pink-800 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-40 animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform cursor-default">
              Padmakaar Khobragade
            </h1>
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🌟</div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            But you can call me{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-bold text-4xl animate-pulse">
              BUNNY
            </span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            (because my name is hard to pronounce)
          </p>
          
          {/* Placeholder for hand-drawn doodle */}
          <div className="my-12">
            <div className="w-48 h-48 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl border-4 border-pink-200 dark:border-purple-700 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
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
            <div className="hidden sm:block w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span className="animate-pulse">✨</span>
              <span>Pixel Perfectionist</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-purple-400 rounded-full"></div>
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
