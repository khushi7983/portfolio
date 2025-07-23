import React from 'react';
import { Trophy, Award, Star, Code, Database, Layout } from 'lucide-react';
import NavBar from './NavBar';

function Achievements() {
  return (
    <div>
      <section id="achievements" className=" flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-200 mb-4 pb-6">
              Achievements & Certifications
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {[
                {
                  title: "Web Development Program",
                  subtitle: "ShadowFox, Apr 2025 - MERN Stack",
                  icon: <Code className="w-6 h-6" />,
                  color: "from-teal-500 to-cyan-500",
                  link: "#"
                },
                {
                  title: "Software Engineering Certification",
                  subtitle: "HackerRank, Jun 2025",
                  icon: <Star className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500",
                  link: "#"
                },
                {
                  title: "UI/UX Design Mastery",
                  subtitle: "Physics Wallah, Jul 2025 - Figma",
                  icon: <Layout className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500",
                  link: "#"
                },
                {
                  title: "React Certification",
                  subtitle: "Scaler, Sep 2024",
                  icon: <Code className="w-6 h-6" />,
                  color: "from-green-500 to-teal-500",
                  link: "#"
                },
                {
                  title: "Demystifying Generative AI",
                  subtitle: "Infosys Springboard, Jul 2024",
                  icon: <Star className="w-6 h-6" />,
                  color: "from-yellow-500 to-orange-500",
                  link: "#"
                },
                {
                  title: "Building APIs",
                  subtitle: "Geekster, Jan 2024",
                  icon: <Database className="w-6 h-6" />,
                  color: "from-teal-500 to-cyan-500",
                  link: "#"
                },
                {
                  title: "SQL and DATABASE Workshop",
                  subtitle: "Geekster, Jan 2024",
                  icon: <Database className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500",
                  link: "#"
                },
                {
                  title: "Code Hive India Hackathon",
                  subtitle: "Top 20, TRYST IIT Delhi, Mar 2025",
                  icon: <Trophy className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500",
                  link: "#"
                },
                {
                  title: "HackFinance Fintech Hackathon",
                  subtitle: "Top 30, ECell IIITD, Feb 2025",
                  icon: <Award className="w-6 h-6" />,
                  color: "from-green-500 to-teal-500",
                  link: "#"
                },
                {
                  title: "DSA Bootcamp",
                  subtitle: "Unstop, Mar 2025",
                  icon: <Award className="w-6 h-6" />,
                  color: "from-yellow-500 to-orange-500",
                  link: "#"
                }
              ].map((achievement, index) => (
                <div key={index} className="group">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-3 shadow-md`}>
                      {achievement.icon}
                    </div>
                    <h3 className="text-base font-semibold text-teal-100 mb-1">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm">{achievement.subtitle}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </section>
    </div>
  );
}

export default Achievements;