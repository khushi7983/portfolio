import React from 'react';
import { Trophy, Award, Star, Zap } from 'lucide-react';
import NavBar from './NavBar';

function Achievements() {
  return (
    <div>
      <NavBar />
      <section id="achievements" className="h-screen flex items-center bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-teal-500/20 px-5 py-2 rounded-lg mb-4 backdrop-blur-sm border border-teal-400/20 hover:bg-teal-500/30 transition-all duration-300">
              <Trophy className="w-5 h-5 text-teal-300" />
              <span className="text-teal-200 font-medium">My Milestones</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-200 mb-4">
              Achievements
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              Key milestones from my journey in tech and beyond
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {[
                { title: "HackFinance 2025", subtitle: "Top 30 among 500+ participants - IIT Delhi", icon: <Trophy className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
                { title: "Code Hive 2025", subtitle: "Top 20 Finalist in national hackathon", icon: <Award className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "ReactJS Certified", subtitle: "Completed Infosys Springboard course", icon: <Star className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Generative AI", subtitle: "Certified by Infosys Springboard", icon: <Zap className="w-6 h-6" />, color: "from-green-500 to-teal-500" }
              ].map((achievement, index) => (
                <div key={index} className="group">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 hover:scale-105">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-3 shadow-md`}>
                      {achievement.icon}
                    </div>
                    <h3 className="text-base font-semibold text-teal-100 mb-1">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm">{achievement.subtitle}</p>
                  </div>
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