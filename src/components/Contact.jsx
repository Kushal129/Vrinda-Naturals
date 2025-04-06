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
    <section id="contact" ref={ref} className="py-20 bg-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to experience nature's finest? Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ rotateY: 10, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-lg"
                  style={{ background: `linear-gradient(135deg, ${card.color})` }}
                ></div>
                <a 
                  href={card.link}
                  target={card.link?.startsWith('http') ? "_blank" : undefined}
                  rel={card.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <div className="relative p-8 rounded-2xl border border-primary/60 group-hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} p-4 mb-6 text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {card.content}
                    </p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;