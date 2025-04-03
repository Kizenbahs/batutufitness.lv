import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment variable
emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAIL_SERVICE_ID,
  OWNER_TEMPLATE_ID: import.meta.env.VITE_EMAIL_OWNER_TEMPLATE_ID,
  REPLY_TO: import.meta.env.VITE_OWNER_EMAIL,
  FROM_NAME: 'Batutu Fitness',
  OWNER_EMAIL: import.meta.env.VITE_OWNER_EMAIL
}; 