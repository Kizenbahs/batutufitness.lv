import React, { useState } from 'react';
import { SelectedSession } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

interface BookingFormProps {
  selectedSessions: SelectedSession[];
  onClose: () => void;
  onSuccess: () => void;
  language: string;
  onRemoveSession: (session: SelectedSession) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedSessions,
  onClose,
  onSuccess,
  language,
  onRemoveSession
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const formatSessionsForEmail = (sessions: SelectedSession[]) => {
    return sessions.map(session => 
      `${session.day} - ${session.time} - ${session.location} - ${session.type}`
    ).join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Format sessions for email
      const sessionsText = formatSessionsForEmail(selectedSessions);

      // Create email data with multiple possible field names for the message
      const emailData = {
        to_email: formData.email,
        to_name: formData.name,
        from_name: 'Batutu Fitness',
        sender_name: 'Batutu Fitness',
        from: 'Batutu Fitness',
        message: sessionsText,
        content: sessionsText,
        body: sessionsText,
        text: sessionsText,
        phone: formData.phone,
        reply_to: EMAIL_CONFIG.REPLY_TO
      };

      // Send email to customer
      const customerEmailResult = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        emailData
      );

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

      // Send notification email to business owner
      const ownerEmailResult = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.OWNER_TEMPLATE_ID,
        ownerEmailData
      );

      if (customerEmailResult.status === 200 && ownerEmailResult.status === 200) {
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
                  <button
                    onClick={() => onRemoveSession(session)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={language === 'lv' ? 'Dzēst treniņu' : 'Remove session'}
                  >
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {language === 'lv' ? 'Vārds, Uzvārds' : 'Full Name'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {language === 'lv' ? 'E-pasts' : 'Email'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {language === 'lv' ? 'Telefons' : 'Phone'}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 text-red-400 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            {/* Actions */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                disabled={loading}
              >
                {language === 'lv' ? 'Atcelt' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {loading 
                  ? (language === 'lv' ? 'Notiek pieteikšanās...' : 'Booking...') 
                  : (language === 'lv' ? 'Apstiprināt' : 'Confirm')}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              Paldies, pieteikums saņemts! Mēs sazināsimies pavisam drīz!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 