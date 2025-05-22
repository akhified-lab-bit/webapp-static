import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/HomePage.css';
import '../styles/ServicesPage.css';
// Importing the AI images
import aiImage from '../Images/AI Image.png'; // Changed to new AI Image

const HomePage = () => {
  const navigate = useNavigate();
  
  // Function to handle smooth transition to contact page - simplified to use the built-in PageTransition
  const handleContactTransition = (e) => {
    e.preventDefault();
    // Simply navigate to the contact page - PageTransition component will handle the transition effect
    navigate('/contact');
  };

  // Function to navigate to services page
  const handleServicesTransition = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  // Function to navigate to about us page
  const handleAboutTransition = (e) => {
    e.preventDefault();
    navigate('/about');
  };
  
  // Text animation variant for staggered text reveal
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="home-page">
      {/* Enhanced Hero Section with AI Image Background */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="region" 
        aria-labelledby="hero-heading"
      >
        {/* AI Image as full background with subtle animation */}
        <motion.div 
          className="hero-background"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={aiImage} 
            alt="" 
            aria-hidden="true" 
          />
          <motion.div 
            className="hero-overlay"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </motion.div>

        {/* Content overlay directly on top of image */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {/* Removed the Certified Salesforce Partner badge */}
            
            <motion.h1 
              id="hero-heading"
              className="reduced-heading"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              style={{
                fontWeight: '800',
                color: '#ffffff',
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
                letterSpacing: '0.5px'
              }}
            >
              Transform your business with expert Salesforce development services
            </motion.h1>
            
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textReveal}
            >
              Core VoltMatrix delivers customized Salesforce consulting, implementation, and development services to drive your business growth and digital transformation.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button 
                className="app-button primary"
                onClick={handleContactTransition}
                aria-label="Request a Consultation"
                whileHover={{ scale: 1.03, boxShadow: "0 6px 18px rgba(0, 161, 224, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Consultation
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* About Us Section */}
      <section className="home-about-section app-section" role="region" aria-labelledby="about-heading">
        <div className="app-container">
          <motion.h2 
            id="about-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="reduced-heading"
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            About Us
          </motion.h2>
          
          <div className="home-about-content">
            <motion.div 
              className="home-about-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="home-about-intro" style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 2rem'
              }}>
                Core VoltMatrix is a leading Salesforce consulting and custom software development company dedicated to helping businesses leverage technology for sustainable growth.
              </p>
              
              <div className="home-about-highlights">
                <div className="about-highlight-item">
                  <div className="about-highlight-icon" style={{
                    backgroundColor: '#f0f7ff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-award" style={{ color: '#0047AB', fontSize: '24px' }}></i>
                  </div>
                  <div className="about-highlight-text">
                    <h3 style={{ fontWeight: '700' }}>Industry Expertise</h3>
                    <p>Specialized experience across multiple industries including finance, healthcare, retail, and manufacturing</p>
                  </div>
                </div>
                
                <div className="about-highlight-item">
                  <div className="about-highlight-icon" style={{
                    backgroundColor: '#f0f7ff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-users" style={{ color: '#0047AB', fontSize: '24px' }}></i>
                  </div>
                  <div className="about-highlight-text">
                    <h3 style={{ fontWeight: '700' }}>Expert Team</h3>
                    <p>Certified Salesforce professionals and skilled developers with proven track records</p>
                  </div>
                </div>
                
                <div className="about-highlight-item">
                  <div className="about-highlight-icon" style={{
                    backgroundColor: '#f0f7ff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-chart-line" style={{ color: '#0047AB', fontSize: '24px' }}></i>
                  </div>
                  <div className="about-highlight-text">
                    <h3 style={{ fontWeight: '700' }}>Results-Driven</h3>
                    <p>Focused on delivering measurable business outcomes and ROI for our clients</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="home-about-cta"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ 
                  textAlign: 'center',
                  marginTop: '2rem'
                }}
              >
                <button 
                  className="app-button secondary"
                  onClick={handleAboutTransition}
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More About Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="home-services-section app-section" role="region" aria-labelledby="services-heading">
        <div className="app-container">
          <motion.h2 
            id="services-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="reduced-heading"
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            Our Services
            <span style={{ 
              position: 'absolute', 
              bottom: '-15px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '0',
              height: '0'
            }}></span>
          </motion.h2>

          <div className="services-grid home-services-grid">
            {/* Salesforce Implementation */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon" 
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fab fa-salesforce" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Salesforce Implementation
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Expert Salesforce deployment with custom configurations and integrations. Optimize business processes with scalable CRM solutions tailored to your specific industry requirements.
              </p>
            </motion.div>

            {/* CRM Customization */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }} 
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fas fa-cogs" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                CRM Customization
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Tailored CRM solutions featuring automated workflows and analytics. Transform your customer relationships with smart tools designed to increase productivity and satisfaction.
              </p>
            </motion.div>

            {/* App Development */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }} 
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fas fa-mobile-alt" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                App Development
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Modern mobile and web applications built for performance. Create engaging user experiences with cutting-edge technology for business growth.
              </p>
            </motion.div>
            
            {/* Website Development */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }} 
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fas fa-laptop-code" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Website Development
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Fast-loading, responsive websites designed for conversion. Build your online presence with solutions optimized for search engines and user engagement.
              </p>
            </motion.div>

            {/* DevOps Services */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }} 
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fas fa-code-branch" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                DevOps Services
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Streamlined CI/CD pipelines and deployment workflows. Enhance your development process with automated solutions improving code quality and deployment frequency.
              </p>
            </motion.div>

            {/* Cloud Services */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="service-icon"
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }} 
                style={{
                  backgroundColor: '#f0f7ff',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}
              >
                <motion.i 
                  className="fas fa-cloud" 
                  style={{ color: '#0047AB', fontSize: '24px' }}
                  whileHover={{ color: '#1E90FF' }}
                  transition={{ duration: 0.2 }}
                ></motion.i>
              </motion.div>
              <h3 style={{ 
                fontWeight: '700',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                Cloud Services
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#0047AB',
                  borderRadius: '2px'
                }}></span>
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: '#333',
                textAlign: 'center'
              }}>
                Secure infrastructure with AWS, Azure, and Google Cloud. Scale your applications with custom solutions optimized for performance and cost efficiency.
              </p>
            </motion.div>
          </div>
          
          <div className="home-services-cta">
            <motion.button 
              className="app-button secondary"
              whileHover={{ scale: 1.05 }}
              onClick={handleServicesTransition}
              aria-label="View All Services"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              View All Services
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Ready to Transform Your Business Section - Added from ServicesPage */}
      <section className="home-transform-section app-section" role="region" aria-labelledby="transform-heading">
        <div className="app-container">
          <div className="home-transform-cta">
            <motion.h2 
              id="transform-heading"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                marginBottom: '2rem',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: '1.1rem',  // Reduced from 1.2rem
                lineHeight: '1.7',   // Slightly reduced from 1.8
                color: '#2c3e50',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: '400',
                maxWidth: '600px',
                margin: '1.5rem auto'
              }}
            >
              Contact us today to discuss how our services can help you achieve your business goals.
            </motion.p>
            <motion.button 
              className="app-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 71, 171, 0.2)" }}
              onClick={handleContactTransition}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Client tabs section with flip cards - FIXED VERSION */}
      <section className="clients-section app-section">
        <div className="app-container">
          <motion.h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Clients
          </motion.h2>
          
          {/* Modified client flip cards container - Uses CSS Grid instead of flexbox */}
          <motion.div 
            className="client-flip-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* ERP Solutions Flip Card */}
            <motion.div 
              className="flip-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: "#e8f0fe" }}>
                  <i className="fas fa-database"></i>
                  <h3>ERP Solutions</h3>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: "#1a73e8" }}>
                  <h3>ERP Solutions</h3>
                  <p>Providing comprehensive enterprise resource planning solutions with custom integrations and streamlined workflows for efficient business operations.</p>
                </div>
              </div>
            </motion.div>

            {/* Digital Governance Flip Card */}
            <motion.div 
              className="flip-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: "#e6f4ea" }}>
                  <i className="fas fa-city"></i>
                  <h3>Digital Governance</h3>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: "#34a853" }}>
                  <h3>Digital Governance</h3>
                  <p>Enabling transparent and efficient digital governance platforms with secure data management and citizen-friendly interfaces.</p>
                </div>
              </div>
            </motion.div>

            {/* HRMS Flip Card */}
            <motion.div 
              className="flip-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: "#fce8e6" }}>
                  <i className="fas fa-users"></i>
                  <h3>HRMS</h3>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: "#ea4335" }}>
                  <h3>HRMS</h3>
                  <p>Comprehensive human resource management systems with employee self-service portals, performance analytics, and automated HR workflows.</p>
                </div>
              </div>
            </motion.div>

            {/* ITDA Parvathipuram Flip Card */}
            <motion.div 
              className="flip-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: "#fff8e1" }}>
                  <i className="fas fa-landmark"></i>
                  <h3>ITDA Parvathipuram</h3>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: "#fbbc04" }}>
                  <h3>ITDA Parvathipuram</h3>
                  <p>Partnering with Integrated Tribal Development Agency for digital transformation initiatives focused on tribal welfare and development programs.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;