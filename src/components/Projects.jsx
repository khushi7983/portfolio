import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Globe, ShoppingCart, ArrowUpRight } from 'lucide-react';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "GreenVue",
      desc: "A sustainable finance platform using React, AMFI API, Tailwind CSS, and MySql, providing real-time ESG insights and green investment opportunities.",
      link: "https://github.com/khushi7983/Solution-Wizard",
      live: "https://greenvest-h51q.onrender.com/",
      thumbnail: "/thumbnails/greenvue.png",
      tech: ["React", "MySQL", "AMFI API", "Tailwind"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-teal-600 to-emerald-600",
      category: "FinTech"
    },
    {
      title: "ElevatePrep",
      desc: "ElevatePrep is an innovative platform designed to help users master their interview skills through practice sessions, real-time feedback, and personalized coaching.",
      link: "https://github.com/khushi7983/amazon-React/tree/main/src",
      live: "https://elevateprep.netlify.app/",
      thumbnail: "/thumbnails/elevateprep.png",
      tech: ["React.js", "Tailwind", "JavaScript", "CSS"],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-teal-700 to-teal-500",
      category: "EdTech"
    },
    {
      title: "IMDB Clone",
      desc: "A full-featured IMDB clone built with Next.js and TMDB API, featuring movie discovery, lists, and details pages with a responsive Tailwind CSS layout.",
      link: "https://github.com/khushi7983/imdb-frontend",
      live: "https://imdb-clone-git-main-khushi-panwars-projects.vercel.app/",
      thumbnail: "/thumbnails/imdb.png",
      tech: ["Next.js", "TMDB API", "Tailwind", "React"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      category: "Entertainment"
    },
    ,
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative">

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative max-w-6xl">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="pt-20 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-200 mb-3">
            Crafted Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">

                {/* ---------- NEW: THUMBNAIL IMAGE ---------- */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-teal-600/80 text-teal-100 px-2 py-1 rounded-full text-xs font-medium border border-teal-400/30">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg text-teal-100 font-bold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700/80 text-teal-200 rounded-md text-xs border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg py-2 flex-1 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg py-2 flex-1 transition-all border border-gray-600 hover:border-teal-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
