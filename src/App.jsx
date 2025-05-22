import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/CommonStyles.css'; // Added this line to import common header styles

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;