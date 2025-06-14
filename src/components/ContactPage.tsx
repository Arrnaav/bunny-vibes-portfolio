
import React from 'react';

const ContactPage = () => {
  const contactLinks = [
    {
      platform: "WhatsApp",
      icon: "📞",
      url: "https://wa.me/917083245713",
      description: "Quick chat? I'm usually online!",
      color: "from-sunny-400 to-golden-500"
    },
    {
      platform: "Email",
      icon: "📧",
      url: "mailto:padmakaar.work@gmail.com",
      description: "For the formal stuff",
      color: "from-golden-400 to-warm-500"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/padmakaarwork",
      description: "Let's connect professionally",
      color: "from-warm-400 to-sunny-500"
    },
    {
      platform: "Resume",
      icon: "📄",
      url: "#",
      description: "All the boring details",
      color: "from-sunny-500 to-golden-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sunny-500 to-golden-600 bg-clip-text text-transparent mb-6">
            Let's Vibe
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Slide into my inbox or DMs. I promise I won't ghost. 👻
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl block"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-4 bg-gradient-to-r ${link.color} rounded-2xl text-2xl`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {link.platform}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
              </div>
              <div className={`w-full h-1 bg-gradient-to-r ${link.color} rounded-full`}></div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-sunny-100 to-golden-100 dark:from-sunny-900/30 dark:to-golden-900/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Let's Create Something Amazing Together! ✨
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether it's a quick chat about design, a collaboration opportunity, or just to say hi - I'm all ears! 🐰
            </p>
            <div className="flex justify-center items-center space-x-2">
              <span>💌</span>
              <span className="text-gray-700 dark:text-gray-300">Response time: Usually within 24 hours</span>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            "Made with love, Figma, and one too many Ctrl+Zs."
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <span>🐰</span>
            <span>💖</span>
            <span>✨</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
