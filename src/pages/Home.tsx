import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import { Schedule } from '../components/Schedule';
import FAQ from '../components/FAQ';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutUsSection />
      <Schedule />
      <FAQ language={language} />
    </div>
  );
};

export default Home; 