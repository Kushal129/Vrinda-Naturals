import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import bgimg from '../img/mountain.png';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      {/* 404 Content Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center max-w-md"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-9xl font-bold text-primary mb-6"
        >
          404
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>

        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved. Redirecting to home in 3 seconds...
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Go back to home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
