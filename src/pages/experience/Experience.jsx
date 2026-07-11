import React,{useEffect,useRef,useState} from 'react';
import './Experience.css';

import amplazLogo from "../../assets/images/amplaz logo.png";

export default function Experience(){

  const [showExperience,setShowExperience]=useState(false);
  const experienceRef=useRef(null);

  useEffect(()=>{
    const observer=new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting)setShowExperience(true);
      },
      {threshold:.2}
    );

    if(experienceRef.current)observer.observe(experienceRef.current);

    return()=>observer.disconnect();
  },[]);


  const technicalSkills=[
    "Flutter","React","GraphQL","AWS CDK",
    "AWS SQS","Amazon S3","DynamoDB",
    "Algolia","Cloud Infrastructure",
    "API Integration","State Management",
    "Backend Workflows"
  ];

  const professionalSkills=[
    "Team Collaboration",
    "Cross-functional Communication",
    "Problem Solving",
    "Time Management",
    "Punctuality",
    "Agile Development",
    "Adaptability",
    "Professional Communication"
  ];


  return(
    <section
      id="experience"
      ref={experienceRef}
      className={`experience ${showExperience?'show':''}`}
    >
      <div className="experience-video">
        <video autoPlay loop muted playsInline>
          <source src="/video/moon exp.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className="experience-overlay"></div>
      <h2>Experience</h2>
      <div className="experience-card">
        <div className="company-header">

          <img
            src={amplazLogo}
            alt="Amplaz Logo"
            className="company-logo"
          />

          <div>
            <h3>Amplaz (Pvt) Ltd</h3>
            <p className="role">Software Engineering Intern</p>
            <p className="duration">
              November 2025 - May 2026 | Sri Lanka
            </p>
          </div>

        </div>


        <div className="experience-content">
          <div className="experience-section">

            <h4>
              <i className="fas fa-code"></i>
              Technical Experience
            </h4>

            <p>
              Gained practical experience in developing scalable
              web and mobile applications using modern frontend,
              backend, API, and cloud technologies. Worked on
              frontend development, backend integrations, GraphQL
              services, and cloud-based infrastructure.
            </p>

            <p>
              Developed understanding of AWS cloud services,
              asynchronous workflows, database management,
              and scalable system architecture through real-world
              software engineering practices.
            </p>

          </div>
          <div className="experience-section">

            <h4>
              <i className="fas fa-laptop-code"></i>
              Technologies Learned
            </h4>

            <div className="skill-tags">
              {technicalSkills.map((skill,index)=>
                <span key={index}>{skill}</span>
              )}
            </div>

          </div>
          <div className="experience-section">

            <h4>
              <i className="fas fa-users"></i>
              Professional Skills
            </h4>

            <div className="skill-tags">
              {professionalSkills.map((skill,index)=>
                <span key={index}>{skill}</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}