import React from 'react';
import './About.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.jsx';
import aboutBg from "../../assets/images/about.png";

export default function About() {
  const [aboutRef, aboutInView] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="about"
      className={`about ${aboutInView ? "show" : ""}`}
      ref={aboutRef}
      style={{
        backgroundImage: `linear-gradient(rgba(5,5,5,.8),rgba(5,5,5,.9)), url(${aboutBg})`
      }}
    >
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-img-container">
          <div className="about-img-frame"></div>
          <div className="about-img-inner">
            <img src="/images/IMG_0473.JPG" alt="Geethma Yasashwi" />
          </div>
        </div>

        <div className="about-text">
          <p>
            Final-year Computer Engineering undergraduate at the University of Jaffna with a CGPA of 3.70.
            Passionate about building scalable web applications and AI solutions.
            Seeking opportunities to contribute to innovative projects while expanding my skills.
          </p>

          <div className="education">
            <h3>
              <i className="fas fa-graduation-cap"></i> Education
            </h3>

            <ul>
              <li>
                <strong>BSc. Computer Engineering</strong>
                <span>University of Jaffna (2022-Present, CGPA: 3.70)</span>
              </li>

              <li>
                <strong>GCE A/L Examination</strong>
                <span>A, B, C grades in Mathematics, Chemistry, and Physics</span>
              </li>

              <li>
                <strong>GCE O/L Examination</strong>
                <span>9 A grades</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}