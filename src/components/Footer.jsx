import { motion } from 'framer-motion';
import { MessageCircle, Package, Bot as Bottle } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Natural Products', href: '#products', icon: <Package className="w-4 h-4" /> },
      { name: 'Packaged Items', href: '#products', icon: <Bottle className="w-4 h-4" /> }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-primary/10 to-transparent text-white pt-16 pb-8">
      <div className="section-container flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 w-full max-w-4xl">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.h3
              className="text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Vrinda Naturals
            </motion.h3>
            <p className="text-gray-400">
              Bringing nature's goodness to your doorstep. Premium quality natural and organic products for a healthier lifestyle.
            </p>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
          className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Vrinda Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
