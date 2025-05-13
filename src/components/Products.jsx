
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Star, CheckCircle, Info, Package, Heart, Zap, Clock } from 'lucide-react';
import btlimg from '../img/b1.jpg'
import pkgimg from '../img/Packimg.jpg'

function Products() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Set default active tab to the first product type (Premium Pouch Pack)
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Refs for handling custom scrolling
  const detailsRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Himalayan Pink Rock Salt',
      types: [
        {
          id: 'packet',
          name: 'Premium Pouch Pack',
          description: 'High-quality Himalayan Pink Rock Salt packed in a sealed airtight pouch. Rich in minerals and perfect for daily cooking.',
          longDescription: 'Our premium salt is sourced directly from the Himalayan mountains, ensuring the highest quality and purity. Each crystal contains over 84 essential minerals including potassium, magnesium, and calcium that contribute to a healthy lifestyle. The sealed packaging maintains freshness and prevents moisture absorption.',
          rating: 5,
          benefits: [
            {
              icon: <Package className="w-6 h-6" />,
              title: "CULINARY",
              description: "Enhances flavor in all dishes"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "ELECTROLYTE",
              description: "Balances body's mineral levels"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "WELLNESS",
              description: "Promotes overall health"
            }
          ],
          weights: [
            { size: '1kg', price: 150 },
            { size: '500g', price: 80 }
          ],
          image: pkgimg
        },
        {
          id: 'bottle',
          name: 'Premium Bottle Pack',
          description: 'Natural Himalayan Pink Salt in convenient bottle packaging. Ideal for table use and long-term storage.',
          longDescription: 'The elegant bottle packaging ensures long-lasting freshness, easy dispensing, and protection from moisture. Perfect for both kitchen and dining table use. Our grinding bottles feature adjustable ceramic grinders for your preferred coarseness. Available in different sizes to suit your needs.',
          rating: 4.9,
          benefits: [
            {
              icon: <Package className="w-6 h-6" />,
              title: "CONVENIENCE",
              description: "Easy to use & store"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "FRESHNESS",
              description: "Stays fresh longer"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "QUALITY",
              description: "Premium grade salt"
            }
          ],
          weights: [
            { size: '1kg Bottle', price: 99 }
          ],
          image: btlimg
        }
      ]
    }
  ];

  const comingSoonProducts = [
    {
      id: 3,
      name: 'Family Pack Collection',
      description: 'Our upcoming collection of family-sized packages, perfect for bulk buying and long-term storage. Available in various sizes to suit your needs.',
      image: 'https://www.krmbs.com/Images/Product/Default/xlarge/0126950_1%20Rock%20Salt2.jpg',
      variants: [
        { name: '2kg - Pink Rock Salt Pouch', price: 149 },
        { name: '5kg - Pink Rock Salt Pouch', price: 249 },
      ]
    },
    {
      id: 4,
      name: 'Travel-Friendly Pack',
      description: 'Compact 400gm pouches, perfect for travelers and small households. Experience the same premium quality in a convenient, portable size.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjX-reJzSG1Z-VKjoEcRLmIhpeMdzcD93ym1dZxHgEloUUkoWLIVwdlNjSMDV-lDH8jk&usqp=CAU',
      variants: [
        { name: '400gm - Pink Rock Salt Pouch', price: 49 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const benefitVariants = {
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

  const handleTabChange = (index) => {
    setActiveTab(index);
    setSelectedOption(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const generateWhatsAppMessage = (type, option) => {
    if (!option) {
      return encodeURIComponent("Hello! I'm interested in your Himalayan Pink Salt products. Can you provide more information?");
    }

    const message = `Hello! I'm interested in purchasing:\n\n*Product:* ${type.name}\n*Variant:* ${option.size}\n*Price:* ₹${option.price}\n\nCould you please assist me with this order?`;
    return encodeURIComponent(message);
  };

  return (
    <section id="products" ref={ref} className="py-24 bg-dark-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={productVariants} className="text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Quality <span className="text-primary text-glow">Salt Products</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the pure taste and natural benefits of our carefully selected products,
            harvested from the majestic Himalayan mountains.
          </p>
        </motion.div>

        {products.map((product) => (
          <div key={product.id} className="space-y-6">
            {/* Custom Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-dark-300 p-1 rounded-full inline-flex">
                {product.types.map((type, index) => (
                  <motion.button
                    key={type.id}
                    onClick={() => handleTabChange(index)}
                    className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${activeTab === index
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product Content */}
            <div>
              {product.types.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    y: activeTab === index ? 0 : 20,
                    display: activeTab === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-dark-200 rounded-3xl overflow-hidden border border-primary/10 shadow-xl shadow-primary/5"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Product Image */}
                    <motion.div
                      className="relative h-[300px] md:h-auto overflow-hidden bg-gradient-to-br from-dark-300 to-black"
                      variants={imageVariants}
                    >
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full flex items-center shadow-lg">
                        <Star className="w-4 h-4 fill-white mr-1" />
                        <span>{type.rating}</span>
                      </div>

                      {/* Product Name for Mobile */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 md:hidden">
                        <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                        <p className="text-sm text-gray-300">{type.description}</p>
                      </div>
                    </motion.div>

                    {/* Product Details with custom scrolling */}
                    <div
                      ref={detailsRef}
                      className="p-8 md:p-10 space-y-6 max-h-[600px] md:h-auto overflow-y-auto custom-scrollbar"
                    >
                      {/* Product Title (only visible on md and above) */}
                      <div className="hidden md:block">
                        <h3 className="text-3xl font-bold glowing-golden-text mb-2">{type.name}</h3>
                        <p className="text-gray-300">{type.description}</p>
                      </div>

                      {/* Long Description */}
                      <p className="text-gray-300 leading-relaxed">{type.longDescription}</p>

                      {/* Benefits */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white flex items-center">
                          <Info className="w-5 h-5 mr-2 text-primary" />
                          Key Benefits
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                          {type.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              variants={benefitVariants}
                              className="flex flex-col items-center text-center p-3 bg-dark-300 rounded-lg hover:bg-dark-300/80 transition-colors"
                            >
                              <div className="text-primary mb-2">
                                {benefit.icon}
                              </div>
                              <h5 className="text-xs font-bold text-white">{benefit.title}</h5>
                              <p className="text-xs text-gray-400">{benefit.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Available Options */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Available Options:</h4>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {type.weights.map((weight, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => handleOptionSelect(weight)}
                              whileHover={{ scale: 1.03 }}
                              className={`rounded-xl p-4 text-center border transition-colors ${selectedOption?.size === weight.size && selectedOption?.price === weight.price
                                  ? 'bg-primary/10 border-primary text-primary'
                                  : 'bg-dark-100 border-primary/10 hover:border-primary/30 text-white'
                                }`}
                            >
                              <div className="text-base font-semibold mb-1">
                                {weight.size}
                              </div>
                              <div className="text-lg font-bold">
                                ₹{weight.price}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Order Button */}
                      <div className="pt-2">
                        <a
                          href={`https://wa.me/919913007777?text=${generateWhatsAppMessage(type, selectedOption)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-8 py-4 rounded-full transition-all duration-300 shadow-lg ${selectedOption
                              ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30'
                              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                            }`}
                          onClick={(e) => {
                            if (!selectedOption) {
                              e.preventDefault();
                            }
                          }}
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          {selectedOption ? 'Order Now on WhatsApp' : 'Please select an option'}
                        </a>
                        {!selectedOption && (
                          <p className="text-sm text-red-400 mt-2">Please select a product option to proceed</p>
                        )}
                      </div>

                      {/* Quality Assurance Badge */}
                      <div className="flex items-center text-xs text-gray-400 pt-4">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        All products are quality-checked and FSSAI certified
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Coming Soon Products */}
        <motion.div
          variants={productVariants}
          className="mt-24"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Coming <span className="text-primary">Soon</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comingSoonProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-200 rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 md:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-xl font-bold text-primary mb-2">{product.name}</h4>
                    <p className="text-gray-300 mb-4">{product.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary">Planned Variants:</h5>
                      <ul className="space-y-1">
                        {product.variants.map((variant, idx) => (
                          <li key={idx} className="text-sm text-gray-400">
                            • {variant.name} - ₹{variant.price}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      Expected launch: Coming months
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Our Salt */}
        <motion.div
          variants={productVariants}
          className="mt-24 bg-dark-200 rounded-3xl p-8 md:p-12 border border-primary/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-primary">Our Salt</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Natural Purity",
                description: "Harvested from ancient sea salt deposits untouched by modern pollution",
                icon: <img src="https://cdn-icons-png.flaticon.com/512/3449/3449449.png" alt="Natural Purity" className="w-12 h-12" />
              },
              {
                title: "Rich in Minerals",
                description: "Contains over 84 trace minerals beneficial for your body's functions",
                icon: <img src="https://cdn-icons-png.flaticon.com/512/1834/1834842.png" alt="Rich in Minerals" className="w-12 h-12" />
              },
              {
                title: "Better Taste",
                description: "Enhances the flavor of your food with its complex mineral profile",
                icon: <Heart className="w-12 h-12" />
              },
              {
                title: "Sustainable Source",
                description: "Ethically sourced with environmentally-friendly harvesting practices",
                icon: <img src="https://res.cloudinary.com/day0qlfda/image/upload/v1743936513/xvk4icjonvwezme2v6tj.png" alt="Sustainable Source" className="w-12 h-12" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={benefitVariants}
                className="text-center p-6 rounded-xl bg-dark-100 hover:bg-gradient-to-b hover:from-dark-100 hover:to-dark-200 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border border-transparent hover:border-primary/10"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-primary/50 text-primary rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              Learn More About Our Sourcing
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Products;
