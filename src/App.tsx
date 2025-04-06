import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import { Schedule } from './components/Schedule';
import FAQ from './components/FAQ';
import { Footer } from './components/Footer';
import { routes } from './routes/routes';
import { getRouteLabel } from './routes/routes';

// Lazy load pages
const MarathonPage = lazy(() => import('./pages/marathon'));
const AboutPage = lazy(() => import('./pages/about'));

// Main content component that uses language context
const AppContent = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUsSection />
            <Schedule />
            <FAQ language={language} />
          </>
        } />
        <Route path="/marathon" element={
          <Suspense fallback={<div>Loading...</div>}>
            <MarathonPage />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App; 