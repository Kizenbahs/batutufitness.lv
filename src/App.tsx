import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/Layout/MainLayout';
import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/about/index.tsx'));
const Sessions = lazy(() => import('./pages/Sessions.tsx'));
const Marathon = lazy(() => import('./pages/marathon/index.tsx'));
const BUJ = lazy(() => import('./pages/BUJ.tsx'));
const Kontakti = lazy(() => import('./pages/Kontakti.tsx'));
const Video = lazy(() => import('./pages/Video.tsx'));

function App(): JSX.Element {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent): void => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);

    // Test PostHog event
    posthog.capture('app_loaded', {
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <MainLayout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sessions" element={<Sessions />} />
              <Route path="/marathon" element={<Marathon />} />
              <Route path="/buj" element={<BUJ />} />
              <Route path="/kontakti" element={<Kontakti />} />
              <Route path="/batutu-fitness-video" element={<Video />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </MainLayout>
        <Analytics />
      </Router>
    </LanguageProvider>
  );
}

export default App; 