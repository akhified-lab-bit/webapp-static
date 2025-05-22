import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['site-footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-main']}>
          <div className={`${styles['footer-column']} ${styles['company-info']}`}>
            <h3>
              <span className={styles['brand-orange']}>Core</span><span className={styles['brand-blue']}>VoltMatrix</span>
            </h3>
            <p>
              Your trusted partner for Salesforce implementation, customization, 
              and software development solutions.
            </p>
            <div className={styles['social-links']}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className={styles['footer-column']}>
            <h3>Quick Links</h3>
            <ul className={styles['footer-links']}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles['footer-column']}>
            <h3>Services</h3>
            <ul className={styles['footer-links']}>
              <li><Link to="/services#salesforce-implementation">Salesforce Implementation</Link></li>
              <li><Link to="/services#salesforce-customization">Salesforce Customization</Link></li>
              <li><Link to="/services#software-development">Software Development</Link></li>
              <li><Link to="/services#erp-integration">ERP Integration</Link></li>
              <li><Link to="/services">View All Services</Link></li>
            </ul>
          </div>

          <div className={`${styles['footer-column']} ${styles['footer-contact-info']}`}>
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Core VoltMatrix Pvt Ltd.<br />
              1st floor, Hill #2, APIIC IT Sez, Rushikonda, Visakhapatnam,<br />
              Andhra Pradesh, 530048.
            </p>
            <p><i className="fas fa-phone-alt"></i> +91 9059051795</p>
            <p><i className="fas fa-envelope"></i> info@corevoltmatrix.com</p>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <div className={styles['copyright']}>
            &copy; {currentYear} <span className={styles['brand-orange']}>Core</span><span className={styles['brand-blue']}>VoltMatrix</span> Private Limited. All Rights Reserved.
          </div>
          <div className={styles['legal-links']}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;