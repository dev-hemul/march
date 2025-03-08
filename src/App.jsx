import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heart from "../public/heart.jpg";

export default function LoveQuestion() {
  const [showNoButton, setShowNoButton] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoButton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-pink-600 text-center mb-6"
      >
        Ти мене любиш? ❤️
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setShowImage(true)}
          className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md transition hover:bg-green-600"
        >
          Так 💖
        </button>

        <AnimatePresence>
          {showNoButton && (
            <motion.button
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-3 bg-gray-400 text-white text-lg font-bold rounded-lg shadow-md"
            >
              Ні 💔
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {showImage && (
          <motion.img
            src={heart}
            alt="Любовь"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 rounded-lg shadow-lg w-64 sm:w-80"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
