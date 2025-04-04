import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Footer } from './components/Footer';
import { Schedule } from './components/Schedule';
import Header from './components/Header';
import AboutUsSection from './components/AboutUsSection';
import HeroSection from './components/HeroSection';
import FAQ from './components/FAQ';
import { MaintenanceNotification } from './components/MaintenanceNotification';

function App() {
  const [language, setLanguage] = useState<'lv' | 'en'>('lv');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const onLanguageToggle = () => setLanguage(prev => prev === 'lv' ? 'en' : 'lv');

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app-container">
        <MaintenanceNotification language={language} isEnabled={false} />
        <Header 
          language={language} 
          onLanguageToggle={onLanguageToggle}
          isMenuOpen={isMenuOpen}
          onMenuToggle={onMenuToggle}
        />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection 
                  language={language} 
                  onScheduleClick={handleScheduleClick}
                  onContactClick={handleContactClick}
                />
                <AboutUsSection language={language} />
                <Schedule language={language} />
                <FAQ language={language} />
                <Footer language={language} />
              </>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App; 