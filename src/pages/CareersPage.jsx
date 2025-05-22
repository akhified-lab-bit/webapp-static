import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CareersPage.css';

// Empty job listings array
const jobListings = [];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null
  });
  
  // Filter jobs based on department
  const filteredJobs = activeFilter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department.toLowerCase() === activeFilter.toLowerCase());
  
  // Handle file selection for resume
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation - basic example
    if (!formData.name || !formData.email || !selectedFile) {
      alert('Please fill in all required fields and attach your resume.');
      return;
    }
    
    // Here you would typically send the data to a server
    // For now, just show a success message
    alert('Your application has been submitted successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null
    });
    setSelectedFile(null);
    setSelectedJob(null);
  };
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <motion.div 
        className="careers-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>Shape the future with us at Core VoltMatrix</p>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="careers-container">
        {/* Career Journey Section */}
        <motion.section 
          className="careers-journey-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2>Why Join Us?</h2>
          
          <div className="careers-benefits">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career advancement paths for every team member</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Culture</h3>
              <p>Work with talented professionals in a supportive and innovative environment</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Cutting-Edge Tech</h3>
              <p>Access to the latest tools and technologies to solve challenging problems</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working arrangements designed to support your wellbeing</p>
            </div>
          </div>
        </motion.section>
        
        {/* Job Listings Section */}
        <section className="jobs-section">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Open Positions
          </motion.h2>
          
          {/* Department Filters */}
          <motion.div 
            className="department-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Departments
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Engineering' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Engineering')}
            >
              Engineering
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Sales' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Sales')}
            >
              Sales
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Design' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Design')}
            >
              Design
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Operations' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Operations')}
            >
              Operations
            </button>
          </motion.div>
          
          {/* Job Listings */}
          <motion.div 
            className="job-listings"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="no-jobs">No positions available currently. Check back soon!</p>
          </motion.div>
        </section>
        
        {/* Application Form Section */}
        <motion.section 
          id="application-form" 
          className="application-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="form-container">
            <h2>Apply Now</h2>
            <p className="form-intro">Ready to take the next step? Fill out the form below to apply for future positions at Core VoltMatrix.</p>
            
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your contact number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="position">Position of Interest</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position"
                    value={formData.position || ''}
                    onChange={handleInputChange}
                    placeholder="What type of role are you interested in?"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell us about yourself</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your skills, experience, and what you're looking for in your next role"
                  rows="4"
                ></textarea>
              </div>
              
              <div className="form-group resume-upload">
                <label>Resume <span className="required">*</span></label>
                <div className="file-upload-container">
                  <label className="file-upload-label" htmlFor="resume">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>{selectedFile ? selectedFile.name : 'Upload your resume'}</span>
                    <input 
                      type="file" 
                      id="resume" 
                      name="resume" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="file-format-info">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
              
              <div className="form-checkbox">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">
                  I agree to the <a href="#privacy-policy">privacy policy</a> and consent to having my data processed for recruitment purposes.
                </label>
              </div>
              
              <button type="submit" className="submit-application-btn">
                Submit Application
              </button>
            </form>
          </div>
        </motion.section>
        
        {/* FAQ Section */}
        <motion.section 
          className="faq-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the hiring process like?</h3>
              <p>Our hiring process typically includes a resume screening, 1-2 interviews, and possibly a technical assessment depending on the role. The entire process usually takes 2-3 weeks.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer relocation assistance?</h3>
              <p>For certain roles, we do offer relocation assistance. This is discussed on a case-by-case basis during the interview process.</p>
            </div>
            
            <div className="faq-item">
              <h3>What benefits do you offer?</h3>
              <p>We offer competitive salaries, health insurance, retirement plans, paid time off, professional development opportunities, and more.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is remote work available for all positions?</h3>
              <p>Many of our positions offer remote or hybrid work options, though some roles may require in-office presence. Each job posting specifies the work arrangement.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CareersPage;