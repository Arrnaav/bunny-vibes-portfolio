
import React from 'react';
import FloatingBunny from './FloatingBunny';

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <FloatingBunny />
      
      {/* Slow moving background elements - more subtle and warm toned */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 dark:bg-orange-800 rounded-full opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-200 dark:bg-amber-800 rounded-full opacity-25" style={{ animation: 'bounce 6s infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-200 dark:bg-red-800 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-12 h-12 bg-orange-300 dark:bg-orange-700 rounded-full opacity-30" style={{ animation: 'bounce 8s infinite', animationDelay: '1s' }}></div>
      <div className="absolute top-16 right-1/3 w-28 h-28 bg-amber-300 dark:bg-amber-700 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '4s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-14 h-14 bg-yellow-300 dark:bg-yellow-700 rounded-full opacity-25" style={{ animation: 'bounce 9s infinite', animationDelay: '2.5s' }}></div>
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <div className="relative group">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform cursor-default">
              Hi! I am Padmakaar Khobragade
            </h1>
            <div className="absolute -top-4 -right-4 text-4xl transition-transform group-hover:rotate-12 group-hover:scale-125" style={{ animation: 'bounce 3s infinite' }}>🌟</div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            But you can call me{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bold text-4xl animate-pulse" style={{ animationDuration: '2s' }}>
              BUNNY
            </span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            (because my name is hard to pronounce)
          </p>
          
          {/* Interactive hand-drawn doodle placeholder with hover effects */}
          <div className="my-12">
            <div className="w-48 h-48 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-xl border-4 border-orange-200 dark:border-red-700 flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:border-amber-300 dark:hover:border-orange-600">
              <div className="text-center group">
                <div className="text-6xl mb-2 transition-transform group-hover:scale-125 group-hover:rotate-6">🐰</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Hand-drawn doodle goes here</p>
              </div>
            </div>
          </div>
          
          {/* Interactive role badges with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 p-3 rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/20">
              <span style={{ animation: 'pulse 3s infinite' }}>🎨</span>
              <span className="font-medium">UX Designer</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
              <span style={{ animation: 'pulse 3.5s infinite', animationDelay: '0.5s' }}>✨</span>
              <span className="font-medium">Pixel Perfectionist</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 p-3 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/20">
              <span style={{ animation: 'pulse 4s infinite', animationDelay: '1s' }}>🚀</span>
              <span className="font-medium">Problem Solver</span>
            </div>
          </div>
          
          {/* Additional interactive floating text elements */}
          <div className="absolute top-1/4 left-8 hidden lg:block">
            <div className="text-orange-400 dark:text-orange-300 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-110 transform rotate-12 hover:rotate-6">
              <span className="text-sm font-medium">Design is fun! 🎉</span>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-8 hidden lg:block">
            <div className="text-red-400 dark:text-red-300 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-110 transform -rotate-12 hover:-rotate-6">
              <span className="text-sm font-medium">Pixels & Coffee ☕</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
