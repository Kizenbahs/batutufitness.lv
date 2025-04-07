import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const MarathonContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to April 14, 2025 at 23:59:59 in local timezone
    const targetDate = new Date('2025-04-14T23:59:59');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run immediately and then every second
    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timerId);
  }, []); // Empty dependency array = run once on mount

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : String(num);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 8) { // Only allow up to 8 digits
      setFormData({ ...formData, phone: value });
      setPhoneError('');
    }
  };

  const validatePhone = () => {
    if (formData.phone.length !== 8) {
      setPhoneError(language === 'lv' 
        ? 'Tālruņa numuram jābūt 8 ciparus garam'
        : 'Phone number must be 8 digits long');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!formData.email.includes('.')) {
      setEmailError(language === 'lv' 
        ? 'E-pasta adresei jāsatur punkts'
        : 'Email address must contain a dot');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (isLoading) {
      return;
    }
    
    if (!validatePhone()) {
      return;
    }

    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const emailData = {
        to_email: EMAIL_CONFIG.OWNER_EMAIL,
        to_name: 'Batutu Fitness Admin',
        from_name: 'Batutu Fitness Marathon',
        subject: `Marathon Registration - ${formData.name}`,
        message: `JAUNS MARATONA PIETEIKUMS / NEW MARATHON REGISTRATION\n\n` +
                `Klienta informācija / Customer Details:\n` +
                `------------------------\n` +
                `Vārds / Name: ${formData.name}\n` +
                `E-pasts / Email: ${formData.email}\n` +
                `Telefons / Phone: ${formData.phone}`,
        reply_to: formData.email,
        // Add a unique identifier to prevent duplicate submissions
        timestamp: new Date().toISOString()
      };

      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.OWNER_TEMPLATE_ID,
        emailData
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        
        // Scroll to top of the page after successful submission
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Marathon registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-0 sm:py-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 p-4 sm:p-8 rounded-lg border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                  {language === 'lv' ? 'Vārds' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-black/30 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                  {language === 'lv' ? 'E-pasts' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setEmailError('');
                  }}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-black/30 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-400">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                  {language === 'lv' ? 'Tālrunis' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  pattern="[0-9]{8}"
                  maxLength={8}
                  className="w-full px-3 sm:px-4 py-2 bg-black/30 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg bg-[#128c7e] text-white font-bold uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-[#0a6b5f] shadow-lg shadow-[#128c7e]/30 hover:shadow-xl hover:shadow-[#128c7e]/40 active:shadow-md active:scale-[0.98] ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading
                  ? (language === 'lv' ? 'SŪTA...' : 'SENDING...')
                  : (language === 'lv' ? 'GRIBU PIETEIKTIES' : 'REGISTER')}
                {!isLoading && <FaArrowRight className="ml-2 -mt-1 inline-block" />}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center text-sm sm:text-base">
                  {language === 'lv'
                    ? 'Paldies! Mēs drīzumā ar jums sazināsimies.'
                    : 'Thank you! We will contact you soon.'}
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-center text-sm sm:text-base">
                  {language === 'lv'
                    ? 'Kļūda! Lūdzu, mēģiniet vēlreiz.'
                    : 'Error! Please try again.'}
                </p>
              )}
            </form>

            <div className="mt-8">
              <p className="text-center text-white/80 mb-2">
                {language === 'lv' ? 'Līdz maratona sākumam:' : 'Time until marathon:'}
              </p>
              <div className="grid auto-cols-max grid-flow-col gap-1 sm:gap-2 text-center justify-center">
                <div className="bg-black/50 rounded-lg text-white flex flex-col p-1 min-w-[60px]">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#cccccc]">
                    {formatNumber(time.days)}
                  </span>
                  <span className="text-xs sm:text-sm mt-1">{language === 'lv' ? 'dienas' : 'days'}</span>
                </div>
                <div className="bg-black/50 rounded-lg text-white flex flex-col p-1 min-w-[60px]">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#cccccc]">
                    {formatNumber(time.hours)}
                  </span>
                  <span className="text-xs sm:text-sm mt-1">{language === 'lv' ? 'stundas' : 'hours'}</span>
                </div>
                <div className="bg-black/50 rounded-lg text-white flex flex-col p-1 min-w-[60px]">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#cccccc]">
                    {formatNumber(time.minutes)}
                  </span>
                  <span className="text-xs sm:text-sm mt-1">{language === 'lv' ? 'min' : 'min'}</span>
                </div>
                <div className="bg-black/50 rounded-lg text-white flex flex-col p-1 min-w-[60px]">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#cccccc]">
                    {formatNumber(time.seconds)}
                  </span>
                  <span className="text-xs sm:text-sm mt-1">{language === 'lv' ? 'sek' : 'sec'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarathonContactForm; 