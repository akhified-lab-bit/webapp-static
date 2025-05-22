import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PageTransition.css';

const PageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const overlayRef = useRef(null);
  
  // Track if we're going from home to contact specifically
  const isHomeToContactTransition = 
    prevPathRef.current === '/' && location.pathname === '/contact';
  
  useEffect(() => {
    const handleTransition = () => {
      // Start transition
      setIsTransitioning(true);
      
      // If transitioning from home to contact, add special handling
      if (isHomeToContactTransition) {
        document.body.classList.add('home-to-contact-transition');
      }
      
      // End transition
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove('home-to-contact-transition');
      }, 500); // Match this with CSS transition duration
      
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('home-to-contact-transition');
      };
    };
    
    handleTransition();
    prevPathRef.current = location.pathname;
  }, [location.pathname, isHomeToContactTransition]);
  
  return (
    <div 
      ref={overlayRef}
      className={`page-transition-overlay ${isTransitioning ? 'active' : ''} ${
        isHomeToContactTransition ? 'home-to-contact' : ''
      }`} 
      aria-hidden="true"
    />
  );
};

export default PageTransition;