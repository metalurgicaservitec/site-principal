import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import GoogleAnalytics from './components/GoogleAnalytics';
import StructuredData from './components/StructuredData';
import { useServiceWorker } from './hooks/useServiceWorker';
import './lib/utmTracker';

// Sistema de proteção removido


function App() {
  // Registrar Service Worker
  useServiceWorker();

  return (
    <Router>
      <div className="App">
        <GoogleAnalytics />
        <StructuredData />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
