import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import MarathonContactForm from '../../components/MarathonContactForm';
import { useLanguage } from '../../context/LanguageContext';

const MarathonPage: React.FC = () => {
  const { language } = useLanguage();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
              {language === 'lv' ? 'Batutu fitnesa tievēšanas maratons' : 'Trampoline Fitness Weight Loss Marathon'}
            </h1>
            <p className="text-xl font-semibold text-yellow-400">
              {language === 'lv' 
                ? '15. aprīlis - 26. maijs'
                : 'April 15 - May 26'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Text Module Section */}
      <section className="py-16 bg-gray-900">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Existing Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="prose prose-lg prose-invert">
                {language === 'lv' ? (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">6 nedēļas. 18 batuta treniņi. Jauns Tu</h3>
                      <p className="text-gray-300 mb-4">
                        Pievienojies mūsu Batutu Fitnesa Tievēšanas Maratonam – unikālam 6 nedēļu izaicinājumam, kas apvieno efektīvus batuta treniņus ar sabalansētu uzturu un profesionālu atbalstu. Tas nav tikai par kilogramiem – tas ir par vieglumu, enerģiju un pārliecību!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kas iekļauts maratonā?</h3>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li>18 batuta fitnesa nodarbības (3x nedēļā)</li>
                        <li>Individuāli izstrādāta ēdienkarte sadarbībā ar uztura speciālistu</li>
                        <li>Iknedēļas svēršanās un apkārtmēru kontrole</li>
                        <li>Atbalsts un motivācija visā maratona laikā</li>
                      </ul>
                      <p className="text-gray-300 mt-4">
                        Piemērots visiem līmeņiem. Mēs kopā rūpēsimies par tavu labsajūtu, veselību un rezultātiem!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kad un kur?</h3>
                      <p className="text-gray-300 mb-4">
                        Startējam: 15. aprīlī<br />
                        Ilgums: līdz 26. maijam
                      </p>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li>Rīga – Joker klubs</li>
                        <li>Piņķi – Lion Gym</li>
                      </ul>
                      <p className="text-gray-300 mt-4">
                        Vietu skaits ir ierobežots – piesakies jau tagad!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Kā pieteikties?</h3>
                      <p className="text-gray-300 mb-4">
                        Vienkārši aizpildi pieteikuma formu vai uzraksti mums sociālajos tīklos – mēs ar Tevi sazināsimies personīgi.
                      </p>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li><a href="https://www.instagram.com/aleksandrakurusova/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Instagram</a> vai <a href="https://www.facebook.com/batutufitness" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Facebook</a></li>
                        <li>Tālrunis: <a href="tel:+37129664931" className="text-yellow-400 hover:text-yellow-300">+371 29 664 931</a></li>
                        <li>E-pasts: <a href="mailto:info@batutufitness.lv" className="text-yellow-400 hover:text-yellow-300">info@batutufitness.lv</a></li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">6 weeks. 18 trampoline workouts. New You</h3>
                      <p className="text-gray-300 mb-4">
                        Join our Trampoline Fitness Weight Loss Marathon – a unique 6-week challenge that combines effective trampoline workouts with balanced nutrition and professional support. It's not just about kilograms – it's about lightness, energy, and confidence!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">What's included in the marathon?</h3>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li>18 trampoline fitness classes (3x per week)</li>
                        <li>Individually designed meal plan in collaboration with a nutrition specialist</li>
                        <li>Weekly weigh-ins and circumference measurements</li>
                        <li>Support and motivation throughout the marathon</li>
                      </ul>
                      <p className="text-gray-300 mt-4">
                        Suitable for all levels. Together we'll take care of your well-being, health, and results!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">When and where?</h3>
                      <p className="text-gray-300 mb-4">
                        Start: April 15th<br />
                        Duration: until May 26th
                      </p>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li>Riga – Joker Club</li>
                        <li>Piņķi – Lion Gym</li>
                      </ul>
                      <p className="text-gray-300 mt-4">
                        Limited spots available – register now!
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">How to register?</h3>
                      <p className="text-gray-300 mb-4">
                        Simply fill out the registration form or write to us on social media – we'll contact you personally.
                      </p>
                      <ul className="text-gray-300 space-y-2 list-disc pl-6">
                        <li><a href="https://www.instagram.com/aleksandrakurusova/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Instagram</a> or <a href="https://www.facebook.com/batutufitness" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Facebook</a></li>
                        <li>Phone: <a href="tel:+37129664931" className="text-yellow-400 hover:text-yellow-300">+371 29 664 931</a></li>
                        <li>Email: <a href="mailto:info@batutufitness.lv" className="text-yellow-400 hover:text-yellow-300">info@batutufitness.lv</a></li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold text-yellow-400 mb-6 pl-0 sm:pl-12">
                  {language === 'lv' ? 'Piesakies maratonam' : 'Register for the marathon'}
                </h3>
                <MarathonContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarathonPage; 