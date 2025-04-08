interface Route {
  path: string;
  labelLv: string;
  labelEn: string;
  isAnchor?: boolean;
}

export const routes: Route[] = [
  {
    path: '/schedule',
    labelLv: 'NODARBĪBAS',
    labelEn: 'SCHEDULE',
    isAnchor: true
  },
  {
    path: '/video',
    labelLv: 'VIDEO',
    labelEn: 'VIDEO',
    isAnchor: true
  },
  {
    path: '/about',
    labelLv: 'PAR MUMS',
    labelEn: 'ABOUT US',
    isAnchor: true
  },
  {
    path: '/marathon',
    labelLv: 'MARATONI',
    labelEn: 'MARATHONS'
  },
  {
    path: '/contact',
    labelLv: 'KONTAKTI',
    labelEn: 'CONTACTS',
    isAnchor: true
  }
];

export const getRouteLabel = (path: string, language: 'lv' | 'en'): string => {
  const route = routes.find(r => r.path === path);
  if (!route) return '';
  return language === 'lv' ? route.labelLv : route.labelEn;
};

export const isAnchorRoute = (path: string): boolean => {
  const route = routes.find(r => r.path === path);
  return route?.isAnchor || false;
}; 