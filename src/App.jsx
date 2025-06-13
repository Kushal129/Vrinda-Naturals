import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import { Toaster } from 'react-hot-toast';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-100">
    <Loader />
  </div>
);

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

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
          <SEO />
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
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Products />
                    <Certifications />
                    <Contact />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
  