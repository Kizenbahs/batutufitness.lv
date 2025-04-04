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
        lv: "Vai man ir nepieciešama iepriekšēja pieredze?",
        en: "Do I need previous experience?"
      },
      answer: {
        lv: "Nē, iepriekšēja pieredze nav nepieciešama. Mūsu nodarbības ir piemērotas visiem līmeņiem, un treneri sniegs individuālus padomus.",
        en: "No, previous experience is not required. Our classes are suitable for all levels, and trainers will provide individual guidance."
      }
    },
    {
      question: {
        lv: "Kas man jāņem līdzi uz nodarbību?",
        en: "What should I bring to class?"
      },
      answer: {
        lv: "Ērtus sporta tērpus, ūdeni un dvieli. Viss pārējais nepieciešamais inventārs būs pieejams uz vietas.",
        en: "Comfortable workout clothes, water, and a towel. All other necessary equipment will be provided on site."
      }
    },
    {
      question: {
        lv: "Cik ilga ir viena nodarbība?",
        en: "How long is one session?"
      },
      answer: {
        lv: "Viena nodarbība ilgst 55 minūtes, kas ietver iesildīšanos un atsildīšanos.",
        en: "One session lasts 55 minutes, which includes warm-up and cool-down."
      }
    },
    {
      question: {
        lv: "Vai ir kādi vecuma ierobežojumi?",
        en: "Are there any age restrictions?"
      },
      answer: {
        lv: "Nodarbības ir piemērotas personām no 16 gadu vecuma. Jaunākiem dalībniekiem nepieciešama vecāku atļauja.",
        en: "Classes are suitable for individuals aged 16 and above. Younger participants require parental consent."
      }
    },
    {
      question: {
        lv: "Kā es varu pieteikties nodarbībai?",
        en: "How can I sign up for a class?"
      },
      answer: {
        lv: "Jūs varat pieteikties nodarbībai, izmantojot mūsu tiešsaistes grafiku vai sazinoties ar mums pa tālruni.",
        en: "You can sign up for a class using our online schedule or by contacting us by phone."
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
              ? 'Atbildes uz populārākajiem jautājumiem par mūsu batutu fitnesa nodarbībām'
              : 'Answers to the most common questions about our trampoline fitness classes'}
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
                  openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">
                  {language === 'lv' ? item.answer.lv : item.answer.en}
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