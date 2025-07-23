import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Combined scroll effect for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "achievements",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1KK5lUW3UspU2-iZjcNI_Apq6jDPeQLWY";
    link.download = "Khushi_Panwar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-700/50"
          : "bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm"
      } p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => smoothScroll("home")}
          className="group text-3xl font-bold text-teal-400 hover:text-teal-300 transition-all duration-300 pl-4 relative"
        >
          <span className="relative z-10">Khushi Panwar</span>
          <div className="absolute inset-0 bg-teal-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          <div className="absolute bottom-0 left-4 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-500"></div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScroll(item.id)}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                activeSection === item.id
                  ? "text-teal-400 bg-teal-400/10"
                  : "text-gray-300 hover:text-teal-400 hover:bg-gray-700/50"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <div
                className={`absolute inset-0 bg-teal-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  activeSection === item.id ? "scale-100" : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-teal-400 group-hover:w-3/4 transition-all duration-300 ${
                  activeSection === item.id ? "w-3/4" : ""
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Desktop Social Links & Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {/* GitHub Icon */}
            <a
              href="https://github.com/khushi7983"
              className="group relative p-2 text-teal-300  hover:scale-110 hover:rotate-12"
              aria-label="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-teal-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaGithub className="w-7 h-7 relative z-10" />
              {/* <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span> */}
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/khushi-panwar-139323256/"
              className="group relative p-2 text-teal-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaLinkedin className="w-7 h-7 relative z-10" />
              {/* <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span> */}
            </a>

            {/* Email Icon */}
            <a
              href="mailto:khushi.panwargzb@gmail.com"
              className="group relative p-2 text-teal-300 hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Send email"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaEnvelope className="w-7 h-7 relative z-10" />
              {/* <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Email</span> */}
            </a>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-600"></div>

            {/* Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25"
              aria-label="Download resume"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <FaFileDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              <span className="relative z-10 font-medium">Resume</span>
              {/* <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Download Resume</span> */}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 text-gray-300 hover:text-teal-400 focus:outline-none transition-all duration-300 transform hover:scale-110"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-800/95 backdrop-blur-lg mt-4 rounded-xl border border-gray-700/50 shadow-2xl">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => smoothScroll(item.id)}
              className={`group w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                activeSection === item.id
                  ? "text-teal-400 bg-teal-400/10 border-l-4 border-teal-400"
                  : "text-gray-300 hover:text-teal-400 hover:bg-gray-700/50"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-6 pt-6 border-t border-gray-700/50">
            <a
              href="https://github.com/khushi7983"
              className="group relative p-3 text-teal-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <div className="absolute inset-0 bg-teal-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaGithub className="w-6 h-6 relative z-10" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-panwar-139323256/"
              className="group relative p-3 text-teal-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaLinkedin className="w-6 h-6 relative z-10" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>

            <a
              href="mailto:khushi.panwargzb@gmail.com"
              className="group relative p-3 text-teal-300 hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Send email"
              onClick={closeMobileMenu}
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaEnvelope className="w-6 h-6 relative z-10" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>

            <button
              onClick={handleResumeDownload}
              className="group relative p-3 text-teal-300 hover:text-teal-200 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Download resume"
            >
              <div className="absolute inset-0 bg-teal-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <FaFileDownload className="w-6 h-6 relative z-10" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
