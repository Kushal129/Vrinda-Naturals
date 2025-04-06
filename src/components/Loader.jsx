import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="fixed inset-0 bg-dark-100 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative w-16 h-16"
      >
        <div className="absolute inset-0 border-4 border-primary rounded-full opacity-20" />
        <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
      </motion.div>
    </div>
  );
}

export default Loader;