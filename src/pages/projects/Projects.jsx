import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import projectsBg from "../../assets/images/skills bg.png";

import healthHubImg from "../../assets/images/healthhub.png";
import linkUpImg from "../../assets/images/linkup.png";
import attendanceImg from "../../assets/images/attendancemng.png";
import mobiusImg from "../../assets/images/mobius.png";
import favolosaImg from "../../assets/images/favolosa.png";


const projects = [
  {
    id: 1,
    title: 'HealthHub',
    category: 'web',
    image: healthHubImg,
    description: 'A full-stack smart hospital management system that streamlines healthcare operations with role-based dashboards for Admin, Doctors, Patients, and Receptionists using React, Spring Boot, and MySQL.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/GeethmaYasashwi/HealthHub_Smart-Hospital'
  },
  {
    id: 2,
    title: 'LinkUp',
    category: 'real-time',
    image: linkUpImg,
    description: 'A real-time video conferencing application enabling peer-to-peer audio and video communication with live messaging using WebRTC, Socket.io, Node.js, and Express.js.',
    tech: ['WebRTC', 'Socket.io', 'Node.js'],
    github: 'https://github.com/GeethmaYasashwi/LinkUp'
  },
  {
    id: 3,
    title: 'Mobius - E-Commerce Website',
    category: 'web',
    image: mobiusImg,
    description: 'A full-stack e-commerce platform built with the MERN stack, featuring dynamic product management, shopping cart functionality, secure authentication, and cloud-based image storage.',
    tech: ['React', 'Shadcn UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/GeethmaYasashwi/Mobius-ecommerce-website'
  },
  {
    id: 4,
    title: 'Favolosa - E-Commerce Website',
    category: 'web',
    image: favolosaImg,
    description: 'A modern jewellery e-commerce platform providing a seamless shopping experience with product management, category-based browsing, cart, wishlist, secure payments, and cloud media storage.',
    tech: ['React', 'Shadcn UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/GeethmaYasashwi/Favolosa'
  },
  {
    id: 5,
    title: 'Attendance Management System',
    category: 'web',
    image: attendanceImg,
    description: 'A web-based student attendance management system that simplifies attendance tracking through centralized management of student records, course data, and attendance information.',
    tech: ['PHP', 'MariaDB', 'HTML', 'CSS'],
    github: 'https://github.com/GeethmaYasashwi/Attendance-Management-System'
  }
];


export default function Projects() {

  const [projectFilter, setProjectFilter] = useState('all');
  const [showProjects, setShowProjects] = useState(false);

  const projectsRef = useRef(null);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true);
        }
      },
      { threshold: 0.2 }
    );


    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }


    return () => {
      if (projectsRef.current) {
        observer.disconnect();
      }
    };

  }, []);



  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(
      project => project.category === projectFilter
    );


  const scrollProjects = (direction) => {
    const container = document.querySelector('.projects-slider');

    if (direction === 'left') {
      container.scrollLeft -= 380;
    }
    else {
      container.scrollLeft += 380;
    }

  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`projects ${showProjects ? 'show' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(5,5,5,.8),rgba(5,5,5,.9)),url(${projectsBg})`
      }}
    >
      <h2>Projects</h2>
      <div className="filter-buttons">
        {['all', 'web', 'ai', 'real-time'].map(filter => (
          <button
            key={filter}
            className={`filter-btn ${projectFilter === filter ? 'active' : ''}`}
            onClick={() => setProjectFilter(filter)}
          >
            {filter === 'all' ? 'All' :
              filter === 'web' ? 'Web Dev' :
                filter === 'ai' ? 'AI' : 'Real-Time'}
          </button>
        ))}
      </div>
      <div className="slider-wrapper">
        <button
          className="slider-btn left"
          onClick={() => scrollProjects('left')}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div
          className="projects-slider"
          key={projectFilter}
        >
          {filteredProjects.map(project => (
            <div
              className={`project-card ${showProjects ? 'show-card' : ''}`}
              key={project.id}
            >
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-card-header">
                <div className="project-icon">

                  {project.category === 'web' &&
                    <i className="fas fa-globe"></i>
                  }

                  {project.category === 'real-time' &&
                    <i className="fas fa-bolt"></i>
                  }

                  {project.category === 'ai' &&
                    <i className="fas fa-brain"></i>
                  }

                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, index) =>

                    <span key={index}>
                      {tech}
                    </span>

                  )}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  View on GitHub
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="slider-btn right"
          onClick={() => scrollProjects('right')}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );

}