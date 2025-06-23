// import React from 'react';

// function CertificationsAchievements() {
//   const certifications = [
//     {
//       title: 'AWS Certified Solutions Architect – Associate',
//       issuer: 'Amazon Web Services',
//       date: 'June 2024',
//       link: 'https://www.credly.com/badges/example', // Replace with your credential link
//     },
//     {
//       title: 'Full-Stack Web Development Bootcamp',
//       issuer: 'Udemy',
//       date: 'March 2023',
//       link: 'https://www.udemy.com/certificate/example', // Replace with your credential link
//     },
//   ];

//   const achievements = [
//     {
//       title: '1st Place, Tech Hackathon 2023',
//       description: 'Led a team to build a real-time chat app using React and Node.js.',
//       date: 'October 2023',
//     },
//     {
//       title: 'Open Source Contributor',
//       description: 'Contributed to 5+ GitHub repositories, including bug fixes and documentation.',
//       date: '2022–Present',
//     },
//   ];

//   return (
//     <section id="certifications-achievements" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-teal-400 text-center mb-12">
//           Certifications & Achievements
//         </h2>
        
//         {/* Certifications */}
//         <div className="mb-12">
//           <h3 className="text-2xl text-gray-300 font-semibold mb-6 text-center">
//             Certifications
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-gray-700"
//               >
//                 <h4 className="text-xl font-semibold text-teal-400 mb-2">
//                   {cert.title}
//                 </h4>
//                 <p className="text-gray-300 mb-1">Issuer: {cert.issuer}</p>
//                 <p className="text-gray-400 mb-2">Date: {cert.date}</p>
//                 {cert.link && (
//                   <a
//                     href={cert.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-400 hover:text-teal-300 transition"
//                   >
//                     View Credential
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Achievements */}
//         <div>
//           <h3 className="text-2xl text-gray-300 font-semibold mb-6 text-center">
//             Achievements
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-gray-700"
//               >
//                 <h4 className="text-xl font-semibold text-teal-400 mb-2">
//                   {achievement.title}
//                 </h4>
//                 <p className="text-gray-300 mb-2">{achievement.description}</p>
//                 <p className="text-gray-400">Date: {achievement.date}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CertificationsAchievements;