import React, { useState, useEffect } from 'react';
import { Code, Award, Briefcase, MapPin, User, Zap, Target, Star, Trophy, ChevronRight, GraduationCap, Heart } from 'lucide-react';

function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [skillsAnimation, setSkillsAnimation] = useState(false);

  const skills = [
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 88, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 92, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "Figma", level: 85, category: "design" }
  ];

  const achievements = [
    { title: "HackFinance 2025", subtitle: "Top 30 - IIT Delhi", icon: <Trophy className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
    { title: "Code Hive 2025", subtitle: "Top 20 Finalist", icon: <Award className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { title: "ReactJS Certified", subtitle: "Infosys Springboard", icon: <Star className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { title: "Generative AI", subtitle: "Infosys Springboard", icon: <Zap className="w-5 h-5" />, color: "from-green-500 to-teal-500" }
  ];

  const tabs = [
    { id: 'story', label: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> }
  ];

  useEffect(() => {
    if (activeTab === 'skills') {
      setTimeout(() => setSkillsAnimation(true), 200);
    } else {
      setSkillsAnimation(false);
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-teal-100 mb-3">Hello, I'm Khushi Panwar</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A passionate B.Tech student in Computer Science and Engineering (Data Science) at Ajay Kumar Garg Engineering College. 
                  Born and raised in Ghaziabad, I discovered my love for technology at the age of 15 when I built my first website.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-teal-100 mb-3">Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To craft fast, accessible, and visually stunning web experiences. I believe in blending creativity with functionality 
                  to create solutions that make a real impact, like my Sustainable Finance Platform and PropVista.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-teal-100 mb-3">Experience</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  I interned as a Web Developer at Indux Solar, honing my skills in React, Next.js, and Tailwind CSS. I'm a quick learner, 
                  thrive in team settings, and love playing badminton to stay focused. I'm eager to contribute to a dynamic team and grow professionally.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  <strong className="text-teal-200">Achievements:</strong> Ranked Top 30 at HackFinance 2025 (IIT Delhi) and Top 20 at Code Hive 2025; 
                  earned certifications in ReactJS and Generative AI from Infosys Springboard.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-teal-600/20 px-6 py-3 rounded-full backdrop-blur-sm border border-teal-400/30 hover:bg-teal-600/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-teal-300" />
                <span className="text-teal-100 font-medium">Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-600/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-400/30 hover:bg-purple-600/30 transition-all duration-300">
                <Heart className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100 font-medium">Badminton Enthusiast</span>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8 animate-fade-in">
            {['frontend', 'backend', 'design'].map((category) => (
              <div key={category} className="space-y-6">
                <h4 className="text-2xl font-bold text-teal-100 capitalize flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${
                    category === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
                    category === 'backend' ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  } shadow-lg`}></div>
                  {category} {category === 'frontend' ? 'Development' : category === 'backend' ? 'Development' : 'Tools'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div key={index} className="space-y-3 p-6 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                        <span className="text-teal-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${
                            category === 'frontend' ? 'from-blue-500 to-cyan-500' : 
                            category === 'backend' ? 'from-green-500 to-teal-500' : 'from-purple-500 to-pink-500'
                          } rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ 
                            width: skillsAnimation ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-teal-600/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-teal-400/30 hover:bg-teal-600/30 transition-all duration-300">
            <User className="w-5 h-5 text-teal-300" />
            <span className="text-teal-200 font-semibold">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-cyan-200 to-teal-100 mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with creativity, precision, and a touch of innovation
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-xl shadow-teal-500/25 scale-105'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-teal-200 border border-gray-700/50 hover:border-teal-400/50 hover:scale-105'
                } backdrop-blur-sm`}
              >
                {tab.icon}
                <span className="text-lg">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-gray-700/50 min-h-[600px] shadow-2xl">
            {renderContent()}
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { number: '3+', label: 'Years Coding', icon: <Code className="w-8 h-8" /> },
            { number: '10+', label: 'Projects Built', icon: <Briefcase className="w-8 h-8" /> },
            { number: '4+', label: 'Certifications', icon: <Award className="w-8 h-8" /> },
            { number: '2+', label: 'Hackathon Wins', icon: <Trophy className="w-8 h-8" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-xl shadow-teal-500/25 group-hover:shadow-teal-500/40">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-teal-100 mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default About;