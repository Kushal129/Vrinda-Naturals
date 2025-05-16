import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Star, Scale, Utensils, Heart } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

function Products() {
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [errors, setErrors] = useState({});

  const [ref1, inView1] = useInView({
    threshold: 0.1, // Lower threshold for mobile
    triggerOnce: true
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1, // Lower threshold for mobile
    triggerOnce: true
  });

  const products = [
    {
      id: 1,
      name: 'Himalayan Pink Rock Salt - Packet',
      description: 'High-quality Himalayan Pink Rock Salt packed in a sealed 1kg pouch. Rich in minerals and perfect for daily cooking. Our premium salt is sourced directly from the Himalayan mountains, ensuring the highest quality and purity. Each crystal contains essential minerals that contribute to a healthy lifestyle.',
      longDescription: 'Our Himalayan Pink Rock Salt packet is perfect for everyday cooking needs. It contains 84 trace minerals and elements that are essential for your body. Unlike regular table salt, Himalayan salt has a complex mineral profile that gives it a more nuanced flavor while providing numerous health benefits. Use it in your daily cooking to enhance taste and nutrition.',
      rating: 5,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8' alt="Cooking icon" />,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8' alt="Respiratory health icon" />,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://res.cloudinary.com/day0qlfda/image/upload/v1743936513/xvk4icjonvwezme2v6tj.png' className='w-full h-full' alt="Heart and bone health icon" />,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg', price: 150 }
      ],
      image: 'https://res.cloudinary.com/day0qlfda/image/upload/v1747389121/nmlchldqlgm0ha2uhtjn.jpg',
      url: 'https://vrindanaturals.netlify.app/#product-pink-salt-packet'
    },
    {
      id: 2,
      name: 'Himalayan Pink Rock Salt - Bottle Pack',
      description: 'Natural Himalayan Pink Salt available in convenient bottle packaging. Ideal for table use and storage. Available in 1kg and 500gm sizes. The bottle packaging ensures long-lasting freshness and easy dispensing. Perfect for both kitchen and dining table use.',
      longDescription: 'Our Himalayan Pink Rock Salt in bottle packaging is designed for convenience and freshness. The airtight bottle ensures that your salt stays dry and easy to use. This premium salt contains all the natural minerals found in the Himalayan mountains, including iron which gives it the characteristic pink color. Use it as a finishing salt or in everyday cooking for enhanced flavor and nutritional benefits.',
      rating: 4.9,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8' alt="Cooking icon" />,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8' alt="Respiratory health icon" />,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://res.cloudinary.com/day0qlfda/image/upload/v1743936513/xvk4icjonvwezme2v6tj.png' className='w-full h-full' alt="Heart and bone health icon" />,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg', price: 200 },
        { size: '500gm', price: 120 }
      ],
      image: 'https://res.cloudinary.com/day0qlfda/image/upload/v1747389113/bpszqyfkjyp2hy6e8t0j.webp',
      url: 'https://vrindanaturals.netlify.app/#product-pink-salt-bottle'
    },
  ];

  const handleQuantitySelect = (productId, size, price) => {
    setSelectedQuantities({
      ...selectedQuantities,
      [productId]: { size, price }
    });
    setErrors({
      ...errors,
      [productId]: false
    });
  };

  const handleOrderClick = (product) => {
    const selectedQuantity = selectedQuantities[product.id];
    if (!selectedQuantity) {
      setErrors({
        ...errors,
        [product.id]: true
      });
      toast('⚠️ Please Select Available Quantities.');
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm interested in buying ${product.name}\n` +
      `Selected Size: ${selectedQuantity.size}\n` +
      `Price: ₹${selectedQuantity.price}`
    );

    window.open(`https://wa.me/919913007777?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Reduced stagger time for mobile
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 50 }, // Reduced y value for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Reduced duration for mobile
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 }, // Reduced scale for mobile
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6, // Reduced duration for mobile
        ease: "easeOut"
      }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y value for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Reduced duration for mobile
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-dark-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
            Premium Quality <span className="text-primary">Salt Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the pure taste and natural benefits of our carefully selected Himalayan Pink Rock Salt products.
            Each product is sourced directly from the Himalayan mountains and processed with care to preserve its natural properties.
          </p>
        </motion.div>

        <div className="space-y-20"> {/* Reduced space for mobile */}
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={index === 0 ? ref1 : ref2}
              initial="hidden"
              animate={index === 0 ? (inView1 ? "visible" : "hidden") : (inView2 ? "visible" : "hidden")}
              variants={productVariants}
              id={`product-pink-salt-${index === 0 ? 'packet' : 'bottle'}`}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-12 items-center`} // Reduced gap for mobile
            >
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }} // Reduced hover scale for mobile
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={product.image}
                    alt={`Vrinda Naturals ${product.name}`}
                    className="w-full h-auto object-cover" // Reduced image height for mobile
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} // Reduced y value for mobile
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }} // Reduced delay for mobile
                    className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full flex items-center"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6"> {/* Reduced space for mobile */}
                <motion.h3
                  variants={productVariants}
                  className="text-3xl font-bold text-white"
                >
                  {product.name}
                </motion.h3>
                <motion.div
                  variants={productVariants}
                  className="text-gray-400 text-lg leading-relaxed space-y-3" // Reduced space for mobile
                >
                  <p>{product.description}</p>
                  <p>{product.longDescription}</p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 gap-3 py-4" // Reduced gap and padding for mobile
                >
                  {product.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      variants={benefitVariants}
                      whileHover={{ scale: 1.03 }} // Reduced hover scale for mobile
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="relative mb-3"> {/* Reduced margin for mobile */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300"> {/* Reduced size for mobile */}
                          {benefit.icon}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{benefit.title}</h4> {/* Reduced margin for mobile */}
                      <p className="text-xs text-gray-400">{benefit.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={productVariants}
                  className="space-y-3" // Reduced space for mobile
                >
                  <div className="flex items-center gap-2 text-white">
                    <Scale className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">Available Quantities:</h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3"> {/* Reduced gap for mobile */}
                    {product.weights.map((weight) => (
                      <motion.div
                        key={weight.size}
                        variants={productVariants}
                        onClick={() => handleQuantitySelect(product.id, weight.size, weight.price)}
                        className={`bg-black rounded-xl p-4 text-center border cursor-pointer transition-all duration-300 ${
                          selectedQuantities[product.id]?.size === weight.size
                            ? 'border-primary shadow-lg shadow-primary/20'
                            : 'border-primary/20 hover:border-primary/50'
                        }`}
                      >
                        <div className="text-lg font-semibold text-white mb-1"> {/* Reduced text size and margin for mobile */}
                          {weight.size}
                        </div>
                        <div className="text-primary text-xl font-bold"> {/* Reduced text size for mobile */}
                          ₹{weight.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  variants={productVariants}
                  onClick={() => handleOrderClick(product)}
                  className={`inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedQuantities[product.id]
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-transparent border-dashed border border-gray-800/50 hover:border-gray-800/90 text-gray-600 cursor-not-allowed p-1'
                  }`}
                  whileHover={selectedQuantities[product.id] ? { scale: 1.03 } : {}} // Reduced hover scale for mobile
                  whileTap={selectedQuantities[product.id] ? { scale: 0.98 } : {}} // Reduced tap scale for mobile
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now
                </motion.button>

                {errors[product.id] && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    Please select a quantity to proceed.
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Products;
