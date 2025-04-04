import React from 'react';
import { Users, Target, Clock } from "lucide-react";

interface HeroSectionProps {
  language: 'lv' | 'en';
  onScheduleClick: (e: React.MouseEvent) => void;
  onContactClick: (e: React.MouseEvent) => void;
}

export default function HeroSection({ language, onScheduleClick, onContactClick }: HeroSectionProps) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="w-full max-w-[85rem] px-4 text-center pt-12 sm:pt-20 md:pt-24">
          {/* Main Heading */}
          <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl lg:text-6xl sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-2 sm:block">
              <span className="text-white">
                {language === 'lv' ? 'Kustība.' : 'Movement.'}
              </span>
              <span className="text-[#FBBF24]">
                {language === 'lv' ? 'Enerģija.' : 'Energy.'}
              </span>
            </div>
            <span className="block text-white mt-1 sm:mt-0 sm:inline">
              {language === 'lv' ? 'Rezultāti!' : 'Results!'}
            </span>
          </h1>

          {/* Description */}
          <div className="mx-auto mb-6 w-full max-w-4xl text-xs leading-relaxed text-white/90 sm:text-sm md:text-lg sm:mb-10 md:mb-12">
            <p className="mb-2">
              {language === 'lv' 
                ? <>Latvijas vadošais batutu fitnesa centrs <span className="text-[#FBBF24]">ar Aleksandru Kurusovu</span> piedāvā enerģiskas, efektīvas un jautras treniņa pieredzes visiem fiziskās sagatavotības līmeņiem.</>
                : <>Latvia's premier trampoline fitness center <span className="text-[#FBBF24]">with Alexandra Kurusova</span> offers energetic, effective, and fun workout experiences for all fitness levels.</>}
            </p>
            <p>
              {language === 'lv' 
                ? 'Enerģiskākās grupu nodarbības Rīgā un Piņķos – lēkā, sporto un baudi kustību kā vēl nekad!'
                : 'The most energetic group classes in Riga and Pinki – jump, exercise and enjoy movement like never before!'}
            </p>
          </div>

          {/* Three Feature Points with Icons */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 md:gap-12 lg:gap-16 sm:mb-10 md:mb-12">
            <div className="flex flex-row items-start space-x-3 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4 sm:h-12 sm:w-12">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-sm font-bold text-white sm:text-base md:text-lg">
                  {language === 'lv' ? 'Profesionāli Treneri' : 'Expert Trainers'}
                </h3>
                <p className="text-xs text-white/70 sm:text-sm">
                  {language === 'lv' 
                    ? 'Sertificēti profesionāļi vada jūsu fitnesa ceļojumu'
                    : 'Certified professionals guiding your fitness journey'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start space-x-3 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4 sm:h-12 sm:w-12 pulse-effect">
                <Target className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-sm font-bold text-white sm:text-base md:text-lg">
                  {language === 'lv' ? 'Visiem Līmeņiem' : 'All Fitness Levels'}
                </h3>
                <p className="text-xs text-white/70 sm:text-sm">
                  {language === 'lv'
                    ? 'Nodarbības piemērotas gan iesācējiem, gan entuziastiem'
                    : 'Classes designed for beginners to enthusiasts'}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start space-x-3 sm:flex-col sm:items-center sm:space-x-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 text-primary sm:mb-3 md:mb-4 sm:h-12 sm:w-12">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1 text-left sm:text-center">
                <h3 className="mb-1 text-sm font-bold text-white sm:text-base md:text-lg">
                  {language === 'lv' ? 'Elastīgs Grafiks' : 'Flexible Schedule'}
                </h3>
                <p className="text-xs text-white/70 sm:text-sm">
                  {language === 'lv'
                    ? 'Vairākas nodarbības dienā, kas pielāgojas jūsu aizņemtajam dzīvesveidam'
                    : 'Multiple classes daily to fit your busy lifestyle'}
                </p>
              </div>
            </div>
          </div>

          {/* Two Buttons */}
          <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <button
              onClick={onScheduleClick}
              className="w-[80%] max-w-[300px] rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary/90 sm:w-auto sm:px-6 sm:py-3.5"
            >
              {language === 'lv' ? 'SĀKT TRENĒTIES' : 'BOOK NOW'}
            </button>
            <button
              onClick={onContactClick}
              className="w-[80%] max-w-[300px] rounded-lg border-2 border-white/30 bg-transparent px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:border-primary hover:text-primary sm:w-auto sm:px-6 sm:py-3.5"
            >
              {language === 'lv' ? 'SKATĪT GRAFIKU' : 'VIEW SCHEDULE'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 