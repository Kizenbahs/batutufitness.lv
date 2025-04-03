import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 rounded ${language === 'lv' ? 'text-primary font-bold' : 'text-gray-400'}`}
        onClick={() => setLanguage('lv')}
      >
        LV
      </button>
      <button
        className={`px-2 py-1 rounded ${language === 'en' ? 'text-primary font-bold' : 'text-gray-400'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}; 