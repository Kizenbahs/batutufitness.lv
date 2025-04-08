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
      lv: 'Vakara treniņš Piņķos',
      en: 'Evening Training in Pinki'
    },
    description: {
      lv: 'Intensīvs un motivējošs noslēgums darba dienai',
      en: 'Intensive and motivating end to the workday'
    },
    thumbnailUrl: '/batutu-fitness-thumb-001.webp',
    videoUrl: 'https://www.youtube.com/embed/pXdcwbWd5qU',
    date: '2024-03-20'
  },
  {
    id: '2',
    title: {
      lv: 'Dienas treniņš Piņķos',
      en: 'Daytime Training in Pinki'
    },
    description: {
      lv: 'Lielisks veids, kā izkustēties dienas vidū!',
      en: 'A great way to get moving in the middle of the day!'
    },
    thumbnailUrl: '/batutu-fitness-thumb-002.webp',
    videoUrl: 'https://www.youtube.com/embed/CCBfoWdJdbE',
    date: '2024-03-19'
  },
  {
    id: '3',
    title: {
      lv: 'Vakara treniņš Rīgā',
      en: 'Evening Training in Riga'
    },
    description: {
      lv: 'Enerģisks grupas treniņš galvaspilsētā!',
      en: 'Energetic group training in the capital city!'
    },
    thumbnailUrl: '/batutu-fitness-thumb-003.webp',
    videoUrl: 'https://www.youtube.com/embed/W982zF2ELSE',
    date: '2024-03-18'
  }
]; 