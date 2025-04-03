import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('scR1M1iDqwYE75s6r');

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_88084ew',
  TEMPLATE_ID: 'template_4pbdxzk',      // Customer notification template
  OWNER_TEMPLATE_ID: 'template_4pbdxzk', // You should create a new template for owner notifications and put its ID here
  REPLY_TO: 'girts.kizenbahs@gmail.com',
  FROM_NAME: 'Batutu Fitness',
  OWNER_EMAIL: 'girts.kizenbahs@gmail.com'
}; 