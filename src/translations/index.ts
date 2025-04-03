type Language = 'lv' | 'en';

export const translations = {
  lv: {
    menu: {
      classes: 'NODARBĪBAS',
      marathons: 'MARATONI',
      contacts: 'KONTAKTI',
      getStarted: 'Sākt Tagad',
    },
    schedule: {
      days: {
        monday: 'Pirmdiena',
        tuesday: 'Otrdiena',
        wednesday: 'Trešdiena',
        thursday: 'Ceturtdiena',
        friday: 'Piektdiena',
        saturday: 'Sestdiena',
        sunday: 'Svētdiena',
      },
      locations: {
        riga: 'RĪGA',
        pinki: 'PIŅĶI',
      },
    },
    footer: {
      quickLinks: 'Ātrās saites',
      locations: 'Nodarbību vietas',
      phone: 'Telefons',
      email: 'E-pasts',
      contact: 'Sazinies ar mums',
      address: {
        jokerClub: 'Joker klubs',
        jokerAddress: 'Katrīnas iela 12, Rīga',
        lionGym: 'Lion Gym',
        lionAddress: 'Jūrmalas iela 14, Piņķi',
      },
    },
    hero: {
      title: 'BATUTU FITNESS',
      subtitle: 'LATVIJĀ',
      description: '#1 batutu fitness Latvijā – kopā ar Aleksandru Kurusovu!\nEnerģiskākās grupu nodarbības Rīgā un Piņķos. Lēkā, sporto un baudi kustību kā vēl nekad!',
      startButton: 'Sākt Ceļojumu',
      learnMore: 'Uzzināt Vairāk',
      scrollDown: 'Rullē zemāk'
    },
    booking: {
      form: {
        title: 'Pieteikuma forma',
        name: 'Vārds, Uzvārds',
        email: 'E-pasta adrese',
        phone: 'Telefona numurs',
        submit: 'Apstiprināt pieteikumu',
        cancel: 'Atcelt',
        success: 'Pieteikums nosūtīts! Pārbaudiet savu e-pastu.',
        error: 'Kļūda nosūtot pieteikumu. Lūdzu, mēģiniet vēlreiz.'
      }
    },
  },
  en: {
    menu: {
      classes: 'CLASSES',
      marathons: 'MARATHONS',
      contacts: 'CONTACTS',
      getStarted: 'Get Started',
    },
    schedule: {
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
      locations: {
        riga: 'RIGA',
        pinki: 'PINKI',
      },
    },
    footer: {
      quickLinks: 'Quick Links',
      locations: 'Locations',
      phone: 'Phone',
      email: 'Email',
      contact: 'Contact Us',
      address: {
        jokerClub: 'Joker Club',
        jokerAddress: 'Katrinas Street 12, Riga',
        lionGym: 'Lion Gym',
        lionAddress: 'Jurmalas Street 14, Pinki',
      },
    },
    hero: {
      title: 'TRAMPOLINE FITNESS',
      subtitle: 'IN LATVIA',
      description: '#1 trampoline fitness in Latvia - with Alexandra Kurusova!\nThe most energetic group classes in Riga and Pinki. Jump, exercise and enjoy movement like never before!',
      startButton: 'Start Your Journey',
      learnMore: 'Learn More',
      scrollDown: 'Scroll Down'
    },
    booking: {
      form: {
        title: 'Pieteikuma forma',
        name: 'Vārds, Uzvārds',
        email: 'E-pasta adrese',
        phone: 'Telefona numurs',
        submit: 'Apstiprināt pieteikumu',
        cancel: 'Atcelt',
        success: 'Pieteikums nosūtīts! Pārbaudiet savu e-pastu.',
        error: 'Kļūda nosūtot pieteikumu. Lūdzu, mēģiniet vēlreiz.'
      }
    },
  },
} as const;

export const getTranslation = (key: string, language: Language): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}; 