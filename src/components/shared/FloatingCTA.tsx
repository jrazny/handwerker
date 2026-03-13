import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { config } from '@/lib/config';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeigen ab 300px Scroll-Tiefe
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialer check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm"
        >
          <a 
            href={`tel:${config.company.phone}`}
            className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-white py-4 px-6 rounded-full shadow-xl font-bold text-lg border-2 border-white/20 transition-colors"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>Jetzt anrufen</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
