
import React from 'react';

const BackgroundElements = () => {
  return (
    <>
      {/* Subtle pulsing and moving background elements */}
      <div className="absolute top-1/5 left-1/4 w-6 h-6 bg-rose-200/25 dark:bg-rose-700/15 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-coral-200/30 dark:bg-coral-700/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-peach-200/20 dark:bg-peach-700/10 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-3/4 w-5 h-5 bg-rose-300/25 dark:bg-rose-800/15 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-coral-300/30 dark:bg-coral-800/20 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/6 right-1/6 w-7 h-7 bg-peach-300/20 dark:bg-peach-800/10 rounded-full animate-bounce" style={{ animationDuration: '5.5s', animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/4 right-2/3 w-4 h-4 bg-rose-200/30 dark:bg-rose-700/20 rounded-full animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.8s' }}></div>
      <div className="absolute bottom-2/3 left-1/5 w-6 h-6 bg-coral-200/25 dark:bg-coral-700/15 rounded-full animate-bounce" style={{ animationDuration: '4.8s', animationDelay: '1.2s' }}></div>
    </>
  );
};

export default BackgroundElements;
