import React from 'react';

function Hero() {
  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="pt-30 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-lg sm:text-xl text-teal-300 mb-4">Hey, I'm Khushi! 👩‍💻</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-200 mb-6 leading-tight">
            Aspiring Web Developer
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
            I'm a student honing my skills in web development, building innovative projects to solve real-world challenges and showcase my growth to potential employers.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }}
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300 text-base sm:text-lg"
              aria-label="Get in touch with Khushi"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }}
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors duration-300 text-base sm:text-lg"
              aria-label="Browse Khushi's projects"
            >
              Browse Projects
            </a>
          </div>
        </div>
        
        {/* Animated Coding Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
            {/* Main Monitor */}
            <div className="absolute inset-0 bg-gray-800 rounded-lg border-4 border-teal-400 p-4 sm:p-6 shadow-2xl">
              {/* Monitor Screen */}
              <div className="w-full h-full bg-gray-900 rounded p-3 sm:p-4 relative overflow-hidden">
                {/* Code Lines with Animation */}
                <div className="space-y-1 sm:space-y-2 font-mono text-xs sm:text-sm">
                  <div className="flex items-center">
                    <span className="text-teal-400">&lt;</span>
                    <span className="text-purple-400">div</span>
                    <span className="text-teal-400">&gt;</span>
                    <div className="ml-2 w-2 h-4 bg-teal-400 animate-pulse"></div>
                  </div>
                  <div className="ml-4 text-gray-400">Hello World!</div>
                  <div className="flex items-center">
                    <span className="text-teal-400">&lt;/</span>
                    <span className="text-purple-400">div</span>
                    <span className="text-teal-400">&gt;</span>
                  </div>
                  <div className="mt-4 space-y-1 hidden sm:block">
                    <div className="h-2 bg-teal-600 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-2 bg-purple-600 rounded w-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="h-2 bg-teal-600 rounded w-2/3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
                
                {/* Floating Code Particles (Reduced on Mobile) */}
                <div className="absolute top-2 right-2 text-teal-300 text-xs opacity-70 animate-bounce hidden sm:block" style={{ animationDelay: '0.5s' }}>
                  { }
                </div>
                <div className="absolute bottom-4 right-6 text-purple-300 text-xs opacity-70 animate-bounce hidden sm:block" style={{ animationDelay: '1s' }}>
                  &lt;/&gt;
                </div>
                <div className="absolute top-1/2 right-4 text-teal-300 text-xs opacity-70 animate-bounce hidden sm:block" style={{ animationDelay: '1.5s' }}>
                  {}
                </div>
              </div>
            </div>
            
            {/* Floating Elements (Reduced on Mobile) */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-ping opacity-20 hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full animate-pulse opacity-30 hidden sm:block"></div>
            <div className="absolute top-10 -left-8 w-6 h-6 bg-teal-300 rounded-full animate-bounce opacity-40 hidden sm:block" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Orbiting Elements (Simplified on Mobile) */}
            <div className="absolute inset-0 animate-spin hidden sm:block" style={{ animationDuration: '20s' }}>
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute inset-0 animate-spin sm:hidden" style={{ animationDuration: '15s' }}>
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;