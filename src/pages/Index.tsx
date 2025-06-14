
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import Homepage from '../components/Homepage';
import AboutPage from '../components/AboutPage';
import WorkPage from '../components/WorkPage';
import ContactPage from '../components/ContactPage';
import Navigation from '../components/Navigation';
import BackgroundElements from '../components/BackgroundElements';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-100/30 to-amber-100/30 dark:from-transparent dark:via-yellow-800/10 dark:to-amber-800/10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/20 via-transparent to-yellow-100/20 dark:from-orange-800/5 dark:via-transparent dark:to-yellow-800/5 animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        
        <BackgroundElements />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Index;
