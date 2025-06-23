function Experience() {
  const experiences = [
    {
      title: "Internship",
      company: "Indux Solar",
      duration: "March 2025 – June 2025",
      location: "India",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS to support solar energy solutions.",
        "Collaborated with a team of developers to enhance user experience, optimizing load times by 20% through code refactoring.",
        "Designed and implemented UI components, ensuring accessibility compliance (WCAG 2.1) for diverse user needs.",
        "Integrated RESTful APIs to fetch real-time data, improving application functionality and user engagement.",
        "Participated in agile sprints, contributing to project planning and delivering milestones ahead of schedule.",
        "Assisted in debugging and resolving cross-browser compatibility issues, ensuring a seamless experience across platforms.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-200 text-center mb-12 animate-fade-in-down">
          My Experience
        </h2>
        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-l-4 border-teal-600"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-200 mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-400 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration} | {exp.location}</p>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-teal-700 text-white text-xs font-medium rounded-full">
                  Completed
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="transition-opacity hover:opacity-90">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
// import { useState } from "react";
// import { MapPin, Calendar, Building, CheckCircle, Code, Zap, Users, TrendingUp } from "lucide-react";

// function Experience() {
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   const experiences = [
//     {
//       title: "Internship",
//       company: "Indux Solar",
//       duration: "March 2025 – June 2025",
//       location: "India",
//       status: "Completed",
//       theme: "solar",
//       responsibilities: [
//         "Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS to support solar energy solutions.",
//         "Collaborated with a team of developers to enhance user experience, optimizing load times by 20% through code refactoring.",
//         "Designed and implemented UI components, ensuring accessibility compliance (WCAG 2.1) for diverse user needs.",
//         "Integrated RESTful APIs to fetch real-time data, improving application functionality and user engagement.",
//         "Participated in agile sprints, contributing to project planning and delivering milestones ahead of schedule.",
//         "Assisted in debugging and resolving cross-browser compatibility issues, ensuring a seamless experience across platforms.",
//       ],
//       skills: ["React.js", "Next.js", "Tailwind CSS", "RESTful APIs", "Agile"],
//       achievements: ["20% Performance Boost", "WCAG 2.1 Compliance", "Cross-browser Compatibility"]
//     },
//   ];

//   const iconMap = {
//     0: <Code className="w-5 h-5" />,
//     1: <Users className="w-5 h-5" />,
//     2: <CheckCircle className="w-5 h-5" />,
//     3: <Zap className="w-5 h-5" />,
//     4: <TrendingUp className="w-5 h-5" />,
//     5: <Building className="w-5 h-5" />
//   };

//   return (
//     <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-block p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-6 backdrop-blur-sm border border-white/10">
//             <Building className="w-8 h-8 text-purple-400" />
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
//             My Experience
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
//           <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
//             Building innovative solutions with cutting-edge technologies
//           </p>
//         </div>

//         {/* Experience Cards */}
//         <div className="grid grid-cols-1 gap-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="group relative"
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Main Card */}
//               <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
//                 {/* Animated Border Glow */}
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
//                 {/* Solar Energy Theme Background */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl"></div>
                
//                 <div className="relative z-10">
//                   {/* Header Section */}
//                   <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
//                           <Building className="w-6 h-6 text-white" />
//                         </div>
//                         <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                           {exp.title}
//                         </h3>
//                       </div>
                      
//                       <div className="space-y-2 mb-4">
//                         <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
//                         <div className="flex flex-wrap gap-4 text-sm text-gray-400">
//                           <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4 text-purple-400" />
//                             <span>{exp.duration}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-pink-400" />
//                             <span>{exp.location}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Status Badge */}
//                     <div className="mt-4 lg:mt-0">
//                       <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
//                         <CheckCircle className="w-4 h-4" />
//                         {exp.status}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="mb-8">
//                     <h4 className="text-lg font-semibold text-gray-300 mb-3">Technologies Used</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {exp.skills.map((skill, i) => (
//                         <span 
//                           key={i}
//                           className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30 hover:scale-105 transition-transform duration-200 cursor-default"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Achievements */}
//                   <div className="mb-8">
//                     <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Achievements</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                       {exp.achievements.map((achievement, i) => (
//                         <div 
//                           key={i}
//                           className="p-3 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20 text-center"
//                         >
//                           <div className="text-emerald-400 font-semibold text-sm">{achievement}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Responsibilities */}
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-300 mb-4">Key Responsibilities</h4>
//                     <div className="space-y-4">
//                       {exp.responsibilities.map((resp, i) => (
//                         <div 
//                           key={i}
//                           className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300 group/item"
//                         >
//                           <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover/item:scale-110 transition-transform duration-200">
//                             {iconMap[i] || <Code className="w-5 h-5" />}
//                           </div>
//                           <p className="text-gray-300 leading-relaxed flex-1 group-hover/item:text-white transition-colors duration-200">
//                             {resp}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
//               </div>

//               {/* Side Decoration */}
//               <div className="absolute -left-2 top-8 w-1 h-20 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:h-32 transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-block p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-white/10">
//             <p className="text-gray-300 text-lg mb-4">Ready to collaborate on your next project?</p>
//             <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold">
//               <Zap className="w-5 h-5" />
//               <span>Let's build something amazing together!</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;