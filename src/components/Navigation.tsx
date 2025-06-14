
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'LORE' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: "Let's Vibe" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-sunny-200/50 dark:border-golden-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-sunny-500 to-golden-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          BUNNY ✨
        </Link>
        
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full transition-all hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-sunny-400 to-golden-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-sunny-100 dark:hover:bg-golden-900/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gradient-to-r from-sunny-400 to-golden-500 text-white hover:scale-110 transition-all shadow-lg hover:shadow-xl"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
