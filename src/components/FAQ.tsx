import React, { useState } from 'react';

interface FAQProps {
  language: string;
}

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

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        lv: `Ērti pieteikties varat šeit tiešsaistē vai pieteikties WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a>`,
        en: `You can easily sign up online here or via WhatsApp <a href="https://wa.me/37129664931" target="_blank" class="text-primary hover:underline">+371 29 664 931</a>`
      }
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'lv' ? 'Biežāk uzdotie jautājumi' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'lv' 
              ? 'Atbildes uz populārākajiem jautājumiem batutu fitnesa nodarbībām'
              : 'Answers to the most common questions about trampoline fitness classes'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700 hover:border-primary/30 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold text-white">
                  {language === 'lv' ? item.question.lv : item.question.en}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-5 h-5 text-gray-400" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: language === 'lv' ? item.answer.lv : item.answer.en }}>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 