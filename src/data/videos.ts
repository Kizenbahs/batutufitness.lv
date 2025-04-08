interface Video {
  id: string;
  title: {
    lv: string;
    en: string;
  };
  description: {
    lv: string;
    en: string;
  };
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: {
      lv: 'Batutu fitnesa nodarbība',
      en: 'Trampoline Fitness Class'
    },
    description: {
      lv: 'Enerģiska nodarbība ar Aleksandru Kurusovu - kardio, spēks un līdzsvars!',
      en: 'Energetic class with Alexandra Kurusova - cardio, strength and balance!'
    },
    thumbnailUrl: '/batutu-fitness-thumb-001.webp',
    videoUrl: 'https://www.youtube.com/embed/pXdcwbWd5qU',
    date: '2024-03-20'
  },
  {
    id: '2',
    title: {
      lv: 'Ieskats batutu nodarbībā',
      en: 'Trampoline Class Preview'
    },
    description: {
      lv: 'Pilns batutu maratona apraksts un ieteikumi',
      en: 'Full trampoline marathon description and tips'
    },
    thumbnailUrl: '/batutu-fitness-thumb-002.webp',
    videoUrl: 'https://www.youtube.com/embed/CCBfoWdJdbE',
    date: '2024-03-19'
  },
  {
    id: '3',
    title: {
      lv: 'Batutu fitnesa treniņš',
      en: 'Trampoline Fitness Training'
    },
    description: {
      lv: 'Profesionāls batutu treniņš ar Aleksandru',
      en: 'Professional trampoline training with Alexandra'
    },
    thumbnailUrl: '/batutu-fitness-thumb-003.webp',
    videoUrl: 'https://www.youtube.com/embed/W982zF2ELSE',
    date: '2024-03-18'
  }
]; 