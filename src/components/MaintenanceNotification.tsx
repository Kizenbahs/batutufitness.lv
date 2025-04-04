import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MaintenanceNotificationProps {
  language: 'lv' | 'en';
}

export const MaintenanceNotification: React.FC<MaintenanceNotificationProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm shadow-lg"
        >
          <div className="max-w-3xl text-center">
            <p className="text-sm md:text-base">
              <span className="text-[#FBBF24] font-semibold">
                {language === 'lv' ? 'Mājaslapa izstrādes režīmā' : 'Website in Development Mode'}
              </span>
              <span className="text-white/90 ml-2">
                {language === 'lv' 
                  ? '- mēs aktīvi strādājam, lai drīzumā piedāvātu jums pilnvērtīgu vietni!'
                  : '- we are actively working to bring you the full experience soon!'}
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 