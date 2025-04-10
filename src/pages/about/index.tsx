import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle button click - navigates to schedule
  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/'); 
    setTimeout(() => {
      const scheduleSection = document.getElementById('schedule');
      if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay
  };

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
              {language === 'lv' ? 'Enerģija, kas iedvesmo' : 'Energy that inspires'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
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
                        Mūsu nodarbības piemērotas gan sievietēm, gan vīriešiem – jebkurā vecumā un sagatavotības līmenī.
                      </p>
                      <p className="text-xl font-semibold text-yellow-400 mb-4">Aleksandra Kurusova</p>
                      <p>
                        Aleksandra ir daudzkārtēja Latvijas sporta deju čempione un starptautisku sacensību uzvarētāja, kā arī pieredzējusi sporta deju trenere. Viņa ir <a href="https://lsfp.lv/sporta_registrs/sertificetie_sporta_specialisti?name=aleksandra+kurusova&category=0&sport=0&type=0" className="text-yellow-400" target="_blank" rel="noopener noreferrer">C kategorijas sertificēta sporta trenere</a> – skatīt sertifikāciju – ar plašu profesionālo pieredzi gan Latvijā, gan ārvalstīs.
                      </p>
                      <p>
                        Aleksandra vada dinamiskus un enerģētiski uzlādējošus grupu batutu treniņus, kas apvieno ritmisku kustību, deju elementus un efektīvus kardio vingrinājumus. Viņas vadībā treniņi kļūst ne tikai par lielisku fiziskās formas uzlabošanas veidu, bet arī par pozitīvas enerģijas avotu, kas motivē atgriezties vēl un vēl.
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
                        Batutu Fitness with Aleksandra Kurusova is the first training concept of its kind in Latvia. Here we combine intense cardio, strength and balance exercises with the joy of jumping on a trampoline.
                      </p>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Results that amaze</h3>
                      <p>
                        Our classes are suitable for both women and men - regardless of age or fitness level.
                      </p>
                      <p className="text-xl font-semibold text-yellow-400 mb-4">Aleksandra Kurusova</p>
                      <p>
                        Aleksandra is a multiple Latvian ballroom dance champion and winner of international competitions, as well as an experienced ballroom dance coach. She is a <a href="https://lsfp.lv/sporta_registrs/sertificetie_sporta_specialisti?name=aleksandra+kurusova&category=0&sport=0&type=0" className="text-yellow-400" target="_blank" rel="noopener noreferrer">Category C certified sports coach</a> – see certification – with extensive professional experience both in Latvia and abroad.
                      </p>
                      <p>
                        Aleksandra leads dynamic and energetically charging group trampoline workouts that combine rhythmic movement, dance elements, and effective cardio exercises. Under her guidance, training becomes not only an excellent way to improve physical fitness but also a source of positive energy that motivates you to return again and again.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.img
              src="/aleksandra-kurusova.webp"
              alt="Aleksandra Kurusova"
              className="rounded-lg shadow-lg mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Orange CTA Button - Adjusting spacing */}
        <div className="mt-12 text-center">
          <motion.button
            onClick={handleScheduleClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[80%] max-w-[300px] rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-primary/90 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:shadow-sm active:scale-95 sm:w-auto sm:px-6 sm:py-3.5 flex items-center justify-center mx-auto"
          >
            {language === 'lv' ? 'PIETEIKTIES NODARBĪBAI' : 'BOOK NOW'}
            <FaArrowRight className="ml-2 mt-0 inline-block" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 