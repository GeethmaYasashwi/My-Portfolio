import React from 'react';
import './Contact.css';

export default function Contact(){

  const contactItems=[
    {
      icon:"fas fa-envelope",
      title:"Email",
      value:"geethmayasaswi@gmail.com"
    },
    {
      icon:"fas fa-phone",
      title:"Phone",
      value:"+94 77 330 2446"
    },
    {
      icon:"fas fa-map-marker-alt",
      title:"Location",
      value:"Anuradhapura, Sri Lanka"
    },
    {
      icon:"fas fa-briefcase",
      title:"Availability",
      value:"Open for Software Engineering Opportunities"
    }
  ];


  return(
    <section id="contact" className="contact">
      <div className="contact-video">
        <video autoPlay loop muted playsInline>
          <source src="/video/moon contact.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="contact-overlay"></div>
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-grid">
          {contactItems.map((item,index)=>(
            <div className="contact-card" key={index}>
              <div className="contact-icon">
                <i className={item.icon}></i>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="social-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a
              href="https://github.com/GeethmaYasashwi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/geethma-yasashwi-466a2a2b4"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}