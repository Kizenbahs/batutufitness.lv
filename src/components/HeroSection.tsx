import React from 'react';
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
// import { BsMouse } from 'react-icons/bs'; // Removed unused import
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { language } = useLanguage();

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-screen overflow-hidden bg-gray-950"
      style={{ height: "100svh", minHeight: "800px" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.webp"
          alt="Trampoline fitness experience"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="w-full max-w-[85rem] px-4 text-center pt-28 pb-8 sm:pt-32 md:pt-36 lg:pt-40">
          {/* Main Heading */}
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8 md:mb-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <div className="relative flex flex-col items-center justify-center space-y-2 sm:block sm:space-y-0">
              <motion.span 
                className="text-white inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {language === 'lv' ? 'Kustība' : 'Movement'}
              </motion.span>
              <motion.span 
                className="text-white inline-block mx-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.15,
                  ease: "easeOut"
                }}
              >
                +
              </motion.span>
              <motion.span 
                className="text-[#FBBF24] inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                {language === 'lv' ? 'Enerģija²' : 'Energy²'}
              </motion.span>
              <motion.span 
                className="text-white inline-block mx-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.45,
                  ease: "easeOut"
                }}
              >
                =
              </motion.span>
              <motion.span 
                className="block text-white mt-2 sm:mt-0 sm:inline"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.6,
                  ease: "easeOut"
                }}
              >
                {language === 'lv' ? 'Rezultāti!' : 'Results!'}
              </motion.span>
            </div>
          </h1>

          {/* Description */}
          <motion.div
            className="mx-auto mb-8 w-full max-w-[85rem] px-4 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl sm:mb-12 md:mb-16 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <p className="font-medium">
              {language === 'lv' 
               ? <>Jaudīgākais batutu fitness Latvijā – kopā ar <span className="text-[#FBBF24]">Aleksandru Kurusovu</span>! Enerģiskākās grupu <span className="text-[#FBBF24]">nodarbības Rīgā un Piņķos</span>. Lēkā, sporto un baudi kustību kā vēl nekad!</>
               : <>Latvia's premier trampoline fitness center <span className="text-[#FBBF24]">with Alexandra Kurusova</span>. The most energetic group classes in Riga and Pinki – jump, exercise and enjoy movement like never before!</>}
            </p>
          </motion.div>

          {/* Button */}
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleScheduleClick}
              className="w-[80%] max-w-[300px] rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-primary/90 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:shadow-sm active:scale-95 sm:w-auto sm:px-6 sm:py-3.5 flex items-center justify-center mx-auto"
            >
              {language === 'lv' ? 'PIETEIKTIES NODARBĪBAI' : 'BOOK NOW'}
              <FaArrowRight className="ml-2 mt-0 inline-block" />
            </button>
          </div>

        </div> { /* End of content container (w-full max-w-[85rem]...) */ }
      </div> { /* End of relative z-10 container */ }
    </section>
  );
} 