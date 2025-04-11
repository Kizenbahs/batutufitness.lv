import { RouteObject } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/about';
import FAQPage from './pages/BUJ';
import HomePage from './pages/Home';
import MarathonPage from './pages/marathon';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'faq',
        element: <FAQPage />
      },
      {
        path: 'marathon',
        element: <MarathonPage />
      }
    ]
  }
]; 