import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, PhoneIcon, MessageCircleIcon, MailIcon } from 'lucide-react';

const Kontakti: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative" style={{ 
        backgroundImage: 'url("/image.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'lv' ? 'Kontakti' : 'Contact Us'}
            </h1>
            <p className="text-xl font-semibold text-yellow-400">
              {language === 'lv' ? 'Sazinies ar mums' : 'Get in touch with us'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="space-y-12">
              {language === 'lv' ? (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kontaktinformācija</h3>
                    <div className="text-gray-300 space-y-6">
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-5 w-5 text-[#FBBF24]" />
                        <a href="tel:+37129664931" className="hover:text-[#FBBF24]">
                          +371 29 664 931
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MailIcon className="h-5 w-5 text-[#FBBF24]" />
                        <span className="hover:text-[#FBBF24]">
                          aleksandra@batutufitness.lv
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Sazinies arī</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/aleksandra.kurusova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/aleksandrakurusova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="h-6 w-6" />
                      </a>
                      <a
                        href="https://wa.me/37129664931"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircleIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Information</h3>
                    <div className="text-gray-300 space-y-6">
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-5 w-5 text-[#FBBF24]" />
                        <a href="tel:+37129664931" className="hover:text-[#FBBF24]">
                          +371 29 664 931
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MailIcon className="h-5 w-5 text-[#FBBF24]" />
                        <span className="hover:text-[#FBBF24]">
                          aleksandra@batutufitness.lv
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/aleksandra.kurusova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/aleksandrakurusova/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="h-6 w-6" />
                      </a>
                      <a
                        href="https://wa.me/37129664931"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FBBF24] transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircleIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blue spacer section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Empty section for spacing */}
        </div>
      </section>
    </div>
  );
};

export default Kontakti; 