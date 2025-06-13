import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Vrinda Naturals"
        description="The page you're looking for doesn't exist. Explore our premium Himalayan Pink Rock Salt products and natural health solutions."
        canonicalUrl="https://vrindanaturals.netlify.app/404"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-dark-100 flex flex-col items-center justify-center px-4 py-16"
      >
        <h1 className="text-8xl font-extrabold text-pink-500 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
        <p className="text-gray-400 text-center max-w-lg mb-8">
          Oops! The page you're looking for seems to have vanished like salt in water. 
          Don't worry though, we've got plenty of other natural treasures for you to explore.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full mb-12">
          <Link 
            to="/"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-center transition-colors shadow-lg"
          >
            Return Home
          </Link>
          <Link 
            to="/products"
            className="bg-dark-100 hover:bg-dark-200 border border-dark-200 text-white px-8 py-4 rounded-full text-center transition-colors shadow-lg"
          >
            Explore Products
          </Link>
        </div>

        <div className="text-gray-400 text-sm">
          <p className="mb-4">Popular Pages:</p>
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link to="/about" className="hover:text-pink-500 transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-pink-500 transition-colors">Our Products</Link></li>
            <li><Link to="/certifications" className="hover:text-pink-500 transition-colors">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound;
