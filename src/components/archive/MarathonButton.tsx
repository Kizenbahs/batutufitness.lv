import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const MarathonButton: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleMarathonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/marathon');
  };

  return (
    <>
      <span className="text-white/80 text-lg font-medium sm:mx-2">vai</span>
      <button
        onClick={handleMarathonClick}
        className="w-[85%] max-w-[300px] rounded-xl border-2 border-white/40 bg-black/30 backdrop-blur-sm px-6 py-3.5 text-base font-bold text-white transition-transform hover:scale-105 hover:border-primary hover:text-primary sm:w-auto sm:px-8 sm:py-4 flex items-center justify-center"
      >
        {language === 'lv' ? 'PIETEIKTIES MARATONAM' : 'JOIN MARATHON'}
      </button>
    </>
  );
}; 