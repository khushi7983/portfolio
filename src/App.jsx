import { createContext, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Acheivements'
import Navbar from './components/Navbar';


export const ThemeContext = createContext();

function App() {
  // const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-charcoal text-softWhite' : 'bg-gray-100 text-gray-800';
  }, [theme]);

  return (
    <>
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      {/* <Services /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer /> 
    </ThemeContext.Provider>
    </>
  )
}

export default App
