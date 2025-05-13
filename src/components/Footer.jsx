import { motion } from 'framer-motion';
import { MessageCircle, Package, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import mountain from '../img/mountain.png';
import { useState } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const footerLinks = {
    products: [
      { name: 'Pink Salt Packets', href: '#products' },
      { name: 'Bottled Salt', href: '#products' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Contact Us', href: '#contact' }
    ],
    social: [
      { name: 'WhatsApp', href: 'https://wa.me/919913007777' }
    ]
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.endsWith('@gmail.com')) {
      setIsSubmitted(true);
      setError('');
    } else {
      setError('Please enter a valid Gmail address.');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-dark-100 to-dark-200 text-white pt-20 pb-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <img src={mountain} alt="Vrinda Naturals Logo" className="h-10 w-auto" />
              <motion.h3
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vrinda Naturals
              </motion.h3>
            </Link>
            <p className="text-gray-400">
              Bringing nature's goodness to your doorstep. Premium quality salt products sourced from the pristine Himalayan mountains.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Package className="w-4 h-4" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link
                    to={link.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and offers directly to your inbox.</p>

            {!isSubmitted ? (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-dark-300 rounded-lg border border-primary/10 focus:outline-none focus:border-primary/50 text-white"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            ) : (
              <p className="text-green-500">Thank you for subscribing!</p>
            )}

            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mb-12">
          <motion.a
            href="https://wa.me/919913007777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Connect on WhatsApp</span>
          </motion.a>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Vrinda Naturals. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
