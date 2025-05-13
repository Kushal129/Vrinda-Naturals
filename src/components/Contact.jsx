
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactCards = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      content: "+91 9913007777",
      color: "from-blue-500 to-cyan-400",
      link: "tel:+919913007777"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      content: "vrindagruhudyog79@gmail.com",
      color: "from-purple-500 to-pink-400",
      link: "mailto:vrindagruhudyog79@gmail.com"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      content: "Sayan Road, Surat – 394130",
      color: "from-orange-500 to-red-400",
      link: "https://maps.google.com/?q=Sayan+Road,+Surat,+394130"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company",
      content: "Vrinda Naturals Pvt. Ltd.",
      color: "from-yellow-500 to-amber-400"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to experience nature's finest? Reach out to us through any of these channels
            and our team will be happy to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 10, 
                  rotateX: 10,
                  translateZ: 10
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: '1000px', height: '100%' }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-lg -z-10"
                  style={{ background: `linear-gradient(135deg, ${card.color.split(' ')[1]}, ${card.color.split(' ')[3]})` }}
                ></div>
                
                <a 
                  href={card.link}
                  target={card.link?.startsWith('http') ? "_blank" : undefined}
                  rel={card.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`block h-full ${card.link ? 'cursor-pointer' : 'cursor-default'}`}
                  aria-label={card.link ? `Contact us via ${card.title}` : undefined}
                >
                  <div className="relative p-8 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300 h-full bg-dark-100 backdrop-blur-sm">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} p-4 mb-6 text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {card.content}
                    </p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-2xl overflow-hidden border border-primary/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29761.881736406934!2d72.81116162662274!3d21.203259097824876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec1efccd97%3A0x7bdaacaea87ecefb!2sSayan%2C%20Surat%2C%20Gujarat%20394130!5e0!3m2!1sen!2sin!4v1653205174188!5m2!1sen!2sin" 
            className="w-full h-[400px]"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Vrinda Naturals Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
