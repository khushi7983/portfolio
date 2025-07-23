import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Globe, ShoppingCart, ArrowUpRight } from 'lucide-react';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "GreenVue",
      desc: "A sustainable finance platform using React, AMFI API, Tailwind CSS, and MySql, providing real-time ESG insights and green investment opportunities.",
      link: "https://github.com/khushi7983/Solution-Wizard",
      tech: ["React", "MySQL", "AMFI API", "Tailwind"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-teal-600 to-emerald-600",
      category: "FinTech"
    },
    {
      title: "IMDB Clone",
      desc: "A full-featured IMDB clone built with Next.js and TMDB API, featuring movie discovery, lists, and details pages with a responsive Tailwind CSS layout.",
      link: "https://github.com/khushi7983/imdb-frontend",
      tech: ["Next.js", "TMDB API", "Tailwind", "React"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      category: "Entertainment"
    },
    {
      title: "Amazon Frontend",
      desc: "An e-commerce platform replicating Amazon's interface using React.js and Tailwind CSS, with a dynamic shopping cart and order processing system.",
      link: "https://github.com/khushi7983/amazon-React/tree/main/src",
      tech: ["React.js", "Tailwind", "JavaScript", "CSS"],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-teal-700 to-teal-500",
      category: "E-Commerce"
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-200 mb-3">
            Crafted Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-10' : ''}`} />
                
                {/* Category Badge & Link Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex items-center gap-1 sm:gap-2">
                  <span className="bg-teal-600/80 backdrop-blur-sm text-teal-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium border border-teal-400/30">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600 group-hover:border-teal-400/50 transition-all duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400 group-hover:text-teal-300 transform transition-all duration-300" />
                  </a>
                </div>

                {/* Enhanced Image Section */}
                <div className="relative h-28 sm:h-40 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                      {React.cloneElement(project.icon, { className: "w-4 sm:w-6 h-4 sm:h-6" })}
                    </div>
                  </div>
                  
                  {/* Animated Particles */}
                  <div className="absolute inset-0 opacity-20 sm:opacity-30">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-400 rounded-full animate-pulse opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          left: `${20 + (i * 20)}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-5 relative">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-100 mb-1 sm:mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3 group-hover:text-gray-200 transition-colors leading-tight sm:leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1 sm:px-2 py-0.5 sm:py-1 bg-gray-700/80 text-teal-200 rounded-md text-xs sm:text-xs font-medium border border-gray-600 group-hover:bg-teal-600/20 group-hover:border-teal-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 text-xs sm:text-sm font-medium w-full justify-center"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>View Code</span>
                    <ExternalLink className="w-2 sm:w-3 h-2 sm:h-3 ml-0.5 sm:ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .transition-all,
          .group-hover\\:scale-110,
          .group-hover\\:translate-y-1 {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;