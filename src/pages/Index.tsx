
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
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-rose-50 via-coral-50 to-peach-50 dark:from-rose-900 dark:via-coral-900 dark:to-peach-800 relative overflow-hidden">
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
