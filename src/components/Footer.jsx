import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
          {/* Tagline/Description */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-teal-200 mb-2">
              Khushi Panwar
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
              Crafting innovative web solutions with passion and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-teal-200 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-teal-300 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-teal-300 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-teal-300 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-teal-300 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-teal-200 mb-2">
              Connect
            </h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://github.com/khushi7983"
                className="text-teal-300 hover:text-teal-200 transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-panwar-139323256/"
                className="text-teal-300 hover:text-teal-200 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-teal-300 hover:text-teal-200 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700/50"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {currentYear} Khushi Panwar. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .transform,
          .transition {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;