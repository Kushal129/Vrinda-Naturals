import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, ChevronRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['home', 'about', 'products', 'certifications', 'contact'];

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-100/95 backdrop-blur-md shadow-lg shadow-primary/5 ' 
          : 'bg-transparent border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setActiveSection('home')}
          >
            Vrinda Naturals
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={() => setActiveSection(item)}
                className={`relative nav-link capitalize text-gray-300 hover:text-primary transition-all duration-300 px-4 py-2 cursor-pointer ${
                  activeSection === item ? 'text-primary' : ''
                }`}
              >
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-t-xl -z-10"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {item}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden relative w-10 h-10 text-gray-300 hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-dark-200/95 backdrop-blur-md border-t border-primary/10"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  className="overflow-hidden"
                >
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="group flex items-center px-3 py-3 text-gray-300 hover:text-primary capitalize transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(item);
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;