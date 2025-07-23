import React, { useState, useEffect } from 'react';
import { FaCode, FaRocket, FaHeart, FaGithub, FaDownload } from 'react-icons/fa';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Web Developer', 'React Enthusiast', 'Problem Solver '];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const currentText = texts[textIndex];
      
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1KK5lUW3UspU2-iZjcNI_Apq6jDPeQLWY";
    link.download = "Khushi_Panwar_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="relative">
                <span className="text-2xl">👋</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="ml-3 text-lg text-gray-300 font-medium">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Khushi Panwar
            </h1>

            {/* Dynamic Title */}
            <div className="mb-8">
              <h2 className="text-2xl lg:text-4xl font-semibold text-gray-200 mb-2">
                Aspiring{' '}
                <span className="text-teal-400 border-r-2 border-teal-400 animate-pulse">
                  {displayText}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating beautiful, functional web experiences. I love turning ideas into reality through clean code and innovative design.
            </p>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => smoothScroll('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  Let's Connect
                </span>
              </button>

              <button
                onClick={() => smoothScroll('projects')}
                className="group px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                  View My Work
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main Card */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">portfolio.dev</span>
                </div>

                {/* Code Editor */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-4">1</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400 ml-2">developer</span>
                      <span className="text-gray-300 ml-2">=</span>
                      <span className="text-gray-300 ml-2">{'{'}</span>
                    </div>
                    
                    <div className="flex items-center ml-6">
                      <span className="text-gray-500 mr-4">2</span>
                      <span className="text-green-400">name:</span>
                      <span className="text-yellow-400 ml-2">'Khushi Panwar'</span>
                      <span className="text-gray-300">,</span>
                    </div>
                    
                    <div className="flex items-center ml-6">
                      <span className="text-gray-500 mr-4">3</span>
                      <span className="text-green-400">skills:</span>
                      <span className="text-gray-300 ml-2">['React', 'JS', 'CSS'],</span>
                    </div>
                    
                    <div className="flex items-center ml-6">
                      <span className="text-gray-500 mr-4">4</span>
                      <span className="text-green-400">passion:</span>
                      <span className="text-yellow-400 ml-2">'Building amazing UIs'</span>
                      <span className="text-gray-300">,</span>
                    </div>
                    
                    <div className="flex items-center ml-6">
                      <span className="text-gray-500 mr-4">5</span>
                      <span className="text-green-400">currentStatus:</span>
                      <span className="text-yellow-400 ml-2">'Available for work'</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-4">6</span>
                      <span className="text-gray-300">{'}'}</span>
                      <div className="ml-2 w-2 h-5 bg-teal-400 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Terminal */}
                  <div className="mt-8 p-4 bg-gray-900/80 rounded-lg border border-gray-700/30">
                    <div className="text-green-400 text-xs">
                      <div className="flex items-center mb-2">
                        <span className="text-teal-400">$</span>
                        <span className="ml-2">npm run dev</span>
                      </div>
                      <div className="text-gray-400">
                        ⚡ Portfolio running at localhost:3000
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-teal-400">$</span>
                        <div className="ml-2 w-2 h-4 bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-20 -right-6 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <FaCode className="text-teal-400" />
                </div>
                
                <div className="absolute bottom-32 -left-6 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <FaHeart className="text-purple-400 text-sm" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-teal-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;