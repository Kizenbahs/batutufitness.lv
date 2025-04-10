import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const VideoSection: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/'); 
    setTimeout(() => {
      const scheduleSection = document.getElementById('schedule');
      if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mt-12 text-center">
          <motion.button
            onClick={handleScheduleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[80%] max-w-[300px] rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-primary/90 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:shadow-sm active:scale-95 sm:w-auto sm:px-6 sm:py-3.5 flex items-center justify-center mx-auto"
          >
            {language === 'lv' ? 'PIETEIKTIES NODARBĪBAI' : 'BOOK NOW'}
            <FaArrowRight className="ml-2 mt-0 inline-block" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 