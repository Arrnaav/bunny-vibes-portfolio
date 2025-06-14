
import React from 'react';

const AboutPage = () => {
  const timeline = [
    {
      year: "2022",
      title: "Started B.Des in UX Design",
      desc: "Color palette hoarder since 2022",
      icon: "🎨"
    },
    {
      year: "2024",
      title: "Built Broke Buddy",
      desc: "Survived 72 hours without sleep during design reviews",
      icon: "💰"
    },
    {
      year: "2025",
      title: "Created Nivara",
      desc: "Gives personality to rectangles for a living",
      icon: "🧘"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sunny-500 to-golden-600 bg-clip-text text-transparent mb-6">
            LORE
          </h1>
          <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              UX Designer by degree. Bunny by reputation. I design pixels that feel right. 
              <span className="block mt-4 text-lg">
                Minimalist in my Figma files, maximalist in my playlists.
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            My Journey So Far ✨
          </h2>
          
          {timeline.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-gradient-to-r from-sunny-400 to-golden-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{item.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sunny-100 to-golden-100 dark:from-sunny-900/30 dark:to-golden-900/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Fun Facts About Me 🐰
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <span className="text-2xl">🎵</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Creates design systems while jamming to K-pop</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <span className="text-2xl">☕</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Fueled by chai and creative chaos</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <span className="text-2xl">🎯</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Believes every pixel has a purpose</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
                <span className="text-2xl">🌙</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Night owl who dreams in wireframes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
