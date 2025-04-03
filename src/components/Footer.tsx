import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
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
            <span className="text-white font-bold text-lg md:text-2xl">BATUTU</span>
            <span className="text-[#FBBF24] font-bold text-lg md:text-2xl">FITNESS</span>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-1.5 md:space-y-0 md:space-x-2 text-white/80 text-xs md:text-sm text-center md:text-left">
            <div className="flex items-center space-x-1.5 md:space-x-2">
              <a href="tel:+37126858674" className="hover:text-[#FBBF24] transition-colors whitespace-nowrap">
                +371 26 858 674
              </a>
              <span className="text-[#FBBF24]">|</span>
              <a href="mailto:aleksandra@batutufitness.lv" className="hover:text-[#FBBF24] transition-colors">
                aleksandra@batutufitness.lv
              </a>
            </div>
            <div className="flex items-center space-x-1.5 md:space-x-2">
              <span className="text-[#FBBF24] hidden md:inline">|</span>
              <span className="text-center md:text-left">
                {language === 'lv' ? 'Jūrmalas iela 14, Piņķi' : 'Jurmalas street 14, Pinki'} <span className="text-[#FBBF24]">|</span> {language === 'lv' ? 'Katrīnas iela 12, Rīga' : 'Katrinas street 12, Riga'}
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
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5 md:w-5 md:h-5" />
            </a>
            <a
              href="tel:+37126858674"
              className="text-white/70 hover:text-[#FBBF24] transition-colors group relative"
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5 md:w-5 md:h-5" />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                +371 26 858 674
              </span>
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
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                +371 26 858 674
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-8 pt-3 md:pt-4 border-t border-white/10 text-center">
          <p className="text-xs md:text-sm text-white/50">
            © 2025 Batutu Fitness / Aleksandra Kurusova
          </p>
        </div>
      </div>
    </footer>
  );
}; 