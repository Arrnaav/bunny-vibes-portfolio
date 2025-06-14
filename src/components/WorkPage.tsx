
import React from 'react';

const WorkPage = () => {
  const projects = [
    {
      title: "Broke Buddy",
      subtitle: "Mobile App",
      description: "A student-focused budgeting app designed to help college students track, plan, and thrive financially.",
      keywords: ["student-first", "track, plan, thrive", "UI/UX for broke buddies everywhere"],
      date: "April 2024",
      color: "from-sunny-400 to-golden-500",
      bgColor: "from-sunny-50 to-golden-50 dark:from-sunny-900/20 dark:to-golden-900/20",
      icon: "💰",
      prototype: "#"
    },
    {
      title: "Nivara",
      subtitle: "VR for Mental Health",
      description: "A VR app built to help people with anxiety and depression through calming environments. Built during final year as a graduation project.",
      keywords: ["healing through design", "VR calm spaces", "serious UX for serious peace"],
      date: "2025",
      color: "from-golden-400 to-warm-500",
      bgColor: "from-golden-50 to-warm-50 dark:from-golden-900/20 dark:to-warm-900/20",
      icon: "🧘",
      prototype: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sunny-500 to-golden-600 bg-clip-text text-transparent mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Two projects that showcase my journey from student problems to serious solutions ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${project.bgColor} backdrop-blur rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-4xl group-hover:scale-125 transition-transform">
                    {project.icon}
                  </span>
                  <span className="text-sm bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>

                <div>
                  <h2 className={`text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.keywords.map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="bg-white/70 dark:bg-gray-800/70 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(project.prototype, '_blank')}
                  className={`w-full bg-gradient-to-r ${project.color} text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                >
                  View Interactive Prototype →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              More Projects Coming Soon! 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Currently brewing some exciting new ideas in my design lab...
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <div className="w-3 h-3 bg-sunny-400 rounded-full"></div>
              <div className="w-3 h-3 bg-golden-400 rounded-full"></div>
              <div className="w-3 h-3 bg-warm-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
