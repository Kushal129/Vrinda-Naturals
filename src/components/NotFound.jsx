import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Clock } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-dark-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-dark-200 p-8 rounded-2xl shadow-xl text-center"
      >
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl font-bold text-primary mb-6"
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Return Home
          </motion.button>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Clock size={16} />
            <span>Redirecting in {countdown} seconds...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;