import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

// Pages
import About from './pages/about/About.jsx';
import Skills from './pages/skills/Skills.jsx';
import Experience from './pages/experience/Experience.jsx';
import Research from './pages/research/Research.jsx';
import Projects from './pages/projects/Projects.jsx';
import Contact from './pages/contact/Contact.jsx';


export default function App() {

  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {

    const handleScroll = () => {

      // Navbar scroll effect
      setScrolled(window.scrollY > 50);


      // Active section detection
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'research',
        'projects',
        'contact'
      ];


      const scrollPosition = window.scrollY + 200;


      for (const sectionId of sections) {

        const section = document.getElementById(sectionId);


        if (section) {

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;


          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {

            setActiveSection(sectionId);
            break;

          }
        }
      }

    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);



  const handleNavLinkClick = (e, sectionId) => {

    e.preventDefault();


    const target = document.getElementById(sectionId);


    if (target) {

      window.scrollTo({

        top: target.offsetTop - 80,

        behavior: 'smooth'

      });

    }


    setNavActive(false);

  };



  return (

    <div className="page-container">

      <Navbar
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
        scrolled={scrolled}
        navActive={navActive}
        setNavActive={setNavActive}
      />


      <Hero
        onNavLinkClick={handleNavLinkClick}
      />


      <About />

      <Skills />

      <Experience />

      <Research />

      <Projects />

      <Contact />

      <Footer />

    </div>

  );
}