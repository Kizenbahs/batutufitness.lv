import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import { Schedule } from '../components/Schedule';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutUsSection />
      <Schedule />
    </div>
  );
};

export default Home; 