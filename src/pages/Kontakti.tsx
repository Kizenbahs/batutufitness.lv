import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FacebookIcon, InstagramIcon, PhoneIcon, MessageCircleIcon, MailIcon, MapPin } from 'lucide-react';

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
        backgroundImage: 'url("/batutu-fitness-maratons.webp")',
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
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-12">
              {language === 'lv' ? (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kontaktinformācija</h3>
                    <div className="text-gray-300 space-y-6">
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                        <a href="tel:+37129664931" className="hover:text-[#FBBF24]">
                          +371 29 664 931
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <MailIcon className="h-5 w-5 text-gray-400" />
                        <span className="hover:text-[#FBBF24]">
                          aleksandra@batutufitness.lv
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Mūsu nodarbību adreses</h3>
                      <div className="text-gray-300 space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                          <div>
                            <p>Joker klubs</p>
                            <p>Katrīnas iela 12, Rīga</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                          <div>
                            <p>Lion Gym</p>
                            <p className="mb-0">Jūrmalas iela 14, Piņķi</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
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
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Information</h3>
                    <div className="text-gray-300 space-y-6">
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                        <a href="tel:+37129664931" className="hover:text-[#FBBF24]">
                          +371 29 664 931
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MailIcon className="h-5 w-5 text-gray-400" />
                        <span className="hover:text-[#FBBF24]">
                          aleksandra@batutufitness.lv
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Our class locations</h3>
                      <div className="text-gray-300 space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                          <div>
                            <p>Joker Club</p>
                            <p>Katrinas Street 12, Riga</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                          <div>
                            <p>Lion Gym</p>
                            <p className="mb-0">Jurmalas Street 14, Pinki</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
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
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.img
              src="/batutu-fitness-aleksandra-kurusova.webp"
              alt={language === 'lv' ? 'Aleksandra Kurusova' : 'Aleksandra Kurusova'}
              className="rounded-lg shadow-lg mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakti; 