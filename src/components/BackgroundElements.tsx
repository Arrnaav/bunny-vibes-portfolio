
import React from 'react';

const BackgroundElements = () => {
  return (
    <>
      {/* Subtle pulsing and moving background elements spread across entire screen */}
      <div className="absolute top-[10%] left-[5%] w-6 h-6 bg-sunny-200/20 dark:bg-sunny-700/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[15%] right-[8%] w-4 h-4 bg-golden-200/25 dark:bg-golden-700/15 rounded-full animate-bounce" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      <div className="absolute top-[25%] left-[2%] w-8 h-8 bg-warm-200/15 dark:bg-warm-700/8 rounded-full animate-pulse" style={{ animationDuration: '14s', animationDelay: '4s' }}></div>
      <div className="absolute bottom-[30%] right-[3%] w-5 h-5 bg-sunny-300/20 dark:bg-sunny-800/12 rounded-full animate-bounce" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute top-[60%] right-[12%] w-3 h-3 bg-golden-300/25 dark:bg-golden-800/15 rounded-full animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
      <div className="absolute bottom-[8%] left-[15%] w-7 h-7 bg-warm-300/15 dark:bg-warm-800/8 rounded-full animate-bounce" style={{ animationDuration: '13s', animationDelay: '5s' }}></div>
      <div className="absolute top-[15%] right-[25%] w-4 h-4 bg-sunny-200/25 dark:bg-sunny-700/15 rounded-full animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-[50%] left-[8%] w-6 h-6 bg-golden-200/20 dark:bg-golden-700/12 rounded-full animate-bounce" style={{ animationDuration: '15s', animationDelay: '2.5s' }}></div>
      
      {/* Additional elements for full coverage */}
      <div className="absolute top-[40%] left-[85%] w-5 h-5 bg-sunny-300/18 dark:bg-sunny-800/10 rounded-full animate-pulse" style={{ animationDuration: '16s', animationDelay: '6s' }}></div>
      <div className="absolute bottom-[70%] right-[90%] w-4 h-4 bg-golden-300/22 dark:bg-golden-800/14 rounded-full animate-bounce" style={{ animationDuration: '12s', animationDelay: '3.5s' }}></div>
      <div className="absolute top-[80%] left-[70%] w-6 h-6 bg-warm-200/18 dark:bg-warm-700/10 rounded-full animate-pulse" style={{ animationDuration: '13s', animationDelay: '7s' }}></div>
      <div className="absolute bottom-[85%] right-[60%] w-3 h-3 bg-sunny-400/20 dark:bg-sunny-900/12 rounded-full animate-bounce" style={{ animationDuration: '14s', animationDelay: '4.5s' }}></div>
      <div className="absolute top-[5%] left-[40%] w-8 h-8 bg-golden-200/15 dark:bg-golden-700/8 rounded-full animate-pulse" style={{ animationDuration: '18s', animationDelay: '8s' }}></div>
      <div className="absolute bottom-[5%] right-[40%] w-5 h-5 bg-warm-300/18 dark:bg-warm-800/10 rounded-full animate-bounce" style={{ animationDuration: '11s', animationDelay: '6.5s' }}></div>
      <div className="absolute top-[50%] left-[95%] w-4 h-4 bg-sunny-200/22 dark:bg-sunny-700/14 rounded-full animate-pulse" style={{ animationDuration: '17s', animationDelay: '9s' }}></div>
      <div className="absolute bottom-[25%] left-[30%] w-7 h-7 bg-golden-300/18 dark:bg-golden-800/10 rounded-full animate-bounce" style={{ animationDuration: '16s', animationDelay: '5.5s' }}></div>
    </>
  );
};

export default BackgroundElements;
