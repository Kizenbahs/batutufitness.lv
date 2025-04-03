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
    <footer className="bg-black py-6 md:py-8" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl md:text-2xl">BATUTU</span>
            <span className="text-[#FBBF24] font-bold text-xl md:text-2xl">FITNESS</span>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 text-white/80 text-sm text-center md:text-left">
            <div className="flex items-center space-x-2">
              <a href="tel:+37126858674" className="hover:text-[#FBBF24] transition-colors whitespace-nowrap">
                +371 26 858 674
              </a>
              <span className="text-[#FBBF24]">|</span>
              <a href="mailto:aleksandra@batutufitness.lv" className="hover:text-[#FBBF24] transition-colors">
                aleksandra@batutufitness.lv
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#FBBF24] hidden md:inline">|</span>
              <span className="text-center md:text-left">
                {language === 'lv' ? 'Jūrmalas iela 14, Piņķi' : 'Jurmalas street 14, Pinki'} <span className="text-[#FBBF24]">|</span> {language === 'lv' ? 'Katrīnas iela 12, Rīga' : 'Katrinas street 12, Riga'}
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <a
              href="tel:+37126858674"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/37126858674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors relative"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBBF24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FBBF24]"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © 2025 Batutu Fitness / Aleksandra Kurusova
          </p>
        </div>
      </div>
    </footer>
  );
}; 