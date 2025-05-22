import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ClientsPage.css';

// Sample client data - you can replace with actual data later
const clientsData = [
  {
    id: 1,
    name: 'TechNova Solutions',
    logo: '📊', // Replace with actual image path
    category: 'ERP Solutions',
    description: 'Enterprise resource planning provider specializing in manufacturing solutions with AI-driven analytics.'
  },
  {
    id: 2,
    name: 'GovDigital',
    logo: '🏛️', // Replace with actual image path
    category: 'Digital Governance',
    description: 'Government agency focused on digital transformation achieving 40% faster processing times.'
  },
  {
    id: 3,
    name: 'HRTalent Pro',
    logo: '👥', // Replace with actual image path
    category: 'HRMS',
    description: 'HR management company serving 200+ organizations with integrated workforce solutions.'
  },
  {
    id: 4,
    name: 'ITDA Parvathipuram',
    logo: '🌄', // Replace with actual image path
    category: 'ITDA Parvathipuram',
    description: 'Integrated Tribal Development Agency digitizing records for improved service delivery.'
  }
];

const ClientsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredClients = activeCategory === 'all' 
    ? clientsData 
    : clientsData.filter(client => client.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="clients-page">
      <div className="app-container app-section">
        {/* Our Clients Section */}
        <motion.section 
          className="clients-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ position: 'relative' }}>Our Clients</h2>
          
          {/* Client Category Tabs */}
          <div className="client-tabs-home">
            <div 
              className={`client-tab-home ${activeCategory === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('all')}
              style={{ 
                backgroundColor: "#f0f4f8", 
                color: "#4a6fa5", 
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 3px 10px rgba(74, 111, 165, 0.1)",
                border: "1px solid rgba(74, 111, 165, 0.2)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-building" style={{ fontSize: "1.1rem" }}></i>
              All Clients
            </div>
            <div 
              className={`client-tab-home ${activeCategory === 'erp' ? 'active' : ''}`}
              onClick={() => setActiveCategory('erp')}
              style={{ 
                backgroundColor: "#e8f0fe", 
                color: "#1a73e8", 
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 3px 10px rgba(26, 115, 232, 0.1)",
                border: "1px solid rgba(26, 115, 232, 0.2)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-database" style={{ fontSize: "1.1rem" }}></i>
              ERP Solutions
            </div>
            <div 
              className={`client-tab-home ${activeCategory === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveCategory('digital')}
              style={{ 
                backgroundColor: "#e6f4ea", 
                color: "#34a853", 
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 3px 10px rgba(52, 168, 83, 0.1)",
                border: "1px solid rgba(52, 168, 83, 0.2)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-city" style={{ fontSize: "1.1rem" }}></i>
              Digital Governance
            </div>
            <div 
              className={`client-tab-home ${activeCategory === 'hrms' ? 'active' : ''}`}
              onClick={() => setActiveCategory('hrms')}
              style={{ 
                backgroundColor: "#fce8e6", 
                color: "#ea4335", 
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 3px 10px rgba(234, 67, 53, 0.1)",
                border: "1px solid rgba(234, 67, 53, 0.2)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-users" style={{ fontSize: "1.1rem" }}></i>
              HRMS
            </div>
            <div 
              className={`client-tab-home ${activeCategory === 'itda' ? 'active' : ''}`}
              onClick={() => setActiveCategory('itda')}
              style={{ 
                backgroundColor: "#fff8e1", 
                color: "#fbbc04", 
                fontWeight: "600",
                fontSize: "0.95rem",
                boxShadow: "0 3px 10px rgba(249, 168, 37, 0.1)",
                border: "1px solid rgba(249, 168, 37, 0.2)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-landmark" style={{ fontSize: "1.1rem" }}></i>
              ITDA Parvathipuram
            </div>
          </div>
          
          {/* Client Grid Layout - Changed from horizontal flex to grid */}
          <motion.div 
            className="clients-flex-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filteredClients.map(client => (
              <div 
                key={client.id} 
                className="client-flex-card"
              >
                <div className="client-identity">
                  <div className="client-logo-container">
                    <span className="client-logo-placeholder">{client.logo}</span>
                  </div>
                  <h3>{client.name}</h3>
                  <span className="client-category-tag">{client.category}</span>
                </div>
                <div className="client-info">
                  <p>{client.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Success Stories Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="page-title"
          style={{ marginTop: '4rem' }}
        >
          Client Success Stories
        </motion.h1>
        
        <motion.div 
          className="testimonials-coming-soon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Testimonials Coming Soon</h2>
          <p>
            We are in the process of collecting success stories and testimonials from our valued clients. 
            Stay tuned to hear about their transformative experiences and the positive impact our solutions 
            have had on their businesses.
          </p>
          <p>
            In the meantime, feel free to <a href="/contact" style={{ color: '#1a73e8' }}>contact us</a> to 
            learn more about how we can help your business achieve its technology goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsPage;