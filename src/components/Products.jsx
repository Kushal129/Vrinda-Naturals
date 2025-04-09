import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Star, Info, Clock, Package, Check } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function Products() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Himalayan Pink Rock Salt - Packet',
      description: 'High-quality Himalayan Pink Rock Salt packed in a sealed 1kg pouch. Rich in minerals and perfect for daily cooking. Our premium salt is sourced directly from the Himalayan mountains, ensuring the highest quality and purity.',
      rating: 5,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8' alt="Cooking" />,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8' alt="Respiratory" />,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/2966/2966327.png' className='w-8 h-8' alt="Heart" />,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg - Pink Rock Salt', price: 75 }
      ],
      image: 'https://jivikaorganics.in/cdn/shop/files/HimalayanRocksalt1.jpg?v=1689672006&width=533'
    },
    {
      id: 2,
      name: 'Himalayan Pink Rock Salt - Bottle Pack',
      description: 'Natural Himalayan Pink Salt available in convenient bottle packaging. Ideal for table use and storage. The bottle packaging ensures long-lasting freshness and easy dispensing. Perfect for both kitchen and dining table use.',
      rating: 4.9,
      benefits: [
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/3449/3449449.png' className='w-8 h-8' alt="Cooking" />,
          title: "COOKING",
          description: "Perfect for all cooking needs"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/1834/1834842.png' className='w-8 h-8' alt="Respiratory" />,
          title: "RESPIRATORY HEALTH",
          description: "Improves breathing naturally"
        },
        {
          icon: <img src='https://cdn-icons-png.flaticon.com/512/2966/2966327.png' className='w-8 h-8' alt="Heart" />,
          title: "HEART & BONE",
          description: "Supports cardiovascular health"
        }
      ],
      weights: [
        { size: '1kg - Pink Rock Salt Bottle', price: 99 }
      ],
      image: 'https://www.ambrosiaorganicfarm.com/wp-content/uploads/2022/12/himalayan-rock-salt-1.webp'
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

  const handleShareProduct = (product, weight) => {
    const formattedMessage = `
*New Order Request*

*Product Details:*
Product: ${product.name}
Package: ${weight.size}
Price: ₹${weight.price}
Rating: ${product.rating}/5

*Product Benefits:*
${product.benefits.map(b => `${b.title}\n ${b.description}`).join('\n')}

*Customer Note:*
I would like to place an order for this product. Please provide payment and delivery details.

*Shipping Information Required:*
- Full Name
- Complete Address
- Contact Number
- Preferred Payment Method

Thank you! Looking forward to your response.`.trim();

    navigator.clipboard.writeText(formattedMessage).then(() => {
      toast.success('Product details copied!', {
        icon: '📋',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    });

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919574476496?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOrderClick = (product) => {
    if (!selectedProduct || !selectedWeight || selectedProduct.id !== product.id) {
      toast.error('Please select a package first!', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    handleShareProduct(selectedProduct, selectedWeight);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const ProductCard = ({ product }) => (
    <motion.div
      variants={cardVariants}
      className={`group relative bg-gradient-to-b from-black via-primary/5 to-black rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] ${
        selectedProduct?.id === product.id 
        ? 'ring-2 ring-primary/30 ring-offset-2 ring-offset-black'
        : 'border border-primary/10'
      }`}
    >
      <div className="relative overflow-hidden bg-black/50">
        <div className="aspect-[16/9] relative">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain object-center transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm z-10">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium">{product.rating}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 leading-tight">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">{product.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {product.benefits.map((benefit, idx) => (
            <div key={idx} className="text-center group/benefit bg-black/30 rounded-xl p-3 sm:p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover/benefit:bg-primary/20">
                {benefit.icon}
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{benefit.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 text-white">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-semibold">Choose Your Package:</span>
          </div>

          <div className="space-y-3">
            {product.weights.map((weight) => (
              <motion.button
                key={weight.size}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedWeight(weight);
                  toast.success('Package selected', {
                    icon: '✓',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff',
                    },
                  });
                }}
                className={`w-full p-3 sm:p-4 rounded-xl border transition-all duration-300 flex justify-between items-center ${
                  selectedProduct?.id === product.id && selectedWeight === weight
                    ? 'border-primary bg-primary/10'
                    : 'border-primary/20 bg-black/50 hover:border-primary/50'
                }`}
              >
                <div className="text-sm sm:text-lg font-semibold text-white">{weight.size}</div>
                <div className="flex items-center gap-3">
                  <div className={`text-lg sm:text-xl font-bold ${
                    selectedProduct?.id === product.id && selectedWeight === weight
                      ? 'text-primary'
                      : 'text-primary/80'
                  }`}>₹{weight.price}</div>
                  {selectedProduct?.id === product.id && selectedWeight === weight && (
                    <div className="bg-primary/20 rounded-full p-1.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOrderClick(product)}
            disabled={!selectedProduct || selectedProduct.id !== product.id || !selectedWeight}
            className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              selectedProduct?.id === product.id && selectedWeight
                ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                : 'bg-primary/20 text-white/20 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            Place Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const ComingSoonCard = ({ product }) => (
    <motion.div
      variants={cardVariants}
      className="group relative bg-gradient-to-b from-black via-primary/5 to-black rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/10"
    >
      <div className="relative overflow-hidden bg-black/50">
        <div className="aspect-[16/9] relative">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain object-center transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm z-10">
          <Clock className="w-4 h-4" />
          <span className="text-sm sm:text-base font-medium">Coming Soon</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 leading-tight">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">{product.description}</p>

        <div className="space-y-4">
          <div className="flex items-center gap-2 sm:gap-3 text-white mb-3 sm:mb-4">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base font-semibold">Available Variants:</span>
          </div>

          <div className="space-y-3">
            {product.variants.map((variant, idx) => (
              <div 
                key={idx}
                className="p-3 sm:p-4 rounded-xl border border-primary/20 bg-black/50 flex justify-between items-center"
              >
                <div className="text-sm sm:text-lg font-semibold text-white">{variant.name}</div>
                <div className="text-lg sm:text-xl font-bold text-primary/80">₹{variant.price}</div>
              </div>
            ))}
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold bg-primary/20 text-white/50 cursor-not-allowed mt-4 sm:mt-6"
            disabled
          >
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            Launching Soon
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="products" ref={ref} className="py-16 sm:py-20 md:py-24 bg-black min-h-screen">
      <Toaster position="top-center" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/10 text-primary px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Premium Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight"
          >
            Our Signature <span className="text-primary">Salt Products</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the purity of Himalayan Pink Salt, carefully sourced and packaged for your wellness journey.
          </motion.p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {/* Available Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="space-y-8 sm:space-y-10">
            <motion.div variants={cardVariants} className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Coming <span className="text-primary">Soon</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Exciting new products are on the horizon! Stay tuned for these upcoming additions to our collection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {comingSoonProducts.map((product) => (
                <ComingSoonCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Products;
