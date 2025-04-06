import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Star, Scale, Utensils, Heart } from 'lucide-react';

function Products() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const products = [
    {
      id: 1,
      name: 'Himalayan Pink Rock Salt - Packet',
      description: 'High-quality Himalayan Pink Rock Salt packed in a sealed 1kg pouch. Rich in minerals and perfect for daily cooking. Our premium salt is sourced directly from the Himalayan mountains, ensuring the highest quality and purity. Each crystal contains essential minerals that contribute to a healthy lifestyle.',
      rating: 5,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8'></img>,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8'></img>,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://res.cloudinary.com/day0qlfda/image/upload/v1743936513/xvk4icjonvwezme2v6tj.png' className='w-full h-full' ></img>,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg', price: 150 }
      ],
      image: 'https://2.wlimg.com/product_images/bc-full/2024/10/294239/himalayan-pink-rock-salt-1729834601-7655481.jpeg'
    },
    {
      id: 2,
      name: 'Himalayan Pink Rock Salt - Bottle Pack',
      description: 'Natural Himalayan Pink Salt available in convenient bottle packaging. Ideal for table use and storage. Available in 1kg and 500gm sizes. The bottle packaging ensures long-lasting freshness and easy dispensing. Perfect for both kitchen and dining table use.',
      rating: 4.9,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8'></img>,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8'></img>,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://res.cloudinary.com/day0qlfda/image/upload/v1743936513/xvk4icjonvwezme2v6tj.png' className='w-full h-full' ></img>,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg', price: 200 },
        { size: '500gm', price: 120 }
      ],
      image: 'https://www.ambrosiaorganicfarm.com/wp-content/uploads/2022/12/himalayan-rock-salt-1.webp'
    },
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

  return (
    <section id="products" ref={ref} className="py-20 bg-dark-100">
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
            Premium Quality <span className="text-primary">Salt Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the pure taste and natural benefits of our carefully selected products.
          </p>
        </motion.div>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={productVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full flex items-center"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <motion.h3 
                  variants={productVariants}
                  className="text-3xl font-bold text-white"
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  variants={productVariants}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {product.description}
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 gap-4 py-6"
                >
                  {product.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      variants={benefitVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                          {benefit.icon}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2">{benefit.title}</h4>
                      <p className="text-xs text-gray-400">{benefit.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={productVariants}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Scale className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">Available Quantities:</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {product.weights.map((weight) => (
                      <motion.div
                        key={weight.size}
                        variants={productVariants}
                        className="bg-black rounded-xl p-6 text-center border border-primary/20"
                      >
                        <div className="text-xl font-semibold text-white mb-2">
                          {weight.size}
                        </div>
                        <div className="text-primary text-2xl font-bold">
                          ₹{weight.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.a
                  href="https://wa.me/919913007777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Products;