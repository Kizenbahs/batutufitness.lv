"use client";

import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    navigate('/about');
  };

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (location.pathname !== '/') {
      navigate('/#schedule');
    } else {
      setTimeout(() => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
          scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleMarathonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    navigate('/marathon');
  };

  const handleBUJClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    navigate('/buj');
  };

  const handleKontaktiClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    navigate('/kontakti');
  };

  const menuItems = [
    { 
      label: language === 'lv' ? 'NODARBĪBAS' : 'SCHEDULE', 
      path: "#schedule",
      onClick: handleScheduleClick 
    },
    { 
      label: language === 'lv' ? 'PAR MUMS' : 'ABOUT US', 
      path: "/about",
      onClick: handleAboutClick 
    },
    { 
      label: language === 'lv' ? 'BUJ' : 'FAQ', 
      path: "/buj",
      onClick: handleBUJClick 
    },
    { 
      label: language === 'lv' ? 'MARATONS' : 'MARATHON', 
      path: "/marathon",
      onClick: handleMarathonClick 
    },
    { 
      label: language === 'lv' ? 'KONTAKTI' : 'CONTACT', 
      path: "/kontakti",
      onClick: handleKontaktiClick 
    }
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
        <a 
          href="/" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <span className="text-white font-bold text-xl md:text-2xl mr-1">
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
              className="group relative text-white transition-colors font-medium text-sm tracking-wider hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="group relative text-white transition-colors font-medium text-sm ml-2 hover:text-white"
          >
            {language === 'lv' ? 'EN' : 'LV'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="group relative text-white transition-colors font-medium text-base hover:text-white"
          >
            {language === 'lv' ? 'EN' : 'LV'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="text-white hover:text-[#FBBF24] transition-colors p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <MenuIcon className="h-10 w-10" />
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
              <div className="flex flex-col items-center py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    onClick={item.onClick}
                    className="text-white hover:text-[#FBBF24] transition-colors font-medium text-lg tracking-wider px-6 py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 