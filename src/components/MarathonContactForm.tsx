import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

interface MarathonContactFormProps {
  language: 'lv' | 'en';
}

const MarathonContactForm: React.FC<MarathonContactFormProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

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
        reply_to: formData.email
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
    <section className="py-4 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-4 sm:p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  {language === 'lv' ? 'Vārds' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-400">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
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
                  className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 sm:py-3 px-6 rounded-lg bg-primary text-white font-bold transition-all hover:scale-105 hover:bg-primary/90 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:shadow-sm active:scale-95 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading
                  ? (language === 'lv' ? 'Sūta...' : 'Sending...')
                  : (language === 'lv' ? 'Pieteikties' : 'Register')}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarathonContactForm; 