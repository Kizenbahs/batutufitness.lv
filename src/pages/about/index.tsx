import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with H1 */}
      <section className="pt-32 pb-20 relative" style={{ 
        backgroundImage: 'url("/batutu-fitness-maratons.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'lv' ? 'Par mums' : 'About Us'}
            </h1>
            <p className="text-xl font-semibold text-yellow-400">
              Enerģija, kas iedvesmo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="space-y-12">
              {language === 'lv' ? (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kustība, kas aizrauj</h3>
                    <div className="text-gray-300 space-y-6">
                      <p>
                        Batutu Fitness ar Aleksandru Kurusovu ir pirmais šāda veida treniņu koncepts Latvijā. Šeit mēs apvienojam intensīvu kardio, spēka un līdzsvara vingrinājumus ar prieku, ko sniedz lēkāšana uz batuta.
                      </p>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Rezultāti, kas pārsteidz</h3>
                      <p>
                        Aleksandra ir mūsu galvenā trenere – harizmātiska, pieredzējusi un ar neizsīkstošu enerģiju, kas aizrauj ikvienu. Katra nodarbība ir kā neliels svētku brīdis, kur ķermenis strādā, bet dvēsele priecājas!
                      </p>
                      <p>
                        Mūsu nodarbības piemērotas gan sievietēm, gan vīriešiem – jebkurā vecumā un sagatavotības līmenī.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Movement that captivates</h3>
                    <div className="text-gray-300 space-y-6">
                      <p>
                        Batutu Fitness is more than just a fitness studio – it's a place where everyone can find their path to a healthy and active lifestyle. We believe that fitness can be an exciting and enjoyable process that provides both physical and emotional well-being.
                      </p>
                      <p>
                        Batutu Fitness with Aleksandrs Kurusovs is the first training concept of its kind in Latvia. Here we combine intense cardio, strength and balance exercises with the joy of jumping on a trampoline.
                      </p>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Results that amaze</h3>
                      <p>
                        Aleksandra is our head trainer – charismatic, experienced and with inexhaustible energy that captivates everyone. Each class is like a small celebration where the body works and the soul rejoices!
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 