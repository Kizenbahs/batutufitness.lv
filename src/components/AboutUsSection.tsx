interface AboutUsSectionProps {
  language: 'lv' | 'en';
}

export default function AboutUsSection({ language }: AboutUsSectionProps) {
  return (
    <section
      id="about"
      className="bg-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
      data-pol-id="h5cxw3"
      data-pol-file-name="about-us-section"
      data-pol-file-type="component"
    >
      <div
        className="mx-auto max-w-7xl"
        data-pol-id="iuqbqk"
        data-pol-file-name="about-us-section"
        data-pol-file-type="component"
      >
        <div
          className="mb-8 md:mb-10 text-center"
          data-pol-id="g5kf7b"
          data-pol-file-name="about-us-section"
          data-pol-file-type="component"
        >
          <h2
            className="mb-4 md:mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
            data-pol-id="kuf5dx"
            data-pol-file-name="about-us-section"
            data-pol-file-type="component"
          >
            {language === 'lv' ? 'Par mums' : 'About'}{" "}
            <span
              className="text-[#F7A600]"
              data-pol-id="bkhgj1"
              data-pol-file-name="about-us-section"
              data-pol-file-type="component"
            >
              {language === 'lv' ? '' : 'BATUTU FITNESS'}
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-gray-600 text-base md:text-sm mb-3"
            data-pol-id="lfoxvm"
            data-pol-file-name="about-us-section"
            data-pol-file-type="component"
          >
            {language === 'lv'
              ? 'Batutu Fitness ar Aleksandru Kurusovu – pirmais šāda veida treniņš Latvijā. Intensīvs kardio, spēka un līdzsvara treniņš apvienots ar lēkāšanas prieku.\n\nHarizmātiskā trenere Aleksandra iedvesmo ikvienu, padarot katru nodarbību par svētkiem! Piemērots visiem – jebkurā vecumā un sagatavotībā.'
              : 'Batutu Fitness with Alexandra Kurusova – the first training of its kind in Latvia. Intensive cardio, strength and balance training combined with the joy of jumping.\n\nCharismatic trainer Alexandra inspires everyone, making each session a celebration! Suitable for everyone – at any age and fitness level.'}
          </p>
          <p
            className="mx-auto max-w-2xl text-gray-600 text-base md:text-sm"
            data-pol-id="second-description"
            data-pol-file-name="about-us-section"
            data-pol-file-type="component"
          >
            {language === 'lv'
              ? 'Enerģiskas grupu nodarbības – Lion Gym, Jūrmalas iela 14, Piņķi un Joker klubs, Katrīnas iela 12, Rīga.'
              : 'The most energetic group workouts – Lion Gym, Jurmalas street 14, Pinki and Joker Club, Katrinas street 12, Riga.'}
          </p>
        </div>
      </div>
    </section>
  );
} 