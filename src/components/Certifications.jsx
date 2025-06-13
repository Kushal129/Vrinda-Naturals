import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  Shield,
  CheckCircle,
  FileText,
  Globe,
  Leaf,
  Crown,
  Star,
  ArrowRight,
  Medal,
  CheckCircle2
} from 'lucide-react';

const Certifications = () => {
  const controls = useAnimation();
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [descRef, descInView] = useInView({ triggerOnce: true });
  const [highPriorityRef, highPriorityInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mediumPriorityRef, mediumPriorityInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [lowPriorityRef, lowPriorityInView] = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (headerInView) {
      controls.start("visible");
    }
  }, [headerInView, controls]);

  React.useEffect(() => {
    if (descInView) {
      controls.start("descVisible");
    }
  }, [descInView, controls]);

  const certifications = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'FSSAI Certified',
      subtitle: 'Food Safety Standards',
      description: 'Certified by Food Safety and Standards Authority of India for premium quality Himalayan Pink Salt products.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'Government Approved',
      priority: 'high',
      features: ['Quality Assured', 'Government Verified', 'Food Safe']
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'ISO 22000:2018',
      subtitle: 'Food Safety Management',
      description: 'International certification ensuring systematic approach to food safety management in our salt processing.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'ISO Certified',
      priority: 'high',
      features: ['International Standard', 'Safety Management', 'Process Control']
    },
    {
      id: 3,
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'HACCP Certified',
      subtitle: 'Hazard Analysis & Control',
      description: 'Systematic preventive approach identifying and preventing hazards in our Himalayan salt production.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'International Standard',
      priority: 'medium',
      features: ['Hazard Prevention', 'Quality Control', 'Safety First']
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'GMP Certified',
      subtitle: 'Good Manufacturing Practice',
      description: 'Ensures consistent quality and safety standards in our Himalayan Pink Salt manufacturing process.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'Quality Assured',
      priority: 'medium',
      features: ['Manufacturing Excellence', 'Consistent Quality', 'Best Practices']
    },
    {
      id: 5,
      icon: <Leaf className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Organic Certified',
      subtitle: 'Natural & Pure',
      description: 'Certified organic processing ensuring our Himalayan salt is free from chemicals and additives.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: '100% Natural',
      priority: 'medium',
      features: ['Chemical Free', 'Natural Process', 'Pure & Clean']
    },
    {
      id: 6,
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Export Quality',
      subtitle: 'International Standards',
      description: 'Meets international export quality standards for premium Himalayan Pink Salt worldwide distribution.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'Export Ready',
      priority: 'medium',
      features: ['Global Standards', 'Export Quality', 'Worldwide Approved']
    },
    {
      id: 7,
      icon: <Crown className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Halal Certified',
      subtitle: 'Religious Compliance',
      description: 'Halal certification ensuring our salt products meet Islamic dietary requirements and standards.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'Halal Approved',
      priority: 'low',
      features: ['Religious Compliance', 'Dietary Standards', 'Certified Pure']
    },
    {
      id: 8,
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'BRC Grade A',
      subtitle: 'British Retail Consortium',
      description: 'Highest grade BRC certification for food safety and quality management in salt production.',
      color: 'from-primary to-pink-400',
      bgColor: 'bg-primary/10',
      badge: 'Grade A',
      priority: 'low',
      features: ['Highest Grade', 'Retail Standard', 'Premium Quality']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const highPriority = certifications.filter(cert => cert.priority === 'high');
  const mediumPriority = certifications.filter(cert => cert.priority === 'medium');
  const lowPriority = certifications.filter(cert => cert.priority === 'low');

  return (
    <section
      id="certifications"
      className="relative py-12 sm:py-14 lg:py-20 xl:py-28 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200 overflow-hidden cursor-default"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-none"
          >
            <span className="bg-white bg-clip-text text-transparent">
              Quality
            </span>
            <span className="block bg-primary bg-clip-text text-transparent mt-1 sm:mt-2">
              Certifications
            </span>
          </motion.h2>

          <motion.div
            ref={descRef}
            variants={{
              descHidden: { opacity: 0, y: 20 },
              descVisible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                }
              }
            }}
            initial="descHidden"
            animate={controls}
            className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light px-4 sm:px-0">
              Our commitment to excellence is validated by prestigious international certifications.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed px-2 sm:px-0">
              Each certification represents our unwavering dedication to delivering the finest
              Himalayan Pink Salt products with uncompromising quality and safety standards.
            </p>
          </motion.div>
        </div>

        {/* Featured High Priority Certifications - Hero Cards */}
        <motion.div
          ref={highPriorityRef}
          variants={containerVariants}
          initial="hidden"
          animate={highPriorityInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
        >
          {highPriority.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dark-200/90 via-dark-200/70 to-dark-100/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 shadow-xl sm:shadow-2xl" />

              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl transition-all duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl transition-all duration-700`} />

              <div className="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={controls}
                  transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
                  className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r ${cert.color} text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg border-2 border-white/20`}
                >
                  {cert.badge}
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${cert.color} rounded-xl sm:rounded-2xl lg:rounded-3xl mb-6 sm:mb-8 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className="scale-110 sm:scale-125">
                    {cert.icon}
                  </div>
                </motion.div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-primary/90 mb-3 sm:mb-4 tracking-wide">
                    {cert.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1 text-xs px-2 py-1 ${cert.bgColor} rounded-full border border-primary/30`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span className="text-gray-300">{feature}</span>
                    </span>
                  ))}
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r ${cert.color} rounded-b-2xl sm:rounded-b-3xl origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Medium Priority Certifications - Responsive Grid */}
        <motion.div
          ref={mediumPriorityRef}
          variants={containerVariants}
          initial="hidden"
          animate={mediumPriorityInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
        >
          {mediumPriority.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dark-200/80 to-dark-100/80 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-primary/15 group-hover:border-primary/30 transition-all duration-500" />

              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl transition-all duration-500`} />

              <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={controls}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r ${cert.color} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg`}
                >
                  {cert.badge}
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${cert.color} rounded-lg sm:rounded-xl lg:rounded-2xl mb-4 sm:mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {cert.icon}
                </motion.div>

                <div className="mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary/80 mb-2 sm:mb-3">
                    {cert.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {cert.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 ${cert.bgColor} rounded-full text-gray-300`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-b-xl sm:rounded-b-2xl origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Low Priority Certifications - Compact Cards */}
        <motion.div
          ref={lowPriorityRef}
          variants={containerVariants}
          initial="hidden"
          animate={lowPriorityInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {lowPriority.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                x: 4,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-200/70 to-dark-100/70 backdrop-blur-md rounded-xl border border-primary/10 group-hover:border-primary/25 transition-all duration-500" />

              <div className="relative p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${cert.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  {cert.icon}
                </motion.div>

                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors duration-300 truncate">
                      {cert.title}
                    </h3>
                    <span className={`bg-gradient-to-r ${cert.color} text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 self-start sm:self-center`}>
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-primary/80 mb-2">{cert.subtitle}</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-shrink-0 text-primary/60 group-hover:text-primary transition-colors duration-300 hidden sm:block"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
