import React from 'react';
import { Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface HeroSectionProps {
  language: 'lv' | 'en';
  onScheduleClick: (e: React.MouseEvent) => void;
}

export default function HeroSection({ language, onScheduleClick }: HeroSectionProps) {
  const navigate = useNavigate();

  const handleMarathonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/marathon');
  };

  return (
    <section
      className="relative w-screen overflow-hidden bg-gray-950"
      style={{ height: "100svh" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.webp"
          alt="Trampoline fitness experience"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="w-full max-w-[85rem] px-4 text-center pt-16 sm:pt-20 md:pt-24">
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
                {language === 'lv' ? 'Kustība.' : 'Movement.'}
              </motion.span>
              <motion.span 
                className="text-[#FBBF24] inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.15,
                  ease: "easeOut"
                }}
              >
                {language === 'lv' ? 'Enerģija²' : 'Energy²'}
              </motion.span>
              <motion.span 
                className="block text-white mt-2 sm:mt-0 sm:inline"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                {language === 'lv' ? 'Rezultāti!' : 'Results!'}
              </motion.span>
            </div>
          </h1>

          {/* Description */}
          <motion.div
            className="mx-auto mb-8 w-full max-w-2xl px-2 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl sm:mb-12 md:mb-16 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            <p className="mb-4 font-medium">
              {language === 'lv' 
                ? <>Pirmais batutu fitness Latvijā – kopā ar <span className="text-[#FBBF24]">Aleksandru Kurusovu</span>!</>
                : <>Latvia's premier trampoline fitness center <span className="text-[#FBBF24]">with Alexandra Kurusova</span> offers effective and fun workout experiences for all fitness levels.</>}
            </p>
            <p className="leading-relaxed">
              {language === 'lv' 
                ? <>Enerģiskākās grupu <span className="text-[#FBBF24]">nodarbības Rīgā un Piņķos</span>. Lēkā, sporto un baudi kustību kā vēl nekad!</>
                : 'The most energetic group classes in Riga and Pinki – jump, exercise and enjoy movement like never before!'}
            </p>
          </motion.div>

          {/* Three Feature Points with Icons */}
          <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-12 sm:mb-12 md:mb-16">
            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-4 md:mb-5 sm:h-14 sm:w-14 shadow-lg shadow-primary/20">
                <Users className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-base font-bold text-white sm:text-lg md:text-xl">
                  {language === 'lv' ? 'Profesionāli treneri' : 'Expert Trainers'}
                </h3>
                <p className="text-sm text-white/80 sm:text-base">
                  {language === 'lv' 
                    ? 'Nodarbības profesionāļu vadībā'
                    : 'Certified professionals guiding your fitness journey'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-4 md:mb-5 sm:h-14 sm:w-14 shadow-lg shadow-primary/20 pulse-effect">
                <Target className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-base font-bold text-white sm:text-lg md:text-xl">
                  {language === 'lv' ? 'Visiem līmeņiem' : 'All Fitness Levels'}
                </h3>
                <p className="text-sm text-white/80 sm:text-base">
                  {language === 'lv'
                    ? 'Piemērotas gan sievietēm, gan vīriešiem'
                    : 'Classes designed for beginners to enthusiasts'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-4 md:mb-5 sm:h-14 sm:w-14 shadow-lg shadow-primary/20">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-base font-bold text-white sm:text-lg md:text-xl">
                  {language === 'lv' ? 'Elastīgs grafiks' : 'Flexible Schedule'}
                </h3>
                <p className="text-sm text-white/80 sm:text-base">
                  {language === 'lv'
                    ? 'Sporto sev izdevīgā laikā un vietā'
                    : 'Multiple classes daily to fit your busy lifestyle'}
                </p>
              </div>
            </div>
          </div>

          {/* Two Buttons */}
          <div className="flex w-full flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
            <button
              onClick={onScheduleClick}
              className="w-[85%] max-w-[300px] rounded-xl bg-[#FBBF24] px-6 py-3.5 text-base font-bold text-black transition-all hover:scale-105 hover:bg-[#FBBF24]/90 shadow-md shadow-[#FBBF24]/30 hover:shadow-lg hover:shadow-[#FBBF24]/40 active:shadow-sm active:scale-95 sm:w-auto sm:px-8 sm:py-4"
            >
              {language === 'lv' ? 'NODARBĪBAS' : 'CLASSES'}
            </button>
            <button
              onClick={handleMarathonClick}
              className="w-[85%] max-w-[300px] rounded-xl border-2 border-white/40 bg-black/30 backdrop-blur-sm px-6 py-3.5 text-base font-bold text-white transition-transform hover:scale-105 hover:border-primary hover:text-primary sm:w-auto sm:px-8 sm:py-4 flex items-center justify-center"
            >
              {language === 'lv' ? 'PIESAKIES MARATONAM' : 'JOIN MARATHON'}
              <FaArrowRight className="ml-2 mt-0 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 