import React, { useState, useEffect } from 'react';
import { Users, Target, Clock } from "lucide-react";

interface HeroSectionProps {
  language: 'lv' | 'en';
  onScheduleClick: (e: React.MouseEvent) => void;
  onContactClick: (e: React.MouseEvent) => void;
}

export default function HeroSection({ language, onScheduleClick, onContactClick }: HeroSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-950"
      style={{ height: "100svh" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image.webp"
          alt="Trampoline fitness experience"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5">
        <div className="w-full max-w-[90rem] text-center">
          {/* Main Heading */}
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6 md:mb-8">
            <span className="text-white">
              {language === 'lv' ? 'Kustība.' : 'Movement.'}
            </span>
            <span className="text-[#FBBF24]">
              {language === 'lv' ? 'Enerģija.' : 'Energy.'}
            </span>
            <span className="text-white">
              {language === 'lv' ? 'Rezultāti' : 'Results'}
            </span>
          </h1>

          {/* Description */}
          <div className="mx-auto mb-6 w-full max-w-3xl text-sm leading-snug text-white/90 sm:text-base md:text-lg sm:mb-8 md:mb-12">
            <p className="mb-0.5">
              {language === 'lv' 
                ? 'Latvijas vadošais batutu fitnesa centrs kopā ar Aleksandru Kurusovu piedāvā enerģiskas, efektīvas un jautras treniņa pieredzes visiem fiziskās sagatavotības līmeņiem.'
                : 'Latvia\'s premier trampoline fitness center with Alexandra Kurusova offers energetic, effective, and fun workout experiences for all fitness levels.'}
            </p>
            <p className="whitespace-normal sm:whitespace-nowrap">
              {language === 'lv' 
                ? 'Enerģiskākās grupu nodarbības Rīgā un Piņķos – lēkā, sporto un baudi kustību kā vēl nekad!'
                : 'The most energetic group classes in Riga and Pinki – jump, exercise and enjoy movement like never before!'}
            </p>
          </div>

          {/* Three Feature Points with Icons */}
          <div className="mb-6 grid grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:gap-8 md:gap-12 lg:gap-16 sm:mb-8 md:mb-12">
            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-left sm:text-center">
                <h3 className="mb-0.5 text-base font-bold text-white sm:text-lg">
                  {language === 'lv' ? 'Profesionāli Treneri' : 'Expert Trainers'}
                </h3>
                <p className="text-sm text-white/70">
                  {language === 'lv' 
                    ? 'Sertificēti profesionāļi vada jūsu fitnesa ceļojumu'
                    : 'Certified professionals guiding your fitness journey'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-left sm:text-center">
                <h3 className="mb-0.5 text-base font-bold text-white sm:text-lg">
                  {language === 'lv' ? 'Visiem Līmeņiem' : 'All Fitness Levels'}
                </h3>
                <p className="text-sm text-white/70">
                  {language === 'lv'
                    ? 'Nodarbības piemērotas gan iesācējiem, gan entuziastiem'
                    : 'Classes designed for beginners to enthusiasts'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-4 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-left sm:text-center">
                <h3 className="mb-0.5 text-base font-bold text-white sm:text-lg">
                  {language === 'lv' ? 'Elastīgs Grafiks' : 'Flexible Schedule'}
                </h3>
                <p className="text-sm text-white/70">
                  {language === 'lv'
                    ? 'Vairākas nodarbības dienā, kas pielāgojas jūsu aizņemtajam dzīvesveidam'
                    : 'Multiple classes daily to fit your busy lifestyle'}
                </p>
              </div>
            </div>
          </div>

          {/* Two Buttons */}
          <div className="flex w-full flex-col space-y-3 px-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 sm:px-0">
            <button
              onClick={onScheduleClick}
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary/90 sm:w-auto"
            >
              {language === 'lv' ? 'SĀKT TRENĒTIES' : 'BOOK NOW'}
            </button>
            <button
              onClick={onContactClick}
              className="w-full rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:border-primary hover:text-primary sm:w-auto"
            >
              {language === 'lv' ? 'SKATĪT GRAFIKU' : 'VIEW SCHEDULE'}
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer sm:bottom-8"
          style={{
            transform: `translate(-50%, ${scrollPosition * 0.2}px)`,
            opacity: Math.max(0, 1 - scrollPosition / 300),
          }}
          onClick={onScheduleClick}
        >
          <div className="flex flex-col items-center">
            <p className="mb-1 text-xs text-white/70 sm:text-sm">
              {language === 'lv' ? 'Uzzināt Vairāk' : 'Discover More'}
            </p>
            <div className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full border border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 