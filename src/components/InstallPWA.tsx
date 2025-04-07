import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPWA() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check when the user last dismissed the prompt
    const lastDismissedTime = localStorage.getItem('pwaPromptDismissedTime');
    const now = Date.now();
    
    // Show prompt if it's been more than 3 days since last dismissal (or never dismissed)
    const shouldShowPrompt = !lastDismissedTime || 
      (now - parseInt(lastDismissedTime)) > (3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

    if (shouldShowPrompt) {
      const handler = (e: Event) => {
        e.preventDefault();
        setPromptEvent(e as BeforeInstallPromptEvent);
        setSupportsPWA(true);
        setIsVisible(true);
      };

      window.addEventListener('beforeinstallprompt', handler);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!promptEvent) {
      return;
    }

    await promptEvent.prompt();
    const result = await promptEvent.userChoice;
    
    if (result.outcome === 'accepted') {
      // If installed, never show again
      localStorage.setItem('pwaPromptInstalled', 'true');
      setIsVisible(false);
    } else {
      // If dismissed, save the current time
      localStorage.setItem('pwaPromptDismissedTime', Date.now().toString());
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    // Save the current time when dismissed
    localStorage.setItem('pwaPromptDismissedTime', Date.now().toString());
    setIsVisible(false);
  };

  if (!supportsPWA || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-black/95 backdrop-blur-md 
                   shadow-lg rounded-lg p-4 z-50 border border-[#FBBF24]/20"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                {language === 'lv' ? 'Instalēt aplikāciju' : 'Install App'}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {language === 'lv' 
                  ? 'Instalējiet Batutu Fitness aplikāciju savā ierīcē, lai ātri piekļūtu nodarbību grafikam un jaunumiem!' 
                  : 'Install Batutu Fitness app on your device for quick access to class schedules and updates!'}
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleInstallClick}
                  className="bg-[#FBBF24] text-black px-4 py-2 rounded-md font-medium hover:bg-[#FBBF24]/90 transition-colors"
                >
                  {language === 'lv' ? 'Instalēt' : 'Install'}
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-white px-4 py-2 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  {language === 'lv' ? 'Vēlāk' : 'Not now'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 