import { useContext } from 'react';
import { ThemeContext } from '../App';

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-teal-400 hover:text-teal-300 transition pl-4">
          Khushi Panwar
        </a>
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-300 hover:text-teal-400 transition">Home</a>
          <a href="#about" className="text-gray-300 hover:text-teal-400 transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-teal-400 transition">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-teal-400 transition">Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://github.com/khushi7983" className="text-gray-300 hover:text-teal-400 transition transform hover:scale-110" title="GitHub">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.46.5.09.68-.22.68-.48v-1.77c-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.94.67 1.89v2.8c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/khushi-panwar-139323256/" className="text-gray-300 hover:text-teal-400 transition transform hover:scale-110" title="LinkedIn">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 p-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.99 18H6.99V9.99h2v8.01zM7.99 8.99c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm10.01 9.01h-2V13.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.36v4.59h-2V9.99h1.92v1.09h.03c.27-.51.92-1.05 1.89-1.05 2.02 0 2.39 1.33 2.39 3.06v5.91z"/>
                </svg>
              </span>
            </a>
           <a
  href="https://drive.google.com/uc?export=download&id=1KK5lUW3UspU2-iZjcNI_Apq6jDPeQLWY"
  download
  className="text-gray-300 hover:text-teal-400 transition transform hover:scale-110"
  title="Download Resume"
>
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 p-2">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm8 3V4l4 4h-4z"/>
    </svg>
  </span>
</a>
          </div>
          <button className="md:hidden text-3.2-3 text-gray-3.00 hover:text-teal-3.400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="M4 6 h16M4 12 h16m-7 6 h7 m"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;