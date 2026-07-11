import React from 'react';
import './Hero.css';

export default function Hero({ onNavLinkClick }) {
    return (
        <section id="home" className="hero">
            <div className="hero-video">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/video/moon.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="hero-content">
                <h1>
                    <span>Geethma Yasashwi</span>
                </h1>
                <p> Computer Engineering Student | Full-Stack Developer | AI Enthusiast</p>
                <div className="cta-buttons">
                    <a
                        href="#projects"
                        className="cta-button"
                        onClick={(e) => onNavLinkClick(e, 'projects')}
                    >
                        View Projects
                    </a>
                    <a
                        href="public/assests/Geethma_Yasashwi-CV.pdf"
                        className="cta-button secondary"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}