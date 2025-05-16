import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import { Toaster } from 'react-hot-toast';

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add structured data for SEO
    const addStructuredData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Vrinda Naturals',
        url: 'https://vrindanaturals.netlify.app/',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://vrindanaturals.netlify.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      });
      document.head.appendChild(script);
    };

    addStructuredData();

    // Update page title for SEO
    document.title = 'Vrinda Naturals | Premium Himalayan Pink Rock Salt Products';

    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-dark-100"
        >
          <Navbar />
          <main>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: 'rgba(12, 12, 12, 0.42)',
                  backdropFilter: 'blur(15px)',
                  color: '#aea9a9',
                  border: '1px solid #ff479030',
                  padding: '16px',
                  borderRadius: '8px',
                },
              }}
            />
            <Hero />
            <About />
            <Products />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
  