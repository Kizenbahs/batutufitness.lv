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
      lv: 'Batutu Fitness Nodarbība',
      en: 'Trampoline Fitness Class'
    },
    description: {
      lv: 'Enerģiska nodarbība ar Aleksandru Kurusovu - kardio, spēks un līdzsvars!',
      en: 'Energetic class with Alexandra Kurusova - cardio, strength and balance!'
    },
    thumbnailUrl: '/batutu-fitness-maratons.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-03-20'
  },
  {
    id: '2',
    title: {
      lv: 'Batutu Maratons',
      en: 'Trampoline Marathon'
    },
    description: {
      lv: 'Pilns batutu maratona apraksts un ieteikumi',
      en: 'Full trampoline marathon description and tips'
    },
    thumbnailUrl: '/batutu-fitness-maratons.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-03-19'
  },
  {
    id: '3',
    title: {
      lv: 'Batutu Treniņš',
      en: 'Trampoline Training'
    },
    description: {
      lv: 'Profesionāls batutu treniņš ar Aleksandru',
      en: 'Professional trampoline training with Alexandra'
    },
    thumbnailUrl: '/batutu-fitness-maratons.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-03-18'
  }
]; 