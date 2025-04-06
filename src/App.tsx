import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/Layout/MainLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/about/index.tsx'));
const Sessions = lazy(() => import('./pages/Sessions.tsx'));
const Marathon = lazy(() => import('./pages/marathon/index.tsx'));

function App() {
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App; 