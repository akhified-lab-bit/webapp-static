import React, { useState, useEffect, useRef } from 'react';
import '../styles/ContactUsPage.css';

const ContactUsPage = () => {
  const [showAllHours, setShowAllHours] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  
  // Business hours data (referenced from voltmatrix.net)
  const businessHours = [
    { day: 'Mon', hours: '09:00 am – 06:00 pm', isClosed: false, dayIndex: 1 },
    { day: 'Tue', hours: '09:00 am – 06:00 pm', isClosed: false, dayIndex: 2 },
    { day: 'Wed', hours: '09:00 am – 06:00 pm', isClosed: false, dayIndex: 3 },
    { day: 'Thu', hours: '09:00 am – 06:00 pm', isClosed: false, dayIndex: 4 },
    { day: 'Fri', hours: '09:00 am – 06:00 pm', isClosed: false, dayIndex: 5 },
    { day: 'Sat', hours: 'Closed', isClosed: true, dayIndex: 6 },
    { day: 'Sun', hours: 'Closed', isClosed: true, dayIndex: 0 },
  ];
  
  useEffect(() => {
    // Add the fade-in-visible class for smooth transition
    const timer = setTimeout(() => {
      document.body.classList.remove('home-to-contact-transition');
      setFadeIn(true);
    }, 300);
    
    // Check if currently within business hours
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + (currentMinute / 60);
    
    // Find the current day in business hours
    const dayData = businessHours.find(day => day.dayIndex === currentDay);
    setCurrentDayIndex(businessHours.findIndex(day => day.dayIndex === currentDay));
    
    if (dayData) {
      if (!dayData.isClosed) {
        // Parse business hours to determine if we're open
        const hourMatch = dayData.hours.match(/(\d+):(\d+)\s*(\w+)\s*–\s*(\d+):(\d+)\s*(\w+)/);
        
        if (hourMatch) {
          let [_, startHour, startMin, startAmPm, endHour, endMin, endAmPm] = hourMatch;
          
          startHour = parseInt(startHour);
          startMin = parseInt(startMin);
          startHour = startAmPm.toLowerCase() === 'pm' && startHour !== 12 ? startHour + 12 : startHour;
          startHour = startAmPm.toLowerCase() === 'am' && startHour === 12 ? 0 : startHour;
          
          endHour = parseInt(endHour);
          endMin = parseInt(endMin);
          endHour = endAmPm.toLowerCase() === 'pm' && endHour !== 12 ? endHour + 12 : endHour;
          endHour = endAmPm.toLowerCase() === 'am' && endHour === 12 ? 0 : endHour;
          
          const openTime = startHour + (startMin / 60);
          const closeTime = endHour + (endMin / 60);
          
          setIsOpen(currentTime >= openTime && currentTime < closeTime);
        }
      } else {
        setIsOpen(false);
      }
    }
    
    return () => clearTimeout(timer);
  }, []);
  
  // By default, only show current day. If View Full Schedule is clicked, show all days
  const displayedHours = showAllHours ? businessHours : [businessHours[currentDayIndex]];

  // Handle download hours functionality
  const handleViewSchedule = () => {
    setShowAllHours(!showAllHours);
  };
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    
    if (formData.name.trim().length < 2) {
      errors.name = 'Please enter a valid name';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.subject.trim().length < 3) {
      errors.subject = 'Please enter a valid subject';
    }
    
    if (formData.message.trim().length < 10) {
      errors.message = 'Please enter a more detailed message (minimum 10 characters)';
    }
    
    return errors;
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Send form data - in a real-world scenario, you'd use fetch or axios here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormErrors({});
  };

  return (
    <div className="cu-contact-page-wrapper">
      <div className={`cu-contact-page app-container ${fadeIn ? 'cu-fade-in-visible' : ''}`} ref={containerRef}>
        <h1>Contact Us</h1>
        <div className="cu-contact-intro">
          <p>Ready to transform your business with innovative solutions? Reach out to our team of experts.</p>
        </div>
        
        <div className="cu-contact-container">
          <div className="cu-contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} aria-label="Contact form" className="contact-us-form">
              <div className="cu-form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className={`cu-form-control ${formErrors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  aria-required="true" 
                />
                {formErrors.name && <div className="cu-error-message">{formErrors.name}</div>}
              </div>
              
              <div className="cu-form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className={`cu-form-control ${formErrors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  aria-required="true" 
                />
                {formErrors.email && <div className="cu-error-message">{formErrors.email}</div>}
              </div>
              
              <div className="cu-form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className={`cu-form-control ${formErrors.subject ? 'error' : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  aria-required="true" 
                />
                {formErrors.subject && <div className="cu-error-message">{formErrors.subject}</div>}
              </div>
              
              <div className="cu-form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className={`cu-form-control ${formErrors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  aria-required="true"
                ></textarea>
                {formErrors.message && <div className="cu-error-message">{formErrors.message}</div>}
              </div>
              
              <button type="submit" className="cu-submit-btn">Send Message</button>
            </form>
          </div>
          
          <div className="cu-contact-info">
            <h2>Get In Touch</h2>
            
            <div className="cu-info-item">
              <h3><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Address</h3>
              <p>Core VoltMatrix Pvt Ltd.</p>
              <p>1st floor, Hill #2, APIIC IT Sez,</p>
              <p>Rushikonda, Visakhapatnam,</p>
              <p>Andhra Pradesh, 530048</p>
            </div>
            
            <div className="cu-info-item">
              <h3><i className="fas fa-envelope" aria-hidden="true"></i> Email</h3>
              <p><a href="mailto:info@corevoltmatrix.com">info@corevoltmatrix.com</a></p>
            </div>
            
            <div className="cu-info-item">
              <h3><i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp</h3>
              <p>
                <a href="https://wa.me/9059051795" target="_blank" rel="noopener noreferrer" className="cu-whatsapp-link">
                  +91 9059051795
                </a>
              </p>
              <p className="cu-whatsapp-msg">Click to chat with our support team directly on WhatsApp</p>
            </div>
            
            <div className="cu-info-item cu-business-hours">
              <h3><i className="fas fa-clock" aria-hidden="true"></i> Business Hours</h3>
              
              <div className="cu-today-hours">
                <span>Today:</span>
                <span className={`cu-open-status ${isOpen ? 'open' : 'closed'}`}>
                  <i className="fas fa-circle" aria-hidden="true"></i> {isOpen ? 'Open' : 'Closed'}
                </span>
              </div>
              
              <table className="cu-hours-table">
                <tbody>
                  {displayedHours.map((hour, index) => (
                    <tr key={index}>
                      <td>{hour.day}</td>
                      <td className={hour.isClosed ? 'closed' : ''}>
                        {hour.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <button 
                className="cu-download-hours-btn" 
                onClick={handleViewSchedule}
                aria-expanded={showAllHours}
                aria-controls="hours-table"
              >
                <i className="fas fa-calendar-week" aria-hidden="true"></i> {showAllHours ? 'Hide Full Schedule' : 'View Full Schedule'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;