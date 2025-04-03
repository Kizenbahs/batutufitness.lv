"use client";

import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  language: 'lv' | 'en';
  onLanguageToggle: () => void;
}

export default function Header({ onMenuToggle, isMenuOpen, language, onLanguageToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      onMenuToggle();
    }
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      onMenuToggle();
    }
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      onMenuToggle();
    }
    setTimeout(() => {
      const scheduleSection = document.getElementById('schedule');
      if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const menuItems = [
    { 
      label: language === 'lv' ? 'GRAFIKS' : 'SCHEDULE', 
      path: "#schedule",
      onClick: handleScheduleClick 
    },
    { 
      label: language === 'lv' ? 'PAR MUMS' : 'ABOUT', 
      path: "#about",
      onClick: handleAboutClick 
    },
    { 
      label: language === 'lv' ? 'KONTAKTI' : 'CONTACTS', 
      path: "#contact",
      onClick: handleContactClick 
    },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-8 lg:px-12",
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-md"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-white font-bold text-xl md:text-2xl">
            BATUTU
          </span>
          <span className="text-[#FBBF24] font-bold text-xl md:text-2xl">
            FITNESS
          </span>
        </a>

        {/* Desktop Navigation and Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={item.onClick}
              className="text-white hover:text-[#FBBF24] transition-colors font-medium text-sm tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onLanguageToggle}
            className="text-white hover:text-[#FBBF24] transition-colors font-medium text-sm ml-2"
          >
            {language === 'lv' ? 'EN' : 'LV'}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={onLanguageToggle}
            className="text-white hover:text-[#FBBF24] transition-colors font-medium text-sm"
          >
            {language === 'lv' ? 'EN' : 'LV'}
          </button>
          <button
            onClick={onMenuToggle}
            className="text-white hover:text-[#FBBF24] transition-colors p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/95 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.path}
                    onClick={item.onClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-[#FBBF24] transition-colors font-medium text-lg tracking-wider"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 