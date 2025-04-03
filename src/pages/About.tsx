import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaTimes, FaBars } from 'react-icons/fa';
import { Footer } from '../components/Footer';

interface AboutProps {
  language: 'lv' | 'en';
  toggleLanguage: () => void;
}

const About: React.FC<AboutProps> = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Desktop Menu */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 md:flex items-center space-x-8 text-white/80 hover:text-white transition-colors hidden">
        <Link 
          to="/"
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group"
        >
          {language === 'lv' ? 'Sākums' : 'Home'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          to="/schedule"
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group"
        >
          {language === 'lv' ? 'Nodarbības' : 'Sessions'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          to="/marathons"
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group"
        >
          {language === 'lv' ? 'Maratoni' : 'Marathons'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          to="/about"
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group"
        >
          {language === 'lv' ? 'Par mums' : 'About us'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        <a 
          href="#contacts"
          onClick={scrollToContacts}
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group"
        >
          {language === 'lv' ? 'Kontakti' : 'Contacts'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <button
          onClick={toggleLanguage}
          className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative group ml-4"
        >
          {language === 'lv' ? 'EN' : 'LV'}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white/80 hover:text-white transition-colors"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "100vh" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-sm z-40"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Items */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="fixed top-24 left-0 right-0 z-50 flex flex-col items-center space-y-6 text-center"
      >
        <Link 
          to="/"
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {language === 'lv' ? 'Sākums' : 'Home'}
        </Link>
        <Link 
          to="/schedule"
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {language === 'lv' ? 'Nodarbības' : 'Sessions'}
        </Link>
        <Link 
          to="/marathons"
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {language === 'lv' ? 'Maratoni' : 'Marathons'}
        </Link>
        <Link 
          to="/about"
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {language === 'lv' ? 'Par mums' : 'About us'}
        </Link>
        <a 
          href="#contacts"
          onClick={(e) => {
            scrollToContacts(e);
            setIsMenuOpen(false);
          }}
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
        >
          {language === 'lv' ? 'Kontakti' : 'Contacts'}
        </a>
        <button
          onClick={() => {
            toggleLanguage();
            setIsMenuOpen(false);
          }}
          className="text-lg uppercase tracking-wider text-white/90 hover:text-primary transition-colors"
        >
          {language === 'lv' ? 'EN' : 'LV'}
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {language === 'lv' ? 'Par Mums' : 'About Us'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            {language === 'lv' 
              ? 'Mēs esam vadošā batutu fitnesa studija Latvijā, kas piedāvā energiskas un efektīvas nodarbības'
              : 'We are the leading trampoline fitness studio in Latvia, offering energetic and effective classes'}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'lv' ? 'Mūsu Stāsts' : 'Our Story'}
                </h2>
                <p className="text-gray-600">
                  {language === 'lv'
                    ? 'Batutu Fitness tika izveidots ar mērķi piegādāt inovatīvus un efektīvus treniņus'
                    : 'Batutu Fitness was created with the goal of delivering innovative and effective training'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-b from-primary/20 to-primary/5 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'lv' ? 'Mūsu Misija' : 'Our Mission'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'lv'
                      ? 'Mūsu misija ir nodrošināt pieejamus un efektīvus treniņus, kas uzlabo fizisko un garīgo veselību'
                      : 'Our mission is to provide accessible and effective training that improves both physical and mental health'}
                  </p>
                </div>

                <div className="bg-gradient-to-b from-primary/20 to-primary/5 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'lv' ? 'Mūsu Vīzija' : 'Our Vision'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'lv'
                      ? 'Mēs vēlamies kļūt par vadošo batutu fitnesa studiju Baltijas valstīs'
                      : 'We aim to become the leading trampoline fitness studio in the Baltic states'}
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/schedule"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  {language === 'lv' ? 'Sākt Trenēties' : 'Start Training'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default About; 