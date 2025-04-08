import { motion } from "framer-motion";
import { Users, Heart, Star } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';

export default function AboutUsSection() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="relative bg-white pt-24 pb-16 sm:pt-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'lv' ? 'Par mums' : 'About'}
          </h2>
          <p className="text-gray-400">
            {language === 'lv' 
              ? 'Batutu fitnesa centrs Latvijā' 
              : 'Trampoline fitness center in Latvia'}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FBBF24]/20 to-[#FBBF24]/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-50/50 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FBBF24]/10">
                <Star className="h-6 w-6 text-[#FBBF24]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {language === 'lv' ? 'Kustība, kas aizrauj' : 'Movement that captivates'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'lv'
                  ? 'Batutu Fitness ar Aleksandru Kurusovu ir pirmais šāda veida treniņu koncepts Latvijā. Šeit mēs apvienojam intensīvu kardio, spēka un līdzsvara vingrinājumus ar prieku, ko sniedz lēkāšana uz batuta.'
                  : 'Batutu Fitness with Aleksandrs Kurusovs is the first training concept of its kind in Latvia. Here we combine intense cardio, strength and balance exercises with the joy of jumping on a trampoline.'}
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FBBF24]/20 to-[#FBBF24]/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-50/50 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FBBF24]/10">
                <Heart className="h-6 w-6 text-[#FBBF24]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {language === 'lv' ? 'Enerģija, kas iedvesmo' : 'Energy that inspires'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'lv'
                  ? 'Harizmātiskā trenere Aleksandra iedvesmo ikvienu, padarot katru nodarbību par svētkiem!'
                  : 'Charismatic trainer Alexandra inspires everyone, making each session a celebration!'}
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FBBF24]/20 to-[#FBBF24]/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gray-50/50 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FBBF24]/10">
                <Users className="h-6 w-6 text-[#FBBF24]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {language === 'lv' ? 'Rezultāti, kas pārsteidz' : 'Results that amaze'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'lv'
                  ? 'Mūsu nodarbības piemērotas gan sievietēm, gan vīriešiem – jebkurā vecumā un sagatavotības līmenī.'
                  : 'Our classes are suitable for both women and men – at any age and fitness level.'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-600 text-sm">
            <span className="font-medium text-gray-900">Lion Gym</span>, {language === 'lv' ? 'Jūrmalas iela 14, Piņķi' : 'Jurmalas street 14, Pinki'} 
            <span className="mx-2 text-[#FBBF24]">|</span> 
            <span className="font-medium text-gray-900">Joker Club</span>, {language === 'lv' ? 'Katrīnas iela 12, Rīga' : 'Katrinas street 12, Riga'}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 