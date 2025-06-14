
import React from 'react';

const BackgroundElements = () => {
  return (
    <>
      {/* Subtle pulsing and moving background elements using happy colors */}
      <div className="absolute top-1/5 left-1/4 w-6 h-6 bg-sunny-200/25 dark:bg-sunny-700/15 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-golden-200/30 dark:bg-golden-700/20 rounded-full animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-warm-200/20 dark:bg-warm-700/10 rounded-full animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-3/4 w-5 h-5 bg-sunny-300/25 dark:bg-sunny-800/15 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-golden-300/30 dark:bg-golden-800/20 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/6 right-1/6 w-7 h-7 bg-warm-300/20 dark:bg-warm-800/10 rounded-full animate-bounce" style={{ animationDuration: '8.5s', animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/4 right-2/3 w-4 h-4 bg-sunny-200/30 dark:bg-sunny-700/20 rounded-full animate-pulse" style={{ animationDuration: '6.2s', animationDelay: '0.8s' }}></div>
      <div className="absolute bottom-2/3 left-1/5 w-6 h-6 bg-golden-200/25 dark:bg-golden-700/15 rounded-full animate-bounce" style={{ animationDuration: '7.8s', animationDelay: '1.2s' }}></div>
    </>
  );
};

export default BackgroundElements;
