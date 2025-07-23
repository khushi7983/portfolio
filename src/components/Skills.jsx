import React, { useState, useEffect } from 'react';
import { Code, Palette, Wrench } from 'lucide-react';

function Skills() {
  const [skillsAnimation, setSkillsAnimation] = useState(false);
  const [activeCategory, setActiveCategory] = useState('language');

  const skills = [
    { name: "Java", level: 85, category: "language" },
    { name: "JavaScript", level: 88, category: "language" },
    { name: "C", level: 80, category: "language" },
    { name: "SQL", level: 75, category: "language" },
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 92, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "Git", level: 90, category: "tool" },
    { name: "GitHub", level: 90, category: "tool" },
    { name: "Postman", level: 80, category: "tool" },
    { name: "Docker", level: 70, category: "tool" },
    { name: "DSA", level: 80, category: "concept" },
    { name: "OOPS", level: 85, category: "concept" },
    { name: "DBMS", level: 75, category: "concept" },
  ];

  const categories = [
    { id: 'language', label: 'Languages', icon: Code },
    { id: 'development', label: 'Development', icon: Palette },
    { id: 'tools-concepts', label: 'Tools & Concepts', icon: Wrench },
  ];

  const getCategoryGradient = (category) => {
    if (category === 'language') return 'from-blue-500 to-cyan-500';
    if (['frontend', 'backend'].includes(category)) return 'from-teal-500 to-cyan-500';
    return 'from-orange-500 to-yellow-500';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setSkillsAnimation(true), 200);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const getFilteredSkills = () => {
    let filteredSkills = skills.filter((skill) => {
      if (activeCategory === 'development') return ['frontend', 'backend'].includes(skill.category);
      if (activeCategory === 'tools-concepts') return ['tool', 'concept'].includes(skill.category);
      return skill.category === activeCategory;
    });
    return filteredSkills.sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 sm:w-48 h-40 sm:h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-200 mb-4">Skills & Technologies</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto sm:justify-center gap-2 sm:gap-4 mb-10 pb-2 sm:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-teal-500/20 text-teal-200 border-teal-400/50 shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-teal-500/10 hover:text-teal-300'
              } border border-gray-700/30 hover:border-teal-400/30 backdrop-blur-sm`}
              aria-label={`View ${category.label} skills`}
            >
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Exactly 2 Columns */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 backdrop-blur-sm hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 h-full"
                  aria-label={`${skill.name} skill in ${activeCategory}`}
                >
                  <span className="text-teal-100 font-semibold text-sm sm:text-base mb-2 block">{skill.name}</span>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getCategoryGradient(skill.category)} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: skillsAnimation ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-teal-200 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {skill.name} ({skill.category})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .transition-all {
            animation: none !important;
            transition: none !important;
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default Skills;