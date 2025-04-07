import React from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
import InstallPWA from '../InstallPWA';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <InstallPWA />
      <Footer />
    </div>
  );
}; 