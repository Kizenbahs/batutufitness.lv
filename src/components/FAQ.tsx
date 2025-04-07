import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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
      </div>
    </section>
  );
};

export default FAQ; 