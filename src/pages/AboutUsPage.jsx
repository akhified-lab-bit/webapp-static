import React from 'react';
import '../styles/AboutUsPage.css';
// Removed AI image import

const AboutUsPage = () => {
  return (
    <div className="au-about-page app-container app-section">
      <h1>About CoreVoltMatrix</h1>
      
      <section className="au-about-story-section">
        <div className="au-about-story">
          <h2>Our Story</h2>
          <div className="au-about-story-content">
            <div className="au-about-story-text au-full-width">
              <p>
                Founded with a vision to bridge the gap between technology and business success, 
                CoreVoltMatrix has evolved into a trusted digital transformation partner for 
                businesses across industries. Our journey began with a focus on Salesforce 
                solutions and has expanded to encompass a comprehensive suite of digital services 
                that power modern enterprises.
              </p>
              <p>
                Today, we're proud to bring together a team of certified experts, innovative 
                thinkers and passionate problem-solvers who thrive on turning complex challenges 
                into elegant solutions.
              </p>
            </div>
            {/* Removed the about-story-image div containing the AI image */}
          </div>
        </div>
      </section>

      <section className="au-about-section">
        <h2>Our Mission</h2>
        <div className="au-mission-content">
          <p>
            At CoreVoltMatrix, we're on a mission to accelerate business growth through 
            intelligent technology solutions. We combine technical excellence with 
            industry insight to deliver implementations that don't just work—they transform 
            how our clients operate, compete, and succeed in an increasingly digital world.
          </p>
        </div>
      </section>

      <section className="au-about-section">
        <h2>Core Specialties</h2>
        <div className="au-core-specialties">
          <div className="au-specialty-item">
            <i className="fab fa-salesforce"></i>
            <h3>Salesforce Expertise</h3>
            <p>End-to-end Salesforce implementation, customization, and optimization across the entire Salesforce ecosystem including Sales Cloud, Service Cloud, Marketing Cloud, and custom AppExchange solutions.</p>
          </div>
          
          <div className="au-specialty-item">
            <i className="fas fa-laptop-code"></i>
            <h3>Digital Solutions</h3>
            <p>Comprehensive digital services spanning web and mobile application development, responsive website creation, and user experience design that drives engagement and conversion.</p>
          </div>
          
          <div className="au-specialty-item">
            <i className="fas fa-cloud"></i>
            <h3>Cloud & DevOps</h3>
            <p>Modern infrastructure management including cloud migration strategies, CI/CD implementation, and platform-agnostic solutions that ensure scalability, security, and operational efficiency.</p>
          </div>
        </div>
      </section>

      <section className="au-about-section au-values-section">
        <h2>Our Core Values</h2>
        <div className="au-values-container">
          <div className="au-values-intro">
            <p>
              At CoreVoltMatrix, our values define how we approach every client engagement, every project,
              and every relationship. These principles guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="au-values-visual">
            <div className="au-value-pillar">
              <div className="au-value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Client Partnership</h3>
              <p>We measure our success by our clients' success. Every engagement is a partnership where we invest in understanding your business goals and aligning our technical solutions accordingly.</p>
            </div>
            
            <div className="au-value-pillar">
              <div className="au-value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Technical Excellence</h3>
              <p>We maintain rigorous standards in our development practices, constantly evolving our skills and employing best practices to deliver solutions that stand the test of time.</p>
            </div>
            
            <div className="au-value-pillar">
              <div className="au-value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovative Thinking</h3>
              <p>Beyond implementing current technologies, we continuously explore emerging tools and approaches to give our clients a competitive edge in their respective markets.</p>
            </div>
            
            <div className="au-value-pillar">
              <div className="au-value-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Transparent Communication</h3>
              <p>We believe in clear, honest communication throughout every project. Our clients always know where things stand, what to expect, and how decisions impact outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="au-about-cta">
        <h2>Ready to transform your business?</h2>
        <p>Let's discuss how our expertise can help you achieve your technology goals.</p>
        <a href="/contact" className="au-about-cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default AboutUsPage;