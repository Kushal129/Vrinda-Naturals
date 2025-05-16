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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-[8rem] bg-dark-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div className="relative inline-block mb-4" variants={buttonVariants}>
            <motion.div
              className="absolute -right-0 -top-8"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Crown className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              Premium Quality
            </span>
          </motion.div>

          {/* H1 heading for SEO */}
          <motion.h1 
            variants={textVariants}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Experience Pure
            <span className="block text-primary mt-2">Himalayan Pink Salt</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Discover our premium collection of Himalayan Pink Rock Salt, 
            carefully sourced from the heart of nature for authentic flavor and natural health benefits.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 cursor-pointer"
            >
              View Products
            </Link>
            <a
              href="https://wa.me/919913007777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-200 hover:bg-dark-300 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-[5rem] left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <ChevronDown className="w-10 h-10 text-primary animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;