import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';

interface MarathonPageProps {
  language: 'lv' | 'en';
  onLanguageToggle: () => void;
}

const MarathonPage: React.FC<MarathonPageProps> = ({ language, onLanguageToggle }) => {
  return (
    <MainLayout language={language} onLanguageToggle={onLanguageToggle}>
      {/* Hero Section with H1 */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'lv' ? 'Batutu Fitnesa Tievēšanas Maratons' : 'Trampoline Fitness Weight Loss Marathon'}
            </h1>
            <p className="text-gray-400">
              {language === 'lv' 
                ? '6 nedēļas. 18 batuta treniņi. Jauns Tu!'
                : '6 weeks. 18 trampoline workouts. New You!'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Text Module Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg prose-invert">
              {language === 'lv' ? (
                <>
                  <p className="text-gray-300 mb-6">
                    Batutu maratons ir īpaši izstrādāts 2 stundu treniņš, kas apvieno kardio un spēka vingrinājumus uz batutiem. Šis intensīvais treniņš ir piemērots gan iesācējiem, gan pieredzējušiem sportistiem.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Ko sagaidīt no maratona:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>Profesionālu treneru vadība</li>
                    <li>Individuāla pieeja katram dalībniekam</li>
                    <li>Dažādu intensitātes līmeņu vingrinājumi</li>
                    <li>Enerģiska mūzika un pozitīva atmosfēra</li>
                  </ul>
                  <p className="text-gray-300 mt-6">
                    Pēc maratona būs pieejami atspirdzinoši dzērieni un veselīgas uzkodas.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-300 mb-6">
                    The Trampoline Marathon is a specially designed 2-hour workout that combines cardio and strength exercises on trampolines. This intensive training is suitable for both beginners and experienced athletes.
                  </p>
                  <p className="text-gray-300 mb-6">
                    What to expect from the marathon:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>Professional trainer guidance</li>
                    <li>Individual approach to each participant</li>
                    <li>Exercises of various intensity levels</li>
                    <li>Energetic music and positive atmosphere</li>
                  </ul>
                  <p className="text-gray-300 mt-6">
                    Refreshing drinks and healthy snacks will be available after the marathon.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MarathonPage; 