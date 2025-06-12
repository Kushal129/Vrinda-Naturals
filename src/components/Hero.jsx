import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Crown } from 'lucide-react';

function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-r from-dark-200 to-dark-100">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center cursor-default">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div className="relative inline-block mb-6" variants={buttonVariants}>
            <motion.div
              className="absolute -right-4 -top-10"
              animate={{
                rotate: [0, 15, -15, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Crown className="w-10 h-10 text-primary" />
            </motion.div>
            <span className="bg-primary/20 text-primary px-8 py-3 rounded-full text-md font-semibold cursor-default">
              Premium Quality
            </span>
          </motion.div>

          {/* H1 heading for SEO */}
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl font-extrabold mb-8"
          >
            Experience Pure
            <span className="block text-primary mt-3">Himalayan Pink Salt</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Discover our premium collection of Himalayan Pink Rock Salt, 
            carefully sourced from the heart of nature for authentic flavor and natural health benefits.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              className="bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-full text-lg font-medium transition-all transform hover:scale-110 cursor-pointer"
            >
              View Products
            </Link>
            <a
              href="https://wa.me/919913007777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-300 hover:bg-dark-400 text-white px-10 py-5 rounded-full text-lg font-medium transition-all transform hover:scale-110"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <ChevronDown className="w-12 h-12 text-primary animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;