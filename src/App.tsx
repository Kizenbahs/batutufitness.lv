import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';
import { PricingTable } from './components/PricingTable';
import { Footer } from './components/Footer';
import { Schedule } from './components/Schedule';
import Header from './components/Header';
import AboutUsSection from './components/AboutUsSection';
import HeroSection from './components/HeroSection';

// Lazy load pages
const About = React.lazy(() => import('./pages/About'));
const Sessions = React.lazy(() => import('./pages/Sessions'));

function App() {
  const [language, setLanguage] = useState<'lv' | 'en'>('lv');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'lv' ? 'en' : 'lv');
  };

  const scrollToSchedule = (e: React.MouseEvent) => {
    e.preventDefault();
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header 
          language={language}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          onLanguageToggle={toggleLanguage}
        />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/about" element={<About language={language} toggleLanguage={toggleLanguage} />} />
            <Route path="/schedule" element={<Sessions language={language} toggleLanguage={toggleLanguage} />} />
            <Route path="/" element={
              <main>
                <HeroSection 
                  language={language}
                  onScheduleClick={scrollToSchedule}
                  onContactClick={scrollToContacts}
                />
                <AboutUsSection language={language} />
                <PricingTable language={language} />
                <section id="schedule" className="py-16 bg-black relative overflow-hidden">
                  <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-white mb-4">
                        {language === 'lv' ? 'Nodarbību grafiks' : 'Class schedule'}
                      </h2>
                      <p className="text-gray-400">
                        {language === 'lv' 
                          ? 'Izvēlieties sev piemērotāko laiku un vietu' 
                          : 'Choose the most convenient time and location'}
                      </p>
                    </div>
                    <Schedule language={language} />
                  </div>
                </section>
              </main>
            } />
          </Routes>
        </Suspense>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App; 