import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";

interface FooterProps {
  // Removing the unused language prop
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black py-8 md:py-12" id="contact">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          {/* Logo and Contact Info - Left */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <span className="text-white font-bold text-sm">BATUTU</span>
              <span className="text-[#FBBF24] font-bold text-sm">.FITNESS</span>
            </div>

            {/* Divider between logo and contact info */}
            <span className="text-[#FBBF24] hidden md:inline mx-2 h-4 flex items-center text-sm">|</span>

            {/* Contact Info - Left */}
            <div className="text-white/80 text-sm text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-4">
                <a href="tel:+37129664931" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +371 29 664 931
                </a>
                <span className="text-[#FBBF24] hidden md:inline mx-2 h-4 flex items-center text-sm">|</span>
                <span className="text-gray-400 text-sm">
                  aleksandra@batutufitness.lv
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons - Right */}
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href="https://www.facebook.com/aleksandra.kurusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.instagram.com/batutu.fitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="tel:+37129664931"
              className="text-white/70 hover:text-[#FBBF24] transition-colors"
              aria-label="Phone"
            >
              <PhoneIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://wa.me/37129664931"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FBBF24] transition-colors relative group"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 