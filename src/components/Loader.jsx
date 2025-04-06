import { motion } from 'framer-motion';
import rocketImage from '../img/mountain.png';

function RocketLoader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0], // Fade in and out
          scale: [0.9, 1, 0.9], // Subtle scaling for depth
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative w-24 h-24 mb-4"
      >
        <img
          src={rocketImage}
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.p
        className="text-white text-lg font-medium mt-4"
      >
        {"Loading".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "reverse"
            }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: 0.7
          }}
        >
          ...
        </motion.span>
      </motion.p>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: Math.random() * 2,
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RocketLoader;