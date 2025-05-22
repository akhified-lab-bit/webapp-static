import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../Images/core VoltMatrix Logo.png'; // Import the logo

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Core VoltMatrix Logo" className="company-logo" />
            </Link>
          </div>
          <div className="brand-text">
            <Link to="/" className="company-name">
              <span className="brand-orange">Core</span><span className="brand-blue">VoltMatrix</span>
            </Link>
          </div>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/clients" className={isActive('/clients') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Clients</Link></li>
          <li><Link to="/careers" className={isActive('/careers') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        
        {/* Removed the CTA button container */}
      </div>
    </nav>
  );
};

export default Navigation;