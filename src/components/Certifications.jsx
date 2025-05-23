import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, FileText, Shield, Star, Leaf } from 'lucide-react';

function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      id: 1,
      name: 'FSSAI License',
      description: 'Food Safety and Standards Authority of India',
      icon: <FileText className="w-8 h-8" />,
      number: '20723022000052',
      details: 'Our products comply with the highest food safety standards set by FSSAI, ensuring that all our Himalayan Pink Salt products are safe for consumption and meet quality standards.'
    },
    {
      id: 2,
      name: 'ISO 22000:2018',
      description: 'International Food Safety Management',
      icon: <Award className="w-8 h-8" />,
      number: 'ISO22K-2024-789',
      details: 'This certification confirms our commitment to maintaining the highest standards in food safety management systems throughout our production process.'
    },
    {
      id: 3,
      name: 'GMP Certified',
      description: 'Good Manufacturing Practice',
      icon: <CheckCircle className="w-8 h-8" />,
      number: 'GMP-2024-456',
      details: 'Our manufacturing facilities follow Good Manufacturing Practices to ensure consistent quality and safety in all our Himalayan Pink Salt products.'
    },
    {
      id: 4,
      name: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Point',
      icon: <Shield className="w-8 h-8" />,
      number: 'HACCP-2024-789',
      details: 'We implement systematic preventive approaches to food safety, identifying and preventing hazards throughout our production process.'
    },
    {
      id: 5,
      name: 'Quality Excellence',
      description: 'Product Quality Standards',
      icon: <Star className="w-8 h-8" />,
      number: 'QE-2024-123',
      details: 'This certification recognizes our commitment to maintaining exceptional product quality standards in our Himalayan Pink Salt offerings.'
    },
    {
      id: 6,
      name: 'Organic Certification',
      description: 'Organic Processing Standards',
      icon: <Leaf className="w-8 h-8" />,
      number: 'ORG-2024-345',
      details: 'Our products meet organic processing standards, ensuring that our Himalayan Pink Salt is free from harmful chemicals and pesticides.'
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
    <section id="certifications" ref={ref} className="py-24 bg-dark-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Our Standards
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Quality <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our commitment to excellence is backed by internationally recognized certifications
            and quality standards. Each certification demonstrates our dedication to providing
            the highest quality Himalayan Pink Salt products to our customers.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            At Vrinda Naturals, we believe that quality isn't just a goal, it's a continuous process.
            We regularly audit our processes and products to maintain these prestigious certifications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300" />
              <div className="relative bg-dark-100 p-8 rounded-2xl border border-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <div className="pl-[88px] space-y-3">
                  <div className="text-sm text-primary/80 font-medium">
                    Certificate No:
                  </div>
                  <div className="font-mono text-white/90">
                    {cert.number}
                  </div>
                  <p className="text-sm text-gray-400">
                    {cert.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Certifications;