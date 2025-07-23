import { useState } from "react";
import { MapPin, Calendar, Building, CheckCircle, Code, Zap, Users, TrendingUp, ChevronDown, ExternalLink } from "lucide-react";

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "The Finlit Project",
      duration: "June 2025 – September 2025",
      location: "Lucknow, India",
      status: "Ongoing",
      type: "Full-time Internship",
      companyType: "Financial Technology",
      responsibilities: [
        "Revamping The Fin Lit Project's digital platform by redeveloping Fin Lit Learn & Fin Lit Invest sections using React.js and Tailwind CSS.",
        "Building and integrating a Sustainable Investing page with an ESG mutual fund screening tool and responsive UI.",
        "Ensuring seamless cross-platform sync between the website and mobile app, while contributing to QA, bug fixes, and performance optimization.",
        "Creating a finance micro-course and contributing to technical documentation, GitHub workflows, and final project deployment.",
        "Migrating content architecture from WordPress to a modular React-based stack, improving SEO, performance, and mobile responsiveness."
      ],
      skills: ["React.js", "Tailwind CSS", "WordPress Migration", "ESG Integration", "Cross-platform Sync", "SEO Optimization"],
      achievements: [
        { metric: "100%", label: "Migration Success" },
        { metric: "40%", label: "SEO Improvement" },
        { metric: "2", label: "Platform Sync" }
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Indux Solar",
      duration: "March 2025 – June 2025",
      location: "Pune, India",
      status: "Completed",
      type: "Full-time Internship",
      companyType: "Clean Energy",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS to support solar energy solutions.",
        "Collaborated with a team of developers to enhance user experience, optimizing load times by 20% through code refactoring.",
        "Designed and implemented UI components, ensuring accessibility compliance (WCAG 2.1) for diverse user needs.",
        "Integrated RESTful APIs to fetch real-time data, improving application functionality and user engagement.",
        "Participated in agile sprints, contributing to project planning and delivering milestones ahead of schedule.",
        "Assisted in debugging and resolving cross-browser compatibility issues, ensuring a seamless experience across platforms.",
      ],
      skills: ["React.js", "Next.js", "Tailwind CSS", "RESTful APIs", "Agile", "WCAG 2.1"],
      achievements: [
        { metric: "20%", label: "Performance Boost" },
        { metric: "100%", label: "WCAG Compliance" },
        { metric: "5+", label: "Browsers Supported" }
      ]
    },
  ];

  const iconMap = {
    0: <Code className="w-4 sm:w-5 h-4 sm:h-5" />,
    1: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
    2: <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />,
    3: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
    4: <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />,
    5: <Building className="w-4 sm:w-5 h-4 sm:h-5" />
  };

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 sm:-top-40 -right-32 sm:-right-40 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 sm:-bottom-40 -left-32 sm:-left-40 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements (Reduced for Mobile) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-teal-400/40 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-2 sm:mb-4">
            Professional Experience
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-2 sm:mb-4"></div>
        </div>

        {/* Timeline Line (Hidden on Mobile) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-teal-500 to-emerald-500 h-full opacity-30"></div>

        {/* Experience Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline Dot (Hidden on Mobile) */}
              <div className="hidden md:block absolute top-6 sm:top-8 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full border-2 sm:border-4 border-gray-900 transform -translate-y-1 sm:-translate-y-2" 
                   style={{ 
                     [index % 2 === 0 ? 'right' : 'left']: '-1.5rem sm:-2.25rem'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl border border-teal-500/20 shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-teal-500/20 overflow-hidden ${hoveredCard === index ? 'border-teal-400/40' : ''}`}>
                
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-xl transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-teal-400/10 to-emerald-500/10 rounded-full blur-md sm:blur-xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="p-1 sm:p-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md sm:rounded-lg">
                          <Building className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-teal-200 group-hover:text-teal-100 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-sm text-teal-400 font-medium">{exp.type}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1 mb-2 sm:mb-4">
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-300">
                          <span className="font-semibold text-base sm:text-lg">{exp.company}</span>
                          <span className="px-1 sm:px-2 py-0.5 sm:py-1 bg-teal-600/30 text-teal-300 text-xs sm:text-xs rounded-full">
                            {exp.companyType}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-teal-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:mt-0 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-teal-600/30 to-emerald-600/30 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></div>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Achievement Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="text-center p-2 sm:p-3 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-lg border border-teal-500/20">
                        <div className="text-lg sm:text-2xl font-bold text-teal-300 mb-0.5 sm:mb-1">{achievement.metric}</div>
                        <div className="text-xs sm:text-xs text-gray-400">{achievement.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-300 mb-1 sm:mb-2">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-teal-600/30 to-emerald-600/30 text-teal-300 text-xs sm:text-xs font-medium rounded-full border border-teal-500/30 hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Responsibilities */}
                  <div>
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center justify-between w-full text-left mb-2 sm:mb-4 p-2 sm:p-3 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg hover:from-teal-600/20 hover:to-emerald-600/20 transition-all duration-300 border border-gray-600/30 hover:border-teal-500/30"
                      aria-label={`Toggle responsibilities for ${exp.title}`}
                    >
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-300">Key Responsibilities & Achievements</h4>
                      <ChevronDown className={`w-4 sm:w-5 h-4 sm:h-5 text-teal-400 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${expandedCard === index ? 'max-h-72 sm:max-h-96 opacity-100' : 'max-h-16 sm:max-h-20 opacity-70'}`}>
                      <div className="space-y-2 sm:space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <div 
                            key={i}
                            className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-lg border border-gray-600/20 hover:border-teal-500/30 transition-all duration-300 ${expandedCard !== index && i >= 2 ? 'opacity-50' : ''}`}
                          >
                            <div className="p-1 sm:p-1.5 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-md sm:rounded-lg mt-0.5">
                              {iconMap[i] || <Code className="w-3 sm:w-4 h-3 sm:h-4 text-teal-300" />}
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Accent */}
                <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 rounded-r-full group-hover:w-1 sm:group-hover:w-2 transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-bounce,
          .transition-all,
          .group-hover\\:-translate-y-1,
          .group-hover\\:-translate-y-2,
          .group-hover\\:scale-105 {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;