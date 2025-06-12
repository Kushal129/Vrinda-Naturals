import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Shield } from 'lucide-react';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "100% Natural",
      description: "Our Himalayan Pink Rock Salt products are sourced directly from nature, ensuring purity in every grain. We maintain the highest standards of quality to provide you with salt that's free from additives and processing chemicals."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health Benefits",
      description: "Rich in minerals and natural elements that contribute to your wellbeing. Himalayan Pink Salt contains over 84 trace minerals and elements including potassium, magnesium, and calcium that are vital for maintaining proper bodily functions."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality Assured",
      description: "Every product undergoes strict quality checks to meet the highest standards. Our rigorous testing ensures that you receive premium Himalayan Pink Salt that meets all safety and quality requirements according to international food standards."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200 overflow-hidden cursor-default">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Our Philosophy
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-primary">Vrinda Naturals</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Vrinda Naturals, we believe in bringing nature's purest offerings to your doorstep.
            Our journey is rooted in tradition and powered by modern innovation. We specialize in 
            premium Himalayan Pink Rock Salt products that enhance your health and culinary experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Our mission is to provide authentic, high-quality Himalayan Pink Salt while maintaining 
            environmental sustainability and ethical sourcing practices. Each product we offer reflects 
            our commitment to purity, quality, and your wellbeing.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300" />
              <div className="relative bg-dark-100 p-8 rounded-2xl border border-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
    </section>
  );
}

export default About;