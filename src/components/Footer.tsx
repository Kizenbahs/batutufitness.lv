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
    <footer className="bg-black py-8 md:py-12" id="contact">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <span className="text-white font-bold text-xs md:text-sm mr-2">© 2025</span>
            <span className="text-white font-bold text-xs md:text-sm">BATUTU</span>
            <span className="text-[#FBBF24] font-bold text-xs md:text-sm">.FITNESS</span>
          </div>

          {/* Contact Info - Center */}
          <div className="max-w-4xl w-full px-4 md:px-8">
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-1.5 md:space-y-0 text-white/80 text-xs md:text-sm text-center">
              <div className="flex items-center whitespace-nowrap">
                <a href="tel:+37129664931" className="text-[#FBBF24] hover:text-[#FBBF24]/80 transition-colors whitespace-nowrap">
                  +371 29 664 931
                </a>
                <span className="text-[#FBBF24] mx-4">|</span>
                <span className="text-white/80">
                  aleksandra@batutufitness.lv
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#FBBF24] mx-4">|</span>
                <span className="text-center">
                  {language === 'lv' ? 'Jūrmalas iela 14, Piņķi' : 'Jurmalas street 14, Pinki'} <span className="text-[#FBBF24] mx-4">|</span> {language === 'lv' ? 'Katrīnas iela 12, Rīga' : 'Katrinas street 12, Riga'} <span className="text-[#FBBF24] mx-4">|</span> V.0-38
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href="https://www.facebook.com/aleksandra.kurusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.instagram.com/batutu.fitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="tel:+37129664931"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Phone"
            >
              <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://wa.me/37129664931"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors relative group"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 