export interface ServiceItem {
  title: {
    tr: string;
    en: string;
  };
  href: string;
  icon: string;
}

export const servicesMenu: ServiceItem[] = [
  {
    title: {
      tr: 'Mühendislik Hizmetleri',
      en: 'Engineering Services',
    },
    href: '/services/engineering',
    icon: '⚙️',
  },
  {
    title: {
      tr: 'Müşavirlik Hizmetleri',
      en: 'Consultancy Services',
    },
    href: '/services/consultancy',
    icon: '✓',
  },
  {
    title: {
      tr: 'Danışmanlık Hizmetleri',
      en: 'Advisory Services',
    },
    href: '/services/advisory',
    icon: '📚',
  },
];
