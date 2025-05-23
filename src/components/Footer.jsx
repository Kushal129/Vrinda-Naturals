import { motion } from 'framer-motion';
import { MessageCircle, Package, PillBottle , Instagram, Twitter, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Himalayan Pink Rock Salt Packet', href: '#product-pink-salt-packet', icon: <Package className="w-4 h-4" /> },
      { name: 'Himalayan Pink Rock Salt Bottle', href: '#product-pink-salt-bottle', icon: <PillBottle  className="w-4 h-4" /> }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Products', href: '#products' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Contact Us', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Shipping Policy', href: '/shipping-policy' },
      { name: 'Refund Policy', href: '/refund-policy' }
    ],
    contact: [
      { name: '+91 9913007777', href: 'tel:+9913007777', icon: <Phone className="w-4 h-4" /> },
      { name: 'vrindagruhudyog79@gmail.com', href: 'mailto:vrindagruhudyog79@gmail.com', icon: <Mail className="w-4 h-4" /> },
      { name: 'Sayan Road, Surat – 394130', href: 'https://maps.google.com/?q=Sayan+Road,+Surat,+394130', icon: <MapPin className="w-4 h-4" /> }
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/vrindanaturals', icon: <Facebook className="w-6 h-6" /> },
      { name: 'Instagram', href: 'https://www.instagram.com/vrindanaturals', icon: <Instagram className="w-6 h-6" /> },
      { name: 'Twitter', href: 'https://twitter.com/vrindanaturals', icon: <Twitter className="w-6 h-6" /> }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-primary/10 to-transparent text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              className="text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Vrinda Naturals
            </motion.h3>
            <p className="text-gray-200">
              Bringing nature's goodness to your doorstep. Premium quality Himalayan Pink Rock Salt and natural products for a healthier lifestyle.
            </p>
            {/* <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-100 p-3 rounded-full text-gray-200 hover:text-primary hover:bg-dark-200 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-primary transition-colors duration-200 flex items-center gap-2"
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
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-200 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-gray-200 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.icon}
                    <span className="text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mb-12">
          <motion.a
            href="https://wa.me/919913007777?text=I'm%20interested%20in%20your%20Himalayan%20Pink%20Rock%20Salt%20products"
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
        <div className="text-center text-gray-200 text-sm">
          <p>&copy; {currentYear} Vrinda Naturals. All rights reserved.</p>
          <p className="mt-2">
            Experience the authentic taste and natural benefits of premium Himalayan Pink Rock Salt - sourced directly from nature.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;