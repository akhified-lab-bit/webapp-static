import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CommonStyles.css';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Service data focused on roles
  const serviceCategories = [
    {
      title: "Enterprise Solutions",
      icon: "building",
      description: "Comprehensive enterprise solutions tailored to streamline your business operations, boost productivity, and drive innovation across your organization.",
      roles: [
        {
          title: "Salesforce Implementation",
          icon: "salesforce", // Changed from "cloud" to "salesforce"
          description: "Our Salesforce specialists configure and customize your CRM environment to match your unique business processes, ensuring maximum adoption and ROI.",
          responsibilities: [
            "Requirements gathering and solution design",
            "Custom object and workflow configuration",
            "Data migration and integration",
            "User adoption strategy implementation",
            "Ongoing system optimization"
          ]
        },
        {
          title: "CRM Solution Architect",
          icon: "sitemap",
          description: "Solution architects design complete CRM ecosystems that align with your business goals and integrate with your existing technology stack.",
          responsibilities: [
            "Enterprise CRM architecture planning",
            "Integration strategy development",
            "Security model implementation",
            "Performance optimization",
            "Scalability planning"
          ]
        },
        {
          title: "Business Process Consultant",
          icon: "cogs",
          description: "Our business process consultants analyze your operations and implement automation solutions that improve efficiency and employee productivity.",
          responsibilities: [
            "Process assessment and documentation",
            "Workflow automation design",
            "Change management implementation",
            "KPI monitoring setup",
            "Continuous improvement facilitation"
          ]
        }
      ]
    },
    {
      title: "Digital Development",
      icon: "code",
      description: "Expert development teams that build custom digital solutions to meet your specific business challenges and enhance your customer experience.",
      roles: [
        {
          title: "Full-Stack Developer",
          icon: "laptop-code",
          description: "Our full-stack developers create end-to-end solutions with seamless functionality across front-end interfaces and back-end systems.",
          responsibilities: [
            "Front-end UI/UX implementation",
            "Back-end system development",
            "API design and integration",
            "Performance optimization",
            "Cross-platform compatibility"
          ]
        },
        {
          title: "Mobile Application Developer",
          icon: "mobile-alt",
          description: "Mobile specialists develop native and cross-platform applications that provide exceptional user experiences on smartphones and tablets.",
          responsibilities: [
            "Native iOS/Android development",
            "Cross-platform framework implementation",
            "Responsive interface design",
            "Mobile security implementation",
            "App Store optimization"
          ]
        },
        {
          title: "DevOps Engineer",
          icon: "code-branch",
          description: "Our DevOps engineers implement CI/CD pipelines and infrastructure automation to accelerate development and improve solution stability.",
          responsibilities: [
            "CI/CD pipeline implementation",
            "Infrastructure as code development",
            "Containerization and orchestration",
            "Monitoring and alerting setup",
            "Deployment automation"
          ]
        }
      ]
    },
    {
      title: "Cloud Architecture",
      icon: "cloud",
      description: "Cloud architecture experts who design, implement, and optimize secure, scalable infrastructure to power your business applications.",
      roles: [
        {
          title: "Cloud Solutions Architect",
          icon: "server",
          description: "Our cloud architects design resilient, scalable infrastructure leveraging the latest capabilities of major cloud platforms.",
          responsibilities: [
            "Cloud migration strategy development",
            "Multi-cloud architecture design",
            "Cost optimization planning",
            "Disaster recovery implementation",
            "High-availability system design"
          ]
        },
        {
          title: "Security Engineer",
          icon: "shield-alt",
          description: "Security specialists implement comprehensive protection for your cloud assets and data to ensure compliance and prevent breaches.",
          responsibilities: [
            "Security assessment and planning",
            "Identity and access management",
            "Data protection implementation",
            "Compliance framework alignment",
            "Security monitoring setup"
          ]
        },
        {
          title: "Network Infrastructure Engineer",
          icon: "network-wired",
          description: "Our network engineers design and implement reliable connectivity solutions that ensure optimal application performance.",
          responsibilities: [
            "Network topology design",
            "VPC and subnet configuration",
            "Load balancer implementation",
            "Connectivity optimization",
            "Traffic management"
          ]
        }
      ]
    },
    {
      title: "Project Delivery",
      icon: "tasks",
      description: "Dedicated project management professionals who ensure on-time, on-budget delivery of technology initiatives with maximum business impact.",
      roles: [
        {
          title: "Project Manager",
          icon: "clipboard-list",
          description: "Our project managers coordinate resources, timelines, and deliverables to ensure successful implementation of complex technology initiatives.",
          responsibilities: [
            "Project planning and scheduling",
            "Resource allocation and management",
            "Stakeholder communication",
            "Risk identification and mitigation",
            "Budget oversight"
          ]
        },
        {
          title: "Agile Coach",
          icon: "sync",
          description: "Agile coaches implement and optimize iterative development methodologies to improve team productivity and solution quality.",
          responsibilities: [
            "Agile practice implementation",
            "Sprint planning facilitation",
            "Team performance optimization",
            "Continuous improvement processes",
            "Delivery metric tracking"
          ]
        },
        {
          title: "Quality Assurance Specialist",
          icon: "check-circle",
          description: "QA specialists ensure that all delivered solutions meet quality standards through comprehensive testing methodologies.",
          responsibilities: [
            "Test strategy development",
            "Automated test implementation",
            "Performance testing",
            "User acceptance test coordination",
            "Quality metric reporting"
          ]
        }
      ]
    }
  ];

  return (
    <div className="services-page-container">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Expert Roles for Your Technology Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="services-hero-description"
          >
            Specialized professionals with the skills and experience to drive your digital transformation and business growth
          </motion.p>
        </div>
      </section>

      {/* Service Categories with Role-Focused Content */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={`category-${categoryIndex}`} 
          className={`service-category-section ${categoryIndex % 2 === 0 ? 'light-bg' : 'dark-bg'}`}
        >
          <div className="category-container">
            <motion.div 
              className="category-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="category-icon">
                <i className={`fas fa-${category.icon}`}></i>
              </div>
              <h2>{category.title}</h2>
              <p className="category-description">{category.description}</p>
            </motion.div>
            
            <div className="roles-container">
              {category.roles.map((role, roleIndex) => (
                <motion.div 
                  key={`role-${categoryIndex}-${roleIndex}`}
                  className="role-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: roleIndex * 0.1 }}
                >
                  <div className="role-header">
                    <div className="role-icon">
                      {role.icon === "salesforce" ? (
                        <i className="fab fa-salesforce"></i>
                      ) : (
                        <i className={`fas fa-${role.icon}`}></i>
                      )}
                    </div>
                    <h3>{role.title}</h3>
                  </div>
                  
                  <p className="role-description">{role.description}</p>
                  
                  <ul className="role-responsibilities">
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <li key={`resp-${categoryIndex}-${roleIndex}-${respIndex}`}>
                        <i className="fas fa-check"></i>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="services-cta-section">
        <motion.div 
          className="cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>Ready to Build Your Ideal Team?</h2>
          <p>Connect with us to discuss how our specialized roles can address your specific business challenges</p>
          <a href="/contact" className="cta-button">
            Request Consultation <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;