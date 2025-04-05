import React from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
import { MaintenanceNotification } from '../MaintenanceNotification';

interface MainLayoutProps {
  children: React.ReactNode;
  language: 'lv' | 'en';
  onLanguageToggle: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  language,
  onLanguageToggle
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const onMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <MaintenanceNotification language={language} isEnabled={false} />
      <Header
        language={language}
        onLanguageToggle={onLanguageToggle}
        isMenuOpen={isMenuOpen}
        onMenuToggle={onMenuToggle}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 