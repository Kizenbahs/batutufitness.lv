import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";

interface FooterProps {
  language: 'lv' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-black py-4 md:py-8" id="contact">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white/80 text-sm md:text-base mr-2">© 2025</span>
            <span className="text-white font-bold text-base md:text-xl">BATUTU</span>
            <span className="text-[#FBBF24] font-bold text-base md:text-xl">.FITNESS</span>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-1.5 md:space-y-0 text-white/80 text-xs md:text-sm text-center md:text-left">
            <div className="flex items-center">
              <a href="tel:+37126858674" className="hover:text-[#FBBF24] transition-colors whitespace-nowrap">
                +371 26 858 674
              </a>
              <span className="text-[#FBBF24] mx-4">|</span>
              <span className="text-white/80">
                aleksandra@batutufitness.lv
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[#FBBF24] mx-4 hidden md:inline">|</span>
              <span className="text-center md:text-left">
                {language === 'lv' ? 'Jūrmalas iela 14, Piņķi' : 'Jurmalas street 14, Pinki'} <span className="text-[#FBBF24] mx-4">|</span> {language === 'lv' ? 'Katrīnas iela 12, Rīga' : 'Katrinas street 12, Riga'}
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4">
            <a
              href="https://www.facebook.com/aleksandra.kurusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.instagram.com/aleksandrakurusova/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 md:w-5 md:h-5" />
            </a>
            <a
              href="tel:+37126858674"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5 md:w-5 md:h-5" />
            </a>
            <a
              href="https://wa.me/37126858674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors relative group"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon className="w-5 h-5 md:w-5 md:h-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-8">
          <div className="border-t border-white/10 w-full md:max-w-[500px] mx-auto"></div>
          <div className="text-center pt-3 md:pt-4">
            <p className="text-xs md:text-sm text-white/50">
              © 2025 Batutu Fitness / Aleksandra Kurusova
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 