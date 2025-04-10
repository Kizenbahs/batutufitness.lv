import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
  question: {
    lv: string;
    en: string;
  };
  answer: {
    lv: string;
    en: string;
  };
}

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/'); 
    setTimeout(() => {
      const scheduleSection = document.getElementById('schedule');
      if (scheduleSection) {
        scheduleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const faqItems: FAQItem[] = [
    {
      question: {
        lv: "Vai man vajag iepriekšēju fizisko sagatavotību?",
        en: "Do I need previous fitness experience?"
      },
      answer: {
        lv: "Nē! Mūsu nodarbības ir draudzīgas iesācējiem – tu pielāgo intensitāti sev piemērotā līmenī.",
        en: "No! Our classes are beginner-friendly – you adjust the intensity to your comfortable level."
      }
    },
    {
      question: {
        lv: "Ko vilkt uz nodarbību?",
        en: "What to wear to class?"
      },
      answer: {
        lv: "Ērts sporta apģērbs un zeķes ar neslīdošu zoli. Batutus nodrošinām mēs!",
        en: "Comfortable workout clothes and non-slip socks. We provide the trampolines!"
      }
    },
    {
      question: {
        lv: "Cik ilga ir viena nodarbība?",
        en: "How long is one session?"
      },
      answer: {
        lv: "Viena nodarbība ilgst 60 minūtes.",
        en: "One session lasts 60 minutes."
      }
    },
    {
      question: {
        lv: "Kur notiek nodarbības?",
        en: "Where are the classes held?"
      },
      answer: {
        lv: "Nodarbības notiek Joker klubs, Katrīnas iela 12, Rīga un Lion Gym, Jūrmalas iela 14, Piņķi",
        en: "Classes are held at Joker Club, Katrinas Street 12, Riga and Lion Gym, Jurmalas Street 14, Pinki"
      }
    },
    {
      question: {
        lv: "Kad notiek nodarbības?",
        en: "When are the classes held?"
      },
      answer: {
        lv: `Nodarbību grafiku varat skatīt sadaļā - Nodarbību grafiks. Nodarbību laiki tiek regulāri atjaunoti. Seko mums Instagram un Facebook, lai nepalaistu garām savu vietu! Neskaidrību vai jautājumu gadījumā varat zvanīt vai rakstīt WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a>`,
        en: `You can view the class schedule in the Schedule section. Class times are regularly updated. Follow us on Instagram and Facebook to secure your spot! For any questions or concerns, you can call or text via WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a>`
      }
    },
    {
      question: {
        lv: "Kā es varu pieteikties nodarbībām?",
        en: "How can I sign up for classes?"
      },
      answer: {
        lv: `Raksti un piesakies WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a> vai šeit tiešsaistē`,
        en: `Write and sign up via WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a> or book online here`
      }
    }
  ];

  return (
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
            {faqItems.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {language === 'lv' ? item.question.lv : item.question.en}
                </h3>
                <div className="text-gray-300 space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: language === 'lv' ? item.answer.lv : item.answer.en }}>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <motion.button
            onClick={handleScheduleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[80%] max-w-[300px] rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-primary/90 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 active:shadow-sm active:scale-95 sm:w-auto sm:px-6 sm:py-3.5 flex items-center justify-center mx-auto"
          >
            {language === 'lv' ? 'PIETEIKTIES NODARBĪBAI' : 'BOOK NOW'}
            <FaArrowRight className="ml-2 mt-0 inline-block" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 