// function Projects() {
//   const projects = [
//     {
//       title: "GreenVue",
//       desc: "A sustainable finance platform using React, AMFI API, Tailwind CSS, and MySql, providing real-time ESG insights and green investment opportunities.",
//       link: "https://github.com/khushi7983/Solution-Wizard",
//       image: "/path-to-greenvue-image.jpg", // Replace with actual image path
//     },
//     {
//       title: "IMDB Clone",
//       desc: "A full-featured IMDB clone built with Next.js and TMDB API, featuring movie discovery, lists, and details pages with a responsive Tailwind CSS layout.",
//       link: "https://github.com/khushi7983/imdb-frontend",
//       image: "/path-to-imdb-clone-image.jpg", // Replace with actual image path
//     },
//     {
//       title: "Amazon Frontend",
//       desc: "An e-commerce platform replicating Amazon's interface using React.js and Tailwind CSS, with a dynamic shopping cart and order processing system.",
//       link: "https://github.com/khushi7983/amazon-React/tree/main/src",
//       image: "/path-to-amazon-frontend-image.jpg", // Replace with actual image path
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800">
//       <div className="container mx-auto px-6 md:px-12 lg:px-24">
//         <h2 className="text-4xl md:text-5xl font-bold text-teal-100 text-center mb-12 animate-fade-in">
//           My Showcase Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform hover:bg-gray-700"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-teal-200 mb-4">{project.title}</h3>
//               <p className="text-gray-300 mb-6">{project.desc}</p>
//               <a
//                 href={project.link}
//                 className="inline-block px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
//               >
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Globe, ShoppingCart } from 'lucide-react';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "GreenVue",
      desc: "A sustainable finance platform using React, AMFI API, Tailwind CSS, and MySql, providing real-time ESG insights and green investment opportunities.",
      link: "https://github.com/khushi7983/Solution-Wizard",
      image: "/path-to-greenvue-image.jpg",
      tech: ["React", "MySQL", "AMFI API", "Tailwind"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-teal-600 to-emerald-600",
      category: "FinTech"
    },
    {
      title: "IMDB Clone",
      desc: "A full-featured IMDB clone built with Next.js and TMDB API, featuring movie discovery, lists, and details pages with a responsive Tailwind CSS layout.",
      link: "https://github.com/khushi7983/imdb-frontend",
      image: "/path-to-imdb-clone-image.jpg",
      tech: ["Next.js", "TMDB API", "Tailwind", "React"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      category: "Entertainment"
    },
    {
      title: "Amazon Frontend",
      desc: "An e-commerce platform replicating Amazon's interface using React.js and Tailwind CSS, with a dynamic shopping cart and order processing system.",
      link: "https://github.com/khushi7983/amazon-React/tree/main/src",
      image: "/path-to-amazon-frontend-image.jpg",
      tech: ["React.js", "Tailwind", "JavaScript", "CSS"],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-teal-700 to-teal-500",
      category: "E-Commerce"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-600/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-teal-400/30">
            <Code className="w-4 h-4 text-teal-300" />
            <span className="text-teal-200 text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-200 mb-4">
            Crafted Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Exploring the intersection of design and functionality through innovative web solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-teal-600/80 backdrop-blur-sm text-teal-100 px-3 py-1 rounded-full text-xs font-medium border border-teal-400/30">
                    {project.category}
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse`}
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-teal-100 mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/80 text-teal-200 rounded-full text-xs font-medium border border-gray-600 group-hover:bg-teal-600/20 group-hover:border-teal-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">Code</span>
                    </a>
                    {/* <button className="flex items-center gap-2 px-4 py-2 bg-gray-700/80 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-teal-400/50">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Demo</span>
                    </button> */}
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  <div className={`absolute bottom-0 right-0 h-1 bg-gradient-to-l ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-100`} />
                </div>
              </div>

              {/* Index Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-500/25 transform group-hover:scale-110 transition-transform duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-teal-200 hover:text-teal-100 transition-colors cursor-pointer group">
            <span className="text-lg font-medium">Want to see more projects?</span>
            <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;