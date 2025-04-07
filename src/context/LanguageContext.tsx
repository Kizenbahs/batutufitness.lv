import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'lv' | 'en';
  toggleLanguage: () => void;
  setLanguage: (lang: 'lv' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'lv' | 'en'>('lv');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'lv' ? 'en' : 'lv');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 