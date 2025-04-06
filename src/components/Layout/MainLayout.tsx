import React from 'react';
import Header from '../Header';
import { MaintenanceNotification } from '../MaintenanceNotification';
import { useLanguage } from '../../context/LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language } = useLanguage();
  const onMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <MaintenanceNotification language={language} isEnabled={false} />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}; 