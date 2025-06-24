
import React from 'react';

const WorkPage = () => {
  const projects = [
    {
      title: "Broke Buddy",
      desc: "Your friendly neighborhood expense tracker that won't judge your latte addiction",
      tech: ["Figma", "Design Systems", "User Research"],
      bgColor: "from-sunny-100 to-golden-100 dark:from-sunny-900/30 dark:to-golden-900/30",
      status: "Live & Thriving"
    },
    {
      title: "Nivara",
      desc: "Meditation app that makes mindfulness less intimidating and more... chill",
      tech: ["UX Design", "Prototyping", "User Testing"],
      bgColor: "from-golden-100 to-warm-100 dark:from-golden-900/30 dark:to-warm-900/30",
      status: "In Progress"
    },
    {
      title: "Secret Project #3",
      desc: "Something amazing is brewing... can't spill the tea just yet ☕",
      tech: ["Coming Soon", "Top Secret", "Much Wow"],
      bgColor: "from-warm-100 to-sunny-100 dark:from-warm-900/30 dark:to-sunny-900/30",
      status: "Sketching Phase"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sunny-500 to-golden-600 bg-clip-text text-transparent mb-6">
            My Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Projects that made me lose sleep (but in a good way)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${project.bgColor} rounded-3xl p-8 shadow-xl`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <span className="bg-white dark:bg-gray-800 text-sunny-600 dark:text-sunny-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <div className="w-full bg-white dark:bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sunny-400 to-golden-500 h-2 rounded-full"
                      style={{ 
                        width: project.status === 'Live & Thriving' ? '100%' : 
                               project.status === 'In Progress' ? '70%' : '30%' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              More Projects Coming Soon! 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Currently brewing some exciting ideas. Stay tuned for more pixel magic!
            </p>
            <div className="flex justify-center space-x-2">
              <span>✨</span>
              <span>🎨</span>
              <span>💻</span>
              <span>🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
