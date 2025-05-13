import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Shield } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const launchConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 100,
      origin: { y: 0.8 },
      colors: ['#ec4899', '#f472b6', '#f9a8d4', '#fbcfe8', '#fecdd3']

    });
  };

  const handleCommitmentClick = () => {
    launchConfetti();
    toast.success('Thank you for valuing our commitment to quality!', {
      icon: '🤩',
      style: {
        borderRadius: '8px',
        background: '#000',
        color: '#fff',
      },
      duration: 2000
    });
  };

  const features = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "100% Natural",
      description: "Sourced directly from the pristine Himalayan mountains, ensuring purity in every grain."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health Benefits",
      description: "Rich in over 84 minerals and natural elements that contribute to your overall wellbeing."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality Assured",
      description: "Every product undergoes rigorous quality checks to meet international health standards."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-200">
      <Toaster position="top-center" reverseOrder={false} />
      <section id="about" ref={ref} className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary/10 text-gray-200 px-6 py-2 rounded-full text-sm font-medium mb-6"
            >
              Our Philosophy
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-200">
              About <span className="text-primary drop-shadow-[0_0_8px_rgba(255,71,144,0.4)]">Vrinda Naturals</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              At Vrinda Naturals, we believe in bringing nature's purest offerings to your doorstep.
              Our journey began with a simple mission: to provide the highest quality natural products
              while preserving traditional harvesting methods and supporting local communities.
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-24 bg-gradient-to-t from-primary to-primary/10 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-dark-100/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-300 h-full flex flex-col items-center shadow-lg">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-primary/20 to-primary/20 w-16 h-16 rounded-full flex items-center justify-center text-white-400 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover:text-primary transition-colors duration-300 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed text-center">
                    {feature.description}
                  </p>
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                    className="h-0.5 bg-gradient-to-r from-primary to-primary/80 mt-6 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Journey Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative mt-16"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-1" />
            <div className="bg-dark-100/90 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-border-primary/10 to-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-border-primary/10 to-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              
              <div className="relative flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="relative w-full overflow-hidden rounded-2xl h-64 md:h-96 flex justify-center items-center bg-gradient-to-br from-dark-100 to-dark-100/90 p-8 border border-primary/10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <img
                        src="/c_logo.png"
                        alt="Vrinda Naturals Logo"
                        className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(104,64,85,0.3)]"
                      />
                      
                      <motion.div 
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                        className="absolute inset-0 w-full h-full border-2 border-primary/20 rounded-full"
                        style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                      />
                      
                      <motion.div 
                        animate={{ 
                          rotate: -360,
                        }}
                        transition={{ 
                          duration: 30, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                        className="absolute inset-0 w-full h-full border border-primary/10 rounded-full"
                        style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-200">
                      Our <span className="text-primary drop-shadow-[0_0_8px_rgba(255,71,144,0.4)]">Journey</span>
                    </h3>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={inView ? { width: '120px' } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-1 bg-gradient-to-r from-priborder-primary to-primary rounded-full"
                    />
                  </div>
                  
                  <p className="text-gray-300 text-base md:text-lg">
                    Founded in 2018, Vrinda Naturals embarked on a mission to bring the purest Himalayan salts to health-conscious consumers around the globe. Our dedicated team regularly visits the Himalayan regions to ensure sustainable practices and uphold fair trade principles.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg">
                    Collaborating closely with local miners and artisans, we preserve age-old harvesting techniques, ensuring that every product meets the highest quality standards.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg">
                    Our products transcend mere health benefits; they encapsulate the essence of the Himalayas, meticulously crafted with love and care.
                  </p>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 20px rgba(255, 71, 144, 0.3)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-priborder-primary hover:to-primary text-white font-medium rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-priborder-primary/20"
                    onClick={handleCommitmentClick}
                  >
                    Our Commitment to Quality
                  </motion.button>
                  
                  <div className="mt-6 pt-6 border-t border-primary">
                    <p className="text-gray-300 text-base md:text-lg">
                      With love, <br />
                      <span className="font-bold text-white">The Vrinda Naturals Team</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;