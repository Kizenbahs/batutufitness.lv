import React, { Suspense, useState, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Footer } from './components/Footer';
import { Schedule } from './components/Schedule';
import Header from './components/Header';
import AboutUsSection from './components/AboutUsSection';
import HeroSection from './components/HeroSection';
import FAQ from './components/FAQ';
import { MaintenanceNotification } from './components/MaintenanceNotification';

// Lazy load the Marathon page
const MarathonPage = lazy(() => import('./pages/marathon'));

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
            <Route path="/marathon" element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <MarathonPage language={language} onLanguageToggle={onLanguageToggle} />
              </Suspense>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App; 