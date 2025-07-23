import React, { useState, useEffect } from "react";
import {
  User,
  Target,
  Briefcase,
  MapPin,
  Heart,
  GraduationCap,
  Award,
  Code,
  Zap,
  Globe,
  Star,
  Rocket,
  Coffee,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import image from "../assets/Khushi.jpg";

function About() {
  const [typedText, setTypedText] = useState("");
  return (
    <div>
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-teal-500/10 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/10 rounded-full blur-xl sm:blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-300 to-purple-300 mb-4">
              About Me
            </h2>

          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Personal Story */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Personal Journey */}
              <div className="bg-gray-800/60 rounded-xl p-6 md:p-8 border border-gray-700/30 backdrop-blur-sm shadow-xl hover:shadow-teal-500/20 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-teal-100 mb-2">
                      My Journey
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                  Hi, I'm{" "}
                  <span className="text-teal-300 font-semibold">
                    Khushi Panwar
                  </span>
                  , a passionate full-stack developer currently pursuing B.Tech
                  in Computer Science (Data Science) at Ajay Kumar Garg
                  Engineering College, Ghaziabad. My coding adventure began at
                  15 when I built my first website, igniting a lifelong passion
                  for creating digital solutions.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Today, I specialize in building modern web applications using
                  cutting-edge technologies like React.js, Next.js, and Node.js.
                  I'm particularly drawn to sustainable technology and fintech
                  solutions, as evidenced by my recent success at HackFinance
                  2025 where I ranked in the Top 30.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="bg-gray-800/60 rounded-xl p-6 md:p-8 border border-gray-700/30 backdrop-blur-sm shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-teal-100 mb-2">
                      Mission & Vision
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-300 text-base md:text-lg">
                      <span className="text-teal-300 font-semibold">
                        Design
                      </span>{" "}
                      fast, accessible, and impactful web solutions that solve
                      real-world challenges
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-300 text-base md:text-lg">
                      <span className="text-purple-300 font-semibold">
                        Bridge
                      </span>{" "}
                      the gap between creativity and technical expertise in
                      every project
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-gray-300 text-base md:text-lg">
                      <span className="text-cyan-300 font-semibold">
                        Contribute
                      </span>{" "}
                      to sustainable technology and green finance solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Facts */}
            <div className="space-y-6 md:space-y-8">
              {/* Education */}
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/30 backdrop-blur-sm shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-100">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm md:text-base font-medium">
                    B.Tech in Computer Science
                  </p>
                  <p className="text-gray-400 text-sm">
                    (Data Science Specialization)
                  </p>
                  <p className="text-gray-400 text-sm">AKGEC, Ghaziabad</p>
                  <p className="text-teal-300 text-sm font-medium">
                    2022 – 2026
                  </p>
                </div>
              </div>


              {/* Achievements Highlight */}
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/30 backdrop-blur-sm shadow-xl hover:shadow-yellow-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-100">
                    Recent Wins
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <p className="text-gray-300 text-sm md:text-base">
                      Top 30 - HackFinance 2025
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <p className="text-gray-300 text-sm md:text-base">
                      Top 20 - Code Hive 2025
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Among 1000+ participants
                  </p>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/30 backdrop-blur-sm shadow-xl hover:shadow-pink-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-100">
                    Beyond Code
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-pink-400" />
                    <p className="text-gray-300 text-sm md:text-base">
                      Badminton Enthusiast
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-pink-400" />
                    <p className="text-gray-300 text-sm md:text-base">
                      Tech Trend Explorer
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-pink-400" />
                    <p className="text-gray-300 text-sm md:text-base">
                      Coding Challenge Solver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Core Values */}
          <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-xl p-6 md:p-8 border border-gray-700/30 backdrop-blur-sm shadow-xl mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-center text-teal-100 mb-6 md:mb-8">
              Core Values & Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-teal-100 mb-2">
                  Clean Code
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  Writing maintainable, scalable, and efficient code that stands
                  the test of time
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-teal-100 mb-2">
                  User-Centric
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  Prioritizing accessibility, performance, and user experience
                  in every project
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-teal-100 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-300 text-sm md:text-base">
                  Always exploring new technologies and approaches to solve
                  complex problems
                </p>
              </div>
            </div>
          </div>


        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-pulse,
            .animate-fade-in {
              animation: none !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

export default About;