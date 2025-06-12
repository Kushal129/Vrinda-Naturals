import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Sparkles, Leaf, Globe, Award, ShoppingBag, ArrowRight, Package, Star, Heart } from 'lucide-react';
import SplitText from "../ui/SplitText";
import FadeContent from '../ui/FadeContent';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "100% Natural",
      subtitle: "Pure & Organic",
      description: "Sourced directly from nature"
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Premium Quality",
      subtitle: "Grade A Salt",
      description: "Highest quality standards"
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Global Reach",
      subtitle: "Worldwide Shipping",
      description: "Available internationally"
    },
    {
      icon: <Package className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Wholesale",
      subtitle: "Bulk Orders",
      description: "Contact for wholesale"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent rotate-12 transform" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/5 via-transparent to-transparent -rotate-12 transform" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5" />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-2 h-2 bg-primary/30 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 w-3 h-3 bg-primary/20 rounded-full hidden lg:block"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Premium Badge - Centered and Mobile Optimized */}
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 lg:mt-8">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Premium Himalayan Collection</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
          </motion.div>

          {/* Main Heading - Mobile Optimized */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <SplitText
                text="Experience Pure"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2"
                splitType="words, chars"
                delay={50}
              />
              <SplitText
                text="Himalayan Salt!"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight px-2"
                splitType="words, chars"
                delay={100}
              />
            </div>

            <FadeContent
              duration={800}
              delay={300}
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4"
            >
              <p className="leading-relaxed">
                Discover the perfect balance of minerals and purity in every grain. 
                Our premium Himalayan salt brings ancient wisdom to your modern lifestyle.
              </p>
            </FadeContent>
          </motion.div>

          {/* Action Buttons - Mobile 2-Column Layout */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Link
                to="products"
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group text-sm sm:text-base"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-white/10 to-white/20 hover:from-white/20 hover:to-white/30 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg border border-white/10 text-sm sm:text-base"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Learn More</span>
              </a>
            </div>
          </motion.div>

          {/* Features Grid - Enhanced Mobile Layout */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16"
          >
            <FadeContent duration={1000} delay={400}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 group"
                  >
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className="bg-primary/10 p-2 sm:p-3 rounded-full mb-3 sm:mb-4 text-primary group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-primary text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-snug">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeContent>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors cursor-pointer"
            >
              <span className="text-xs sm:text-sm mb-2 hidden sm:block">Scroll Down</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;