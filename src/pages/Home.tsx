import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import { Schedule } from '../components/Schedule';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutUsSection />
      <Schedule />
    </div>
  );
};

export default Home; 