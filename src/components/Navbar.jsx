import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, onNavLinkClick }) => {
  const [navActive, setNavActive] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="nav-wrapper">
      <nav className={`glass-nav ${navActive ? 'active' : ''}`}>
        <div className="nav-header">
          <div className="logo" onClick={(e) => onNavLinkClick(e, 'home')}>
            Geethma Yasashwi
          </div>
          <div
            className={`burger ${navActive ? 'active' : ''}`}
            onClick={() => setNavActive(!navActive)}
            aria-label="Toggle navigation menu"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  onNavLinkClick(e, item.id);
                  setNavActive(false);
                }}
              >
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
