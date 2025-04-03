import React, { useState } from 'react';

interface PricingTableProps {
  language: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ language }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      title: language === 'lv' ? 'Grupu Treniņš' : 'Group Training',
      subtitle: language === 'lv' ? 'Treniņš un Konsultācijas' : 'Coach and Exercise',
      price: billingPeriod === 'monthly' ? 59 : 590,
      features: [
        '60 Minute Sessions',
        'Private Gym',
        'Get 1-on-1 training'
      ]
    },
    {
      title: language === 'lv' ? 'Privātais Treniņš' : 'Private Training',
      subtitle: language === 'lv' ? 'Treniņš un Konsultācijas' : 'Coach and Exercise',
      price: billingPeriod === 'monthly' ? 119 : 1190,
      popular: true,
      features: [
        '60 Minute Sessions',
        'Private Gym',
        'Get 1-on-1 training'
      ]
    },
    {
      title: language === 'lv' ? 'Atlētu Treniņš' : 'Athlete Training',
      subtitle: language === 'lv' ? 'Treniņš un Konsultācijas' : 'Coach and Exercise',
      price: billingPeriod === 'monthly' ? 159 : 1590,
      features: [
        '60 Minute Sessions',
        'Private Gym',
        'Get 1-on-1 training'
      ]
    }
  ];

  return (
    <section className="py-16 pb-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'lv' ? 'Nodarbību cenas' : 'Class prices'}
          </h2>
          <p className="text-gray-400">
            {language === 'lv' 
              ? 'Izvēlies sev piemērotāko treniņu veidu' 
              : 'Choose the training type that suits you best'}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'lv' ? 'MĒNEŠA' : 'MONTHLY'}
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'lv' ? 'GADA' : 'YEARLY'}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary shadow-[0_0_15px_rgba(255,153,0,0.2)]'
                  : 'bg-black/30 border border-gray-800'
              } p-8 group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,153,0,0.15)] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                    {language === 'lv' ? 'Populārākā Izvēle' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div className="text-center mb-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{plan.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{plan.subtitle}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white group-hover:text-primary transition-colors">{plan.price}€</span>
                  <span className="text-gray-400 ml-2 group-hover:text-gray-300 transition-colors">
                    {billingPeriod === 'monthly' 
                      ? (language === 'lv' ? '/mēnesī' : '/month')
                      : (language === 'lv' ? '/gadā' : '/year')}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                  >
                    <svg 
                      className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 