import React, { useState } from 'react';
import { SelectedSession } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';
import { useLanguage } from '../context/LanguageContext';

interface BookingFormProps {
  selectedSessions: SelectedSession[];
  onClose: () => void;
  onSuccess: () => void;
  onRemoveSession: (session: SelectedSession) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedSessions,
  onClose,
  onSuccess,
  onRemoveSession
}) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const formatSessionsForEmail = (sessions: SelectedSession[]) => {
    return sessions.map(session => 
      `${session.day} - ${session.time} - ${session.location} - ${session.type}`
    ).join('\n');
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
    
    if (!validatePhone()) {
      return;
    }

    if (!validateEmail()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Format sessions for email
      const sessionsText = formatSessionsForEmail(selectedSessions);

      // Create owner notification data
      const ownerEmailData = {
        to_email: EMAIL_CONFIG.OWNER_EMAIL,
        to_name: 'Batutu Fitness Admin',
        from_name: 'Batutu Fitness Booking System',
        sender_name: 'Batutu Fitness Booking System',
        from: 'Batutu Fitness Booking System',
        subject: `New Booking - ${formData.name}`,
        message: `JAUNS PIETEIKUMS / NEW BOOKING\n\n` +
                `Klienta informācija / Customer Details:\n` +
                `------------------------\n` +
                `Vārds / Name: ${formData.name}\n` +
                `E-pasts / Email: ${formData.email}\n` +
                `Telefons / Phone: ${formData.phone}\n\n` +
                `Izvēlētās nodarbības / Booked Sessions:\n` +
                `------------------------\n` +
                `${sessionsText}`,
        content: `JAUNS PIETEIKUMS / NEW BOOKING\n\n` +
                `Klienta informācija / Customer Details:\n` +
                `------------------------\n` +
                `Vārds / Name: ${formData.name}\n` +
                `E-pasts / Email: ${formData.email}\n` +
                `Telefons / Phone: ${formData.phone}\n\n` +
                `Izvēlētās nodarbības / Booked Sessions:\n` +
                `------------------------\n` +
                `${sessionsText}`,
        phone: formData.phone,
        customer_email: formData.email,
        customer_name: formData.name,
        reply_to: formData.email
      };

      // Send notification email to business owner only
      const ownerEmailResult = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.OWNER_TEMPLATE_ID,
        ownerEmailData
      );

      if (ownerEmailResult.status === 200) {
        // Show success message
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onSuccess();
        }, 2000);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
        
        // Remove booked sessions
        selectedSessions.forEach(session => onRemoveSession(session));
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError(language === 'lv' 
        ? 'Kļūda nosūtot pieteikumu. Lūdzu, mēģiniet vēlreiz vai sazinieties ar mums.'
        : 'Error submitting booking. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-xl font-bold text-white">
              {language === 'lv' ? 'Pieteikties treniņiem' : 'Book Training Sessions'}
            </h2>
          </div>

          {/* Selected Sessions */}
          <div className="border-b border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              {language === 'lv' ? 'Izvēlētie treniņi' : 'Selected Sessions'}
            </h3>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
              {selectedSessions.map((session, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-black/30 rounded-lg p-3 relative group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-primary font-medium">
                        {session.day}
                      </span>
                      <span className="text-white text-lg font-semibold">
                        {session.time}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-sm">
                        {session.location}
                      </span>
                      <span className="text-white">
                        {session.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">
                      {session.duration}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {session.trainer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  {language === 'lv' ? 'Vārds' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  {language === 'lv' ? 'E-pasts' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2 bg-gray-800 border ${
                    emailError ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-500">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                  {language === 'lv' ? 'Telefons' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-2 bg-gray-800 border ${
                    phoneError ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                )}
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {language === 'lv' ? 'Atcelt' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-primary text-white rounded-lg font-medium transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'lv' ? 'Nosūta...' : 'Sending...'}
                  </span>
                ) : (
                  language === 'lv' ? 'Pieteikties' : 'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {language === 'lv' ? 'Pieteikums veiksmīgi nosūtīts!' : 'Booking submitted successfully!'}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 