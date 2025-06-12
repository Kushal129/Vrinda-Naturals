import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Building2, ArrowUpRight, Star } from 'lucide-react';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      subtitle: "Quick Support",
      content: "+91 9913007777",
      link: "tel:+919913007777",
      description: "Available during business hours"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      subtitle: "Get in Touch",
      content: "vrindagruhudyog79@gmail.com",
      link: "mailto:vrindagruhudyog79@gmail.com",
      description: "We'll respond within 24 hours"
    }
  ];

  const businessInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Location",
      content: "Sayan Road, Surat – 394130",
      link: "https://maps.google.com/?q=Sayan+Road,+Surat,+394130"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Company",
      content: "Vrinda Naturals Pvt. Ltd."
    }
  ];

  return (
    <section id="contact" className="relative py-24  overflow-hidden cursor-default">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-current" />
              ))}
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to <br />
            <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Connect?
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
            Experience nature's finest products. Our team is here to help you discover 
            the perfect natural solutions for your needs.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-lg">
                Choose your preferred way to reach us. We're here to help!
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <a
                  href={method.link}
                  className="block p-8 rounded-3xl border border-primary/20 bg-dark-100/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-pink-400 p-3 text-white flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h4>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      <p className="text-sm text-primary mb-2">{method.subtitle}</p>
                      <p className="text-white font-medium mb-2">{method.content}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Business Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-gray-300 text-lg">
                Find us at our location or check our business information.
              </p>
            </div>

            {/* Business Info Cards */}
            <div className="space-y-6">
              {businessInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl border border-primary/10 bg-dark-100/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 ${info.link ? 'cursor-pointer hover:transform hover:scale-[1.02]' : ''}`}>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-pink-400 p-3 text-white flex items-center justify-center">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h4>
                            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {info.content}
                            </p>
                          </div>
                          {info.link && (
                            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-pink-400 p-3 text-white flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white">
                            {info.title}
                          </h4>
                          <p className="text-gray-300">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Find Us Here</h3>
            <p className="text-gray-300 text-lg">Located in the heart of Surat, Gujarat</p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
            {/* Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-transparent to-transparent pointer-events-none z-10"></div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29761.881736406934!2d72.81116162662274!3d21.203259097824876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec1efccd97%3A0x7bdaacaea87ecefb!2sSayan%2C%20Surat%2C%20Gujarat%20394130!5e0!3m2!1sen!2sin!4v1653205174188!5m2!1sen!2sin"
              className="w-full h-[500px] lg:h-[600px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Vrinda Naturals Location Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Info Card */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-dark-100/90 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Vrinda Naturals</h4>
                    <p className="text-gray-300">Sayan Road, Surat – 394130</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sayan+Road,+Surat,+394130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-pink-400 text-white rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;