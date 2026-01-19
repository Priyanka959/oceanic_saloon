'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { BookButton } from './modules/book-button';

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed right-8 bottom-8 z-40"
        >
          <div className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-lg bg-[#0a0a0a] px-4 py-2 whitespace-nowrap text-white shadow-xl"
                >
                  <span className="text-sm font-medium">Book Appointment</span>
                  <div className="absolute top-1/2 right-0 h-0 w-0 translate-x-full -translate-y-1/2 border-y-4 border-l-8 border-y-transparent border-l-[#0a0a0a]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#c5a47e]/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setShowTooltip(true)}
              onHoverEnd={() => setShowTooltip(false)}
            >
              <BookButton
                size="lg"
                className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[#c5a47e] to-[#b89468] p-0 shadow-2xl hover:from-[#b89468] hover:to-[#c5a47e]"
              >
                <Calendar className="h-6 w-6" />
              </BookButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
